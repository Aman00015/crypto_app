import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import crypto from "../assets/crypto.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div style={{
        height:"80vh",

      }}
      animate={{
        translateY:"20px",
      }}
      transition={{
        duration:2,
        repeatType:"reverse",
        repeat:Infinity,
      }}
      >

      <Image w={"full"} h={"full"} objectFit={"cover"} src={crypto} />
      </motion.div>
      {/* filter={'grayscale(1)'} */}
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"2"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
