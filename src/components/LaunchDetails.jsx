import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";

import * as API from "../services/launches";

function LaunchDetails() {
  const { launchId } = useParams();
  const [launch, setLaunch] = useState({});

  useState(() => {
    API.getLaunchByFlyNumber(launchId)
      .then(setLaunch)
      .catch((err) => console.error(err));
  }, [launchId]);

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
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
      <Box>Rocket: {launch.rocket?.rocket_name}</Box>
    </Box>
  );
}

export default LaunchDetails;
