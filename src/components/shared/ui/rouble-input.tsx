import { forwardRef } from 'react';
import { NumberFormatBase, NumericFormat, PatternFormatProps } from 'react-number-format';

import { Input, InputProps } from './input';

const formatValue = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    useGrouping: false,
    minimumFractionDigits: 0,
});

const RoubleInput = forwardRef<HTMLInputElement, Omit<PatternFormatProps<InputProps>, 'format'>>(
    ({ onChange, ...props }, ref) => {
        return (
            <NumberFormatBase
                {...props}
                valueIsNumericString
                customInput={Input}
                placeholder="₽"
                getInputRef={ref}
                format={(numStr) => {
                    if (numStr === '') return '';
                    return new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        useGrouping: false,
                        minimumFractionDigits: 0,
                    }).format(Number(numStr));
                }}
            />
        );
    }
);

RoubleInput.displayName = 'RoubleInput';

export { RoubleInput };
