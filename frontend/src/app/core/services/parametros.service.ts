import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Parametros } from '../models/parametros';

@Injectable()
export class ParametrosService {

  constructor(private api: ApiService) {
  }

  public get(): Observable<Parametros> {
    return this.api.get(`/Parametros`);
  }

  public put(model: Parametros): Observable<Parametros> {
    return this.api.put(`/Parametros/${model.id}`, model);
  }
}
