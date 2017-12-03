import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Input() public filters: any;
  @Output() private applyFilterCallback: EventEmitter<any> = new EventEmitter();

  public callbackDispatcher($event): void {
    this.applyFilterCallback.emit($event);
  }
}