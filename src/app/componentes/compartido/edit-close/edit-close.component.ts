import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-edit-close',
  templateUrl: './edit-close.component.html',
  styleUrls: ['./edit-close.component.css']
})
export class EditCloseComponent implements OnInit {

  @Input() ocultarClose: boolean;
  @Input() clasesEdit: string;
  @Input() clasesClose: string;

  @Input() editando: boolean;
  @Output() editandoChange: EventEmitter<boolean> = new EventEmitter();

  constructor(public loginService: LoginService) {
    this.ocultarClose = false;
    this.clasesClose = "position-absolute close-descripcion";
    this.clasesEdit = "position-absolute edit-descripcion";
    this.editando = false;
  }

  ngOnInit() {
  }

  editClick() {
    this.editando = true;
    this.editandoChange.emit(this.editando);
  }

  closeClick() {
    this.editando = false;
    this.editandoChange.emit(this.editando);
  }
}

