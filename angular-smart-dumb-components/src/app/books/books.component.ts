import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  private API_KEY: string  = 'AIzaSyAuCKd16kMT-Bg5iEHWxPLIP5ggTNWnFcg';
  book: Observable<any[]>;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    const URL = 'https://www.googleapis.com/books/v1';
  
    //Fetch All Books from API
    //@Params = URL: String
    this.fetchBooks(URL);

  }

  fetchBooks(URL: string){
   let headers= new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    });

    this.book = this._http.get<any>(`${URL}/q=&key=${this.API_KEY}`,{headers}).pipe(
      map(resp=>{
        console.log(resp);
        return resp.items;
      })
    );
  }

}
