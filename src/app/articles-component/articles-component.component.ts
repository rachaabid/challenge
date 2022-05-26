import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  public titre = "Les articles du jour » et l’afficher dans la vue de ce composant";

  public listeArticles = [{titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est....',auteur:'Med Taher',date:'12/12/2005'}, {titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018'}, {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}];

  constructor() { }

  ngOnInit(): void {
  }

}
