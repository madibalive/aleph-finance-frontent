import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, SxProps, CircularProgress } from '@mui/material';
//
import Logo from './Logo';
import ProgressBar from './ProgressBar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

type Props = {
  isDashboard?: boolean;
  sx?: SxProps;
};

export default function LoadingScreen({ isDashboard, ...other }: Props) {
  return (
    <>
      <ProgressBar />

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          left: 0,
          p: 3,
          position: 'fixed',
          top: 0,
          backgroundColor: (theme) => theme.palette.background.default,
          width: '100vw',
          zIndex: 2000,
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}
