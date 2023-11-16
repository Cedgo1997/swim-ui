import { Component, Input } from '@angular/core';

@Component({
  selector: 'sui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() size = 100;
}
