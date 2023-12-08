package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {

	rand.Seed(time.Now().UnixNano())

	isHeistOn := true

	eludedGuards := rand.Intn(100)

	if eludedGuards > 50 {
		fmt.Println("İyi iş başardın. Artık bankadasın. Şimdi sıra kasaya girmekte")
	} else {
		isHeistOn = false
		fmt.Println("Bankaya giremedin")
	}

	openedVault := rand.Intn(100)

	if isHeistOn && openedVault > 70 {
		fmt.Println("Kasa açıldı gir gir gir")
	} else if isHeistOn {
		isHeistOn = false
		fmt.Println("Kasayı açamadın. Görev başarısız..")
	}

	leftSafely := rand.Intn(5)

	if isHeistOn {
		switch leftSafely {
		case 0:
			isHeistOn = false
			fmt.Println("Hiçbir güvenliği haklayamadın.. Bankayı soyamadın")
		case 1:
			isHeistOn = false
			fmt.Println("Sadece 1 güvenliği geçtin. Geri kalan güvenlikler seni etkisiz hale getirdi")
		case 2:
			isHeistOn = false
			fmt.Println("Güvenliklerden ikisini geçtin. 3 güvenliğe karşı gelemedin ve yakalandın")
		case 3:
			isHeistOn = false
			fmt.Println("3 kişiyi geçtikten sonra rehavete kapıldın. Çıkmak üzereyken 2 güvenlik seni sıkıştırdı. Artık hastanede başında polislesin. Görevi başaramadın")
		case 4:
			isHeistOn = false
			fmt.Println("Güvenliklerin dördünü geçtin. Arkanı dönüp binadan çıkarken saklanmış olan son güvenlik tarafından etkisiz hale getirildin. Çok yaklaşmıştın. Bence tekrar dene.")
		default:
			fmt.Println("TÜM GÜVENLİKLERİ ATLATTIN SOYGUN BAŞARILIs")
		}
	}

	if isHeistOn {
		amtStolen := 10000 + rand.Intn(1000000)
		fmt.Println("Bankayı soyup güvenli mekanına geldin. Paraları saymaya başladın veee", amtStolen, "$ saydın")
		fmt.Println("Görev başarılı. Banka operayonu bitmiştir.")
	}
}
