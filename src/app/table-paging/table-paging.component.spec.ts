import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePagingComponent } from './table-paging.component';
import { UrlManagerService } from '../service/url-manager.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('TablePagingComponent', () => {
  let component: TablePagingComponent;
  let fixture: ComponentFixture<TablePagingComponent>;
  let urlManager: UrlManagerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [TablePagingComponent],
      providers: [UrlManagerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePagingComponent);
    component = fixture.componentInstance;
    urlManager = TestBed.get(UrlManagerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    component.ngOnInit();
    expect(component.data).toBeTruthy();
    expect(component.data.length).toEqual(200);
    expect(component.numRows).toEqual(10);
    expect(component.pagedData).toBeTruthy();
    expect(component.pagedData.length).toEqual(10);
  });

  it('fSubmit', () => {
    spyOn(urlManager, 'fPost').and.callThrough();
    const myObj = { id: 1, status: 'dom-ok' };
    component.fSubmit(myObj);
    expect(urlManager.fPost).toHaveBeenCalledWith(myObj);
  });

  it('fPage 0', () => {
    component.fPage(0);
    expect(component.page).toEqual(1);
  });

  it('fPage 1000', () => {
    component.fPage(1000);
    expect(component.page).toEqual(20);
  });

  it('fPage 2', () => {
    component.fPage(2);
    expect(component.page).toEqual(2);
    expect(component.pagedData.length).toEqual(10);
    expect(component.pagedData[0].id).toEqual(11);
  });

});
