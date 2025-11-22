import CheckoutClient from "@/components/ui/Screens/CheckoutClient";
import { Suspense } from "react";

export default function Checkout() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutClient />
      </Suspense>
    </>
  );
}
