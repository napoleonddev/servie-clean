import { Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Featured = () => {
  const featuredServices = [
    {
      img: "/serv-img1.png",
      icon: "/star.png",
      numRev: "130",
      title: "Complete Kitchen Cleaning",
      icon2: <Image src="/diag_arrow.png" />,
      userName: "Ronald Mark",
      price: "$150",
      prevPrice: "$180",
    },
    {
      img: "/serv-img2.png",
      icon: "/star.png",
      numRev: "2.1K",
      title: "Complete Kitchen Cleaning",
      icon2: <Image src="/diag_arrow.png" />,
      userName: "Annette Black",
      price: "$150",
      prevPrice: "$180",
    },
    {
      img: "/serv-img3.png",
      icon: "/star.png",
      numRev: "210",
      title: "Complete Kitchen Cleaning",
      icon2: <Image src="/diag_arrow.png" />,
      userName: "Jacob Jones",
      price: "$150",
      prevPrice: "$180",
    },
    {
      img: "/serv-img4.png",
      icon: "/star.png",
      numRev: "1.2K",
      title: "Complete Kitchen Cleaning",
      icon2: <Image src="/diag_arrow.png" />,
      userName: "Theresa Webb",
      price: "$150",
      prevPrice: "$180",
    },
    {
      img: "/serv-img5.png",
      icon: "/star.png",
      numRev: "1.6K",
      title: "Complete Kitchen Cleaning",
      icon2: <Image src="/diag_arrow.png" />,
      userName: "Marvin Mckinney",
      price: "$150",
      prevPrice: "$180",
    },
    {
      img: "/serv-img6.png",
      icon: "/star.png",
      numRev: "280",
      title: "Complete Kitchen Cleaning",
      icon2: <Image src="/diag_arrow.png" />,
      userName: "Jenny Wilson",
      price: "$150",
      prevPrice: "$180",
    },
  ];

  return (
    <>
      <Box p="60px">
        <Text
          fontWeight={600}
          fontSize={{ base: "28px", md: "48px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Our Featured Services
        </Text>
        <Text
          fontWeight={400}
          fontSize={"18px"}
          textAlign={{ base: "center", md: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
          sagittis, proin ut lectus sed ut. Enim egestas enim id duis.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" my="60px">
          {featuredServices.map((service) => (
            <Box key={service.img}>
              <Box>
                <Image
                  src={service.img}
                  borderRadius="16px 16px 0px 0px"
                  w="400px"
                  h="280px"
                />
              </Box>
              <Box
                borderRadius="0px 0px 16px 16px"
                border={"1px solid #DFDFDF"}
                p={4}
                mb={4}
              >
                <VStack align={"start"}>
                  <HStack>
                    <Image src={service.icon} />
                    <Image src={service.icon} />
                    <Image src={service.icon} />
                    <Image src={service.icon} />
                    <Image src={service.icon} />
                    <Text fontWeight={400} fontSize={"14px"} color="#04090D">
                      ({service.numRev} Reviews)
                    </Text>
                  </HStack>
                  <HStack justify={"space-between"} w="100%">
                    <Text fontWeight={700} fontSize={"20px"} color={'#04090D'}>
                      {service.title}
                    </Text>
                    <Box
                      p="15px"
                      borderRadius="50%"
                      border={"1px solid #DFDFDF"}
                    >
                      {service.icon2}
                    </Box>
                  </HStack>
                  <Box border={"1px solid #DFDFDF"} w='full' h='1px' />
                  <Flex gap={'40px'} justify={"end"}>
                    <HStack>
                      <Box w='40px' h='40px' borderRadius='50%' border={"1px solid #DFDFDF"}></Box>
                      <Text fontWeight={700} fontSize={"16px"} color="#04090D">
                        {service.userName}
                      </Text>
                    </HStack>
                    <HStack justify={'flex-end'}>
                      <Text fontWeight={600} fontSize={"16px"} color="#04090D">
                        {service.price}
                      </Text>
                      <Text fontWeight={400} fontSize={"16px"} color="#a1a1a1" textDecoration={'line-through'}>
                        {service.prevPrice}
                      </Text>
                    </HStack>
                  </Flex>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Featured;
