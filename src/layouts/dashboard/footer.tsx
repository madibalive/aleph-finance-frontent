import type { FC } from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

export const Footer: FC = () => (
  <div>
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: {
          sm: 'row',
          xs: 'column',
        },
        py: 3,
        '& a': {
          mt: {
            sm: 0,
            xs: 1,
          },
          '&:not(:last-child)': {
            mr: {
              sm: 5,
              xs: 0,
            },
          },
        },
      }}
    >
      <Typography color="textSecondary" variant="caption">
        © 2023 Aleph Finance
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
    </Container>
  </div>
);
