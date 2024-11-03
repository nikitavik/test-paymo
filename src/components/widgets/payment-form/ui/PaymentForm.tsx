'use client';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card } from '@/components/shared/ui/card';
import { Button } from '@/components/shared/ui/button';

import { Inputs } from './Inputs';

import { formSchema } from '../model/schema';
import { defaultValues, FormData } from '../model/form';
import { submitForm } from './submit-form-action';

interface PaymentForm {
    transactionReceiver: string;
    eventName: string;
}

export const PaymentForm: FC<PaymentForm> = (props) => {
    const { transactionReceiver, eventName } = props;

    const formMethods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const { handleSubmit } = formMethods;

    const onValidSubmit = (formData: FormData) =>
        submitForm(formData, {
            name: transactionReceiver,
            eventName,
        });

    return (
        <Card>
            <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onValidSubmit)}>
                    <fieldset className="flex flex-col gap-8">
                        <legend className="mb-6">
                            <h1 className="text-headlineM font-medium">
                                {transactionReceiver} собирает на «{eventName}»
                            </h1>
                        </legend>

                        <Inputs />

                        <div className="flex gap-4 flex-nowrap">
                            <Button type="submit" variant="primary">
                                Перевести
                            </Button>

                            <Button variant="secondary">Вернуться</Button>
                        </div>
                    </fieldset>
                </form>
            </FormProvider>
        </Card>
    );
};
