import { useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';

// @mui
import { List, Collapse, Box } from '@mui/material';
// type
import { NavListProps } from '../type';
//
import { NavItemRoot, NavItemSub } from './NavItem';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

type NavListRootProps = {
  list: NavListProps;
};

export function getActive(path: string, pathname: string) {
  return path ? !!matchPath({ path: path, end: false }, pathname) : false;
}

const ListStyle = styled(List)(({ theme }) => ({
  marginLeft: theme.spacing(10),
  // marginTop: '-10px',
  // paddingRight: theme.spacing(2.5),
  '&:before': {
    content: '""',
    width: '1px;',
    height: '77%;',
    display: 'block;',
    background: '#69665d',
    position: 'absolute;',
    left: '0;',
    top: '0;',
  },
}));

export function NavListRoot({ list }: NavListRootProps) {
  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <Box
        sx={{
          paddingBottom: (theme: any) => theme.spacing(2),
        }}
      >
        <NavItemRoot item={list} active={active} open={open} onOpen={() => setOpen(!open)} />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListStyle disablePadding>
            {(list.children || []).map((item) => (
              <NavListSub key={item.title} list={item} />
            ))}
          </ListStyle>
        </Collapse>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        paddingBottom: (theme: any) => theme.spacing(2),
      }}
    >
      <NavItemRoot item={list} active={active} />
    </Box>
  );
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  list: NavListProps;
};

function NavListSub({ list }: NavListSubProps) {
  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  // const hasChildren = list.children;

  // if (hasChildren) {
  //   return (
  //     <>
  //       <NavItemSub item={list} onOpen={() => setOpen(!open)} open={open} active={active} />

  //       <Collapse in={open} timeout="auto" unmountOnExit>
  //         <List component="div" disablePadding sx={{ pl: 3 }}>
  //           {(list.children || []).map((item) => (
  //             <NavItemSub key={item.title} item={item} active={getActive(item.path, pathname)} />
  //           ))}
  //         </List>
  //       </Collapse>
  //     </>
  //   );
  // }

  return <NavItemSub item={list} active={active} />;
}
