# Angular LifeCycle

A component instance has a lifecycle, meaning it goes through a sequence of phases that starts when Angular creates the component and ends when the component's class is destroyed and its view template is removed from the DOM.

Angular constantly checks for any change in the component class memebers or the data-bound properties to re-render the view and the class instance. So, the component's lifecycle continues whenever angular runs change detection.

# Lifecycle Hooks

You can tap into any event in the lifecycle of a component using angular lifecycle methods(hooks). ## Code scaffolding

> The hooks give you the opportunity to act on a component or directive instance at the appropriate moment, as Angular creates, updates, or destroys that instance

There are 8 hooks and they are called in this sequence:

![alt text](https://codecraft.tv/courses/angular/components/lifecycle-hooks/images/lifecycle-hooks.png)

The constructor executes before any hooks and it instantiates the component class. You can set class members or inject dependencies here as well.

## ngOnChanges()

- It is called before ngOnInit() and whenever one or more data-bound input properties change.

## ngOnInit()

- It is called once, after the first ngOnChanges().
- It is used to initialize the component properties.

## ngDoCheck()

- It is called immediately after ngOnInit() on the first run and after ngOnChanges() on every change detection run
- You should be cautious when using this hook method since it is called on every run of change detection
- You can use it to detect and act upon changes that Angular can't or won't detect on its own.

## ngAfterContentInit()

- It is called once after the first ngDoCheck().
- You want to respond or act upon content projection, meaning when Angular projects external content into the component's view, or into the view that a directive is in.

## ngAfterContentChecked()

- It is called after ngAfterContentInit() and every subsequent ngDoCheck().

- It is called everytime angular checks the content projected into the component or directive.

## ngAfterViewInit()

- It is called once after the first ngAfterContentChecked().

\*It is called after Angular initializes the component's views and child views.

## ngAfterViewChecked()

- It is called after the ngAfterViewInit() and every subsequent ngAfterContentChecked(), meaning after angular checks the component's view and its child views.

## ngOnDestroy()

- It is called before angular destroys the component class and removes the view template from DOM.

- This is used for cleanup, unsubscription and event detachment to avoid memory leaks.
