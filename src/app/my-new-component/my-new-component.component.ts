
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output, HostListener, ViewChild } from '@angular/core';
import { randomInt } from 'crypto';
import { range } from 'rxjs';

@Component({
  selector: 'app-my-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-new-component.component.html',
  styleUrl: './my-new-component.component.css'
})
export class MyNewComponentComponent implements OnInit {
   a ="something";
   value: number=0;
   arrayNumber:number[]=[1,2,3]
  constructor()
  {
    this.a ="its a constructor value"

  }
  
  ngOnInit(): void {
    // this.a = "value has been ChangeDetectionStrategy";
  }
  functionValueChange()
  {
    // Assuming noUncheckedIndexedAccess is enabled in tsconfig.json
    let numbers = [1, 2, 3];
    let fifthNumber = numbers[4]; // inferred as 'number | undefined'
    let doubledFifthNumber: number;

    if (fifthNumber !== undefined) {
        doubledFifthNumber = fifthNumber * 2;
    } else {
        // Handle the undefined case, maybe assign a default value
        doubledFifthNumber = 0;
    }
    
    
   

if(numbers[9])
this.a='it has stopped here';

    var a = this.arrayNumber[6];
    console.log( Math.random()*2)
    this.a= Math.floor(Math.random()*2 ) ? "The value has changed in the function":"the value is changing ";

  }

}
