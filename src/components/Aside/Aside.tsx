import {
  Aside as AsideMantine,
  MediaQuery,
  Box,
  Progress,
  Stack,
  Group,
  Text,
  Grid,
  Badge
} from "@mantine/core";
import FoundsProgressBar from "../FoundsProgressBar";

const Aside = () => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <AsideMantine p="md" hiddenBreakpoint="sm" width={{ sm: 300, lg: 400 }}>
        <Stack>
            <FoundsProgressBar 
                color='green'
                currency="COP"
                founds={1992939}
            />
          <FoundsProgressBar 
            color='blue'
            currency="USD"
            founds={50}
          />
        </Stack>
      </AsideMantine>
    </MediaQuery>
  );
};

export default Aside;
