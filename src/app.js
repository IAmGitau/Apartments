import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/Apartments', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(`An error occurred: ${err}`)
    else console.log('Database connected')
})
