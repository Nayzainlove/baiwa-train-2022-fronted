import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data : any[] = []
res : any[] = []

   constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('https://anapioficeandfire.com/api/characters/583').subscribe(response => {
  this.data.push(response);
  this.res = this.data[0].tvSeries
  console.log('res : ',this.res)
  });
  };
}
// ngOnInit(): void {
//   this.http.get('https://anapioficeandfire.com/api/characters/583').subscribe(response => {
// this.data.push(response);
// this.res = this.data[0].aliases
// console.log('res : ',this.res)
// });
// };