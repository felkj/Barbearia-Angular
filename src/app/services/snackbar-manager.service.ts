import { Injectable } from '@angular/core';
import { ISnackbarManegerService } from './isnackbar-maneger.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarManagerService implements ISnackbarManegerService{

  constructor(private readonly snackBar: MatSnackBar) { }
  show(message: string, action: string = 'fechar', duration: number = 3000): void {
    this.snackBar.open(message, action, {duration, verticalPosition: 'top', horizontalPosition: 'right'})
  }

}
