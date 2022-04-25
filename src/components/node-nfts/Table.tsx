import { Box, Button, Card, Stack, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { getDisplayValue, getNumberWithCommas } from '../../utils/formatTime';

export default function NFTCard(props: any) {
  const { item, onRowClick } = props;

  return (
    <div>
      <Card>
        <Box sx={{ position: 'relative' }}>
          {false && (
            <Box
              component="img"
              src={item.collection.imgProfile}
              sx={{
                top: 16,
                right: 16,
                position: 'absolute',
                width: 48,
                height: 48,
              }}
            />
          )}
          <Box
            component="img"
            src={item.collectionImg}
            sx={{
              width: '100%',
              height: 120,
            }}
          />
        </Box>

        <Stack spacing={2} sx={{ p: 1 }}>
          <Typography variant="subtitle2" noWrap>
            {item.collectionName}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack>
              <Typography variant="caption">Floor Price</Typography>
              <Typography variant="body1">{item.collection.floorPrice.toFixed(4)}</Typography>
            </Stack>
            <Stack
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography variant="caption">Est. Value</Typography>
              <Typography variant="body1">$ {getDisplayValue(item.balanceUSD)}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
}
