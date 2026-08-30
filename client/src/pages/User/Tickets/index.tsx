import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import User from '@/api/User';
import Loading from '@/components/Loading';
import NoContent from '@/components/NoContent';
import CustomPagination from '@/components/CustomPagination';
import DefaultLayout from '@/layout/DefaultLayout';

const MAX_ATTACHMENTS = 5;

const Tickets = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    (async () => {
      setLoading(true);
      await User.getMyTickets(pageNumber)
        .then((response) => {
          const { tickets, pages } = response.data;
          setData(tickets);
          setTotalPage(pages);
          setLoading(false);
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
  }, [pageNumber, refresh]);

  const handleChangePage = useCallback((page: number) => setPageNumber(page), []);

  const openModal = () => {
    setSubject('');
    setMessage('');
    setFiles([]);
    setFormError('');
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length > MAX_ATTACHMENTS) {
      setFormError(`You can attach up to ${MAX_ATTACHMENTS} images`);
      setFiles(selected.slice(0, MAX_ATTACHMENTS));
      return;
    }
    setFormError('');
    setFiles(selected);
  };

  const handleCreateTicket = async () => {
    if (!subject.trim() || !message.trim()) {
      setFormError('Subject and message are required');
      return;
    }
    setFormError('');
    setCreating(true);
    const formData = new FormData();
    formData.append('subject', subject.trim());
    formData.append('message', message.trim());
    files.forEach((file) => formData.append('attachments', file));

    await User.createTicket(formData)
      .then(() => {
        toast.success(t('Ticket created'));
        setShowModal(false);
        setRefresh(!refresh);
      })
      .catch((error) => {
        let msg =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        toast.error(t(msg));
      })
      .finally(() => setCreating(false));
  };

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
            width: '90%',
            maxWidth: '500px',
          },
        }}
      >
        <div className="text-left">
          <h2 className="text-lg font-bold mb-4">{t('New Ticket')}</h2>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">{t('Subject')}</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              disabled={creating}
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">{t('Message')}</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              disabled={creating}
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              {t('Attachments')} ({t('up to 5 images')})
            </label>
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/webp, image/gif"
              multiple
              onChange={handleFilesChange}
              disabled={creating}
              className="text-sm"
            />
            {files.length > 0 && (
              <div className="text-xs text-gray-500 mt-1">{files.length} file(s) selected</div>
            )}
          </div>
          {formError && <div className="text-xs text-red-600 mb-3">{formError}</div>}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={closeModal}
              disabled={creating}
              className="py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
            >
              {t('cancel')}
            </button>
            <button
              onClick={handleCreateTicket}
              disabled={creating}
              className="flex items-center gap-2 py-2 px-4 text-sm font-medium text-white bg-black rounded-lg hover:opacity-70"
            >
              {creating && <Loading />}
              {t('submit')}
            </button>
          </div>
        </div>
      </Modal>

      <div className="relative overflow-x-auto py-24 px-10">
        <div className="flex items-center justify-between pb-4 bg-white">
          <h1 className="text-lg font-bold">{t('My Tickets')}</h1>
          <button
            onClick={openModal}
            className="flex items-center gap-2 px-6 py-2 bg-black text-white text-sm rounded-md hover:opacity-70"
          >
            {t('New Ticket')}
          </button>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t('Subject')}
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
                      onClick={() => navigate(`/user/tickets/${ele._id}`)}
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
            currentPage={pageNumber}
            totalPages={totalPage}
            onPageChange={handleChangePage}
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default Tickets;
