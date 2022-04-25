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
import Scrollbar from '../Scrollbar';
import Spinner from '../SkeletonLoad';

export default function WalletsTable(props: any) {
  const { data, columns, loading, onRowClick, ...other } = props;

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
                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {item.balance}
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
                      {item.value}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
}
