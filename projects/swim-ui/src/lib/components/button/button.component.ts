import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disabled = false;
  @Input() label = "";
  type: string = 'gradient';

  btnClicked(): void {
    this.onClick.emit(true);
  }
}
