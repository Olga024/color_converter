import * as React from 'react';

interface ResultInRGBProps {
    rgbValue?: string | null;
    errorMessage?: string | null;
}

const ResultRGB = ({ rgbValue, errorMessage }: ResultInRGBProps) => {
    return (
        <>
            {rgbValue && <div style={{ backgroundColor: rgbValue }}>{rgbValue}</div>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </>
    );
};

export default ResultRGB;