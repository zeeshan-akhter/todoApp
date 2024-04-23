import React from 'react';
import TextField from '@mui/material/TextField';

const FormInputText = (props) => {
  const { id, label, ...rest } = props;
  
  return (
    <TextField
      id={id}
      label={label}
      {...rest}
    />
  );
};

export default FormInputText;
