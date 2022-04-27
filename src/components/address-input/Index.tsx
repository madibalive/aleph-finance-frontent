import { ChangeEvent, Fragment, useCallback, useEffect, useState } from 'react';
import { FieldArray, Form, useFormik, getIn, FormikProvider, Field } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  TextField,
  InputBase,
  Backdrop,
  ButtonUnstyled,
} from '@mui/material';
import { RootState, useDispatch, useSelector } from '../../redux/store';
import { AddressSetAll } from '../../redux/slices/address';
import { uuidv4 } from 'src/utils/generateId';
import useResponsive from 'src/hooks/useResponsive';

const validationSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      address: Yup.string().required('address is required'),
    })
  ),
});

export default function MultipleAddressInput({ open, onClose }: any) {
  const { entities } = useSelector((state: RootState) => state.addresess);
  const dispatch = useDispatch();
  const initialValues =
    Object.values(entities).length > 0
      ? Object.values(entities)
      : [
          {
            id: uuidv4(),
            name: '',
          },
        ];

  const formik = useFormik({
    initialValues: {
      addresses: initialValues,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        setSubmitting(false);
        if (values.addresses.length > 0) {
          dispatch(AddressSetAll(values.addresses));
        } else dispatch(AddressSetAll([]));
        onClose();
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  const { errors, values, touched, handleSubmit, setFieldValue, getFieldProps, handleChange } =
    formik;

  const handleOnClose = () => {
    formik.submitForm();
  };

  useEffect(() => {
    if (open) {
      formik.setValues({
        addresses: initialValues,
      });
      formik.setTouched({
        addresses: true,
      });
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      fullWidth={true}
      onClose={handleOnClose}
      BackdropProps={{
        style: {
          background: 'rgba(30, 30, 30, 0.8)',
        },
      }}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
      sx={{}}
    >
      <Box
        sx={{
          mt: 2,
          mr: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div id="dialog-content" className="manage__wallet--popup">
          <h3>Change Wallet Address</h3>
          <FormikProvider value={formik}>
            <Form autoComplete="off">
              <FieldArray name="addresses">
                {({ push, remove }) => (
                  <Fragment>
                    {values.addresses.map((item: any, index: any) => {
                      const address = `item[${index}].address`;

                      return (
                        <div key={index} className="manage__wallet--form">
                          <InputBase
                            className="manage__wallet--input"
                            fullWidth
                            // size="small"
                            placeholder="Address"
                            {...getFieldProps(`addresses[${index}].address`)}
                            // error={Boolean(getIn(touched, address) && getIn(errors, address))}
                            // helperText={getIn(touched, address) && getIn(errors, address)}
                          />
                          <Box
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => remove(index)}
                            className="manage__wallet--delete"
                          />
                        </div>
                      );
                    })}

                    <Box
                      onClick={() =>
                        push({
                          id: uuidv4(),
                          name: '',
                        })
                      }
                      sx={{
                        cursor: 'pointer',
                      }}
                      className="add__address--link"
                    >
                      Add
                    </Box>
                  </Fragment>
                )}
              </FieldArray>

              <Box>
                <ButtonUnstyled className="primary__btn" onClick={() => handleSubmit()}>
                  Submit
                </ButtonUnstyled>
              </Box>
            </Form>
          </FormikProvider>
          <button className="carousel__button is-close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 20L4 4m16 0L4 20"></path>
            </svg>
          </button>
        </div>
      </Box>
    </Dialog>
  );
}
