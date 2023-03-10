import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartplanningcardComponent } from './startplanningcard.component';

describe('StartplanningcardComponent', () => {
  let component: StartplanningcardComponent;
  let fixture: ComponentFixture<StartplanningcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartplanningcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartplanningcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
