import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadActivityComponent } from './reload-activity.component';

describe('ReloadActivityComponent', () => {
  let component: ReloadActivityComponent;
  let fixture: ComponentFixture<ReloadActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
