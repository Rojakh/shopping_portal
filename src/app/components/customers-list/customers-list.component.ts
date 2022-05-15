import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers?: Customer[];
  currentCustomer: Customer = {};
  currentIndex = -1;
  title = '';
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.retrieveCustomers();
  }
  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe({
        next: (data) => {
          this.customers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = {};
    this.currentIndex = -1;
  }
  setActiveCustomer(customer: Customer, index: number): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }
    
}