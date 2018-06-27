const data = [
    {
        name:"Extra",
        nameVietnamese: "Extra",
        img: "image/phim1.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"123,567",
    },
    {
        name:"English Communication",
        nameVietnamese:"giao tiếp tiếng anh cơ bản",
        img: "image/phim2.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"34,123",
    },

    {
        name:"Young & Huggry",
        nameVietnamese: "Tuổi trẻ và khát khao",
        img: "image/phim3.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"67,435",
    },

    {
        name:"How I met your mother",
        nameVietnamese: "Bố đã gặp mẹ như thế nào",
        img: "image/phim4.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"129,567",
    },

    {
        name: "FRIENDS",
        nameVietnamese: "Những người bạn",
        img: "image/phim5.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"126,456",
    },

    {
        name: "How I met your mother - season 9",
        nameVietnamese: "Bố đã gặp mẹ như thế nào",
        img: "image/phim6.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"79,432",

    },

    {
        name: "FLASH - Season1",
        nameVietnamese: "Tia chớp - Phần 1",
        img: "image/phim7.png",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"125,457",

    },
    
    {
        name: "FlASH - Season2",
        nameVietnamese: "Tia chớp - Phần 2",
        img: "image/phim8.jpg",
        tag: "PHIM HỌC TIẾNG ANH NỔI BẬT",
        number:"29,145",
    },
    {
        name: "STARSHIP ROOPERS3",
        nameVietnamese: "Chiến binh vũ trụ: Kẻ phản bội sao hỏa",
        img: "image/phim9.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"284",

    },
    {
        name: "ANNON (2018)",
        nameVietnamese: "Thế giới vô danh",
        img: "image/phim9.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"456",

    },
    {
        name: "AVICII: TRUE STORIES(2017)",
        nameVietnamese: "Những câu chuyện có thật",
        img: "image/phim11.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"659",

    },

    {
        name: "SHERLOCK GNOMES(2018)",
        nameVietnamese: "Thám tử siêu quậy",
        img: "image/phim12.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"284",

    },

    {
        name: "DEATH WISH 2018",
        nameVietnamese: "Thần chết",
        img: "image/phim13.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"284",

    },

    {
        name: "ESCAPE PLAN2: HADES(2018)",
        nameVietnamese: "Kế hoạch đào tẩu 2: Địa Ngục",
        img: "image/phim14.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"284",

    },
    {
        name: "RED SPARROW(2018)",
        nameVietnamese: "Điệp vụ chim sẻ đỏ",
        img: "image/phim15.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"976",

    },

    {
        name: "MOLLY's GAME",
        nameVietnamese: "Nữ Hoàng Cờ Bạc",
        img: "image/phim16.jpg",
        tag: "PHIM HỌC TIẾNG ANH MỚI NHẤT",
        number:"284",

    },

    {
        name: "THE BIG BANG OF THEORY - Season1",
        nameVietnamese: "Vụ nổ lớn - Season 1",
        img: "image/phim17.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"8,564",

    },

    {
        name: "THE BIG BANG OF THEORY - Season7",
        nameVietnamese: "Vụ nổ lớn - Season 7",
        img: "image/phim18.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"10,284",

    },
    {
        name: "THE BIG BANG OF THEORY - Season2",
        nameVietnamese: "Vụ nổ lớn - Season 2",
        img: "image/phim19.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"5,643",

    },

    {
        name: "How TO TRAIN YOUR DRAGON",
        nameVietnamese: "Bí Kíp Luyện Rồng - Season1",
        img: "image/phim20.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"3,245",

    },

    {
        name: "TOM AND JERRY",
        nameVietnamese: "Tom and jerry - Hạt đậu thần",
        img: "image/phim21.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"2,345",

    },

    {
        name: "MOANA",
        nameVietnamese: "Cuộc phiêu lưu của Moana",
        img: "image/phim22.png",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"7,456",

    },

    {
        name: "HOW I MET YOUR MOTHER",
        nameVietnamese: "Khi bố gặp mẹ - season 1",
        img: "image/phim23.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"7,456",

    },

    {
        name: "HANA MOTANA",
        nameVietnamese: "HANA MOTANA",
        img: "image/phim24.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 1",
        number:"1,724",

    },

    {
        name: "Frozen",
        nameVietnamese: "Nữ Hoàng Băng Giá",
        img: "image/phim25.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"3,334",

    },

    {
        name: "GHOST HOTEL",
        nameVietnamese: "khách sạn ma ám",
        img: "image/phim26.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"3,334",

    },

    {
        name: "RIO",
        nameVietnamese: "Chú vẹt Rio",
        img: "image/phim27.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"3,334",

    },

    {
        name: "RISE OF GUARDIANS",
        nameVietnamese: "Sự trỗi dậy của vệ thần",
        img: "image/phim28.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"3,567",

    },

    {
        name: "PITCH PERFECT",
        nameVietnamese: "BƯỚC NHẢY HOÀN VŨ",
        img: "image/phim29.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"3,567",

    },

    {
        name: "BOSS BABY - 2017",
        nameVietnamese: "Nhóc trùm: 2017",
        img: "image/phim30.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"1,567",

    },

    {
        name: "WALKING WITH DINASOURS",
        nameVietnamese: "Dạo bước cùng khủng long",
        img: "image/phim31.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"3,567",

    },
    {
        name: "TRANSFORMER",
        nameVietnamese: "Dạo bước cùng khủng long",
        img: "image/phim32.png",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 2",
        number:"5,134",

    },

    {
        name: "HARRY POTTER",
        nameVietnamese: "Harry potter và hòn đá phù thủy",
        img: "image/phim33.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"1,987",

    },

    {
        name: "FAST AND FURIOUS 7",
        nameVietnamese: "Quá nhanh quá nguy hiểm - season7",
        img: "image/phim34.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"8,987",

    },

    {
        name: "FAST AND FURIOUS 8",
        nameVietnamese: "Quá nhanh quá nguy hiểm - season8",
        img: "image/phim35.png",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"12,987",

    },

    {
        name: "BRAVE",
        nameVietnamese: "Công chúa tóc xù",
        img: "image/phim36.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"4,987",

    },

    {
        name: "FINDING NEMO",
        nameVietnamese: "Truy tìm Nemo",
        img: "image/phim37.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"6,127",

    },

    {
        name: "FINDING DORY",
        nameVietnamese: "Truy tìm Dory",
        img: "image/phim38.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"7,754",

    },

    {
        name: "TRANSFORMER 2",
        nameVietnamese: "Rô bốt biến hình",
        img: "image/phim39.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"7,754",

    },

    {
        name: "THE JUNGLE BOOK",
        nameVietnamese: "Cậu bé rừng xanh",
        img: "image/phim40.jpg",
        tag: "PHIM HỌC TIẾNG ANH LEVEL 3",
        number:"2,345",

    },

    {
        name: "Spider-man: Home Coming",
        nameVietnamese: "Người nhện 2: trở về nhà",
        img: "image/phim41.jpg",
        tag: "Phim lẻ xem nhiều",
        number:"2,345",

    },
    {
        name: "Jurassic World",
        nameVietnamese: "Công viên khủng long",
        img: "image/phim42.jpg",
        tag: "Phim lẻ xem nhiều",
        number:"2,345",

    },
    {
        name: "DEATH POOL",
        nameVietnamese: "Death Pool: Anh hùng mới",
        img: "image/phim43.jpg",
        tag: "Phim lẻ xem nhiều",
        number:"2,345",

    },
    {
        name: "X-men 4: APOCALYPSE",
        nameVietnamese: "Ngày cũ của tương lai",
        img: "image/phim44.png",
        tag: "Phim lẻ xem nhiều",
        number:"2,345",

    },
    {
        name: "X-men: ORIGINS",
        nameVietnamese: "Nguồn gốc người sói",
        img: "image/phim45.jpg",
        tag: "Phim lẻ xem nhiều",
        number:"2,345",

    },
    {
        name: "IRON MAN I",
        nameVietnamese: "Người sắt xuất hiện",
        img: "image/phim46.png",
        tag: "Phim lẻ xem nhiều",
        number:"2,345",

    },
    {
        name: "GAME OF THRONES SEASON 1",
        nameVietnamese: "Trò chơi vương quyền - Season1",
        img: "image/phim47.jpg",
        tag: "Phim bộ xem nhiều",
        number:"2,345",

    },
    {
        name: "THE BIG BANG OF THEORY - SEASON 11",
        nameVietnamese: "Vụ nổ lớn season 11",
        img: "image/phim48.jpg",
        tag: "Phim bộ xem nhiều",
        number:"2,345",

    },
    {
        name: "HOW I MET YOUR MOTHER - SEASON 5",
        nameVietnamese: "Khi bố gặp mẹ - season 5",
        img: "image/phim49.jpg",
        tag: "Phim bộ xem nhiều",
        number:"2,345",

    },
    {
        name: "THE WALKING DEAD - SEASON 8",
        nameVietnamese: "Xác sống - season 8",
        img: "image/phim50.jpg",
        tag: "Phim bộ xem nhiều",
        number:"2,345",

    },
    {
        name: "PRISON BREAK - SEASON 2",
        nameVietnamese: "Vượt ngục - Phần 2",
        img: "image/phim51.jpg",
        tag: "Phim bộ xem nhiều",
        number:"2,345",

    },
    {
        name: "SMALLVILLE - SEASON2",
        nameVietnamese: "Thị trấn Smallville - Season 2",
        img: "image/phim52.png",
        tag: "Phim bộ xem nhiều",
        number:"2,345",

    }
]