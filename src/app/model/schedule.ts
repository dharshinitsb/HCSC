import { Airport } from './airport.component';

export class Schedule {
    constructor(
        public scheduleId: number,
        public srcAirport: Airport,
        public dstnAirport: Airport,
        public deptDateTime: string,
        public arrDateTime: string
    ){}

   
}
