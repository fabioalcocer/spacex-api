import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";

import * as API from "../services/launches";

function LaunchDetails() {
  const { launchId } = useParams();
  const [launch, setLaunch] = useState({});

  useEffect(() => {
    API.getLaunchByFlyNumber(launchId)
      .then(setLaunch)
      .catch((err) => console.error(err));
  }, [launchId]);

  return (
    <Box as="article" bg="gray.100" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>Loading...</div>
      ) : (
        <Flex display="flex">
          <Text fontSize="xl">
            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year}
            )
          </Text>
          <Spacer />
          <Tag p={3} colorScheme={launch.launch_success ? "green" : "red"}>
            {launch.launch_success ? "Success" : "Failure"}
          </Tag>
        </Flex>
      )}
      <Text>
        <Box as="span" fontSize={"lg"} fontWeight="bold">
          Rocket:{" "}
        </Box>
        {launch.rocket?.rocket_name}, {launch.rocket?.rocket_type}
      </Text>
      <Text mt={1}>
        <Box as="span" fontSize={"md"} fontWeight="bold">
          Nation:{" "}
        </Box>
        {launch.rocket?.second_stage?.payloads[0].nationality}
      </Text>
    </Box>
  );
}

export default LaunchDetails;
