// JavaScript خاص بالـ popup فقط
document.addEventListener('DOMContentLoaded', function() {
    let isLoggedIn = false;
    let hasSeenInitialPopup = false;
    let popupDismissedWithoutLogin = false; // متغير جديد لتتبع إغلاق popup بدون تسجيل
    
// زر التسجيل في الهيدر
const signUpButton = document.getElementById('sign-up-btn');



// اخفاء زر التسجيل
function hideSignUpButton() {
    if (signUpButton) {
        signUpButton.style.display = 'none';
        console.log('تم إخفاء زر التسجيل في الهيدر');
    }
}


if (localStorage.getItem('isLoggedIn') === 'true') {
    isLoggedIn = true;
    hideSignUpButton();
}
    // إظهار popup في بداية التشغيل
    setTimeout(() => {
        showLoginPopup(true);
        hasSeenInitialPopup = true;
        console.log('تم عرض popup البداية');
    }, 1000);


/////////////////////////////////////////////////////////

    // البحث عن جميع عناصر الفلاتر
    function attachFilterListeners() {
        // البحث بالاسم
        const nameFilter = document.getElementById('nameFilter');
        if (nameFilter) {
            ['focus', 'click', 'input'].forEach(event => {
                nameFilter.addEventListener(event, handleFilterInteraction);
            });
        }

        // جميع القوائم المنسدلة
        const selects = ['destinationFilter', 'cuisineFilter', 'peopleFilter', 'atmosphereFilter'];
        selects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                ['focus', 'click', 'change'].forEach(event => {
                    select.addEventListener(event, handleFilterInteraction);
                });
            }
        });

        // زر حذف الفلاتر
        const clearButton = document.querySelector('.btn-filter.btn-secondary');
        if (clearButton) {
            clearButton.addEventListener('click', handleFilterInteraction);
        }

        // زر البحث
        const searchButton = document.querySelector('.search-button');
        if (searchButton) {
            searchButton.addEventListener('click', handleFilterInteraction);
        }

        console.log('تم ربط مستمعي الأحداث للفلاتر');
    }

    // دالة التعامل مع تفاعل الفلاتر
    function handleFilterInteraction(e) {
        console.log('تم الضغط على فلتر، حالة التسجيل:', isLoggedIn);
        console.log('تم رؤية popup البداية:', hasSeenInitialPopup);
        console.log('تم إغلاق popup بدون تسجيل:', popupDismissedWithoutLogin);
        
        if (!isLoggedIn) {
            e.preventDefault(); // منع الحدث الافتراضي
            
            // إذا رأى popup البداية وأغلقه بدون تسجيل، اجعل popup إجباري
            if (hasSeenInitialPopup && popupDismissedWithoutLogin) {
                console.log('عرض popup إجباري');
                showLoginPopup(false); // false = إجباري
            } else {
                console.log('عرض popup عادي');
                showLoginPopup(true); // true = يمكن إغلاقه
            }
        }
    }

    // ربط المستمعين بعد تحميل الصفحة
    attachFilterListeners();

//    // دالة إظهار popup
//     function showLoginPopup(canClose = true) {
//         const popup = document.getElementById('popup-sign');
//         console.log('إظهار popup، يمكن إغلاقه:', canClose);
        
//         if (canClose) {
//             popup.classList.add('show-on-load');
//             popup.classList.remove('force-show');
//         } else {
//             popup.classList.add('force-show');
//             popup.classList.remove('show-on-load');
//         }
//         window.location.hash = '#popup-sign';
//     }

   // دالة إظهار popup
    // function showLoginPopup(canClose = true) {
    //     const popup = document.getElementById('popup-sign');
    //     console.log('إظهار popup، يمكن إغلاقه:', canClose);
        
    //     if (canClose) {
    //         popup.classList.add('show-on-load');
    //         popup.classList.remove('force-show');
    //     } else {
    //         popup.classList.add('force-show');
    //         popup.classList.remove('show-on-load');
    //     }
    //     window.location.hash = '#popup-sign';
    // }

    // // دالة إخفاء popup
    // function hideLoginPopup() {
    //     const popup = document.getElementById('popup-sign');
    //     popup.classList.remove('force-show', 'show-on-load');
    //     window.location.hash = '';
    //     console.log('تم إخفاء popup');
    // }

    // // التحكم في إغلاق popup
    // const closeButtons = document.querySelectorAll('.close-popup');
    // closeButtons.forEach(button => {
    //     button.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const popup = this.closest('.popup');
    //         console.log('محاولة إغلاق popup');
            
    //         // لا يمكن إغلاقه إذا كان إجباري
    //         if (popup && popup.classList.contains('force-show')) {
    //             console.log('لا يمكن إغلاق popup الإجباري');
    //             return;
    //         }
            
    //         // إغلاق popup البداية
    //         if (popup && popup.classList.contains('show-on-load')) {
    //             if (popup.id === 'popup-sign' && !isLoggedIn) {
    //                 popupDismissedWithoutLogin = true;
    //                 console.log('تم إغلاق popup البداية بدون تسجيل');
    //             }
    //             hideLoginPopup();
    //             return;
    //         }
            
    //         // إغلاق popup الشكر (تسجيل مكتمل)
    //         if (popup && popup.id === 'modal-thank') {
    //             isLoggedIn = true;
    //             console.log('تم التسجيل بنجاح');
    //             hideLoginPopup();
    //             return;
    //         }
            
    //         window.location.hash = '';
    //     });
    // });

    // // إغلاق popup عند الضغط خارجه
    // document.querySelectorAll('.popup').forEach(popup => {
    //     popup.addEventListener('click', function(e) {
    //         if (e.target === this) {
    //             // لا يمكن إغلاقه إذا كان إجباري
    //             if (this.classList.contains('force-show')) {
    //                 console.log('لا يمكن إغلاق popup الإجباري بالنقر خارجه');
    //                 return;
    //             }
                
    //             // إغلاق popup البداية
    //             if (this.classList.contains('show-on-load')) {
    //                 if (this.id === 'popup-sign' && !isLoggedIn) {
    //                     popupDismissedWithoutLogin = true;
    //                     console.log('تم إغلاق popup البداية بالنقر خارجه');
    //                 }
    //                 hideLoginPopup();
    //                 return;
    //             }
                
    //             window.location.hash = '';
    //         }
    //     });
    // });

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
        const response = await fetch('http://localhost:8080/api/v1/user/register', {
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
        const response = await fetch('http://localhost:8080/api/v1/user/verify', {
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
