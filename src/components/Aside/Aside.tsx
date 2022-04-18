import {
    Text,
    Aside as AsideMantine,
    MediaQuery,

} from "@mantine/core";

const Aside = () => {

    return (
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <AsideMantine p="md" hiddenBreakpoint="sm" width={{ sm: 300, lg: 400 }}>
            <Text>Application sidebar</Text>
          </AsideMantine>
        </MediaQuery>
    )

}

export default Aside