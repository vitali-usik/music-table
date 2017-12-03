import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent {

  @Input() public data: any;
  @Output() private applyFilterCallback: EventEmitter<any> = new EventEmitter();

  public applyFilter($event): void {
    this.applyFilterCallback.emit({ eventType: this.data.type, value: $event.target.value });
  }
}