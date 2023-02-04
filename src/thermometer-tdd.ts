export function thermometer(...temperatures: number []): number {
    if (temperatures.length === 0) {
        return 0;
    }
    return Math.min(...temperatures);
}
