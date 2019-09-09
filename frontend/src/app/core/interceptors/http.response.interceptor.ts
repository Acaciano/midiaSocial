import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.status === 200) {
                        if (Array.isArray(event.body)) {
                            const data = event.body[0];
                            if (data.success === true) {
                                event = event.clone({ body: data.result });
                            } else {
                                throw data.errorMessage;
                            }
                        } else {
                            const data = event.body;
                            if (data.success === true) {
                                event = event.clone({ body: data.result });
                            } else {
                                throw data.errorMessage;
                            }
                        }
                    }
                }
                return event;
            }, (err: any) => {
                if (err instanceof HttpErrorResponse && err.status === 401) {
                    throw new Error('Ocorreu um erro na sua requisição. Tente novamente mais tarde.');
                }
            })
        );
    }
}
