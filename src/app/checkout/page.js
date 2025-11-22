"use client";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import CheckoutPage from "@/components/ui/Screens/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Missing Stripe public key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Checkout() {
  const params = useSearchParams();

  const [amountParam, setAmountParam] = useState(null);

  // ⬇️ Run only on client AFTER hydration
  useEffect(() => {
    const value = params.get("amount");
    setAmountParam(value);
  }, [params]);

  // Avoid rendering Stripe Elements before we have the real amount
  if (amountParam === null)
    return (
      <Box padding="6" boxShadow="lg" bg="white" borderRadius="lg">
        <Skeleton height="20px" mb="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    );

  return (
    <>
      <Header />
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(Number(amountParam)),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={Number(amountParam)} />
      </Elements>
      <Footer />
    </>
  );
}
