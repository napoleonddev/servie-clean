import {
  Button,
  Flex,
  Input,
  Text,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box p="60px" bgColor={"#36B8640D"}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="40px"
          alignItems={"center"}
        >
          <Box>
            <Image src="/cleancare.png" mb="20px" w="100px" />
            <Text fontWeight={400} fontSize={"16px"} color="#04090D">
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </Text>
          </Box>
          <Box>
            <Text fontWeight={600} fontSize={"20px"} mb="20px">
              Company
            </Text>
            <Text>About Us</Text>
            <Text>Services</Text>
            <Text>Our Team</Text>
          </Box>
          <VStack align={"flex-start"}>
            <Text fontWeight={600} fontSize={"20px"} mb="20px">
              Know More
            </Text>
            <ChakraLink href="mailto:info@cleaniecare.com.au">
              <Text>Support</Text>
            </ChakraLink>
            <ChakraLink href="/privacy-policy">
              <Text>Privacy Policy</Text>
            </ChakraLink>
            <ChakraLink href="/terms-conditions">
              <Text>Terms & Conditions</Text>
            </ChakraLink>
          </VStack>
          {/* <Box>
            <Text fontWeight={600} fontSize={"20px"} mb="20px">
              Newsletter
            </Text>
            <Input
              placeholder="Enter your email"
              size="md"
              width="300px"
              bgColor={"white"}
              borderRadius={"md"}
              px="10px"
              _placeholder={{ color: "gray.500" }}
            />
            <Button className="green" px="15px" mt="20px">
              Send
            </Button>
          </Box> */}
        </SimpleGrid>
        <Box border={"1px solid #DFDFDF"} w="full" h="1px" mt="30px" />
        <Flex justify={"end"} align={"center"} gap="400px" mt="20px">
          <Text
            fontWeight={400}
            fontSize={"16px"}
            color="#6B7280"
            textAlign={"center"}
          >
            2025 “CLEANCARE” All Rights Reserved
          </Text>
          <Image src="/eco2.png" w="60px" />
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
