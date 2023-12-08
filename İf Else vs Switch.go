//Else if  le kurunca:

clothingChoice := "sweater"

if clothingChoice == "shirt" {
  fmt.Println("We have shirts in S and M only.")
} else if clothingChoice == "polos" {
  fmt.Println("We have polos in M, L, and XL.")
} else if clothingChoice == "sweater" {
  fmt.Println("We have sweaters in S, M, L, and XL.")
} else {
  fmt.Println("Sorry, we don't carry that.")
}
clothingChoice := "sweater"

//Switchle kurunca:

switch clothingChoice {
case "shirt":
  fmt.Println("We have shirts in S and M only.")
case "polos":
  fmt.Println("We have polos in M, L, and XL.")
case "sweater":
  fmt.Println("We have sweaters in S, M, L, and XL.")
case "jackets":
  fmt.Println("We have jackets in all sizes.")
default:
  fmt.Println("Sorry, we don't carry that")
}

//Prints: We have sweaters in S, M, L, and XL.
