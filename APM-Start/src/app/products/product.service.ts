import { Injectable } from "@angular/core";
import { product } from "./product";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    productUrl:string = 'api/products/products.json';

    constructor(private httpClient:HttpClient){};

    getProducts() :Observable<product[]> {
        return this.httpClient.get<product[]>(this.productUrl)
        .pipe(
          tap(data => console.log('All: ', JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(() => errorMessage);
    }

    
}