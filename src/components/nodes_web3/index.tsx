import { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Stack, Button, Typography, Card, CardContent } from '@mui/material';
import { Close } from '@mui/icons-material';
import { sample } from 'lodash';
import { useDialog } from '../../hooks/useDialog';
import { useMounted } from '../../hooks/useMounted';
import NodesTable from './Table';
import BigNumber from 'bignumber.js';

const columns: any = [
  {
    field: 'Network',
    headerName: 'Assets',
  },
  {
    field: 'Rewards',
    headerName: 'Node Total',
  },

  {
    field: 'Balance',
    headerName: 'Yeild p/d',
  },
  {
    field: 'Nodes',
    headerName: 'Claimable',
  },
  {
    field: 'Nodes',
    headerName: '',
  },
  // {
  //   field: 'Nodes',
  //   headerName: 'Token Price',
  // },
  // {
  //   field: 'Nodes',
  //   headerName: 'ROI',
  // },
  // {
  //   field: 'Nodes',
  //   headerName: 'Total Claimable (USD)',
  // },
];
// filter data where value is greater than 0

const applyFilter = (data: any[]) => {
  return data.filter((t) => new BigNumber(t.balanceUSD || t.amount || 0).isGreaterThanOrEqualTo(1));
};

const NodesWeb3TableComponent = (props: any) => {
  const [selectedId, setselectedId] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleRowClick = (id: any) => {
    setselectedId(id);
  };
  if (!props.nodes) return <></>;

  return (
    <Paper
      sx={{
        pt: 2,
      }}
    >
      <Box
        sx={{
          mt: 1,
          // p: 2,
          // backgroundColor: (theme: any) => theme.palette.common.black,
        }}
      >
        <NodesTable
          loading={isLoading}
          onRowClick={handleRowClick}
          data={props.nodes}
          columns={columns}
        />
      </Box>
    </Paper>
  );
};

export default NodesWeb3TableComponent;
