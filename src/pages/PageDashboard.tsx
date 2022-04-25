// @mui
import { Container, Typography, Box, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import { AnalysisChart } from '../components/chart';
import { HEADER } from 'src/config';
import { RootState, useSelector } from 'src/redux/store';
import SkeletonLoad from 'src/components/SkeletonLoad';
import { getDisplayValue } from 'src/utils/formatTime';
import NodesTableComponent from 'src/components/nodes';
import NodesWeb3TableComponent from 'src/components/nodes_web3';
import NodesTable from 'src/components/node-protocol/Table';
import NodeProtocolTable from 'src/components/node-protocol';

// ----------------------------------------------------------------------

export default function PageDashboard() {
  const portfolio = useSelector((state: RootState) => state.portfolio);
  const { isLoading, success, wallet_total, groupedProtocols, nodes, networth, wallets } =
    portfolio;
  const { entities } = useSelector((state: RootState) => state.addresess);

  return (
    <Page title="Dashboard">
      <Container>
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: (theme) => theme.zIndex.appBar + 3,
            top: `-35px`,
          }}
        >
          <Typography variant="h3">Dashboard</Typography>
        </Box>

        {isLoading && <SkeletonLoad />}
        {success && !isLoading && (
          <>
            <Box className="tracker__top--block">
              <Box className="row">
                <Box className="col-xxl-3 col-xl-4">
                  <Box className="tracker__top--left same">
                    <ul className="tracker__top__left--list">
                      <li>
                        <span className="icon">
                          <img className="img-fluid" src="img/net__worth--icon.svg" alt="" />
                        </span>
                        <p>Net worth</p>
                        <h3>${getDisplayValue(networth)}</h3>
                      </li>
                      <li>
                        <span className="icon">
                          <img className="img-fluid" src="img/total__climable--icon.svg" alt="" />
                        </span>
                        <p>Total Claimable</p>
                        <h3>
                          $78,543.23 <span className="rating">3.7%</span>
                        </h3>
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="col-xxl-9 col-xl-8">
                  <Box className="tracker__top--right same">
                    <Box className="row">
                      <Box className="col-xxl-3 col-xl-5-col-lg-5">
                        <Box className="tracker__top__right--box">
                          <Box className="rewar__history--box">
                            <p>Daily Rewards</p>
                            <h4>$118.96</h4>
                            <span className="rating">22%</span>
                            <a href="#" className="more__up">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11.777"
                                height="15.5"
                                viewBox="0 0 11.777 15.5"
                              >
                                <path
                                  id="Path_4664"
                                  data-name="Path 4664"
                                  d="M4,13.892a.84.84,0,0,0,.241.582l.005.01,5.047,5.047a.841.841,0,1,0,1.19-1.19L6.872,14.73H18.659a.841.841,0,0,0,0-1.682H6.872l3.61-3.61a.841.841,0,1,0-1.19-1.19L4.246,13.295l-.005.008A.846.846,0,0,0,4,13.889Z"
                                  transform="translate(19.778 -4) rotate(90)"
                                  fill="#6fbc4f"
                                />
                              </svg>
                            </a>
                          </Box>
                          <Box className="rewar__history--box">
                            <p>Weekly Rewards</p>
                            <h4>$832,72.92</h4>
                            <span className="rating">22%</span>
                            <a href="#" className="more__up">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11.777"
                                height="15.5"
                                viewBox="0 0 11.777 15.5"
                              >
                                <path
                                  id="Path_4664"
                                  data-name="Path 4664"
                                  d="M4,13.892a.84.84,0,0,0,.241.582l.005.01,5.047,5.047a.841.841,0,1,0,1.19-1.19L6.872,14.73H18.659a.841.841,0,0,0,0-1.682H6.872l3.61-3.61a.841.841,0,1,0-1.19-1.19L4.246,13.295l-.005.008A.846.846,0,0,0,4,13.889Z"
                                  transform="translate(19.778 -4) rotate(90)"
                                  fill="#6fbc4f"
                                />
                              </svg>
                            </a>
                          </Box>
                          <Box className="rewar__history--box">
                            <p>Monthly Rewards</p>
                            <h4>$3468.92</h4>
                            <span className="rating">3.7%</span>
                            <a href="#" className="more__up">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11.777"
                                height="15.5"
                                viewBox="0 0 11.777 15.5"
                              >
                                <path
                                  id="Path_4664"
                                  data-name="Path 4664"
                                  d="M4,13.892a.84.84,0,0,0,.241.582l.005.01,5.047,5.047a.841.841,0,1,0,1.19-1.19L6.872,14.73H18.659a.841.841,0,0,0,0-1.682H6.872l3.61-3.61a.841.841,0,1,0-1.19-1.19L4.246,13.295l-.005.008A.846.846,0,0,0,4,13.889Z"
                                  transform="translate(19.778 -4) rotate(90)"
                                  fill="#6fbc4f"
                                />
                              </svg>
                            </a>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-xxl-9 col-xl-7-col-lg-7">
                        <Box className="tracker__top__right--graph">
                          <h3>Rewards History</h3>
                          <img className="img-fluid" src="/img/reward__history--map.png" alt="" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="tracker__nodes--block">
              <h3>Nodes</h3>

              <NodesWeb3TableComponent nodes={nodes} />
            </Box>
            <Box className="tracker__nodes--block wallet__table--block">
              <h3>Wallet</h3>

              <NodesTableComponent
                data={{
                  wallets: wallets,
                  total: getDisplayValue(wallet_total),
                  chain: 'Wallets',
                }}
              />
            </Box>
            {/* <Box className="tracker__nodes--block wallet__table--block">
              <h3>Wallet</h3>
              {groupedProtocols.map((item: any, index: any) => (
                <NodeProtocolTable
                  key={index}
                  data={{
                    rows: item.tokens,
                    total: getDisplayValue(item.balanceUSD),
                    chain: item.name,
                  }}
                />
              ))}
            </Box> */}
          </>
        )}
      </Container>
    </Page>
  );
}
