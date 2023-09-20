import { createIcon } from '@chakra-ui/icons';
import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import styles from "../styles/css/Dashboard.module.css";
import Image from 'next/image';
import profileImage from "../assets/img/profile_image.png";

const Dashboard: NextPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const LogoutIcon = createIcon({
        displayName: 'LogoutIcon',
        viewBox: '0 0 24 24',
        path: (
            <svg fill="none" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        ),
    });
    const CheckedIcon = createIcon({
        displayName: 'CheckedIcon',
        viewBox: '0 0 24 24',
        path: (
            <svg fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        ),
    });
    const LocalisationIcon = createIcon({
        displayName: 'LocalisationIcon',
        viewBox: '0 0 24 24',
        path: (
            <svg width="24" height="24" fill="none">
                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    });
    const WorldIcon = createIcon({
        displayName: 'WorldIcon',
        viewBox: '0 0 24 24',
        path: (
            <svg fill="none" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="#ffffff"></path> </g></svg>
        ),
    });
    const PersonCardIcon = createIcon({
        displayName: 'PersonCardIcon',
        viewBox: '0 0 24 24',
        path: (
            <svg fill="none" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 16C14.7164 14.8589 13.481 14 12 14C10.519 14 9.28364 14.8589 9 16M11 3H13M12 10H12.01M8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H16M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        ),
    });

    return (
        <div className={styles.dashboard}>
            <div className={styles.banner}>
                <div className={styles.buttons}>
                    <div>
                        <CheckedIcon height="18px" width="18px" />
                        <p>KYB</p>
                    </div>
                    <button>
                        <LogoutIcon height="18px" width="18px" />
                        <span>Log out</span>
                    </button>
                </div>

                <div className={styles.bannerLeft}>
                    <div><Image src={profileImage} alt="Profile image" /></div>
                </div>

                <div className={styles.bannerRight}>
                    <h1>[company's name]'s Dashboard</h1>
                    <div><LocalisationIcon height="18px" width="18px" /><p>[company's address]</p></div>
                    <div><WorldIcon height="18px" width="18px" /><p>[place of work]</p></div>
                    <div><PersonCardIcon height="18px" width="18px" /><p>[project holder]</p></div>
                </div>
            </div>

            <div className={styles.content}></div>
        </div>
    );
};

export default Dashboard;