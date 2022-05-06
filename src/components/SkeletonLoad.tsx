// @mui
import { Box, Grid, Skeleton, SxProps } from '@mui/material';

export default function SkeletonLoad() {
  return (
    <Box
      sx={{
        width: 400,
      }}
    >
      <Grid
        container
        className=""
        spacing={3}
        sx={{
          pt: 3,
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={120}
            sx={{ paddingTop: '30%', borderRadius: 2 }}
          />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" height={40} />
          <Skeleton variant="text" height={40} />
        </Grid>
      </Grid>
    </Box>
  );
}
