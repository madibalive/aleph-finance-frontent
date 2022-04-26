const NftPortalImageListings = ({ nfts }: any) => {
  return (
    <div className="portal-img-listing">
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
    </div>
  );
};

export default NftPortalImageListings;
