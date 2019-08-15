import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    constructor(private http:HttpClient) {
    }
    getData(location){
        const API_KEY = "df05602edb5dcfcf3f9bf5e033234419"
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
    }
}