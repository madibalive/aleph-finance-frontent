import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, Stack, Link, ListItemText } from '@mui/material';
// type
import { NavItemProps } from '../type';
//
import { useLocation } from 'react-router';
import { ListItemStyle, ListItemStyleSub, ListItemTextStyle, ListItemIconStyle } from './style';

export function isExternalLink(path: string) {
  return path.includes('http');
}

// ----------------------------------------------------------------------

export function NavItemRoot({ item, open = false, active, onOpen }: NavItemProps) {
  const { title, path, icon, info, children } = item;
  const { search } = useLocation();

  const renderContent = (
    <>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemTextStyle disableTypography primary={title} />
    </>
  );

  if (children) {
    return (
      <ListItemStyle onClick={onOpen} activeRoot={active}>
        {renderContent}
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    <ListItemStyle component={Link} href={path} target="_blank" rel="noopener">
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle component={RouterLink} to={`${path}${search}`} activeRoot={active}>
      {renderContent}
    </ListItemStyle>
  );
}

// ----------------------------------------------------------------------

type NavItemSubProps = Omit<NavItemProps, 'isCollapse'>;

export function NavItemSub({ item, open = false, active = false, onOpen }: NavItemSubProps) {
  const { title, path, info, children } = item;
  const { search } = useLocation();

  const renderContent = (
    <>
      <ListItemText
        sx={{
          pl: 3,
          '&:before': {
            content: '""',
            width: '21px',
            height: '9px',
            display: 'block',
            position: 'absolute',
            left: '0',
            top: '10px',
            borderLeft: '1px solid #69665d',
            borderBottom: '1px solid #69665d',
            borderBottomLeftRadius: '20px',
          },
          '&:after': {
            content: '""',
            width: '6px',
            height: '6px',
            display: 'block',
            background: '#baa878',
            position: 'absolute',
            left: '20px',
            top: '15px',
            borderRadius: '100%',
          },
        }}
        // disableTypography
        primary={title}
      />
      {info && info}
      {/* {children && <ArrowIcon open={open} />} */}
    </>
  );

  if (children) {
    return (
      <ListItemStyleSub onClick={onOpen} activeSub={active} subItem>
        {renderContent}
      </ListItemStyleSub>
    );
  }

  return isExternalLink(path) ? (
    <ListItemStyleSub component={Link} href={path} target="_blank" rel="noopener" subItem>
      {renderContent}
    </ListItemStyleSub>
  ) : (
    <ListItemStyleSub component={RouterLink} to={`${path}${search}`} activeSub={active} subItem>
      {renderContent}
    </ListItemStyleSub>
  );
}
