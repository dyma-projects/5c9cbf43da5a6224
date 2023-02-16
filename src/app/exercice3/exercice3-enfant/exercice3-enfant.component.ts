import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Exercice1Component} from "../../exercice1/exercice1.component";
import {Exercice3Component} from "../exercice3.component";

@Component({
  selector: 'app-exercice3-enfant',
  templateUrl: './exercice3-enfant.component.html',
  styleUrls: ['./exercice3-enfant.component.css']
})
export class Exercice3EnfantComponent implements OnInit {
  @ViewChildren(Exercice3Component) public el!:QueryList<Exercice3Component>;

  constructor() { }

  ngOnInit() {

  }

}
