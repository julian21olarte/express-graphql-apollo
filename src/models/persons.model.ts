import mongoose, { Schema } from 'mongoose'
import { Person } from 'app/interfaces/person'

const schema = new Schema<Person>(
    {
        name: { required: true, type: String },
        email: { required: true, type: String, unique: true },
        gender: {
            required: true,
            type: String,
            enum: {
                values: ['Male', 'Female'],
                message: '{VALUE} gender is not supported',
            },
        },
        type: { type: String },
    },
    { timestamps: true }
)

export const PersonsModel = mongoose.model('Persons', schema)
