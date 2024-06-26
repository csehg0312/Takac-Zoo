const express = require("express");
// const forever = require("forever");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const AnimalRoutes = require("./Routes/AnimalRoutes");
const EnclosureRoutes = require("./Routes/EnclosureRoutes");
const FeedingRoutes = require("./Routes/FeedingRoutes");
const MedicalRecordRoutes = require("./Routes/MedicalRecordRoutes");
const VeteritarianRoutes = require("./Routes/VeteritarianRoutes");
const VisitorRoutes = require("./Routes/VisitorRoutes");
const ZookeeperRoutes = require("./Routes/ZookeeperRoutes");

app.use(express.json());
// app.use(
//   cors({
//     origin: ["*"],
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(cors());

app.use(express.static("./dist"));

app.use("/AnimalRoutes", AnimalRoutes);
app.use("/EnclosureRoutes", EnclosureRoutes);
app.use("/FeedingRoutes", FeedingRoutes);
app.use("/MedicalRecordsRoutes", MedicalRecordRoutes);
app.use("/VeteritarianRoutes", VeteritarianRoutes);
app.use("/VisitorRoutes", VisitorRoutes);
app.use("/ZookeeperRoutes", ZookeeperRoutes);

const db_user = process.env.DB_USER;
const db_pwd = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${db_user}:${db_pwd}@cluster.soqfcau.mongodb.net/Zoo?retryWrites=true&w=majority&appName=Cluster`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
