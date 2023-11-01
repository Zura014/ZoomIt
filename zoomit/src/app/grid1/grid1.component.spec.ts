import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid1Component } from './grid1.component';

describe('Grid1Component', () => {
  let component: Grid1Component;
  let fixture: ComponentFixture<Grid1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid1Component]
    });
    fixture = TestBed.createComponent(Grid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
