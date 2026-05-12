const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    plan: String,
    amount: Number,
    status: { type: String, default: "pending" },
    screenshotFileId: String,
    createdAt: { type: Date, default: Date.now },
    processedAt: Date,
});

const userSchema = new mongoose.Schema({
    telegramId: { type: Number, unique: true },
    username: { type: String, default: "" },
    firstName: { type: String, default: "" },
    coins: { type: Number, default: 20 },
    lastDaily: { type: Date, default: null },
    referrals: { type: Number, default: 0 },
    referredBy: { type: Number, default: null },
    premium: { type: Boolean, default: false },
    premiumPlan: { type: String, default: null },
    premiumExpires: { type: Date, default: null },
    mode: { type: String, default: "normal" },
    memory: { type: Array, default: [] },
    banned: { type: Boolean, default: false },
    banReason: { type: String, default: null },
    totalEarned: { type: Number, default: 0 },
    payments: { type: [paymentSchema], default: [] },
    joinDate: { type: Date, default: Date.now },
    joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
