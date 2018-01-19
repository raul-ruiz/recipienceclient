import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import {
  ActivatedRoute, Router
} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  private listaRecetas: Receta[] ;
  constructor(
    private recetaService: RecetaService,
    private router: Router,
    private observableMedia: ObservableMedia) { }
    numcol: number;
    categoriasel: string;

  ngOnInit() {
    this.listaRecetas = [];
    this.getRecetas();
    this.categoriasel = '';
    if (this.observableMedia.isActive('sm'))
    { this.numcol = 2; }
    else {
       this.numcol = 3;
    };
    this.numcol = 2;
  }

  getRecetas(): void {
    this.recetaService.getRecetas()
    .subscribe((rec: Receta[]) => {
              this.listaRecetas = rec;
            } );
  }

  setCategory(cat: string):void{
    this.categoriasel = cat;
  }
  goAdd(): void {
    this.router.navigateByUrl('/receta/editar/');
  }
}
