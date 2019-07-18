import { Component, OnInit } from '@angular/core';
import { UrlManagerService } from '../service/url-manager.service';

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.scss']
})
export class TablePagingComponent implements OnInit {
  data: any[] = [];
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
    console.log(this.data);
  }

  fSubmit(row) {
    this.urlManager.fPost({ id: row.id, status: row.status });
  }

}
