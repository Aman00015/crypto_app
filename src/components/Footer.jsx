import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import userImg from '../assets/user.jpg'
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      paddingX={"16"}
      paddingY={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']} >
            We Are Most Secure And Safest Platform For Crypto Trade.
            Our Convience Fee is Lowest Among just @0.58%
          </Text>
          {/* <VStack>
            <Avatar boxSize={"28"} mt={["4", "0"]} src={userImg}/>
            <Text>Our Founder</Text>
          </VStack> */}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
