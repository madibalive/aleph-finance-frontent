// @mui
import { styled } from '@mui/material/styles';
import { Popover, PopoverProps } from '@mui/material';

// ----------------------------------------------------------------------

type Arrow =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

type ArrowStyleProps = {
  arrow: Arrow;
};

// ----------------------------------------------------------------------

interface Props extends PopoverProps {
  arrow?: Arrow;
  disabledArrow?: boolean;
}

export default function MenuPopover({
  children,
  arrow = 'top-right',
  disabledArrow,
  sx,
  ...other
}: Props) {
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          p: 1,
          width: 200,
          overflow: 'inherit',
          ...sx,
        },
      }}
      {...other}
    >
      {children}
    </Popover>
  );
}
