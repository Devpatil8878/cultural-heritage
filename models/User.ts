import mongoose, { ConnectOptions, ObjectId } from 'mongoose';

mongoose.connect('mongodb+srv://DEV:devanand@saaqi.hk5f3oi.mongodb.net/?retryWrites=true&w=majority&appName=Saaqi', { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);


interface typeUser extends Document {
    name?: string;
    number?: number; 
    email?: string;
    password?: string; 
    confirmpassword?: string;
    createdAt: Date;
  }



const UserSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: false
    },
    number:  {
        type: Number,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    confirmpassword: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const User = mongoose.models.Tempuser || mongoose.model<typeUser>('Tempuser', UserSchema);


export default User;
