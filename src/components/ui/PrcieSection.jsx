"use client";

import {
  Button,
  createListCollection,
  Flex,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const PriceSection = () => {
  const framework1 = createListCollection({
    items: [
      { label: "By Size", value: "size" },
      { label: "By Hour", value: "hour" },
      // { label: "Commercial", value: "commercial" },
    ],
  });
  const framework2 = createListCollection({
    items: [
      { label: "1 Hour", value: "1" },
      { label: "2 Hours", value: "2" },
      { label: "3 Hours", value: "3" },
      { label: "4 Hours", value: "4" },
      { label: "5 Hours", value: "5" },
    ],
  });
  const framework3 = createListCollection({
    items: [
      { label: "15 Minutes", value: "15" },
      { label: "30 Minutes", value: "30" },
    ],
  });
  const framework4 = createListCollection({
    items: [
      { label: "Standard Clean", value: "standard" },
      { label: "Vacate Clean", value: "vacate" },
      { label: "Deep Clean", value: "deep" },
    ],
  });
  const framework5 = createListCollection({
    items: [
      { label: "Once off", value: "one-off" },
      { label: "Weekly (10% off)", value: "weekly" },
      { label: "Fornightly (10% off)", value: "fortnightly" },
      { label: "Monthly (5% off)", value: "monthly" },
    ],
  });
  const framework6 = createListCollection({
    items: [
      { label: "1 Bedroom", value: "1" },
      { label: "2 Bedrooms", value: "2" },
      { label: "3 Bedrooms", value: "3" },
      { label: "4 Bedrooms", value: "4" },
      { label: "5 Bedrooms", value: "5+" },
      { label: "6 Bedrooms", value: "5+" },
    ],
  });
  const framework7 = createListCollection({
    items: [
      { label: "1 Bathroom", value: "1" },
      { label: "2 Bathrooms", value: "2" },
      { label: "3 Bathrooms", value: "3" },
      { label: "4 Bathrooms", value: "4" },
      { label: "5 Bathrooms", value: "5+" },
      { label: "6 Bathrooms", value: "5+" },
    ],
  });

  const pricingData = {
    1: { bathrooms: { 1: { standard: 170, deep: 370, vacate: 370 } } },
    2: { bathrooms: { 1: { standard: 210, deep: 410, vacate: 410 } } },
    3: { bathrooms: { 2: { standard: 230, deep: 440, vacate: 440 } } },
    4: { bathrooms: { 1: { standard: 250, deep: 470, vacate: 470 } } },
    5: { bathrooms: { 2: { standard: 270, deep: 490, vacate: 490 } } },
    6: { bathrooms: { 2: { standard: 300, deep: 520, vacate: 520 } } },
    7: { bathrooms: { "3+": { standard: 350, deep: 580, vacate: 580 } } },
  };

  const [selectedOption, setSelectedOption] = useState('size');
  const [bedrooms, setBedrooms] = useState(['1']);
  const [bathrooms, setBathrooms] = useState(['1']);
  const [cleanType, setCleanType] = useState(['standard']);
  const [frequency, setFrequency] = useState(['one-off']);
  const [hours, setHours] = useState(['1']);
  const [minutes, setMinutes] = useState(['0']);
  const [currentPrice, setCurrentPrice] = useState(0);

  // Calculate price based on current selections
  const calculatePrice = () => {
    let basePrice = 0;

    if (selectedOption === 'size') {
      const bedroom = bedrooms[0];
      const bathroom = bathrooms[0];
      const clean = cleanType[0];
      
      // Get base price from pricing data
      basePrice = pricingData[bedroom]?.bathrooms[bathroom]?.[clean] || 0;
    } else {
      // Calculate hourly prices
      const hourlyRate = 65; // $65 per hour
      const totalHours = parseFloat(hours[0]) + parseFloat(minutes[0]);
      basePrice = Math.round(totalHours * hourlyRate);
      
      // Apply clean type multiplier for hourly booking
      if (cleanType[0] === 'deep' || cleanType[0] === 'vacate') {
        basePrice = Math.round(basePrice * 1.5);
      }
    }
    
    // Apply frequency discount
    let finalPrice = basePrice;
    if (frequency[0] === 'weekly' || frequency[0] === 'fortnightly') {
      finalPrice = basePrice * 0.9; // 10% off
    } else if (frequency[0] === 'monthly') {
      finalPrice = basePrice * 0.95; // 5% off
    }
    
    return Math.round(finalPrice);
  };

  // Update price when selections change
  useEffect(() => {
    const newPrice = calculatePrice();
    setCurrentPrice(newPrice);
  }, [selectedOption, bedrooms, bathrooms, cleanType, frequency, hours, minutes]);

  const handleFramework1Change = (e) => {
    const selectedValue = e.value[0];
    setSelectedOption(selectedValue);
  };

  const handleBedroomsChange = (e) => {
    setBedrooms(e.value);
  };

  const handleBathroomsChange = (e) => {
    setBathrooms(e.value);
  };

  const handleHoursChange = (e) => {
    setHours(e.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.value);
  };

  const handleCleanTypeChange = (e) => {
    setCleanType(e.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.value);
  };

  return (
    <Box mt="80px" bgColor={"#36B8640D"} pb="20px" px="60px">
      <Text fontSize={"40px"} fontWeight={600}>
        Book Your Clean Today:
      </Text>
      <Flex
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.15)"}
        gap={"20px"}
        align={"center"}
        bgColor={"#fff"}
        p="12px"
        borderRadius={"16px"}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box>
          <Select.Root
            collection={framework1}
            size={"md"}
            onValueChange={handleFramework1Change}
            defaultValue={['size']}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={framework1.items[0].label}
                  w={{ base: '210px', md: "160px" }}
                  p="8px"
                  color={"#000"}
                />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {framework1.items.map((el) => (
                    <Select.Item item={el} key={el.label} p={"10px"}>
                      {el.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>
        
        {selectedOption === "size" && (
          <>
            <Box>
              <Select.Root 
                collection={framework6} 
                size={"md"}
                onValueChange={handleBedroomsChange}
                defaultValue={['1']}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework6.items[0].label}
                      w={{ base: '210px', md: "160px" }}
                      p="8px"
                      color={"#000"}
                    />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {framework6.items.map((el) => (
                        <Select.Item item={el} key={el.label} p={"10px"}>
                          {el.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Box>
            <Box>
              <Select.Root 
                collection={framework7} 
                size={"md"}
                onValueChange={handleBathroomsChange}
                defaultValue={['1']}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework7.items[0].label}
                      w={{ base: '210px', md: "160px" }}
                      p="8px"
                      color={"#000"}
                    />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {framework7.items.map((el) => (
                        <Select.Item item={el} key={el.label} p={"10px"}>
                          {el.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Box>
          </>
        )}
        
        {selectedOption === "hour" && (
          <>
            <Box>
              <Select.Root 
                collection={framework2} 
                size={"md"}
                onValueChange={handleHoursChange}
                defaultValue={['1']}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework2.items[0].label}
                      w={{ base: '210px', md: "160px" }}
                      p="8px"
                      color={"#000"}
                    />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {framework2.items.map((el) => (
                        <Select.Item item={el} key={el.label} p={"10px"}>
                          {el.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Box>
            <Box>
              <Select.Root 
                collection={framework3} 
                size={"md"}
                onValueChange={handleMinutesChange}
                defaultValue={['0']}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework3.items[0].label}
                      w={{ base: '210px', md: "160px" }}
                      p="8px"
                      color={"#000"}
                    />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {framework3.items.map((el) => (
                        <Select.Item item={el} key={el.label} p={"10px"}>
                          {el.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Box>
          </>
        )}
        
        <Box>
          <Select.Root 
            collection={framework4} 
            size={"md"}
            onValueChange={handleCleanTypeChange}
            defaultValue={['standard']}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={framework4.items[0].label}
                  w={{ base: '210px', md: "160px" }}
                  p="8px"
                  color={"#000"}
                />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {framework4.items.map((el) => (
                    <Select.Item item={el} key={el.label} p={"10px"}>
                      {el.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>
        
        <Box>
          <Select.Root 
            collection={framework5} 
            size={"md"}
            onValueChange={handleFrequencyChange}
            defaultValue={['one-off']}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={framework5.items[0].label}
                  w={{ base: '210px', md: "160px" }}
                  p="8px"
                  color={"#000"}
                />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {framework5.items.map((el) => (
                    <Select.Item item={el} key={el.label} p={"10px"}>
                      {el.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>
        
        <HStack>
          <Button
            bgColor="#36B864" 
            color="white" 
            px="30px" 
            py="10px" 
            borderRadius="8px"
            fontWeight="bold"
            fontSize="16px"
            _hover={{ bgColor: "#2E9C54" }}
          >
            ${currentPrice} BOOK NOW
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PriceSection;
