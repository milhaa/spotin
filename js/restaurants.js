// Restaurant data with 50 restaurants - Complete list with individual images
const restaurants = [

        {
                name: "  على بالي",
                location: "أبها",
                destination: "مطعم",                    // ✅ مُصحح
                cuisine: "شامي",                      // ✅ مُصحح
                atmosphere: ["عائلية", "شبابية", "اطلالة", "رومانسية"],                   // ✅ مُصحح
                image: "img/restaurants/rest01/main.png",
                rating: printStars(3.7),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B9%D9%84%D9%89%20%D8%A8%D8%A7%D9%84%D9%8A%20-%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJbe38WgBT4xURRfp9LZCKhkI",
                gallery: [
                        "img/restaurants/rest01/gallery1.png",
                        "img/restaurants/rest01/gallery2.PNG",
                        "img/restaurants/rest01/gallery3.png",
                        "img/restaurants/rest01/gallery4.PNG"
                ],
                menuUrl: "https://e-menu.itb-me.com/Emenu/650062003500370033003400650036002D0064003800650064002D0034003000350036002D0061006200620066002D00660039003500660064003200660039003700300031003900",
                workingHours: {                         // ✅ مُضاف
                        weekdays:  "11\u200Fص - 11\u200Fم"
                },
                priceRange:"22\u200F ريال - 150\u200F ريال",           // ✅ مُضاف
                services: "توصيل - دين إن - تيك أواي"  // ✅ مُضاف
        },

        {
                name: "  كرمنا  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية", "شبابية", "اطلالة", "فاخرة"],
                image: "img/restaurants/rest02/main.PNG",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D9%83%D8%B1%D9%85%D9%86%D8%A7&query_place_id=ChIJcezOOgBV4xURgj28i3Z1REk",
                gallery: [
                        "img/restaurants/rest02/gallery1.PNG",
                        "img/restaurants/rest02/gallery2.PNG",
                        "img/restaurants/rest02/gallery3.PNG",
                        "img/restaurants/rest02/gallery4.PNG"
                ],
                menuUrl: "https://mymenus.site/menu/karamna-ksa/67d3f4cda8982?fbclid=PAQ0xDSwKKvK1leHRuA2FlbQIxMQABp_rb1R4l4yhwXeG_Od_zGC9AYgJYnFPWBfXHWUgXQu2LujTbGJ2CX7E4Xdfw_aem_2huJzcWs9G7PKne3n8pgvQ",
                workingHours: {
                        weekdays:"1\u200Fم - 2\u200Fص"
                },
                priceRange: "35\u200F ريال - 187\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },


        {
                name: "  أوليف جاردن ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["عائلية", "شبابية", "اطلالة", "فاخرة"],
                image: "img/restaurants/rest03/main.PNG",
                rating: printStars(4.8),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%A3%D9%88%D9%84%D9%8A%D9%81%20%D8%AC%D8%A7%D8%B1%D8%AF%D9%86%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJg6hoh6xV4xUR7eJ3Epd0X2o",
                gallery: [
                        "img/restaurants/rest03/gallery1.PNG",
                        "img/restaurants/rest03/gallery2.PNG",
                        "img/restaurants/rest03/gallery3.PNG",
                        "img/restaurants/rest03/gallery4.PNG"
                ],
                menuUrl: "https://www.olivegarden.sa/",
                workingHours: {
                        weekdays: "1\u200Fم - 1:30\u200Fص"
                },
                priceRange: "39\u200F ريال - 124\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },



        {
                name: "تشيللو برندة ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["عائلية", "شبابية", "اطلالة", "فاخرة"],
                image: "img/restaurants/rest04/main.PNG",
                rating: printStars(3.8),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D8%B4%D9%8A%D9%84%D9%84%D9%88%20%D8%A8%D8%B1%D9%86%D8%AF%D8%A9&query_place_id=ChIJSRKL4ZZX4xURZ6w_ZORjoLU",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "https://www.cello.sa/",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39\u200F ريال - 135\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


        {
                name: "مطعم سدف  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/restaurants/rest05/main.PNG",
                rating:  printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B3%D8%AF%D9%81&query_place_id=ChIJfwHYIBJV4xURRCNswmvlybo",
                gallery: [
                        "img/restaurants/rest05/gallery1.PNG",
                        "img/restaurants/rest05/gallery2.PNG",
                        "img/restaurants/rest05/gallery3.PNG",
                        "img/restaurants/rest05/gallery4.PNG"
                ],
                menuUrl: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDQ4NDg2ODI2NjU4NTIz?igsh=MW1sZG1iejg3NXY0Yw==",
                workingHours: {
                        weekdays: "على مدار 24 ساعة"
                },
                priceRange: "35\u200F ريال - 90\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
                name: "حنيذ ملة",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/restaurants/rest06/main.PNG",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AD%D9%86%D9%8A%D8%B0%20%D9%85%D9%84%D8%A9%20%7C%20%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%20%D8%A5%D8%B3%D8%AA%D9%84%D8%A7%D9%85&query_place_id=ChIJU4SgEwBT4xURVBA0jORQSgI",
                gallery: [
                        "img/restaurants/rest06/gallery1.PNG",
                        "img/restaurants/rest06/gallery2.PNG",
                        "img/restaurants/rest06/gallery3.PNG",
                        "img/restaurants/rest06/gallery4.PNG"
                ],
                menuUrl: "http://mallah.tryorder.net/",
                workingHours: "12:30\u200Fم - 12:30\u200Fم",
                priceRange: "80\u200F ريال - 1200\u200F ريال",
                services: "الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


// التصنيف خطأ ولكن للتجربه
        {
                name: "لوفوياج  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "فرنسي",
                atmosphere: ["رومانسية", "فاخرة", "عائلية", "شبابية"],
                image: "img/restaurants/rest07/main.PNG",
                rating: printStars(4.5),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%84%D9%88%D9%81%D9%88%D9%8A%D8%A7%D8%AC&query_place_id=ChIJ-QL3VgGr_BURsZrVEQ3qN64",
                gallery: [
                        "img/restaurants/rest07/gallery1.PNG",
                        "img/restaurants/rest07/gallery2.PNG",
                        "img/restaurants/rest07/gallery3.PNG",
                        "img/restaurants/rest07/gallery4.PNG"
                ],
                menuUrl: "https://le-voyage.yallaqrcodes.com/branch/1/menu/",
                workingHours: {
                        weekdays: "7\u200Fص - 1\u200Fص"
                },
                priceRange: "24\u200F ريال - 110\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
                name: "تو بورشنز | TWO PORTIONS  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["هادئة", "شبابية", "عائلية"],
                image: "img/restaurants/rest08/main.PNG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%88%20%D8%A8%D9%88%D8%B1%D8%B4%D9%86%D8%B2%20%7C%20TWO%20PORTIONS&query_place_id=ChIJG8D5Njmr_BUR-wjYfWNJsZM",
                gallery: [
                        "img/restaurants/rest08/gallery1.PNG",
                        "img/restaurants/rest08/gallery2.PNG",
                        "img/restaurants/rest08/gallery3.PNG",
                        "img/restaurants/rest08/gallery4.PNG"
                ],
                menuUrl: "https://drive.google.com/file/d/11zSu4QHJQopHZOt-Stgx9u3uXRK1j8OS/view?usp=drivesdk",
                workingHours: {
                        weekdays: "4\u200Fم - 2\u200Fص"
                },
                priceRange: "7\u200F ريال - 32\u200F ريال",
                services: "التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
                name: "  فلق",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["فاخرة", "عائلية", "شبابية"],
                image: "img/restaurants/rest09/main.PNG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D9%81%D9%84%D9%82&query_place_id=ChIJzUOX7Yyr_BUR9jDXgdOarAs",
                gallery: [
                        "img/restaurants/rest09/gallery1.PNG",
                        "img/restaurants/rest09/gallery2.PNG",
                        "img/restaurants/rest09/gallery3.PNG",
                        "img/restaurants/rest09/gallery4.PNG"
                ],
                menuUrl: "https://qr.finedinemenu.com/IvJOjV4Jl?table=sample",
                workingHours: {
                        weekdays: "5\u200Fص - 5\u200Fم"
                },
                priceRange:"38\u200F ريال - 71\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },



        {
                name: "  سينسو  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["رومانسية", "عائلية","شبابية", "اطلالة"],
                image: "img/restaurants/rest10/main.PNG",
                rating: printStars(4.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%B3%D9%8A%D9%86%D8%B3%D9%88%20-%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJB8VXVgBT4xURGQbpmGsUDEU",
                gallery: [
                        "img/restaurants/rest10/gallery1.PNG",
                        "img/restaurants/rest10/gallery2.PNG",
                        "img/restaurants/rest10/gallery3.PNG",
                        "img/restaurants/rest10/gallery4.PNG"
                ],
                menuUrl: "https://e-menu.itb-me.com/Menu/380033006600350030006400390037002D0039003500620037002D0034006500390065002D0061003200640065002D00650032006300360061006300320032003400650064003700",
workingHours: {
   weekdays: "6\u200Fص - 11\u200Fص   ,   12:30\u200Fم - 1\u200Fص"
},
                priceRange: "48\u200F ريال - 186\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        },

        {
                name: "جورنو",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["فاخرة", "عائلية","شبابية", "اطلالة"],
                image: "img/restaurants/rest11/main.jpg",
                rating: printStars(4.5),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D8%B4%D9%8A%D9%84%D9%84%D9%88%20%D8%A8%D8%B1%D9%86%D8%AF%D8%A9&query_place_id=ChIJSRKL4ZZX4xURZ6w_ZORjoLU",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "https://perex.odoo.com/pos-self/2/products?access_token=2f0a505334fb4737",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39\u200F ريال - 135\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "JOY VENUE جوي فينيو",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere:  ["عائلية","شبابية", "اطلالة"],
                image: "img/restaurants/rest12/main.jpg",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D8%B4%D9%8A%D9%84%D9%84%D9%88%20%D8%A8%D8%B1%D9%86%D8%AF%D8%A9&query_place_id=ChIJSRKL4ZZX4xURZ6w_ZORjoLU",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "https://perex.odoo.com/pos-shttps://app.iwaiter.net/Joy-venuemv493d/menuelf/2/products?access_token=2f0a505334fb4737",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "اوكلاهوما برجر Oklahoma BURGER",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere:  ["عائلية","شبابية"],
                image: "img/restaurants/rest13/main.jpg",
                rating: printStars(4.7),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D8%B4%D9%8A%D9%84%D9%84%D9%88%20%D8%A8%D8%B1%D9%86%D8%AF%D8%A9&query_place_id=ChIJSRKL4ZZX4xURZ6w_ZORjoLU",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12\u200Fم - 3:30\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "شندل",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere:  ["عائلية","شبابية", "اطلالة"],
                image: "img/restaurants/rest14/main.jpg",
                rating: printStars(3.9),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%86%D8%AF%D9%84&query_place_id=ChIJoza7TARV4xUR-12T1wQimYY",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "كابي CABI",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["عائلية", "شبابية", "هادئة", "فاخرة"],
                image: "img/restaurants/rest15/main.jpg",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%83%D8%A7%D8%A8%D9%8A%20CABI&query_place_id=ChIJyQcKU2tV4xURTP90RNE1IMU",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "زورنا",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية","شبابية", "اطلالة"],
                image: "img/restaurants/rest16/main.jpg",
                rating: printStars(4.5),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B2%D9%88%D8%B1%D9%86%D8%A7&query_place_id=ChIJr___dJar_BURyZRGeC5k874",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "مهراني",
                location: "أبها",
                destination: "مطعم",
                cuisine: "هندي",
                atmosphere:  ["فاخرة", "عائلية","شبابية", "هادئة"],
                image: "img/restaurants/rest17/main.jpg",
                rating: printStars(4.7),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Abha%20branch%20Mahrani%20Restaurant%20%D9%85%D8%B7%D8%B9%D9%85%20%D9%85%D9%87%D8%B1%D8%A7%D9%86%D9%89%20%D9%81%D8%B1%D8%B9%20%D8%A3%D8%A8%D9%87%D8%A7&query_place_id=ChIJJy56xohV4xURnejZdbLOzFA",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "https://qrco.de/bcpj56",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "Karaki كركي",
                location: "أبها",
                destination: "مطعم",
                cuisine: "فرنسي",
                atmosphere:  ["عائلية","شبابية", "هادئة"],
                image: "img/restaurants/rest18/main.JPG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Karaki%20%D9%83%D8%B1%D9%83%D9%8A&query_place_id=ChIJZU0DJQBZ-xURndseTWgVqe8",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "مطعم بريك داون Break Dawn",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية","شبابية", "هادئة"],
                image: "img/restaurants/rest19/main.JPG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B7%D8%B9%D9%85%20%D8%A8%D8%B1%D9%8A%D9%83%20%D8%AF%D8%A7%D9%88%D9%86%20Break%20Dawn&query_place_id=ChIJoaVWCcyp_BURqSVvzI_tYW4",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "فرن الضيعة",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية","شبابية", "هادئة"],
                image: "img/restaurants/rest20/main.JPG",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "مطعم العريش",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere: ["عائلية","شبابية", "اطلالة"],
                image: "img/restaurants/rest21/main.JPG",
                rating: printStars(3.5),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "ديب فرايز",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["عائلية","شبابية", "هادئة"],
                image: "img/restaurants/rest22/main.JPG",
                rating:  printStars(4.8),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


        {
                name: "Rusticana",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["عائلية","شبابية", "هادئة"],
                image: "img/restaurants/rest23/main.JPG",
                rating: printStars(4.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "Saraya Palace",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية","شبابية", "هادئة", "اطلالة"],
                image: "img/restaurants/rest24/main.JPG",
                rating: printStars(4.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },


        {
                name: "The Roof Restaurant",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/restaurants/rest25/main.JPG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "Abha Gala | أبها قالا",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/restaurants/rest26/main.JPG",
                rating: printStars(3.7),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "مشراق",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest27/main.JPG",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

       /* {
                name: "قصر المضياف الراقي",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: "عائلية",
                image: "img/restaurants/rest28/main.JPG",
                rating: "★★★★☆",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        }, 
        */


        {
                name: "ليالي الهند",
                location: "أبها",
                destination: "مطعم",
                cuisine: "هندي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest29/main.JPG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "L’antico",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest30/main.jpg",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

 {
                name: "اوزلام",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest31/main.jpg",
               rating: printStars(3.9)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
         {
                name: "أشاز",
                location: "أبها",
                destination: "مطعم",
                cuisine: "هندي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest32/main.jpg",
               rating: printStars(4.5)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },


        {
                name: "بلومنق",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/restaurants/rest33/main.jpg",
               rating: printStars(4.2)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

        {
                name: "بنباستك",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest34/main.jpg",
               rating: printStars(4.7),
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
{
                  name: "شوايتي",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest35/main.jpg",
               rating: printStars(3.4)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

        {

                  name: "طبق الفخار",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image:"img/restaurants/rest36/main.jpg",
               rating: printStars(4.2)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
           {

                  name: "البداية  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شعبي",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/restaurants/rest37/main.jpg",
               rating: printStars(3.8)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

            {

                  name: "فارفلي  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest38/main.jpg",
               rating: printStars(4.5)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

                {

                  name: "قناديل التوت  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/restaurants/rest39/main.jpg",
               rating: printStars(3.6)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

                  {

                  name: "  برغلي  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/restaurants/rest40/main.jpg",
               rating: printStars(4.3)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

            {

                  name: "  تونير  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "إيطالي",
                atmosphere: ["عائلية", "شبابية", "فاخرة", "رومانسية"],
                image: "img/restaurants/rest41/main.jpg",
               rating: printStars(4.3)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
            {

                  name: "  اكليل  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/restaurants/rest42/main.jpg",
               rating: printStars(3.9)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

           

              {

                  name: "  ساندوتش  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: " أمريكي",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest43/main.jpg",
               rating: printStars(4.0)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
              {

                  name: "  روف  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "متنوع",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/restaurants/rest44/main.jpg",
               rating: printStars(4.2)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
{
                         name: "  WBJ  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "أمريكي",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/restaurants/rest45/main.jpg",
                rating: printStars(4.8)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },
{
                         name: "  شرمب نيشن  ",
                location: "أبها",
                destination: "مطعم",
                cuisine: "بحري",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/restaurants/rest46/main.jpg",
               rating: printStars(3.8)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

        {

                name: "الشوكة التركية",
                location: "أبها",
                destination: "مطعم",
                cuisine: "شامي",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/restaurants/rest47/main.jpg",
               rating: printStars(4.2)
                  /* 
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Furn%20Aldayaa%20I%20%D9%81%D8%B1%D9%86%20%D8%A7%D9%84%D8%B6%D9%8A%D8%B9%D8%A9&query_place_id=ChIJDyPy0PtT4xURcnX30hU8o0Y",
                gallery: [
                        "img/restaurants/rest04/gallery1.PNG",
                        "img/restaurants/rest04/gallery2.PNG",
                        "img/restaurants/rest04/gallery3.PNG",
                        "img/restaurants/rest04/gallery4.PNG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "12:30\u200Fم - 2\u200Fص"
                },
                priceRange: "39 - 135 ريال",
                services: "أماكن جلوس في الهواء الطلق - الإيصال إلى السيارة - التسليم بدون تلامس - خدمة التوصيل - خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"*/
        },

];


// Cafe data with unique information for each place
const cafes = [


        {
                name: "مقهى بكر | BKR CAFE ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe01/main.jpg",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D9%82%D9%87%D9%89%20%D8%A8%D9%83%D8%B1%20%7C%20BKR%20CAFE&query_place_id=ChIJ52e_SUBV4xURVex0scjDrr0",
                gallery: [
                        "img/cafes/cafe01/gallery1.jpg",
                        "img/cafes/cafe01/gallery2.JPEG",
                        "img/cafes/cafe01/gallery3.jpg",
                        "img/cafes/cafe01/gallery4.jpg"
                ],
                menuUrl: "https://instagram.com/bkr_sa?r=nametag",
                workingHours: {
                        weekdays: "7\u200Fص - 1\u200Fص"
                },
                priceRange: "10\u200F ريال - 21\u200F ريال",
                services: "التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "حثيث",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe02/main.jpg",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B2%D9%87%D9%88%20ZHU&query_place_id=ChIJATR-pb9V4xURIv6qrHl7GEw",
                gallery: [
                        "img/cafes/cafe02/gallery1.jpg",
                        "img/cafes/cafe02/gallery2.jpg",
                        "img/cafes/cafe02/gallery3.jpg",
                        "img/cafes/cafe02/gallery4.jpg"
                ],
                menuUrl: "https://drive.google.com/drive/folders/1f6fGhrw2iPj5BL93w2fM_8_YEsfNlH27?usp=drive_link",
                workingHours: {
                        weekdays: "7\u200Fص - 1\u200Fص"
                },
                priceRange: "10\u200F ريال - 29\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "9BAR | ٩ بار   ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe03/main.JPEG",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=9BAR%20%7C%20%D9%A9%20%D8%A8%D8%A7%D8%B1%20-%20%D9%81%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AD%D8%B2%D8%A7%D9%85&query_place_id=ChIJXffD0bBV4xURLnq0FL5Vr-8",
                gallery: [
                        "img/cafes/cafe03/gallery1.JPEG",
                        "img/cafes/cafe03/gallery2.JPEG",
                        "img/cafes/cafe03/gallery3.JPEG",
                        "img/cafes/cafe03/gallery4.JPEG"
                ],
                menuUrl: "https://9bar.easymenu.site/",
                workingHours: {
                        weekdays: "7:30\u200Fص - 1\u200Fص"
                },
                priceRange: "10\u200F ريال - 105\u200F ريال",
                services: "خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "Caffeine Lab   ",
                location: "أبها",
                tyep: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe04/main.jpg",
                rating: printStars(3.5),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Caffeine%20Lab&query_place_id=ChIJ3-sCVwBV4xURg2H8I0hpuiU",
                gallery: [
                        "img/cafes/cafe04/gallery1.jpg",
                        "img/cafes/cafe04/gallery2.JPG",
                        "img/cafes/cafe04/gallery3.jpg",
                        "img/cafes/cafe04/gallery4.jpg"
                ],
                menuUrl: "http://caffeinelab.me/",
                workingHours: {
                        weekdays: "12\u200Fم - 8\u200Fم"
                },
                priceRange: "16\u200F ريال - 89\u200F ريال",
                services: "الإيصال إلى السيارة - التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "Hyz Bakehouse    ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe05/main.jpg",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Hyz%20Bakehouse&query_place_id=ChIJ76u7NwBV4xURcIko4wj_UN8",
                gallery: [
                        "img/cafes/cafe05/gallery1.jpg",
                        "img/cafes/cafe05/gallery2.jpg",
                        "img/cafes/cafe05/gallery3.jpg",
                        "img/cafes/cafe05/gallery4.jpg"
                ],
                menuUrl: "https://jorryelite.com/",
                workingHours: {
                        weekdays: "6\u200Fص - 6\u200Fم"
                },
                priceRange: "9\u200F ريال - 23\u200F ريال",
                services: "التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        },

        {
                name: "ROW | رو    ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/cafes/cafe06/main.png",
                rating: printStars(3.5),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=ROW%20%7C%20%D8%B1%D9%88&query_place_id=ChIJCaAxbABT4xURTK5K9JoEopE",
                gallery: [
                        "img/cafes/cafe06/gallery1.JPG",
                        "img/cafes/cafe06/gallery2.JPG",
                        "img/cafes/cafe06/gallery3.JPG",
                        "img/cafes/cafe06/gallery4.JPG"
                ],
                menuUrl: "http://linktr.ee/rowcafe",
                workingHours: {
                        weekdays: "نعمل على مدار 24 ساعة"
                },
                priceRange: "10\u200F ريال - 40\u200F ريال",
                services: "خدمة الطلب أثناء القيادة - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "دكّة شاي",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe07/main.jpg",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AF%D9%83%D9%91%D8%A9%20%D8%B4%D8%A7%D9%8A&query_place_id=ChIJv5TeFIap_BUReD4w40l9T4o",
                gallery: [
                        "img/cafes/cafe07/gallery1.jpg",
                        "img/cafes/cafe07/gallery2.jpg",
                        "img/cafes/cafe07/gallery3.jpg",
                        "img/cafes/cafe07/gallery4.jpg"
                ],
                menuUrl: "https://instagram.com/tea.dakkah?utm_medium=copy_link",
                workingHours: {
                        weekdays: "2:30\u200Fم - 4\u200Fص"
                },
                priceRange: "4\u200F ريال - 18\u200F ريال",
                services: "طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "وزاب كافيه  ",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe08/main.jpg",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%88%D8%B2%D8%A7%D8%A8%20%D9%83%D8%A7%D9%81%D9%8A%D9%87&query_place_id=ChIJnZGixy-p_BURZS_OblMnXXU",
                gallery: [
                        "img/cafes/cafe08/gallery1.jpg",
                        "img/cafes/cafe08/gallery2.jpg",
                        "img/cafes/cafe08/gallery3.jpg",
                        "img/cafes/cafe08/gallery4.jpg"
                ],
                menuUrl: "https://online.pubhtml5.com/btejg/lhlq/#p=2",
                workingHours: {
                        weekdays: "4\u200Fم - 2\u200Fص"
                },
                priceRange: "6\u200F ريال - 29\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "مكان حمد   ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe09/main.JPG",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D9%85%D9%83%D8%A7%D9%86%20%D8%AD%D9%85%D8%AF&query_place_id=ChIJd-45se5V-xURkq8sfT6bZZg",
                gallery: [
                        "img/cafes/cafe09/gallery1.JPG",
                        "img/cafes/cafe09/gallery2.JPG",
                        "img/cafes/cafe09/gallery3.JPG",
                        "img/cafes/cafe09/gallery4.JPG"
                ],
                menuUrl: "https://drive.google.com/file/d/1YXw8Qfm5IdDY_voQ70hSns3Mr2XP4YeR/view?usp=drivesdk",
                workingHours: {
                        weekdays: "4\u200Fم - 1:30\u200Fص"
                },
                priceRange: "5\u200F ريال - 48\u200F ريال",
                services: "أماكن جلوس في الهواء الطلق - التسليم بدون تلامس - خدمة التوصيل - طعام سفري - الجلوس داخل المكان"
        },

        {
                name: "شوقر هايف  ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe10/main.jpg",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "https://oddmenu.com/ar/p/sugarhive",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7\u200F ريال - 31\u200F ريال",
                services: "التسليم بدون تلامس - خدمة التوصيل - الجلوس داخل المكان"
        },

        {
                name: "فيفث افنيو",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/cafes/cafe11/main.JPG",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "https://oddmenu.com/ar/p/sugarhive",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "zhu زهو",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe12/main.PNG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "https://oddmenu.com/ar/p/sugarhive",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Ugarit",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe13/main.PNG",
                rating: printStars(4.6),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "https://oddmenu.com/ar/p/sugarhive",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Cult",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe14/main.PNG",
                rating: printStars(3.9),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "https://oddmenu.com/ar/p/sugarhive",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Beit cafe",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe15/main.PNG",
                rating: printStars(4.6),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Bevanda",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/cafes/cafe16/main.PNG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "القطرة السوداء | Black Drop",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe17/main.PNG",
                rating: printStars(4.6),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Cove",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe18/main.PNG",
                rating: printStars(3.8),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Da Nonna - دانونا",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe19/main.PNG",
                rating: printStars(3.9),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Jadelah Coffee",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe20/main.PNG",
                rating: printStars(4.5),
                mapUrl: "",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Kaya Cafe",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/cafes/cafe22/main.PNG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "كرك ستيشن",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe21/main.PNG",
                rating: printStars(3.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Kiva Han Coffee",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe23/main.PNG",
                rating: printStars(3.9),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Press",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe24/main.PNG",
                rating: printStars(3.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "SKW Cafe",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe25/main.PNG",
                rating: printStars(4.8),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "الشاي الداكن",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe26/main.PNG",
                rating: printStars(3.8),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "المركاز",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe27/main.PNG",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "ايسز كوفي",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe28/main.PNG",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "مقهى ترايب",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe29/main.PNG",
                rating: printStars(4.6),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "مقهى حبلـــ",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "رومانسية"],
                image: "img/cafes/cafe30/main.PNG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "mIL ملء",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/cafes/cafe31/main.PNG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "RATIO",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe32/main.PNG",
                rating: printStars(4.1),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "OKAF CAFE",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe33/main.PNG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "هاتاي",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe34/main.PNG",
                rating: printStars(4.0),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "مقهى فيه",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "رومانسية"],
                image: "img/cafes/cafe35/main.PNG",
                rating: printStars(3.7),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "حروف كافيه",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe36/main.PNG",
                rating: printStars(3.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Reap",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe37/main.PNG",
                rating: printStars(4.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "سوفليه",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe38/main.PNG",
                rating: printStars(3.6),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "سالفة شاي",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe39/main.PNG",
                rating: printStars(4.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "شاي شمل",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe40/main.PNG",
                rating: printStars(4.3),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "ناش كافيه",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "فاخرة"],
                image: "img/cafes/cafe41/main.PNG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "شاي الكهف",
                location: "أبها",
                type: "شاي",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية"],
                image: "img/cafes/cafe42/main.PNG",
                rating: printStars(4.6),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "حبات الهيل",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "هادئة"],
                image: "img/cafes/cafe43/main.PNG",
                rating: printStars(4.2),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "Chapter3 | الفصل الثالث",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["عائلية", "شبابية", "اطلالة"],
                image: "img/cafes/cafe44/main.PNG",
                rating: printStars(4.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },

        {
                name: "SAL coffee",
                location: "أبها",
                type: "قهوة",
                destination: "كافيه",
                atmosphere: ["شبابية", "عائلية", "اطلالة"],
                image: "img/cafes/cafe45/main.PNG",
                rating: printStars(3.4),
                mapUrl: "https://www.google.com/maps/search/?api=1&query=%D8%B4%D9%88%D9%82%D8%B1%20%D9%87%D8%A7%D9%8A%D9%81&query_place_id=ChIJzfscdwCr_BURqQo5JIhxR24",
                gallery: [
                        "img/cafes/cafe10/gallery1.jpg",
                        "img/cafes/cafe10/gallery2.jpg",
                        "img/cafes/cafe10/gallery3.jpg",
                        "img/cafes/cafe10/gallery4.JPG"
                ],
                menuUrl: "",
                workingHours: {
                        weekdays: "4\u200Fم - 4\u200Fص"
                },
                priceRange: "7 - 31 ريال",
                services: ""
        },


];


// Global variables
let allPlaces = [...restaurants, ...cafes];
let filteredRestaurants = [...allPlaces];
let currentPage = 1;
const itemsPerPage = 8;


// Helper function to format atmosphere display
function formatAtmospheres(atmospheres) {
    if (!Array.isArray(atmospheres)) {
        return atmospheres || ' ';
    }
    return atmospheres.join(' - ');
}

// Helper function to get all unique atmospheres from all places
function getAllAtmospheres() {
    const atmosphereSet = new Set();
    allPlaces.forEach(place => {
        if (Array.isArray(place.atmosphere)) {
            place.atmosphere.forEach(atm => atmosphereSet.add(atm));
        } else if (place.atmosphere) {
            atmosphereSet.add(place.atmosphere);
        }
    });
    return Array.from(atmosphereSet).sort();
}

// دالة لطباعة النجوم بناءً على الرقم المدخل
function printStars(rating) {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        return "يرجى إدخال رقم صحيح بين 0 و 5";
    }

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let result = "";
    result += "★".repeat(fullStars);
    if (hasHalfStar) {
        result += "☆";
    }
    result += "☆".repeat(emptyStars);

    return result;
}

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
            <span class="resturant-color">
            <!---->
            <i class="fa-solid fa-utensils" style="color: #fafafa; font-size: 22px;"></i>
            </span>
            <div class="our-menu__items">
                <div class="our-menu__image">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="our-menu__img img">
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
                        الأجواء : ${formatAtmospheres(restaurant.atmosphere)}
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
            <span class="coffee-color">
            <i class="fa-solid fa-mug-hot" style="color: #ffffff; font-size: 22px;"></i>
            </span>
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
                        الأجواء :  ${formatAtmospheres(cafe.atmosphere)}
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
 * Handles details page styling and numbering for restaurants and cafes
 */
function initializeDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const placeId = urlParams.get('id');

    if (!placeId) return;

    // Determine if it's restaurant or cafe based on ID
    const isRestaurant = placeId.startsWith('rest');
    const isCafe = placeId.startsWith('cafe');

    let place = null;
    let placeInfo = { index: 0 };

    if (isRestaurant) {
        const restIndex = parseInt(placeId.replace('rest', '')) - 1;
        place = restaurants[restIndex];
        placeInfo.index = restIndex;
    } else if (isCafe) {
        const cafeIndex = parseInt(placeId.replace('cafe', '')) - 1;
        place = cafes[cafeIndex];
        placeInfo.index = cafeIndex;
    }

    if (place) {
        // Set place number with appropriate color
        const placeNumber = document.getElementById('placeNumber');
        if (placeNumber) {
            placeNumber.textContent = String(placeInfo.index + 1).padStart(2, '0');
            placeNumber.className = 'place-number ' + (isRestaurant ? 'restaurant-number' : 'cafe-number');
        }

        // Set place icon with appropriate style
        const placeIcon = document.getElementById('placeIcon');
        if (placeIcon) {
            if (isRestaurant) {
                placeIcon.className = 'place-icon resturant-color';
                placeIcon.innerHTML = '<i class="fa-solid fa-utensils" style="color: #fafafa; font-size: 22px;"></i>';
            } else if (isCafe) {
                placeIcon.className = 'place-icon coffee-color';
                placeIcon.innerHTML = '<i class="fa-solid fa-mug-hot" style="color: #ffffff; font-size: 22px;"></i>';
            }
        }

        // Update atmosphere display on details page
        const atmosphereElement = document.getElementById('placeAtmosphere');
        if (atmosphereElement && place.atmosphere) {
            atmosphereElement.textContent = formatAtmospheres(place.atmosphere);
        }
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
 * Checks if a place matches the atmosphere filter
 */
function matchesAtmosphereFilter(place, atmosphereFilter) {
    if (!atmosphereFilter) return true;
    
    if (Array.isArray(place.atmosphere)) {
        return place.atmosphere.includes(atmosphereFilter);
    } else {
        return place.atmosphere === atmosphereFilter;
    }
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
        const matchesAtmosphere = matchesAtmosphereFilter(place, atmosphereFilter);
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
    '', 'شعبي', 'إيطالي', 'أمريكي', 'هندي', 'شامي', 'بحري'
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
        cuisineSelect.innerHTML = '<option value="">جميع التصنيفات</option>';
        return;
    }

    const options = destination === 'مطعم' ? restaurantCuisines : cafeStyles;

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option || 'جميع التصنيفات';
        cuisineSelect.appendChild(opt);
    });

            cuisineSelect.disabled = false;
}

/**
 * Updates atmosphere filter options based on all available atmospheres
 */
function updateAtmosphereOptions() {
    const atmosphereSelect = document.getElementById('atmosphereFilter');
    if (!atmosphereSelect) return;

    const allAtmospheres = getAllAtmospheres();
    const currentValue = atmosphereSelect.value;

    atmosphereSelect.innerHTML = '<option value="">جميع الأجواء</option>';

    allAtmospheres.forEach(atmosphere => {
        const option = document.createElement('option');
        option.value = atmosphere;
        option.textContent = atmosphere;
        if (atmosphere === currentValue) {
            option.selected = true;
        }
        atmosphereSelect.appendChild(option);
    });
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

    // Reset cuisine options
    updateCuisineOptions();

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
        updateAtmosphereOptions(); // Initialize atmosphere options
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

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the main page or details page
    if (window.location.pathname.includes('details.html')) {
        initializeDetailsPage();
    } else {
        initializeRestaurantsPage();
        updateCuisineOptions();
    }
});