const firstname = "Serhat";
const lastname = "Hacıoğulları";
const age = "16"
let hobbies = "Coding Book Roleplay Game";

let veri;

//String Concatenations (String Birleştirme)

veri = firstname + lastname; //SerhatHacıoğulları
veri = firstname + " " + lastname; //Serhat Hacıoğulları
veri = "Serhat";
veri += " Hacıoğulları"; //Serhat Hacıoğulları (İlk başta boşluk bıraktığım için ayrı yazıldılar)

veri = 'Benim adım' +' '+firstname+ ' '+lastname+ ' yaşım' +' '+age+ ' ve İstanbul\'da yaşıyorum'; // \ koymamızın sebebi ' işaretinden kaynaklı string in karışmaması
veri = "Benim adım" + "" +firstname + " "+lastname + "yaşım" + " "+age+ "ve İstanbul'da yaşıyorum"; // "" kullandığmız için ' işaretinden kaynaklı karışıklık olmadı  ve \ koymmaıza gerek kalmadı

veri = firstname.concat(' ', lastname) //Serhat Hacıoğulları 


// Büyük / Küçük Harf

veri = veri.toUpperCase(); //SERHAT HACIOĞULLARI
veri = veri.toLowerCase(); //serhat hacioğullari

veri = veri.substring(3,9); 
console.log(veri) //3.ve 9. index arasını yazdı (hat ha yazdı)

veri = veri.slice(3,9); // Aynı sonucu yazdı
// Slice methodu - sayıları da destekler örneğin veri.slice(-6); yazsaydık ullari sonucu alırdık ancak substring - yi desteklemez

veri = veri.indexOf("t"); //t sayısının indexini yazdı (5)
veri = veri.indexOf("k"); // İçinde olmadığı için -1 sonucu aldık

veri = veri.replace("Serhat", "Edward"); //Edward Hacıoğulları 

veri = veri.length; //19 

veri = hobbies.split(" "); //Liste oluşturdu, elemanları ayırmak için boşluğu seçtik eğer hobbies değişkeni şu şekilde olsaydı "Coding, Book, Roleplay, Game" bizim hobbies.split(","); yazmamız gerekirdi
//Bir üst satırdaki kodun çıktısı (4) ['Coding', 'Book', 'Roleplay', 'Game'] olmuştur. Veri türü ise objecttir.

console.log(veri);
console.log(typeof veri);

//KODU BU HALDE ÇALIŞTIRIRSAN ÇIKTILAR DEĞİŞİKLİK GÖSTEREBİLİR. ÇÜNKÜ VERİ DEĞİŞKENİNİ SÜREKLİ DEĞİŞTİRİP DURDUK İNDEX ALIRKEN VS.