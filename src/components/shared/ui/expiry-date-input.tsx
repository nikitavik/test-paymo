import { forwardRef, KeyboardEventHandler } from 'react';
import { NumberFormatBase, PatternFormatProps } from 'react-number-format';

import { Input, InputProps } from './input';

const ExpiryDateInput = forwardRef<
    HTMLInputElement,
    Omit<PatternFormatProps<InputProps>, 'format'>
>(({ onChange, ...props }, ref) => {
    const format = (val: string) => {
        if (val === '') return '';
        let month = val.substring(0, 2);
        const year = val.substring(2, 4);

        if (month.length === 1 && Number(month[0]) > 1) {
            month = `0${month[0]}`;
        } else if (month.length === 2) {
            if (Number(month) === 0) {
                month = `01`;
            } else if (Number(month) > 12) {
                month = '12';
            }
        }

        return `${month}/${year}`;
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        const { target: eTarget } = e;
        const target = eTarget as HTMLInputElement;
        const { value, selectionStart } = target;

        if (selectionStart == null || target.selectionStart === null) return;

        if (e.key === '/' && value[selectionStart] === '/') {
            if (value.split('/')[0].length === 1) {
                target.value = `0${value}`;
                target.selectionStart++;
            }

            target.selectionStart++;
            e.preventDefault();
        }
    };

    return (
        <NumberFormatBase
            {...props}
            format={format}
            onKeyDown={onKeyDown}
            valueIsNumericString
            customInput={Input}
            getInputRef={ref}
        />
    );
});

ExpiryDateInput.displayName = 'ExpiryDateInput';

export { ExpiryDateInput };
