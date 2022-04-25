// @mui
import { Container, Typography, Box, Avatar, Link, Stack, Grid } from '@mui/material';
// hooks
import { HEADER } from 'src/config';
import { RootState, useSelector } from 'src/redux/store';
import SkeletonLoad from 'src/components/SkeletonLoad';
import { getDisplayValue } from 'src/utils/formatTime';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageNft() {
  const portfolio = useSelector((state: RootState) => state.portfolio);
  const { isLoading, success, nfts, nft_total, avatar } = portfolio;
  const { entities } = useSelector((state: RootState) => state.addresess);

  return (
    <Page title="NFT">
      <Container>
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: (theme) => theme.zIndex.appBar + 3,
            top: `-${HEADER.DASHBOARD_DESKTOP_HEIGHT}px`,
          }}
        >
          <Typography variant="h2">NFT</Typography>
        </Box>

        {isLoading && <SkeletonLoad />}
        {success && !isLoading && (
          <>
            <Box className="NFT-wrapper">
              <Box className="portal-img-listing">
                <ul>
                  {nfts.map((item: any, index: any) => (
                    <li key={index}>
                      <img
                        src={item.collection.imgProfile}
                        style={{
                          borderRadius: 4,
                        }}
                        className="img-fluid"
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </Box>

              <Box className="NFT-heading-block">
                <Grid
                  container
                  spacing={1}
                  sx={{
                    md: {
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    sm: {
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    xs: {
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {/* <Box className="col-xl-6"> */}
                    <Stack
                      direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }}
                      className="client-img-block"
                      sx={{
                        width: '100%',
                        md: {
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        sm: {
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        xs: {
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      }}
                    >
                      <span>
                        <Avatar
                          sx={{
                            width: 149,
                            height: 149,
                          }}
                          src={avatar}
                          alt="Rayan Moran"
                        />
                        {/* <img src={avatar} className="img-fluid" alt="" /> */}
                      </span>
                      <Box className="client-content">
                        <h3>Adam.eth</h3>
                        {Object.values(entities).map((item: any, index: any) => (
                          <a key={index} href="">
                            <span className="copy-text">
                              {item.address.substring(0, 15)}...
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18.736"
                                height="21.694"
                                viewBox="0 0 18.736 21.694"
                              >
                                <path
                                  id="Path_4813"
                                  data-name="Path 4813"
                                  d="M17.806,2H5.972A1.972,1.972,0,0,0,4,3.972V17.778H5.972V3.972H17.806Zm2.958,3.944H9.917A1.972,1.972,0,0,0,7.944,7.917V21.722a1.972,1.972,0,0,0,1.972,1.972H20.764a1.972,1.972,0,0,0,1.972-1.972V7.917A1.972,1.972,0,0,0,20.764,5.944Zm0,15.778H9.917V7.917H20.764Z"
                                  transform="translate(-4 -2)"
                                  fill="#727272"
                                />
                              </svg>
                            </span>
                          </a>
                        ))}
                      </Box>
                    </Stack>

                    <h6>
                      Active Since <span>October 2021</span>{' '}
                    </h6>
                    <Box className="followers">
                      <h5>
                        Followers<span> 2.35k</span>
                      </h5>
                      <h5>
                        Following<span> 369k</span>
                      </h5>
                      <a href="" className="commen-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Path_4820"
                            data-name="Path 4820"
                            d="M18.15,3.7H15.6V2.85A.85.85,0,0,0,14.75,2H6.25a.85.85,0,0,0-.85.85V3.7H2.85A.85.85,0,0,0,2,4.55V7.1a3.4,3.4,0,0,0,3.4,3.4H6.709A5.1,5.1,0,0,0,9.65,12.124V13.9H8.8a2.55,2.55,0,0,0-2.55,2.55v1.7A.85.85,0,0,0,7.1,19h6.8a.85.85,0,0,0,.85-.85v-1.7A2.55,2.55,0,0,0,12.2,13.9h-.85V12.124A5.1,5.1,0,0,0,14.291,10.5H15.6A3.4,3.4,0,0,0,19,7.1V4.55A.85.85,0,0,0,18.15,3.7ZM5.4,8.8A1.7,1.7,0,0,1,3.7,7.1V5.4H5.4V7.1a5.1,5.1,0,0,0,.3,1.7Zm6.8,6.8a.85.85,0,0,1,.85.85v.85H7.95v-.85a.85.85,0,0,1,.85-.85Zm1.7-8.5a3.4,3.4,0,1,1-6.8,0V3.7h6.8Zm3.4,0a1.7,1.7,0,0,1-1.7,1.7h-.3a5.1,5.1,0,0,0,.3-1.7V5.4h1.7Z"
                            transform="translate(-2 -2)"
                            fill="#fff"
                          />
                        </svg>
                        Unranked
                      </a>
                    </Box>
                    {/* </Box> */}
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {/* <Box className="col-xl-6"> */}
                    <Box
                      className="header-block-right"
                      sx={{
                        md: {
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        sm: {
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                        xs: {
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      }}
                    >
                      <Link href="" className="commen-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.038"
                          height="19.8"
                          viewBox="0 0 17.038 19.8"
                        >
                          <g id="_icons" transform="translate(-3.962 -2.2)">
                            <path
                              id="Path_4814"
                              data-name="Path 4814"
                              d="M16.5,6.6a4.5,4.5,0,0,0-9,0,4.5,4.5,0,0,0,9,0Zm-7,0a2.5,2.5,0,0,1,5,0,2.5,2.5,0,0,1-5,0ZM6.6,16.8A3.5,3.5,0,0,1,10,14h4a4.006,4.006,0,0,1,2.3.8.992.992,0,0,0,1.3-1.5A5.876,5.876,0,0,0,14,12H10a5.624,5.624,0,0,0-5.4,4.3l-.5,1.9a2.951,2.951,0,0,0,.5,2.7A3.043,3.043,0,0,0,7,22h6.9a1,1,0,1,0,0-2H7a.72.72,0,0,1-.7-.4.806.806,0,0,1-.3-.9Z"
                              fill="#fff"
                            />
                            <path
                              id="Path_4815"
                              data-name="Path 4815"
                              d="M18,22a.945.945,0,0,0,1-1V20h1a1,1,0,0,0,0-2H19V17a1,1,0,0,0-2,0v1H16a1,1,0,0,0,0,2h1v1A.945.945,0,0,0,18,22Z"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                        Follow
                      </Link>
                      <a href="" className="commen-btn round-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18.413"
                          height="17.583"
                          viewBox="0 0 18.413 17.583"
                        >
                          <path
                            id="Path_4816"
                            data-name="Path 4816"
                            d="M20.389,9.087a.919.919,0,0,0-.791-.616l-5.232-.763L12.022,2.955a.919.919,0,0,0-1.655,0L8.023,7.7l-5.232.772a.906.906,0,0,0-.515,1.545l3.8,3.678-.919,5.222a.919.919,0,0,0,1.333.984l4.707-2.455,4.689,2.464a.855.855,0,0,0,.423.11.924.924,0,0,0,.91-1.094L16.3,13.7l3.8-3.678A.919.919,0,0,0,20.389,9.087Zm-5.654,3.678a.919.919,0,0,0-.267.818l.662,3.852L11.673,15.6a.919.919,0,0,0-.864,0L7.352,17.435l.662-3.852a.919.919,0,0,0-.267-.818L4.989,10.007l3.871-.561a.919.919,0,0,0,.7-.506l1.637-3.5,1.729,3.512a.919.919,0,0,0,.7.506l3.871.561Z"
                            transform="translate(-2.006 -2.436)"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a href="" className="commen-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18.6"
                          height="17.261"
                          viewBox="0 0 18.6 17.261"
                        >
                          <path
                            id="Path_4817"
                            data-name="Path 4817"
                            d="M18.414,12.07,1.881,4.566a.976.976,0,0,0-1.092.279,1.2,1.2,0,0,0-.215,1.2l2.6,7.087-2.6,7.087a1.2,1.2,0,0,0,.215,1.2,1,1,0,0,0,.745.345.951.951,0,0,0,.347-.066l16.533-7.5a1.162,1.162,0,0,0,0-2.12ZM3.344,18.736l1.645-4.479H8.532a1.13,1.13,0,0,0,0-2.251H4.988L3.344,7.525l11.65,5.605Z"
                            transform="translate(-0.5 -4.5)"
                            fill="#fff"
                          />
                        </svg>
                        Send
                      </a>
                      <a href="" className="commen-btn round-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19.624"
                          height="18.583"
                          viewBox="0 0 19.624 18.583"
                        >
                          <g
                            id="Group_1166"
                            data-name="Group 1166"
                            transform="translate(-9.15 -9.92)"
                          >
                            <path
                              id="Path_4818"
                              data-name="Path 4818"
                              d="M24.18,9.93Z"
                              transform="translate(-5.112 -0.003)"
                              fill="#fff"
                            />
                            <path
                              id="Path_4819"
                              data-name="Path 4819"
                              d="M28.6,18.426l-9.239-8.381a.5.5,0,0,0-.317-.125.475.475,0,0,0-.475.475V15.18A9.952,9.952,0,0,0,9.15,25.151a8.5,8.5,0,0,0,.733,3.194l.066.158c.937-3.4,3.742-5.418,7.259-6.058h.125a9.332,9.332,0,0,1,1.32-.125v4.864a.5.5,0,0,0,.119.317h0a.462.462,0,0,0,.66,0l9.239-8.414.04-.053a.475.475,0,0,0-.112-.607Zm-8.275,5.893V20.531l-1.775.046a10.935,10.935,0,0,0-1.531.152h-.139A11.654,11.654,0,0,0,11.031,23.5a8.209,8.209,0,0,1,7.635-6.6l1.65-.079v-3.55l6.091,5.543Z"
                              transform="translate(0)"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                      </a>

                      <Box
                        className="NFT-networth"
                        sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="78.669"
                          height="61.158"
                          viewBox="0 0 78.669 61.158"
                        >
                          <g
                            id="Group_603"
                            data-name="Group 603"
                            transform="translate(-4.971 -10.999)"
                          >
                            <path
                              id="Path_2428"
                              data-name="Path 2428"
                              d="M56.594,39.3a23.3,23.3,0,1,0-23.3,23.3A23.3,23.3,0,0,0,56.594,39.3ZM33.3,59.682A20.385,20.385,0,1,1,53.682,39.3,20.385,20.385,0,0,1,33.3,59.682Z"
                              transform="translate(2.293 2.281)"
                              fill="#4fccae"
                            />
                            <circle
                              id="Ellipse_52"
                              data-name="Ellipse 52"
                              cx="1.456"
                              cy="1.456"
                              r="1.456"
                              transform="translate(45.783 48.858)"
                              fill="#4fccae"
                            />
                            <path
                              id="Path_2430"
                              data-name="Path 2430"
                              d="M83.495,38.52h0a30.1,30.1,0,0,0-2.405-9.173c-.371-.853-.8-1.689-1.249-2.513-.4-.728-.82-1.441-1.281-2.139q-.494-.746-1.034-1.468a30.519,30.519,0,0,0-33.2-10.939,30.577,30.577,0,1,0,0,58.58,30.518,30.518,0,0,0,33.2-10.944c.421-.562.814-1.139,1.193-1.724a30.009,30.009,0,0,0,2.368-4.391h0a30.07,30.07,0,0,0,2.41-9.173,29.311,29.311,0,0,0,.146-3.058c0-.543-.013-1.064-.038-1.573S83.538,39,83.495,38.52Zm-4.732-7.135a27.022,27.022,0,0,1,1.6,5.824H65.833c-.071-.5-.146-.993-.242-1.485-.052-.274-.118-.543-.178-.815q-.223-1-.511-1.98c-.073-.245-.146-.489-.22-.728-.087-.271-.167-.543-.262-.812Zm-3.157-5.824c.082.116.165.232.246.349q.259.379.505.762c.146.215.274.437.4.649q.229.381.446.769c.071.127.146.255.208.383H63.228c-.033-.07-.077-.134-.111-.2q-.291-.6-.609-1.178c-.029-.055-.06-.111-.09-.166-.22-.4-.447-.8-.686-1.187-.035-.058-.063-.121-.1-.179ZM53.063,13.913a27.407,27.407,0,0,1,20.172,8.736H59.574c-.092-.116-.183-.233-.277-.348-.061-.076-.119-.153-.182-.229-.6-.728-1.239-1.425-1.9-2.092l-.028-.028a30.188,30.188,0,0,0-7.02-5.242l-.033-.019c-.316-.169-.628-.345-.949-.5A27.894,27.894,0,0,1,53.063,13.913ZM48.581,65.989q-.935.5-1.913.922c-.146.067-.3.146-.457.205a27.665,27.665,0,1,1,0-51.076c.156.064.306.138.459.205.649.291,1.289.582,1.91.922.125.066.248.134.371.2.7.386,1.377.8,2.038,1.238l.087.057A27.823,27.823,0,0,1,55.116,22c.044.042.083.089.127.132.514.52,1,1.063,1.474,1.622.17.2.335.408.5.614.428.537.846,1.082,1.233,1.65.033.048.068.093.1.146q.711,1.053,1.321,2.171l.076.137a27.518,27.518,0,0,1,1.974,4.642c.066.208.127.416.188.625.178.6.331,1.2.467,1.811.055.248.114.494.162.741q.211,1.088.338,2.2c.012.1.032.207.042.312q.138,1.383.138,2.775a26.73,26.73,0,0,1-.146,2.787c-.009.09-.028.178-.036.268-.084.759-.2,1.507-.345,2.247-.047.24-.1.479-.157.719-.138.619-.291,1.232-.473,1.835-.06.2-.118.4-.182.606a27.484,27.484,0,0,1-1.973,4.643l-.076.146Q59.256,55.943,58.548,57c-.033.05-.07.1-.1.146-.389.568-.808,1.114-1.236,1.651-.162.205-.325.409-.492.607-.476.565-.97,1.115-1.49,1.64-.038.038-.071.077-.109.115a27.911,27.911,0,0,1-4.046,3.339l-.077.051c-.661.437-1.345.856-2.038,1.243C48.827,65.855,48.705,65.923,48.581,65.989Zm4.482,3.254a27.91,27.91,0,0,1-3.879-.269c.322-.159.633-.335.949-.505l.033-.017A30.206,30.206,0,0,0,57.2,63.191h0c.668-.673,1.31-1.375,1.919-2.111.055-.067.106-.137.162-.2.1-.121.194-.243.291-.365H73.231A27.406,27.406,0,0,1,53.063,69.243ZM77.21,55.059c-.146.261-.291.521-.451.778q-.194.326-.4.644-.246.387-.51.764c-.08.118-.163.233-.245.349H61.635c.036-.058.063-.122.1-.181q.354-.582.681-1.181l.1-.175q.315-.582.6-1.165c.033-.07.079-.135.112-.205H77.416C77.349,54.808,77.28,54.934,77.21,55.059Zm1.552-3.289H64.42c.1-.271.176-.546.264-.82.077-.236.146-.475.215-.713q.291-.994.517-2c.058-.265.122-.529.173-.8.1-.5.172-.994.243-1.494H80.368A27.083,27.083,0,0,1,78.762,51.77Zm1.929-8.749v.013H66.131c.022-.472.032-.955.032-1.456s-.01-.984-.032-1.456H80.692v.013c.025.464.036.944.036,1.443S80.716,42.556,80.692,43.021Z"
                              transform="translate(0 0)"
                              fill="#4fccae"
                            />
                          </g>
                        </svg>

                        <h5>
                          NFT Net Worth
                          <span>$ {getDisplayValue(nft_total)}</span>
                        </h5>
                      </Box>
                    </Box>
                    {/* </Box> */}
                  </Grid>
                </Grid>
                {/* <Stack
                  className="row"
                  justifyContent={{ xs: 'center', sm: 'center', md: 'center' }}
                  alignItems={{ md: 'center', lg: 'flex-start' }}
                  direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                ></Stack> */}
              </Box>

              <Box className="NFT-item-listing">
                <Box className="header-sorting">
                  <h6>
                    <b>{nfts.length}</b> items
                  </h6>
                  <form action="">
                    <Box className="form-flex">
                      <select name="" id="" className="wide">
                        <option value="">All Items</option>
                      </select>
                      <select name="" id="" className="wide">
                        <option value="">Sort By</option>
                      </select>
                    </Box>
                  </form>
                </Box>
                <Grid
                  container
                  spacing={1}
                  // direction="row"
                  // justifyContent="center"
                  // alignItems="center"
                  // alignContent="center"
                  // wrap="wrap"
                >
                  {/* <Box className="row"> */}
                  {nfts.map((item: any, index: any) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      key={index}
                      spacing={2}
                      className="col-xxl-3 col-xl-4 col-sm-6 NFT-item-box"
                    >
                      {/* <Box > */}
                      <Box className="NFT_item">
                        <span>
                          <img
                            style={{
                              borderTopRightRadius: 8,
                              borderTopLeftRadius: 8,
                            }}
                            src={item.collection.imgProfile}
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                        <Box className="NFT-item-content">
                          <Box className="number-box">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.6"
                              height="16.6"
                              viewBox="0 0 16.6 16.6"
                            >
                              <path
                                id="Path_4823"
                                data-name="Path 4823"
                                d="M13.62,6.15H5.32a.784.784,0,0,0-.83.83V9.055h6.225a.784.784,0,0,1,.83.83V16.11H13.62a.784.784,0,0,0,.83-.83V6.98A.784.784,0,0,0,13.62,6.15ZM9.47,10.3H2.83a.784.784,0,0,0-.83.83v6.64a.784.784,0,0,0,.83.83H9.47a.784.784,0,0,0,.83-.83V11.13A.784.784,0,0,0,9.47,10.3ZM17.77,2H7.81a.784.784,0,0,0-.83.83V4.905h7.885a.784.784,0,0,1,.83.83V13.62H17.77a.784.784,0,0,0,.83-.83V2.83A.784.784,0,0,0,17.77,2Z"
                                transform="translate(-2 -2)"
                                fill="#fff"
                              />
                            </svg>
                            <span>{item.assets.length}</span>
                          </Box>
                          <h6>
                            {item.collectionName}
                            <span> {item.collectionName} #185965</span>{' '}
                          </h6>
                          <Box className="NFT-duration">
                            <Box>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12.29"
                                height="19.948"
                                viewBox="0 0 12.29 19.948"
                              >
                                <g id="Page-1" transform="translate(-0.5 -0.8)">
                                  <g id="crypto" transform="translate(0.5 0.8)">
                                    <g id="Etherium" transform="translate(0 0)">
                                      <g id="Group" transform="translate(0 0)">
                                        <path
                                          id="Shape"
                                          d="M6.677.8V8.143a.068.068,0,0,1-.063.063c-.221.095-.41.189-.63.284-.284.126-.6.252-.882.41l-1.04.473L3.21,9.75l-1.04.473c-.284.126-.567.252-.882.41-.221.095-.473.221-.693.315-.032,0-.032.032-.063,0H.5c.095-.158.189-.284.284-.441.5-.851,1.04-1.7,1.544-2.553.536-.914,1.1-1.828,1.639-2.742.5-.851,1.008-1.7,1.513-2.521.378-.63.756-1.229,1.1-1.859C6.645.832,6.645.8,6.677.8Z"
                                          transform="translate(-0.5 -0.8)"
                                          fill="#cecece"
                                        />
                                        <path
                                          id="Shape-2"
                                          data-name="Shape"
                                          d="M26.145,26.973c-.473.315-.977.6-1.45.882-1.544.914-3.057,1.8-4.6,2.71-.032,0-.032.032-.063.032A.031.031,0,0,1,20,30.566V24.232c0-.032.032-.032.063-.032.126.063.252.126.41.189.378.189.788.347,1.166.536.347.158.662.315,1.008.441.347.158.662.315,1.008.473.284.126.6.252.882.41.284.126.6.252.882.41.221.095.441.221.693.315,0-.032,0,0,.032,0Z"
                                          transform="translate(-13.855 -16.826)"
                                          fill="#cecece"
                                        />
                                        <path
                                          id="Shape-3"
                                          data-name="Shape"
                                          d="M6.745,45.4h0c-.032,0-.032,0-.063-.032-.63-.882-1.229-1.733-1.859-2.616L2.932,40.109c-.6-.851-1.229-1.7-1.828-2.584l-.473-.662c0-.032-.032-.032-.032-.063.032,0,.032.032.063.032.851.5,1.733,1.008,2.584,1.513.977.6,1.985,1.166,2.962,1.765.158.095.347.189.5.284.032,0,.032.032.032.063Z"
                                          transform="translate(-0.568 -25.455)"
                                          fill="#cecece"
                                        />
                                        <path
                                          id="Shape-4"
                                          data-name="Shape"
                                          d="M.6,33Z"
                                          transform="translate(-0.568 -22.853)"
                                          fill="#cecece"
                                        />
                                        <path
                                          id="Shape-5"
                                          data-name="Shape"
                                          d="M.7,26.936h0c.315-.158.63-.284.945-.441l1.229-.567c.315-.158.63-.284.945-.441.441-.221.914-.41,1.355-.63.315-.126.63-.284.945-.41a6.3,6.3,0,0,0,.662-.315c.032,0,.032-.032.063-.032v6.429c-.032.032-.032,0-.063,0a1.759,1.759,0,0,1-.252-.158l-5.767-3.4A.1.1,0,0,0,.7,26.936Z"
                                          transform="translate(-0.637 -16.757)"
                                          fill="#cecece"
                                        />
                                        <path
                                          id="Shape-6"
                                          data-name="Shape"
                                          d="M26.182,36.8c0,.032,0,.032-.032.063-1.828,2.584-3.655,5.137-5.483,7.721-.189.284-.378.536-.567.819V40.392c.41-.252.819-.5,1.229-.725l4.821-2.836A.031.031,0,0,1,26.182,36.8Z"
                                          transform="translate(-13.923 -25.455)"
                                          fill="#cecece"
                                        />
                                        <path
                                          id="Shape-7"
                                          data-name="Shape"
                                          d="M20.1,8.243V.9l6.05,10.021c.032.032.063.063.063.095-.126-.063-.252-.126-.41-.189s-.315-.158-.473-.221a3.269,3.269,0,0,0-.315-.126c-.158-.063-.347-.158-.5-.221-.095-.032-.189-.095-.284-.126l-.662-.284c-.126-.063-.221-.095-.347-.158-.158-.063-.315-.158-.473-.221-.095-.032-.189-.095-.284-.126L21.8,9.062c-.126-.063-.221-.095-.347-.158-.158-.063-.315-.158-.473-.221-.095-.063-.221-.095-.315-.158Z"
                                          transform="translate(-13.923 -0.868)"
                                          fill="#cecece"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>{' '}
                              0.05
                            </Box>
                            <Box className="duration-box">
                              <svg
                                id="Group_1168"
                                data-name="Group 1168"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.281"
                                height="20.281"
                                viewBox="0 0 20.281 20.281"
                              >
                                <path
                                  id="Path_4821"
                                  data-name="Path 4821"
                                  d="M0,0H20.281V20.281H0Z"
                                  fill="none"
                                />
                                <path
                                  id="Path_4822"
                                  data-name="Path 4822"
                                  d="M16.038,8.863A5.068,5.068,0,0,0,12.45,7.38v5.07L8.863,16.038a5.073,5.073,0,0,0,7.174-7.174ZM12.45,4a8.45,8.45,0,1,0,8.45,8.45A8.448,8.448,0,0,0,12.45,4Zm0,15.211a6.76,6.76,0,1,1,6.76-6.76,6.758,6.758,0,0,1-6.76,6.76Z"
                                  transform="translate(-2.31 -2.31)"
                                  fill="#64625e"
                                />
                              </svg>
                              <span>7 days left</span>
                            </Box>
                          </Box>
                          <Box className="pricing-box">
                            <h5>
                              Floor price
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="72"
                                  height="24"
                                  viewBox="0 0 72 24"
                                >
                                  <text
                                    id="Ξ_0.0000"
                                    data-name="Ξ 0.0000"
                                    transform="translate(0 19)"
                                    fill="#fff"
                                    font-size="18"
                                    font-family="SegoeUI-Bold, Segoe UI"
                                    font-weight="700"
                                  >
                                    <tspan x="0" y="0">
                                      Ξ {item.collection.floorPrice.toFixed(4)}
                                    </tspan>
                                  </text>
                                </svg>
                              </span>
                            </h5>
                            <h5>
                              Est Value
                              <span>$ {getDisplayValue(item.balanceUSD)}</span>
                            </h5>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </Page>
  );
}
