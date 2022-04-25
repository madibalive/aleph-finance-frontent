import { ChangeEvent, Fragment, useCallback, useEffect, useState } from 'react';
import { FieldArray, Form, useFormik, getIn, FormikProvider } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Close, Delete } from '@mui/icons-material';
import { RootState, useDispatch, useSelector } from '../../redux/store';
import { AddressSetAll } from '../../redux/slices/address';
import { DeleteIcon } from 'src/icons/Delete';

// generate uuid
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const validationSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      address: Yup.string().required('address is required'),
    })
  ),
});

export default function AddWalletsDialog({ open, onClose }: any) {
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
    <FormikProvider value={formik}>
      <Form autoComplete="off">
        <Dialog
          open={open}
          onClose={handleOnClose}
          sx={{
            // backdropFilter: 'blur(16px) brightness(115%)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* <div id="dialog-content" className="manage__wallet--popup">
            <h3>Change Wallet Address</h3>
            <div className="manage__wallet--form">
              <input type="text" placeholder="Address" className="manage__wallet--input" />
              <input type="submit" className="manage__wallet--delete" value="" />
            </div>
            <a href="#" className="add__address--link">
              Add
            </a>
            <input className="primary__btn" type="submit" value="Submit" />
          </div> */}

          <DialogContent
            // className="manage__wallet--popup"
            sx={{
              minWidth: '587px',
              // width: ' 100%',
              background: '#313131',
              padding: ' 40px 55px 50px 55px',
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <h3>Change Wallet Address</h3>
              <IconButton
                style={{
                  background: '#fff',
                  height: 44,
                  width: 44,
                }}
                aria-label="close"
                onClick={onClose}
              >
                <Close />
              </IconButton>
            </Stack>

            <Stack spacing={2}>
              <FieldArray name="addresses">
                {({ push, remove }) => (
                  <div>
                    {values.addresses.map((item: any, index: any) => {
                      const address = `item[${index}].address`;

                      return (
                        <Stack
                          // className="manage__wallet--form"
                          sx={{
                            py: 1,
                          }}
                          key={index}
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <input
                            className="manage__wallet--input"
                            // fullWidth
                            // size="small"
                            placeholder="Address"
                            {...getFieldProps(`addresses[${index}].address`)}
                            // error={Boolean(getIn(touched, address) && getIn(errors, address))}
                            // helperText={getIn(touched, address) && getIn(errors, address)}
                          />
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: '#101010',
                              borderRadius: 1,
                              display: 'flex',
                              ml: 1,
                              height: 56,
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: 60,
                            }}
                          >
                            <IconButton
                              className="manage__wallet--delete"
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Stack>
                      );
                    })}

                    <Button
                      startIcon={
                        <Box
                          sx={{
                            alignItems: 'center',
                            backgroundImage: `url(/img/add__address.svg)`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            borderRadius: 1,
                            display: 'flex',
                            height: 38,
                            justifyContent: 'center',
                            overflow: 'hidden',
                            width: 38,
                          }}
                        />
                      }
                      sx={{
                        color: 'white',
                      }}
                      size="small"
                      type="button"
                      variant="text"
                      className="add__address--link"
                      onClick={() =>
                        push({
                          id: uuidv4(),
                          name: '',
                        })
                      }
                    >
                      Add
                    </Button>
                  </div>
                )}
              </FieldArray>
            </Stack>

            <Box sx={{ mt: 2 }}>
              <Button
                className="primary__btn"
                size="large"
                fullWidth={true}
                onClick={() => handleSubmit()}
                sx={{
                  color: 'white',
                }}
                // variant="contained"
              >
                Submit
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Form>
    </FormikProvider>
  );
}
