// Restaurant data with 50 restaurants - Complete list with individual images
 const restaurants = [

{
    name: "  على بالي",
    location: "أبها",
    destination: "مطعم",                    // ✅ مُصحح
    cuisine: "لبناني",                      // ✅ مُصحح
    atmosphere: "عائلية",                   // ✅ مُصحح
    image: "img/restaurants/rest01/main.png",
    rating: "★★★★☆",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B9%D9%84%D9%89%20%D8%A8%D8%A7%D9%84%D9%8A%20-%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJbe38WgBT4xURRfp9LZCKhkI",
    gallery: [
        "img/restaurants/rest01/gallery1.png",
        "img/restaurants/rest01/gallery2.png",
        "img/restaurants/rest01/gallery3.png",
        "img/restaurants/rest01/gallery4.png"
    ],
    menuUrl: "https://e-menu.itb-me.com/Emenu/650062003500370033003400650036002D0064003800650064002D0034003000350036002D0061006200620066002D00660039003500660064003200660039003700300031003900",
    workingHours: {                         // ✅ مُضاف
        weekdays: "ص11 - م11"
    },
    priceRange: "22 - 150 ريال",           // ✅ مُضاف
    services: "توصيل - دين إن - تيك أواي"  // ✅ مُضاف
},

        {
        name: "  كرمنا  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "لبناني",  
        atmosphere: "رومانسي",
        image: "img/restaurants/rest02/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D9%83%D8%B1%D9%85%D9%86%D8%A7&query_place_id=ChIJcezOOgBV4xURgj28i3Z1REk",
        gallery: [
        "img/restaurants/rest02/gallery1.png",
        "img/restaurants/rest02/gallery2.png",
        "img/restaurants/rest02/gallery3.png",
        "img/restaurants/rest02/gallery4.png"
        ],
        menuUrl: "https://mymenus.site/menu/karamna-ksa/67d3f4cda8982?fbclid=PAQ0xDSwKKvK1leHRuA2FlbQIxMQABp_rb1R4l4yhwXeG_Od_zGC9AYgJYnFPWBfXHWUgXQu2LujTbGJ2CX7E4Xdfw_aem_2huJzcWs9G7PKne3n8pgvQ",
        workingHours: {
        weekdays: "م1 الى ص2"
        },
        priceRange: "35 - 187 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "  أوليف جاردن ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "إيطالي",
        atmosphere: "رومانسي",
        image: "img/restaurants/rest03/main.png",
        rating: "★★★★★",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%A3%D9%88%D9%84%D9%8A%D9%81%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJg6hoh6xV4xUR7eJ3Epd0X2o",
        gallery: [
        "img/restaurants/rest03/gallery1.png",
        "img/restaurants/rest03/gallery2.png",
        "img/restaurants/rest03/gallery3.png",
        "img/restaurants/rest03/gallery4.png"
        ],
        menuUrl: "https://www.olivegarden.sa/",
        workingHours: {
        weekdays: "م1 الى ص1:30"
        },
        priceRange: "39 - 124 ريال",
        services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },



        {
        name: "تشيللو برندة ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "ايطالي",
        atmosphere: "رومانسي",
        image: "img/restaurants/rest04/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D8%B4%D9%8A%D9%84%D9%84%D9%88%20%D8%A8%D8%B1%D9%86%D8%AF%D8%A9&query_place_id=ChIJSRKL4ZZX4xURZ6w_ZORjoLU",
        gallery: [
        "img/restaurants/rest04/gallery1.png",
        "img/restaurants/rest04/gallery2.png",
        "img/restaurants/rest04/gallery3.png",
        "img/restaurants/rest04/gallery4.png"
        ],
        menuUrl: "https://www.cello.sa/",
        workingHours: {
        weekdays: "م12:30 الى ص2"
        },
        priceRange: "39 - 135 ريال",
        services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "مطعم سدف  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "عربي",
        atmosphere: "خفيفة",
        image: "img/restaurants/rest05/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B3%D8%AF%D9%81&query_place_id=ChIJfwHYIBJV4xURRCNswmvlybo",
        gallery: [
        "img/restaurants/rest05/gallery1.png",
        "img/restaurants/rest05/gallery2.png",
        "img/restaurants/rest05/gallery3.png",
        "img/restaurants/rest05/gallery4.png"
        ],
        menuUrl: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDQ4NDg2ODI2NjU4NTIz?igsh=MW1sZG1iejg3NXY0Yw==",
        workingHours: {
        weekdays: "على مدار 24 ساعة"
        },
        priceRange: "35 - 90 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },
        
 

        {
        name: "حنيذ ملة",
        location: "أبها",
        destination: "مطعم",
        cuisine: "شعبي",
        atmosphere: "خفيفة",
        image: "img/restaurants/rest06/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AD%D9%86%D9%8A%D8%B0%20%D9%85%D9%84%D8%A9%20%7C%20%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%20%D8%A5%D8%B3%D8%AA%D9%84%D8%A7%D9%85&query_place_id=ChIJU4SgEwBT4xURVBA0jORQSgI",
        gallery: [
        "img/restaurants/rest06/gallery1.png",
        "img/restaurants/rest06/gallery2.png",
        "img/restaurants/rest06/gallery3.png",
        "img/restaurants/rest06/gallery4.png"
        ],
        menuUrl: "http://mallah.tryorder.net/",
        workingHours: "م12:30 الى م12:30",
        priceRange: "80 - 1200 ريال",
        services: "الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


// التصنيف خطأ ولكن للتجربه
        {
        name: "لوفوياج  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "فرنسي",
        atmosphere: "رومانسي",
        image: "img/restaurants/rest07/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%84%D9%88%D9%81%D9%88%D9%8A%D8%A7%D8%AC&query_place_id=ChIJ-QL3VgGr_BURsZrVEQ3qN64",
        gallery: [
        "img/restaurants/rest07/gallery1.png",
        "img/restaurants/rest07/gallery2.png",
        "img/restaurants/rest07/gallery3.png",
        "img/restaurants/rest07/gallery4.png"
        ],
        menuUrl: "https://le-voyage.yallaqrcodes.com/branch/1/menu/",
        workingHours: {
        weekdays: "ص7 الى ص1"
        },
        priceRange: "24 - 110 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
        name: "تو بورشنز | TWO PORTIONS  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "امريكي",
        image: "img/restaurants/rest08/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%88%20%D8%A8%D9%88%D8%B1%D8%B4%D9%86%D8%B2%20%7C%20TWO%20PORTIONS&query_place_id=ChIJG8D5Njmr_BUR-wjYfWNJsZM",
        gallery: [
        "img/restaurants/rest08/gallery1.png",
        "img/restaurants/rest08/gallery2.png",
        "img/restaurants/rest08/gallery3.png",
        "img/restaurants/rest08/gallery4.png"
        ],
        menuUrl: "https://drive.google.com/file/d/11zSu4QHJQopHZOt-Stgx9u3uXRK1j8OS/view?usp=drivesdk",
        workingHours: {
        weekdays: "م4 الى ص2"
        },
        priceRange: "7 - 32 ريال",
        services: "التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
        name: "  فلق",
        location: "أبها",
        destination: "مطعم",
        cuisine: "عربي",
        atmosphere: "خفيفة",
        image: "img/restaurants/rest09/main.png",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D9%81%D9%84%D9%82&query_place_id=ChIJzUOX7Yyr_BUR9jDXgdOarAs",
        gallery: [
        "img/restaurants/rest09/gallery1.png",
        "img/restaurants/rest09/gallery2.png",
        "img/restaurants/rest09/gallery3.png",
        "img/restaurants/rest09/gallery4.png"
        ],
        menuUrl: "https://qr.finedinemenu.com/IvJOjV4Jl?table=sample",
        workingHours: {
        weekdays: "ص5 الى م5"
        },
        priceRange: "38 - 71 ريال",
        services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
        name: "  سينسو  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "إيطالي",
        atmosphere: "خفيفة",
        image: "img/restaurants/rest10/main.png",
        rating: "★★★★★",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B3%D9%8A%D9%86%D8%B3%D9%88%20-%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJB8VXVgBT4xURGQbpmGsUDEU",
        gallery: [
        "img/restaurants/rest10/gallery1.png",
        "img/restaurants/rest10/gallery2.png",
        "img/restaurants/rest10/gallery3.png",
        "img/restaurants/rest10/gallery4.png"
        ],
        menuUrl: "https://e-menu.itb-me.com/Menu/380033006600350030006400390037002D0039003500620037002D0034006500390065002D0061003200640065002D00650032006300360061006300320032003400650064003700",
        workingHours: "ص7 الى ص11, م12:30 الى ص12",
        priceRange: "48 - 186 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        },

           {
        name: "  اختبار مطعم 1  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "إيطالي",
        atmosphere: "خفيفة",
        image: "img/restaurants/rest20/main.jpg",
        rating: "★★★★★",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B3%D9%8A%D9%86%D8%B3%D9%88%20-%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJB8VXVgBT4xURGQbpmGsUDEU",
        gallery: [
        "img/restaurants/rest20/gallery1.jpg",
        "img/restaurants/rest20/gallery2.jpg",
        "img/restaurants/rest20/gallery3.jpg",
        "img/restaurants/rest20/gallery4.jpg"
        ],
        menuUrl: "https://e-menu.itb-me.com/Menu/380033006600350030006400390037002D0039003500620037002D0034006500390065002D0061003200640065002D00650032006300360061006300320032003400650064003700",
        workingHours: "ص7 الى ص11, م12:30 الى ص12",
        priceRange: "48 - 186 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        },

           {
        name: "  اختبار مطعم2  ",
        location: "أبها",
        destination: "مطعم",
        cuisine: "إيطالي",
        atmosphere: "خفيفة",
        image: "img/restaurants/rest20/main.jpg",
        rating: "★★★★★",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B3%D9%8A%D9%86%D8%B3%D9%88%20-%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJB8VXVgBT4xURGQbpmGsUDEU",
        gallery: [
        "img/restaurants/rest20/gallery1.jpg",
        "img/restaurants/rest20/gallery2.jpg",
        "img/restaurants/rest20/gallery3.jpg",
        "img/restaurants/rest20/gallery4.jpg"
        ],
        menuUrl: "https://e-menu.itb-me.com/Menu/380033006600350030006400390037002D0039003500620037002D0034006500390065002D0061003200640065002D00650032006300360061006300320032003400650064003700",
        workingHours: "ص7 الى ص11, م12:30 الى ص12",
        priceRange: "48 - 186 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        }

        ];

// Cafe data with unique information for each place
const cafes = [
  

         {
        name: "مقهى بكر | BKR CAFE ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
         atmosphere: "خفيفة",
        image: "img/cafes/cafe01/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D9%82%D9%87%D9%89%20%D8%A8%D9%83%D8%B1%20%7C%20BKR%20CAFE&query_place_id=ChIJ52e_SUBV4xURVex0scjDrr0",
        gallery: [
        "img/cafes/cafe01/gallery1.jpg",
        "img/cafes/cafe01/gallery2.jpeg",
        "img/cafes/cafe01/gallery3.jpg",
        "img/cafes/cafe01/gallery4.jpg"
        ],
        menuUrl: "https://instagram.com/bkr_sa?r=nametag",
        workingHours: {
        weekdays:"ص7 الى ص1"

        },
        priceRange: null,
        services: "التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "زهو ZHU ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
         atmosphere: "خفيفة",
        image: "img/cafes/cafe02/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B2%D9%87%D9%88%20ZHU&query_place_id=ChIJATR-pb9V4xURIv6qrHl7GEw",
        gallery: [
        "img/cafes/cafe02/gallery1.jpg",
        "img/cafes/cafe02/gallery2.jpg",
        "img/cafes/cafe02/gallery3.jpg",
        "img/cafes/cafe02/gallery4.jpg"
        ],
        menuUrl: "https://jorryelite.com/",
        workingHours: {
        weekdays: "ص7 الى ص1"
        },
        priceRange: "10 - 29 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "9BAR | ٩ بار   ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
         atmosphere: "خفيفة",
        image: "img/cafes/cafe03/main.jpeg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=9BAR%20%7C%20%D9%A9%20%D8%A8%D8%A7%D8%B1%20-%20%D9%81%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AD%D8%B2%D8%A7%D9%85&query_place_id=ChIJXffD0bBV4xURLnq0FL5Vr-8",
        gallery: [
        "img/cafes/cafe03/gallery1.jpeg",
        "img/cafes/cafe03/gallery2.jpeg",
        "img/cafes/cafe03/gallery3.jpeg",
        "img/cafes/cafe03/gallery4.jpeg"
        ],
        menuUrl: "https://9bar.easymenu.site/",
        workingHours: {
        weekdays: "ص7:30 الى ص1"
        },
        priceRange: "10 - 105 ريال",
        services: "خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },

        {
        name: "Caffeine Lab   ",
        location: "أبها",
        tyep: "قهوة",
        destination: "كافيه", 
         atmosphere: null,
        image: "img/cafes/cafe04/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Caffeine%20Lab&query_place_id=ChIJ3-sCVwBV4xURg2H8I0hpuiU",
        gallery: [
        "img/cafes/cafe04/gallery1.jpg",
        "img/cafes/cafe04/gallery2.jpg",
        "img/cafes/cafe04/gallery3.jpg",
        "img/cafes/cafe04/gallery4.jpg"
        ],
        menuUrl: "http://caffeinelab.me/",
        workingHours: {
        weekdays: "ص12 الى ص8"
        },

        priceRange: null,
        services: "الإيصال إلى السيارة - التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "Hyz Bakehouse    ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
         atmosphere: "خفيفة",
        image: "img/cafes/cafe05/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hyz%20Bakehouse&query_place_id=ChIJ76u7NwBV4xURcIko4wj_UN8",
        gallery: [
        "img/cafes/cafe05/gallery1.jpg",
        "img/cafes/cafe05/gallery2.jpg",
        "img/cafes/cafe05/gallery3.jpg",
        "img/cafes/cafe05/gallery4.jpg"
        ],
        menuUrl: "https://jorryelite.com/",
        workingHours: {
        weekdays: "ص6 الى م6"
        },
        priceRange: "9 - 23 ريال",
        services: "التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        },


        {
        name: "ROW | رو    ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
         atmosphere: "خفيفة",
        image: "img/cafes/cafe06/main.png",
        rating: "★★★☆☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=ROW%20%7C%20%D8%B1%D9%88&query_place_id=ChIJCaAxbABT4xURTK5K9JoEopE",
        gallery: [
        "img/cafes/cafe06/gallery1.jpg",
        "img/cafes/cafe06/gallery2.jpg",
        "img/cafes/cafe06/gallery3.jpg",
        "img/cafes/cafe06/gallery4.jpg"
        ],
        menuUrl: "http://linktr.ee/rowcafe",
        workingHours: {
        weekdays: "نعمل على مدار 24 ساعة"
        },
        priceRange: "10 - 40 ريال",
        services: "خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "دكّة شاي",
        location: "أبها",
        type: "شاي",
        destination: "كافيه", 
         atmosphere: " خفيفة",
        image: "img/cafes/cafe07/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AF%D9%83%D9%91%D8%A9%20%D8%B4%D8%A7%D9%8A&query_place_id=ChIJv5TeFIap_BUReD4w40l9T4o",
        gallery: [
        "img/cafes/cafe07/gallery1.jpg",
        "img/cafes/cafe07/gallery2.jpg",
        "img/cafes/cafe07/gallery3.jpg",
        "img/cafes/cafe07/gallery4.jpg"
        ],
        menuUrl: "https://instagram.com/tea.dakkah?utm_medium=copy_link",
        workingHours: {
        weekdays: "4م2:30 الى ص" 
        },
        priceRange: "4 - 18 ريال",
        services: "طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "وزاب كافيه  ",
        location: "أبها",
        type: "شاي",
        destination: "كافيه", 
        atmosphere: "خفيفة",
        image: "img/cafes/cafe08/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%88%D8%B2%D8%A7%D8%A8%20%D9%83%D8%A7%D9%81%D9%8A%D9%87&query_place_id=ChIJnZGixy-p_BURZS_OblMnXXU",
        gallery: [
        "img/cafes/cafe08/gallery1.jpg",
        "img/cafes/cafe08/gallery2.jpg",
        "img/cafes/cafe08/gallery3.jpg",
        "img/cafes/cafe08/gallery4.jpg"
        ],
        menuUrl: "https://online.pubhtml5.com/btejg/lhlq/#p=2",
        workingHours: {
        weekdays: "2م4 الى ص"
        },
        priceRange: "6 - 29 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "مكان حمد   ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
        atmosphere: "خفيفة",
        image: "img/cafes/cafe09/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D9%83%D8%A7%D9%86%20%D8%AD%D9%85%D8%AF&query_place_id=ChIJd-45se5V-xURkq8sfT6bZZg",
        gallery: [
        "img/cafes/cafe09/gallery1.jpg",
        "img/cafes/cafe09/gallery2.jpg",
        "img/cafes/cafe09/gallery3.jpg",
        "img/cafes/cafe09/gallery4.jpg"
        ],
        menuUrl: "https://drive.google.com/file/d/1YXw8Qfm5IdDY_voQ70hSns3Mr2XP4YeR/view?usp=drivesdk",
        workingHours: {
        weekdays: "م4 الى ص1:30"
        },
        priceRange: "5 - 48 ريال",
        services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },


        {
        name: "شوقر هايف  ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
        atmosphere: "راقية",
        image: "img/cafes/cafe10/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
        gallery: [
        "img/cafes/cafe10/gallery1.jpg",
        "img/cafes/cafe10/gallery2.jpg",
        "img/cafes/cafe10/gallery3.jpg",
        "img/cafes/cafe10/gallery4.jpg"
        ],
        menuUrl: "https://oddmenu.com/ar/p/sugarhive",
        workingHours: {
        weekdays: "م4 الى ص4"
        },
        priceRange: "7 - 31 ريال",
        services: ""
        },
        {
        name: "اختبار كافيه 1 ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
        atmosphere: "راقية",
        image: "img/cafes/cafe10/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
        gallery: [
        "img/cafes/cafe10/gallery1.jpg",
        "img/cafes/cafe10/gallery2.jpg",
        "img/cafes/cafe10/gallery3.jpg",
        "img/cafes/cafe10/gallery4.jpg"
        ],
        menuUrl: "https://oddmenu.com/ar/p/sugarhive",
        workingHours: {
        weekdays: "م4 الى ص4"
        },
        priceRange: "7 - 31 ريال",
        services: ""
        },
        {
        name: "اختبار كافيه 2 ",
        location: "أبها",
        type: "قهوة",
        destination: "كافيه", 
        atmosphere: "راقية",
        image: "img/cafes/cafe10/main.jpg",
        rating: "★★★★☆",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
        gallery: [
        "img/cafes/cafe10/gallery1.jpg",
        "img/cafes/cafe10/gallery2.jpg",
        "img/cafes/cafe10/gallery3.jpg",
        "img/cafes/cafe10/gallery4.jpg"
        ],
        menuUrl: "https://oddmenu.com/ar/p/sugarhive",
        workingHours: {
        weekdays: "م4 الى ص4"
        },
        priceRange: "7 - 31 ريال",
        services: ""
        }
        ];
     
// Global variables
let allPlaces = [...restaurants, ...cafes];
let filteredRestaurants = [...allPlaces];
let currentPage = 1;
const itemsPerPage = 8;

/**
 * Creates HTML for a restaurant card
 */
function createRestaurantCard(restaurant, globalIndex) {
    const restaurantIndex = restaurants.indexOf(restaurant);
    const restaurantId = `rest${restaurantIndex + 1}`;
    const restaurantNumber = String(restaurantIndex + 1).padStart(2, '0');
    
    // Check if restaurant index is 10 or higher (11+)
    const isComingSoon = restaurantIndex >= 10;
    const linkUrl = isComingSoon ? 'coming.html' : `details.html?id=${restaurantId}`;
    
    return `
        <a href="${linkUrl}" class="our-menu__column" id="${restaurantId}" style="text-decoration: none; color: inherit;">
            <span class="resturant-color">${restaurantNumber}</span>
            <div class="our-menu__items">
                <div class="our-menu__image">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="our-menu__img img">
                    ${isComingSoon ? '<div class="coming-soon-badge"></div>' : ''}
                </div>
                <h3>${restaurant.destination}</h3>
                <p>${restaurant.name}</p>
                <ul class="our-menu__list">
                    <li class="our-menu__item">
                        الموقع : ${restaurant.location}
                    </li>
                    <li class="our-menu__item">
                        تصنيف الأكل : ${restaurant.cuisine}
                    </li>
                    <li class="our-menu__item">
                        الأجواء : ${restaurant.atmosphere}
                    </li>
                    <li class="our-menu__item">
                        التقييمات : ${restaurant.rating}
                    </li>
                </ul>
            </div>
        </a>
    `;
}

/**
 * Creates HTML for a cafe card
 */
function createCafeCard(cafe, globalIndex) {
    const cafeIndex = cafes.indexOf(cafe);
    const cafeId = `cafe${cafeIndex + 1}`;
    const cafeNumber = String(cafeIndex + 1).padStart(2, '0');
    
    // Check if cafe index is 10 or higher (11+)
    const isComingSoon = cafeIndex >= 10;
    const linkUrl = isComingSoon ? 'coming.html' : `details.html?id=${cafeId}`;
    
    return `
        <a href="${linkUrl}" class="our-menu__column" id="${cafeId}" style="text-decoration: none; color: inherit;">
            <span class="coffee-color">${cafeNumber}</span>
            <div class="our-menu__items">
                <div class="our-menu__image">
                    <img src="${cafe.image}" alt="${cafe.name}" class="our-menu__img img">
                    ${isComingSoon ? '<div class="coming-soon-badge"></div>' : ''}
                </div>
                <h3>${cafe.destination}</h3>
                <p>${cafe.name}</p>
                <ul class="our-menu__list">
                    <li class="our-menu__item">
                        الموقع : ${cafe.location}
                    </li>
                    <li class="our-menu__item">
                        النوع : ${cafe.type}
                    </li>
                    <li class="our-menu__item">
                        الأجواء : ${cafe.atmosphere}
                    </li>
                    <li class="our-menu__item">
                        التقييمات : ${cafe.rating}
                    </li>
                </ul>
            </div>
        </a>
    `;
}

/**
 * Creates HTML for any place (restaurant or cafe)
 */
function createPlaceCard(place, globalIndex) {
    if (place.destination === "مطعم") {
        return createRestaurantCard(place, globalIndex);
    } else if (place.destination === "كافيه") {
        return createCafeCard(place, globalIndex);
    }
}

/**
 * Get paginated places for current page
 */
function getPaginatedRestaurants() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return filteredRestaurants.slice(startIndex, endIndex).map((place, localIndex) => {
        const globalIndex = filteredRestaurants.indexOf(place);
        return { place, globalIndex };
    });
}

/**
 * Get total number of pages
 */
function getTotalPages() {
    return Math.ceil(filteredRestaurants.length / itemsPerPage);
}

/**
 * Creates pagination HTML
 */
function createPaginationHTML() {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return '';

    let paginationHTML = '<div class="pagination">';
    
    paginationHTML += `
        <button class="pagination-btn prev-btn" ${currentPage === 1 ? 'disabled' : ''} 
                onclick="changePage(${currentPage - 1})">
        </button>
    `;

    const maxVisiblePages = window.innerWidth <= 768 ? 3 : 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += '<span class="pagination-ellipsis">...</span>';
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const isActive = i === currentPage ? 'active' : '';
        const hideOnMobile = window.innerWidth <= 480 && Math.abs(i - currentPage) > 1 ? 'hide-mobile' : '';
        paginationHTML += `
            <button class="pagination-btn ${isActive} ${hideOnMobile}" 
                    onclick="changePage(${i})">${i}</button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += '<span class="pagination-ellipsis">...</span>';
        }
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    paginationHTML += `
        <button class="pagination-btn next-btn" ${currentPage === totalPages ? 'disabled' : ''} 
                onclick="changePage(${currentPage + 1})">
        </button>
    `;

    paginationHTML += '</div>';
    return paginationHTML;
}

/**
 * Updates pagination info text
 */
function updatePaginationInfo() {
    const totalPages = getTotalPages();
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredRestaurants.length);
    
    const paginationInfo = document.getElementById('paginationInfo');
    if (paginationInfo) {
        if (filteredRestaurants.length === 0) {
            paginationInfo.textContent = 'لا توجد نتائج';
        } else {
            paginationInfo.textContent = `عرض ${startItem}-${endItem} من أصل ${filteredRestaurants.length} مكان (صفحة ${currentPage} من ${totalPages})`;
        }
    }
}

/**
 * Renders the filtered places to the DOM with pagination
 */
function renderRestaurants() {
    const container = document.getElementById('restaurantsContainer');
    const noResults = document.getElementById('noResults');
    const resultsInfo = document.getElementById('resultsInfo');
    const paginationContainer = document.getElementById('paginationContainer');
    
    if (!container) {
        console.error('Restaurant container not found');
        return;
    }
    
    if (filteredRestaurants.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (resultsInfo) resultsInfo.textContent = 'لا توجد نتائج';
        if (paginationContainer) paginationContainer.innerHTML = '';
    } else {
        if (noResults) noResults.style.display = 'none';
        
        const paginatedPlaces = getPaginatedRestaurants();
        
        container.innerHTML = paginatedPlaces.map(({place, globalIndex}) => 
            createPlaceCard(place, globalIndex)
        ).join('');
        
        if (resultsInfo) {
            const restaurantCount = filteredRestaurants.filter(p => p.destination === "مطعم").length;
            const cafeCount = filteredRestaurants.filter(p => p.destination === "كافيه").length;
            resultsInfo.textContent = `عرض ${restaurantCount} مطعم و ${cafeCount} كافيه من أصل ${allPlaces.length}`;
        }
        
        if (paginationContainer) {
            paginationContainer.innerHTML = createPaginationHTML();
        }
        
        updatePaginationInfo();
        
        if (currentPage > 1) {
            const restaurantSection = document.querySelector('.our-menu');
            if (restaurantSection) {
                restaurantSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
    
    console.log(`عرض ${filteredRestaurants.length} مكان من أصل ${allPlaces.length} مكان`);
    console.log(`الصفحة الحالية: ${currentPage} من أصل ${getTotalPages()} صفحة`);
}

/**
 * Changes the current page
 */
function changePage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderRestaurants();
}

/**
 * Applies all active filters to the places list
 */
function applyFilters() {
    const locationFilter = document.getElementById('locationFilter')?.value || '';
    const destinationFilter = document.getElementById('destinationFilter')?.value || '';
    const cuisineFilter = document.getElementById('cuisineFilter')?.value || '';
    const atmosphereFilter = document.getElementById('atmosphereFilter')?.value || '';
    const nameFilter = document.getElementById('nameFilter')?.value.toLowerCase() || '';
    const peopleFilter = document.getElementById('peopleFilter')?.value || '';
    
    filteredRestaurants = allPlaces.filter(place => {
        const matchesLocation = !locationFilter || place.location === locationFilter;
        const matchesDestination = !destinationFilter || place.destination === destinationFilter;
        const matchesAtmosphere = !atmosphereFilter || place.atmosphere === atmosphereFilter;
        const matchesName = !nameFilter || place.name.toLowerCase().includes(nameFilter);
        
        // Only apply cuisine filter to restaurants
        let matchesCuisine = true;

        if (destinationFilter === 'مطعم') {
             matchesCuisine = !cuisineFilter || place.cuisine === cuisineFilter;
      } else if (destinationFilter === 'كافيه') {
                matchesCuisine = !cuisineFilter || place.type === cuisineFilter;
    }
        
        return matchesLocation && matchesDestination && matchesCuisine && matchesAtmosphere && matchesName;
    });
    
    currentPage = 1;
    renderRestaurants();
}

const restaurantCuisines = [
  '', 'شعبي', 'إيطالي', 'عربي', 'آسيوي', 'أمريكي', 'مكسيكي', 'تركي', 'هندي', 'لبناني'
];

const cafeStyles = [
  '', 'شاي', 'قهوة' 
];

function updateCuisineOptions() {
  const destination = document.getElementById('destinationFilter').value;
  const cuisineSelect = document.getElementById('cuisineFilter');

  cuisineSelect.innerHTML = '';

  if (!destination) {
    cuisineSelect.disabled = true;
    cuisineSelect.innerHTML = '<option value="">-- اختر النوع --</option>';
    return;
  }

  const options = destination === 'مطعم' ? restaurantCuisines : cafeStyles;

  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option || '-- اختر النوع --';
    cuisineSelect.appendChild(opt);
  });

  cuisineSelect.disabled = false;
}

/**
 * Clears all filters and shows all places
 */
function clearFilters() {
    const locationFilter = document.getElementById('locationFilter');
    const destinationFilter = document.getElementById('destinationFilter');
    const cuisineFilter = document.getElementById('cuisineFilter');
    const atmosphereFilter = document.getElementById('atmosphereFilter');
    const nameFilter = document.getElementById('nameFilter');
    const peopleFilter = document.getElementById('peopleFilter');
    
    if (locationFilter) locationFilter.value = '';
    if (destinationFilter) destinationFilter.value = '';
    if (cuisineFilter) cuisineFilter.value = '';
    if (atmosphereFilter) atmosphereFilter.value = '';
    if (nameFilter) nameFilter.value = '';
    if (peopleFilter) peopleFilter.value = '';
    
    filteredRestaurants = [...allPlaces];
    currentPage = 1;
    renderRestaurants();
}

/**
 * Sets up event listeners for filter elements
 */
function setupEventListeners() {
    const nameFilter = document.getElementById('nameFilter');
    const locationFilter = document.getElementById('locationFilter');
    const destinationFilter = document.getElementById('destinationFilter');
    const cuisineFilter = document.getElementById('cuisineFilter');
    const atmosphereFilter = document.getElementById('atmosphereFilter');
    const peopleFilter = document.getElementById('peopleFilter');
    
    if (nameFilter) {
        nameFilter.addEventListener('input', applyFilters);
    }
    if (locationFilter) {
        locationFilter.addEventListener('change', applyFilters);
    }
    if (destinationFilter) {
    destinationFilter.addEventListener('change', () => {
        updateCuisineOptions();
        applyFilters();
    });
}
    if (cuisineFilter) {
        cuisineFilter.addEventListener('change', applyFilters);
    }
    if (atmosphereFilter) {
        atmosphereFilter.addEventListener('change', applyFilters);
    }
    if (peopleFilter) {
        peopleFilter.addEventListener('change', applyFilters);
    }
    
    const applyButton = document.querySelector('.btn-primary');
    const clearButton = document.querySelector('.btn-secondary');
    
    if (applyButton) {
        applyButton.addEventListener('click', applyFilters);
    }
    if (clearButton) {
        clearButton.addEventListener('click', clearFilters);
    }
    
    window.addEventListener('resize', () => {
        const paginationContainer = document.getElementById('paginationContainer');
        if (paginationContainer && filteredRestaurants.length > itemsPerPage) {
            paginationContainer.innerHTML = createPaginationHTML();
        }
    });
}

/**
 * Initializes the page
 */
function initializeRestaurantsPage() {
    try {
        renderRestaurants();
        setupEventListeners();
        
        console.log('تم تهيئة صفحة المطاعم والكافيهات بنجاح');
        console.log(`تم تحميل ${restaurants.length} مطعم و ${cafes.length} كافيه`);
        console.log(`عدد الصفحات: ${getTotalPages()}`);
        console.log(`عدد الأماكن في كل صفحة: ${itemsPerPage}`);
    } catch (error) {
        console.error('خطأ في تهيئة صفحة المطاعم والكافيهات:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadRestaurants();
});

function loadRestaurants() {
    fetch('http://localhost:8080/api/v1/place')
        .then(response => response.json())
        .then(data => {
            console.log('🍽️ Places data:', data);
            displayRestaurants(data);
        })
        .catch(error => {
            console.error('❌ Error fetching restaurants:', error);
            const container = document.getElementById('restaurantsContainer');
            container.innerHTML = '<p style="color: red;">فشل تحميل المطاعم والكافيهات</p>';
        });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeRestaurantsPage();
  updateCuisineOptions();
});