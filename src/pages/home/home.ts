import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Quote } from './quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private quoteService: QuoteService) {}

  currentQuote: Quote;

  ngOnInit(): void {
    //this.currentQuote = {};
    //this.currentQuote = new Quote();
  }

  getDailyQuote(): void {
    //this.currentQuote = { text: "Hello World", author: "an author", tags: ["fun", "nice"] };
    //this.currentQuote = this.quoteService.getDailyQuote();
    this.quoteService.getDailyQuote()
      .subscribe(quote => this.currentQuote = <Quote> quote);
  }
}
