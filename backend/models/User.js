
import mongoose  from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add your name'],
    },
    lastName: {
        type: String,
        // required: [true, 'Please add your name'],
      },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please add your phone number'],
    },
    address:{
        type: String,
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    zipCode:{
        type: String,
    },
    country:{
        type: String,
    },
    verificationToken: String,
    isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },

  },
  {
    timestamps: true,
  }
);
UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

export default mongoose.model('User', UserSchema);