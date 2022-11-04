import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface MyData {
  name: string;
  // brand:string;
  age: number;
  // type:string;
  // taste:string;

}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
[x: string]: any;

  form: MyData = {
    name : '',
    age: 0,
    // brand: '',
    // type:'',

  }

  ListData: MyData[] = [];

  name: string = 'Nay';
  name1: any;
  count: number = 0;
  isShow: boolean = false;


  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {

  }

  save() {
    if (this.form.name.trim() == '' || this.form.age == 0)
      return;
    else
      this.ListData.push({
        name: this.form.name, age: this.form.age

      })

    this.form.name = '', this.form.age = 0
  }

  deleteInfo(i: number) {
    this.ListData.splice(i, 1);
  }

  changeName(name : string) {
    this.name  = name;
  }

  countCal(num : string){
    if(num == 'add'){
      this.count += 1;
    }
    else if(num == 'delete')
    {
      this.count -= 1;

      if(this.count<0){
        this.count = 0;
      }
    }

  }
}
