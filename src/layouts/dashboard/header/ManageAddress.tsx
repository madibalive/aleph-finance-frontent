import { useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Input, Slide, Button, InputAdornment, Box, ButtonUnstyled } from '@mui/material';
// utils
import { RootState, useDispatch, useSelector } from 'src/redux/store';
import { useDialog } from 'src/hooks/useDialog';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { uuidv4 } from 'src/utils/formatTime';
import { AddressSetAll } from 'src/redux/slices/address';
import { getPortfolio, reset } from 'src/redux/slices/portfolio';
import MultipleAddressInput from 'src/components/address-input/Index';

// ----------------------------------------------------------------------

export default function ManageAddress() {
  const dispatch = useDispatch();
  const [open, handleOpen, handleClose] = useDialog();
  const { entities } = useSelector((state: RootState) => state.addresess);
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query_params = queryString.parse(search);
    if (query_params.address) {
      // decode url params
      // @ts-ignore
      const address = decodeURIComponent(query_params.address);
      // @ts-ignore
      let addressMap: any[] = address.split(',');
      addressMap = addressMap.map((address: string) => {
        return {
          id: uuidv4(),
          address,
          name: '',
        };
      });
      if (addressMap.length > 0) {
        dispatch(AddressSetAll(addressMap));
      }
    }
  }, []);

  useEffect(() => {
    // update addresss
    if (Object.values(entities).length > 0) {
      const addressList = Object.values(entities);
      setSearchParams({ address: addressList.map((address: any) => address.address).join(',') });
      dispatch(getPortfolio(addressList));
    } else {
      dispatch(reset());
      setSearchParams({});
    }
  }, [entities]);

  return (
    <>
      <Box className="manage__wallet--address">
        <ButtonUnstyled onClick={handleOpen} className="primary__btn">
          Manage Wallet Address
        </ButtonUnstyled>
      </Box>
      <MultipleAddressInput open={open} onClose={handleClose} />
    </>
  );
}
