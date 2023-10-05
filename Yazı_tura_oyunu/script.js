// Tura ve yazı sayılarını oluşturalım.
let tura = 0;
let yazi = 0; 

// HTML'de bulunan coin, flip ve reset butonlarını seçelim. 

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");


// Flip butonuna tıkladığında 
flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2); //Rastgele 0 ve 1 sayısını seçer.
    coin.style.animation = "none"; //Coin animasyonu geçici olarak kapattık.
    if (i) {
        // Eğer i 1 ise (yazı), 100 milisaniye sonra coine'e flip-tura animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
    } else {
        //Eğer i 0 (tura) ise, 100 milisaniye sonra coin'e spin-yazi aniimasyonu uygula
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
    }
    //İstatistikleri güncelle ve butonu devre dışı bırak.
    setTimeout(updateStats, 3000);
    disableButton();
}); 
  // İstatistikleri güncelleme fonksiyonu
  function updateStats() {
    document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

  // Butonu  geçici olarak devre dışı bırakma fonksiyonu
 function disableButton() {
    document.querySelector("#flip-button").disabled = true;
    setTimeout(() => {
        document.querySelector("#flip-button").disabled = false;
    }, 3000);
}

  //Reset butonuna tıklama 

  resetBtn.addEventListener('click', ()=> {
    //Coin animasyonunu kapat, tura ve yazı sayılarını sıfırla, istatistikleri güncelle
    coin.style.animation= "none";
    tura = 0;
    yazi = 0;
    updateStats();

  });