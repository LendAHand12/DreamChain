import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import Admin from '@/api/Admin';
import Loading from '@/components/Loading';
import NoContent from '@/components/NoContent';
import CustomPagination from '@/components/CustomPagination';

const AdminTicketsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page') || 1;
  const status = searchParams.get('status') || 'all';
  const key = searchParams.get('keyword') || '';

  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState(key);
  const [objectFilter, setObjectFilter] = useState({
    pageNumber: page,
    status,
    keyword: key,
  });

  const pushParamsToUrl = (pageNumber: any, searchStatus: any, keyword: any) => {
    const params = new URLSearchParams();
    if (pageNumber) params.set('page', pageNumber);
    if (searchStatus) params.set('status', searchStatus);
    if (keyword) params.set('keyword', keyword);
    const qs = params.toString();
    navigate(qs ? `/admin/tickets?${qs}` : '/admin/tickets');
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { pageNumber, status, keyword } = objectFilter;
      await Admin.getAllTickets(objectFilter)
        .then((response) => {
          const { tickets, pages } = response.data;
          setData(tickets);
          setTotalPage(pages);
          setLoading(false);
          pushParamsToUrl(pageNumber, status, keyword);
        })
        .catch((error) => {
          let message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          toast.error(t(message));
          setLoading(false);
        });
    })();
  }, [objectFilter]);

  const handleChangePage = useCallback(
    (page: number) => setObjectFilter({ ...objectFilter, pageNumber: page as any }),
    [objectFilter],
  );

  const onChangeStatus = useCallback(
    (e: any) =>
      setObjectFilter({ ...objectFilter, status: e.target.value, pageNumber: 1 as any }),
    [objectFilter],
  );

  const handleSearch = useCallback(() => {
    setObjectFilter({ ...objectFilter, keyword, pageNumber: 1 as any });
  }, [keyword, objectFilter]);

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="relative overflow-x-auto py-24 px-10">
        <div className="flex items-center justify-between pb-4 bg-white">
          <div className="flex items-center gap-4">
            <select
              className="block p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none active:outline-none"
              onChange={onChangeStatus}
              defaultValue={objectFilter.status}
              disabled={loading}
            >
              <option value="all">All</option>
              <option value="OPEN">OPEN</option>
              <option value="CLOSED">CLOSED</option>
            </select>
            <div className="flex items-center gap-2">
              <input
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
                placeholder={t('search with subject or email') as string}
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
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t('Subject')}
              </th>
              <th scope="col" className="px-6 py-3">
                {t('User')}
              </th>
              <th scope="col" className="px-6 py-3">
                {t('Messages')}
              </th>
              <th scope="col" className="px-6 py-3">
                {t('status')}
              </th>
              <th scope="col" className="px-6 py-3">
                {t('Last Updated')}
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              !loading &&
              data.map((ele: any) => (
                <tr className="bg-white border-b hover:bg-gray-50" key={ele._id}>
                  <td className="px-6 py-4 font-semibold">{ele.subject}</td>
                  <td className="px-6 py-4">
                    <div className="font-normal text-gray-500">
                      {ele.userInfo?.userId} <br /> {ele.userInfo?.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">{ele.messageCount}</td>
                  <td className="px-6 py-4">
                    <div
                      className={`w-fit px-4 py-1 rounded-md text-white text-xs ${
                        ele.status === 'OPEN' ? 'bg-green-600' : 'bg-gray-500'
                      }`}
                    >
                      {ele.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(ele.updatedAt).toLocaleString('vi')}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate(`/admin/tickets/${ele._id}`)}
                      className="text-blue-600 hover:underline"
                    >
                      {t('view')}
                    </button>
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
            currentPage={parseInt(objectFilter.pageNumber as any)}
            totalPages={totalPage}
            onPageChange={handleChangePage}
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default AdminTicketsPage;
