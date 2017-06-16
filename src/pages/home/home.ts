import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Quote } from './quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private quoteService: QuoteService, public loadingController: LoadingController) {}

  currentQuote: Quote;

  ngOnInit(): void {
    
  }

  getDailyQuote(): void {
    let loader = this.loadingController.create({
      content: "Loading..."
    });
    loader.present();
    this.quoteService.getDailyQuote()
      .subscribe(quote => {
        this.currentQuote = <Quote> quote;
        loader.dismiss();
      });
  }
}
