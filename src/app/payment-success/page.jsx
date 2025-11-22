import PaymentSuccessClient from "@/components/ui/Screens/payment-success-client";
import { Suspense } from "react";

export default function PaymentSuccessPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentSuccessClient />
      </Suspense>
    </>
  );
}
