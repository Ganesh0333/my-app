import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesLogInComponent } from './bikes-log-in.component';

describe('BikesLogInComponent', () => {
  let component: BikesLogInComponent;
  let fixture: ComponentFixture<BikesLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikesLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
