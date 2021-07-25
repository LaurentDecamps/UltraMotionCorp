import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.component.html',
  styleUrls: ['./nouveau-projet.component.css']
})
export class NouveauProjetComponent implements OnInit {
  startDate: string
  year: number = 2021
  months: object[] = [
    {month: "janvier", days: 31},
    {month: "février", days: 28},
    {month: "mars", days: 31},
    {month: "avril", days: 30},
    {month: "mai", days: 31},
    {month: "juin", days: 30},
    {month: "juillet", days: 31},
    {month: "août", days: 31},
    {month: "septembre", days: 30},
    {month: "octobre", days: 31},
    {month: "novembre", days: 30},
    {month: "décembre", days: 31}
  ]
  monthIndex: number = 11
  weekDays: string[] = ["L", "M", "M", "J", "V", "S", "D"]
  days: (string | number)[] = []

  constructor() { }

  ngOnInit(): void {
    let c = Math.floor((13 - this.monthIndex) / 12)
    let a = this.year - c
    let m = this.monthIndex + 1 + 12 * c - 2
    let j = (1 + a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor(31 * m / 12)) % 7
    let monthDays = this.months[this.monthIndex]["days"]
    while (monthDays > 0) {
      this.days.unshift(monthDays)
      monthDays--
    }
    this.days = Array(j - 1).fill("").concat(this.days)
    console.log(this.days)
  }

}
