// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const FixedBackground = styled(Box)(({ theme }) => ({
  position: 'fixed',
  opacity: '1',
  left: '0px',
  top: '0px',
  width: '100%',
  height: '100%',
  zIndex: '0',
  background: 'url(/img/bgTriangles.svg) 0% 0% / cover no-repeat',
  backgroundRepeat: 'no-repeat',
}));

export default function App() {
  return (
    <ThemeProvider>
      <RtlLayout>
        <ProgressBarStyle />
        <ScrollToTop />
        <FixedBackground />
        <Box>
          <Router />
        </Box>
      </RtlLayout>
    </ThemeProvider>
  );
}
