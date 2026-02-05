import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

import Auth from '@/api/Auth';
import SignInLayout from '@/layout/SignInLayout';
import Loading from '@/components/Loading';
import { LOGIN } from '@/slices/auth';

const VerifyOtpPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const parsed = queryString.parse(location.search);

    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [userId, setUserId] = useState('');

    // Get login credentials from state if coming from login flow
    const fromLogin = location.state?.fromLogin || false;
    const loginCode = location.state?.code || '';
    const loginPassword = location.state?.password || '';

    useEffect(() => {
        // Get userId from URL params or location state
        const userIdFromUrl = parsed.userId || location.state?.userId;
        if (!userIdFromUrl) {
            toast.error('Invalid access. Please register or login again.');
            navigate('/signup');
            return;
        }
        setUserId(userIdFromUrl);
    }, []);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        if (!otp || otp.length !== 6) {
            toast.error(t('Please enter a valid 6-digit OTP'));
            return;
        }

        setLoading(true);
        try {
            await Auth.verifyOtp({ userId, otp });
            toast.success(t('Account verified successfully!'));

            // If coming from login flow, auto-login
            if (fromLogin && loginCode && loginPassword) {
                setTimeout(async () => {
                    try {
                        const response = await Auth.login({ code: loginCode, password: loginPassword });
                        dispatch(LOGIN(response.data));
                        navigate('/');
                    } catch (error: any) {
                        toast.error(t('Verification successful but login failed. Please login manually.'));
                        setTimeout(() => navigate('/signin'), 2000);
                    }
                }, 1000);
            } else {
                // Normal flow: redirect to signin
                setTimeout(() => {
                    navigate('/signin');
                }, 1500);
            }
        } catch (error: any) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            toast.error(t(message));
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        if (countdown > 0) return;

        setResendLoading(true);
        try {
            await Auth.resendOtp({ userId });
            toast.success(t('OTP sent successfully! Please check your email.'));
            setCountdown(60);
            setOtp('');
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            toast.error(t(message));
        } finally {
            setResendLoading(false);
        }
    };

    const handleOtpChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setOtp(value);
    };

    return (
        <>
            <ToastContainer />
            <SignInLayout>
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-gray-900 flex justify-center bg-white">
                        <div className="max-w-screen-xl m-0 sm:m-10 flex justify-center flex-1">
                            <div className="w-full p-12">
                                <div className="mt-12 flex flex-col items-center">
                                    <h1 className="font-extrabold text-title-xl text-center">
                                        {t('Verify Your Account')}
                                    </h1>
                                    <p className="text-gray-600 mt-4 text-center max-w-md">
                                        {t('We have sent a 6-digit OTP code to your email. Please enter it below to verify your account.')}
                                    </p>

                                    <div className="w-full flex-1 mt-8">
                                        <form
                                            className="mx-auto w-[350px] xl:w-[500px]"
                                            onSubmit={handleVerifyOtp}
                                            autoComplete="off"
                                        >
                                            {/* OTP Input */}
                                            <div className="mb-6">
                                                <input
                                                    className="text-white w-full px-4 py-4 rounded-lg bg-black border text-center text-2xl tracking-widest focus:outline-none"
                                                    type="text"
                                                    placeholder="000000"
                                                    value={otp}
                                                    onChange={handleOtpChange}
                                                    maxLength={6}
                                                    disabled={loading}
                                                />
                                                <p className="text-gray-500 mt-2 text-sm text-center">
                                                    {t('OTP is valid for 10 minutes')}
                                                </p>
                                            </div>

                                            {/* Verify Button */}
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center font-semibold rounded-3xl border py-4 border-black text-black hover:bg-black hover:text-white duration-100 ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={loading || otp.length !== 6}
                                            >
                                                {loading && <Loading />}
                                                {t('Verify OTP')}
                                            </button>

                                            {/* Resend OTP */}
                                            <div className="mt-6 text-center">
                                                <p className="text-gray-600">
                                                    {t("Didn't receive the code?")}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={handleResendOtp}
                                                    className="mt-2 text-dreamchain font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                                                    disabled={countdown > 0 || resendLoading}
                                                >
                                                    {resendLoading ? (
                                                        <span className="flex items-center justify-center gap-2">
                                                            <Loading />
                                                            {t('Sending...')}
                                                        </span>
                                                    ) : countdown > 0 ? (
                                                        t(`Resend OTP in ${countdown}s`)
                                                    ) : (
                                                        t('Resend OTP')
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SignInLayout>
        </>
    );
};

export default VerifyOtpPage;
