// @mui
import { Container, Typography, Box } from '@mui/material';
import { HEADER } from 'src/config';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageProfile() {
  return (
    <Page title="Profile">
      <Container>
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: (theme) => theme.zIndex.appBar + 3,
            top: `-35px`,
          }}
        >
          <Typography variant="h3">Profile</Typography>
        </Box>
      </Container>
    </Page>
  );
}
