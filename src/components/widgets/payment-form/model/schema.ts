import { z } from 'zod';
import * as Luhn from 'luhn-js';

import { isNumberString } from '@/components/shared/lib/guard';

const today = new Date();

const isCardExpired = (value: string): boolean => {
    const month = Number(value.slice(0, 2));
    const year = Number(value.slice(2));

    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear() % 100;

    return year > currentYear || (year === currentYear && month > currentMonth);
};

type YearRefinementResult = {
    cardValidYearRefinement: (s: string) => boolean;
    cardValidYearErrorMessage: { message: string };
};
const createCardValidYearRefinement = (): YearRefinementResult => {
    const currentYear = new Date().getFullYear() % 100;
    const maxYear = currentYear + 25;

    const isValidYear = (value: string): boolean => {
        const year = parseInt(value.slice(2), 10);
        return year >= currentYear && year <= maxYear;
    };

    return {
        cardValidYearRefinement: isValidYear,
        cardValidYearErrorMessage: {
            message: `Год окончания срока действия должен быть в диапазоне от 20${currentYear} до 20${maxYear}.`,
        },
    };
};

const { cardValidYearRefinement, cardValidYearErrorMessage } = createCardValidYearRefinement();

export const formSchema = z.object({
    cardNumber: z
        .string({
            required_error: 'Введите номер карты',
        })
        .length(16, 'Введите номер карты')
        .refine((value) => value && value.length > 2 && Luhn.isValid(value), {
            message: 'Некорректный номер карты',
        }),

    expiryDate: z
        .string({
            required_error: 'Введите срок',
        })
        .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Введите срок')
        .refine(isCardExpired, {
            message: 'Указанный срок действия уже закончился',
        })
        .refine(cardValidYearRefinement, cardValidYearErrorMessage),

    cvv: z
        .string({
            required_error: 'Введите CVV',
        })
        .length(3, 'Введите корректный CVV')
        .regex(/^\d+$/, 'Введите корректный CVV'),

    // TODO
    transferAmount: z
        .string({
            required_error: 'Введите сумму',
        })
        .refine((value) => isNumberString(value) && Number(value) > 10, 'Минимальная сумма 10₽'),

    name: z
        .string({
            required_error: 'Введите имя',
        })
        .min(1, 'Введите имя')
        .max(50, 'Слишком длинное имя'),

    message: z.string().max(50, 'Слишком длинное сообщение').optional(),
});
