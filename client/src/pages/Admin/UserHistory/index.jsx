import { useCallback, useEffect, useState } from 'react';

import userHistoryStatus from '@/constants/userHistoryStatus';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import NoContent from '@/components/NoContent';
import Loading from '@/components/Loading';
import { useNavigate, useLocation } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import Modal from 'react-modal';
import UserHistory from '@/api/UserHistory';
import { shortenWalletAddress } from '@/utils';
import { useSelector } from 'react-redux';
import CustomPagination from '@/components/CustomPagination';

const UserHistoryPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page') || 1;
  const status = searchParams.get('status') || 'all';
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const key = searchParams.get('keyword') || '';
  const [objectFilter, setObjectFilter] = useState({
    pageNumber: page,
    status,
    keyword: key,
  });
  const [showModal, setShowModal] = useState(false);
  const [currentApproveRequest, setCurrentApproveRequest] = useState(null);
  const [currentCancelRequest, setCurrentCancelRequest] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [currentRequestStatus, setCurrentRequestStatus] = useState(null);
  const [keyword, setKeyword] = useState(key);

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { pageNumber, status, keyword } = objectFilter;
      await UserHistory.getList(objectFilter)
        .then((response) => {
          const { list, pages } = response.data;
          setData(list);
          setTotalPage(pages);
          setLoading(false);
          pushParamsToUrl(pageNumber, status, keyword);
        })
        .catch((error) => {
          let message =
            error.response && error.response.data.error
              ? error.response.data.error
              : error.message;
          toast.error(t(message));
          setLoading(false);
        });
    })();
  }, [objectFilter, refresh]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const pushParamsToUrl = (pageNumber, searchStatus, keyword) => {
    const searchParams = new URLSearchParams();
    if (pageNumber) {
      searchParams.set('page', pageNumber);
    }
    if (searchStatus) {
      searchParams.set('status', searchStatus);
    }
    if (keyword) {
      searchParams.set('keyword', keyword);
    }
    const queryString = searchParams.toString();
    const url = queryString
      ? `/admin/user-history?${queryString}`
      : '/admin/user-history';
    navigate(url);
  };

  const handleChangePage = useCallback(
    (page) => setObjectFilter({ ...objectFilter, pageNumber: page }),
    [objectFilter],
  );

  const onChangeStatus = useCallback(
    (e) =>
      setObjectFilter({
        ...objectFilter,
        status: e.target.value,
        pageNumber: 1,
      }),
    [objectFilter],
  );

  const handleApprove = async (request) => {
    setShowModal(true);
    setCurrentRequestStatus('approve');
    setCurrentApproveRequest(request);
  };

  const handleCancel = async (request) => {
    setShowModal(true);
    setCurrentRequestStatus('reject');
    setCurrentCancelRequest(request);
  };

  const rejectChange = useCallback(async () => {
    await UserHistory.update({
      status: 'reject',
      id: currentCancelRequest._id,
    })
      .then((response) => {
        toast.success(t(response.data.message));
        setShowModal(false);
        setRefresh(!refresh);
      })
      .catch((error) => {
        let message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        toast.error(t(message));
      });
  }, [currentCancelRequest]);

  const handleApproveChange = useCallback(async () => {
    console.log({currentApproveRequest});
    await UserHistory.update({
      status: 'approve',
      id: currentApproveRequest._id,
    })
      .then((response) => {
        toast.success(t(response.data.message));
        setShowModal(false);
        setRefresh(!refresh);
      })
      .catch((error) => {
        let message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        toast.error(t(message));
      });
  }, [currentApproveRequest]);

  const handleSearch = useCallback(() => {
    setObjectFilter({ ...objectFilter, keyword, pageNumber: 1 });
  }, [keyword, objectFilter]);

  return (
    <DefaultLayout>
      <ToastContainer />
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <div className="overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
          <div className="relative w-full max-w-md h-full md:h-auto">
            <div className="relative text-center bg-white rounded-lg sm:p-5">
              <button
                onClick={closeModal}
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 w-11 h-11 mb-3.5 mx-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.68542 6.65868C0.758716 6.96758 0.779177 8.28543 1.71502 8.56541L9.20844 10.8072L11.6551 18.5165C11.948 19.4394 13.2507 19.4488 13.5569 18.5302L18.8602 2.62029C19.1208 1.83853 18.3771 1.09479 17.5953 1.35538L1.68542 6.65868ZM5.31842 7.55586L16.3304 3.8852L12.6316 14.9817L10.9548 9.69826C10.8547 9.38295 10.6052 9.13754 10.2883 9.04272L5.31842 7.55586Z"
                  fill="currentColor"
                />
                <path
                  d="M17.7674 1.43951L18.8105 2.51742L9.98262 11.0605L8.93948 9.98265L17.7674 1.43951Z"
                  fill="currentColor"
                />
              </svg>
              <p className="mb-4 text-gray-500 ">
                Are you sure you want to {currentRequestStatus} this request?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={closeModal}
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  onClick={
                    currentRequestStatus === 'approve'
                      ? handleApproveChange
                      : rejectChange
                  }
                  className="flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  {loadingPayment && <Loading />}
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="relative overflow-x-auto py-24 px-10">
        <div className="flex items-center justify-between pb-4 bg-white">
          <div className="flex items-center gap-4">
            <div>
              <select
                className="block p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none active:outline-none"
                onChange={onChangeStatus}
                defaultValue={objectFilter.status}
                disabled={loading}
              >
                <option value="all">All</option>
                {userHistoryStatus.map((status) => (
                  <option value={status.status} key={status.status}>
                    {status.status}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  onChange={onSearch}
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
                  placeholder={t('search with user name or email')}
                  defaultValue={objectFilter.keyword}
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="h-8 flex text-xs justify-center items-center hover:underline bg-black text-DreamChain font-bold rounded-full py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  {t('search')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Old Value
              </th>
              <th scope="col" className="px-6 py-3">
                New Value
              </th>
              <th scope="col" className="px-6 py-3">
                {t('time')}
              </th>
              <th scope="col" className="px-6 py-3">
                {t('status')}
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              !loading &&
              data.map((ele) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50"
                  key={ele._id}
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                  >
                    <div className="">
                      <div className="text-base font-semibold">
                        {ele.userInfo.userId}
                      </div>
                      <div className="font-normal text-gray-500">
                        {ele.userInfo.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{ele.field === "walletAddress" ? shortenWalletAddress(ele.oldValue, 12) : ele.oldValue}</td>
                  <td className="px-6 py-4">{ele.field === "walletAddress" ? shortenWalletAddress(ele.newValue, 12) : ele.newValue}</td>
                  <td className="px-6 py-4">
                    {new Date(ele.changedAt).toLocaleString('vi')}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`max-w-fit text-white rounded-sm py-1 px-2 text-sm ${
                        userHistoryStatus.find(
                          (item) => item.status === ele.status.toUpperCase(),
                        ).color
                      } mr-2`}
                    >
                      {ele.status.toUpperCase()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-6">
                      {userInfo?.permissions
                        .find((p) => p.page.pageName === 'admin-user-history')
                        ?.actions.includes('update') &&
                        ele.status === 'pending' && (
                          <button
                            onClick={() => handleApprove(ele)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-green-700 text-white"
                          >
                            <svg
                              fill="currentColor"
                              height="24"
                              width="24"
                              version="1.1"
                              id="Icons"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path
                                d="M24.5,11c-0.7-0.1-1.4,0-2,0.4c-0.4-0.7-1.2-1.2-2-1.4c-0.7-0.1-1.4,0-2,0.4c-0.4-0.7-1.2-1.2-2-1.4C16,9,15.5,9,15,9.2V5.1
	c0-1.5-1.1-2.8-2.5-3.1c-0.9-0.1-1.8,0.1-2.4,0.7C9.4,3.3,9,4.1,9,5v5.3C8.4,10.1,7.8,10,7.1,10c-0.6,0.1-1.3,0.3-1.8,0.7
	C5.1,10.9,5,11.2,5,11.5v7.7C5,24.9,9.5,29.7,15,30c0.2,0,0.3,0,0.5,0c0.1,0,0.3,0,0.4,0C22,29.8,27,24.5,27,18.1v-4
	C27,12.6,25.9,11.3,24.5,11z M25,18.1c0,5.3-4.1,9.7-9.2,9.9c-0.3,0-0.5,0-0.8,0C10.6,27.8,7,23.8,7,19.2v-7.1C7.1,12,7.2,12,7.3,12
	c0.4,0,0.8,0.1,1.2,0.4C8.8,12.7,9,13.1,9,13.5V19c0,0.6,0.4,1,1,1s1-0.4,1-1v-5.5V12V5c0-0.3,0.1-0.6,0.4-0.8C11.6,4,11.9,4,12.2,4
	C12.6,4.1,13,4.6,13,5.1V12v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.5-0.3,0.8-0.2c0.5,0.1,0.8,0.6,0.8,1.1
	V13v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.5-0.3,0.8-0.2c0.5,0.1,0.8,0.6,0.8,1.1V14v1c0,0.6,0.4,1,1,1
	s1-0.4,1-1v-1c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.5-0.3,0.8-0.2c0,0,0,0,0,0c0.5,0.1,0.8,0.6,0.8,1.1V18.1z"
                              />
                            </svg>
                            Approve
                          </button>
                        )}
                      {userInfo?.permissions
                        .find((p) => p.page.pageName === 'admin-user-history')
                        ?.actions.includes('update') &&
                        ele.status === 'pending' && (
                          <button
                            onClick={() => handleCancel(ele)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-200 font-medium text-red-700"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128z m0 85.333333c66.133333 0 128 23.466667 179.2 59.733334L273.066667 691.2C236.8 640 213.333333 578.133333 213.333333 512c0-164.266667 134.4-298.666667 298.666667-298.666667z m0 597.333334c-66.133333 0-128-23.466667-179.2-59.733334l418.133333-418.133333C787.2 384 810.666667 445.866667 810.666667 512c0 164.266667-134.4 298.666667-298.666667 298.666667z"
                                fill="#D50000"
                              />
                            </svg>
                            Reject
                          </button>
                        )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {loading && (
          <div className="w-full flex justify-center my-4">
            <Loading />
          </div>
        )}
        {!loading && data.length === 0 && <NoContent />}
        {!loading && data.length > 0 && (
          <CustomPagination
            currentPage={parseInt(objectFilter.pageNumber)}
            totalPages={totalPage}
            onPageChange={handleChangePage}
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default UserHistoryPage;
