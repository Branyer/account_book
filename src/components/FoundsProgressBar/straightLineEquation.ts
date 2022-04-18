interface Point {
  X: number;
  Y: number;
}

export const straightLineEquation = (point1: Point, point2: Point) => {
  const m = (point2.Y - point1.Y) / (point2.X - point1.X);

  return {
    eval: (value: number) => {
      return m * (value - point1.X) + point1.Y;
    },
  };
};
