// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import { Box } from '@mui/material';
// import ThemeColorPresets from './components/ThemeColorPresets';
// import MotionLazyContainer from './components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <RtlLayout>
        {/* <MotionLazyContainer> */}
        <ProgressBarStyle />
        <ScrollToTop />
        <Box
          sx={{
            mx: 2,
            position: 'relative',
          }}
        >
          <Router />
        </Box>
        {/* </MotionLazyContainer> */}
      </RtlLayout>
    </ThemeProvider>
  );
}
