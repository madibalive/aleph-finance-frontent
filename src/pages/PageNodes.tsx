// @mui
import { Container, Typography, Box } from '@mui/material';
import { HEADER } from 'src/config';
import { RootState, useSelector } from 'src/redux/store';
import SkeletonLoad from 'src/components/SkeletonLoad';
import { getDisplayValue } from 'src/utils/formatTime';
import NodesTableComponent from 'src/components/nodes';
import NodesWeb3TableComponent from 'src/components/nodes_web3';

// components
import Page from '../components/Page';
import DashboardMetrics from 'src/components/dashboard-metrics';

// ----------------------------------------------------------------------

export default function PageDashboard() {
  const portfolio = useSelector((state: RootState) => state.portfolio);
  const { isLoading, success, wallet_total, groupedProtocols, nodes, networth, wallets } =
    portfolio;

  return (
    <Page title="Dashboard">
      {isLoading && <SkeletonLoad />}
      {success && !isLoading && (
        <>
          <Box className="tracker__nodes--block">
            <h3>Nodes</h3>
            <NodesWeb3TableComponent nodes={nodes} />
          </Box>
        </>
      )}
    </Page>
  );
}
