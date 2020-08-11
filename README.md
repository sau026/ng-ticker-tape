# NgTickerTape

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.


## Demo

Check the ng-ticker-tape, ![ticker](https://user-images.githubusercontent.com/32296865/89941835-3ba2e800-dc39-11ea-8b3c-371bd10558f0.gif)




## Installation
You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

#### NPM
```  
npm i --save ng-ticker-tape
```
        
#### YARN
```          
yarn add --save ng-ticker-tape
```
        
## Usage
Follow below steps to add ticker-tape in your project

#### 1. Import NgTickerTapeModule

You need to import the ```NgTickerTapeModule``` in the module of your app where you want to use it.

```typescript        
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the module*/
import { NgTickerTapeModule } from 'ng-ticker-tape';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    AppComponent
    ],
    imports: [
    BrowserModule,
    NgTickerTapeModule // Import here,
    CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```  

        
#### 2. Use <ng-ticker-tape> in your HTML

In your HTML: Use the ```<ng-ticker-tape>``` wherever you like in your project.

```html        
<ng-ticker-tape  
     [tickerData]="tickerData">
</ng-ticker-tape>
```
        
#### 3. Structure of array to display the list

Make sure you structure of array should look like array shown below,     
```typescript
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
  ];
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# NgTickerTape

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.


## Demo

Check the ng-ticker-tape, [click here]().

## Installation
You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

#### NPM
```  
npm i --save ng-ticker-tape
```
        
#### YARN
```          
yarn add --save ng-ticker-tape
```
        
## Usage
Follow below steps to add ticker-tape in your project

#### 1. Import NgTickerTapeModule

You need to import the ```NgTickerTapeModule``` in the module of your app where you want to use it.

```typescript        
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the module*/
import { NgTickerTapeModule } from 'ng-ticker-tape';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    AppComponent
    ],
    imports: [
    BrowserModule,
    NgTickerTapeModule // Import here,
    CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```  

        
#### 2. Use <ng-ticker-tape> in your HTML

In your HTML: Use the ```<ng-ticker-tape>``` wherever you like in your project.

```html        
<ng-ticker-tape  
     [tickerData]="tickerData">
</ng-ticker-tape>
```
        
#### 3. Structure of array to display the list

Make sure you structure of array should look like array shown below,     
```typescript
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
  ];
```

## Contribution

I welcome you to fork and add more features into it. If you have any bugs or feature request, please create an issue at [github repository](https://github.com/sau026/ng-ticker-tape/issues).

## License

MIT