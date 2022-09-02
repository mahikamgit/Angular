import { Component, OnInit } from '@angular/core';
import { DataSahreService } from 'src/app/data-sahre.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private ataShare:DataSahreService) { }
  isVisted = false;
  selectedProductInfo = {};
  products = [
    { name: 'mobile', cost: 12000, isAvilable: true },
    { name: 'Tv', cost: 30000, isAvilable: true },
    { name: 'Washing machine', cost: 32000, isAvilable: false },
    { name: 'headset', cost: 1000, isAvilable: true }
  ]
  ngOnInit(): void {
  }

  addProduct(){
    this.products.push({name:'fridge', cost:232424,isAvilable:true})
  }
  slecetdProduct(data:any){
    this.selectedProductInfo = data;
  }
  chnageStaus(data:boolean){
    console.log('chnageStauschnageStaus');
    console.log(data);
    this.isVisted = data;
  }

}
