import * as React from 'react';
import { Box, Container } from '@mui/material';
import './App.css';
import { Color } from './components/Color';
import ResultRGB from './components/ResultRGB';


const hexToRgb = (hex: string, alpha = '1'): number[] => {
  if (!hex.startsWith('#') || hex.length !== 7) return [0,0,0];

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r,g,b];
};

const App = () => {
  const [colorHex, setColorHex] = React.useState<string>('');
  const [rgbValue, setRgbValue] = React.useState< number[] | null>([0,0,0]);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleChange = (newValue: string) => {
    setColorHex(newValue);

    if (newValue.length === 7) {
      const validHexRegex = /^#[A-Fa-f0-9]{6}$/;
      if (validHexRegex.test(newValue)) {
        const convertedRgb = hexToRgb(newValue);
        if (convertedRgb) {
          setRgbValue(convertedRgb);
          setErrorMessage(null);
        }
      } else {
        setRgbValue(null);
        setErrorMessage('Ошибка!');
      }
    } else {
      setRgbValue(null);
      setErrorMessage(null);
    }
  };

  React.useEffect(() => {
    if (rgbValue) {
      document.body.style.backgroundColor = `rgb(${rgbValue.join(',')})`;
    } else {
      document.body.style.backgroundColor = '#FFFFFF'; // Сброс цвета фона при ошибке или отсутствии значения
    }
  }, [rgbValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{ my: 4 }}>
          <Color value={colorHex} onChange={handleChange} />
          <br /><br />
          <ResultRGB rgbValue={rgbValue?`rgb(${rgbValue.join(',')})`:''} errorMessage={errorMessage} />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
