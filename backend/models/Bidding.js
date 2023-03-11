import mongoose from 'mongoose';

const BiddingSchema = mongoose.Schema(
  {
    _id_owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    _id_item: {
      type: mongoose.Types.ObjectId,
      ref: 'Item',
      required: true,
    },

    amt: {
      type: Number,
      
      required: [true, 'Please provide amt'],
    },
    // title: {
    //   type: String,
    //   trim: true,
    //   required: [true, 'Please provide review title'],
    //   maxlength: 100,
    // },
    // comment: {
    //   type: String,
    //   required: [true, 'Please provide review text'],
    // },
 
  },
  { timestamps: true }
);
// ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

// ReviewSchema.statics.calculateAverageRating = async function (productId) {
//   const result = await this.aggregate([
//     { $match: { product: productId } },
//     {
//       $group: {
//         _id: null,
//         averageRating: { $avg: '$rating' },
//         numOfReviews: { $sum: 1 },
//       },
//     },
//   ]);

//   try {
//     await this.model('Product').findOneAndUpdate(
//       { _id: productId },
//       {
//         averageRating: Math.ceil(result[0]?.averageRating || 0),
//         numOfReviews: result[0]?.numOfReviews || 0,
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// ReviewSchema.post('save', async function () {
//   await this.constructor.calculateAverageRating(this.product);
// });


// ReviewSchema.post('remove', async function () {
//   await this.constructor.calculateAverageRating(this.product);
// });

export default mongoose.model('Review', BiddingSchema);
