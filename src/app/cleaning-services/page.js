import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Table, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const CleaningService = () => {
  const item1 = [
    {
      id: 1,
      name: "Vacuuming",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 2,
      name: "Mopping",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 3,
      name: "Emptying bins",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 4,
      name: "Wiping surfaces",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 5,
      name: "Dusting",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
  ];

  const item2 = [
    {
      id: 1,
      name: "Skirting Boards",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 2,
      name: "Ceiling Fans",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 3,
      name: "Shelves",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 4,
      name: "Outside Cabinets",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 5,
      name: "Inside Cabinets (must be emptied)",
      category: "",
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 5,
      name: "Blinds",
      category: "",
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 5,
      name: "Inside Windows and Tracks",
      category: "",
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 5,
      name: "Wall Marks",
      category: "",
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 5,
      name: "Exhaust Fans",
      category: "",
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
  ];

  const item3 = [
    {
      id: 1,
      name: "Toilet",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 2,
      name: "Shower / Bath",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 3,
      name: "Sinks",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
    {
      id: 4,
      name: "Mirrors",
      category: <FaCheck color="#98b278" size={"30px"} />,
      price: <FaCheck color="#98b278" size={"30px"} />,
    },
  ];

  return (
    <>
      <Header />
      <Box px="60px">
        <Text
          fontSize={{ base: "20px", md: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
          color={"#98b278"}
          textAlign={"center"}
        >
          Services
        </Text>
        <Text>
          We can provide domestic cleaning at a standard, deep or vacate level.
          We have provided a comprehensive table below outlining the differences
          between the 3 services. This applies to "by size" cleans only. For
          hourly cleaning, we focus on your specified areas or clean for the
          booked duration.
        </Text>
        <Text my="20px">
          All cleans can be booked as once-off or recurring. Recurring jobs are
          either weekly, fortnightly or monthly and receive a further 10%
          discount on once-off cleans.
        </Text>
        <Text
          fontSize={{ base: "16px", md: "30px" }}
          color={"#98b278"}
          textAlign={"center"}
        >
          Compare our services to see what best fits your needs.
        </Text>
        <Box mt="20px">
          <Table.Root size={"lg"}>
            <Table.Header>
              <Table.Row bgColor={"#fff"}>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }}>
                  Cleaning Tasks (All Rooms)
                </Table.ColumnHeader>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }} textAlign="center">
                  Standard Cleaning
                </Table.ColumnHeader>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }} textAlign="center">
                  Deep/Vacate Cleaning
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {item1.map((item) => (
                <Table.Row key={item.id} bgColor={"#fff"}>
                  <Table.Cell fontSize={{ base: "13px", lg: "18px" }} py="10px">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.category}
                    </Box>
                  </Table.Cell>
                  <Table.Cell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.price}
                    </Box>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
        <Box mt="60px">
          <Table.Root size={"lg"}>
            <Table.Header>
              <Table.Row bgColor={"#fff"}>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }}>
                  Surfaces & Fixtures (All Rooms)
                </Table.ColumnHeader>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }} textAlign="center">
                  Standard Cleaning
                </Table.ColumnHeader>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }} textAlign="center">
                  Deep/Vacate Cleaning
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {item2.map((item) => (
                <Table.Row key={item.id} bgColor={"#fff"}>
                  <Table.Cell fontSize={{ base: "13px", lg: "18px" }} py="10px">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.category}
                    </Box>
                  </Table.Cell>
                  <Table.Cell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.price}
                    </Box>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
        <Box mt="60px">
          <Table.Root size={"lg"}>
            <Table.Header>
              <Table.Row bgColor={"#fff"}>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }}>
                  Bathroom / Laundry
                </Table.ColumnHeader>
                <Table.ColumnHeader color={'#000'} fontSize={{ base: "13px", lg: "18px" }} textAlign="center">
                  Standard Cleaning
                </Table.ColumnHeader>
                <Table.ColumnHeader color={'#000'}            fontSize={{ base: "13px", lg: "18px" }} textAlign="center">
                  Deep/Vacate Cleaning
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body bgColor={"#fff"}>
              {item3.map((item) => (
                <Table.Row key={item.id} bgColor={"#fff"}>
                  <Table.Cell fontSize={{ base: "13px", lg: "18px" }} py="10px">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.category}
                    </Box>
                  </Table.Cell>
                  <Table.Cell>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.price}
                    </Box>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CleaningService;
