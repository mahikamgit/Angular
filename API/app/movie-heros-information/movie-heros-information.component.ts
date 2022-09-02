import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-heros-information',
  templateUrl: './movie-heros-information.component.html',
  styleUrls: ['./movie-heros-information.component.scss']
})
export class MovieHerosInformationComponent implements OnInit {

  constructor() { }
  chiruMovieList = ['adjgad','aewe','qieqe'];
  venkiMovileList = ['qtwuq','iqeiqe','qieiqe']
  ngOnInit(): void {
  }

}
