package main

import "fmt"

func main() {
  floatExample := 1.75
  fmt.Printf("Working with a %T", floatExample) 
  
  yearsOfExp := 3
  reqYearsExp := 15
  fmt.Printf("I have %d years of Go experience and this job is asking for %d years", yearsOfExp, reqYearsExp) 
  
  stockPrice := 3.50
  fmt.Printf("Each share of Gopher feed is $%.2f!", stockPrice) 
  
  animal1 := "cat"
  animal2 := "dog"
  
  fmt.Printf("Are you a %v or a %v person",animal1, animal2)
}

/*
%v kelimeyi yazdırır

%t türünü yazdırır (type) (int32 bla bla)

%f float yazdırır (2.80000)

%.2f kısa float yazdırır (2.80)

%D integer yazdırır
*/

/*
Output:

Working with a float64

I have 3 years of Go experience and this job is asking for 15 years

Each share of Gopher feed is $3.50!

Are you a cat or a dog person
*/

