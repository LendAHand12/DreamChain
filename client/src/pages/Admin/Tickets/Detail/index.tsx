import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Admin from '@/api/Admin';
import Loading from '@/components/Loading';
import DefaultLayout from '@/layout/DefaultLayout';
import TicketThread from '@/components/TicketThread';

const AdminTicketDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: any) => state.auth);
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<any>(null);
  const [closing, setClosing] = useState(false);

  const canUpdate = userInfo?.permissions
    ?.find((p: any) => p.page.path === '/admin/tickets')
    ?.actions.includes('update');

  const fetchTicket = async () => {
    setLoading(true);
    await Admin.getTicketById(id)
      .then((response) => {
        setTicket(response.data.ticket);
        setLoading(false);
      })
      .catch((error) => {
        let message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        toast.error(t(message));
        setLoading(false);
        navigate('/admin/tickets');
      });
  };

  useEffect(() => {
    fetchTicket();
  }, [id]);

  const handleReply = async (formData: FormData) => {
    await Admin.replyTicketByAdmin(id, formData)
      .then((response) => {
        setTicket(response.data.ticket);
      })
      .catch((error) => {
        let message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        toast.error(t(message));
      });
  };

  const handleClose = async () => {
    if (!window.confirm(t('Are you sure you want to close this ticket?') as string)) return;
    setClosing(true);
    await Admin.closeTicket(id)
      .then((response) => {
        toast.success(t(response.data.message));
        setTicket(response.data.ticket);
      })
      .catch((error) => {
        let message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        toast.error(t(message));
      })
      .finally(() => setClosing(false));
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      {loading && (
        <div className="w-full flex justify-center my-24">
          <Loading />
        </div>
      )}
      {!loading && ticket && (
        <TicketThread
          ticket={ticket}
          viewerModel="Admin"
          canReply={ticket.status === 'OPEN' && canUpdate}
          onSubmitReply={handleReply}
          headerActions={
            canUpdate &&
            ticket.status === 'OPEN' && (
              <button
                onClick={handleClose}
                disabled={closing}
                className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white text-sm rounded-md hover:opacity-70"
              >
                {closing && <Loading />}
                {t('Close ticket')}
              </button>
            )
          }
        />
      )}
    </DefaultLayout>
  );
};

export default AdminTicketDetail;
