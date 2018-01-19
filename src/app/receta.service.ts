import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import { of
} from 'rxjs/observable/of';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
//import { message } from './message/message.component';
import {
  Receta
} from './receta';/*
import {
  RECETAS
} from './mock-recetas';*/
import {
  MessageService
} from './message.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecetaService {

  private recetasUrl = 'http://localhost:3000/api/v1/receta'; // URL to web api
  /*
  private  toReceta(r:any): Receta{
    let receta = <Receta>({
      nombre: r.nombre,
      ingredientes: r.ingredientes,
      tags: r.etiquetas,
      imagen: r.imagen
    });
  }
  private mapRecetas(response:Response): Receta[]{
    // The response of the API has a results
    // property with the actual results
    return response.json().recetas.map(this.toReceta);
    //return response.json().map((res: Response) => new Categoria(res._id, res.parent));
 }*/

  constructor(
    private http: HttpClient,
    private mesService: MessageService) {}

  getRecetas(): Observable < Receta[] > {
    //  getRecetas(): Observable<Array<Receta>> {
    // Todo: send the message _after_ fetching the heroes
    //return of(RECETAS);
    console.log('recetaservice-get ' + (this.http.get < Receta[] > (this.recetasUrl + '/list')));
    return this.http.get < Receta[] > (this.recetasUrl + '/list');
  }
  getReceta(id: string): Observable < Receta > {
    // Todo: send the message _after_ fetching the hero
    console.log("Service get rceta id " + id)
    return this.http.get < Receta > (this.recetasUrl + '/id/' + id);
    //TO-DO CComprobar si se puede usar httperror response
    //.catch((err: HttpErrorResponse) => {
    /*
    .catch((err) => {
      console.error('Error al obtener la receta ' + id);
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', err.error.message);
      }
      else {
        console.error('Backend returned code ${err.status}, body was: ${err.error}');
      }
    });*/
  }

  createRecipe(receta: Receta): void {
    console.log('Createrecipe ' + receta);
    const req = this.http.post(
        this.recetasUrl,
        JSON.stringify(receta), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        }
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.mesService.confirm('Perfecto!', 'Has añadido la receta de ' + receta.nombre + ' en tu recetario', 'I')
            .subscribe(res => {
              console.log('Respuesta ' + res);
            });
        },
        err => {
          this.mesService.confirm('Uuups', 'No se ha podido crear la receta', 'E').subscribe(res => {
            console.log('Respuesta ' + res);
          });
        }
      );
  }

   
  updateRecipe(receta: Receta): void {
    console.log('Updaterecipe ' + receta);
    const req = this.http.put(
       (this.recetasUrl + '/id/' + receta.id),
        JSON.stringify(receta), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        }
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.mesService.confirm('Perfecto!', 'Has modificado la receta de ' + receta.nombre + ' en tu recetario', 'I')
            .subscribe(res => {
              console.log('Respuesta ' + res);
            });
        },
        err => {
          this.mesService.confirm('Uuups', 'No se ha podido modificar la receta', 'E').subscribe(res => {
            console.log('Respuesta ' + res);
          });
        }
      );
  }


  deleteRecipe(idreceta: String): any {
    console.log('Delrecipe ' + idreceta);
    const req = this.http.delete(
       (this.recetasUrl + '/id/' + idreceta)
    )
    .subscribe(
        (res) => {
          console.log("Borrado "+res);
          this.mesService.confirm('Perfecto!', 'Has borrado la receta de tu recetario', 'I')
            .subscribe(res => {
              console.log('Respuesta ' + res);
              return true;
            });
        },
        err => {
          this.mesService.confirm('Uuups', 'No se ha podido borrar la receta', 'E').subscribe(res => {
            console.log('Respuesta ' + res);
            return false;
          });
        }
      );
  }
}
