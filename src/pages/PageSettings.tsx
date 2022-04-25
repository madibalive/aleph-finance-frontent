// @mui
import { Container, Box, Typography } from '@mui/material';

// components
import Page from '../components/Page';
// ----------------------------------------------------------------------

export default function PageSettings() {
  return (
    <Page title="Settings ">
      <Container>
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: (theme) => theme.zIndex.appBar + 3,
            top: `-35px`,
          }}
        >
          <Typography variant="h3">Settings</Typography>
        </Box>
      </Container>
    </Page>
  );
}
