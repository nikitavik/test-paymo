import { PaymentForm } from '@/components/widgets/payment-form/ui/PaymentForm';

export default function Home() {
    return (
        <main className="mx-auto my-12 max-w-[37.5rem]">
            <PaymentForm
                transactionReceiver="Иван И."
                eventName="Установку андронного коллайдера в г. Воронеж"
            />
        </main>
    );
}
