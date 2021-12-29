import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-final-card',
  templateUrl: './final-card.component.html',
  styleUrls: ['./final-card.component.css']
})
export class FinalCardComponent implements OnInit {

  @Output() volver:EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }


  volverHome(){
    this.volver.emit();
  }

}
