const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const redis = require("redis");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use("/", employeeRoutes);



const client = redis.createClient({
    url: "redis://localhost:6379"
});

client.connect();

client.on("error", (err) => {
    console.log("Redis Error:", err);
});

async function saveEmployee() {

    await client.set(
        "employee:1",
        JSON.stringify({
            name: "Oleg",
            position: "Developer"
        })
    );

    console.log("Employee saved to Redis");
}

saveEmployee();




app.listen(3000, () => {
    console.log("Server running on port 3000");
});