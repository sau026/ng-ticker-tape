import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'ng-ticker-tape',
  templateUrl: './ng-ticker-tape.component.html',
  styleUrls: ['./ng-ticker-tape.component.scss']
})
export class NgTickerTapeComponent implements OnInit {
  keys_to_keep = ['target_currency_short_name', 'coindcx_name','base_currency_precision','base_currency_short_name'];
  
  repeatCounter = [...Array(3).keys()]
  textWidth: number = null;
  margin = 0;
  interval: any;
  tickerSpinner = true;
  tickerSpeed = 15;

  @Input() tickerData : any;
  @ViewChild('textWidthElement') textWidthElement: ElementRef;
  @ViewChild('tickerTapeConatiner') tickerTapeConatiner: ElementRef;  


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout( () => {
      this.setTextWidthAndInitTicker();
    }, 3000);
  }

  setTextWidthAndInitTicker() {
    this.tickerSpinner = false;
    const nativeElement = this.textWidthElement.nativeElement;
    this.textWidth = nativeElement.offsetWidth;
    this.moveLeft();
  }

  reset(): void {
    clearInterval( this.interval );
  }

  moveLeft(): void {
    let resetMargin = ( this.textWidth ) * -2;
    this.interval = setInterval(() => {
      this.tickerTapeConatiner.nativeElement.style.transform = 'translateX(' + this.margin-- + 'px)';
      if (this.margin < resetMargin) { 
        this.margin = 0;
      }
    }, this.tickerSpeed);
  }

  ngOnDestroy() {
    this.reset();
    this.margin = 0;  
  }
}
