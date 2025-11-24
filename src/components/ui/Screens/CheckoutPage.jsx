"use client";

import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Box, Button, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!amount) return;

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(() => setErrorMessage("Failed to initialize payment."));
  }, [amount]);

  if (!stripe || !elements || !clientSecret) {
    return (
      <Box padding="6" boxShadow="lg" bg="white" borderRadius="lg">
        <Skeleton height="20px" mb="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    /** 🔥 REQUIRED — AVOID IntegrationError */
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // return_url: window.location.href,
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
    });

    if (error) setErrorMessage(error.message);

    setLoading(false);
  };

  return (
    <Flex direction="column" align="center" justify="center" p={6} bg="white" boxShadow="lg" borderRadius="lg" maxW="full">
      <Box as="form" onSubmit={handleSubmit} width="50%">
        <PaymentElement />

        {errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}

        <Button disabled={!stripe || loading} w="100%" mt={4} type="submit" className="green" color={'#fff'} fontWeight={600}>
          {loading ? "Processing..." : `Pay $${amount}`}
        </Button>
      </Box>
    </Flex>
  );
};

export default CheckoutPage;
