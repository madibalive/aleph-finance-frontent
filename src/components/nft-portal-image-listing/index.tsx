import { take } from 'lodash';

const NftPortalImageListings = ({ nfts }: any) => {
  return (
    <div className="portal-img-listing">
      <ul>
        {take(nfts, 9).map((item: any, index: any) => (
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
