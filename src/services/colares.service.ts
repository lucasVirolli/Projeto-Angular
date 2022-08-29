import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Colares } from 'src/app/tab-navegacao/produtos';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaresService {

  url: string = 'http://localhost:3000/colares'

  constructor(private httpClient: HttpClient) { }

  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //Obtem todos os colares
  getColares(): Observable<Colares[]> {
    return this.httpClient.get<Colares[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Obtem um brinco pelo id
    getColarById(id: number): Observable<Colares> {
      return this.httpClient.get<Colares>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // salva um colar
    saveColar(colar: Colares): Observable<Colares> {
      return this.httpClient.post<Colares>(this.url, JSON.stringify(colar), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

    // utualiza um colar
    updateBrinco(colar: Colares): Observable<Colares> {
      return this.httpClient.put<Colares>(this.url + '/' + colar.id, JSON.stringify(colar), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

    // deleta um colar
    deleteBrinco(colar: Colares) {
      return this.httpClient.delete<Colares>(this.url + '/' + colar.id, this.httpOptions)
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
