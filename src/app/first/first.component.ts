import { Component } from '@angular/core';
import projects from "./projects.json";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  title = 'json-file-read-angular';
  data: any = projects;
  public projectsList = projects;

  public slideIndex = 0;

  plusDivs(n: number) {
    this.changeDivs(this.slideIndex += n);
  }

  changeDivs(n: number) {
    var x = document.getElementsByClassName("mySlides");
    if (n > this.projectsList.length) {this.slideIndex = 1}
    if (n < 0) {this.slideIndex = x.length} ;
    this.showDiv(n);
  }

  showDiv(n: number) {
    document.getElementById("project" + n)?.scrollIntoView({behavior: 'smooth' });
  }
}
