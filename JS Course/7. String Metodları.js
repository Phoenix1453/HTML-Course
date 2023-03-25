const firstname = "Edward";
const lastname = "Justice";
const age = "18"
let hobbies = "Coding Book Roleplay Game";

let veri;

//String Concatenations (String Birleştirme)

veri = firstname + lastname; //EdwardJustice
veri = firstname + " " + lastname; //Edward Justice
veri = "Edward";
veri += " Justice"; //Edward Justice (İlk başta boşluk bıraktığım için ayrı yazıldılar)

veri = 'Benim adım' +' '+firstname+ ' '+lastname+ ' yaşım' +' '+age+ ' ve Türkiye\'de yaşıyorum'; // \ koymamızın sebebi ' işaretinden kaynaklı string in karışmaması
veri = "Benim adım" + "" +firstname + " "+lastname + "yaşım" + " "+age+ "ve Türkiye'de yaşıyorum"; // "" kullandığmız için ' işaretinden kaynaklı karışıklık olmadı  ve \ koymmaıza gerek kalmadı

veri = firstname.concat(' ', lastname) //Edward Justice


// Büyük / Küçük Harf

veri = veri.toUpperCase(); //EDWARD JUSTİCE
veri = veri.toLowerCase(); //edward justice

veri = veri.substring(3,9); 
console.log(veri) //3.ve 9. index arasını yazdı (ward ju yazdı)
veri = veri.slice(3,9); // Aynı sonucu yazdı
// Slice methodu - sayıları da destekler örneğin veri.slice(-6); yazsaydık ullari sonucu alırdık ancak substring - yi desteklemez

veri = veri.indexOf("d"); //d harfinin indexini yazdı (5)
veri = veri.indexOf("k"); // İçinde olmadığı için -1 sonucu aldık

veri = veri.replace("Edward", "Dylan"); //Dylan Justice

veri = veri.length; //14 

veri = hobbies.split(" "); //Liste oluşturdu, elemanları ayırmak için boşluğu seçtik eğer hobbies değişkeni şu şekilde olsaydı "Coding, Book, Roleplay, Game" bizim hobbies.split(","); yazmamız gerekirdi
//Bir üst satırdaki kodun çıktısı (4) ['Coding', 'Book', 'Roleplay', 'Game'] olmuştur. Veri türü ise objecttir.

console.log(veri);
console.log(typeof veri);

