import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '@/components/shared/ui/input';
import { CardNumberInput } from '@/components/shared/ui/card-number-input';
import { ExpiryDateInput } from '@/components/shared/ui/expiry-date-input';
import { CvvInput } from '@/components/shared/ui/cvv-input';

import { FormData } from '../model/form';
import { RoubleInput } from '@/components/shared/ui/rouble-input';

export const Inputs: FC = () => {
    const { control } = useFormContext<FormData>();

    return (
        <>
            <Controller
                name="cardNumber"
                control={control}
                render={({ field: { onChange, ...field }, fieldState }) => (
                    <CardNumberInput
                        {...field}
                        onValueChange={({ value }) => onChange(value)}
                        label="Номер карты"
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />

            <div className="grid grid-cols-2 gap-9">
                <Controller
                    name="expiryDate"
                    control={control}
                    render={({ field: { onChange, ...field }, fieldState }) => (
                        <ExpiryDateInput
                            {...field}
                            label="Срок действия"
                            placeholder="ММ/ГГ"
                            onValueChange={({ value }) => onChange(value)}
                            errorMessage={fieldState.error?.message}
                        />
                    )}
                />

                <Controller
                    name="cvv"
                    control={control}
                    render={({ field: { onChange, ...field }, fieldState }) => (
                        <CvvInput
                            {...field}
                            label="CVV"
                            errorMessage={fieldState.error?.message}
                            onValueChange={({ value }) => onChange(value)}
                        />
                    )}
                />
            </div>

            <Controller
                name="transferAmount"
                control={control}
                render={({ field: { onChange, ...field }, fieldState }) => (
                    <RoubleInput
                        {...field}
                        label="Сумма перевода"
                        onValueChange={({ value }) => onChange(value)}
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                    <Input {...field} label="Ваше имя" errorMessage={fieldState.error?.message} />
                )}
            />

            <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                    <Input
                        {...field}
                        label="Сообщение получателю"
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />
        </>
    );
};
