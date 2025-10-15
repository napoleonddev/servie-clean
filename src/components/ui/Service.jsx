import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const Service = () => {

  const services = [
    {
      icon: <Image src="/home.png" />,
      title: "Home Cleaning",
      description: "A comprehensive cleaning service that covers various areas of the home. It includes tasks such as dusting surfaces, vacuuming or sweeping floors, cleaning bathrooms, and tidying up living spaces. The aim is to create a clean and organized living environment by addressing different aspects of the home.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/buildings.png" />,
      title: "Office Cleaning",
      description: "Dusting and Wiping surfaces. Removal of cobwebs from ceiling. Vacuuming and mopping floors. Cleaning office furniture. Emptying trash bins. Sanitising high-touch surfaces.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/painter.png" />,
      title: "Painter Service",
      description: "A painter service provides professional interior and exterior painting for homes, offices, and buildings. Services typically include surface preparation, color consultation, priming, and applying high-quality paints or finishes to enhance and protect surfaces.",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/carpenter.png" />,
      title: "Carpenter Service",
      description: "A carpenter service offers skilled woodworking and construction work, including building, repairing, and installing furniture, cabinets, doors, and other wooden structures. They ensure precise craftsmanship, durable results, and custom designs to meet client needs.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/electrician.png" />,
      title: "Electrician Service",
      description: "An electrician service provides expert installation, repair, and maintenance of electrical systems. This includes wiring, lighting, circuit breakers, outlets, and other electrical components to ensure safety, efficiency, and reliable power in homes and businesses",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
    {
      icon: <Image src="/plumber.png" />,
      title: "Plumber Service",
      description: "A plumber service specializes in installing, repairing, and maintaining water and drainage systems. Services include fixing leaks, unclogging drains, installing pipes, faucets, and fixtures, and ensuring efficient water flow and plumbing safety in homes and buildings.",
      tag: "Learn More",
      icon2: <Image src="/diag_arrow.png" />,
    },
  ];

  return (
    <Box p={{ base: '20px', md: "60px" }}>
      <Text fontWeight={600} fontSize={{ base: '28px', md: '48px' }} textAlign={{ base: 'center', md: 'left' }}>Discover Our Range of Services</Text>
      <Text fontWeight={400} fontSize={'18px'} textAlign={{ base: 'center', md: 'left' }}>
        We’re committed to ensuring that we’ve always got someone cross-trained in your facility’s needs. That’s why, when life happens, you can rest easy knowing that you’ve got one less thing to worry about.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap='40px' my='60px'>
        {
          services.map((service) => (
            <Box key={service.title} borderRadius="16px" border={'1px solid #DFDFDF'} p={4} mb={4} maxH={'250px'}>
              <Box display="flex" alignItems="center">
                <Flex align={'center'} justify={'center'} w='50px' h='50px' className="green" borderRadius="50%">
                  {service.icon}
                </Flex>
                <Text fontWeight={600} fontSize={'24px'} ml={4}>{service.title}</Text>
              </Box>
              <Text fontWeight={400} fontSize={'16px'} mt={2} maxH={'100px'} overflow={'scroll'}>{service.description}</Text>
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
