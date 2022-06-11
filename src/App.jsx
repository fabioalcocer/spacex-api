import "./App.css";
import { useEffect, useState } from "react";
import { Heading, Image } from "@chakra-ui/react";

import LaunchItem from "./components/LaunchItem";
import logo from "./assets/logo-spacex.png";
import * as API from "./services/launches";

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <div className="App">
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </section>
    </div>
  );
}

export default App;
