import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }
  @Input() productInfo:any ; 
  @Output() isVistedStaus = new EventEmitter();
  ngOnInit(): void {
  }
  visted(){
    this.isVistedStaus.emit(true);
  }

}
