import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppshellComponent } from './appshell.component';

describe('AppshellComponent', () => {
  let component: AppshellComponent;
  let fixture: ComponentFixture<AppshellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppshellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
