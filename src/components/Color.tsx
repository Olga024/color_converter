import * as React from 'react';
import { TextField } from '@mui/material';

interface ColorInputProps {
  value: string,
  onChange: (value: string) => void,
}

export const Color = ({ value, onChange }: ColorInputProps) => (
  <TextField
    label="Цвет в формате HEX"
    variant="outlined"
    fullWidth
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
)