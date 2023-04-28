import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  OrderedList,
  ListItem,
  HStack,
  Badge,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export function Card({
  title,
  company,
  responsibilities,
  skills,
}: {
  title: string;
  company: string;
  responsibilities: string[];
  skills: string[];
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      minW={"300px"}
    >
      <Box bg="gray.200" p={4}>
        <Heading size="lg" fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {company}
        </Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Heading size="md">Key Responsibilities</Heading>
        <OrderedList mt={4}>
          {responsibilities.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </OrderedList>
        <Heading size="md" mt={8}>
          Skills Required
        </Heading>
        <Wrap mt={4} spacing={4}>
          {skills.map((skill, index) => (
            <WrapItem key={index}>
              <Badge colorScheme="blue" p={2} borderRadius={12}>
                {skill}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
        <Flex mt={8} justify="center">
          <Button colorScheme="blue">{"Apply"}</Button>
        </Flex>
      </Box>
    </Box>
  );
}
