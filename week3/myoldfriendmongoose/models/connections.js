const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://valentinlemaitre:4gcrIN1cbB3BjFbh@cluster0.pi5jnq3.mongodb.net/letsmodelize';
;

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
.then(() => console.log('Database Connected'))
.catch(error => console.log(error))
