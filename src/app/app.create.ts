import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: '../components/create.html',
  styleUrls: ['./app.styles.css']

})
export class AppCreate {
    CreateForm = new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
        address: new FormControl('')
    }); 
    
    onSave() {
        if(!localStorage.getItem('peoples')){
            let data = []
            data.push(this.CreateForm.value);
            localStorage.setItem('peoples', JSON.stringify(data))
            alert('Success')
            this.CreateForm = new FormGroup({
                name: new FormControl(''),
                age: new FormControl(''),
                address: new FormControl('')
            }); 
        }else {
            let getdata = JSON.parse(localStorage.getItem('peoples'))
            getdata.push(this.CreateForm.value)
            localStorage.setItem('peoples', JSON.stringify(getdata))
            alert('Success')
            this.CreateForm = new FormGroup({
                name: new FormControl(''),
                age: new FormControl(''),
                address: new FormControl('')
            }); 
        }
    }
}