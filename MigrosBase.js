class MigrosBase {
    indirimOrani = 30;

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;
        if (this.urunleriKontrolEt(this.urunler)) {

            //(100 * 50)/100    = 5000/100

            //Sepetim dolu.
            if (this.kartVarmi) {
                //Money kartı vardır
                this.urunler.forEach((urun) => {
                    odenecekTutar  += (urun.fiyat * (100 - this.indirimOrani) / 100);
                })
            } else {
                //Yoktur
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                })
            }


        } else {
            alert("En az bir tane ürün satın almalısınız.");
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

    getIsim(){
        return this.isim;
    }

    getSoyisim(){
        return this.soyisim;
    }
}