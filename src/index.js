import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3000

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));


app.get("/", (req, res) => {
    res.send("Hey there")
})

// Get Users
app.get("/api/users", (req, res) => {
    // TO-DO: Get data from DB
    const userRows = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            lastName: "Hubbard",
            firstName: "Eula",
            email: "kewez@@gmail.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
            verified: true,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
            lastName: "Manning",
            firstName: "Stella",
            email: "comhuhmit@gmail.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
            verified: true,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
            lastName: "Greer",
            firstName: "Mary",
            email: "ujudokon@hottmail.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
            verified: true,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
            lastName: "Williamson",
            firstName: "Mildred",
            email: "tinhavabe@gmail.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
            verified: true,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
            lastName: "Gross",
            firstName: "Jose",
            email: "gobtagbes@yahoo.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
        }
    ];
    res.json(userRows);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})