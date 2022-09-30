const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    icon: {
        type: String,
    },
})

module.exports = mongoose.model("Categories", categoriesSchema);