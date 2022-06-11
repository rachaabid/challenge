import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
  <input type="number" [(ngModel)]="x">, 
  <p> Pour la valeur {{x}}, le resultat est {{result}}</p>
  <button type="button" class="btn btn-success" (click)="calculCercle(x)">calculer cercle</button>
  <button type="button" class="btn btn-success" (click)="calculCarre(x)">calculer carre</button>
  ` ,
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public result = 0;
  public x = 5;
  constructor() { }

  ngOnInit(): void {
  }

  calculCercle(x: number){ 
   this.result = 3.14 * 2 * x;
  }
  calculCarre(x: number){
    this.result = x*x;
  }
}
