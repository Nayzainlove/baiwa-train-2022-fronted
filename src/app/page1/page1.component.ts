import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = [
    {
      name: "ยำยำจัมโบ้",
      type: "ซอง",
      taste: "เค็ม",
      amount: "100 g",
      price: 10,
    },
    {
      name: "ไวไว",
      type: "ซอง",
      taste: "หวาน",
      amount: "125 g",
      price: 6,
    },
    {
      name: "นิสชิน",
      type: "ซอง",
      taste: "เปรี้ยว",
      amount: "150 g",
      price: 10,
    },
    {
      name: "มาม่า",
      type: "ซอง",
      taste: "เผ็ด",
      amount: "100 g",
      price: 6,
    },
    {
      name: "นิสชิน",
      type: "ซอง",
      taste: "เปรี้ยว",
      amount: "150 g",
      price: 10,
    },
    {
      name: "มาม่า",
      type: "ซอง",
      taste: "เผ็ด",
      amount: "100 g",
      price: 6,
    },
    {
      name: "นิสชิน",
      type: "ซอง",
      taste: "เปรี้ยว",
      amount: "150 g",
      price: 10,
    },
    {
      name: "มาม่า",
      type: "ซอง",
      taste: "เผ็ด",
      amount: "100 g",
      price: 6,
    },
    {
      name: "นิสชิน",
      type: "ซอง",
      taste: "เปรี้ยว",
      amount: "150 g",
      price: 10,
    },
    {
      name: "มาม่า",
      type: "ซอง",
      taste: "เผ็ด",
      amount: "100 g",
      price: 6,
    }
  ]
  delete(i : number){
    this.list.splice(i, 1);
}
}

