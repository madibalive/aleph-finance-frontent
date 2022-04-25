import { ReactNode } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  LinkProps,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  ListItemButtonProps,
} from '@mui/material';
import { ICON, NAVBAR } from 'src/config';
// config

// ----------------------------------------------------------------------

type IProps = LinkProps & ListItemButtonProps;

interface ListItemStyleProps extends IProps {
  component?: ReactNode;
  to?: string;
  activeRoot?: boolean;
  activeSub?: boolean;
  subItem?: boolean;
}

export const ListItemStyleSub = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'activeRoot' && prop !== 'activeSub' && prop !== 'subItem',
})<ListItemStyleProps>(({ activeRoot, activeSub, subItem, theme }) => ({
  // ...theme.typography.fontWeightBold,
  position: 'relative',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  // activeRoot
  // ...(activeRoot && {
  //   ...theme.typography.subtitle2,
  //   color: theme.palette.primary.main,
  //   backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  // }),
  // activeSub
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'transparent',
  },

  ...(activeSub && {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
  }),
  // subItem
  ...(subItem && {
    height: NAVBAR.DASHBOARD_ITEM_SUB_HEIGHT,
  }),
}));

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'activeRoot' && prop !== 'activeSub' && prop !== 'subItem',
})<ListItemStyleProps>(({ activeRoot, activeSub, subItem, theme }) => ({
  ...theme.typography.h5,
  position: 'relative',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  padding: theme.spacing(4),
  // paddingRight: theme.spacing(1.5),
  // marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
  borderTopRightRadius: '35px',
  borderBottomRightRadius: '35px',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundImage:
      'linear-gradient( 95deg,rgb(46,35,9,1) 0%,rgb(201,159,77,1) 50%,rgb(112,80,22,1) 100%)',
  },
  // activeRoot
  ...(activeRoot && {
    paddingVertical: theme.spacing(10),
    color: theme.palette.common.white,
    backgroundImage:
      'linear-gradient( 95deg,rgb(46,35,9,1) 0%,rgb(201,159,77,1) 50%,rgb(112,80,22,1) 100%)',
  }),
}));

interface ListItemTextStyleProps extends ListItemButtonProps {
  isCollapse?: boolean;
}

export const ListItemTextStyle = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})<ListItemTextStyleProps>(({ isCollapse, theme }) => ({
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    width: 0,
    opacity: 0,
  }),
}));

export const ListItemIconStyle = styled(ListItemIcon)({
  width: ICON.NAVBAR_ITEM_LARGE,
  height: ICON.NAVBAR_ITEM_LARGE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { width: '100%', height: '100%' },
});
