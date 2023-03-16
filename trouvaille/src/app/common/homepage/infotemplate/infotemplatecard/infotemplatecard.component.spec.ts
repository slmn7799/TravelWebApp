import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotemplatecardComponent } from './infotemplatecard.component';

describe('InfotemplatecardComponent', () => {
  let component: InfotemplatecardComponent;
  let fixture: ComponentFixture<InfotemplatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotemplatecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotemplatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
