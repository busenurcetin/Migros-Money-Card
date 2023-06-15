let mesaj = 
`
Migros'a Hoşgeldiniz.
Money Kart'a Sahip Misiniz?
1- Evet
2- Hayır
`

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 30
    },
    {
        urunIsmi : "Çikolata",
        fiyat : 20
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 400
    },
    {
        urunIsmi : "Kola",
        fiyat : 60
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    // Money Kart Varsa
    let isim = prompt("Adınızı Giriniz.")
    let soyisim = prompt("Soyadınızı Giriniz.")

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar}
        `);
}else{
    // Money Kart Yoksa
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}