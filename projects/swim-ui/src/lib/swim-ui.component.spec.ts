import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimUiComponent } from './swim-ui.component';

describe('SwimUiComponent', () => {
  let component: SwimUiComponent;
  let fixture: ComponentFixture<SwimUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwimUiComponent]
    });
    fixture = TestBed.createComponent(SwimUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
