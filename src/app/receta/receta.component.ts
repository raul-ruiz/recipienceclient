import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ActivatedRoute, Router
} from '@angular/router';
import {
  Location
} from '@angular/common';

import {
  Receta
} from '../receta';
import {
  RecetaService
} from '../receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  @Input() receta: Receta;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.receta = new Receta();
    this.getReceta();
  }

  getReceta(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
// Ha llegado a funcionar con resp.receta
    this.recetaService.getReceta(id)
      .subscribe(
          res => { this.receta = res; 
                   if (this.receta.imagen === '')
                   {this.receta.imagen = './assets/noimage.svg'}} ,
          err => { console.log("Error " +  err ); }) ;
  }


  goBack(): void {
    this.location.back();
  }

  goEdit(): void {
    this.router.navigateByUrl('/receta/editar/' + this.receta.id);
  }

  goDel(): void {
    if (this.recetaService.deleteRecipe(this.receta.id))
    {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
