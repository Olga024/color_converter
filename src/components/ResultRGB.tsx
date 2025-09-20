import { Box } from '@mui/material';

interface ResultInRGBProps {
    rgbValue?: string | null;
    errorMessage?: string | null;
}

const ResultRGB = ({ rgbValue, errorMessage }: ResultInRGBProps) => {

    let resultText = '';
    if (rgbValue) {
        resultText = `${rgbValue}`;
    } else if (errorMessage) {
        resultText = errorMessage;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: errorMessage ? 'red' : ('#00000050'),
                borderRadius: '8px',
                padding: '16px',
            }}
        >
            {resultText}
        </Box>
    );
};

export default ResultRGB;