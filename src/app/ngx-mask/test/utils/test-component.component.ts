import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IConfig } from 'public_api';

@Component({
  selector: 'test-mask',
  template: `<input [mask]="mask"
      [clearIfNotMatch]="clearIfNotMatch"
      [clearIfNotMatchDate]="clearIfNotMatchDate"
      [dropSpecialCharacters]="dropSpecialCharacters"
      [specialCharacters]="specialCharacters"
      [patterns]="patterns"
      [prefix]="prefix"
      [formControl]="form"
      [(ngModel)]="ngModelValue">`
})
export class TestMaskComponent {
  public mask: string | null;
  public ngModelValue: string | number;
  public form: FormControl = new FormControl(null);
  public dropSpecialCharacters: IConfig['dropSpecialCharacters'] = true;
  public clearIfNotMatch: IConfig['clearIfNotMatch'] = false;
  // public clearIfNotMatchNumber: IConfig['clearIfNotMatchNumber'] = false;
  public clearIfNotMatchDate: IConfig['clearIfNotMatchDate'] = false;
  public patterns: IConfig['patterns'];
  public prefix: IConfig['prefix'] = '';
  public specialCharacters: IConfig['specialCharacters'];
}
