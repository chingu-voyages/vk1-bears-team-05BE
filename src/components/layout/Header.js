import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Navbar className='navbarCustom' bg='white' expand='lg'>
            <Navbar.Toggle
              className='toggle'
              aria-controls='basic-navbar-nav'
            />
            <Navbar.Brand className='logo d-flex' href='/'>
              <svg
                width='186'
                height='33'
                viewBox='0 0 186 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M38.55 25C38.3833 25 38.2417 24.9417 38.125 24.825C38.0083 24.7083 37.95 24.5667 37.95 24.4V8.125C37.95 7.94167 38 7.79167 38.1 7.675C38.2167 7.55833 38.3667 7.5 38.55 7.5H45.8C47.75 7.5 49.2083 7.93333 50.175 8.8C51.1417 9.65 51.625 10.8167 51.625 12.3C51.625 13.1667 51.4083 13.9083 50.975 14.525C50.5583 15.125 50.0667 15.5583 49.5 15.825C50.2 16.1417 50.7917 16.6583 51.275 17.375C51.7583 18.0917 52 18.9083 52 19.825C52 21.375 51.475 22.625 50.425 23.575C49.375 24.525 47.9083 25 46.025 25H38.55ZM45.35 14.675C46.2 14.675 46.85 14.4667 47.3 14.05C47.7667 13.6333 48 13.075 48 12.375C48 11.675 47.775 11.1333 47.325 10.75C46.875 10.3667 46.2167 10.175 45.35 10.175H41.475V14.675H45.35ZM45.6 22.325C46.4667 22.325 47.1417 22.0917 47.625 21.625C48.1083 21.1417 48.35 20.5333 48.35 19.8C48.35 19.0667 48.1 18.4667 47.6 18C47.1167 17.5167 46.45 17.275 45.6 17.275H41.475V22.325H45.6ZM54.1881 25C54.0214 25 53.8798 24.9417 53.7631 24.825C53.6464 24.7083 53.5881 24.5667 53.5881 24.4V7.85C53.5881 7.66667 53.6464 7.525 53.7631 7.425C53.8798 7.30833 54.0214 7.25 54.1881 7.25H56.2881C56.4714 7.25 56.6131 7.30833 56.7131 7.425C56.8298 7.525 56.8881 7.66667 56.8881 7.85V24.4C56.8881 24.5667 56.8298 24.7083 56.7131 24.825C56.6131 24.9417 56.4714 25 56.2881 25H54.1881ZM64.7287 25.25C62.762 25.25 61.2454 24.75 60.1787 23.75C59.112 22.75 58.537 21.3667 58.4537 19.6L58.4287 18.5L58.4537 17.4C58.537 15.65 59.1204 14.275 60.2037 13.275C61.287 12.2583 62.7954 11.75 64.7287 11.75C66.6454 11.75 68.1454 12.2583 69.2287 13.275C70.312 14.275 70.8954 15.65 70.9787 17.4C70.9954 17.6 71.0037 17.9667 71.0037 18.5C71.0037 19.0333 70.9954 19.4 70.9787 19.6C70.8954 21.3667 70.3204 22.75 69.2537 23.75C68.187 24.75 66.6787 25.25 64.7287 25.25ZM64.7287 22.725C65.612 22.725 66.287 22.45 66.7537 21.9C67.237 21.35 67.4954 20.5417 67.5287 19.475C67.5454 19.3083 67.5537 18.9833 67.5537 18.5C67.5537 18.0167 67.5454 17.6917 67.5287 17.525C67.4954 16.4583 67.237 15.65 66.7537 15.1C66.2704 14.5333 65.5954 14.25 64.7287 14.25C63.8454 14.25 63.162 14.5333 62.6787 15.1C62.1954 15.65 61.937 16.4583 61.9037 17.525L61.8787 18.5L61.9037 19.475C61.937 20.5417 62.1954 21.35 62.6787 21.9C63.162 22.45 63.8454 22.725 64.7287 22.725ZM78.298 25.25C76.3314 25.25 74.8147 24.75 73.748 23.75C72.6814 22.75 72.1064 21.3667 72.023 19.6L71.998 18.5L72.023 17.4C72.1064 15.65 72.6897 14.275 73.773 13.275C74.8564 12.2583 76.3647 11.75 78.298 11.75C80.2147 11.75 81.7147 12.2583 82.798 13.275C83.8814 14.275 84.4647 15.65 84.548 17.4C84.5647 17.6 84.573 17.9667 84.573 18.5C84.573 19.0333 84.5647 19.4 84.548 19.6C84.4647 21.3667 83.8897 22.75 82.823 23.75C81.7564 24.75 80.248 25.25 78.298 25.25ZM78.298 22.725C79.1814 22.725 79.8564 22.45 80.323 21.9C80.8064 21.35 81.0647 20.5417 81.098 19.475C81.1147 19.3083 81.123 18.9833 81.123 18.5C81.123 18.0167 81.1147 17.6917 81.098 17.525C81.0647 16.4583 80.8064 15.65 80.323 15.1C79.8397 14.5333 79.1647 14.25 78.298 14.25C77.4147 14.25 76.7314 14.5333 76.248 15.1C75.7647 15.65 75.5064 16.4583 75.473 17.525L75.448 18.5L75.473 19.475C75.5064 20.5417 75.7647 21.35 76.248 21.9C76.7314 22.45 77.4147 22.725 78.298 22.725ZM90.9174 25.25C89.234 25.25 87.9424 24.7167 87.0424 23.65C86.1424 22.5667 85.6507 21.125 85.5674 19.325L85.5424 18.5L85.5674 17.675C85.634 15.9083 86.1174 14.4833 87.0174 13.4C87.934 12.3 89.234 11.75 90.9174 11.75C92.5174 11.75 93.7924 12.3 94.7424 13.4V7.85C94.7424 7.66667 94.8007 7.525 94.9174 7.425C95.0341 7.30833 95.1757 7.25 95.3424 7.25H97.5174C97.7007 7.25 97.8424 7.30833 97.9424 7.425C98.0591 7.525 98.1174 7.66667 98.1174 7.85V24.4C98.1174 24.5667 98.0591 24.7083 97.9424 24.825C97.8424 24.9417 97.7007 25 97.5174 25H95.4924C95.3257 25 95.184 24.9417 95.0674 24.825C94.9507 24.7083 94.8924 24.5667 94.8924 24.4V23.475C93.9757 24.6583 92.6507 25.25 90.9174 25.25ZM91.8674 22.55C92.8174 22.55 93.5174 22.25 93.9674 21.65C94.434 21.0333 94.6924 20.275 94.7424 19.375C94.7591 19.175 94.7674 18.8583 94.7674 18.425C94.7674 17.975 94.7591 17.65 94.7424 17.45C94.7091 16.6167 94.4507 15.9083 93.9674 15.325C93.4841 14.7417 92.7841 14.45 91.8674 14.45C90.084 14.45 89.134 15.55 89.0174 17.75L88.9924 18.5L89.0174 19.25C89.134 21.45 90.084 22.55 91.8674 22.55Z'
                  fill='black'
                />
                <path
                  d='M105.537 25C105.371 25 105.229 24.9417 105.112 24.825C104.996 24.7083 104.937 24.5667 104.937 24.4V8.125C104.937 7.94167 104.987 7.79167 105.087 7.675C105.204 7.55833 105.354 7.5 105.537 7.5H107.562C107.879 7.5 108.129 7.65833 108.312 7.975L113.137 16.925L117.962 7.975C118.146 7.65833 118.396 7.5 118.712 7.5H120.712C120.896 7.5 121.046 7.55833 121.162 7.675C121.279 7.79167 121.337 7.94167 121.337 8.125V24.4C121.337 24.5833 121.279 24.7333 121.162 24.85C121.046 24.95 120.896 25 120.712 25H118.562C118.396 25 118.254 24.9417 118.137 24.825C118.021 24.7083 117.962 24.5667 117.962 24.4V13.65L114.487 20.25C114.304 20.6167 114.029 20.8 113.662 20.8H112.612C112.262 20.8 111.979 20.6167 111.762 20.25L108.287 13.65V24.4C108.287 24.5667 108.229 24.7083 108.112 24.825C108.012 24.9417 107.871 25 107.687 25H105.537ZM127.45 25.25C126.6 25.25 125.817 25.0833 125.1 24.75C124.4 24.4 123.842 23.9333 123.425 23.35C123.025 22.7667 122.825 22.125 122.825 21.425C122.825 20.2917 123.284 19.375 124.2 18.675C125.117 17.975 126.375 17.5 127.975 17.25L131.4 16.75V16.225C131.4 15.5083 131.217 14.9667 130.85 14.6C130.484 14.2333 129.9 14.05 129.1 14.05C128.55 14.05 128.109 14.15 127.775 14.35C127.442 14.55 127.167 14.7583 126.95 14.975C126.75 15.175 126.617 15.3083 126.55 15.375C126.484 15.575 126.359 15.675 126.175 15.675H124.225C124.075 15.675 123.942 15.625 123.825 15.525C123.725 15.425 123.675 15.2917 123.675 15.125C123.692 14.7083 123.892 14.2417 124.275 13.725C124.675 13.1917 125.284 12.7333 126.1 12.35C126.917 11.95 127.925 11.75 129.125 11.75C131.092 11.75 132.525 12.1917 133.425 13.075C134.325 13.9583 134.775 15.1167 134.775 16.55V24.4C134.775 24.5667 134.717 24.7083 134.6 24.825C134.5 24.9417 134.359 25 134.175 25H132.1C131.934 25 131.792 24.9417 131.675 24.825C131.559 24.7083 131.5 24.5667 131.5 24.4V23.425C131.134 23.9583 130.617 24.4 129.95 24.75C129.284 25.0833 128.45 25.25 127.45 25.25ZM128.3 22.85C129.217 22.85 129.967 22.55 130.55 21.95C131.134 21.35 131.425 20.4833 131.425 19.35V18.85L128.925 19.25C127.009 19.55 126.05 20.1917 126.05 21.175C126.05 21.7083 126.267 22.125 126.7 22.425C127.15 22.7083 127.684 22.85 128.3 22.85ZM142.51 25C140.993 25 139.852 24.6083 139.085 23.825C138.318 23.025 137.935 21.8583 137.935 20.325V14.675H135.96C135.793 14.675 135.652 14.6167 135.535 14.5C135.418 14.3833 135.36 14.2417 135.36 14.075V12.6C135.36 12.4333 135.418 12.2917 135.535 12.175C135.652 12.0583 135.793 12 135.96 12H137.935V7.85C137.935 7.66667 137.993 7.525 138.11 7.425C138.227 7.30833 138.368 7.25 138.535 7.25H140.61C140.793 7.25 140.935 7.30833 141.035 7.425C141.152 7.525 141.21 7.66667 141.21 7.85V12H144.335C144.502 12 144.643 12.0583 144.76 12.175C144.877 12.2917 144.935 12.4333 144.935 12.6V14.075C144.935 14.2417 144.877 14.3833 144.76 14.5C144.643 14.6167 144.502 14.675 144.335 14.675H141.21V20.05C141.21 20.7667 141.335 21.3083 141.585 21.675C141.835 22.0417 142.243 22.225 142.81 22.225H144.56C144.743 22.225 144.885 22.2833 144.985 22.4C145.102 22.5 145.16 22.6417 145.16 22.825V24.4C145.16 24.5667 145.102 24.7083 144.985 24.825C144.885 24.9417 144.743 25 144.56 25H142.51ZM151.752 25.25C149.918 25.25 148.452 24.7417 147.352 23.725C146.268 22.7083 145.693 21.3 145.627 19.5L145.602 18.5L145.627 17.5C145.693 15.7 146.268 14.2917 147.352 13.275C148.452 12.2583 149.918 11.75 151.752 11.75C153.068 11.75 154.177 11.9833 155.077 12.45C155.993 12.9167 156.668 13.4917 157.102 14.175C157.552 14.8417 157.793 15.4833 157.827 16.1C157.843 16.2667 157.785 16.4083 157.652 16.525C157.535 16.6417 157.393 16.7 157.227 16.7H155.002C154.818 16.7 154.685 16.6667 154.602 16.6C154.518 16.5167 154.435 16.375 154.352 16.175C154.102 15.5417 153.768 15.0833 153.352 14.8C152.952 14.5167 152.435 14.375 151.802 14.375C150.952 14.375 150.285 14.6417 149.802 15.175C149.335 15.7083 149.085 16.525 149.052 17.625L149.027 18.55L149.052 19.375C149.152 21.5417 150.068 22.625 151.802 22.625C152.452 22.625 152.977 22.4917 153.377 22.225C153.777 21.9417 154.102 21.475 154.352 20.825C154.418 20.6417 154.493 20.5083 154.577 20.425C154.677 20.3417 154.818 20.3 155.002 20.3H157.227C157.393 20.3 157.535 20.3583 157.652 20.475C157.785 20.5917 157.843 20.7333 157.827 20.9C157.793 21.4833 157.56 22.1167 157.127 22.8C156.693 23.4667 156.027 24.0417 155.127 24.525C154.227 25.0083 153.102 25.25 151.752 25.25ZM159.808 25C159.642 25 159.5 24.9417 159.383 24.825C159.267 24.7083 159.208 24.5667 159.208 24.4V7.85C159.208 7.66667 159.267 7.525 159.383 7.425C159.5 7.30833 159.642 7.25 159.808 7.25H162.083C162.267 7.25 162.408 7.30833 162.508 7.425C162.625 7.525 162.683 7.66667 162.683 7.85V13.55C163.683 12.35 165.025 11.75 166.708 11.75C168.242 11.75 169.467 12.2583 170.383 13.275C171.3 14.275 171.758 15.6417 171.758 17.375V24.4C171.758 24.5667 171.7 24.7083 171.583 24.825C171.483 24.9417 171.342 25 171.158 25H168.883C168.7 25 168.55 24.9417 168.433 24.825C168.317 24.7083 168.258 24.5667 168.258 24.4V17.525C168.258 16.5583 168.017 15.8083 167.533 15.275C167.067 14.725 166.392 14.45 165.508 14.45C164.658 14.45 163.975 14.725 163.458 15.275C162.942 15.825 162.683 16.575 162.683 17.525V24.4C162.683 24.5667 162.625 24.7083 162.508 24.825C162.408 24.9417 162.267 25 162.083 25H159.808Z'
                  fill='#D73728'
                />
                <path
                  d='M17.1246 2.07059C16.6172 1.62478 15.9586 1.37912 15.2765 1.37912C14.5943 1.37912 13.9358 1.62478 13.4283 2.07059C10.8244 4.35841 2.869 11.9711 2.869 19.5838C2.869 26.2866 8.42401 31.7202 15.2765 31.7202C22.1289 31.7202 27.6839 26.2866 27.6839 19.5838C27.6839 11.9711 19.7285 4.35841 17.1246 2.07059Z'
                  fill='#D73728'
                />
                <path
                  d='M9.07273 25.652C12.499 25.652 15.2765 22.9352 15.2765 19.5838V1.37912C14.5943 1.37912 13.9358 1.62478 13.4283 2.07059C10.8244 4.35841 2.869 11.9711 2.869 19.5838C2.869 19.5851 2.86909 19.5864 2.86909 19.5877C2.87124 22.9373 5.64784 25.652 9.07273 25.652Z'
                  fill='#F05A4B'
                />
                <path
                  d='M5.62623 20.2733C5.24556 20.2733 4.93693 19.9646 4.93693 19.5838C4.93693 14.2022 10.0282 7.81132 14.7929 3.62485L14.8409 3.5827L14.8959 3.55003C15.1345 3.40824 15.4713 3.41892 15.6996 3.57761C16.0122 3.79491 16.0895 4.2246 15.8723 4.53741C15.7927 4.65205 15.6845 4.73506 15.5639 4.7835C11.0664 8.77077 6.31553 14.7126 6.31553 19.5838C6.31553 19.9647 6.0069 20.2733 5.62623 20.2733ZM14.9148 4.71152C14.9149 4.71152 14.9149 4.71152 14.9148 4.71152V4.71152ZM14.9141 4.71101L14.9142 4.71109L14.9141 4.71101ZM14.9129 4.71023C14.9131 4.7104 14.9133 4.71058 14.9136 4.71066C14.9134 4.71049 14.9131 4.71032 14.9129 4.71023Z'
                  fill='#FF7869'
                />
                <path
                  d='M17.4132 15.1778C16.5386 15.111 15.7552 15.509 15.2765 16.1485C14.7978 15.509 14.0144 15.111 13.1398 15.1778C11.8198 15.2787 10.8488 16.4579 10.9009 17.7812C11.004 20.3955 13.364 22.4096 14.3565 23.1439C14.6228 23.3409 14.9453 23.4454 15.2765 23.4454C15.6077 23.4454 15.9302 23.3409 16.1965 23.1439C17.189 22.4096 19.549 20.3954 19.6521 17.7812C19.7043 16.4579 18.7332 15.2787 17.4132 15.1778Z'
                  fill='#D7E6F0'
                />
              </svg>
            </Navbar.Brand>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto d-flex navbarLinks'>
                <div className='d-lg-flex '>
                  <Nav.Link href='/'>
                    <span className='textCustom d-flex'>
                      <svg
                        width='18'
                        height='16'
                        viewBox='0 0 18 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M15.7663 2.23375C14.9767 1.44381 13.9056 1 12.7887 1C11.6718 1 10.6007 1.44381 9.81116 2.23375L8.9998 3.04511L8.18843 2.23375C6.54398 0.589296 3.87779 0.589296 2.23334 2.23375C0.588887 3.8782 0.588887 6.54439 2.23334 8.18884L3.0447 9.00021L8.9998 14.9553L14.9549 9.00021L15.7663 8.18884C16.5562 7.39928 17 6.32817 17 5.2113C17 4.09442 16.5562 3.02332 15.7663 2.23375Z'
                          stroke='#131415'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      Request Blood
                    </span>
                  </Nav.Link>
                  <Nav.Link href='#Explore'>
                    <span className='textCustom d-flex'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.1111 18.2222C15.0385 18.2222 18.2222 15.0385 18.2222 11.1111C18.2222 7.18375 15.0385 4 11.1111 4C7.18375 4 4 7.18375 4 11.1111C4 15.0385 7.18375 18.2222 11.1111 18.2222Z'
                          stroke='#131415'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M20 20L16.1333 16.1333'
                          stroke='#131415'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      Explore
                    </span>
                  </Nav.Link>
                </div>
                <div className='d-lg-flex'>
                  <Nav.Link href='/signInPage'>
                    <span className='textCustom d-flex'>
                      <svg
                        width='16'
                        height='19'
                        viewBox='0 0 16 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.2222 17.5V15.7222C15.2222 13.7585 13.6303 12.1667 11.6667 12.1667H4.55556C2.59188 12.1667 1 13.7585 1 15.7222V17.5M8.11111 8.61111C10.0748 8.61111 11.6667 7.01923 11.6667 5.05556C11.6667 3.09188 10.0748 1.5 8.11111 1.5C6.14743 1.5 4.55556 3.09188 4.55556 5.05556C4.55556 7.01923 6.14743 8.61111 8.11111 8.61111Z'
                          stroke='#131415'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      Sign In
                    </span>
                  </Nav.Link>
                  <div class='line'></div>
                  <Nav.Link href='/register'>
                    <span className='textCustom d-flex'>
                      <svg
                        width='18'
                        height='16'
                        viewBox='0 0 18 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.6364 14.5909V13.1364C12.6364 11.5297 11.3339 10.2273 9.72727 10.2273H3.90909C2.30244 10.2273 1 11.5297 1 13.1364V14.5909M17 14.5909V13.1364C16.999 11.8106 16.1018 10.6533 14.8182 10.3218M11.9091 1.59455C13.1963 1.92412 14.0966 3.08399 14.0966 4.41273C14.0966 5.74146 13.1963 6.90133 11.9091 7.23091M6.81818 7.31818C8.42483 7.31818 9.72727 6.01574 9.72727 4.40909C9.72727 2.80244 8.42483 1.5 6.81818 1.5C5.21154 1.5 3.90909 2.80244 3.90909 4.40909C3.90909 6.01574 5.21154 7.31818 6.81818 7.31818Z'
                          stroke='#131415'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      Register
                    </span>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
};


export default Header;
