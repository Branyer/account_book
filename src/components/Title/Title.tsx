import {
  Title as TitleMantine,
  TitleProps as TitleMantineProps,
} from "@mantine/core";

import { getTextColor } from "../../utils/getColor";

const Title: React.FC<TitleMantineProps & {weight?: number}> = ({
  children,
  order = 3,
  color = 'green',
  weight = 700,
  ...props
}) => {
  return (
    <TitleMantine
      order={order}
      sx={(theme) => ({ color: color, fontWeight: weight })}
      {...props}
    >
      {children}
    </TitleMantine>
  );
};

export default Title;
