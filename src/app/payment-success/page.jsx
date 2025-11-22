"use client";

import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { useSearchParams } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const amount = params.get("amount");

  return (
    <>
      <Header />
      <Flex minH="100vh" align="center" justify="center" bg="#f5f8f2" p={6}>
        <Box
          textAlign="center"
          bg="white"
          maxW="500px"
          p={10}
          borderRadius="2xl"
          boxShadow="lg"
        >
          <Flex justify={"center"} align={"center"}>
            <FaCheckCircle size="80px" color="#98b278" mb={6} />
          </Flex>

          <Heading size="xl" color="#98b278" mb={4}>
            Payment Successful!
          </Heading>

          {amount && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Thank you for your purchase of <strong>${amount}</strong>. Your
              transaction has been completed successfully.
            </Text>
          )}

          <Button
            bg="#98b278"
            color="white"
            size="lg"
            width="100%"
            _hover={{ opacity: 0.9 }}
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
