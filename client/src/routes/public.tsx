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
          stroke-width="1.5"
        />
        <path
          d="M9.25 11.75L11.25 13.75L14.75 10"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Guide',
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
          fill-rule="evenodd"
          d="M1.25 2C.56 2 0 2.56 0 3.25v8.5C0 12.44.56 13 1.25 13H5c.896 0 1.475.205 1.809.448.317.23.441.51.441.802a.75.75 0 001.5 0c0-.292.124-.572.441-.802.334-.243.913-.448 1.809-.448h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C16 2.56 15.44 2 14.75 2H11c-1.154 0-2.106.354-2.772 1-.081.08-.157.161-.228.246A3.131 3.131 0 007.772 3C7.106 2.354 6.154 2 5 2H1.25zm7.5 9.967c.61-.309 1.372-.467 2.25-.467h3.5v-8H11c-.846 0-1.394.253-1.728.577-.335.325-.522.787-.522 1.34v6.55zm-1.5 0v-6.55c0-.553-.187-1.015-.522-1.34C6.394 3.753 5.846 3.5 5 3.5H1.5v8H5c.878 0 1.64.158 2.25.467z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
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
  // {
  //   title: 'Profile',
  //   link: '/profile',
  //   icon: (
  //     <svg
  //       className="fill-current"
  //       width="18"
  //       height="18"
  //       viewBox="0 0 18 18"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
  //         fill=""
  //       />
  //       <path
  //         d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
  //         fill=""
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   title: 'Settings',
  //   link: '/settings',
  //   icon: (
  //     <svg
  //       className="fill-current"
  //       width="18"
  //       height="19"
  //       viewBox="0 0 18 19"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_130_9763)">
  //         <path
  //           d="M17.0721 7.30835C16.7909 6.99897 16.3971 6.83022 15.9752 6.83022H15.8909C15.7502 6.83022 15.6377 6.74585 15.6096 6.63335C15.5815 6.52085 15.5252 6.43647 15.4971 6.32397C15.4409 6.21147 15.4971 6.09897 15.5815 6.0146L15.6377 5.95835C15.9471 5.6771 16.1159 5.28335 16.1159 4.86147C16.1159 4.4396 15.9752 4.04585 15.6659 3.73647L14.569 2.61147C13.9784 1.99272 12.9659 1.9646 12.3471 2.58335L12.2627 2.6396C12.1784 2.72397 12.0377 2.7521 11.8971 2.69585C11.7846 2.6396 11.6721 2.58335 11.5315 2.55522C11.3909 2.49897 11.3065 2.38647 11.3065 2.27397V2.13335C11.3065 1.26147 10.6034 0.55835 9.73148 0.55835H8.15648C7.7346 0.55835 7.34085 0.7271 7.0596 1.00835C6.75023 1.31772 6.6096 1.71147 6.6096 2.10522V2.21772C6.6096 2.33022 6.52523 2.44272 6.41273 2.49897C6.35648 2.5271 6.32835 2.5271 6.2721 2.55522C6.1596 2.61147 6.01898 2.58335 5.9346 2.49897L5.87835 2.4146C5.5971 2.10522 5.20335 1.93647 4.78148 1.93647C4.3596 1.93647 3.96585 2.0771 3.65648 2.38647L2.53148 3.48335C1.91273 4.07397 1.8846 5.08647 2.50335 5.70522L2.5596 5.7896C2.64398 5.87397 2.6721 6.0146 2.61585 6.09897C2.5596 6.21147 2.53148 6.29585 2.47523 6.40835C2.41898 6.52085 2.3346 6.5771 2.19398 6.5771H2.1096C1.68773 6.5771 1.29398 6.71772 0.984604 7.0271C0.675229 7.30835 0.506479 7.7021 0.506479 8.12397L0.478354 9.69897C0.450229 10.5708 1.15335 11.274 2.02523 11.3021H2.1096C2.25023 11.3021 2.36273 11.3865 2.39085 11.499C2.4471 11.5833 2.50335 11.6677 2.53148 11.7802C2.5596 11.8927 2.53148 12.0052 2.4471 12.0896L2.39085 12.1458C2.08148 12.4271 1.91273 12.8208 1.91273 13.2427C1.91273 13.6646 2.05335 14.0583 2.36273 14.3677L3.4596 15.4927C4.05023 16.1115 5.06273 16.1396 5.68148 15.5208L5.76585 15.4646C5.85023 15.3802 5.99085 15.3521 6.13148 15.4083C6.24398 15.4646 6.35648 15.5208 6.4971 15.549C6.63773 15.6052 6.7221 15.7177 6.7221 15.8302V15.9427C6.7221 16.8146 7.42523 17.5177 8.2971 17.5177H9.8721C10.744 17.5177 11.4471 16.8146 11.4471 15.9427V15.8302C11.4471 15.7177 11.5315 15.6052 11.644 15.549C11.7002 15.5208 11.7284 15.5208 11.7846 15.4927C11.9252 15.4365 12.0377 15.4646 12.1221 15.549L12.1784 15.6333C12.4596 15.9427 12.8534 16.1115 13.2752 16.1115C13.6971 16.1115 14.0909 15.9708 14.4002 15.6615L15.5252 14.5646C16.144 13.974 16.1721 12.9615 15.5534 12.3427L15.4971 12.2583C15.4127 12.174 15.3846 12.0333 15.4409 11.949C15.4971 11.8365 15.5252 11.7521 15.5815 11.6396C15.6377 11.5271 15.7502 11.4708 15.8627 11.4708H15.9471H15.9752C16.819 11.4708 17.5221 10.7958 17.5502 9.92397L17.5784 8.34897C17.5221 8.01147 17.3534 7.5896 17.0721 7.30835ZM16.2284 9.9521C16.2284 10.1208 16.0877 10.2615 15.919 10.2615H15.8346H15.8065C15.1596 10.2615 14.569 10.6552 14.344 11.2177C14.3159 11.3021 14.2596 11.3865 14.2315 11.4708C13.9784 12.0333 14.0909 12.7365 14.5409 13.1865L14.5971 13.2708C14.7096 13.3833 14.7096 13.5802 14.5971 13.6927L13.4721 14.7896C13.3877 14.874 13.3034 14.874 13.2471 14.874C13.1909 14.874 13.1065 14.874 13.0221 14.7896L12.9659 14.7052C12.5159 14.2271 11.8409 14.0865 11.2221 14.3677L11.1096 14.424C10.4909 14.6771 10.0971 15.2396 10.0971 15.8865V15.999C10.0971 16.1677 9.95648 16.3083 9.78773 16.3083H8.21273C8.04398 16.3083 7.90335 16.1677 7.90335 15.999V15.8865C7.90335 15.2396 7.5096 14.649 6.89085 14.424C6.80648 14.3958 6.69398 14.3396 6.6096 14.3115C6.3846 14.199 6.1596 14.1708 5.9346 14.1708C5.54085 14.1708 5.1471 14.3115 4.83773 14.6208L4.78148 14.649C4.66898 14.7615 4.4721 14.7615 4.3596 14.649L3.26273 13.524C3.17835 13.4396 3.17835 13.3552 3.17835 13.299C3.17835 13.2427 3.17835 13.1583 3.26273 13.074L3.31898 13.0177C3.7971 12.5677 3.93773 11.8646 3.6846 11.3021C3.65648 11.2177 3.62835 11.1333 3.5721 11.049C3.3471 10.4583 2.7846 10.0365 2.13773 10.0365H2.05335C1.8846 10.0365 1.74398 9.89585 1.74398 9.7271L1.7721 8.1521C1.7721 8.0396 1.82835 7.98335 1.85648 7.9271C1.8846 7.89897 1.96898 7.84272 2.08148 7.84272H2.16585C2.81273 7.87085 3.40335 7.4771 3.65648 6.88647C3.6846 6.8021 3.74085 6.71772 3.76898 6.63335C4.0221 6.07085 3.9096 5.36772 3.4596 4.91772L3.40335 4.83335C3.29085 4.72085 3.29085 4.52397 3.40335 4.41147L4.52835 3.3146C4.61273 3.23022 4.6971 3.23022 4.75335 3.23022C4.8096 3.23022 4.89398 3.23022 4.97835 3.3146L5.0346 3.39897C5.4846 3.8771 6.1596 4.01772 6.77835 3.7646L6.89085 3.70835C7.5096 3.45522 7.90335 2.89272 7.90335 2.24585V2.13335C7.90335 2.02085 7.9596 1.9646 7.98773 1.90835C8.01585 1.8521 8.10023 1.82397 8.21273 1.82397H9.78773C9.95648 1.82397 10.0971 1.9646 10.0971 2.13335V2.24585C10.0971 2.89272 10.4909 3.48335 11.1096 3.70835C11.194 3.73647 11.3065 3.79272 11.3909 3.82085C11.9815 4.1021 12.6846 3.9896 13.1627 3.5396L13.2471 3.48335C13.3596 3.37085 13.5565 3.37085 13.669 3.48335L14.7659 4.60835C14.8502 4.69272 14.8502 4.7771 14.8502 4.83335C14.8502 4.8896 14.8221 4.97397 14.7659 5.05835L14.7096 5.1146C14.2034 5.53647 14.0627 6.2396 14.2877 6.8021C14.3159 6.88647 14.344 6.97085 14.4002 7.05522C14.6252 7.64585 15.1877 8.06772 15.8346 8.06772H15.919C16.0315 8.06772 16.0877 8.12397 16.144 8.1521C16.2002 8.18022 16.2284 8.2646 16.2284 8.3771V9.9521Z"
  //           fill=""
  //         />
  //         <path
  //           d="M9.00029 5.22705C6.89092 5.22705 5.17529 6.94268 5.17529 9.05205C5.17529 11.1614 6.89092 12.8771 9.00029 12.8771C11.1097 12.8771 12.8253 11.1614 12.8253 9.05205C12.8253 6.94268 11.1097 5.22705 9.00029 5.22705ZM9.00029 11.6114C7.59404 11.6114 6.44092 10.4583 6.44092 9.05205C6.44092 7.6458 7.59404 6.49268 9.00029 6.49268C10.4065 6.49268 11.5597 7.6458 11.5597 9.05205C11.5597 10.4583 10.4065 11.6114 9.00029 11.6114Z"
  //           fill=""
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_130_9763">
  //           <rect
  //             width="18"
  //             height="18"
  //             fill="white"
  //             transform="translate(0 0.052124)"
  //           />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
];

export default routes;
