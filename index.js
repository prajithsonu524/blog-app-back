const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const app = express();

mongoose.connect(
  "mongodb+srv://sonu:Choylifu123@blogapp.o7yxw.mongodb.net/myapp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});

//middleware
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);



app.route("/").get((req, res) => res.json("aarya"));

app.listen(port,"0.0.0.0", () =>
  console.log(`welcome your listinnig at port ${port}`)
);
