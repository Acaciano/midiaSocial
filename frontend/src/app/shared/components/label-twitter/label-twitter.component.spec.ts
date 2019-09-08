import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTwitterComponent } from './label-twitter.component';

describe('LabelTwitterComponent', () => {
  let component: LabelTwitterComponent;
  let fixture: ComponentFixture<LabelTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
