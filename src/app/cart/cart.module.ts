import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

import { CartService } from './cart.service';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CartService],
  exports: [
    CartListComponent,
    CartItemComponent
  ]

})
export class CartModule { }
