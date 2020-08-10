import { NgModule } from '@angular/core';
import { NgTickerTapeComponent } from './ng-ticker-tape.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgTickerTapeComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTickerTapeComponent]
})
export class NgTickerTapeModule { }
