import { Component, Input } from '@angular/core';

@Component({
  selector: 'sui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() label = "";
  type: string = 'gradient';
}
