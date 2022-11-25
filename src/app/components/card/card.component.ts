import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  info: Array<number>;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() subTitulo: string = '';
  @Input() imgCard: string = '';

  numeroPersonas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  numeroLanzamientos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialogo(titulo: string) {
    let dialogRef;
    titulo === 'Cumpleaños' ? dialogRef = this.dialog.open(DialogoCumpleanios, { data: { info: this.numeroPersonas} }) : this.dialog.open(DialogoDados, { data: { info: this.numeroLanzamientos } });
    dialogRef?.afterClosed().subscribe(resultado => {
      console.log(`Resultado: ${resultado}`);
    });
  }

}

@Component({
  selector: 'dialogo-cumpleanios',
  templateUrl: '../dialog/dialogo-cumpleanios.html',
  styleUrls: ['../dialog/dialogo-cumpleanios.scss']
})
export class DialogoCumpleanios {

  constructor(
    public dialogRef: MatDialogRef<DialogoCumpleanios>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialogo-dados',
  templateUrl: '../dialog/dialogo-dados.html',
  styleUrls: ['../dialog/dialogo-dados.scss']
})
export class DialogoDados {

  constructor(
    public dialogRef: MatDialogRef<DialogoDados>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
