import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";
import { Hackathon } from "../../types/types";

export default function HackathonFilter({
  hackathon,
  setHackathon,
}: {
  hackathon: Hackathon;
  setHackathon: (e: any) => void;
}) {
  return (
    <FormControl isRequired>
      <FormLabel>Hackathon</FormLabel>
      <Select
        value={hackathon}
        onChange={(e: any) => {
          setHackathon(e.target.value);
        }}
      >
        <option value="-">-</option>
        <option value="DEVSOC">DEVSOC</option>
      </Select>
    </FormControl>
  );
}
