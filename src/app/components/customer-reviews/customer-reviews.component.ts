import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentCustomer: Customer = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCustomer(this.route.snapshot.params["id"]);
    }
  }
  getCustomer(id: string): void {
    this.customerService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCustomer = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  updateCustomer(): void {
    this.message = '';
    alert("This Customer Was Updated Successfully");
    this.customerService.update(this.currentCustomer.id, this.currentCustomer)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This customer was updated successfully!';
          
        },
        error: (e) => console.error(e)
      });
  }
  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert("Are You Sure?");
          this.router.navigate(['/customers']);
        },
        error: (e) => console.error(e)
      });
  }
}