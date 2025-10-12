import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const Team = () => {
  return (
    <>
      <Box p="60px">
        <Text
          fontWeight={600}
          fontSize={{ base: "28px", md: "48px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Meet Our Experienced Team
        </Text>
        <Text
          fontWeight={400}
          fontSize={"18px"}
          textAlign={{ base: "center", md: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
          sagittis, proin ut lectus sed ut. Enim egestas enim id duis.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap="40px" my="60px">
          {[
            {
              img: "/smith.png",
              name: "Smith Johnson",
              role: "Home Cleaning",
              icon: <Image src="/diag_arrow.png" />,
            },
            {
              img: "/annette.png",
              name: "Annette Black",
              role: "Home Cleaning",
              icon: <Image src="/diag_arrow.png" />,
            },
            {
              img: "/kristin.png",
              name: "Kristin Watson",
              role: "Home Cleaning",
              icon: <Image src="/diag_arrow.png" />,
            },
            {
              img: "/nguyen.png",
              name: "Savannah Nguyen",
              role: "Home Cleaning",
              icon: <Image src="/diag_arrow.png" />,
            },
          ].map((el) => (
            <Box key={el.name}>
              <Box
                bgColor={"#F7F7F7"}
                borderRadius="16px"
                p="20px 20px 0px 20px"
              >
                <Image src={el.img} objectFit="contain" />
              </Box>
              <Flex align={"center"} justify={'space-between'}>
                <Box>
                  <Text fontWeight={600} fontSize={"20px"} mt="12px">
                    {el.name}
                  </Text>
                  <Text fontWeight={400} fontSize={"16px"} color="gray.600">
                    {el.role}
                  </Text>
                </Box>
                <Box p="15px" borderRadius="50%" border={"1px solid #DFDFDF"}>
                  {el.icon}
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Team;
