import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();


// CREATE

router.post("/", async (req, res) => {

    try {

        const student = new Student(req.body);

        await student.save();

        res.status(201).json(student);

    } catch (err) {

        res.status(500).json(err);

    }

});


// READ ALL

router.get("/", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (err) {

        res.status(500).json(err);

    }

});


// READ ONE

router.get("/:id", async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        res.json(student);

    } catch (err) {

        res.status(500).json(err);

    }

});


// UPDATE

router.put("/:id", async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(student);

    } catch (err) {

        res.status(500).json(err);

    }

});


// DELETE

router.delete("/:id", async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({

            message: "Student Deleted"

        });

    } catch (err) {

        res.status(500).json(err);

    }

});

export default router;