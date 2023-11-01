import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3Component } from './grid3.component';

describe('Grid3Component', () => {
  let component: Grid3Component;
  let fixture: ComponentFixture<Grid3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid3Component]
    });
    fixture = TestBed.createComponent(Grid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
