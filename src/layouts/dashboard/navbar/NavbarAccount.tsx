// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Link, Typography, Avatar } from '@mui/material';
import { RootState, useSelector } from 'src/redux/store';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {};

export default function NavbarAccount({}: Props) {
  const portfolio = useSelector((state: RootState) => state.portfolio);

  return (
    <Link underline="none" color="inherit">
      <Stack spacing={2} alignItems="center">
        <Avatar
          sx={{
            width: 149,
            height: 149,
          }}
          src={portfolio.avatar}
        />
        {/* <Typography variant="h3">Adam.eth</Typography> */}
      </Stack>
    </Link>
  );
}
