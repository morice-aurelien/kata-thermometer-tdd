export function thermometer(temperature?: number, temperature2?: number, temperature3?:number): number {
    if(temperature === undefined && temperature2 === undefined && temperature3 === undefined) return 0;
    if(temperature === undefined && temperature2 === undefined) return temperature3 || 0;
    if(temperature2 === undefined && temperature3 === undefined) return temperature || 0;
    if(temperature === undefined && temperature3 === undefined) return temperature2 || 0;
    if(temperature === undefined) return Math.min(temperature2||0, temperature3||0);
    if(temperature2 === undefined) return Math.min(temperature, temperature3||0);
    if(temperature3 === undefined) return Math.min(temperature, temperature2);

    return Math.min(temperature, temperature2, temperature3);
}
