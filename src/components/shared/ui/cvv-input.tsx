import { forwardRef } from 'react';
import { PatternFormat, PatternFormatProps } from 'react-number-format';

import { Input, InputProps } from './input';

const CvvInput = forwardRef<HTMLInputElement, Omit<PatternFormatProps<InputProps>, 'format'>>(
    ({ onChange, ...props }, ref) => {
        return (
            <PatternFormat
                {...props}
                valueIsNumericString
                customInput={Input}
                getInputRef={ref}
                format="###"
                mask="*"
            />
        );
    }
);

CvvInput.displayName = 'CvvInput';

export { CvvInput };
