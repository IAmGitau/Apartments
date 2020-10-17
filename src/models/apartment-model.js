import mongoose from 'mongoose'

const date = () => {
    return new Date()
}

export const ApartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    count: {
        type: Number,
        required: false,
        default: 0
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    manager: {
        type: mongoose.Types.ObjectId,
        ref: 'Manager',
        required: true
    },
    careTaker: {
        type: mongoose.Types.ObjectId,
        ref: 'CareTaker',
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: date()
    },
    updatedAt: {
        type: String,
        required: false,
        default: null
    },
    twoBedRoom: {
        type: Number,
        required: false,
        default: 0
    },
    oneBedRoom: {
        type: Number,
        required: false,
        default: 0
    },
    threeBedRoom: {
        type: Number,
        required: false,
        default: 0
    },
    fourBedRoom: {
        type: Number,
        required: false,
        default: 0
    },
    location: {
        type: String,
        required: true,
    }
})

const Apartment = mongoose.model('Apartment', ApartmentSchema)

export default Apartment