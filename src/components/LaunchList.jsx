import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import * as API from "../services/launches";
import LaunchItem from "./LaunchItem";

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then(setLaunches)
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Loading... </div>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
};

export default LaunchList;
