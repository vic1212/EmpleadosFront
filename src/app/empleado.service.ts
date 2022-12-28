import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Url que obtiene el listado de todos los empleados
  //private baseUrl = "http://localhost:8090/api/v1/empleados";


  private urlLista = "http://localhost:8090/empleados/lista";
  private urlAlta = "http://localhost:8090/empleados/nuevo"
  private urlObtenerEmpleadoPorId = "http://localhost:8090/empleados/empleado";
  private urlEliminar = "http://localhost:8090/empleados/borrar";
  private urlEditar = "http://localhost:8090/empleados/editar";
  constructor(private httpClient: HttpClient) { }


  //Metodo para obtener los empleados
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.urlLista}`);
  }

  //Metodo para registrar el empleado con HTTPCLIENT ESTOY RECIBIENDO
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.urlAlta}`, empleado);

  }

  //Metodo para actualizar el empleado
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.urlEditar}/${id}`, empleado);

  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadosPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.urlObtenerEmpleadoPorId}/${id}`);
  }

  //Metodo para eliminar empleado donde lo llama desde el backend de spring
  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.urlEliminar}/${id}`);
  }




}
