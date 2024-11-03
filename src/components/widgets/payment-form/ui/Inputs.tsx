import { FC } from 'react';

import { Input } from '@/components/shared/ui/input';

export const Inputs: FC = () => {
    return (
        <>
            <Input label="Номер карты" />

            <div className="grid grid-cols-2 gap-9">
                <Input label="Срок действия" placeholder="ММ / ГГ" />
                <Input label="CVV" />
            </div>

            <Input label="Сумма перевода" errorMessage="Введите сумму" />
            <Input label="Ваше имя" />
            <Input label="Сообщение получателю" />
        </>
    );
};
