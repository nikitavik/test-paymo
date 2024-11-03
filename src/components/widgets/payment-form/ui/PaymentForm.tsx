import { FC } from 'react';

import { Card } from '@/components/shared/ui/card';
import { Inputs } from '@/components/widgets/payment-form/ui/Inputs';
import { Button } from '@/components/shared/ui/button';

export const PaymentForm: FC = () => {
    return (
        <Card>
            <form>
                <fieldset className="flex flex-col gap-8">
                    <legend className="mb-6">
                        <h1 className="text-headlineM font-medium">
                            Иван К. собирает на «Экскурсия»
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
        </Card>
    );
};
