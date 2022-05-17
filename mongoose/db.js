import mongoose from 'mongoose';

const db = async () => {
  mongoose.connect(process.env.MONGO_URI)
}

export default db;