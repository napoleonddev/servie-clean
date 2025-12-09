"use client";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </Heading>

        <VStack align="stretch" spacing={8}>
          {/* Section 1 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              1. Introduction
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website or services.
              By accessing our platform, you agree to the terms outlined in this
              policy.
            </Text>
          </Box>

          {/* Section 2 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              2. Information We Collect
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              We may collect personal information such as your name, email
              address, phone number, and payment details. Additionally, we
              automatically gather technical data such as IP address, device
              type, and browsing activity.
            </Text>
          </Box>

          {/* Section 3 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              3. How We Use Your Information
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              Your information is used to provide and improve our services,
              process payments, communicate with you, personalize your
              experience, and ensure platform security.
            </Text>
          </Box>

          {/* Section 4 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              4. Sharing of Information
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              We do not sell your personal information. We may share data with
              trusted third-party partners such as payment processors, service
              providers, or analytics platforms—only when necessary to operate
              the service.
            </Text>
          </Box>

          {/* Section 5 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              5. Data Security
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              We implement industry-standard security measures to protect your
              data. However, no system is completely secure, and we cannot
              guarantee absolute protection.
            </Text>
          </Box>

          {/* Section 6 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              6. Your Rights
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              You may request access to, correction of, or deletion of your
              personal data at any time. You may also opt out of marketing
              communications.
            </Text>
          </Box>

          {/* Section 7 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              7. Changes to This Policy
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with a revised “Last Updated”
              date.
            </Text>
          </Box>

          {/* Section 8 */}
          <Box>
            <Heading as="h2" size="md" mb="3">
              8. Contact Us
            </Heading>
            <Text lineHeight="tall" color="gray.700">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
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
