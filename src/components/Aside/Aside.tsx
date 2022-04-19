import { Aside as AsideMantine, MediaQuery, Stack } from "@mantine/core";

import FoundsProgressBar from "../FoundsProgressBar";
import Title from "../Title";

const Aside = () => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <AsideMantine p="xl" hiddenBreakpoint="sm" width={{ sm: 300, lg: 400 }}>
        <Stack>
          <Title py="md">Founds</Title>
          <FoundsProgressBar color="blue" currency="USD" founds={50} />
          <FoundsProgressBar color="green" currency="COP" founds={1992939} />
        </Stack>
      </AsideMantine>
    </MediaQuery>
  );
};

export default Aside;
