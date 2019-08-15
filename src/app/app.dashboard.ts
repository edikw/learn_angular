import { Component } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
    templateUrl: '../components/dashboard.html',
    styleUrls: ['./app.styles.css']
})

export class AppDashboard {
    checkEdit = []
    name = ''
    age = ''
    address = ''
    EditForm = new FormGroup({
        name: new FormControl(this.name),
        age: new FormControl(this.age),
        address: new FormControl(this.address)
    });
    data = ''

    ngOnInit() {
        if(localStorage.getItem('peoples')) {
            let data = JSON.parse(localStorage.getItem('peoples'))
            this.data = data
        }
    }

    edit(data, index) {
        this.name = data.name
        this.age = data.age
        this.address = data.address
        this.checkEdit = 1+index
        console.log('masuk',this.name)
    }

    delete(index) {
        let storage = JSON.parse(localStorage.getItem('peoples'))
        storage.splice(index, 1)
        localStorage.setItem('peoples',JSON.stringify(storage))
        this.ngOnInit()
    }

    save(index) {
        console.log(this.EditForm.value)
        let datas = JSON.parse(localStorage.getItem('peoples'))
        for (let i = 0; i < datas.length; i++) {
            if(i === index) {
                datas[i] = this.EditForm.value
                break;
            }
        }
        localStorage.setItem('peoples', JSON.stringify(datas))
        this.checkEdit = []
        this.ngOnInit()
    }

    cancel(index) {
        this.checkEdit = []
    }
}