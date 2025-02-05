import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ReplaceCommaPipe } from '../replace-comma.pipe';

@Component({
  selector: 'app-loan-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule,ReplaceCommaPipe],
  templateUrl: './loan-dashboard.component.html',
  styleUrl: './loan-dashboard.component.css'
})
export class LoanDashboardComponent {
  loanAmount: number = 14500000;
  loanPeriod: number = 12;
  maxFunding: number = 17484500;
  monthlyInstallment: number = 0;

  constructor() {
    this.calculateLoan();
  }

  calculateLoan() {
    const interestRate = 0.25; // Example interest rate
    let calLoanAmt= (this.loanAmount + (this.loanAmount * interestRate * (this.loanPeriod / 12))) / this.loanPeriod;
    this.monthlyInstallment  = JSON.parse(calLoanAmt.toFixed(2).replace(/,/g, '.'));
  }

  callapplyLoan() {
    console.log(`Applied Loan Amount: Rp ${this.loanAmount}, Duration: ${this.loanPeriod} months, Monthly EMI: Rp ${this.monthlyInstallment}`);
    alert(`Applied Loan Amount: Rp ${this.loanAmount}, Duration: ${this.loanPeriod} months, Monthly EMI: Rp ${this.monthlyInstallment}`);
  }
}
