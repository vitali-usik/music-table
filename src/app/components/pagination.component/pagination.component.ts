import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { PaginationItemModel } from '../../models/pagination-item.model';
import { ActionTypes } from '../../const/action-types.const';

@Component({
  selector: 'mt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  private activeItem: PaginationItemModel;

  @Input() public paginationData: PaginationItemModel[];
  @Output() private doNavigationCallback: EventEmitter<any> = new EventEmitter();

  public ngOnInit(): void {
    this.setActiveIndex();
  }

  public ngOnChanges(): void {
    this.setActiveIndex();
  }

  /**
   * Converts index from prev/next to number and calls callback
   * @param index
   */
  public doNavigation(index: number): void {
    if (index < 1 || index > this.paginationData.length) {
      return;
    }

    this.doNavigationCallback.emit({ eventType: ActionTypes.PAGINATION, index });
  }

  /**
   * Sets active items
   */
  private setActiveIndex(): void {
    this.activeItem = this.paginationData.find((item) => {
      return item.isActive;
    });
  }
}