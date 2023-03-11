import mongoose from "mongoose";
const Schema =  mongoose.Schema;

const BidSchema = new Schema({
    pId:
    {
        type: Number,
        required: true,
    },
    price:
    {
        type: Number,
        required: true,
    },
    time:
    {
        type: String,
        default: Date.now()
    },
    bId:
    {
        type: Number,
        required: true,
    },
    isOpen:
    {
        type: Boolean,
        required: true,
    }

})

const Bid = mongoose.model("Bid",BidSchema);
export default Bid;