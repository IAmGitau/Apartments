import mongoose from 'mongoose'

export const CareTakerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true,
        unique: true
    },
    // ie. Mr or Ms
    label: {
        type: String,
        required: false,
        default: null
    },
    employmentDate: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: false,
    }
})

const CareTaker = mongoose.model('caretaker', CareTakerSchema)
export default CareTaker