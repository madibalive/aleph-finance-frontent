import { FieldArray, Form, useFormik, getIn, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { Box, IconButton, Stack, Backdrop } from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Close, Delete } from '@mui/icons-material';

export default function BuyNodeDailog({ open, onClose }: any) {
  const handleOnClose = () => {
    onClose();
  };
  return (
    <Backdrop
      sx={{
        color: '#fff',
        background: 'rgba(30, 30, 30, 0.8) !important',
        zIndex: (theme) => theme.zIndex.drawer + 1999,
      }}
      open={open}
      onClick={handleOnClose}
    >
      <div id="dialog-content" className="manage__wallet--popup">
        <h3>Change Wallet Address</h3>
        <div className="manage__wallet--form">
          <input type="text" placeholder="Address" className="manage__wallet--input" />
          <input type="submit" className="manage__wallet--delete" value="" />
        </div>
        <a href="#" className="add__address--link">
          Add
        </a>
        <input className="primary__btn" type="submit" value="Submit" />

        <button className="carousel__button is-close" onClick={handleOnClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 20L4 4m16 0L4 20"></path>
          </svg>
        </button>
      </div>
    </Backdrop>
  );
}
