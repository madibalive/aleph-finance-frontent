import { useState, useEffect, useCallback } from 'react';
import { Box, Paper, Stack, Button, Typography, Card, CardContent } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDialog } from '../../hooks/useDialog';
import { useMounted } from '../../hooks/useMounted';
import WalletsTable from './WalletsTable';

const columns: any = [
  {
    field: 'name',
    headerName: 'Assets',
  },

  {
    field: 'balance',
    headerName: 'Balance',
  },
  {
    field: 'price',
    headerName: 'Price',
    props: {},
  },
  {
    field: 'value',
    headerName: 'Value',
  },
];

const WalletsComponent = (props: any) => {
  const [selectedId, setselectedId] = useState(null);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    if (props.data) setData(props.data);
  }, [props]);

  const handleRowClick = (id: any) => {
    setselectedId(id);
  };

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Typography variant="h6">Wallets </Typography>

      <Box
        sx={{
          mt: 2,
          p: 2,
          backgroundColor: (theme: any) => theme.palette.common.black,
        }}
      >
        <WalletsTable
          loading={isLoading}
          onRowClick={handleRowClick}
          data={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default WalletsComponent;
