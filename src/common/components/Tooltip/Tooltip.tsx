import {Tooltip as RNTooltip, TooltipProps} from '@rneui/themed';
import React = require('react');

type Props = TooltipProps & {
  visible?: boolean;
};

export const Tooltip: React.FC<Props> = props => {
  const [open, setOpen] = React.useState(true);
  return (
    <RNTooltip
      visible={open}
      //   withOverlay={false}
      overlayColor={'red'}
      withOverlay={false}
      onOpen={() => {
        setOpen(true);
      }}
      height={50}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    />
  );
};
