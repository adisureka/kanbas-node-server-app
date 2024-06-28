//import model from "./model.js
import mongoose from "mongoose"
import schema from "./schema.js"
const CONNECTION_STRING = "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING)

const model = mongoose.model("UserModel", schema)
const quizId = "1719372999317"


const temp = await model.find({"quizId": quizId})
//without the await you will get a temp MongoObject not an array
console.log(temp.length)