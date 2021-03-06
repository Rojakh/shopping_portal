import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
  }
  saveCustomer(): void {
    const data = {
      title: this.customer.title,
      description: this.customer.description
    };
    this.customerService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      title: '',
      description: '',
      published: false
    };
  }
}