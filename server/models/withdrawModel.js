import mongoose from "mongoose";

const withdrawSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    hash: {
      type: String,
    },
    coin: {
      type: String,
      enum: ["USDT", "HEWE"],
      default: "USDT",
    },
    status: {
      type: String,
      required: true,
      enum: ["PENDING", "APPROVED", "CANCEL"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const Withdraw = mongoose.model("Withdraw", withdrawSchema);

export default Withdraw;
