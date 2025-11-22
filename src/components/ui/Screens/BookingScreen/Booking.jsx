"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Box, Text, Flex, VStack, Input, Button, Link as ChakraLink } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Missing Stripe public key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Booking = () => {
  const params = useSearchParams();

  // Define all states
  const [mode, setMode] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [cleanType, setCleanType] = useState("");
  const [frequency, setFrequency] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [price, setPrice] = useState(0);

  // Step management
  const [step, setStep] = useState(1);

  // User details
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  // Extract params safely
  useEffect(() => {
    if (!params) return;

    const modeValue = params.get("mode");
    const bedValue = params.get("bedrooms");
    const bathValue = params.get("bathrooms");
    const cleanTypeValue = params.get("cleanType");
    const frequencyValue = params.get("frequency");
    const hoursValue = params.get("hours");
    const minutesValue = params.get("minutes");
    const priceValue = params.get("price");

    if (modeValue) setMode(modeValue);
    if (bedValue) setBedrooms(bedValue);
    if (bathValue) setBathrooms(bathValue);
    if (cleanTypeValue) setCleanType(cleanTypeValue);
    if (frequencyValue) setFrequency(frequencyValue);
    if (hoursValue) setHours(hoursValue);
    if (minutesValue) setMinutes(minutesValue);
    if (priceValue) setPrice(Number(priceValue));
  }, [params]);

  const handleNextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  console.log("Booking price:", price);

  return (
    <>
      <Flex
        px={{ base: "20px", md: "60px" }}
        py="40px"
        justify="space-between"
        align="flex-start"
        gap="40px"
        flexDir={{ base: "column", md: "row" }}
      >
        {/* Left Section: Cleaning Request */}
        <Box
          flex="1"
          bg="white"
          p="6"
          borderRadius="2xl"
          boxShadow="md"
          w={{ base: "100%", md: "60%" }}
        >
          {step === 1 && (
            <>
              <Text fontSize="2xl" fontWeight="bold" mb={6}>
                Step 1: Cleaning Request
              </Text>
              <VStack spacing={4} align="stretch">
                <Box>Mode: {mode || "By Size"}</Box>
                <Box>Bedrooms: {bedrooms || "1"}</Box>
                <Box>Bathrooms: {bathrooms || "1"}</Box>
                <Box>Cleaning Type: {cleanType || "Standard"}</Box>
                <Box>Frequency: {frequency || "Once Off"}</Box>
                <Box>Hours: {hours || "0"}</Box>
                <Box>Minutes: {minutes || "0"}</Box>
              </VStack>
              <Button
                mt="6"
                p="8px"
                bg="#98b278"
                color="white"
                onClick={handleNextStep}
                _hover={{ bg: "#88a068" }}
              >
                Next Step
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <Text fontSize="2xl" fontWeight="bold" mb="6">
                Step 2: Your Details
              </Text>
              <VStack align="stretch" spacing="4">
                <Box>
                  <Text>Name</Text>
                  <Input
                    placeholder="Full name"
                    pl="10px"
                    value={details.name}
                    onChange={(e) =>
                      setDetails({ ...details, name: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <Text>Email</Text>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    pl="10px"
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <Text>Address</Text>
                  <Input
                    placeholder="Enter your address"
                    pl="10px"
                    value={details.address}
                    onChange={(e) =>
                      setDetails({ ...details, address: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <Text>Phone</Text>
                  <Input
                    placeholder="(555) 555-5555"
                    pl="10px"
                    value={details.phone}
                    onChange={(e) =>
                      setDetails({ ...details, phone: e.target.value })
                    }
                  />
                </Box>
              </VStack>

              <Flex mt="6" justify="space-between">
                <Button p="8px" variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button
                  p="8px"
                  bg="#98b278"
                  color="white"
                  _hover={{ bg: "#88a068" }}
                >
                  Confirm Booking
                </Button>
              </Flex>
            </>
          )}
        </Box>

        {/* Right Section: Cleaning Summary */}
        <Box flex="1" p={6} bg="blue.50" borderRadius="2xl" boxShadow="md">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Your Cleaning Summary
          </Text>
          {/* <Divider mb={4} /> */}
          <VStack spacing={3} align="stretch" color="gray.700">
            <Text>Mode: {mode || "By Size"}</Text>
            <Text>Bedrooms: {bedrooms || "1"}</Text>
            <Text>Bathrooms: {bathrooms || "1"}</Text>
            <Text>Cleaning Type: {cleanType || "Standard"}</Text>
            <Text>Frequency: {frequency || "Once"}</Text>
            <Text>Hours: {hours || "0"}</Text>
            <Text>Minutes: {minutes || "0"}</Text>
            <Text>Extras: None</Text>
            <Text>Date: </Text>
            <Text>Time: </Text>
          </VStack>
          {step === 2 && (
            <>
              <Box h="1px" bg="gray.200" w="100%" my="2" />
              <Text fontWeight="bold" mt="2">
                Customer Details
              </Text>
              <Text>Name: {details.name || "-"}</Text>
              <Text>Email: {details.email || "-"}</Text>
              <Text>Address: {details.address || "-"}</Text>
              <Text>Phone: {details.phone || "-"}</Text>
            </>
          )}
          {/* <Divider my={4} /> */}
          <Box h="1px" bg="gray.200" w="100%" my="2" />
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="right"
          >
            ${price || 0}
          </Text>
          <ChakraLink href={`/checkout?amount=${price || 0}`} width="100%">
            <Button className="green" width="100%">
              Pay Now
            </Button>
          </ChakraLink>
        </Box>
      </Flex>
      
    </>
  );
};

export default Booking;
