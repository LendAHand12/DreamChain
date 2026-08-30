import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import User from '@/api/User';
import Loading from '@/components/Loading';
import DefaultLayout from '@/layout/DefaultLayout';
import TicketThread from '@/components/TicketThread';

const TicketDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<any>(null);

  const fetchTicket = async () => {
    setLoading(true);
    await User.getMyTicketById(id)
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
        navigate('/user/tickets');
      });
  };

  useEffect(() => {
    fetchTicket();
  }, [id]);

  const handleReply = async (formData: FormData) => {
    await User.replyTicketByUser(id, formData)
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
          viewerModel="User"
          canReply={ticket.status === 'OPEN'}
          onSubmitReply={handleReply}
        />
      )}
    </DefaultLayout>
  );
};

export default TicketDetail;
