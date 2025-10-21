import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Guide from "@/components/ui/Screens/AboutScreen/Guide";
import Hero from "@/components/ui/Screens/AboutScreen/Hero";
import StatisticsSection from "@/components/ui/StatisticsSection";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function About() {

    const aboutStats = [
    { id: 1, label: "Years Completed", value: 15, color: "#98b278" },
    { id: 2, label: "Satisfied Customers", value: 12000, color: "#98b278" },
    { id: 3, label: "Professional Teams", value: 120, color: "#98b278" },
    { id: 4, label: "Cleaning Services", value: 250, color: "#98b278" },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Guide />
      <StatisticsSection statsData={aboutStats} bg="#f8f9fa" textColor="#000" />
      <Box px='60px' my='20px'>
        <Text fontWeight={700} fontSize={{ base: "25px", md: "45px" }} textAlign={{ base: 'center', md: 'left' }}  color="#04090D" mb='30px'>How It Works</Text>
        <Box>
          {
            [
              {
                title: "Sign Up",
                description: "Create an account to get started with our services.",
                icon: "diag_arrow.png"
              },
              {
                title: "Create Profile",
                description: "Create a profile to personalize your experience.",
                icon: "diag_arrow.png"
              },
              {
                title: "Browse Nearby Service",
                description: "Find services around you.",
                icon: "diag_arrow.png"
              },
              {
                title: "Book Service",
                description: "Book a service that suits your needs.",
                icon: "diag_arrow.png"
              },
            ].map((item) =>(
              <>
                <Flex key={item.title} justify={'space-between'} align={'center'} direction={{ base: 'column', md: 'row' }}>
                  <Text fontWeight={600}>{item.title}</Text>
                  <Flex direction={{ base: 'column', md: 'row' }} align={'center'} gap={'15px'}>
                    <Text textAlign={'center'}>{item.description}</Text>
                    <Box bgColor={'#fff'} w='40px' h='40px' borderRadius={'50%'} border={'1px solid #98b278'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                      <Image src={item.icon} alt={item.title} />
                    </Box>
                  </Flex>
                </Flex>
                <Box bgColor={'#DFDFDF'} w='100%' h='1px' mt='10px' mb='20px' />
              </>
            ))
          }
        </Box>
      </Box>
      <Footer />
    </>
  )
}