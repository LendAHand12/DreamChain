import { useSelector } from 'react-redux';
import DefaultLayout from '../../../layout/DefaultLayout';
import { shortenWalletAddress } from '../../../utils';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.auth);
  let {
    email,
    userId,
    walletAddress1,
    walletAddress2,
    walletAddress3,
    walletAddress4,
    walletAddress5,
    createdAt,
    id,
    status,
    tier,
    fine,
    countPay,
    listDirectUser,
    phone,
    idCode,
    buyPackage,
    packages,
    tier1Time,
    tier2Time,
    tier3Time,
    tier4Time,
    tier5Time,
    isSerepayWallet,
    totalHewe,
    hewePerDay,
    avalableHewe,
    claimedHewe,
  } = userInfo;

  return (
    <DefaultLayout>
      <div className="px-10 lg:px-24 py-24 space-y-6 lg:space-y-8">
        {status === 'UNVERIFY' && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <span className="block sm:inline">{t('verifyAccountAlert')}</span>
          </div>
        )}

        {(phone === '' || idCode === '') && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <span className="block sm:inline">{t('infoAccountAlert')}</span>
          </div>
        )}
        <div className='bg-[#FAFBFC] p-4 rounded-2xl flex items-center gap-8'>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Available HEWE</p>
            <input className='bg-black rounded-xl text-dreamchain p-2' readOnly value={avalableHewe} />
          </div>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Reward HEWE</p>
            <input className='bg-black rounded-xl text-dreamchain p-2' readOnly value={totalHewe} />
          </div>
          <button className='border border-black rounded-2xl px-12 py-2'>Claim</button>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 font-semibold">
          <div className="bg-[#FAFBFC] p-4 rounded-2xl ">
            <div className="flex justify-between items-center py-2 px-4">
              <p>Status</p>
              <div
                className={`px-6 py-4 ${
                  status === 'UNVERIFY'
                    ? 'bg-red-600'
                    : status === 'PENDING'
                    ? 'bg-yellow-600'
                    : status === 'APPROVED'
                    ? 'bg-green-600'
                    : status === 'REJECTED'
                    ? 'bg-red-600'
                    : status === 'LOCKED'
                    ? 'bg-red-600'
                    : ''
                } text-white rounded-[50px]`}
              >
                {status}
              </div>
            </div>
            <div className="flex justify-between bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Member since</p>
              <p> {new Date(createdAt).toLocaleDateString('vi')}</p>
            </div>
            <div className="flex justify-between py-2 px-4">
              <p>Completed tier 1</p>
              <p>{tier1Time}</p>
            </div>
          </div>
          <div className="bg-[#FAFBFC] p-4 rounded-2xl">
            <div className="flex justify-between py-2 px-4">
              <p>Completed tier 2</p>
              <p>{tier2Time}</p>
            </div>
            <div className="flex justify-between py-2 px-4 bg-[#E5E9EE] rounded-lg">
              <p>Completed tier 3</p>
              <p>{tier3Time}</p>
            </div>
            <div className="flex justify-between py-2 px-4">
              <p>Completed tier 4</p>
              <p>{tier4Time}</p>
            </div>
            <div className="flex justify-between py-2 px-4 bg-[#E5E9EE] rounded-lg">
              <p>Completed tier 5</p>
              <p>{tier5Time}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="flex gap-2 font-semibold hover:bg-gray-100 py-2 px-4 rounded-lg">
            Update{' '}
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.675 1.63718C15.3938 1.35583 15.0599 1.13267 14.6924 0.980441C14.325 0.828213 13.9311 0.749907 13.5333 0.75C13.1355 0.750093 12.7417 0.828583 12.3743 0.980982C12.0068 1.13338 11.6731 1.3567 11.392 1.63818L1.885 11.1582C1.31853 11.7259 1.00028 12.4951 1 13.2972V16.5002C1 16.9142 1.336 17.2502 1.75 17.2502H4.973C5.776 17.2502 6.546 16.9302 7.113 16.3632L16.613 6.85718C17.1797 6.28915 17.4979 5.51954 17.4979 4.71718C17.4979 3.91481 17.1797 3.1452 16.613 2.57718L15.675 1.63718ZM0.75 18.7502C0.551088 18.7502 0.360322 18.8292 0.21967 18.9698C0.0790175 19.1105 0 19.3013 0 19.5002C0 19.6991 0.0790175 19.8899 0.21967 20.0305C0.360322 20.1712 0.551088 20.2502 0.75 20.2502H16.75C16.9489 20.2502 17.1397 20.1712 17.2803 20.0305C17.421 19.8899 17.5 19.6991 17.5 19.5002C17.5 19.3013 17.421 19.1105 17.2803 18.9698C17.1397 18.8292 16.9489 18.7502 16.75 18.7502H0.75Z"
                fill="#02071B"
              />
            </svg>
          </button>
        </div>
        <div className="grid gap-10 font-semibold">
          <div className="bg-[#FAFBFC] p-4 rounded-2xl ">
            <div className="grid grid-cols-2 items-center py-2 px-4">
              <p>Referral code</p>
              <p>{id}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Name</p>
              <p>{userId}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>Email</p>
              <p>{email}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Phone number</p>
              <p>{phone}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>ID/DL/Passport number</p>
              <p>{idCode}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Wallet address Tier 1</p>
              <p>{shortenWalletAddress(walletAddress1, 14)}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>Wallet address Tier 2</p>
              <p>{shortenWalletAddress(walletAddress2, 14)}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Wallet address Tier 3</p>
              <p>{shortenWalletAddress(walletAddress3, 14)}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>Wallet address Tier 4</p>
              <p>{shortenWalletAddress(walletAddress4, 14)}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Wallet address Tier 5</p>
              <p>{shortenWalletAddress(walletAddress5, 14)}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>Completed Registration</p>
              <p>Finished</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Number of contribution</p>
              <p>{listDirectUser.length}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>Tier</p>
              <p>{tier}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>Package</p>
              <p>{buyPackage}</p>
            </div>
            <div className="grid grid-cols-2 py-2 px-4">
              <p>Fine</p>
              <p>{fine}</p>
            </div>
            <div className="grid grid-cols-2 bg-[#E5E9EE] py-2 px-4 rounded-lg">
              <p>ID card front</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;