import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";

const OrganizationSearch = ({ onSearch }) => {
  const [geography, setGeography] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ geography, type });
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="geography">
          <FormLabel>Geography</FormLabel>
          <Input type="text" value={geography} onChange={(e) => setGeography(e.target.value)} />
        </FormControl>
        <FormControl id="type" mt={4}>
          <FormLabel>Organization Type</FormLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All</option>
            <option value="disaster_relief">Disaster Relief</option>
            <option value="child_welfare">Child Welfare</option>
            <option value="wildlife_conservation">Wildlife Conservation</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Search
        </Button>
      </form>
    </Box>
  );
};

export default OrganizationSearch;
