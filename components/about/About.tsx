import { Box, Flex, Heading } from "@chakra-ui/react";
import styles from "../../styles/About.module.css";
const AboutUs = () => {
  return (
    <>
      <Box>
        <Flex justify="center">
          <Heading fontSize="5xl" className={styles.gradientText}>
            About Us
          </Heading>
        </Flex>
      </Box>
    </>
  );
};

export default AboutUs;
