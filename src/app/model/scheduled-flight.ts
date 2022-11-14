import { Schedule } from './schedule';
import { Flight } from './flight.component';

export class ScheduledFlight {
    constructor(
        public scheduleFlightId: number,
        public flight: Flight,
         public availableSeats: number,
         public schedule: Schedule
    ){}
   
}
