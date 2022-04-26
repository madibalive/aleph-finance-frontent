import { ClickAwayListener } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function NotificationsPopover() {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const menuClass = `noti__drop${open ? ' active' : ''}`;
  const notificationClass = `header__notification--dropdown${open ? ' open' : ''}`;
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <ul className="header__right--ul">
        <li className="header__notification">
          <Box component="a" onClick={handleToggle} className={menuClass}>
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
          </Box>
          <div className={notificationClass}>
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
          </div>
        </li>
      </ul>
    </ClickAwayListener>
  );
}
