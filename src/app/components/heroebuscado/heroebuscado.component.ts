import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroebuscado',
  templateUrl: './heroebuscado.component.html'
})
export class HeroebuscadoComponent implements OnInit {
  heroes:Heroe[] = [];
  busqueda:string = "";

  constructor( private _heroesService: HeroesService, private _activatedRoute:ActivatedRoute, private _router:Router ) { 
    
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['filtro']);
      this.busqueda = params['filtro'];
    })
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }
}
