/**
 * Generate a random 6-digit OTP
 * @returns {string} 6-digit OTP as string
 */
export const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Check if OTP has expired
 * @param {Date} otpExpiry - The expiry date of the OTP
 * @returns {boolean} true if expired, false otherwise
 */
export const isOtpExpired = (otpExpiry) => {
    if (!otpExpiry) return true;
    return new Date() > new Date(otpExpiry);
};

/**
 * Get OTP expiry time (10 minutes from now)
 * @returns {Date} Expiry date
 */
export const getOtpExpiry = () => {
    return new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
};
