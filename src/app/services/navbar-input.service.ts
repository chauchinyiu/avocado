import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarInputService {
  private inputValue:string; 
  @Output() inputSubmitEvent: EventEmitter<string> = new EventEmitter();
  @Output() inputChangeEvent: EventEmitter<string> = new EventEmitter();

  setInputValue(value:string){
    this.inputValue = value;
  }

  inputSubmit() {
    this.inputSubmitEvent.emit(this.inputValue);
  }

  inputChanged(){
    this.inputChangeEvent.emit(this.inputValue)
  }
}
