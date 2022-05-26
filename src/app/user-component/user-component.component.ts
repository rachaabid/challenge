import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  public name = "toto";
  public email = "toto@Fivpoints.fr";
  public adress = "rue d\rue de la bourse lac2";
  public hobbies =  ['Music','Movies','Sports'];
  public show = true;
  public hide = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.hobbies;
    this.show = !this.show;
    this.hide = !this.hide;
   }

   supprimeHobby(i: number){
     this.hobbies.splice(i,1);
     console.log(this.hobbies);
   }

}
