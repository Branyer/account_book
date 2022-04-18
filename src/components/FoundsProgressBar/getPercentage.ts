import { straightLineEquation } from "./straightLineEquation";


export const getPercentage = (start : number, end : number, founds : number) => {

        const equation = straightLineEquation(
            { X: start - 1, Y: 0 },
            { X: end, Y: 100 }
          );
    
        return  equation.eval(founds);
    
}