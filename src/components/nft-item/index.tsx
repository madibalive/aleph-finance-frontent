import { getDisplayValue } from 'src/utils/formatTime';

const NftItem = ({ item, key }: any) => {
  return (
    <div key={key} className="col-xxl-3 col-xl-4 col-sm-6 NFT-item-box">
      <div className="NFT_item">
        <span>
          {item.collection?.img ? (
            <img
              style={{
                height: '240px',
                objectFit: 'cover',
              }}
              src={item.collection.img}
              className="img-fluid"
              alt=""
            />
          ) : (
            <img src="/logo/logo.svg" className="img-fluid" alt="" />
          )}
        </span>
        <div className="NFT-item-content">
          <div className="number-box">
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
          </div>

          <h6>
            {item.collectionName}
            <span> {item.collectionName}</span>
          </h6>
          {/* <div className="NFT-duration">
            <div>
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
            </div>
            <div className="duration-box">
              <svg
                id="Group_1168"
                data-name="Group 1168"
                xmlns="http://www.w3.org/2000/svg"
                width="20.281"
                height="20.281"
                viewBox="0 0 20.281 20.281"
              >
                <path id="Path_4821" data-name="Path 4821" d="M0,0H20.281V20.281H0Z" fill="none" />
                <path
                  id="Path_4822"
                  data-name="Path 4822"
                  d="M16.038,8.863A5.068,5.068,0,0,0,12.45,7.38v5.07L8.863,16.038a5.073,5.073,0,0,0,7.174-7.174ZM12.45,4a8.45,8.45,0,1,0,8.45,8.45A8.448,8.448,0,0,0,12.45,4Zm0,15.211a6.76,6.76,0,1,1,6.76-6.76,6.758,6.758,0,0,1-6.76,6.76Z"
                  transform="translate(-2.31 -2.31)"
                  fill="#64625e"
                />
              </svg>
              <span>7 days left</span>
            </div>
          </div> */}
          <div className="pricing-box">
            <h5>
              Floor price
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="24" viewBox="0 0 72 24">
                  <text
                    id="Ξ_0.0000"
                    data-name="Ξ 0.0000"
                    transform="translate(0 19)"
                    fill="#fff"
                    font-size="18"
                    font-family="SegoeUI-Bold, Segoe UI"
                    font-weight="700"
                  >
                    Ξ {item.collection.floorPrice.toFixed(4)}
                  </text>
                </svg>
              </span>
            </h5>
            <h5>
              Est Value
              <span>$ {getDisplayValue(item.balanceUSD)}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItem;
