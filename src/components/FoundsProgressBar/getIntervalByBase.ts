export const getIntervalByBase = (value: number, base: number) => {

      const log = Math.log(value) / Math.log(base);
      const trunc = Math.trunc(log);

      const start = Math.pow(10, trunc);
      const end = Math.pow(10, trunc + 1);

      return {start, end }

}