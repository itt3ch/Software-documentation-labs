const sqlite3 = require("sqlite3").verbose();
const redis = require("redis");

const db = new sqlite3.Database("./cornerstone.db");


const client = redis.createClient({
    url: "redis://localhost:6379"
});

client.on("error", (err) => {
    console.log("Redis Error:", err);
});


async function main() {

    // підключення до Redis
    await client.connect();

    db.all(
        "SELECT * FROM employees LIMIT 50",
        [],
        async (err, rows) => {

            if (err) {
                console.log(err);
                return;
            }

            console.table(rows);

            
            for (const employee of rows) {

                await client.set(
                    `employee:${employee.id}`,
                    JSON.stringify(employee)
                );
            }

            console.log("Employees saved to Redis");

            await client.quit();
        }
    );
}

main();