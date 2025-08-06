// JavaScript خاص بالـ popup فقط - حل بسيط وفعال
document.addEventListener('DOMContentLoaded', function() {
    let isLoggedIn = false;
    let hasSeenInitialPopup = false;
    let popupDismissedWithoutLogin = false;
    let userName = ''; // اسم المستخدم

    // فحص التسجيل المحفوظ عند بداية الصفحة
    checkSavedLogin();

    // إظهار popup في بداية التشغيل (فقط إذا لم يكن مسجلاً)
    setTimeout(() => {
        if (!isLoggedIn) {
            showLoginPopup(true);
            hasSeenInitialPopup = true;
            console.log('تم عرض popup البداية');
        }
    }, 1000);

   // فحص التسجيل المحفوظ
    function checkSavedLogin() {
        try {
            const savedUserName = localStorage.getItem('spotn_user_name');
            const savedLoginStatus = localStorage.getItem('spotn_logged_in');

            if (savedUserName && savedLoginStatus === 'true') {
                userName = savedUserName;
                isLoggedIn = true;
                hasSeenInitialPopup = true; // لأنه مسجل بالفعل
                popupDismissedWithoutLogin = false;

                console.log('تم العثور على تسجيل محفوظ للمستخدم:', userName);
                updateHeaderButton();
            } else {
                console.log('لا يوجد تسجيل محفوظ');
            }
        } catch (error) {
            console.log('خطأ في قراءة البيانات المحفوظة:', error);
        }
    }

   // حفظ بيانات التسجيل
    function saveUserLogin(name) {
        try {
            localStorage.setItem('spotn_user_name', name);
            localStorage.setItem('spotn_logged_in', 'true');
            console.log('تم حفظ بيانات المستخدم:', name);
        } catch (error) {
            console.log('خطأ في حفظ البيانات:', error);
        }
    }

    // حذف بيانات التسجيل (للاستخدام المستقبلي إذا لزم الأمر)
    function clearUserLogin() {
        try {
            localStorage.removeItem('spotn_user_name');
            localStorage.removeItem('spotn_logged_in');
            console.log('تم حذف بيانات المستخدم');
        } catch (error) {
            console.log('خطأ في حذف البيانات:', error);
        }
    }

    // البحث عن جميع عناصر الفلاتر (للمعلومات فقط - لن تظهر popup)
    function attachFilterListeners() {
        // البحث بالاسم
        const nameFilter = document.getElementById('nameFilter');
        if (nameFilter) {
            ['focus', 'click', 'input'].forEach(event => {
                nameFilter.addEventListener(event, function() {
                    console.log('تم استخدام فلتر الاسم - لن تظهر نافذة');
                });
            });
        }

        // جميع القوائم المنسدلة
        const selects = ['destinationFilter', 'cuisineFilter', 'peopleFilter', 'atmosphereFilter'];
        selects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                ['focus', 'click', 'change'].forEach(event => {
                    select.addEventListener(event, function() {
                        console.log('تم استخدام فلتر:', selectId, '- لن تظهر نافذة');
                    });
                });
            }
        });

        // زر حذف الفلاتر
        const clearButton = document.querySelector('.btn-filter.btn-secondary');
        if (clearButton) {
            clearButton.addEventListener('click', function() {
                console.log('تم ضغط زر حذف الفلاتر - لن تظهر نافذة');
            });
        }

        // زر البحث
        const searchButton = document.querySelector('.search-button');
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                console.log('تم ضغط زر البحث - لن تظهر نافذة');
            });
        }

        console.log('تم ربط مستمعي الأحداث للفلاتر (بدون popup)');
    }

    // دالة مراقبة بطاقات المطاعم والكافيهات
    function attachRestaurantCardListeners() {
        // مراقبة التغييرات في container المطاعم
        const restaurantsContainer = document.getElementById('restaurantsContainer');
        if (restaurantsContainer) {
            // استخدام MutationObserver لمراقبة إضافة البطاقات الجديدة
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(function(node) {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                attachClickToRestaurantCard(node);
                            }
                        });
                    }
                });
            });

            observer.observe(restaurantsContainer, {
                childList: true,
                subtree: true
            });

            // ربط البطاقات الموجودة حالياً
            attachClickToExistingCards();
        }

        console.log('تم تفعيل مراقبة بطاقات المطاعم');
    }

    // دالة ربط الضغط على البطاقات الموجودة
    function attachClickToExistingCards() {
        const existingCards = document.querySelectorAll('.our-menu__raw .menu-card, .our-menu__raw .restaurant-card, .our-menu__raw .card');
        existingCards.forEach(card => {
            attachClickToRestaurantCard(card);
        });
    }

    // دالة ربط الضغط على بطاقة واحدة
    function attachClickToRestaurantCard(cardElement) {
        if (!cardElement || cardElement.classList.contains('popup-listener-added')) {
            return; // تجنب الإضافة المتكررة
        }

        // البحث عن عنصر قابل للضغط داخل البطاقة
        const clickableElements = [
            cardElement, // البطاقة نفسها
            cardElement.querySelector('a'), // رابط داخل البطاقة
            cardElement.querySelector('.card-link'), // رابط البطاقة
            cardElement.querySelector('.menu-item'), // عنصر القائمة
            cardElement.querySelector('img'), // الصورة
            cardElement.querySelector('.card-body'), // محتوى البطاقة
        ].filter(el => el !== null);

        clickableElements.forEach(element => {
            element.addEventListener('click', handleRestaurantCardClick);
        });

        // إضافة علامة أنه تم ربط المستمع
        cardElement.classList.add('popup-listener-added');
    }

    // دالة التعامل مع ضغط بطاقة مطعم/كافيه
    function handleRestaurantCardClick(e) {
        console.log('تم الضغط على بطاقة مطعم/كافيه، حالة التسجيل:', isLoggedIn);
        console.log('تم رؤية popup البداية:', hasSeenInitialPopup);
        console.log('تم إغلاق popup بدون تسجيل:', popupDismissedWithoutLogin);

        if (!isLoggedIn) {
            e.preventDefault(); // منع الانتقال للصفحة
            e.stopPropagation(); // منع انتشار الحدث

            // إذا رأى popup البداية وأغلقه بدون تسجيل، اجعل popup إجباري
            if (hasSeenInitialPopup && popupDismissedWithoutLogin) {
                console.log('عرض popup إجباري عند ضغط بطاقة المطعم');
                showLoginPopup(false); // false = إجباري
            } else {
                console.log('عرض popup عادي عند ضغط بطاقة المطعم');
                showLoginPopup(true); // true = يمكن إغلاقه
            }
            return false;
        } else {
            console.log('المستخدم مسجل - السماح بالانتقال للمطعم');
        }
    }

    // ربط زر تسجيل الدخول في الهيدر
    function attachHeaderSignupButton() {
        const signupBtn = document.getElementById('sign-up-btn');
        if (signupBtn) {
            signupBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('تم الضغط على زر تسجيل الدخول في الهيدر');

                if (!isLoggedIn) {
                    // إذا رأى popup البداية وأغلقه، اجعل النافذة عادية (يمكن إغلاقها)
                    showLoginPopup(true);
                } else {
                    console.log('المستخدم مسجل بالفعل - لن يظهر هذا الزر');
                    // هذا لن يحدث لأن الزر سيكون مختفياً
                }
            });

            console.log('تم ربط زر تسجيل الدخول في الهيدر');
        }
    }

    // دالة إظهار زر التسجيل (للاستخدام عند تسجيل الخروج مستقبلاً)
    function showSignupButton() {
        const headerButton = document.querySelector('.header__button');
        const userWelcome = document.getElementById('user-welcome');

        if (headerButton) {
            headerButton.style.display = 'block';
        }

        if (userWelcome) {
            userWelcome.remove();
        }

        console.log('تم إظهار زر التسجيل مرة أخرى');
    }

    // دالة تحديث زر الهيدر بعد التسجيل
    function updateHeaderButton() {
        const signupBtn = document.getElementById('sign-up-btn');
        const headerButton = document.querySelector('.header__button');

        if (signupBtn && isLoggedIn && userName) {
            // إخفاء الزر الأصلي تماماً
            if (headerButton) {
                headerButton.style.display = 'none';
            }

            // إنشاء عنصر جديد لعرض اسم المستخدم
            let userWelcome = document.getElementById('user-welcome');
            if (!userWelcome) {
                userWelcome = document.createElement('div');
                userWelcome.id = 'user-welcome';
                userWelcome.className = 'user-welcome';

                // إدراج العنصر الجديد مكان الزر القديم
                headerButton.parentNode.insertBefore(userWelcome, headerButton);
            }

            // تحديث محتوى الترحيب
            const shortName = userName.length > 8 ? userName.substring(0, 8) + '...' : userName;
            userWelcome.innerHTML = `<span class="user-greeting">  مرحبًا ${shortName}</span>`;

            // إضافة وظيفة للضغط (اختيارية)
            userWelcome.onclick = function(e) {
                e.preventDefault();
                console.log('المستخدم مسجل:', userName);
                // يمكن إضافة قائمة منسدلة أو صفحة ملف شخصي هنا
            };

            console.log('تم إخفاء زر التسجيل وإظهار ترحيب للمستخدم:', userName);
        }
    }

    // ربط المستمعين بعد تحميل الصفحة
    attachFilterListeners(); // للمعلومات فقط
    attachRestaurantCardListeners(); // الوظيفة الرئيسية للـ popup
    attachHeaderSignupButton(); // ربط زر الهيدر

    // دالة إظهار popup - محسنة
    function showLoginPopup(canClose = true) {
        const popup = document.getElementById('popup-sign');
        if (!popup) return;

        console.log('إظهار popup، يمكن إغلاقه:', canClose);

        // إخفاء جميع النوافذ أولاً
        hideAllPopups();

        // إظهار نافذة التسجيل مع تأخير صغير
        setTimeout(() => {
            popup.classList.remove('show-on-load', 'force-show');

            if (canClose) {
                popup.classList.add('show-on-load');
            } else {
                popup.classList.add('force-show');
            }

            popup.style.display = 'flex';
            popup.style.opacity = '1';
            popup.style.visibility = 'visible';

            const content = popup.querySelector('.popup__content');
            if (content) {
                content.style.opacity = '1';
                content.style.transform = 'scale(1)';
            }
        }, 50);
    }

    // دالة إخفاء جميع النوافذ - محسنة
    function hideAllPopups() {
        const allPopups = ['popup-sign', 'otp-verification', 'modal-thank'];
        allPopups.forEach(id => {
            const popup = document.getElementById(id);
            if (popup) {
                popup.classList.remove('show-on-load', 'force-show', 'open');
                popup.style.display = 'none';
                popup.style.opacity = '0';
                popup.style.visibility = 'hidden';

                const content = popup.querySelector('.popup__content');
                if (content) {
                    content.style.opacity = '0';
                    content.style.transform = 'scale(0.8)';
                }
            }
        });
        // مسح hash
        if (window.location.hash) {
            window.location.hash = '';
        }
    }

    // دالة إخفاء popup
    function hideLoginPopup() {
        hideAllPopups();
        console.log('تم إخفاء popup');
    }

    // دالة إظهار نافذة محددة - محسنة
    function showSpecificPopup(popupId) {
        hideAllPopups();

        const popup = document.getElementById(popupId);
        if (popup) {
            // إضافة الكلاسات مع تأخير صغير
            setTimeout(() => {
                popup.classList.add('open');
                popup.style.display = 'flex';
                popup.style.opacity = '1';
                popup.style.visibility = 'visible';

                const content = popup.querySelector('.popup__content');
                if (content) {
                    content.style.opacity = '1';
                    content.style.transform = 'scale(1)';
                }

                console.log('تم إظهار:', popupId);
            }, 50);
        }
    }

    // التحكم في إغلاق popup
    const closeButtons = document.querySelectorAll('.close-popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const popup = this.closest('.popup');
            if (!popup) return;

            console.log('محاولة إغلاق popup');

            // لا يمكن إغلاقه إذا كان إجباري
            if (popup.classList.contains('force-show')) {
                console.log('لا يمكن إغلاق popup الإجباري');
                // تأثير اهتزاز بسيط
                popup.style.animation = 'shake 0.3s ease-in-out';
                setTimeout(() => popup.style.animation = '', 300);
                return false;
            }

            // إغلاق popup البداية
            if (popup.classList.contains('show-on-load') || popup.id === 'popup-sign') {
                if (!isLoggedIn) {
                    popupDismissedWithoutLogin = true;
                    console.log('تم إغلاق popup البداية بدون تسجيل');
                }
                hideLoginPopup();
                return;
            }

            // إغلاق popup الشكر (تسجيل مكتمل)
            if (popup.id === 'modal-thank') {
                isLoggedIn = true;
                popupDismissedWithoutLogin = false;

                // حفظ بيانات المستخدم بشكل دائم
                saveUserLogin(userName);

                console.log('تم التسجيل بنجاح والحفظ:', userName);

                // تحديث زر الهيدر
                updateHeaderButton();

                hideLoginPopup();
                return;
            }

            // إغلاق عام
            hideAllPopups();
        });
    });

    // إغلاق popup عند الضغط خارجه
    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                e.stopPropagation();

                // لا يمكن إغلاقه إذا كان إجباري
                if (this.classList.contains('force-show')) {
                    console.log('لا يمكن إغلاق popup الإجباري بالنقر خارجه');
                    this.style.animation = 'shake 0.3s ease-in-out';
                    setTimeout(() => this.style.animation = '', 300);
                    return false;
                }

                // إغلاق popup البداية
                if (this.classList.contains('show-on-load') || this.id === 'popup-sign') {
                    if (!isLoggedIn) {
                        popupDismissedWithoutLogin = true;
                        console.log('تم إغلاق popup البداية بالنقر خارجه');
                    }
                    hideLoginPopup();
                    return;
                }

                hideAllPopups();
            }
        });
    });

    // تفعيل خانات OTP
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            e.target.value = value.replace(/[^0-9]/g, '');

            if (e.target.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
                e.target.classList.add('filled');
            } else {
                e.target.classList.remove('filled');
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace') {
                e.preventDefault();
                if (this.value === '' && index > 0) {
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].value = '';
                    otpInputs[index - 1].classList.remove('filled');
                } else {
                    this.value = '';
                    this.classList.remove('filled');
                }
            }

            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });

        // معالج اللصق
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text');
            const numbers = pasteData.replace(/[^0-9]/g, '').slice(0, otpInputs.length);

            otpInputs.forEach(inp => {
                inp.value = '';
                inp.classList.remove('filled');
            });

            numbers.split('').forEach((num, i) => {
                if (i < otpInputs.length) {
                    otpInputs[i].value = num;
                    otpInputs[i].classList.add('filled');
                }
            });

            const nextEmpty = numbers.length < otpInputs.length ? numbers.length : otpInputs.length - 1;
            if (otpInputs[nextEmpty]) {
                otpInputs[nextEmpty].focus();
            }
        });
    });

    // إعادة إرسال OTP
    const resendLink = document.querySelector('.resend-link');
    if (resendLink) {
        resendLink.addEventListener('click', function(e) {
            e.preventDefault();

            otpInputs.forEach(input => {
                input.value = '';
                input.classList.remove('filled');
            });

            if (otpInputs.length > 0) {
                otpInputs[0].focus();
            }

            const originalText = this.textContent;
            this.textContent = 'تم إرسال الرمز مرة أخرى';
            this.style.pointerEvents = 'none';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 3000);
        });
    }

    // التنقل بين مراحل التسجيل - بسيط وفعال
    const signupBtn = document.querySelector('#popup-sign .popup__btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // التحقق من البيانات
            const nameInput = document.querySelector('input[name="name"]');
            const phoneInput = document.querySelector('input[name="phone"]');

            let hasError = false;

            if (!nameInput || !nameInput.value.trim()) {
                if (nameInput) {
                    nameInput.classList.add('error');
                    nameInput.focus();
                }
                hasError = true;
            }

            if (!phoneInput || !phoneInput.value.trim()) {
                if (phoneInput) {
                    phoneInput.classList.add('error');
                    if (!hasError) phoneInput.focus();
                }
                hasError = true;
            }

            if (hasError) return;

            // حفظ اسم المستخدم مؤقتاً (سيتم التأكيد في النهاية)
            userName = nameInput.value.trim();

            console.log('الانتقال لمرحلة OTP، الاسم:', userName);

            // انتقال بسيط لنافذة OTP
            showSpecificPopup('otp-verification');

            setTimeout(() => {
                if (otpInputs.length > 0) {
                    otpInputs[0].focus();
                }
            }, 300);
        });
    }

    const otpBtn = document.querySelector('#otp-verification .popup__btn');
    if (otpBtn) {
        otpBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const allFilled = Array.from(otpInputs).every(input => input.value.length === 1);

            if (!allFilled) {
                otpInputs.forEach(input => {
                    if (!input.value) {
                        input.classList.add('error');
                    }
                });

                const firstEmpty = Array.from(otpInputs).find(input => !input.value);
                if (firstEmpty) {
                    firstEmpty.focus();
                }
                return;
            }

            console.log('الانتقال لصفحة الشكر');

            // انتقال بسيط لنافذة الشكر
            showSpecificPopup('modal-thank');
        });
    }

    // بعد إتمام التسجيل بنجاح
    const thankBtn = document.querySelector('#modal-thank .popup__btn');
    if (thankBtn) {
        thankBtn.addEventListener('click', function(e) {
            e.preventDefault();

            isLoggedIn = true;
            popupDismissedWithoutLogin = false;

            // حفظ بيانات المستخدم بشكل دائم
            saveUserLogin(userName);

            console.log('تم التسجيل بنجاح والحفظ الدائم للمستخدم:', userName);

            // تحديث زر الهيدر
            updateHeaderButton();

            hideLoginPopup();
        });
    }

    // إزالة كلاس الخطأ عند التفاعل
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('popup-input') || e.target.classList.contains('otp-input')) {
            e.target.classList.remove('error');
        }
    });

    document.addEventListener('focus', function(e) {
        if (e.target.classList.contains('popup-input') || e.target.classList.contains('otp-input')) {
            e.target.classList.remove('error');
        }
    });

    // منع الإرسال المباشر للفورم
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });

    // إضافة CSS للاهتزاز وإظهار النوافذ
    const additionalCSS = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    /* إصلاح إظهار النوافذ */
    .popup.open {
        opacity: 1 !important;
        visibility: visible !important;
        display: flex !important;
    }
    
    .popup.open .popup__content {
        opacity: 1 !important;
        transform: scale(1) !important;
    }
    
    .popup.show-on-load {
        opacity: 1 !important;
        visibility: visible !important;
        display: flex !important;
    }
    
    .popup.show-on-load .popup__content {
        opacity: 1 !important;
        transform: scale(1) !important;
    }
    
    .popup.force-show {
        opacity: 1 !important;
        visibility: visible !important;
        display: flex !important;
    }
    
    .popup.force-show .popup__content {
        opacity: 1 !important;
        transform: scale(1) !important;
    }
    
    /* إزالة الحدود الحمراء من النافذة الإجبارية */
    .popup.force-show .popup__content,
    .popup.force-show .popup__form,
    .popup.force-show .popup__input,
    .popup.force-show .popup-input,
    .popup.force-show input,
    .popup.force-show .otp-input {
        border-color: var(--clr5) !important;
        box-shadow: none !important;
    }
    
    .popup.force-show .popup__content {
        border: none !important;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
    }
    
    /* توسيط النافذة - حل بسيط */
    .popup {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    
    .popup__body {
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 30px 10px 50px !important;
    }
    
    .popup__content {
        position: relative !important;
        left: auto !important;
        right: auto !important;
        top: auto !important;
        bottom: auto !important;
        margin: 0 auto !important;
        transform: scale(0.8) !important;
    }
    
    .popup:target .popup__content,
    .popup.open .popup__content,
    .popup.show-on-load .popup__content,
    .popup.force-show .popup__content {
        transform: scale(1) !important;
    }
    
    /* تصميم عنصر الترحيب الجديد */
    .user-welcome {
        background-color:#ff8057;
         padding: 18px 27px;
  border-radius: 32px;
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        z-index: 12;
    }
    
    .user-welcome:hover {
        background-color:#032d70;
        transform: translateY(-2px);
     }
    
    .user-greeting {
        color: var(--clr1);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        white-space: nowrap;
    }
    
    /* تصميم للجوال */
    @media (max-width: 460px) {
        .user-welcome {
            padding: 8px 15px;
            border-radius: 20px;
        }
        
        .user-greeting {
            font-size: 14px;
        }
    }
    
    /* تصميم للشاشات المتوسطة */
    @media (max-width: 900px) {
        .user-welcome {
            margin-left: auto;
        }
    }
    
    /* إخفاء زر التسجيل الأصلي عند وجود ترحيب */
    .header__button[style*="display: none"] {
        display: none !important;
    }
    
    /* دالة التعامل مع تفاعل الفلاتر - تم إلغاؤها */
    function handleFilterInteraction(e) {
        // لن تظهر popup عند استخدام الفلاتر
        console.log('تم استخدام فلتر - لا تظهر نافذة popup');
    }
    `;

    if (!document.querySelector('#popup-fix-css')) {
        const style = document.createElement('style');
        style.id = 'popup-fix-css';
        style.textContent = additionalCSS;
        document.head.appendChild(style);
    }

    // دوال عامة
    window.showLoginPopup = showLoginPopup;
    window.hideLoginPopup = hideLoginPopup;
    window.clearUserLogin = clearUserLogin; // للاستخدام في حالات خاصة
    window.showSignupButton = showSignupButton; // لإظهار زر التسجيل مرة أخرى


});

// ربط خالد
//  تفعيل خانات OTP

const otpInputs = document.querySelectorAll('.otp-input');
otpInputs.forEach((input, index) => {
    input.addEventListener('input', function(e) {
        const value = e.target.value;
        e.target.value = value.replace(/[^0-9]/g, '');

        if (e.target.value.length === 1) {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
            e.target.classList.add('filled');
        } else {
            e.target.classList.remove('filled');
        }
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
            if (this.value === '' && index > 0) {
                otpInputs[index - 1].focus();
                otpInputs[index - 1].value = '';
                otpInputs[index - 1].classList.remove('filled');
            } else if (this.value !== '') {
                this.value = '';
                this.classList.remove('filled');
            }
            e.preventDefault();
        }

        if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
    });
});

// إعادة إرسال OTP
const resendLink = document.querySelector('.resend-link');
if (resendLink) {
    resendLink.addEventListener('click', function(e) {
        e.preventDefault();
        otpInputs.forEach(input => {
            input.value = '';
            input.classList.remove('filled');
        });
        if (otpInputs.length > 0) {
            otpInputs[0].focus();
        }
        this.textContent = 'تم إرسال الرمز مرة أخرى';
        setTimeout(() => {
            this.textContent = 'إعادة الإرسال';
        }, 3000);
    });
}

// التنقل بين مراحل التسجيل
document.getElementById('register-btn').addEventListener('click', async function(e) {
    e.preventDefault();

    const name = document.querySelector('#popup-sign input[name="name"]').value.trim();
    const phone = document.querySelector('#popup-sign input[name="phone"]').value.trim();

    if (!name || !phone) {
        alert('يرجى إدخال الاسم ورقم الجوال.');
        return;
    }

    try {
        const response = await fetch('https://spotn-backend-production.up.railway.app/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phoneNumber: phone
            })
        });

        const result = await response.json();
        console.log('Register response:', result);

        if (result && result.message) {
            // Store phone for verify step
            window.userPhoneForOtp = phone;
            window.userNameForWelcome = name;
            localStorage.setItem('userName', name);
            // Move to OTP screen
            window.location.hash = '#otp-verification';
        } else {
            alert('فشل في إرسال رمز التحقق. حاول مرة أخرى.');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ في الاتصال بالخادم.');
    }
});

document.getElementById('verify-btn').addEventListener('click', async function(e) {
    e.preventDefault();

    const otpInputs = document.querySelectorAll('#otp-verification .otp-input');
    let otpCode = '';
    otpInputs.forEach(input => {
        otpCode += input.value.trim();
    });

    if (otpCode.length < 4) {
        alert('يرجى إدخال الرمز المكون من 4 أرقام.');
        return;
    }

    const phone = window.userPhoneForOtp;
    if (!phone) {
        alert('رقم الجوال غير موجود. يرجى المحاولة من جديد.');
        return;
    }

    try {
        const response = await fetch('https://spotn-backend-production.up.railway.app/api/v1/user/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone,
                otp: otpCode
            })
        });

        const result = await response.json();
        console.log('Verify response:', result);

        if (result && result.message && result.message.toLowerCase().includes('verified')) {
            isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            hideSignUpButton();
            window.location.hash = '#modal-thank';
        } else {
            alert('الرمز غير صحيح أو منتهي. حاول مرة أخرى.');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ في الاتصال بالخادم.');
    }
});

// بعد إتمام التسجيل بنجاح
document.querySelector('#modal-thank .popup__btn').addEventListener('click', function() {
    isLoggedIn = true;
    popupDismissedWithoutLogin = false;
    localStorage.setItem('isLoggedIn', 'true');
    hideSignUpButton();
    console.log('تم التسجيل بنجاح - إخفاء popup');
    hideLoginPopup();
});

//////////////////////image at header ////////////////////////
class HeroSlideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoSlideDelay = 2000; // 4 seconds

        this.init();
    }

    init() {
        // Add click event listeners to indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoSlide();
            });
        });

        // Add touch support for mobile
        this.addTouchSupport();

        // Handle image loading
        this.handleImageLoading();

        // Start automatic slideshow
        this.startAutoSlide();
    }

    addTouchSupport() {
        const slideshow = document.querySelector('.slideshow-container');
        let startX = 0;
        let endX = 0;

        slideshow.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slideshow.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        slideshow.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent scrolling while swiping
        }, { passive: false });
    }

    handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - previous slide
                this.previousSlide();
            }
            this.resetAutoSlide();
        }
    }

    handleImageLoading() {
        const images = document.querySelectorAll('.slide__img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    }

    goToSlide(slideIndex) {
        // Remove active class from current slide and indicator
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        // Update current slide index
        this.currentSlide = slideIndex;

        // Add active class to new slide and indicator
        this.slides[this.currentSlide].classList.add('active', 'fade-in');
        this.indicators[this.currentSlide].classList.add('active');

        // Remove fade-in class after animation
        setTimeout(() => {
            this.slides[this.currentSlide].classList.remove('fade-in');
        }, 1000);
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }

    pauseAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    resetAutoSlide() {
        this.pauseAutoSlide();
        this.startAutoSlide();
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlideshow();
});

// Add smooth scroll behavior for the discover button
document.querySelector('.hero__btn').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#restaurant');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});

// Pause slideshow when page is not visible
document.addEventListener('visibilitychange', () => {
    const slideshow = document.querySelector('.hero__slideshow');
    if (slideshow && slideshow.slideshow) {
        if (document.hidden) {
            slideshow.slideshow.pauseAutoSlide();
        } else {
            slideshow.slideshow.startAutoSlide();
        }
    }
});
////////////////////////////////////
// header__burger
// Add this script before closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.menu');

    if (burger && menu) {
        burger.addEventListener('click', function() {
            // Toggle active class on burger
            burger.classList.toggle('active');
            // Toggle active class on menu
            menu.classList.toggle('active');

            console.log('Burger clicked!'); // For debugging
        });

        // Close menu when clicking on a menu link
        const menuLinks = document.querySelectorAll('.menu__link');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    } else {
        console.error('Burger or menu element not found!');
    }
});
