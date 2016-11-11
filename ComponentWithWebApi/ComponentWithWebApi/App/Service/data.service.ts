import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';

import { Product } from '../Model/Product';

@Injectable()
export class DataService {
    webApiUrl = "http://localhost:51069/api/product";
    constructor(private http: Http) { }

    getUiData(): Observable<Product[]> {
        let data = this.http.get(this.webApiUrl).map(this.mapDataFunction);

        //The above line we can write like this as well 
        //let dta = this.http
        //    .get(this.webApiUrl)
        //    .map((res: Response) => res.json());

        return data; 
    }

    mapDataFunction(res: Response): Product[] {
        return res.json(); 
    }
}