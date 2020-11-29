import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  images = []

  constructor() { }

  ngOnInit(): void {
    for (let index = 1; index < 13; index++) {
      this.images.push(`/assets/images/image (${index}).png`)
    }
  }

}
