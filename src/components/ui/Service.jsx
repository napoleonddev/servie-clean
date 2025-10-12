import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const Service = () => {

  const services = [
    {
      icon: <Image src="/home.png" />,
      title: "Home Cleaning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin ut lectus sed ut. Enim egestas enim id duis.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/buildings.png" />,
      title: "Office Cleaning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin ut lectus sed ut. Enim egestas enim id duis.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/painter.png" />,
      title: "Painter Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin ut lectus sed ut. Enim egestas enim id duis.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/carpenter.png" />,
      title: "Carpenter Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin ut lectus sed ut. Enim egestas enim id duis.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/electrician.png" />,
      title: "Electrician Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin ut lectus sed ut. Enim egestas enim id duis.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/plumber.png" />,
      title: "Plumber Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem sagittis, proin ut lectus sed ut. Enim egestas enim id duis.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
  ];

  return (
    <Box p={{ base: '20px', md: "60px" }}>
      <Text fontWeight={600} fontSize={{ base: '28px', md: '48px' }} textAlign={{ base: 'center', md: 'left' }}>Discover Our Range of Services</Text>
      <Text fontWeight={400} fontSize={'18px'} textAlign={{ base: 'center', md: 'left' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
        sagittis, proin ut lectus sed ut. Enim egestas enim id duis.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap='40px' my='60px'>
        {
          services.map((service) => (
            <Box key={service.title} borderRadius="16px" border={'1px solid #DFDFDF'} p={4} mb={4}>
              <Box display="flex" alignItems="center">
                <Flex align={'center'} justify={'center'} w='50px' h='50px' className="green" borderRadius="50%">
                  {service.icon}
                </Flex>
                <Text fontWeight={600} fontSize={'24px'} ml={4}>{service.title}</Text>
              </Box>
              <Text fontWeight={400} fontSize={'16px'} mt={2}>{service.description}</Text>
              <Box display="flex" alignItems="center" mt={4} gap='10px'>
                <Text fontWeight={600}>{service.tag}</Text>
                <Box p='15px' borderRadius="50%" border={'1px solid #DFDFDF'}>
                  {service.icon2}
                </Box>
              </Box>
            </Box>
          ))
        }
      </SimpleGrid>
    </Box>
  );
};

export default Service;
