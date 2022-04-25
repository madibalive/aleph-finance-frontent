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
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getDisplayValue, getNumberWithCommas } from '../../utils/formatTime';
import Scrollbar from '../Scrollbar';
import Spinner from '../SkeletonLoad';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#171717',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function NodesTable(props: any) {
  const { data, columns, loading, onRowClick, ...other } = props;

  return (
    <div {...other}>
      <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column: any, index: any) => (
                <StyledTableCell key={index}>{column.headerName}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <StyledTableCell colSpan={100}>
                  <Spinner />
                </StyledTableCell>
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
                return (
                  <TableRow
                    // onClick={() => onRowClick?.(item.id)}
                    sx={{
                      cursor: 'pointer',
                      '&:last-child td': {
                        border: 0,
                      },
                    }}
                    // hover
                    key={index}
                  >
                    <StyledTableCell sx={{}}>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        {item.iconUrl ? (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundImage: `url(${item.iconUrl})`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              borderRadius: 1,
                              display: 'flex',
                              height: 40,
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: 40,
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
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              color: 'common.white',
                            }}
                          >
                            {item.network}
                          </Typography>
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell sx={{}}>{item.nodes}</StyledTableCell>
                    <StyledTableCell sx={{}}>{item.balance}</StyledTableCell>
                    <StyledTableCell sx={{}}>{parseFloat(item.rewards).toFixed(3)}</StyledTableCell>

                    {/* <StyledTableCell
                      sx={{
                        width: '15%',
                      }}
                    >
                      <span className="asset__graph">
                        <Box
                          component="img"
                          src="/img/wallet__graph1.svg"
                          sx={{
                            height: 38,
                            width: '100',
                          }}
                        />
                      </span>
                    </StyledTableCell>
                    <StyledTableCell sx={{}}>$4207.54 </StyledTableCell>
                    <StyledTableCell sx={{}}>
                      <span className="roi green__text">6%</span>
                    </StyledTableCell>
                    <StyledTableCell sx={{}}>$4207.54 </StyledTableCell>
                  */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
}
