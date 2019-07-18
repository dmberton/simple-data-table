import { Component, OnInit } from '@angular/core';
import { UrlManagerService } from '../service/url-manager.service';

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.scss']
})
export class TablePagingComponent implements OnInit {
  data: any[] = [];
  pagedData: any[] = [];
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
  numRows = 10;
  total = 0;
  page = 1;

  constructor(private readonly urlManager: UrlManagerService) { }

  ngOnInit() {
    this.data = this.urlManager.fGetJsonData();
    this.fPage(this.page);
  }

  fSubmit(row) {
    console.log(row);
    // This will error out as the api does not exist but one can see the post is being 
    // executed in the browser network tab.
    this.urlManager.fPost({ id: row.id, status: row.status }).subscribe();
  }

  fPage(pageNumber: number): void {
    this.total = Math.ceil(this.data.length / this.numRows);
    this.page = pageNumber;
    // we need to make sure bogus page entries don't break the UI.
    if (this.page > this.total) {
      this.page = this.total;
    } else if (this.page < 1) {
      this.page = 1;
    }
    // Getting indexes of data array to slice.
    const start = this.numRows * (this.page - 1);
    const end = Math.min((start + this.numRows - 1), (this.data.length - 1)) + 1;
    this.pagedData = this.data.slice(start, end);
  }

}
