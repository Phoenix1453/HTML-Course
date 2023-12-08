package main   

import "fmt"

func main() {
  fmt.Println("Practice using the fmt package!")
  var verb string = "MITM"
  var number int32 = 1387
  var grade float32 = 97.5
  
  fmt.Print("There","is","no","space")
  fmt.Println("\n ")
  fmt.Println("Whuuuuu", "space")

  fmt.Printf("%v has %.2f grade in nowadays",verb,grade)
  fmt.Println("\n ")
  fmt.Printf("İn %d idk what happened", number)
  fmt.Println("\n ")
  fmt.Printf("%T is being nums",number)
  fmt.Println("\n ")

  k := fmt.Sprint("We had a good days in here")
  fmt.Println(k)
  fmt.Println("\n ")

  l := fmt.Sprintln("I missed you so much")
  fmt.Println(l)
  fmt.Println("\n ")

  m := fmt.Sprintf("Did you do %v attack any time",verb)
  fmt.Println(m)
  fmt.Println("\n ")

  fmt.Println("What is your job here")
  var job1 string
  var job2 string
  fmt.Scan(&job1)
  fmt.Scan(&job2)
  fmt.Printf("My job is %v %v",job1, job2)
  fmt.Println("\n ")
}

/*
Output:

Practice using the fmt package!
Thereisnospace
 
Whuuuuu space
MITM has 97.50 grade in nowadays
 
İn 1387 idk what happened
 
int32 is being nums
 
We had a good days in here

I missed you so much

Did you do MITM attack any time
 
What is your job here
cyber analyst (bunu user yazdı input olarak)
My job is cyber analyst
*/