import { Component } from '@angular/core';
import { ApiService } from './app.api';
import { FormControl } from '@angular/forms';

@Component({
    templateUrl: '../components/home.html',
    styleUrls: ['./app.home.css']
})

export class AppHome {
    public all_data;
    location = new FormControl('Yogyakarta')
    constructor(private _apiService: ApiService){}
    ngOnInit() {
        this.getData()
    }
    getData() {
        this._apiService.getData(this.location.value).subscribe(
            data => {
                console.log(data)
                this.all_data = data
            },
            err => console.log('err', err)
        )
    }
    enter(event: any) {
        if(event.code == 'Enter') {
            this.getData()
        }
    }
    search() {
        this.getData()
    }
}