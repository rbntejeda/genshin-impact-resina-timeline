import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: "",
    component: TimelineComponent
  },
  {
    path: "guide",
    component: GuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
