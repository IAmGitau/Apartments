import mongoose from 'mongoose'

export const TenantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // Age of the tenant as of acquisition time
    age: {
        type: Number,
        required: true
    },
    // The tenant gender
    gender: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    }
})

const Tenant = mongoose.model('Tenant', TenantSchema)
export default Tenant