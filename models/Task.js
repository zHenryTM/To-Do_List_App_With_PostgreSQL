const Sequelize = require("sequelize")

require("dotenv").config()

const sequelize = new Sequelize("todolist", "postgres", process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "postgres"
})

async function startDB() {
    try {
        await sequelize.authenticate()
        console.log("Connected to database!")
    } catch(err) {
        console.log("Error connecting to database..."  + err)
    }
}

startDB()

const Task = sequelize.define("task", {
    task: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Task.sync()

module.exports = Task