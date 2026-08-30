import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '@/components/Loading';

const MAX_ATTACHMENTS = 5;

const attachmentUrl = (filename: string) =>
  `${import.meta.env.VITE_API_URL}/uploads/tickets/${filename}`;

interface TicketMessage {
  _id?: string;
  sender: any;
  senderModel: 'User' | 'Admin';
  message: string;
  attachments: string[];
  createdAt: string;
}

interface Ticket {
  _id: string;
  subject: string;
  status: 'OPEN' | 'CLOSED';
  messages: TicketMessage[];
}

interface TicketThreadProps {
  ticket: Ticket;
  viewerModel: 'User' | 'Admin';
  canReply: boolean;
  onSubmitReply: (formData: FormData) => Promise<void>;
  headerActions?: React.ReactNode;
}

const TicketThread: React.FC<TicketThreadProps> = ({
  ticket,
  viewerModel,
  canReply,
  onSubmitReply,
  headerActions,
}) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length > MAX_ATTACHMENTS) {
      setError(`You can attach up to ${MAX_ATTACHMENTS} images`);
      setFiles(selected.slice(0, MAX_ATTACHMENTS));
      return;
    }
    setError('');
    setFiles(selected);
  };

  const handleSend = async () => {
    if (!message.trim() && files.length === 0) {
      setError('Please enter a message or attach an image');
      return;
    }
    setError('');
    setSending(true);
    const formData = new FormData();
    formData.append('message', message.trim());
    files.forEach((file) => formData.append('attachments', file));

    try {
      await onSubmitReply(formData);
      setMessage('');
      setFiles([]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">{ticket.subject}</h1>
          <div
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs text-white ${
              ticket.status === 'OPEN' ? 'bg-green-600' : 'bg-gray-500'
            }`}
          >
            {ticket.status}
          </div>
        </div>
        {headerActions}
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {ticket.messages.map((msg, index) => {
          const isOwn = msg.senderModel === viewerModel;
          return (
            <div
              key={msg._id || index}
              className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  isOwn ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="text-xs opacity-70 mb-1">
                  {msg.senderModel === 'Admin' ? 'Admin' : 'User'} ·{' '}
                  {new Date(msg.createdAt).toLocaleString('vi')}
                </div>
                {msg.message && (
                  <div className="whitespace-pre-wrap break-words">{msg.message}</div>
                )}
                {msg.attachments && msg.attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.attachments.map((filename) => (
                      <a
                        key={filename}
                        href={attachmentUrl(filename)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={attachmentUrl(filename)}
                          alt="attachment"
                          className="w-20 h-20 object-cover rounded-md border"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {canReply ? (
        <div className="border-t pt-4">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 text-sm"
            rows={3}
            placeholder={t('type your message') as string}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={sending}
          />
          <div className="flex items-center justify-between mt-3">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/webp, image/gif"
              multiple
              onChange={handleFilesChange}
              disabled={sending}
              className="text-sm"
            />
            <button
              onClick={handleSend}
              disabled={sending}
              className="flex items-center gap-2 px-6 py-2 bg-black text-white text-sm rounded-md hover:opacity-70"
            >
              {sending && <Loading />}
              {t('send')}
            </button>
          </div>
          {files.length > 0 && (
            <div className="text-xs text-gray-500 mt-1">
              {files.length} file(s) selected (max {MAX_ATTACHMENTS})
            </div>
          )}
          {error && <div className="text-xs text-red-600 mt-1">{error}</div>}
        </div>
      ) : (
        <div className="border-t pt-4 text-sm text-gray-500 text-center">
          {t('This ticket is closed')}
        </div>
      )}
    </div>
  );
};

export default TicketThread;
