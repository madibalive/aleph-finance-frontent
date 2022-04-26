// @mui
import { Container, Typography, Box } from '@mui/material';
import { HEADER } from 'src/config';

import { RootState, useSelector } from 'src/redux/store';
import SkeletonLoad from 'src/components/SkeletonLoad';

// components
import Page from '../components/Page';
import NftPortalImageListings from 'src/components/nft-portal-image-listing';
import NftHeadingBlock from 'src/components/nft-heading-block';
import NftItemsList from 'src/components/nft-items-list';

// ----------------------------------------------------------------------

export default function PageProfile() {
  const portfolio = useSelector((state: RootState) => state.portfolio);
  const { isLoading, success, nfts, nft_total, avatar } = portfolio;
  const { entities } = useSelector((state: RootState) => state.addresess);

  return (
    <Page title="NFTs">
      {isLoading && <SkeletonLoad />}
      {success && !isLoading && (
        <>
          <div className="NFT-wrapper">
            <NftPortalImageListings nfts={nfts} />
            <NftHeadingBlock avatar={avatar} addresses={entities} nft_total={nft_total} />
          </div>

          <NftItemsList nfts={nfts} />
        </>
      )}
    </Page>
  );
}
