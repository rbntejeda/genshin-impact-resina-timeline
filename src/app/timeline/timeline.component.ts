import { Component, OnInit } from '@angular/core';
import * as moment from "moment";


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  init = {
    resina: null,
    time: null
  }

  current = {
    resina: null,
    cuenta: '-',
    time: null
  }

  timeline: {
    time: number,
    sum: number,
    total: number,
    cuenta: string
  }[] = []

  int

  constructor() {
    if (localStorage['initResina']) {
      var { resina, time } = JSON.parse(localStorage.getItem('initResina'));
      this.calculate(resina, time)
    }
  }

  ngOnInit(): void {

  }

  calculate(resina?, time?) {
    this.timeline = []
    this.init.resina = resina || this.init.resina;
    this.init.time = time || Date.now();
    localStorage.setItem('initResina', JSON.stringify(this.init))

    var time = this.init.time;
    var sum = 0;
    var total = this.init.resina;
    var cuenta = "-";

    this.timeline.push({ time, sum, total, cuenta })

    var restoResina = this.init.resina % 20;
    var diffResina = 20 - restoResina;

    time += diffResina * 1000 * 60 * 8;
    sum += diffResina;
    total += diffResina;
    cuenta = '-';

    this.timeline.push({ time, sum, total, cuenta })
    while (total <= 100) {
      time += 20 * 1000 * 60 * 8;
      sum += 20;
      total += 20;
      cuenta = '-';
      this.timeline.push({ time, sum, total, cuenta })
    }
    if (this.int) {
      clearInterval(this.int)
    }
    this.updateCuenta()
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
    return `${n(hours)}:${n(minutes)}:${n(second)}`;
  }

  updateCuenta() {
    this.current.time = Date.now();
    var duration = moment.duration(this.current.time - this.init.time);
    this.current.resina = this.init.resina + Math.floor(duration.asMinutes() / 8);


    var restoResina = duration.asMilliseconds() % (8 * 1000 * 60);

    var diffResina = (8 * 1000 * 60) - restoResina;
    this.current.cuenta = this.duration(Date.now() + diffResina)

    this.timeline.forEach(e => {
      if (e.time > this.current.time) {
        e.cuenta = this.duration(e.time);
      } else {
        e.cuenta = "-";
      }
    });
  }

}
