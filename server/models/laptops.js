const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let laptopSchema = new Schema({
    /* id: {
         type: String,
         required: true,
     },*/
    Name: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
    Date_of_establishment: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    }
}, {
    collection: 'laptops'
});

module.exports = Laptop = mongoose.model("Laptop", laptopSchema);