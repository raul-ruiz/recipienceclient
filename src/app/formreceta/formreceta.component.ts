import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MatTableDataSource, MAT_DIALOG_DATA} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Receta, LineaIngrediente } from '../receta';
import { RecetaService } from '../receta.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-formreceta',
  templateUrl: './formreceta.component.html',
  styleUrls: ['./formreceta.component.css']
})

export class FormrecetaComponent implements OnInit {
  isLinear = false;
  selectable = true;
  removable = true;

  public uploader: FileUploader = new FileUploader({url:'http://localhost:3000/upload'});

  primerPaso: FormGroup;
  segundoPaso: FormGroup;
  tercerPaso: FormGroup;
  cuartoPaso: FormGroup;
  ingActual: String;
  tagActual: string;
  cantidadActual: String;
  nombre: String;
  elaboracion: String;
  receta: Receta;
  listaIngredientes = <LineaIngrediente[]> [];
  categorias = [
    {value: 'primeros', viewValue: 'Primeros'},
    {value: 'carnes', viewValue: 'Carnes'},
    {value: 'pescados', viewValue: 'Pescados'},
    {value: 'postres', viewValue: 'Postres'}
  ];
  defColumnas = ['ingrediente', 'cantidad', 'acciones'];



  dataSource = new MatTableDataSource<LineaIngrediente>(this.listaIngredientes);
 
  
  ingredientes = ['aceite', 'agua', 'queso', 'zanahoria', 'patatas', 'huevo', 'mahonesa', 'tomate natural'];
  myControl: FormControl = new FormControl();
  constructor( 
    private recetaService: RecetaService,
    private _formBuilder: FormBuilder,
    private mesService: MessageService,
    private route: ActivatedRoute) { }


  filteredIngr: Observable<string[]>;

  ngOnInit() {
    this.receta = new Receta();
    this.receta.tags = [];
    this.primerPaso = this._formBuilder.group({
      ctrlNombre: ['', Validators.required],
      ctrlCategoria: ['', Validators.required]
    });
    this.segundoPaso = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.tercerPaso = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.cuartoPaso = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

    this.filteredIngr = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );

    // Leer la receta estuvieramos editando
    this.getReceta();  
  }

  getReceta(): void {
    const id: string = this.route.snapshot.paramMap.get('id');

    this.recetaService.getReceta(id)
      .subscribe((resp: Receta) => {
        // Ha llegado a funcionar con resp.receta
        this.receta = resp;
        this.listaIngredientes = resp.ingredientes;
        this.dataSource.data = this.listaIngredientes;
        console.log(this.receta);
      });
    }
  filter(val: string): string[] {
    return this.ingredientes.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  addIngredient() {
    let e : LineaIngrediente;
    e = {ingrediente: this.ingActual, cantidad: this.cantidadActual};


    this.listaIngredientes.push(e);
    this.dataSource.data = this.listaIngredientes;
    this.ingActual = '';
    this.cantidadActual = '';
    

  }

  removeIngredient(element){
    const indice = this.listaIngredientes.findIndex( ingrediente => ingrediente.ingrediente === element.ingrediente)
    this.listaIngredientes.splice(indice,1);
    this.dataSource.data = this.listaIngredientes;


  }


  addTag() {
    console.log("Añadir tag " +  this.tagActual);
    // Sólo añadimos si el usuario ha especificado una etiqueta
    if (this.tagActual !== '')
    {
      // Chequeamos si ya existe
      if (this.receta.tags.indexOf('#'+this.tagActual) >= 0)
      { 
        this.mesService.confirm('Uuups!', 'Ya habías añadido la etiqueta #' + this.tagActual, 'E').subscribe(res => {console.log(res); });
      }
      else
      {
        this.receta.tags.push('#' + this.tagActual);
      }
    };
    this.tagActual = '';
  }

  removeTag(tag: any): void{
    let index = this.receta.tags.indexOf(tag);

    if (index >= 0) {
      this.receta.tags.splice(index, 1);
    }
  }
  saveRecipe()
  {
    this.receta.ingredientes = this.dataSource.data;
 
    // Al guardar, crearemos o modificaremos la receta
    if (this.receta.id === undefined)
    {
      console.log('Receta en el momento de grabar ' + this.receta);
      this.recetaService.createRecipe(this.receta);
    }
    else
    {
      this.recetaService.updateRecipe(this.receta);
    }

  }
}


