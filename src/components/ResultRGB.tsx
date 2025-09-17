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
                backgroundColor: errorMessage ? 'red' : (rgbValue || '#F0F0F0'),
                borderRadius: '8px',
                padding: '16px',
                width: '100%',
            }}
        >
            {resultText}
        </Box>
    );
};

export default ResultRGB;