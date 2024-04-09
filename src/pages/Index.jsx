import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Input, Image, useToast } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleDonate = () => {
    if (amount) {
      // TODO: Implement actual donation processing
      toast({
        title: "Thank you!",
        description: `Your donation of $${amount} has been received.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setAmount("");
    }
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Make a Donation
        </Heading>
        <Image src="https://images.unsplash.com/photo-1494386346843-e12284507169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGhhbmRzfGVufDB8fHx8MTcxMjY0MzE0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Donation" boxSize="300px" objectFit="cover" />
        <Text fontSize="xl" textAlign="center">
          Your donation can make a difference in someone's life. Please consider giving today.
        </Text>
        <HStack spacing={4}>
          <Input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Button colorScheme="green" leftIcon={<FaHeart />} onClick={handleDonate}>
            Donate Now
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
