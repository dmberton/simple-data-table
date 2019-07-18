import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScrollComponent } from './table-scroll.component';

describe('TableScrollComponent', () => {
  let component: TableScrollComponent;
  let fixture: ComponentFixture<TableScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
