import { useState, useEffect } from "react";

import { formatCompactNumber } from "../../utils/formatter";
import { getIntervalByBase } from "./getIntervalByBase";
import { getPercentage } from "./getPercentage";

const useCalculateIntervals = (founds: number) => {
  const [startValue, setStartValue] = useState<string>();
  const [endValue, setEndValue] = useState<string>();
  const [percentage, setPercentage] = useState<number>();

  useEffect(() => {
    if (founds >= 1) {
      const { start, end } = getIntervalByBase(founds, 10);

      const formatedStart = formatCompactNumber(start);
      const formatedEnd = formatCompactNumber(end);

      const auxPercentage = getPercentage(start, end, founds);

      setStartValue(formatedStart);
      setEndValue(formatedEnd);
      setPercentage(auxPercentage);
    }
  }, [founds]);

  return { start: startValue, end: endValue, percentage };
};

export default useCalculateIntervals;
