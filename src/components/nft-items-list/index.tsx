import NftItem from '../nft-item';

const NftItemsList = ({ nfts }: any) => {
  return (
    <div className="NFT-item-listing">
      {/* <div className="header-sorting">
        <h6>
          <b>{nfts.length}</b> items
        </h6>
        <form action="">
          <div className="form-flex">
            <select name="" id="" className="wide">
              <option value="">All Items</option>
            </select>
            <select name="" id="" className="wide">
              <option value="">Sort By</option>
            </select>
          </div>
        </form>
      </div> */}
      <div className="row">
        {nfts.map((item: any, index: any) => (
          <NftItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NftItemsList;
