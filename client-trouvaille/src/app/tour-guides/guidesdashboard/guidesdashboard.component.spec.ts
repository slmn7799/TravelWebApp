import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesdashboardComponent } from './guidesdashboard.component';

describe('GuidesdashboardComponent', () => {
  let component: GuidesdashboardComponent;
  let fixture: ComponentFixture<GuidesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
