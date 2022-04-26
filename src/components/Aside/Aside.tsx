import { Aside as AsideMantine, MediaQuery, Stack } from "@mantine/core";
import { useQuery } from "react-query";

import FoundsProgressBar from "../FoundsProgressBar";
import Title from "../Title";

const Aside = ({hidden} : {hidden: boolean}) => {

  const query = useQuery("transactions")

  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <AsideMantine p="xl" hiddenBreakpoint="sm"  style={{visibility: hidden ? "hidden" : "visible"}} width={{ sm: 300, lg: 400 }}>
        <Stack>
          <Title py="md">Founds</Title>
          <FoundsProgressBar color="blue" currency="USD" founds={(query.data as any)?.amounts.usd} />
          <FoundsProgressBar color="green" currency="COP" founds={(query.data as any)?.amounts.cop} />
        </Stack>
      </AsideMantine>
    </MediaQuery>
  );
};

export default Aside;
