const mongoose = require('mongoose');

const connectionURL ='mongodb://127.0.0.1:27017/task-manager'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.Model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'teste',
    age:27
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})