import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;
  constructor(private route:ActivatedRoute, private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    //Obtengo el id de la ruta
    this.id = this.route.snapshot.params['id'];
    //Con esto inicializamos el empleado
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadosPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
    });


  }

}
