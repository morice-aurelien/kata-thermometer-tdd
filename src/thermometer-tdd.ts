export function thermometer(...temperatures: number []): number {
    if (temperatures.length === 0) {
        return 0;
    }
    if (temperatures.length > 10000) {
        throw new Error("Too many temperatures");
    }

    const distanceTemperatureOrderedList = temperatures.map(temperature => ({
        temperature, distance: Math.abs(temperature)
    })).sort((a, b) => a.distance - b.distance);

    return  distanceTemperatureOrderedList[0].temperature > 0 ?
            distanceTemperatureOrderedList[0].temperature :
            distanceTemperatureOrderedList[1].temperature;
}
