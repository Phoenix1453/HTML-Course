package main

import (
  "fmt"
  "math/rand"
  "time"
)


func main() {

    //Short Variable Declarations 1

    if lessonLearned: = true;
    lessonLearned {
        fmt.Println("Great job! You can continue on to the next exercise.")
    } else {
        fmt.Println("Practice makes perfect.")
    }
    fmt.Println(" ")

    // Switch Statement

    doki: = "serhat"

    switch doki {
        case "Monika":
            fmt.Println("YESS MONİKA")
        case "Natsuki":
            fmt.Println("CHOOSE MONİKA")
        default:
            fmt.Println("JUST MONİKA")
    }
    fmt.Println(" ")

    //İf-Else Statements

    id: = 6225
    if id == 62254 {
        fmt.Println("Access accepted")
    } else {
        fmt.Println("Access denied")
    }
    fmt.Println(" ")

    //Comparison Operators

    home: = true
    dog: = false
    cat: = true

    if home && cat {
        fmt.Println("You have cat and home")
    }
    if dog || cat {
        fmt.Println("You have dog or cat or both of them")
    }
    if home && !dog {
        fmt.Println("You dont have dog or home or both of them") /* dog un tersini aldık yani true oldu 
        o yüzden çıktı var*/
    }
    fmt.Println(" ")

    // Short Variable Declarations 2

    if hacking: = false;
    hacking {
        fmt.Println("YOU ARE A HACKERMAN")
    } else {
        fmt.Println("You aren't a hackerman")
    }
    fmt.Println(" ")

    //Random İnteger

    rand.Seed(time.Now().UnixNano())
    sayi: = rand.Intn(1000)
    fmt.Println(sayi)
} 

/*
Output:

Great job! You can continue on to the next exercise.
 
JUST MONİKA
 
Access denied
 
You have cat and home
You have dog or cat or both of them
You dont have dog or home or both of them
 
You aren't a hackerman
 
276 (random) */