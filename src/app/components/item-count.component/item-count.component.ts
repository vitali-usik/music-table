import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemCount } from '../../models/item-count.model';
import { ActionTypes } from '../../const/action-types.const';

@Component({
  selector: 'mt-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent {

  @Input() public itemsData: ItemCount[];
  @Output() private doItemCountChangeCallback: EventEmitter<any> = new EventEmitter();

  public setItemCount(items: number): void {
    this.doItemCountChangeCallback.emit({ eventType: ActionTypes.ITEMS_COUNT_CHANGE, itemsPerPage: items });
  }
}