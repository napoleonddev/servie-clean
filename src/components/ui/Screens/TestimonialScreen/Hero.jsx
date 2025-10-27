import { HStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <Box bgColor={"#98b2781A"} px="60px" py="40px">
        <Text fontWeight={600} fontSize={{ base: "40px", md: "60px" }}>
          Testimonials
        </Text>
        <HStack>
          <ChakraLink href="/" color="#000" fontWeight={500}>
            Home
          </ChakraLink>
          <FaChevronRight />
          <Text fontWeight={400} color="#000">
            Testimonials
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Hero;
