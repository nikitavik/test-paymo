'use server';
import { redirect } from 'next/navigation';
import hmacSHA256 from 'crypto-js/hmac-sha256';

import { CustomData, DataTransfer } from '../model/data-transfer';
import { FormData } from '../model/form';

export async function submitForm(formData: FormData, custom_data: CustomData) {
    const secret_key = process.env.SECRET_KEY;
    const api_key = process.env.API_KEY;

    if (!secret_key || !api_key) {
        throw new Error('Missing API key or secret key');
    }

    const transaction = 'Test1';
    const description = 'Test transaction';

    const { transferAmount } = formData;

    const amount = Number(transferAmount);

    const hash_sum = hmacSHA256(`${api_key}${transaction}${amount * 100}`, secret_key);

    const email = 'test@test.co';
    const redirect_url = 'https://mock.org';
    const success_redirect = 'https://mock.org/success';
    const fail_redirect = 'https://mock.org/fail';

    const dataToSend: DataTransfer = {
        api_key,
        transaction,
        description,
        amount,
        hash_sum: hash_sum.toString(),
        email,
        redirect_url,
        success_redirect,
        fail_redirect,
        custom_data,
    };

    const encodedData = encodeURIComponent(JSON.stringify(dataToSend));

    redirect(`/targetPage?data=${encodedData}`);
}
