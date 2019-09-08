import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.API_URL}${path}`, { params });
  }

  public getPagination(path: string, start: number, end: number): Observable<any> {
    return this.http.get(`${environment.API_URL}${path}?_start=${start}&_end=${end}`);
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${environment.API_URL}${path}`,
      JSON.stringify(body));
  }

  public post(path: string, body: object = {}, httpOptions?): Observable<any> {
    console.log(JSON.stringify(body));

    return this.http.post(
      `${environment.API_URL}${path}`,
      JSON.stringify(body),
      httpOptions);
  }

  public postFormData(path: string, body: object = {}, httpOptions): Observable<any> {
    const newBody = this.getFormUrlEncoded(body);
    return this.http.post(
      `${environment.API_URL}${path}`,
      newBody.toString(),
      httpOptions);
  }

  public getFormUrlEncoded(toConvert) {
    const urlSearchParams  = new URLSearchParams();

    // tslint:disable-next-line:forin
    for (const property in toConvert) {
      const encodedKey = property;
      const encodedValue = toConvert[property];
      urlSearchParams.append(encodedKey, encodedValue);
    }

    return urlSearchParams;
  }

  public delete(path): Observable<any> {
    return this.http.delete(`${environment.API_URL}${path}`);
  }
}
