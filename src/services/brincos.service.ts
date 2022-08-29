import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Brincos } from 'src/app/tab-navegacao/produtos';


@Injectable({
  providedIn: 'root'
})
export class BrincosService {

  url: string = 'http://localhost:3000/brincos'

  constructor(private httpClient: HttpClient) { }

  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //Obtem todos os brincos
  getBrincos(): Observable<Brincos[]> {
    return this.httpClient.get<Brincos[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Obtem um brinco pelo id
    getBrincoById(id: number): Observable<Brincos> {
      return this.httpClient.get<Brincos>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // salva um brinco
    saveBrinco(brinco: Brincos): Observable<Brincos> {
      return this.httpClient.post<Brincos>(this.url, JSON.stringify(brinco), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // utualiza um brinco
    updateBrinco(brinco: Brincos): Observable<Brincos> {
      return this.httpClient.put<Brincos>(this.url + '/' + brinco.id, JSON.stringify(brinco), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    // deleta um brinco
    deleteBrinco(brinco: Brincos) {
      return this.httpClient.delete<Brincos>(this.url + '/' + brinco.id, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
