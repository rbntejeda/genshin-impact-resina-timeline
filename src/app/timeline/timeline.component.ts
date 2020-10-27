import { Component, OnInit } from '@angular/core';
import * as moment from "moment";


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  currentResina;

  timeline: {
    time: number,
    sum: number,
    total: number,
    cuenta: string
  }[] = []

  int

  constructor() {
    if (localStorage['currentResina']) {
      this.currentResina = +localStorage.currentResina
      this.calculate()
    }
  }

  ngOnInit(): void {

  }

  calculate() {
    this.timeline = []
    
    localStorage.setItem('currentResina', this.currentResina)

    var time = Date.now();
    var sum = 0;
    var total = this.currentResina;
    var cuenta = "-";

    this.timeline.push({ time, sum, total, cuenta })

    var restoResina = this.currentResina % 20;
    var diffResina = 20 - restoResina;

    time += diffResina * 1000 * 60 * 8;
    sum += diffResina;
    total += diffResina;
    cuenta = this.duration(time);

    this.timeline.push({ time, sum, total, cuenta })
    while (total <= 100) {
      time += 20 * 1000 * 60 * 8;
      sum += 20;
      total += 20;
      cuenta = this.duration(time);
      this.timeline.push({ time, sum, total, cuenta })
    }
    if (this.int) {
      clearInterval(this.int)
    }
    this.int = setInterval(() => {
      this.updateCuenta()
    }, 1000)

  }

  duration(future) {
    var n = (n) => {
      return n > 9 ? "" + n : "0" + n;
    }
    var duration = moment.duration(future - Date.now())
    var hours = duration.hours();
    var minutes = duration.minutes();
    var second = duration.seconds();
    var textHour = (hours > 9)
    return `${n(hours)}:${n(minutes)}:${n(second)}`;
  }

  updateCuenta() {
    this.timeline.forEach(e => {
      if (e.time > Date.now()) {
        e.cuenta = this.duration(e.time);
      } else {
        e.cuenta = "-";
      }
    });
  }

}
