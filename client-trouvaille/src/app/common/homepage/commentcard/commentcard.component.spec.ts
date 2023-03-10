import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentcardComponent } from './commentcard.component';

describe('CommentcardComponent', () => {
  let component: CommentcardComponent;
  let fixture: ComponentFixture<CommentcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
