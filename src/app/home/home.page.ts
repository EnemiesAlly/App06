import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  // Define the items array inside the class
  items = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 39990,
      detail: "This is an iPhone 15 Pro Max by Apple",
      imagesURL: "assets/images/product/i15promax.png"
    },
    {
      id: 2,
      name: "Samsung S24 Ultra",
      price: 34990,
      detail: "This is a Samsung S24 Ultra by Samsung",
      imagesURL: "assets/images/product/s24u.png"
    },
    {
      id: 3,
      name: "Samsung A54 5G",
      price: 34990,
      detail: "This is a Samsung A54 5G by Samsung",
      imagesURL: "assets/images/product/A54.png"
    },
    {
      id: 4,
      name: "Xiaomi 14T Pro",
      price: 34990,
      detail: "This is a Xiaomi 14T Pro by Xiaomi",
      imagesURL: "assets/images/product/mi14tpro.png"
    },
  ];

  constructor(private detail: NavController) {}

  Gotodetail(i: any) {
    this.detail.navigateForward('/detail', { state: { i } });
  }
}
