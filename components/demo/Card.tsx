import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  HStack,
  Badge,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export function Card({
  position,
  company,
  contentTitle,
  contentBody,
  skills,
  link,
  emailAddress,
}: {
  position: string;
  company: string;
  contentTitle: string;
  contentBody: string;
  skills: [{ id: string; text: string }];
  link: string;
  emailAddress: string;
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      display={"flex"}
      flexDirection={"column"}
      w={"350px"}
    >
      <Box bg="gray.200" p={4}>
        <Heading size="lg" fontWeight="bold">
          {position}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {company}
        </Text>
      </Box>
      <Divider />
      <Box p={4} display={"flex"} flexDirection={"column"} flexGrow={1}>
        <Heading size="md">{contentTitle}</Heading>
        <Text>{contentBody}</Text>
      </Box>
      <Box justifySelf={"flex-end"} p={4}>
        <Heading size="md" mt={8}>
          Skills Required
        </Heading>
        <Wrap mt={4} spacing={4}>
          {skills.map((skill, index) => (
            <WrapItem key={index}>
              <Badge colorScheme="blue" p={2} borderRadius={12}>
                {skill.text}
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
