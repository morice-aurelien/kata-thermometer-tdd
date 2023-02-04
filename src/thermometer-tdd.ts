import {loadConfig} from "tsconfig-paths";

export function thermometer(...temperatures: number []): number {
    if (temperatures.length === 0) {
        return 0;
    }
    if (temperatures.length > 10000) {
        throw new Error("Too many temperatures");
    }
    return Math.min(...temperatures);
}
