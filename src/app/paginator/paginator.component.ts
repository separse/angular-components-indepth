import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberofPages;
  @Output() pageNumberClick = new EventEmitter<number>();
  pages: number[];
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberofPages);
  }

  pageNumberClicked(pageNumber){
    console.log("pageNumberClicked "+pageNumber);
    this.pageNumberClick.emit(pageNumber);
  }
}
