// "use client";

// import React from "react";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import {
//   Box,
//   Text,
//   Flex,
//   VStack,
//   Input,
//   Button,
//   Link as ChakraLink,
//   SimpleGrid,
//   Checkbox,
// } from "@chakra-ui/react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutPage from "../CheckoutPage";
// import convertToSubcurrency from "@/lib/convertToSubcurrency";

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
//   throw new Error("Missing Stripe public key");
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const Booking = () => {
//   const params = useSearchParams();

//   // Define all states
//   const [mode, setMode] = useState("");
//   const [bedrooms, setBedrooms] = useState("");
//   const [bathrooms, setBathrooms] = useState("");
//   const [cleanType, setCleanType] = useState("");
//   const [frequency, setFrequency] = useState("");
//   const [hours, setHours] = useState("");
//   const [minutes, setMinutes] = useState("");
//   const [price, setPrice] = useState(0);
//   const [selectedExtras, setSelectedExtras] = useState([]);

//   console.log("selectedExtras", selectedExtras)

//   const handleExtraToggle = (item) => {
//     setSelectedExtras((prev) => {
//       const exists = prev.some((x) => x.label === item.label);

//       if (exists) {
//         return prev.filter((x) => x.label !== item.label);
//       } else {
//         return [...prev, item];
//       }
//     });
//   };

//   // Calculate total price based on base price + selected extras
//   const totalPrice =
//     price + selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

//   // Step management
//   const [step, setStep] = useState(1);

//   // User details
//   const [details, setDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//   });

//   // Extract params safely
//   useEffect(() => {
//     if (!params) return;

//     const modeValue = params.get("mode");
//     const bedValue = params.get("bedrooms");
//     const bathValue = params.get("bathrooms");
//     const cleanTypeValue = params.get("cleanType");
//     const frequencyValue = params.get("frequency");
//     const hoursValue = params.get("hours");
//     const minutesValue = params.get("minutes");
//     const priceValue = params.get("price");

//     if (modeValue) setMode(modeValue);
//     if (bedValue) setBedrooms(bedValue);
//     if (bathValue) setBathrooms(bathValue);
//     if (cleanTypeValue) setCleanType(cleanTypeValue);
//     if (frequencyValue) setFrequency(frequencyValue);
//     if (hoursValue) setHours(hoursValue);
//     if (minutesValue) setMinutes(minutesValue);
//     if (priceValue) setPrice(Number(priceValue));
//   }, [params]);

//   const handleNextStep = () => setStep((prev) => Math.min(prev + 1, 2));
//   const handlePrevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   const items = [
//     { label: "Oven", price: 85 },
//     { label: "Fridge", price: 85 },
//     { label: "Cabinet", price: 25 },
//     { label: "Window", price: 25 },
//   ];

//   return (
//     <>
//       <Flex
//         px={{ base: "20px", md: "60px" }}
//         py="40px"
//         justify="space-between"
//         align="flex-start"
//         gap="40px"
//         flexDir={{ base: "column", md: "row" }}
//       >
//         {/* Left Section: Cleaning Request */}
//         <Box
//           flex="1"
//           bg="white"
//           p="6"
//           borderRadius="2xl"
//           boxShadow="md"
//           w={{ base: "100%", md: "60%" }}
//         >
//           {step === 1 && (
//             <>
//               <Text fontSize="2xl" fontWeight="bold" mb={6}>
//                 Step 1: Cleaning Request
//               </Text>
//               <VStack spacing={4} align="stretch">
//                 <Box>Mode: {mode || "By Size"}</Box>
//                 <Box>Bedrooms: {bedrooms || "1"}</Box>
//                 <Box>Bathrooms: {bathrooms || "1"}</Box>
//                 <Box>Cleaning Type: {cleanType || "Standard"}</Box>
//                 <Box>Frequency: {frequency || "Once Off"}</Box>
//                 <Box>Hours: {hours || "0"}</Box>
//                 <Box>Minutes: {minutes || "0"}</Box>
//               </VStack>
//               <Button
//                 mt="6"
//                 p="8px"
//                 bg="#98b278"
//                 color="white"
//                 onClick={handleNextStep}
//                 _hover={{ bg: "#88a068" }}
//               >
//                 Next Step
//               </Button>
//             </>
//           )}
//           {step === 2 && (
//             <>
//               <Text fontSize="2xl" fontWeight="bold" mb="6">
//                 Step 2: Your Details
//               </Text>
//               <VStack align="stretch" spacing="4">
//                 <Box>
//                   <Text>Name</Text>
//                   <Input
//                     placeholder="Full name"
//                     pl="10px"
//                     value={details.name}
//                     onChange={(e) =>
//                       setDetails({ ...details, name: e.target.value })
//                     }
//                   />
//                 </Box>
//                 <Box>
//                   <Text>Email</Text>
//                   <Input
//                     type="email"
//                     placeholder="you@example.com"
//                     pl="10px"
//                     value={details.email}
//                     onChange={(e) =>
//                       setDetails({ ...details, email: e.target.value })
//                     }
//                   />
//                 </Box>
//                 <Box>
//                   <Text>Address</Text>
//                   <Input
//                     placeholder="Enter your address"
//                     pl="10px"
//                     value={details.address}
//                     onChange={(e) =>
//                       setDetails({ ...details, address: e.target.value })
//                     }
//                   />
//                 </Box>
//                 <Box>
//                   <Text>Phone</Text>
//                   <Input
//                     placeholder="(555) 555-5555"
//                     pl="10px"
//                     value={details.phone}
//                     onChange={(e) =>
//                       setDetails({ ...details, phone: e.target.value })
//                     }
//                   />
//                 </Box>
//               </VStack>

//               <Flex mt="6" justify="space-between">
//                 <Button p="8px" variant="outline" onClick={handlePrevStep}>
//                   Back
//                 </Button>
//               </Flex>
//             </>
//           )}
//           {details.name === "" ||
//           details.email === "" ||
//           details.address === "" ||
//           details.phone === "" ? (
//             <Text color={"red"} fontWeight={500} fontSize={"14px"}>
//               Please fill in all your details to proceed.
//             </Text>
//           ) : (
//             <Text color={"green"} fontWeight={500} fontSize={"14px"}>
//               All details added successfully!
//             </Text>
//           )}
//           <Box maxW="900px" mx="auto" px={[4, 6, 0]} mt={[6, 10]}>
//             <SimpleGrid
//               columns={{ base: 1, sm: 2 }} // 1 column on mobile, 2 on larger screens
//               spacing={{ base: 4, md: 6 }}
//             >
//               {items.map((item) => {
//                 const isChecked = selectedExtras.some(
//                   (e) => e.label === item.label
//                 );

//                 return (
//                   <Box
//                     key={item.label}
//                     p={{ base: 4, md: 6 }}
//                     bg="blue.50"
//                     borderRadius="lg"
//                     display="flex"
//                     alignItems="center"
//                     gap={3}
//                     minH="70px"
//                   >
//                     <Checkbox.Root
//                       checked={isChecked}
//                       onCheckedChange={() => handleExtraToggle(item)} // Remove the second argument
//                     >
//                       <Checkbox.HiddenInput />
//                       <Checkbox.Control />
//                       <Checkbox.Label>
//                         {item.label} ${item.price}
//                       </Checkbox.Label>
//                     </Checkbox.Root>
//                   </Box>
//                 );
//               })}
//             </SimpleGrid>
//           </Box>
//         </Box>

//         {/* Right Section: Cleaning Summary */}
//         <Box flex="1" p={6} bg="blue.50" borderRadius="2xl" boxShadow="md">
//           <Text fontSize="2xl" fontWeight="bold" mb={4}>
//             Your Cleaning Summary
//           </Text>
//           {/* <Divider mb={4} /> */}
//           <VStack spacing={3} align="stretch" color="gray.700">
//             <Text>Mode: {mode || "By Size"}</Text>
//             <Text>Bedrooms: {bedrooms || "1"}</Text>
//             <Text>Bathrooms: {bathrooms || "1"}</Text>
//             <Text>Cleaning Type: {cleanType || "Standard"}</Text>
//             <Text>Frequency: {frequency || "Once"}</Text>
//             <Text>Hours: {hours || "0"}</Text>
//             <Text>Minutes: {minutes || "0"}</Text>
//             <Text>Date: </Text>
//             <Text>Time: </Text>
//           </VStack>
//           {step === 2 && (
//             <>
//               <Box h="1px" bg="gray.200" w="100%" my="2" />
//               <Text fontWeight="bold" mt="2">
//                 Customer Details
//               </Text>
//               <Text>Name: {details.name || "-"}</Text>
//               <Text>Email: {details.email || "-"}</Text>
//               <Text>Address: {details.address || "-"}</Text>
//               <Text>Phone: {details.phone || "-"}</Text>
//             </>
//           )}
//           {/* <Divider my={4} /> */}
//           <Box h="1px" bg="gray.200" w="100%" my="2" />
//           <Text fontSize="2xl" fontWeight="bold" textAlign="right">
//             ${totalPrice || 0}
//           </Text>
//           <ChakraLink href={`/checkout?amount=${totalPrice || 0}`} width="100%">
//             <Button
//               className="green"
//               color={"#fff"}
//               width="100%"
//               disabled={
//                 details.name === "" ||
//                 details.email === "" ||
//                 details.address === "" ||
//                 details.phone === ""
//               }
//             >
//               Pay Now
//             </Button>
//           </ChakraLink>
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default Booking;
"use client";

import React, { useState } from "react";
import { Box, Text, Flex, VStack, Input, Button } from "@chakra-ui/react";

const Booking = () => {
  // Step control (if you still want multi-step flow)
  const [step, setStep] = useState(1);

  // User details
  const [details, setDetails] = useState({
    name: "",
    address: "",
    email: "",
    ndis: "",
    phone: "",
    planDetail: "",
    service: "",
    frequency: "",
  });

  const handleNextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const isComplete =
    details.name !== "" &&
    details.email !== "" &&
    details.phone !== "" &&
    details.address !== "" &&
    details.ndis !== "" &&
    details.planDetail !== "" &&
    details.service !== "" &&
    details.frequency !== "";

  return (
    <Flex
      px={{ base: "20px", md: "60px" }}
      py="40px"
      justify="center"
      align="center"
    >
      <Box
        bg="white"
        p="8"
        borderRadius="2xl"
        boxShadow="xl"
        w={{ base: "100%", md: "800px" }}
      >
        <Box
              p={{ base: 4, md: 6 }}
              bg="blue.50"
              borderRadius="lg"
              minH="70px"
              mb={'20px'}
            >
              <Flex justify={'space-between'}>
                <Text fontSize={{ base: "14px", md: "16px" }}>House Cleaning And Other Household Activities 01_020_0120_1_1:</Text>
                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={600}>$58.03</Text>
              </Flex>
              <Flex justify={'space-between'}>
                <Text fontSize={{ base: "14px", md: "16px" }}>House or Yard Maintenance 01_019_0120_1_1:</Text>
                <Text fontSize={{ base: "14px", md: "16px" }} fontWeight={600}>$56.98</Text>
              </Flex>
            </Box>
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          {step === 1 ? "Enter Your Details" : "Review Details"}
        </Text>

        {step === 1 && (
            <VStack align="stretch" spacing="5">
              <Box>
                <Text mb="1">Full Name</Text>
                <Input
                  placeholder="John Doe"
                  pl="12px"
                  value={details.name}
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">Address</Text>
                <Input
                  placeholder="Abc Street, City, State, ZIP"
                  pl="12px"
                  value={details.address}
                  onChange={(e) =>
                    setDetails({ ...details, address: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">Email</Text>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  pl="12px"
                  value={details.email}
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">NDIS number</Text>
                <Input
                  type="text"
                  placeholder="Enter your NDIS number"
                  pl="12px"
                  value={details.ndis}
                  onChange={(e) =>
                    setDetails({ ...details, ndis: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">Phone Number</Text>
                <Input
                  placeholder="(555) 555-5555"
                  pl="12px"
                  value={details.phone}
                  onChange={(e) =>
                    setDetails({ ...details, phone: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">Plan Details</Text>
                <Input
                  placeholder="Enter your plan details"
                  pl="12px"
                  value={details.planDetail}
                  onChange={(e) =>
                    setDetails({ ...details, planDetail: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">Service</Text>
                <Input
                  placeholder="Enter the service you require"
                  pl="12px"
                  value={details.service}
                  onChange={(e) =>
                    setDetails({ ...details, service: e.target.value })
                  }
                />
              </Box>

              <Box>
                <Text mb="1">Frequency</Text>
                <Input
                  placeholder="Enter the frequency of the service"
                  pl="12px"
                  value={details.frequency}
                  onChange={(e) =>
                    setDetails({ ...details, frequency: e.target.value })
                  }
                />
              </Box>

              {!isComplete ? (
                <Text color="red" fontSize="14px" fontWeight={500}>
                  Please fill in all fields to continue.
                </Text>
              ) : (
                <Text color="green" fontSize="14px" fontWeight={500}>
                  All details entered!
                </Text>
              )}

              <Button
                mt={4}
                bg="#98b278"
                color="white"
                _hover={{ bg: "#88a068" }}
                onClick={handleNextStep}
                disabled={!isComplete}
              >
                Continue
              </Button>
            </VStack>
            
        )}

        {step === 2 && (
          <VStack spacing="4" align="stretch">
            <Text fontWeight="bold">Review Your Information</Text>
            <Box>
              <Text>Name: {details.name}</Text>
              <Text>Address: {details.address}</Text>
              <Text>Email: {details.email}</Text>
              <Text>NDIS#: {details.ndis}</Text>
              <Text>Phone: {details.phone}</Text>
              <Text>Plan Details: {details.planDetail}</Text>
              <Text>Service: {details.service}</Text>
              <Text>Frequency: {details.frequency}</Text>
            </Box>

            <Flex mt="6" justify="space-between">
              <Button variant="outline" onClick={handlePrevStep} px="8px">
                Back
              </Button>

              <Button
                bg="#98b278"
                color="white"
                _hover={{ bg: "#88a068" }}
                onClick={() => alert("Submit / Pay action")}
                px="8px"
              >
                Confirm
              </Button>
            </Flex>
          </VStack>
        )}
      </Box>
      
    </Flex>
  );
};

export default Booking;
