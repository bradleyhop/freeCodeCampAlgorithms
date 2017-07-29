/*
 *Return a new array that transforms the element's average altitude into their
 *orbital periods.
 *
 *The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 *
 *You can read about orbital periods on wikipedia.
 *
 *The values should be rounded to the nearest whole number. The body being
 *orbited is Earth.
 *
 *The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
 *398600.4418 km^3s^-2.
 */

function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    for (let i in arr) {
        // equation for oribital period via wikipedia
        let orbitalPeriod =
            (2 * Math.PI) *
            (Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
        arr[i].orbitalPeriod = Math.round(orbitalPeriod);
        delete arr[i].avgAlt;
    }

    return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// [{name: "sputnik", orbitalPeriod: 86400}]
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
