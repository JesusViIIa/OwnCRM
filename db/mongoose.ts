import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://sheamuns120:tYTivBW0JNLiECqy@serverlessinstance0.qk3njrc.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB!'));


export default db;