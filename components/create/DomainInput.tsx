import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function DomainInput({ setDomain }: { setDomain: (e: any) => void }) {
  const options = ["Design", "Tech", "Management", "Other"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "domain",
    defaultValue: "Other",
    onChange: (newValue: string) => {
      setDomain(newValue);
    },
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export function DomainFilter({ setDomain }: { setDomain: (e: any) => void }) {
  const options = ["All", "Design", "Tech", "Management", "Other"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "domain",
    defaultValue: "All",
    onChange: (newValue: string) => {
      setDomain(newValue);
    },
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
