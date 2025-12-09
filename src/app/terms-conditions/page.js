"use client";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function TermsAndConditions() {
  return (
    <>
    <Header />
    <Box
      px={{ base: "20px", md: "60px", lg: "120px" }}
      py={{ base: "40px", md: "60px" }}
      maxW="1200px"
      mx="auto"
    >
      {/* Page Title */}
      <Heading
        as="h1"
        size="xl"
        mb="8"
        textAlign={{ base: "center", md: "center" }}
      >
        Terms & Conditions
      </Heading>

      <VStack align="stretch" spacing={8}>
        {/* Section 1 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            1. Acceptance of Terms
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            By accessing or using our website and services, you agree to comply
            with and be bound by these Terms & Conditions. If you do not agree,
            you must discontinue use immediately.
          </Text>
        </Box>

        {/* Section 2 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            2. Services Provided
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            We provide cleaning and related services as described on our
            platform. Service availability, pricing, and offerings may change at
            any time without prior notice.
          </Text>
        </Box>

        {/* Section 3 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            3. User Responsibilities
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            You agree to provide accurate information, maintain the security of
            your account, and refrain from using the platform for unlawful
            activities. You are responsible for ensuring access to your property
            for scheduled cleaning services.
          </Text>
        </Box>

        {/* Section 4 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            4. Booking & Payments
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            All bookings must be paid in full through our approved payment
            methods. Prices listed on the platform may vary depending on service
            type, property size, and additional extras selected.
          </Text>
        </Box>

        {/* Section 5 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            5. Cancellations & Refunds
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            Cancellations must be made within the time frame specified on our
            website. Refunds, when applicable, will be processed according to our
            refund policy. Late cancellations may incur charges.
          </Text>
        </Box>

        {/* Section 6 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            6. Limitation of Liability
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            We are not liable for damages arising from misuse of the service,
            delays, or circumstances beyond our control. Our liability is
            limited to the amount paid for the specific service rendered.
          </Text>
        </Box>

        {/* Section 7 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            7. Termination
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            We reserve the right to suspend or terminate your access to the
            service if you violate these Terms & Conditions or engage in harmful
            activities.
          </Text>
        </Box>

        {/* Section 8 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            8. Changes to These Terms
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            We may update these Terms & Conditions at any time. Continued use of
            the service after changes indicates your acceptance of the updated
            terms.
          </Text>
        </Box>

        {/* Section 9 */}
        <Box>
          <Heading as="h2" size="md" mb="3">
            9. Contact Information
          </Heading>
          <Text lineHeight="tall" color="gray.700">
            For questions related to these Terms & Conditions, please contact us
            at:
            <br />
            <strong>info@cleaniecare.com.au</strong>
          </Text>
        </Box>

        {/* Last updated */}
        <Text
          fontSize="sm"
          color="gray.500"
          textAlign={{ base: "center", md: "left" }}
          mt={10}
        >
          Last Updated: January 2025
        </Text>
      </VStack>
    </Box>
    <Footer />
    </>
  );
}
