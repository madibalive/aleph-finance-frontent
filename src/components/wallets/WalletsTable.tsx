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

import Scrollbar from '../Scrollbar';
import Spinner from '../SkeletonLoad';

export default function WalletsTable(props: any) {
  const { data, columns, loading, onRowClick, ...other } = props;

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
  return (
    <div {...other}>
      <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column: any) => (
                <TableCell>{column.headerName}</TableCell>
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
              data.map((item: any) => {
                return (
                  <TableRow
                    onClick={() => onRowClick?.(item.id)}
                    sx={{
                      cursor: 'pointer',
                      '&:last-child td': {
                        border: 0,
                      },
                    }}
                    hover
                    key={item.id}
                  >
                    <StyledTableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.balance}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.price}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: 'primary.main',
                      }}
                    >
                      {item.value}
                    </StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
}
