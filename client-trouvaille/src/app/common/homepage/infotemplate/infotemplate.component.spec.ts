import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotemplateComponent } from './infotemplate.component';

describe('InfotemplateComponent', () => {
  let component: InfotemplateComponent;
  let fixture: ComponentFixture<InfotemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
