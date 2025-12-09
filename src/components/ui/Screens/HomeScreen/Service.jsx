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

const Service = ({onGetStarted}) => {
  const services = [
    {
      icon: <Image src="/home.png" />,
      title: "Home Cleaning",
      description:
        "A comprehensive cleaning service that covers various areas of the home. It includes tasks such as dusting surfaces, vacuuming or sweeping floors, cleaning bathrooms, and tidying up living spaces. The aim is to create a clean and organized living environment by addressing different aspects of the home.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/buildings.png" />,
      title: "Office Cleaning",
      description:
        "Dusting and Wiping surfaces. Removal of cobwebs from ceiling. Vacuuming and mopping floors. Cleaning office furniture. Emptying trash bins. Sanitising high-touch surfaces.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/painter.png" />,
      title: "Facility Management",
      description:
        "Let us take the stress off you in the management of your facilities. We are able to assist your business with everything facility management providing services such as building and common area maintenance and cleaning, public facility maintenance and restroom cleaning.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/carpenter.png" />,
      title: "Pre-construction Cleaning",
      description:
        "Remove any remaining nails or screws from studs or ceiling joists. Brush ceiling, studs and exterior walls with a bristle broom or hand brush to remove all invisible insulation and pieces of drywall and loosen mold spores. Work from top to bottom.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/electrician.png" />,
      title: "Post Construction Clean",
      description:
        "Thorough cleaning of all surfaces,Dust removal from ceilings, walls, and fixtures.Cleaning of spill, scuff, and other building splashes,Cleaning windows and glass,Polishing and sanitising surfaces Final inspection for any remaining debris.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
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
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="40px" my="60px">
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
              bgColor="#98b278"
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
