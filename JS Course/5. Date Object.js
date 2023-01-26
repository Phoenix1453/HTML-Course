let zaman = new Date();
let birthday = new Date(2006,6,15) //15 haziran 2006

console.log(zaman);
console.log(typeof zaman); //object

// Get Methods

console.log(zaman.getMonth()); //0 dedi çünkü js de ocak 0. aymış
console.log(zaman.getDate()); //25
console.log(zaman.getFullYear()); //2023
console.log(zaman.getDay()); //3 çıktısı aldık. Pazar 0 ,pzt 1 diye gidiyo....
console.log(zaman.getHours()); //16
console.log(zaman.getMinutes()); //48
console.log(zaman.getSeconds()); //23
console.log(zaman.getMilliseconds()); //303

console.log(zaman.getFullYear() - birthday.getFullYear() ,"yaşındasın..."); //17 sonucu aldık
console.log(zaman.getMonth() - birthday.getMonth()); // -6 çıktı... ay sayısı farkından dolayı


//Set Methods

zaman.setDate(18)
console.log(zaman) //Wed Jan 18 2023 sonucu aldık

zaman.setMonth(5);
console.log(zaman) // April oldu

zaman.setFullYear(2025);
console.log(zaman); //yıl artık 2025

zaman.setHours(25);
console.log(zaman) //01:04:19 oldu yani saat 25i gece 1 aldı
