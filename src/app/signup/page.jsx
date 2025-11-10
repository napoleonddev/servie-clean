"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register clicked:", { name, email, password });
    // TODO: connect to your registration API
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        bg="white"
        p={8}
        rounded="2xl"
        shadow="lg"
        width="full"
        maxW={{ base: "100%", md: "400px" }}
        mx={{ base: 4, md: 0 }}
      >
        <Heading mb={6} textAlign="center" color="#98b278">
          Register
        </Heading>
        <VStack spacing={4}>
          <Box width="full">
            <Text>Full Name</Text>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              pl='20px'
            />
          </Box>

          <Box width="full">
            <Text>Email</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              pl='20px'
            />
          </Box>

          <Box width="full">
            <Text>Password</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              pl='20px'
            />
          </Box>

          <Button
            width="full"
            mt={4}
            onClick={handleRegister}
          >
            Register
          </Button>

          <Text fontSize="sm" color="gray.500">
            Already have an account?{" "}
            <Link as={NextLink} href="/login" color="#98b278">
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
