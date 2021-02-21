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
  timer: any;
  timerResults = 0;

  constructor(private renderer: Renderer2) {
    console.log('child: constructor');
    // this.timer = setInterval(() => {
    //   console.log('timer works');
    //   this.timerResults++;
    // }, 5000);
  }

  ngOnInit(): void {
    console.log('child: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child: ngOnChanges', `changes: ${JSON.stringify(changes)}`);
  }

  ngDoCheck(): void {
    console.log('child: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('child: ngAfterContentInit');
    this.renderer.setStyle(
      this.titleRef.nativeElement,
      'text-transform',
      'capitalize'
    );
  }

  ngAfterContentChecked(): void {
    console.log('child: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('child: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('child: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('child: ngOnDestroy');
    // clearInterval(this.timer);
  }
}
