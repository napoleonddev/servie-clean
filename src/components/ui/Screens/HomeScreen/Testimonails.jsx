import { Box, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Testimonails = ({toDisp}) => {
  return (
    <>
      <Box p="60px">
  <Text
    fontWeight={600}
    fontSize={{ base: "28px", md: "48px" }}
    textAlign={{ base: "center", md: "left" }}
    display={toDisp === "yes" ? "block" : "none"}
  >
    What Our Clients Say
  </Text>

  <Text
    fontWeight={400}
    fontSize="18px"
    textAlign={{ base: "center", md: "left" }}
    display={toDisp === "yes" ? "block" : "none"}
    mt="10px"
  >
    Hear from our satisfied clients about their experiences with our reliable, high-quality services.
  </Text>

  <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" my="60px">
    {[
      {
        name: "Steve Smith",
        role: "Managing Director",
        description:
          "Outstanding service! The team was professional, efficient, and delivered exactly what I needed on time.",
        icon: "/star.png",
      },
      {
        name: "Albert Flores",
        role: "CEO, BrightTech",
        description:
          "Their attention to detail and commitment to quality are unmatched. I’ll definitely work with them again.",
        icon: "/star.png",
      },
      {
        name: "Robert Fox",
        role: "Entrepreneur",
        description:
          "Exceptional experience from start to finish. The project exceeded my expectations in every way.",
        icon: "/star.png",
      },
      {
        name: "Darlene Robertson",
        role: "Head of Sales",
        description:
          "The team’s expertise and friendly approach made the entire process smooth and stress-free.",
        icon: "/star.png",
      },
      {
        name: "Kathryn Murphy",
        role: "Homeowner",
        description:
          "Reliable, skilled, and responsive — I couldn’t be happier with the results. Highly recommended!",
        icon: "/star.png",
      },
      {
        name: "Marvin McKinney",
        role: "Global Director",
        description:
          "A truly professional team that delivers top-notch service every time. Excellent communication throughout.",
        icon: "/star.png",
      },
    ].map((item) => (
      <Box
        key={item.name}
        p="30px"
        borderRadius="16px"
        border="1px solid #DFDFDF"
        bg="white"
        _hover={{ boxShadow: "lg", transform: "translateY(-4px)", transition: "all 0.3s ease" }}
      >
        <Flex gap="20px" align="center">
          <Box
            w="40px"
            h="40px"
            borderRadius="full"
            border="1px solid #DFDFDF"
            bg="#f4f4f4"
          />
          <Box>
            <Text fontWeight={700} fontSize="16px" color="#04090D">
              {item.name}
            </Text>
            <Text fontWeight={400} fontSize="14px" color="#6B7280">
              {item.role}
            </Text>
          </Box>
        </Flex>

        <Text fontWeight={400} fontSize="14px" color="#6B7280" mt="20px">
          {item.description}
        </Text>

        <Flex mt="20px">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={item.icon} alt="star" />
          ))}
        </Flex>
      </Box>
    ))}
  </SimpleGrid>
</Box>

    </>
  );
};

export default Testimonails;
