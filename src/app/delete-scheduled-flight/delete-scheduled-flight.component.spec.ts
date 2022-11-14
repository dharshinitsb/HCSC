import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScheduledFlightComponent } from './delete-scheduled-flight.component';

describe('DeleteScheduledFlightComponent', () => {
  let component: DeleteScheduledFlightComponent;
  let fixture: ComponentFixture<DeleteScheduledFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteScheduledFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteScheduledFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
