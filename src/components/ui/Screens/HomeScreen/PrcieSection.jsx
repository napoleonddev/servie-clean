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
import { useRouter } from "next/navigation";
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
      { label: "2 Hours", value: "2" },
      { label: "3 Hours", value: "3" },
      { label: "4 Hours", value: "4" },
      { label: "5 Hours", value: "5" },
    ],
  });
  const framework3 = createListCollection({
    items: [
      { label: "0 Minutes", value: "0" },
      { label: "15 Minutes", value: "15" },
      { label: "30 Minutes", value: "30" },
      { label: "45 Minutes", value: "45" },
    ],
  });
  const framework4 = createListCollection({
    items: [
      { label: "Standard Clean", value: "standard" },
      { label: "Deep Clean", value: "deep" },
      { label: "Vacate Clean", value: "vacate" },
    ],
  });
  const framework5 = createListCollection({
    items: [
      { label: "Once off", value: "one-off" },
      { label: "Weekly (10% off)", value: "weekly" },
      { label: "Fortnightly (5% off)", value: "fortnightly" },
    ],
  });
  const framework6 = createListCollection({
    items: [
      { label: "1 Bedroom", value: "1" },
      { label: "2 Bedrooms", value: "2" },
      { label: "3 Bedrooms", value: "3" },
      { label: "4 Bedrooms", value: "4" },
      { label: "5 Bedrooms", value: "5" },
    ],
  });
  const framework7 = createListCollection({
    items: [
      { label: "1 Bathroom", value: "1" },
      { label: "2 Bathrooms", value: "2" },
      { label: "3 Bathrooms", value: "3" },
      { label: "4 Bathrooms", value: "4" },
      { label: "5 Bathrooms", value: "5" },
    ],
  });

  const router = useRouter();

  // Fixed pricing data based on the images
  const sizePricingData = {
    // Format: bedrooms: { bathrooms: { cleanType: price } }
    1: {
      1: { standard: 170, deep: 370, vacate: 370 },
      2: { standard: 220, deep: 420, vacate: 420 },
      3: { standard: 270, deep: 470, vacate: 470 },
      4: { standard: 320, deep: 520, vacate: 520 },
      5: { standard: 370, deep: 570, vacate: 570 },
    },
    2: {
      1: { standard: 220, deep: 420, vacate: 420 },
      2: { standard: 270, deep: 470, vacate: 470 },
      3: { standard: 320, deep: 520, vacate: 520 },
      4: { standard: 370, deep: 570, vacate: 570 },
      5: { standard: 420, deep: 620, vacate: 620 },
    },
    3: {
      1: { standard: 270, deep: 470, vacate: 470 },
      2: { standard: 320, deep: 520, vacate: 520 },
      3: { standard: 370, deep: 570, vacate: 570 },
      4: { standard: 420, deep: 620, vacate: 620 },
      5: { standard: 470, deep: 670, vacate: 670 },
    },
    4: {
      1: { standard: 320, deep: 520, vacate: 520 },
      2: { standard: 370, deep: 570, vacate: 570 },
      3: { standard: 420, deep: 620, vacate: 620 },
      4: { standard: 470, deep: 670, vacate: 670 },
      5: { standard: 520, deep: 720, vacate: 720 },
    },
    5: {
      1: { standard: 370, deep: 570, vacate: 570 },
      2: { standard: 420, deep: 620, vacate: 620 },
      3: { standard: 570, deep: 670, vacate: 670 },
      4: { standard: 620, deep: 720, vacate: 720 },
      5: { standard: 670, deep: 770, vacate: 770 },
    },
  };

  // Hourly pricing data based on the second table
  const hourlyPricingData = {
    2: {
      "one-off": 115,
      weekly: 104,
      fortnightly: 110,
    },
    3: {
      "one-off": 170,
      weekly: 153,
      fortnightly: 162,
    },
    4: {
      "one-off": 240,
      weekly: 216,
      fortnightly: 228,
    },
    5: {
      "one-off": 295,
      weekly: 265,
      fortnightly: 280,
    },
  };

  const [selectedOption, setSelectedOption] = useState("size");
  const [bedrooms, setBedrooms] = useState(["1"]);
  const [bathrooms, setBathrooms] = useState(["1"]);
  const [cleanType, setCleanType] = useState(["standard"]);
  const [frequency, setFrequency] = useState(["one-off"]);
  const [hours, setHours] = useState(["2"]);
  const [minutes, setMinutes] = useState(["0"]);
  const [currentPrice, setCurrentPrice] = useState(0);


  // Calculate price based on current selections
  const calculatePrice = () => {
    let basePrice = 0;

    if (selectedOption === "size") {
      // Size-based pricing
      const bedroom = bedrooms[0];
      const bathroom = bathrooms[0];
      const clean = cleanType[0];

      // Find the closest available configuration
      let priceConfig = sizePricingData[bedroom];

      if (!priceConfig) {
        // If bedroom not found, use the largest available
        const availableBedrooms = Object.keys(sizePricingData).map(Number);
        const maxBedroom = Math.max(...availableBedrooms);
        priceConfig = sizePricingData[maxBedroom];
      }

      // Find the closest bathroom configuration
      let availableBathrooms = Object.keys(priceConfig).map(Number);
      let selectedBathroom = parseInt(bathroom);

      // Find the closest bathroom count that exists in pricing data
      let matchedBathroom = availableBathrooms.reduce((prev, curr) => {
        return Math.abs(curr - selectedBathroom) <
          Math.abs(prev - selectedBathroom)
          ? curr
          : prev;
      });

      basePrice = priceConfig[matchedBathroom]?.[clean] || 0;
    } else {
      // Hourly pricing
      const totalHours = parseFloat(hours[0]);

      // For hourly booking, only Standard Clean is available according to the table
      // Deep and Vacate cleans are only available in size-based pricing
      if (cleanType[0] !== "standard") {
        // If user selects deep or vacate for hourly, show message or use standard
        basePrice = hourlyPricingData[totalHours]?.[frequency[0]] || 0;
      } else {
        basePrice = hourlyPricingData[totalHours]?.[frequency[0]] || 0;
      }
    }

    return basePrice;
  };

  // Update price when selections change
  useEffect(() => {
    const newPrice = calculatePrice();
    setCurrentPrice(newPrice);
  }, [
    selectedOption,
    bedrooms,
    bathrooms,
    cleanType,
    frequency,
    hours,
    minutes,
  ]);

  const handleFramework1Change = (e) => {
    const selectedValue = e.value[0];
    setSelectedOption(selectedValue);

    // Reset to appropriate defaults when switching modes
    if (selectedValue === "hour") {
      setCleanType(["standard"]); // Hourly only supports standard clean
    }
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
        flexDir={{ base: "column", md: "row" }}
      >
        <Box>
          <Select.Root
            collection={framework1}
            size={"md"}
            onValueChange={handleFramework1Change}
            defaultValue={["size"]}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={framework1.items[0].label}
                  w={{ base: "210px", md: "160px" }}
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
                <Select.Content bgColor={"#fff"}>
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
                defaultValue={["1"]}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework6.items[0].label}
                      w={{ base: "210px", md: "160px" }}
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
                    <Select.Content bgColor={"#fff"}>
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
                defaultValue={["1"]}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework7.items[0].label}
                      w={{ base: "210px", md: "160px" }}
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
                    <Select.Content bgColor={"#fff"}>
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
                defaultValue={["2"]}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework2.items[0].label}
                      w={{ base: "210px", md: "160px" }}
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
                    <Select.Content bgColor={"#fff"}>
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
                defaultValue={["0"]}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText
                      placeholder={framework3.items[0].label}
                      w={{ base: "210px", md: "160px" }}
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
                    <Select.Content bgColor={"#fff"}>
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
            defaultValue={["standard"]}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={framework4.items[0].label}
                  w={{ base: "210px", md: "160px" }}
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
                <Select.Content bgColor={"#fff"}>
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
            defaultValue={["one-off"]}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText
                  placeholder={framework5.items[0].label}
                  w={{ base: "210px", md: "160px" }}
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
                <Select.Content bgColor={"#fff"}>
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
            bgColor="#98b278"
            color="white"
            px="30px"
            py="10px"
            borderRadius="8px"
            fontWeight="bold"
            fontSize="16px"
            onClick={() => {
              // Build query params from current state
              const qp = {
                mode: selectedOption, // "size" or "hour"
                bedrooms: bedrooms[0] || "", // "1".."5"
                bathrooms: bathrooms[0] || "",
                cleanType: cleanType[0] || "",
                frequency: frequency[0] || "",
                hours: hours[0] || "",
                minutes: minutes[0] || "",
                price: currentPrice?.toString() || "0",
              };

              const queryString = Object.entries(qp)
                .map(
                  ([k, v]) =>
                    `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
                )
                .join("&");

              router.push(`/booking?${queryString}`);
            }}
          >
            ${currentPrice} BOOK NOW
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default PriceSection;
