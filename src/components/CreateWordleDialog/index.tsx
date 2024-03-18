import React from 'react';

interface IProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

export default function CreateWordle({
  open,
  onClose,
}: React.PropsWithChildren<IProps>) {
  return <></>;
}
