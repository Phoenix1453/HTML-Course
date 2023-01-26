// 1. Aritmetik Operatörler
let veri;
const a = 20;
const b = 10;
const c = 5;
const f = 10;
let d = 3;

veri = a / b;
console.log(veri)

veri = d++; //d nın değeri bir arttı 
console.log(veri) //3 çıktısı aldık çünkü önce veriyi d eşitleyip ekrana yazdı sonra 1 arttırdı
// console.log(d) dersek 4 çıktısı alırız

veri = ++d;
console.log(veri) // 5 çıktısı aldık çünkü 20. satırda 4 olmuştu yine 1 arttı ve 5 oldu

veri = d--;
console.log(veri) // 5 çıktısı aldık

veri = --d;
console.log(veri) // 3 çıktısı aldık

veri = a%b; //a nın b ye bölümünden kalan (mod alma işlemi)



// 2. Atama Operatörleri

veri = a;
veri += a; //veri = veri+a dedik 40 çıktısı aldık
veri -=a; //veri = veri-a dedil 20 çıktısı aldık
veri *= a;
veri /= a;
veri %= a; //0 çıktısı aldık



// 3. Karşılaştırma Operatörkeri

veri = a==b;
console.log(veri) //sonuç false

veri = b==f;
console.log(veri) //True değeri aldok

veri = 5 ==="5"; //İki = olsaydı true alacaktık ama şuan int ve str den dolayı false

veri = a!=b; //true çünkü a b'ye eşit değildir

veri = a>b; //true

veri = b<c; //false

veri = 5>=5; //true

veri = b<=c; //false



// 4. Mantıksal Operatörler

// and or not

// && simgesi and demek, || (alt ve - tuşu) or demek, ! not demek

veri = (a<b) && (a>c); // ikiside doğru olduğu için true

veri = (b>a) || (a>c); 
console.log(veri) //true bir tanesi doğru çünkü

veri = !(a>b); //normalde true iken not yüzünden false oldu

veri = !(a<b) //true
