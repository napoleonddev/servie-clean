import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import React from "react";

const Testimonails = ({ toDisp }) => {
  const testimonials = [
    {
      name: "Steve",
      role: "Managing Director",
      description:
        "Outstanding service! The team was professional, efficient, and delivered exactly what I needed on time.",
      rating: 5,
    },
    {
      name: "Georgie",
      role: "CEO, BrightTech",
      description:
        "Their attention to detail and commitment to quality are unmatched. I’ll definitely work with them again.",
      rating: 4,
    },
    {
      name: "Mervyn",
      role: "Entrepreneur",
      description:
        "Exceptional experience from start to finish. The project exceeded my expectations in every way.",
      rating: 5,
    },
    {
      name: "Robert",
      role: "Head of Sales",
      description:
        "The team’s expertise and friendly approach made the entire process smooth and stress-free.",
      rating: 3,
    },
    {
      name: "Mona",
      role: "Homeowner",
      description:
        "Reliable, skilled, and responsive — I couldn’t be happier with the results. Highly recommended!",
      rating: 4,
    },
    {
      name: "Jason",
      role: "Global Director",
      description:
        "A truly professional team that delivers top-notch service every time. Excellent communication throughout.",
      rating: 5,
    },
  ];

  return (
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
        Hear from our satisfied clients about their experiences with our reliable,
        high-quality services.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" my="60px">
        {testimonials.map((item) => (
          <Box
            key={item.name}
            p="30px"
            borderRadius="16px"
            border="1px solid #DFDFDF"
            bg="white"
            _hover={{
              boxShadow: "lg",
              transform: "translateY(-4px)",
              transition: "all 0.3s ease",
            }}
          >
            <Text fontWeight={700} fontSize="16px" color="#04090D">
              {item.name}
            </Text>

            <Text fontWeight={400} fontSize="14px" color="#6B7280" mt="20px">
              {item.description}
            </Text>

            {/* ⭐ Rating */}
            <Flex mt="20px">
              {[...Array(5)].map((_, i) =>
                i < item.rating ? (
                  <FaStar key={i} color="#F59E0B" />
                ) : (
                  <FaRegStar key={i} color="#F59E0B" />
                )
              )}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonails;
