const express =require("express");
const  mongoose  = require("mongoose");
const router =express.Router();
const bodyParser =require("body-parser")
require("dotenv").config();
const cors =require("cors")
const app = express();

// app.use(cors());
var corsOptions = {
  origin: "http://localhost:5173/",
  credentials :true
};

app.use(cors());
app.use(bodyParser.json());

const UserRouter =require("./Routes/user")


app.use('/auth',UserRouter)

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173/');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });
mongoose
 .connect(process.env.MONGODB)
 .then(()=>{
  console.log("connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((error) =>{
 console.log("conection error",error.message)
});