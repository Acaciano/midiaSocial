import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
}


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() isReadOnly = false;
  @Input() label:string;

  constructor() { }


  /*Default for ngModel */

  private innerValue: any = '';

  get value(){
    return this.innerValue;
  }

  set value(v: string){
    if(v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onBlur() {
    this.onTouchedCb;
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
        this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  onChangeCb: (_:any) => void = () => {};
  onTouchedCb: (_:any) => void = () => {};

  setDisabledState?(isDisabled:boolean) : void {
    this.isReadOnly = isDisabled; 
  }

   /*Default for NGMODEL */

}
