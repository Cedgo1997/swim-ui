import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SpinnerComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent
  ]
})
export class SwimUiModule { }
