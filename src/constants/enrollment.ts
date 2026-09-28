

export const paymentInfo = {
    phoneNumber: "+91 9123944746",
    recipientName: "Khokon Sarkar",
    // Fallback display only — the server's batch.manualPaymentPrice is the
    // source of truth (currently 2289). Keep in sync when it changes.
    amount: 2289,
    currency: "INR",
    instructions: [
        "Open your PhonePe app",
        "Send money to the number above",
        "Enter the exact amount: INR 2,000",
        "Add reference: 'EP-",
        "Complete the payment",
        "Fill in your payment details below"
    ]
};
