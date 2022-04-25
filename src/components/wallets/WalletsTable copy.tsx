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
import { Close, Done } from '@mui/icons-material';

export default function WalletsTable(props: any) {
  const { data, columns, onRowClick, ...other } = props;

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
            {data.map((item: any) => {
              return (
                <TableRow
                  onClick={() => onRowClick?.(item.id)}
                  sx={{ cursor: 'pointer' }}
                  hover
                  key={item.id}
                >
                  {columns.map((column: any) => (
                    <TableCell>
                      <Typography variant="body1">{item[`${column}`]}</Typography>
                    </TableCell>
                  ))}

                  <TableCell>
                    {/* <NextLink href={`/dashboard/profile/${participant.participant_id}`} passHref> */}
                    <Link color="inherit" variant="subtitle2">
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                        }}
                      >
                        {item.logo_url ? (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'background.default',
                              backgroundImage: `url(${item.logo_url})`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              borderRadius: 1,
                              display: 'flex',
                              height: 28,
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: 28,
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'blue',
                              borderRadius: 1,
                              display: 'flex',
                              height: 28,
                              justifyContent: 'center',
                              width: 28,
                            }}
                          >
                            {/* <ImageIcon fontSize="small" /> */}
                          </Box>
                        )}
                        <Box
                          sx={{
                            cursor: 'pointer',
                            ml: 2,
                          }}
                        >
                          <Typography variant="subtitle2">{item.name}</Typography>
                        </Box>
                      </Box>
                    </Link>
                    {/* </NextLink> */}
                  </TableCell>

                  <TableCell>
                    <Typography variant="body1">{item.balance}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{item.price}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{item.value}</Typography>
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
