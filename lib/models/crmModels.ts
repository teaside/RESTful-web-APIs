import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ConactSchema = new Schema({
    firstName: {
        type: String,
        requierd: 'Enter a first name'
    },
    lastName: {
        type: String,
        requierd: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});