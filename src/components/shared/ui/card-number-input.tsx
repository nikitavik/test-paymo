import { forwardRef } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';

import { Input, InputProps } from './input';

const CardNumberInput = forwardRef<
    HTMLInputElement,
    Omit<PatternFormatProps<InputProps>, 'format'>
>(({ onChange, ...props }, ref) => {
    return (
        <PatternFormat
            {...props}
            format="#### #### #### ####"
            valueIsNumericString
            customInput={Input}
            getInputRef={ref}
        />
    );
});

CardNumberInput.displayName = 'CardNumberInput';

export { CardNumberInput };
