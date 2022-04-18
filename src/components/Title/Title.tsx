import {
  Title as TitleMantine,
  TitleProps as TitleMantineProps,
} from "@mantine/core";

import { getTextColor } from "../../utils/getColor";

const Title: React.FC<TitleMantineProps> = ({
  children,
  order = 3,
  color = 'gray',
  ...props
}) => {
  return (
    <TitleMantine
      order={order}
      sx={(theme) => ({ color: getTextColor(theme, color) })}
      {...props}
    >
      {children}
    </TitleMantine>
  );
};

export default Title;
