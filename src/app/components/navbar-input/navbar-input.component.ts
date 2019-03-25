import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavbarInputService } from 'src/app/services/navbar-input.service';

@Component({
  selector: 'app-navbar-input',
  templateUrl: './navbar-input.component.html',
  styleUrls: ['./navbar-input.component.scss']
})
export class NavbarInputComponent implements OnInit {

  constructor(private navbarInputService: NavbarInputService){}

  ngOnInit(): void {
    
  }

  value:string;


  onButtonClicked(){
    this.navbarInputService.inputSubmit();
  }

  onKey(event: string) {
    this.value = event;
    this.navbarInputService.setInputValue(this.value);
  }

  onEnter() {
    this.navbarInputService.inputSubmit()
  }
}
