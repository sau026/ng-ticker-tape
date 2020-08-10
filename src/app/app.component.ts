import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ticker-tape-demo';

  tickerData = [
    {
      'target_currency_short_name': ' BTT',
      'coindcx_name': ' BTT/USDT',
      'price': 0.00047020,
      'color': 'red',
      'percentage': 11.206+'%',
      'base_currency_short_name': '/USDT' 
    },
    {
      'target_currency_short_name': ' BTT',
      'coindcx_name': ' BTT/USDT',
      'price': 0.00047020,
      'color': 'green',
      'percentage': 11.206+'%',
      'base_currency_short_name': '/USDT' 
    },
    {
      'target_currency_short_name': ' BTT',
      'coindcx_name': ' BTT/USDT',
      'price': 0.00047020,
      'color': 'green',
      'percentage': 11.206+'%',
      'base_currency_short_name': '/USDT' 
    },
    {
      'target_currency_short_name': ' BTT',
      'coindcx_name': ' BTT/USDT',
      'price': 0.00047020,
      'color': 'red',
      'percentage': 11.206+'%',
      'base_currency_short_name': '/USDT' 
    },
    {
      'target_currency_short_name': ' BTT',
      'coindcx_name': ' BTT/USDT',
      'price': 0.00047020,
      'color': 'green',
      'percentage': 11.206+'%',
      'base_currency_short_name': '/USDT' 
    },
    {
      'target_currency_short_name': ' BTT',
      'coindcx_name': ' BTT/USDT',
      'price': 0.00047020,
      'color': 'red',
      'percentage': 11.206+'%',
      'base_currency_short_name': '/USDT' 
    }
  ]
}
