import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'status', 'option'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  status: string;
  option: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Audi', price: 1.0079, status: 'Pending', option: ''},
  {position: 2, name: 'BMW', price: 4.0026, status: 'Pending', option: ''},
  {position: 3, name: 'Swift', price: 6.941, status: 'Pending', option: ''},
  {position: 4, name: 'Hyundai', price: 9.0122, status: 'Approved', option: ''},
  {position: 5, name: 'Benz', price: 10.811, status: 'Approved', option: ''},
  {position: 6, name: 'Audi', price: 12.0107, status: 'Approved', option: ''},
  {position: 7, name: 'Nitrogen', price: 14.0067, status: 'Approved', option: ''},
  {position: 8, name: 'Oxygen', price: 15.9994, status: 'Approved', option: ''},
  {position: 9, name: 'Fluorine', price: 18.9984, status: 'Approved', option: ''},
  {position: 10, name: 'Neon', price: 20.1797, status: 'Approved', option: ''},
  {position: 11, name: 'Sodium', price: 22.9897, status: 'Approved', option: ''},
  {position: 12, name: 'Magnesium', price: 24.305, status: 'Pending', option: ''},
  {position: 13, name: 'Aluminum', price: 26.9815, status: 'Pending', option: ''},
  {position: 14, name: 'Silicon', price: 28.0855, status: 'Approved', option: ''},
  {position: 15, name: 'Phosphorus', price: 30.9738, status: 'Approved', option: ''},
  {position: 16, name: 'Sulfur', price: 32.065, status: 'Approved', option: ''},
  {position: 17, name: 'Chlorine', price: 35.453, status: 'Approved', option: ''},
  {position: 18, name: 'Argon', price: 39.948, status: 'Approved', option: ''},
  {position: 19, name: 'Potassium', price: 39.0983, status: 'Pending', option: ''},
  {position: 20, name: 'Calcium', price: 40.078, status: 'Pending', option: ''},
];

