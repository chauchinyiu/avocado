import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke: string = '&quot;Jesus&quot; walks on the sea, &quot;Chuck norris&quot; swim through the land.';
  
  name: string = "Chuck";
  private lastName: string = "Norris"; //API limitation
  buttonTitle: string = "What would Chuck Norris do?"
  error: string;

  ngOnInit() {
  }
  constructor(private jokeService: JokeService) {
  }

  getJoke() {
    this.jokeService.fetchJokeWithName(this.name,this.lastName).subscribe(value => {
      this.joke = value;
    })
  }

  @Output()
  submitted = new EventEmitter();

  @Output()
  textEntered = new EventEmitter();

  value:string;

  onNameKey(event: string) {
    if(event.length > 0) {
      this.lastName = "";
    }else{
      this.name = "Chuck";
      this.lastName = "Norris";
    }
    this.name = event;
    this.textEntered.emit(this.name);
    this.onButtonTitleChange()
  }

  onButtonTitleChange(){
    if (this.name.length == 0) {
      this.buttonTitle = "What would Chuck Norris do?";
   
    }else{
      this.buttonTitle = "what would " + this.name + " do?";
    }
  }
  onEnter() {
    this.getJoke()
    this.submitted.emit();
  }
 

}




