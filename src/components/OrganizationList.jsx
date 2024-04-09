import React from "react";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const organizations = [
  { id: 1, name: "Red Cross", description: "Provides emergency assistance, disaster relief, and disaster preparedness education.", signUpLink: "/signup/red-cross" },
  { id: 2, name: "UNICEF", description: "Works in over 190 countries to save children's lives, defend their rights, and help them fulfill their potential.", signUpLink: "/signup/unicef" },
  { id: 3, name: "World Wildlife Fund", description: "Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth.", signUpLink: "/signup/wwf" },
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
            <Button as={Link} to={org.signUpLink} colorScheme="blue" mt={4}>
              Sign Up
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default OrganizationList;
