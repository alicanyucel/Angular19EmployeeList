import { AfterViewInit, ChangeDetectorRef, Component, effect, ElementRef, model, viewChild, viewChildren } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './component/child/child.component';
import { TempchildComponent } from './component/tempchild/tempchild.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatFormFieldModule, MatCardModule, MatInputModule,
    ChildComponent, TempchildComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  
  
  readonly nameElement = viewChild.required<ElementRef>('name');
  readonly child = viewChild.required(ChildComponent);
  readonly childs = viewChildren(ChildComponent);

  
  username=model<string>('Test')
  userobj=model<{firstname:string,lastname:string}>({
    firstname: '',
    lastname: ''
  })

  constructor(private cref: ChangeDetectorRef) {
     effect(()=>{
      if(this.username().length>5){
        alert('Crossed more than 5 characters')
      }
     })
  }

  ngAfterViewInit(): void {
   

    this.nameElement().nativeElement.focus();
    const nameElement = this.nameElement();
    nameElement.nativeElement.value = '200';
    nameElement.nativeElement.disabled = 'disabled'

    
    this.child().title = 'Child'

    

    this.childs().forEach((item, i) => {
      item.title = 'Child ' + i
    })
    this.cref.detectChanges();
  }


}