import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pokeshop } from "../pokeshop";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() pokeshop: Pokeshop;
  @Output() detailClickHandler: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detailClicked() {
    this.detailClickHandler.emit(this.pokeshop.id);
  }

}
