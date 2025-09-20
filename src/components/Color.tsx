import * as React from 'react';
import { TextField } from '@mui/material';

interface ColorInputProps {
  value: string,
  onChange: (value: string) => void,
}

export const Color = ({ value, onChange }: ColorInputProps) => (
  <TextField
    inputProps={{
      style: {
        backgroundColor: 'white',
      }
    }}
    variant="filled"
    fullWidth
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);