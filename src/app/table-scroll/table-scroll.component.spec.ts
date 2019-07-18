import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableScrollComponent } from './table-scroll.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { UrlManagerService } from '../service/url-manager.service';

describe('TableScrollComponent', () => {
  let component: TableScrollComponent;
  let fixture: ComponentFixture<TableScrollComponent>;
  let urlManager: UrlManagerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [TableScrollComponent],
      providers: [UrlManagerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableScrollComponent);
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
    expect(component.scrolledData).toBeTruthy();
    expect(component.scrolledData.length).toEqual(10);
  });

  it('fSubmit', () => {
    spyOn(urlManager, 'fPost').and.callThrough();
    const myObj = { id: 1, status: 'dom-good' };
    component.fSubmit(myObj);
    expect(urlManager.fPost).toHaveBeenCalledWith(myObj);
  });

  it('fScroll', () => {
    component.fScroll();
    expect(component.scrolledData).toBeTruthy();
    expect(component.scrolledData.length).toEqual(10);
  });
});
