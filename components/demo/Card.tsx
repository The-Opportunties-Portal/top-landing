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
import { User } from "../../types/types";

export function Card({
  role,
  description,
  skills,
  link,
  emailAddress,
  user,
}: {
  role: string;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  user: User | null;
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
          {role}
        </Heading>
        {/* <Text fontSize="sm" color="gray.500">
          {company}
        </Text> */}
      </Box>
      <Divider />
      <Box p={4} display={"flex"} flexDirection={"column"} flexGrow={1}>
        {/* <Heading size="md">{contentTitle}</Heading> */}
        <Text>{description}</Text>
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
        <Flex mt={8} justify="space-between">
          <Button
            colorScheme="teal"
            disabled={!user}
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            {"Apply"}
          </Button>
          <Button
            colorScheme="blackAlpha"
            disabled={!user}
            onClick={() => {
              window.location.href = `mailto:${emailAddress}`;
            }}
          >
            {"Contact"}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
