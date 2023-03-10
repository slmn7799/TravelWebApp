import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturecarddisplayComponent } from './featurecarddisplay.component';

describe('FeaturecarddisplayComponent', () => {
  let component: FeaturecarddisplayComponent;
  let fixture: ComponentFixture<FeaturecarddisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturecarddisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturecarddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
