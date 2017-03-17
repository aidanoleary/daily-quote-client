import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {

    constructor(private http: Http) { }

    private apiUrl: string = "http://random-quote-app.herokuapp.com/api"

    getDailyQuote() {
        return this.http.get(this.apiUrl + "/daily-quote").map(response => response.json().data);
    }
}