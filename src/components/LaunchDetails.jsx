import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Tag,
  Image,
  Button,
} from "@chakra-ui/react";

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
    <Box
      as="article"
      bg="gray.100"
      p={4}
      borderRadius="lg"
      maxW="md"
      mt="2rem"
      mx="auto"
    >
      <Flex display="flex">
        <Text fontSize="xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={3} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Image src={launch.links?.mission_patch_small} my="2rem" mx="auto" />
      <Text>
        <Box as="span" fontSize={"md"} fontWeight="bold">
          Rocket Name:{" "}
        </Box>
        {launch.rocket?.rocket_name}, {launch.rocket?.rocket_type}
      </Text>
      <Text mt={1}>
        <Box as="span" fontSize={"md"} fontWeight="bold">
          Nationality:{" "}
        </Box>
        {launch.rocket?.second_stage?.payloads[0].nationality}
      </Text>
      <Text mt={1}>
        <Box as="span" fontSize={"md"} fontWeight="bold">
          Details:{" "}
        </Box>
        {launch.details}
      </Text>
      <Link to="/#">
        <Button mt={5} colorScheme="blue" lineHeight={1.5}>
          Back
        </Button>
      </Link>
    </Box>
  );
}

export default LaunchDetails;
