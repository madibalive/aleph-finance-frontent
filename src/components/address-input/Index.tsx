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
  Typography,
  FormHelperText,
  DialogContent,
  DialogTitle,
  dialogClasses,
  Backdrop,
  ButtonUnstyled,
  Input,
  InputBase,
} from '@mui/material';
import { Close, Delete } from '@mui/icons-material';
import { RootState, useDispatch, useSelector } from '../../redux/store';
import { AddressSetAll } from '../../redux/slices/address';
import { uuidv4 } from 'src/utils/generateId';
import { styled } from '@mui/material/styles';
import useResponsive from 'src/hooks/useResponsive';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  // [`&.${dialogClasses.paper}`]: {
  //   backgroundColor: 'transparent !important',
  //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0) !important',
  // },
  // [`&.${dialogClasses.root}`]: {
  //   backgroundColor: 'transparent !important',
  //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0) !important',
  // },
}));

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

  const isMobile = useResponsive('down', 'sm');

  return (
    <Backdrop
      sx={{
        color: '#fff',
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        zIndex: (theme) => theme.zIndex.drawer + 1001,
      }}
      open={open}
      // onClick={onClose}
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
    </Backdrop>

    // <FormikProvider value={formik}>
    //   <Form autoComplete="off">
    //     <StyledDialog
    //       maxWidth="lg"
    //       open={open}
    //       onClose={handleOnClose}
    //       PaperProps={{
    //         style: {
    //           backgroundColor: 'transparent',
    //           boxShadow: 'none',
    //         },
    //       }}
    //       sx={
    //         {
    //           // position: 'relative',
    //         }
    //       }
    //     >
    //       <DialogContent
    //         // className="manage__wallet--popup"
    //         sx={
    //           {
    //             // backgroundColor: 'blue',
    //             // width: '100%',
    //             // minWid/th: '587px',
    //             // position: 'relative',
    //           }
    //         }
    //       >
    //         <Box
    //           sx={{
    //             borderRadius: '8px',
    //             position: 'relative',
    //             padding: ' 50px 65px 50px 65px',
    //             width: '100%',
    //             backgroundColor: 'rgb(255 255 255 / 10%)',
    //             backdropFilter: 'blur(16px) brightness(115%)',
    //             ...(isMobile && {
    //               px: 2,
    //             }),
    //           }}
    //         >
    //           <IconButton
    //             style={{
    //               position: 'absolute',
    //               background: '#fff',
    //               height: 44,
    //               width: 44,
    //               top: -15,
    //               right: -15,
    //               ...(isMobile && {
    //                 top: 10,
    //                 right: 10,
    //               }),
    //             }}
    //             aria-label="close"
    //             onClick={onClose}
    //           >
    //             <Close />
    //           </IconButton>

    //           <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
    //             <h3>Change Wallet Address</h3>
    //           </Stack>

    //           <Stack spacing={2}>
    //             <FieldArray name="addresses">
    //               {({ push, remove }) => (
    //                 <div>
    //                   {values.addresses.map((item: any, index: any) => {
    //                     const address = `item[${index}].address`;

    //                     return (
    //                       <Stack
    //                         // className="manage__wallet--form"
    //                         sx={{
    //                           py: 1,
    //                         }}
    //                         key={index}
    //                         direction="row"
    //                         justifyContent="space-between"
    //                         alignItems="center"
    //                       >
    //                         <TextField
    //                           className="manage__wallet--input"
    //                           fullWidth
    //                           // size="small"
    //                           placeholder="Address"
    //                           {...getFieldProps(`addresses[${index}].address`)}
    //                           // error={Boolean(getIn(touched, address) && getIn(errors, address))}
    //                           // helperText={getIn(touched, address) && getIn(errors, address)}
    //                         />
    //                         <Box
    //                           sx={{
    //                             alignItems: 'center',
    //                             backgroundColor: '#101010',
    //                             borderRadius: 1,
    //                             display: 'flex',
    //                             ml: 1,
    //                             height: 56,
    //                             justifyContent: 'center',
    //                             overflow: 'hidden',
    //                             width: 60,
    //                           }}
    //                         >
    //                           <IconButton
    //                             className="manage__wallet--delete"
    //                             onClick={() => remove(index)}
    //                           >
    //                             <Delete />
    //                           </IconButton>
    //                         </Box>
    //                       </Stack>
    //                     );
    //                   })}

    //                   <Button
    //                     startIcon={
    //                       <Box
    //                         sx={{
    //                           alignItems: 'center',
    //                           backgroundImage: `url(/img/add__address.svg)`,
    //                           backgroundPosition: 'center',
    //                           backgroundSize: 'cover',
    //                           borderRadius: 1,
    //                           display: 'flex',
    //                           height: 38,
    //                           justifyContent: 'center',
    //                           overflow: 'hidden',
    //                           width: 38,
    //                         }}
    //                       />
    //                     }
    //                     sx={{
    //                       color: 'white',
    //                     }}
    //                     size="small"
    //                     type="button"
    //                     variant="text"
    //                     className="add__address--link"
    //                     onClick={() =>
    //                       push({
    //                         id: uuidv4(),
    //                         name: '',
    //                       })
    //                     }
    //                   >
    //                     Add
    //                   </Button>
    //                 </div>
    //               )}
    //             </FieldArray>
    //           </Stack>

    //           <Box sx={{ mt: 2 }}>
    //             <Button
    //               className="primary__btn"
    //               size="large"
    //               fullWidth={true}
    //               onClick={() => handleSubmit()}
    //               sx={{
    //                 color: 'white',
    //               }}
    //               // variant="contained"
    //             >
    //               Submit
    //             </Button>
    //           </Box>
    //         </Box>
    //       </DialogContent>
    //     </StyledDialog>
    //   </Form>
    // </FormikProvider>
  );
}
