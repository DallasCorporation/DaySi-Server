const axios = require('axios')
const asyncHandler = require('express-async-handler')
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const Categories = require('../models/categoryModel')


const createCategory = asyncHandler(async (req, res) => {
    const { name, description, image, icon } = req.body
    if (!name || !description || !image || !icon) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const category = await Categories.create({
        name,
        description,
        image,
        icon
    })
    if (category)
        res.status(201).json(res.data)
})
const getCategories = asyncHandler(async (req, res) => {
    const goal = await Categories.find({})
    if (goal)
        res.status(200).json(goal)
    else {
        res.status(400)
        throw new Error('Organizations not found')
    }
})

module.exports = {
    createCategory,
    getCategories
}
