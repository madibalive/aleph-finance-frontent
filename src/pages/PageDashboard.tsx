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
          <DashboardMetrics networth={networth} />

          <Box className="tracker__nodes--block">
            <h3>Nodes</h3>

            <NodesWeb3TableComponent nodes={nodes} />
          </Box>
          {/* 
            <div className="tracker__nodes--block">
              <h3>Nodes</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Assets</th>
                      <th>Node Total</th>
                      <th>Yield p/d</th>
                      <th>Claimable</th>
                      <th></th>
                      <th>Token Price</th>
                      <th>ROI</th>
                      <th>Total Claimable (USD)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/asset__icon1.png" alt="" />
                          </span>
                          Aleph Finance
                        </div>
                      </td>
                      <td>15</td>
                      <td>1.5 nALEPH I $375</td>
                      <td>25.6 nALEPH</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/nodes__graph1.svg" alt="" />
                        </span>
                      </td>
                      <td>$250.53</td>
                      <td>
                        <span className="roi red__text">6%</span>
                      </td>
                      <td>$4207.54</td>
                      <td></td>
                    </tr>
                    <tr className="table__toggle">
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/asset__icon2.png" alt="" />
                          </span>
                          Thor FInancial
                        </div>
                      </td>
                      <td>3</td>
                      <td>0.6 Thor I $360</td>
                      <td>1.9 Thor</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/nodes__graph2.svg" alt="" />
                        </span>
                      </td>
                      <td>$600</td>
                      <td>
                        <span className="roi green__text">58%</span>
                      </td>
                      <td>$4207.54</td>
                      <td>
                        <a href="javascript:void(0)" className="nodes__down--btn">
                          <img
                            className="img-fluid"
                            src="img/nodes__table__down--arrow.svg"
                            alt=""
                          />
                        </a>
                      </td>
                    </tr>
                    <tr className="fold">
                      <td data-colspan="9">
                        <table className="table__second">
                          <tr>
                            <td>
                              <div className="asset__td">
                                <span className="asset__icon">
                                  <img className="img-fluid" src="img/asset__icon3.png" alt="" />
                                </span>
                                Heimadall
                              </div>
                            </td>
                            <td>1</td>
                            <td>0.5 Thor I $300</td>
                            <td>1.5</td>
                            <td>
                              <span className="asset__graph">
                                <img className="img-fluid" src="img/nodes__graph3.svg" alt="" />
                              </span>
                            </td>
                            <td></td>
                            <td>
                              <span className="roi green__text">58%</span>
                            </td>
                            <td>$900</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>
                              <div className="asset__td">
                                <span className="asset__icon">
                                  <img className="img-fluid" src="img/asset__icon4.png" alt="" />
                                </span>
                                Freya
                              </div>
                            </td>
                            <td>2</td>
                            <td>0.1 Thor I $60</td>
                            <td>0.4 Thor</td>
                            <td>
                              <span className="asset__graph">
                                <img className="img-fluid" src="img/nodes__graph4.svg" alt="" />
                              </span>
                            </td>
                            <td></td>
                            <td>
                              <span className="roi green__text">58%</span>
                            </td>
                            <td>$240</td>
                            <td></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/asset__icon5.png" alt="" />
                          </span>
                          Hive Investments
                        </div>
                      </td>
                      <td>23</td>
                      <td>0.5 HNY I $35</td>
                      <td>10 NHY</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/nodes__graph5.svg" alt="" />
                        </span>
                      </td>
                      <td>$250</td>
                      <td>
                        <span className="roi green__text">24%</span>
                      </td>
                      <td>$4207.54</td>
                      <td></td>
                    </tr>
                    <tr className="table__toggle">
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/asset__icon6.png" alt="" />
                          </span>
                          StrongBlock
                        </div>
                      </td>
                      <td>10</td>
                      <td>.992 Strong I $34</td>
                      <td>0.537 Thor</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/nodes__graph6.svg" alt="" />
                        </span>
                      </td>
                      <td>$65</td>
                      <td>
                        <span className="roi green__text">24%</span>
                      </td>
                      <td>$4207.54</td>
                      <td>
                        <a href="javascript:void(0)" className="nodes__down--arrow">
                          <img
                            className="img-fluid"
                            src="img/nodes__table__down--arrow.svg"
                            alt=""
                          />
                        </a>
                      </td>
                    </tr>
                    <tr className="fold">
                      <td data-colspan="9">
                        <table className="table__second">
                          <tr>
                            <td>
                              <div className="asset__td">
                                <span className="asset__icon">
                                  <img className="img-fluid" src="img/asset__icon3.png" alt="" />
                                </span>
                                Heimadall
                              </div>
                            </td>
                            <td>1</td>
                            <td>0.5 Thor I $300</td>
                            <td>1.5</td>
                            <td>
                              <span className="asset__graph">
                                <img className="img-fluid" src="img/nodes__graph3.svg" alt="" />
                              </span>
                            </td>
                            <td></td>
                            <td>
                              <span className="roi green__text">58%</span>
                            </td>
                            <td>$900</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>
                              <div className="asset__td">
                                <span className="asset__icon">
                                  <img className="img-fluid" src="img/asset__icon4.png" alt="" />
                                </span>
                                Freya
                              </div>
                            </td>
                            <td>2</td>
                            <td>0.1 Thor I $60</td>
                            <td>0.4 Thor</td>
                            <td>
                              <span className="asset__graph">
                                <img className="img-fluid" src="img/nodes__graph4.svg" alt="" />
                              </span>
                            </td>
                            <td></td>
                            <td>
                              <span className="roi green__text">58%</span>
                            </td>
                            <td>$240</td>
                            <td></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/asset__icon7.png" alt="" />
                          </span>
                          Vapor Nodes
                        </div>
                      </td>
                      <td>23</td>
                      <td>0.5 HNY I $35</td>
                      <td>10 NHY</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/nodes__graph7.svg" alt="" />
                        </span>
                      </td>
                      <td>$250</td>
                      <td>
                        <span className="roi green__text">24%</span>
                      </td>
                      <td>$4207.54</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}

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
          {/* 
            <div className="tracker__nodes--block wallet__table--block">
              <h3>Wallet</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Assets</th>
                      <th>Balance</th>
                      <th>Price</th>
                      <th></th>
                      <th>24h</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/wallet__icon1.svg" alt="" />
                          </span>
                          Aleph Finance
                        </div>
                      </td>
                      <td>573</td>
                      <td>$2.53</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/wallet__graph1.svg" alt="" />
                        </span>
                      </td>
                      <td>
                        <span className="roi red__text">2%</span>
                      </td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/wallet__icon2.svg" alt="" />
                          </span>
                          Avax
                        </div>
                      </td>
                      <td>573</td>
                      <td>$2.53</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/wallet__graph2.svg" alt="" />
                        </span>
                      </td>
                      <td>
                        <span className="roi green__text">2%</span>
                      </td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/wallet__icon3.svg" alt="" />
                          </span>
                          ETH
                        </div>
                      </td>
                      <td>573</td>
                      <td>$2.53</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/wallet__graph3.svg" alt="" />
                        </span>
                      </td>
                      <td>
                        <span className="roi green__text">2%</span>
                      </td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/wallet__icon4.svg" alt="" />
                          </span>
                          BSC
                        </div>
                      </td>
                      <td>573</td>
                      <td>$2.53</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/wallet__graph4.svg" alt="" />
                        </span>
                      </td>
                      <td>
                        <span className="roi green__text">2%</span>
                      </td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/wallet__icon5.svg" alt="" />
                          </span>
                          MATIC
                        </div>
                      </td>
                      <td>573</td>
                      <td>$2.53</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/wallet__graph5.svg" alt="" />
                        </span>
                      </td>
                      <td>
                        <span className="roi green__text">2%</span>
                      </td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="asset__td">
                          <span className="asset__icon">
                            <img className="img-fluid" src="img/wallet__icon6.svg" alt="" />
                          </span>
                          ONE
                        </div>
                      </td>
                      <td>573</td>
                      <td>$2.53</td>
                      <td>
                        <span className="asset__graph">
                          <img className="img-fluid" src="img/wallet__graph6.svg" alt="" />
                        </span>
                      </td>
                      <td>
                        <span className="roi green__text">2%</span>
                      </td>
                      <td>$250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          <footer className="footer">
            <p>© 2023 Aleph Finance</p>
          </footer>
        </>
      )}
    </Page>
  );
}
