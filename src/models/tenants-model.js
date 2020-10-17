import mongoose from 'mongoose'

export const TenantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    label: {
        type: String,
        required: false,
        default: null
    },
    nationalID: {
        type: String,
        required: false,
        default: null
    },
    /**
     * Work of the apartment owner
    * */
    work: {
        type: String,
        required: true,
    },
    /**
     * The apartment given to the tenant
     * */
    apartmentNumber: {
        type: mongoose.Types.ObjectId,
        req: 'Apartment',
    },

    /**
     * If the tenant is a family
     * */
    family: {
        type: Boolean,
        required: true
    },

    /**
     * Number of tenants in the apartment
     * */
    count: {
        type: Number,
        required: true
    },
    tenants: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tenant',
    }]
})

const Tenants = mongoose.model('Tenants', TenantSchema)
export default Tenants