
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
interface Props {
    name: string;
    control: Control<any>; // Puedes poner Control<T> si tienes tipos definidos
    rules?: any;
    error?: FieldError;
    placeholder: string;
}

const InputTimePicker: React.FC<Props> = ({ name, control, placeholder, ...rest }) => {
    return (
        <Controller
            name={name}
            control={control}

            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
               
                return (<Box>
                    <Typography>{placeholder}</Typography>

                    <TimePicker
                        sx={{ width: 200 }}
                        onChange={value=>onChange( dayjs( value))}
                        value={value.$d}
                        slotProps={{

                            textField: {
                                helperText: error?.message,
                                error: !!error,
                            },

                        }}
                    />

                </Box>)
            }

            }
        />
    );
};

const styles: { [key: string]: React.CSSProperties } = {

    errorMessage: {
        color: "#d32f2f"
    }
}

export default InputTimePicker;