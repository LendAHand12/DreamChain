import mongoose from "mongoose";

const ticketMessageSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "messages.senderModel",
    },
    senderModel: {
      type: String,
      required: true,
      enum: ["User", "Admin"],
    },
    message: {
      type: String,
      default: "",
    },
    attachments: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const ticketSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "CLOSED"],
      default: "OPEN",
    },
    messages: [ticketMessageSchema],
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
