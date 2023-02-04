export function thermometer(temperature?: number, temperature2?: number): number {
    if(temperature === undefined) return temperature2 || 0;
    if(temperature2 === undefined) return temperature || 0;
    return Math.min(temperature, temperature2);
}
