const DummyStore = {
    users: [
        {
            id: 1,
            email: "user1@demo.com",
            first_name: "Monika",
            last_name: "Thanki",
            password: "password1",
            date_created: "2020-01-03T00:00:00.000Z",
            profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XJlpvEK3jm60AidjxUu9tn1LCL3bQMMpdA&usqp=CAU",
            phone_number: "123456789",
        },
    ],
    events: [
        {
            id: 1,
            description:
                "Cater wedding. Need two bartenders to set up and run bar station; 10 servers to set up tables and accommodate guests as needed",
            location: "123 S. Boulevard",
            date: "2020-12-03",
            user_id: 1,
            time_start: "5:00 PM",
            time_end: "9:00 PM",
            name: "Johnson Family Wedding",
        },
        {
            id: 2,
            description:
                "Spring clean 2 beachhouses on Saturday before renters move in",
            location: "123 Beachway Road",
            date: "2020-12-15",
            user_id: 1,
            time_start: "10:00 AM",
            time_end: "3:30 PM",
            name: "Beachhouse Spring Cleaning",
        },
        {
            id: 3,
            description: "Book models for Shop LLC photoshoot",
            location: "123 Studio Road",
            date: "2020-12-25",
            user_id: 1,
            time_start: "10:50 AM",
            time_end: "1:00 PM",
            name: "Live TV Product Showcase",
        },
    ],
    team: [
        {
            id: 2,
            email: "user2@demo.com",
            first_name: "John",
            last_name: "Doe",
            password: "password2",
            date_created: "2020-01-03T00:00:00.000Z",
            profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYh-keAMG_iqE-6tkiXdItnmptDlrtjcmMzA&usqp=CAU",
            phone_number: "1234567890",
        },
        {
            id: 3,
            email: "user3@demo.com",
            first_name: "Kimberly",
            last_name: "Booker",
            password: "password3",
            date_created: "2020-01-03T00:00:00.000Z",
            profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XJlpvEK3jm60AidjxUu9tn1LCL3bQMMpdA&usqp=CAU",
            phone_number: "1234567890",
        },
    ],
};

export default DummyStore;
