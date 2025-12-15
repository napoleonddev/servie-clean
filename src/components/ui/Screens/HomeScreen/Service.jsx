import {
  Button,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Service = ({ onGetStarted }) => {
  const services = [
    {
      icon: <Image src="/home.png" />,
      title: "Home Cleaning",
      description:
        "A comprehensive cleaning service that covers various areas of the home. It includes tasks such as dusting surfaces, vacuuming or sweeping floors, cleaning bathrooms, and tidying up living spaces. The aim is to create a clean and organized living environment by addressing different aspects of the home.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    // {
    //   icon: <Image src="/buildings.png" />,
    //   title: "Office Cleaning",
    //   description:
    //     "Dusting and Wiping surfaces. Removal of cobwebs from ceiling. Vacuuming and mopping floors. Cleaning office furniture. Emptying trash bins. Sanitising high-touch surfaces.",
    //   tag: "Learn More",
    //   icon2: <Image src="/diag_arrow.png" />,
    // },
    {
      icon: <Image src="/painter.png" />,
      title: "Gardening",
      description:
        "Our gardening maintenance service is designed to keep your outdoor spaces healthy, neat, and visually appealing. This includes routine tasks such as lawn mowing, weeding, pruning and trimming plants, watering, removal of garden waste, and general plant care. The goal is to promote plant health, and maintain a well-kept garden throughout the seasons.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/carpenter.png" />,
      title: "General Houshold Maintenance",
      description:
        "Our general household maintenance service helps keep your home clean, organized, and comfortable on a regular basis. This includes routine cleaning tasks such as dusting surfaces, vacuuming and mopping floors, cleaning kitchens and bathrooms, and managing light tidying.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    // {
    //   icon: <Image src="/electrician.png" />,
    //   title: "Post Construction Clean",
    //   description:
    //     "Thorough cleaning of all surfaces,Dust removal from ceilings, walls, and fixtures.Cleaning of spill, scuff, and other building splashes,Cleaning windows and glass,Polishing and sanitising surfaces Final inspection for any remaining debris.",
    //   tag: "Learn More",
    //   icon2: <Image src="/diag_arrow.png" />,
    // },
    {
      icon: <Image src="/plumber.png" />,
      title: "Gutter Cleaning",
      description:
        "Removing debris, leaves, and other obstructions from gutters and downspouts. This service is crucial for preventing water damage to the property by ensuring that rainwater can flow freely through the gutters, reducing the risk of leaks and foundation issues.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
  ];

  return (
    <Box p={{ base: "20px", md: "60px" }}>
      <Text
        fontWeight={600}
        fontSize={{ base: "28px", md: "48px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        Discover Our Range of Services
      </Text>
      <Text
        fontWeight={400}
        fontSize={"18px"}
        textAlign={{ base: "center", md: "left" }}
      >
        We’re committed to ensuring that we’ve always got someone cross-trained
        in your facility’s needs. That’s why, when life happens, you can rest
        easy knowing that you’ve got one less thing to worry about.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="40px" my="60px">
        {services.map((service) => (
          <VStack
            key={service.title}
            borderRadius="16px"
            border={"1px solid #DFDFDF"}
            p={4}
            mb={4}
            h={"320px"}
            align={"space-between"}
            justify={"start"}
          >
            <Box display="flex" alignItems="center">
              <Flex
                align={"center"}
                justify={"center"}
                w="50px"
                h="50px"
                className="green"
                borderRadius="50%"
              >
                {service.icon}
              </Flex>
              <Text fontWeight={600} fontSize={"24px"} ml={4}>
                {service.title}
              </Text>
            </Box>
            {/* <Text fontWeight={400} fontSize={'16px'} mt={2} maxH={'100px'} overflow={'scroll'}>{service.description}</Text> */}
            <Text fontWeight={400} fontSize={"14px"} mt={2}>
              {service.description}
            </Text>
            <Button
              bgColor="#000080"
              color="white"
              px="30px"
              py="10px"
              borderRadius="8px"
              fontWeight="bold"
              fontSize="16px"
              onClick={onGetStarted}
            >
              BOOK NOW
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
