const routes = [
  {
    title: 'Home',
    link: '/home',
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5525 3.17538C10.9579 2.83471 11.4705 2.64795 12 2.64795C12.5295 2.64795 13.0421 2.83471 13.4475 3.17538L20.1975 8.85138C20.4488 9.06251 20.6508 9.32606 20.7894 9.62353C20.928 9.921 20.9999 10.2452 21 10.5734V20.0009C21 20.3987 20.842 20.7802 20.5607 21.0615C20.2794 21.3428 19.8978 21.5009 19.5 21.5009H15.375C14.9772 21.5009 14.5956 21.3428 14.3143 21.0615C14.033 20.7802 13.875 20.3987 13.875 20.0009V14.7509H10.125V20.0009C10.125 20.3987 9.96696 20.7802 9.68566 21.0615C9.40436 21.3428 9.02282 21.5009 8.625 21.5009H4.5C4.10218 21.5009 3.72064 21.3428 3.43934 21.0615C3.15804 20.7802 3 20.3987 3 20.0009V10.5726C3.00008 10.2444 3.07196 9.92025 3.21059 9.62278C3.34922 9.32531 3.55124 9.06176 3.8025 8.85063L10.5525 3.17463V3.17538ZM12.483 4.32288C12.3478 4.20906 12.1767 4.14665 12 4.14665C11.8233 4.14665 11.6522 4.20906 11.517 4.32288L4.767 10.0004C4.68357 10.0706 4.61645 10.1582 4.57034 10.257C4.52422 10.3559 4.50022 10.4636 4.5 10.5726V20.0001H8.625V14.7501C8.625 14.3523 8.78304 13.9708 9.06434 13.6895C9.34564 13.4082 9.72718 13.2501 10.125 13.2501H13.875C14.2728 13.2501 14.6544 13.4082 14.9357 13.6895C15.217 13.9708 15.375 14.3523 15.375 14.7501V20.0001H19.5V10.5726C19.5 10.4633 19.4761 10.3553 19.43 10.2562C19.3839 10.1571 19.3166 10.0693 19.233 9.99888L12.483 4.32288Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Services',
    link: '/services',
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.382 9.313V17.813C4.382 18.658 4.726 19.469 5.339 20.066C5.95687 20.6668 6.78522 21.002 7.647 21H16.353C17.219 21 18.049 20.664 18.661 20.066C18.9628 19.7733 19.2029 19.4232 19.3673 19.0363C19.5317 18.6493 19.6169 18.2334 19.618 17.813V9.313M4.382 9.313C3.48 9.313 2.75 8.599 2.75 7.719V5.594C2.75 4.714 3.481 4 4.382 4H19.618C20.52 4 21.25 4.714 21.25 5.594V7.719C21.25 8.599 20.519 9.313 19.618 9.313M4.382 9.313H19.618M8.735 15.688H15.265"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Mechanism',
    link: '/mechanism',
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.75 5.5H17.75M13.75 3.5V7.5M13.75 5.5H2.75M6.75 12.5H2.75M10.75 10.5V14.5M21.75 12.5H10.75M20.75 19.5H17.75M13.75 17.5V21.5M13.75 19.5H2.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Terms & Conditions',
    link: '/terms',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9.25 11.75L11.25 13.75L14.75 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Member’s Guidelines',
    link: '/guide',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.25 2C.56 2 0 2.56 0 3.25v8.5C0 12.44.56 13 1.25 13H5c.896 0 1.475.205 1.809.448.317.23.441.51.441.802a.75.75 0 001.5 0c0-.292.124-.572.441-.802.334-.243.913-.448 1.809-.448h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C16 2.56 15.44 2 14.75 2H11c-1.154 0-2.106.354-2.772 1-.081.08-.157.161-.228.246A3.131 3.131 0 007.772 3C7.106 2.354 6.154 2 5 2H1.25zm7.5 9.967c.61-.309 1.372-.467 2.25-.467h3.5v-8H11c-.846 0-1.394.253-1.728.577-.335.325-.522.787-.522 1.34v6.55zm-1.5 0v-6.55c0-.553-.187-1.015-.522-1.34C6.394 3.753 5.846 3.5 5 3.5H1.5v8H5c.878 0 1.64.158 2.25.467z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  // {
  //   title: 'Rules & Regulation',
  //   link: '/rules',
  //   icon: (
  //     <svg
  //       fill="currentColor"
  //       width="24"
  //       height="24"
  //       viewBox="1 0 17 17"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="m9.362 2.152 1.717 3.721 2.044.243 2.026.24c1.124.133 1.364.871.533 1.64L14.184 9.38l-1.512 1.397.8 4.02c.156.79-.116 1.25-.642 1.25a1.59 1.59 0 0 1-.753-.236L8.5 13.81l-3.576 2.002a1.593 1.593 0 0 1-.754.235c-.526 0-.798-.459-.641-1.249l.397-2 .401-2.02-1.51-1.397-1.498-1.385c-.832-.769-.592-1.507.532-1.64l2.026-.24 2.044-.243 1.717-3.721c.237-.514.55-.771.862-.771s.625.257.862.77zM6.928 6.338a1.109 1.109 0 0 1-.876.636l-2.042.242h-.002l-1.684.2L5.08 9.965a1.107 1.107 0 0 1 .335 1.03l-.401 2.019-.331 1.663 3.276-1.834a1.107 1.107 0 0 1 1.082 0l3.276 1.834-.731-3.682a1.108 1.108 0 0 1 .334-1.03l1.511-1.398.002-.001 1.243-1.15-1.684-.2-2.044-.242a1.109 1.109 0 0 1-.876-.636L8.5 2.928z" />
  //     </svg>
  //   ),
  // },
  {
    title: 'Contact',
    link: '/contact',
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10.5C4 6.729 4 4.843 5.172 3.672C6.344 2.501 8.229 2.5 12 2.5H13.5C17.271 2.5 19.157 2.5 20.328 3.672C21.499 4.844 21.5 6.729 21.5 10.5V14.5C21.5 18.271 21.5 20.157 20.328 21.328C19.156 22.499 17.271 22.5 13.5 22.5H12C8.229 22.5 6.343 22.5 5.172 21.328C4.001 20.156 4 18.271 4 14.5V10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.8 12.474C9.373 11.73 9.167 11.123 9.043 10.507C8.859 9.597 9.28 8.707 9.976 8.139C10.271 7.899 10.608 7.981 10.782 8.294L11.175 8.999C11.486 9.557 11.642 9.837 11.611 10.133C11.581 10.429 11.371 10.67 10.951 11.153L9.8 12.474ZM9.8 12.474C10.7001 14.0164 11.9836 15.2999 13.526 16.2M13.526 16.2C14.27 16.627 14.877 16.833 15.493 16.957C16.403 17.141 17.293 16.72 17.861 16.024C18.101 15.729 18.019 15.392 17.706 15.218L17.002 14.825C16.442 14.514 16.163 14.358 15.867 14.389C15.571 14.419 15.33 14.629 14.847 15.049L13.526 16.2ZM5 6.5H2.5M5 12.5H2.5M5 18.5H2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'News',
    link: '/news',
    icon: (
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 13.5V7.5C17 4.672 17 3.257 16.121 2.379C15.243 1.5 13.828 1.5 11 1.5H7C4.172 1.5 2.757 1.5 1.879 2.379C1 3.257 1 4.672 1 7.5V13.5C1 16.328 1 17.743 1.879 18.621C2.757 19.5 4.172 19.5 7 19.5H19M5 6.5H13M5 10.5H13M5 14.5H9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 6.5H18C19.414 6.5 20.121 6.5 20.56 6.94C21 7.379 21 8.086 21 9.5V17.5C21 18.0304 20.7893 18.5391 20.4142 18.9142C20.0391 19.2893 19.5304 19.5 19 19.5C18.4696 19.5 17.9609 19.2893 17.5858 18.9142C17.2107 18.5391 17 18.0304 17 17.5V6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default routes;
