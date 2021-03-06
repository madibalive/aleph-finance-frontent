import { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Stack, Button, Typography, Card, CardContent } from '@mui/material';
import NodesTable from './Table';
import BigNumber from 'bignumber.js';

const columns: any = [
  {
    field: 'Assets',
    headerName: 'Assets',
  },
  {
    field: 'nodes',
    headerName: 'Node Total',
  },

  // {
  //   field: 'Yeild p/d',
  //   headerName: 'Yeild p/d',
  // },
  {
    field: 'Claimable',
    headerName: 'Claimable',
  },
  {
    field: 'price',
    headerName: 'Token Price',
  },
  {
    field: 'totalClaimable',
    headerName: 'Total Claimable',
  },
  {
    field: 'Nodes',
    headerName: '',
  },
];
// filter data where value is greater than 0

const applyFilter = (data: any[]) => {
  return data.filter((t) => new BigNumber(t.rewards || 0).isGreaterThanOrEqualTo(1));
};

const NodesWeb3TableComponent = (props: any) => {
  const [selectedId, setselectedId] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleRowClick = (id: any) => {
    setselectedId(id);
  };
  if (!props.nodes) return <></>;

  let filteredData = applyFilter(props.nodes);
  filteredData = filteredData.sort(function (a: any, b: any) {
    return a.network.localeCompare(b.network);
  });

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

export default NodesWeb3TableComponent;
