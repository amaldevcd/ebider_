import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    quantity: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    initalBidAmt: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    biddingTime: {
      type: Number,
      required: [true, 'Please provide product bidding time'],
      default: 0,
    },
    finalBidAmt: {
        type: Number,
       // required: [true, 'Please provide product price'],
        default: 0,
      },
    smallDescription: {
      type: String,
     // required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    detailDescription: {
      type: String,
     // required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    image1Url: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    image2Url: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    image3Url: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    category: {
      type: String,
      enum: ['veg', 'fruit', 'other'],
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    num_of_bids: {
      type: Number,
      default: 0,
    },
    _id_owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ItemSchema.virtual('bidds', {
  ref: 'Bidding',
  localField: '_id',
  foreignField: '_id_item',
  justOne: false,
});

ItemSchema.pre('remove', async function (next) {
  await this.model('Review').deleteMany({ product: this._id });
});

export default mongoose.model('Item', ItemSchema);
