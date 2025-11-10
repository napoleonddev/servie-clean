"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked:", { email, password });
    // TODO: integrate your login API here
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
        maxW={{ base: "100%" , md: "500px" }}
        mx={{ base: 4, md: 0 }}
      >
        <Heading mb={6} textAlign="center" color="#98b278">
          Login
        </Heading>
        <VStack spacing={4}>
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
            onClick={handleLogin}
          >
            Login
          </Button>

          <Text fontSize="sm" color="gray.500">
            Don't have an account?{" "}
            <Link as={NextLink} href="/signup" color="#98b278">
              Register
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
