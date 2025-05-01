
import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

interface Props {
  name: string;
  control: Control<any>; // Puedes poner Control<T> si tienes tipos definidos
  rules?: any;
  error?: FieldError;
  placeholder: string;
}

const InputTextField: React.FC<Props> = ({ name, control,  placeholder, ...rest }) => {

  return (
    <Controller
      name={name}
      control={control}

      defaultValue=""
      render={({ field,fieldState:{error} }) => (
        <TextField

          {...field}
          {...rest}
          error={!!error}
          helperText={error?.message}
          fullWidth
          placeholder={placeholder}
          style={styles.textField}

        />
      )}
    />
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  textField: {
    width: 200,
    fontSize: 4
  }
}
export default InputTextField;