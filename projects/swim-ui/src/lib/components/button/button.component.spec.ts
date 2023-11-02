import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be disabled if disabled prop is passed by input', () => {
    component.disabled = true;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelectorAll('.sui-btn')[0];
    expect(element.disabled).toBeTruthy();
  });

  it('should be not disabled if disabled prop is false or not passed by input', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.sui-btn');
    expect(element.disabled).toBeFalsy();
  });

  it('must be change its style if type changes', () => {
    const types = ['outline', 'gradient', 'solid'];
    for (let type of types) {
      component.type = type;
      fixture.detectChanges();
      const button = fixture.debugElement.nativeElement.querySelector(`.sui-btn--${type}`);
      expect(button).toBeTruthy();
    }
  }
  );

  it('should call click event when button is clicked', fakeAsync(() => {
    spyOn(component, 'btnClicked').and.callThrough;
    const button = fixture.debugElement.nativeElement.querySelector('.sui-btn');
    button.click();
    tick();
    expect(component.btnClicked).toHaveBeenCalled();
  }));
});
