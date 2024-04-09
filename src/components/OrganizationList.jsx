import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const organizations = [
  {
    id: 1,
    name: "Red Cross",
    description: "Provides emergency assistance, disaster relief, and disaster preparedness education. (Nonprofit)",
    packages: [
      { id: 1, name: "Basic Relief Package", description: "Provides essential supplies for disaster victims", amount: 50 },
      { id: 2, name: "Emergency Shelter Package", description: "Provides temporary housing for displaced families", amount: 100 },
    ],
  },
  {
    id: 2,
    name: "UNICEF",
    description: "Works in over 190 countries to save children's lives, defend their rights, and help them fulfill their potential. (Nonprofit)",
    packages: [
      { id: 1, name: "Child Survival Package", description: "Provides essential health supplies for children", amount: 25 },
      { id: 2, name: "Education Package", description: "Provides school supplies and learning materials", amount: 50 },
    ],
  },
  {
    id: 3,
    name: "World Wildlife Fund",
    description: "Works to conserve nature and reduce the most pressing threats to the diversity of life on Earth. (Nonprofit)",
    packages: [
      { id: 1, name: "Adopt an Animal", description: "Symbolically adopt an endangered animal", amount: 50 },
      { id: 2, name: "Acre Adoption", description: "Help protect an acre of habitat", amount: 100 },
    ],
  },
];

const OrganizationList = ({ searchParams }) => {
  const filteredOrganizations = organizations.filter((org) => {
    if (searchParams.geography && !org.geography.toLowerCase().includes(searchParams.geography.toLowerCase())) {
      return false;
    }
    if (searchParams.type && org.type !== searchParams.type) {
      return false;
    }
    return true;
  });
  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Organizations
        </Heading>
        {filteredOrganizations.map((org) => (
          <Box key={org.id} p={4} shadow="md" borderWidth="1px">
            <Heading as="h2" size="xl">
              {org.name}
            </Heading>
            <Text mt={4}>{org.description}</Text>
            <VStack mt={4} align="stretch" spacing={2}>
              <Text fontWeight="bold">Donation Packages:</Text>
              {org.packages.map((pkg) => (
                <Link key={pkg.id} to={`/donate/${org.id}/${pkg.id}`}>
                  <Box p={2} borderWidth={1}>
                    <Text fontWeight="bold">{pkg.name}</Text>
                    <Text fontSize="sm">{pkg.description}</Text>
                    <Text fontSize="sm" color="gray.500">
                      Amount: ${pkg.amount}
                    </Text>
                  </Box>
                </Link>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default OrganizationList;
