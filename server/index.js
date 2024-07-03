// starting point of our server
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()
import postRoutes from "./routes/PostRoutes.js"

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())


app.use("/posts", postRoutes)


// we will use mongo db server for our database
const CONNECTION_URL = "mongodb+srv://akashjais929:Akashjais%40929@cluster0.ph9sb2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = 5000

mongoose.connect(CONNECTION_URL)
    .then(
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    )
    .catch((err) => {
        console.log("error message :" + err.message);
    })

// mongoose.set('useFindAndModify', false);