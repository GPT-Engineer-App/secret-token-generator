import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";

// Mocked HMAC-SHA256 function
const hmacSHA256 = (input, secretKey) => {
  // This is where you would normally use a crypto library to generate the HMAC-SHA256 hash
  // Since we can't use external libraries, we'll return a placeholder string
  return "mocked_hmac_sha256_hash_based_on_" + input + "_and_secret_" + secretKey;
};

const Index = () => {
  const [signature, setSignature] = useState("");
  const [formData, setFormData] = useState({
    serviceId: "merchant_one",
    password: "2tHA35v%Lgf7",
    secretKey: "asQm98A#@VVz0K6W6$6ayD*F6MekoS",
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateSignature = () => {
    // Concatenate all parameter values in a single string
    // Use hyphen (-) in place of any empty values
    const concatenatedParams = Object.values(formData)
      .map((v) => v || "-")
      .join("");
    // Calculate HMAC-SHA256 code for the string using the secret key provided
    const generatedSignature = hmacSHA256(concatenatedParams, formData.secretKey);
    // Set signature state
    setSignature(generatedSignature.toLowerCase());
  };

  return (
    <Box p={8}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="serviceId">Service ID</FormLabel>
          <Input id="serviceId" name="serviceId" value={formData.serviceId} onChange={handleInputChange} />
        </FormControl>
        {/* Add other input fields as needed */}
        <Button colorScheme="blue" onClick={generateSignature}>
          Generate Signature
        </Button>
        {signature && <Text>Signature: {signature}</Text>}
      </VStack>
    </Box>
  );
};

export default Index;
