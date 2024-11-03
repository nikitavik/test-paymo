export type CustomData = {
    name: string;
    eventName: string;
};

export type DataTransfer = {
    api_key: string;
    transaction: string;
    description: string;
    amount: number;
    hash_sum: string;
    email?: string;
    redirect_url?: string;
    success_redirect?: string;
    fail_redirect?: string;
    custom_data?: CustomData;
};
