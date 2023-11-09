import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {viewname: string='eman mohsen morad';
  name: string = 'Asia Sam';
  changename(){
    this.name="mia";
  }
  getname(){
    return this.name;
  }
  favoriteNumber:number=42;
  number:number=21;
  getnumber(){
  var num= this.number+30;
  var sum=num+50;
    return sum;
  }

    text: string = 'Hello, Angular!';
    imageUrl: string = 'https://img.youm7.com/large/20220608062209229.jpg';
    isDisabled: boolean = false;
  buttonText: string='ClickMe';
  isDisabledd: boolean = true;
  buttonTextt: string='ClickMe';
  isHighlighted: boolean = true;
  hasBackground: boolean=true;

onClickButton(): void {
  
    console.log('Button clicked!');

    }

    onKeyUp(event: any): void {
      // Retrieve the entered value
      const enteredValue = event.target.value;
      
      // Do something with the entered value, such as logging it
      console.log('Entered value:', enteredValue);
  
}
message: string = '';


}

