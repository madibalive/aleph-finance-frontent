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
    field: 'chain',
    headerName: 'Assets',
  },
  {
    field: 'balance',
    headerName: 'Balance',
  },

  {
    field: 'price',
    headerName: 'Price',
  },

  // {
  //   field: 'Protocol',
  //   headerName: '',
  // },
  // {
  //   field: 'Protocol',
  //   headerName: '24h',
  // },

  {
    field: 'value',
    headerName: 'Value',
  },
];
// filter data where value is greater than 0

const applyFilter = (data: any[]) => {
  return data.filter((t) => new BigNumber(t.balanceUSD || t.amount || 0).isGreaterThanOrEqualTo(1));
};

// const applyFilter = (data: any[]) =>
//   data.filter((item) => {
//     const filterBy = item.balanceUSD || item.amount || 0;
//     return filterBy >= 1;
//   });

const NodesTableComponent = (props: any) => {
  const [selectedId, setselectedId] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleRowClick = (id: any) => {
    setselectedId(id);
  };
  if (!props.data) return <></>;
  if (props?.data?.wallets?.length <= 0) return <></>;

  const filteredData = applyFilter(props.data.wallets);

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
          data={filteredData}
          columns={columns}
        />
      </Box>
    </Paper>
  );
};

export default NodesTableComponent;
