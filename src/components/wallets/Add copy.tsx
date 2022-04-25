import {
  Autocomplete,
  TextField,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';

export default function AddWalletsDialog({ currentAddress, open, onClose, track }: any) {
  const [inputValue, setInputValue] = useState(currentAddress);
  const [value, setValue] = useState<any[]>([]);

  const handleOnClose = () => {
    onClose(inputValue);
  };

  return (
    <Dialog open={open} onClose={handleOnClose}>
      <DialogTitle>Add to wallets</DialogTitle>
      <DialogContent
        sx={{
          minWidth: 400,
        }}
      >
        <Autocomplete
          multiple
          freeSolo
          id="tags-standard"
          options={[]}
          value={value}
          inputValue={inputValue}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            const options = newInputValue.split(',');

            if (options.length > 1) {
              setValue(
                value
                  .concat(options)
                  .map((x) => x.trim())
                  .filter((x) => x)
              );
            } else {
              setInputValue(newInputValue);
            }
          }}
          renderInput={(params) => <TextField {...params} placeholder="Use , to separate values" />}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
