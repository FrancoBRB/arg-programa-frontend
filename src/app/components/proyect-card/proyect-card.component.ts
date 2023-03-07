import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css'],
})
export class ProyectCardComponent implements OnInit {
  @Input() name: String = '';
  @Input() desc: String = '';
  @Input() img: String = '';
  @Input() repo: String = '';

  constructor() {}

  ngOnInit() {}
}
