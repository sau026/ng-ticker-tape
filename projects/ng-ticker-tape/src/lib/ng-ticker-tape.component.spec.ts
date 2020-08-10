import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTickerTapeComponent } from './ng-ticker-tape.component';

describe('NgTickerTapeComponent', () => {
  let component: NgTickerTapeComponent;
  let fixture: ComponentFixture<NgTickerTapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTickerTapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTickerTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
