import * as React from 'react';
import { Box, Container } from '@mui/material';
import './App.css';
import { Color } from './components/Color';
import ResultRGB from './components/ResultRGB';


const hexToRgb = (hex: string): string | null => {
  if (!hex.startsWith('#') || hex.length !== 7) return null;

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const App = () => {
  const [colorHex, setColorHex] = React.useState<string>('');
  const [rgbValue, setRgbValue] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const handleChange = (newValue: string) => {
    setColorHex(newValue);

    if (newValue.length === 7) {
      const convertedRgb = hexToRgb(newValue);

      if (convertedRgb) {
        setRgbValue(convertedRgb);
        setErrorMessage(null);
      } else {
        setRgbValue(null);
        setErrorMessage('Ошибка!');
      }
    } else {
      setRgbValue(null);
      setErrorMessage(null);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ my: 4 }}>
        <Color value={colorHex} onChange={handleChange} />
        <br /><br />
        <ResultRGB rgbValue={rgbValue} errorMessage={errorMessage} />
      </Box>
    </Container >
  );
};

export default App;
