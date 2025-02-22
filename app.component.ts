import { Component } from '@angular/core';
import { UsageService } from './usage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usageData = [];
  customerId = '';
  totalUsage = 0;
  usageDate = '';

  constructor(private usageService: UsageService) {}

  ngOnInit() {
    this.loadUsageData();
  }

  loadUsageData() {
    this.usageService.getUsage().subscribe(data => {
      this.usageData = data;
    });
  }

  addUsage() {
    const newUsage = {
      customerId: this.customerId,
      totalUsage: this.totalUsage,
      usageDate: this.usageDate
    };

    this.usageService.addUsage(newUsage).subscribe(() => {
      this.loadUsageData();
    });
  }
}