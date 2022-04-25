import {
  Box,
  Button,
  Table,
  TableBody,
  Stack,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Link,
} from '@mui/material';
import { getDisplayValue, getNumberWithCommas } from '../../utils/formatTime';
import Scrollbar from '../Scrollbar';
import Spinner from '../SkeletonLoad';

export default function NodesTable(props: any) {
  const { data, columns, loading, onRowClick, ...other } = props;

  return (
    <div {...other}>
      <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column: any, index: any) => (
                <TableCell key={index}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={100}>
                  <Spinner />
                </TableCell>
              </TableRow>
            )}
            {!loading && data.length < 0 && (
              <TableRow>
                <TableCell colSpan={100}>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    No records found
                  </Box>
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              data.map((item: any, index: any) => {
                // const supply = item.supplyTokens.map((item: any) => {
                //   return (
                //     <Stack direction="row" spacing={1}>
                //       <Typography variant="body2">{getDisplayValue(item.amount)}</Typography>
                //       <Typography variant="body1">{item.symbol}</Typography>
                //     </Stack>
                //   );
                // });
                // const rewards = item.rewardTokens.map((item: any) => {
                //   return (
                //     <Stack direction="row" spacing={1}>
                //       <Typography variant="body2">{getDisplayValue(item.amount)}</Typography>
                //       <Typography variant="body1">{item.symbol}</Typography>
                //     </Stack>
                //   );
                // });
                // const borrow = item.borrowTokens.map((item: any) => {
                //   return (
                //     <Stack direction="row" spacing={1}>
                //       <Typography variant="body2">{getDisplayValue(item.amount)}</Typography>
                //       <Typography variant="body1">{item.symbol}</Typography>
                //     </Stack>
                //   );
                // });

                return (
                  <TableRow
                    // onClick={() => onRowClick?.(item.id)}
                    sx={{
                      cursor: 'pointer',
                      '&:last-child td': {
                        border: 0,
                      },
                    }}
                    hover
                    key={index}
                  >
                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        {item.logo ? (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'background.default',
                              backgroundImage: `url(${item.logo})`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              borderRadius: 1,
                              display: 'flex',
                              height: 38,
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: 38,
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'background.default',
                              borderRadius: 1,
                              display: 'flex',
                              height: 38,
                              justifyContent: 'center',
                              width: 38,
                            }}
                          ></Box>
                        )}
                        <Box
                          sx={{
                            cursor: 'pointer',
                            ml: 2,
                          }}
                        >
                          <Typography variant="subtitle2">{item.symbol}</Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {getDisplayValue(item.balance || item.amount)}
                    </TableCell>
                    {/* 
                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {rewards}
                    </TableCell>

                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {borrow}
                    </TableCell> */}

                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      ${getDisplayValue(item.balanceUSD)}
                    </TableCell>
                    {/* <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.chainable}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: 'primary.main',
                      }}
                    >
                      {item.change_in_24h}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.total_chainable}
                    </TableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
}
