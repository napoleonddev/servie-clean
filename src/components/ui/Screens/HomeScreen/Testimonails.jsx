import { Box, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Testimonails = () => {
  return (
    <>
      <Box p="60px">
        <Text
          fontWeight={600}
          fontSize={{ base: "28px", md: "48px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          What Our Clients Say
        </Text>
        <Text
          fontWeight={400}
          fontSize={"18px"}
          textAlign={{ base: "center", md: "left" }}
        >
          See what our clients say about their experiences with our trusted and reliable services.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" my="60px">
          {
            [
              {
                name: "Steve Smith",
                role: "Director",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                icon: "/star.png",
              },
              {
                name: "Albert Flores",
                role: "CEO",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                icon: "/star.png",
              },
              {
                name: "Robert Fox",
                role: "Businessman",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                icon: "/star.png",
              },
              {
                name: "Darlene Robertson",
                role: "President of Sales",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                icon: "/star.png",
              },
              {
                name: "Kathryn Murphy",
                role: "Housewife",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                icon: "/star.png",
              },
              {
                name: "Marvin McKinney",
                role: "Global Director",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
                icon: "/star.png",
              },
            ].map((item) => (
              <Box key={item.name} p="30px" borderRadius="16px" border={"1px solid #DFDFDF"}>
                <Flex gap={'20px'}>
                  <Box w='40px' h='40px' borderRadius='50%' border={"1px solid #DFDFDF"}></Box>
                  <Box>
                    <Text fontWeight={700} fontSize={"16px"} color="#04090D">{item.name}</Text>
                    <Text fontWeight={400} fontSize={"14px"} color="#6B7280">{item.role}</Text>
                  </Box>
                </Flex>
                <Text fontWeight={400} fontSize={"14px"} color="#6B7280" mt="20px">{item.description}</Text>
                <Flex mt="20px">
                  <img src={item.icon} alt="star" />
                  <img src={item.icon} alt="star" />
                  <img src={item.icon} alt="star" />
                  <img src={item.icon} alt="star" />
                  <img src={item.icon} alt="star" />
                </Flex>
              </Box>
            ))
          }
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Testimonails;
