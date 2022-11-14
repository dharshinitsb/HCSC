import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { ShowScheduledFlightComponent } from './show-scheduled-flight/show-scheduled-flight.component';
import { DeleteScheduledFlightComponent } from './delete-scheduled-flight/delete-scheduled-flight.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home',component : HomeComponent},
  {path : 'login',component : LoginComponent},
  {path : 'signup',component : SignupComponent},
  {path : 'logout',component : LoginComponent},
  {path : 'scheduledFlight/search',component : SearchScheduledFlightComponent},
  {path : 'scheduledFlight/add',component : AddScheduledFlightComponent},
  {path : 'scheduledFlight/show',component : ShowScheduledFlightComponent},
  {path : 'scheduledFlight/delete',component : DeleteScheduledFlightComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
