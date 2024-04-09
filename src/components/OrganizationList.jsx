import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const organizations = [
  { id: 1, name: "Red Cross", description: "Provides emergency assistance, disaster relief, and disaster preparedness education. (Nonprofit)" },
  { id: 2, name: "UNICEF", description: "Works in over 190 countries to save children's lives, defend their rights, and help them fulfill their potential. (Nonprofit)" },
  { id: 3, name: "World Wildlife Fund", description: "Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth. (Nonprofit)" },
];

const OrganizationList = () => {
  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Organizations
        </Heading>
        {organizations.map((org) => (
          <Box key={org.id} p={4} shadow="md" borderWidth="1px">
            <Heading as="h2" size="xl">
              {org.name}
            </Heading>
            <Text mt={4}>{org.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default OrganizationList;
