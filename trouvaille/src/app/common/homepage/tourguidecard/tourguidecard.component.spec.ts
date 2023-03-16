import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguidecardComponent } from './tourguidecard.component';

describe('TourguidecardComponent', () => {
  let component: TourguidecardComponent;
  let fixture: ComponentFixture<TourguidecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourguidecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourguidecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
