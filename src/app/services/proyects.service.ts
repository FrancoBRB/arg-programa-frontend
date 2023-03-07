import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  proyectos = [
    {
      id: 1,
      nombre: 'Software de Gestión',
      descripcion:
        'Es un proyecto en grupo de tres que fue presentado en la materia Programación Orientada a Objetos. Se trata de un software para control de stock y ventas, entre otras funciones.',
      repositorio: 'https://github.com/FrancoBRB/software-de-gestion',
      img: 'assets/img/sdg.png',
    },
    {
      id: 2,
      nombre: 'Encripador ONE',
      descripcion:
        'Desafió para el programa ONE donde se pide una aplicación que encripte/desencripte un texto. Consta en generar un texto secreto intercambiando ciertas letras por ”llaves”. ',
      repositorio: 'https://github.com/FrancoBRB/encriptador-one',
      img: 'assets/img/encriptador.png',
    },
    {
      id: 3,
      nombre: 'Juego del Ahorcado',
      descripcion:
        'El clásico juego del ahorcado desarrollado en HTML,CSS Y JavaScript.',
      repositorio: 'https://github.com/FrancoBRB/hangman-one',
      img: 'assets/img/ahorcado.png',
    },
    {
      id: 4,
      nombre: 'Alura Geek',
      descripcion:
        'Se trata de un e commerce fullstack responsivo para 3 resoluciones, cuenta con una página de home donde muestra un banner y productos seleccionados por categoría. También cuenta con una barra de búsqueda y login para la administración de productos.',
      repositorio: 'https://github.com/FrancoBRB/alurageekecomm',
      img: 'assets/img/alura-geek.png',
    },
  ];

  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(this.proyectos);
  }
}

export interface Project {
  id: Number;
  nombre: String;
  descripcion: String;
  repositorio: String;
  img: String;
}
