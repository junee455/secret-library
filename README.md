# Secret Library

## some comments on code

Mock backend is made with services returning observables with mock data.
In every conponent I use destroy$ subject to kill all the streams when component is destroyed.

## build and run

```
npm install
ng serve --open
```

this will open application on localhost:4200

## usage

login first

currently there are 4 users

### john

password: 1234  
access: high - can read any of 4 abailable books

### anne

password: 5678  
access: medium

### robert

password: 9111  
access: medium

### paul

password: 1213  
access: low - only A Picture of Dorian Grey

click on cards or grid rows to read the chapter, the rest of the interface is quite self explanatory

also check out responsive design
