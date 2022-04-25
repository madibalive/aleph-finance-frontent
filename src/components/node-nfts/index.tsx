import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Paper,
  Stack,
  Button,
  Typography,
  Card,
  Skeleton,
  CardContent,
  Grid,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { sample } from 'lodash';
import { useDialog } from '../../hooks/useDialog';
import { useMounted } from '../../hooks/useMounted';
import NodesTable from './Table';
import NFTCard from './Table';

const SkeletonLoad = (
  <>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

const NodesNFTS = (props: any) => {
  const [selectedId, setselectedId] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleRowClick = (id: any) => {
    setselectedId(id);
  };

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
        <Typography variant="h6">NFT networth </Typography>
        <Typography variant="h6">${props.total} </Typography>
      </Stack>
      <Box
        sx={{
          mt: 2,
          p: 2,
        }}
      >
        <Grid container spacing={3}>
          {props.nfts.map((nft: any, index: any) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <NFTCard item={nft} onRowClick={handleRowClick} />
            </Grid>
          ))}

          {/* {isLoad && SkeletonLoad} */}
        </Grid>
      </Box>
    </Box>
  );
};

export default NodesNFTS;
