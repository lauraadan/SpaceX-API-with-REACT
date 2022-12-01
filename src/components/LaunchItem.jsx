import { BsCalendarDate } from "react-icons/bs";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom"


export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      {/*bg y box es de chakra ui*/}
      <Flex display="flex">
        <Text fontSize="2xl">
          Mission: <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>

      <Flex align="center">
        <Icon as={BsCalendarDate} color="gray.500"></Icon>
        <Text fontSize="sm" ml={2} color="gray.500">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>

      <Link to={`/launch/${launch.flight_number}`}>
        <Button bg={"brand.100"} color="white" mt="2">
          View details...
        </Button>
      </Link>

    </Box>
  );
}

