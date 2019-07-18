import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { UrlManagerService } from '../service/url-manager.service';

@Component({
  selector: 'app-table-scroll',
  templateUrl: './table-scroll.component.html',
  styleUrls: ['./table-scroll.component.scss']
})
export class TableScrollComponent implements OnInit {
  @ViewChild('tableBody', { static: false })
  scrollTable: ElementRef;
  numRows = 10;
  scrollRows = 0;
  data: any[] = [];
  scrolledData: any[] = [];
  columns: string[] = [
    'Action',
    'Name',
    'Phone',
    'Email',
    'Company',
    'Entry Date',
    'Org Number',
    'Address',
    'City',
    'Zip',
    'Geo',
    'Pan',
    'Pin',
    'Id',
    'Status',
    'Fee',
    'Guid',
    'Exit date',
    'First date',
    'Recent date',
    'Url'
  ];

  constructor(private readonly urlManager: UrlManagerService) { }

  ngOnInit() {
    this.data = this.urlManager.fGetJsonData();
    this.scrollRows = this.numRows;
    this.scrolledData = this.data.slice(0, this.numRows);
  }

  fSubmit(row) {
    console.log(row);
    this.urlManager.fPost({ id: row.id, status: row.status }).subscribe();
  }

  fScroll() {
    const scroll = this.scrollTable.nativeElement.scrollTop;
    const height = this.scrollTable.nativeElement.clientHeight;
    const scrollHeight = this.scrollTable.nativeElement.scrollHeight;
    if (scrollHeight === (scroll + height) && this.scrollRows < this.data.length) {
      this.scrollRows = 2 * this.scrollRows;
      this.scrolledData = this.data.slice(0, this.scrollRows);
    }
  }

}
