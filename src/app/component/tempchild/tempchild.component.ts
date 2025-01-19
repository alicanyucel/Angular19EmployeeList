import { AfterContentInit, Component, contentChild, contentChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tempchild',
  imports: [],
  templateUrl: './tempchild.component.html',
  styleUrl: './tempchild.component.css'
})
export class TempchildComponent implements AfterContentInit {

  ngAfterContentInit(): void {
    

    const temp1 = this.temp1();
    temp1.nativeElement.innerHTML='value updated'
    temp1.nativeElement.setAttribute('style','color:red;background-color:yellow')

    this.temp2().forEach((item,i)=>{
      item.nativeElement.innerHTML='Temp Child '+i
      if(i==0){
        item.nativeElement.setAttribute('style','color:red;background-color:yellow')
      }else{
        item.nativeElement.setAttribute('style','color:Green;background-color:yellow')
      }
    })
  }

  
  readonly temp1 = contentChild.required<ElementRef>('temphead');
  readonly temp2 = contentChildren<ElementRef>('temphead');

}