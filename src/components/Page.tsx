import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} `}</title>
      {meta}
    </Helmet>

    {/* <Box ref={ref} {...other}> */}
    <div className="page__heading">
      <h2>{title}</h2>
    </div>
    {children}
    {/* </Box> */}
  </>
));

export default Page;
