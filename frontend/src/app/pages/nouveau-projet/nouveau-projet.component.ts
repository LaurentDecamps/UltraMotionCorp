import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.component.html',
  styleUrls: ['./nouveau-projet.component.css']
})
export class NouveauProjetComponent implements OnInit {
  prestationsChoisies: object[] = []
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
  days: string[] = []

  constructor() { }

  ngOnInit(): void {
    history.state.data && this.prestationsChoisies.push(history.state.data)
    console.log(this.prestationsChoisies)
    this.getFirstWeekDay()
  }

  decrementYear() {
    this.setYear(this.year - 1)
  }

  incrementYear() {
    this.setYear(this.year + 1)
  }

  decrementMonth() {
    if (this.monthIndex < 1) {
      this.year -= 1
      this.setMonthIndex(11)
    }
    else {
      this.setMonthIndex(this.monthIndex - 1)
    }
  }

  incrementMonth() {
    if (this.monthIndex > 10) {
      this.year += 1
      this.setMonthIndex(0)
    }
    else {
      this.setMonthIndex(this.monthIndex + 1)
    }
  }

  getFirstWeekDay() {
    let c = Math.floor((13 - this.monthIndex) / 12)
    let a = this.year - c
    let m = this.monthIndex + 1 + 12 * c - 2
    let j = (1 + a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor(31 * m / 12)) % 7
    let monthDays = this.months[this.monthIndex]["days"]
    this.days = []
    while (monthDays > 0) {
      this.days.unshift(monthDays.toString())
      monthDays--
    }
    this.days = j === 0
      ? Array(6).fill("").concat(this.days)
      : Array(j - 1).fill("").concat(this.days)
    this.days = this.days.concat(Array(7 - this.days.length % 7).fill(""))
  }

  setYear(value: number) {
    this.year = value
    value % 400 === 0 || (value % 4 === 0 && value % 100 !== 0)
      ? this.months[1]["days"] = 29
      : this.months[1]["days"] = 28
    this.getFirstWeekDay()
  }

  setMonthIndex(value: number) {
    this.monthIndex = value
    this.getFirstWeekDay()
  }

  formatDate(dateElement) {
    return dateElement.length === 1 ? `0${dateElement}` : dateElement
  }

  setStartDate(day) {
    this.startDate = ""
    if (day.length) {
      this.startDate = `${this.formatDate(day)}/${this.formatDate((this.monthIndex + 1).toString())}/${this.year}`
    }
  }

  findMorePrestations(event) {
    let array = []
    for (let key in event.target) {
      if (event.target[key] && event.target[key].checked) {
        array.push(event.target[key].labels[0].innerText)
      }
    }
    console.log(array)
  }

  displayNeeds() {
    document.getElementById("needs").style.display = "flex"
  }

  submitNewProject(event) {
    let object = {}
    for (let key in event.target) {
      if (Number.isInteger(parseInt(key)) && event.target[key].checked) {
        object[event.target[key].name] = event.target[key].labels[0].innerText
      }
      if (Number.isInteger(parseInt(key)) && event.target[key].value.length) {
        object[event.target[key].name] = event.target[key].name === "surfacem2"
          ? parseInt(event.target[key].value)
          : event.target[key].value
      }
    }
    object["dateDebut"] = new Date(this.year, this.monthIndex, parseInt(this.startDate.split("/")[0]))
    object["prestations"] = []
    object["entreprises"] = []
    if (this.prestationsChoisies.length) {
      this.prestationsChoisies.forEach(p => {
        object["prestations"].push(p["prestation"])
        object["entreprises"].push(p["company"])
      })
    }
    localStorage.setItem("newProject", JSON.stringify(object))
    let test = localStorage.getItem("newProject")
    console.log(JSON.parse(test))

  }

}
