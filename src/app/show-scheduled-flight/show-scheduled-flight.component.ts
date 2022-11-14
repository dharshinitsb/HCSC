import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.component';
import { Schedule } from '../model/schedule';
import { ScheduledFlight } from '../model/scheduled-flight';
import { ScheduledFlightServiceService } from '../services/scheduled-flight-service.service';

@Component({
  selector: 'app-show-scheduled-flight',
  templateUrl: './show-scheduled-flight.component.html',
  styleUrls: ['./show-scheduled-flight.component.css']
})
export class ShowScheduledFlightComponent implements OnInit {

  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  scheduleFlight!: ScheduledFlight;
  scheduleFlightId!: number;
  show:boolean=false;
  flight!: Flight; availableSeats!: number; schedule!: Schedule;


  constructor(private router: Router, private service: ScheduledFlightServiceService) { }

  ngOnInit(): void {
   
  
      this.scheduleFlight=new ScheduledFlight(this.scheduleFlightId, this.flight, this.availableSeats, this.schedule);
    
  }

  removeScheduleFlight(scheduleFlightId:number){
    this.service.removeScheduleFlight(scheduleFlightId).subscribe();
    alert("Deleted");
    location.reload();
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
