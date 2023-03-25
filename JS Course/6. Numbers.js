let veri;

veri = Number("5"); //5

veri = parseInt("5"); //5
veri = parseFloat("5.5"); //5.5
veri = parseInt("5c");  //5 number
veri = parseInt("c5"); // NaN (Not a number) sonucu aldık

veri = isNaN("c5"); //True 
veri = isNaN("5"); //False


var sayi = 15.4358573978;

veri = sayi.toPrecision(3); //Sayi değişkeninin soldan itibaren 3 basamağını yazdı (15.4) //String
veri = Number(sayi.toPrecision(3)); //Number ve aynı output sayı olarak

veri = sayi.toFixed(6); //Sayının virgülden sonraki 6 basamağını yazdırdı Output: (15.435857) //String

//MATH

veri = Math.PI; //Pi sayısını yazdı (3.141592653589793)
veri = Math.round(3.5); // 3.5 sayısını yuvarladı ve konsola 4 yazdı.
veri = Math.round(3.2);  //3
veri = Math.ceil(3.2); //4 sayısına yuvarladı. Çünkü ceil hep yukaru yakın olaran yuvarlar
veri = Math.floor(9.7); //9
veri = Math.pow(3,4) //3 sayısının 4. kuvvetinı aldık
veri = Math.sqrt(81); //81 sayısının karekökünü aldık 9 yazdı
veri = Math.abs(-50); //Mutlak değer. Sonuç 50
veri = Math.min(1,3,5,9,-1,6); //En küçük değeri yazdı (-1)
veri = Math.max(5,8,45,85,-5,-6,78); //En büyük değeri yazdı (85)
veri = Math.random(); //İçi boş olursa 0 ile 1 arasında random sayı üretir (Şuan 0.6896150778564047 sonucu aldık)
veri = Math.random()*10; //0 ile 10 arasında rastgele bir sayı (6.19175556452)
veri = Math.floor(Math.random()*15); //7 sonucu aldık
veri = Math.floor(Math.random()*15+1); //Böylece hiçbir zaman 0 sonucu almayacağız


console.log(veri);
console.log(typeof veri);