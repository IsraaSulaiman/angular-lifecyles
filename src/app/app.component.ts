import { AppChildComponent } from './app-child/app-child.component';
import {
  Component,
  ElementRef,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('heading') elementRef!: ElementRef;
  name: string = '';
  names: string[] = [];

  constructor(private render: Renderer2) {
    console.log('parent: contructor');
  }

  ngOnInit(): void {
    console.log('parent: ngOnInit');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent: ngOnChanges');
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  ngDoCheck(): void {
    console.log('parent: ngDoCheck');
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  ngAfterContentInit(): void {
    console.log('parent: ngAfterContentInit');
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  ngAfterContentChecked(): void {
    console.log('parent: ngAfterContentChecked');
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
  }

  ngAfterViewInit(): void {
    console.log('parent: ngAfterViewInit');
    // console.log(this.elementRef?.nativeElement, 'elementRef');
    this.render.setStyle(
      this.elementRef?.nativeElement,
      'text-align',
      'center'
    );
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngAfterViewChecked(): void {
    console.log('parent: ngAfterViewChecked');
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }

  ngOnDestroy(): void {
    console.log('parent: ngOnDestroy');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  addToList() {
    // this.names.push(this.name);
    this.names = [...this.names, this.name];
    this.name = '';
  }

  logHeading(ele: any) {
    console.log(ele);
  }
}
