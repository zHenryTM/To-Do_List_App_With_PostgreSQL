const router = require("express").Router()
const Task = require("./../models/Task")

router.get("/", async (req, res) => {
    try { 
        const task = await Task.findAll()
        console.log(task)
        res.render("home", {task: task})
    } catch(err) {
        console.log("error getting your tasks... " + err)
    }
})

router.get("/add", (req, res) => {
    res.render("add")
})

router.get("/delete/:id", async (req, res) => {
    try {
        await Task.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/")
    } catch(err) {
        console.log("error deleting your task..." + err)
    }
})

router.post("/add", async (req, res) => {
    try {
        const task = await Task.create({
            task: req.body.task
        })

        res.redirect("/")
    } catch(err) {
        console.log("Error creating a new task..." + err)
    }
    
})

module.exports = app => app.use(router)