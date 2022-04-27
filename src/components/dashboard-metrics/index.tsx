import { Box } from '@mui/material';
import { getDisplayValue } from 'src/utils/formatTime';

const DashboardMetrics = ({ networth }: any) => {
  return (
    <div className="tracker__top--block">
      <div className="row">
        <div className="col-xxl-3 col-xl-4">
          <div className="tracker__top--left same">
            <ul className="tracker__top__left--list">
              <li>
                <span className="icon">
                  <img className="img-fluid" src="/img/net__worth--icon.svg" alt="" />
                </span>
                <p>Net worth</p>
                <h3>${getDisplayValue(networth)}</h3>
              </li>
              {/* <li>
                <span className="icon">
                  <img className="img-fluid" src="/img/total__climable--icon.svg" alt="" />
                </span>
                <p>Total Claimable</p>
                <h3>
                  $78,543.23 <span className="rating">3.7%</span>
                </h3>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-xxl-9 col-xl-8">
          <div className="tracker__top--right same">
            <div className="row">
              <div className="col-xxl-3 col-xl-5-col-lg-5">
                <div className="tracker__top__right--box">
                  <div className="rewar__history--box">
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
                  </div>
                  <div className="rewar__history--box">
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
                  </div>
                  <div className="rewar__history--box">
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
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-7-col-lg-7">
                <div className="tracker__top__right--graph">
                  <h3>Rewards History</h3>
                  <img className="img-fluid" src="/img/reward__history--map.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
