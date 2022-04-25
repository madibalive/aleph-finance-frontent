import { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Stack, Button, Typography, Card, CardContent } from '@mui/material';
import { Close } from '@mui/icons-material';
import { sample } from 'lodash';
import { useDialog } from '../../hooks/useDialog';
import { useMounted } from '../../hooks/useMounted';
import NodesTable from './Table';

const columns: any = [
  {
    field: 'pool',
    headerName: 'Symbol',
  },

  {
    field: 'balance',
    headerName: 'Balance',
  },

  // {
  //   field: 'rewards',
  //   headerName: 'Rewards',
  // },
  // {
  //   field: 'borrow',
  //   headerName: 'Borrow',
  // },

  {
    field: 'value',
    headerName: 'USD Value',
  },
];

const NodeProtocolTable = (props: any) => {
  const [selectedId, setselectedId] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleRowClick = (id: any) => {
    setselectedId(id);
  };
  if (!props.data) return <></>;
  if (props?.data?.rows?.length <= 0) return <></>;
  if (props?.data?.total <= 1) return <></>;

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
        <Typography variant="h6">{props.data.chain} </Typography>
        <Typography variant="h6">${props.data.total} </Typography>
      </Stack>
      <Box
        sx={{
          mt: 2,
          p: 2,
          backgroundColor: (theme: any) => theme.palette.common.black,
        }}
      >
        <NodesTable
          loading={isLoading}
          onRowClick={handleRowClick}
          data={props.data.rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default NodeProtocolTable;
