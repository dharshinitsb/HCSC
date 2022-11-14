import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight.component';
import { Schedule } from '../model/schedule';
import { ScheduledFlight } from '../model/scheduled-flight';
import { ScheduledFlightServiceService } from '../services/scheduled-flight-service.service';

@Component({
  selector: 'app-delete-scheduled-flight',
  templateUrl: './delete-scheduled-flight.component.html',
  styleUrls: ['./delete-scheduled-flight.component.css']
})
export class DeleteScheduledFlightComponent implements OnInit {

  scheduleFlight!: ScheduledFlight;
  scheduleFlightId!: number;
  show:boolean=false;
  flight!: Flight; availableSeats!: number; schedule!: Schedule;

  constructor(private service: ScheduledFlightServiceService, private router: Router) { }

  ngOnInit(): void {
    this.scheduleFlight=new ScheduledFlight(this.scheduleFlightId, this.flight, this.availableSeats, this.schedule);
  }

  searchScheduleFlight(scheduleFlightId:number):any{
    this.show=true;
    console.log(scheduleFlightId);
    this.service.searchScheduledFlight(scheduleFlightId).subscribe;
}

idValid:boolean=false;
validateId(){
    if(this.scheduleFlightId>999){
        this.idValid=true;
    }
    else if(this.scheduleFlightId<1){
        this.idValid=true;
    }else{
        this.idValid=false;
    }
}

    add(){

        this.router.navigate(['/scheduledFlight/add']);

    }

    view(){

        this.router.navigate(['/scheduledFlight/show']);

    }

    search(){

        this.router.navigate(['/scheduledFlight/search']);

    }
}
