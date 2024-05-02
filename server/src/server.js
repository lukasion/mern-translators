const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const User = require('./models/User');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://db:27017/mern-translators', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.get('/create-user', (req, res) => {
    res.json({'msg': 'Create user route'});
    //
    // const user = new User({
    //     name: 'John Doe',
    //     password: 'password',
    // });
    //
    // user.save()
    //     .then(user => res.json(user))
    //     .catch(err => console.log(err));

});

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on aaport ${PORT}`));