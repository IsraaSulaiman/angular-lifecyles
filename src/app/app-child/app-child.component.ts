import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class AppChildComponent implements OnInit {
  @ContentChild('title') titleRef!: ElementRef;
  @Input() namesList: string[] = [];

  constructor(private renderer: Renderer2) {
    console.log('child: constructor');
  }

  ngOnInit(): void {
    console.log('child: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child: ngOnChanges', `changes: ${JSON.stringify(changes)}`);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  ngDoCheck(): void {
    console.log('child: ngDoCheck');
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  ngAfterContentInit(): void {
    console.log('child: ngAfterContentInit');
    this.renderer.setStyle(
      this.titleRef.nativeElement,
      'text-transform',
      'capitalize'
    );
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
  }

  ngAfterContentChecked(): void {
    console.log('child: ngAfterContentChecked');
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
  }

  ngAfterViewInit(): void {
    console.log('child: ngAfterViewInit');
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngAfterViewChecked(): void {
    console.log('child: ngAfterViewChecked');
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }

  ngOnDestroy(): void {
    console.log('child: ngOnDestroy');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
