// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Toolbar } from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
//
import ManageAddress from './ManageAddress';

// ----------------------------------------------------------------------

type RootStyleProps = {
  isCollapse: boolean;
  isOffset: boolean;
  verticalLayout: boolean;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})<RootStyleProps>(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    // height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    // width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    // ...(isCollapse && {
    //   width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    // }),
    // ...(isOffset && {
    //   height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    // }),
    width: '100%',
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    backgroundColor: theme.palette.background.default,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  onOpenSidebar: VoidFunction;
  verticalLayout?: boolean;
};

export default function DashboardHeader({ onOpenSidebar, verticalLayout = false }: Props) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const isMobile = useResponsive('down', 'sm');

  return (
    <header className="portal__header">
      <Box className="logo">
        <a href="#">
          <img className="img-fluid" src="/img/logo.png" alt="" />
        </a>
      </Box>
      <Box className="portal__header--right">
        <Box className="header__search">
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.196"
              height="16.196"
              viewBox="0 0 16.196 16.196"
            >
              <path
                id="Path_2431"
                data-name="Path 2431"
                d="M16,15.068l-2.784-2.722h0l-.065-.1a.656.656,0,0,0-.921,0h0a6.57,6.57,0,0,1-8.518.276A6.219,6.219,0,0,1,2.329,4.3a6.54,6.54,0,0,1,8.161-2.4,6.269,6.269,0,0,1,3.494,7.6.631.631,0,0,0,.147.625.665.665,0,0,0,.627.188.65.65,0,0,0,.48-.437h0A7.559,7.559,0,0,0,11.189.762,7.9,7.9,0,0,0,1.368,3.308a7.5,7.5,0,0,0,1.1,9.875A7.927,7.927,0,0,0,12.62,13.6l2.465,2.41a.663.663,0,0,0,.921,0,.635.635,0,0,0,0-.907h0Z"
                fill="#fff"
              />
            </svg>
          </span>
          <input type="text" className="header__search--input" placeholder="Search" />
        </Box>
        <ManageAddress />
        <ul className="header__right--ul">
          <li className="header__notification">
            <a href="javascript:void(0)" className="noti__drop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34.331"
                height="40.723"
                viewBox="0 0 34.331 40.723"
              >
                <path
                  id="_59_Notifications_Alarm_Notification"
                  data-name="59 Notifications, Alarm, Notification"
                  d="M43.331,32.246a3.514,3.514,0,0,1-3.514,3.514H34.271a8.2,8.2,0,0,1-16.211,0H12.514a3.514,3.514,0,0,1,0-7.028V21.71c.009-8.6,3.907-14.352,12.48-14.966V2h2.343V6.744c8.574.614,12.472,6.371,12.48,14.966v7.022A3.514,3.514,0,0,1,43.331,32.246ZM14.856,28.732H37.475V21.71c0-7.763-3.546-12.682-11.309-12.682S14.856,13.947,14.856,21.71ZM31.9,35.76H20.426a5.857,5.857,0,0,0,11.479,0Zm9.084-3.514a1.171,1.171,0,0,0-1.171-1.171h-27.3a1.171,1.171,0,1,0,0,2.343h27.3A1.171,1.171,0,0,0,40.989,32.246Z"
                  transform="translate(-9 -2)"
                  fill="#fff"
                />
              </svg>
            </a>
            <Box className="header__notification--dropdown">
              <ul className="header__notification--list">
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing...
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </a>
                </li>
                <li>
                  <a href="#">
                    <b>lorem ipsum</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </a>
                </li>
              </ul>
              <a href="#" className="primary__btn">
                View all
              </a>
            </Box>
          </li>
        </ul>
      </Box>
    </header>
  );
}
