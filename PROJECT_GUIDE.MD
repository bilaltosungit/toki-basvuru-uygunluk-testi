📘 PROJE TANIMI

Bu proje, Türkiye’deki vatandaşların “Toplu Konut İdaresi Başkanlığı (TOKİ)” tarafından yürütülen
“500 Bin Sosyal Konut Projesi”ne başvuru yapmaya **uygun olup olmadıklarını** kontrol etmelerini sağlar.

Web sitesi, kullanıcıya bir dizi **çoktan seçmeli soru** sorar (örneğin vatandaşlık süresi, yaş, gelir,
ikamet süresi, konut sahipliği vb.) ve cevaplara göre otomatik olarak sonucu gösterir:

- ✅ Uygun → “Tebrikler, TOKİ başvuru şartlarını sağlıyorsunuz.”
- ❌ Uygun değil → “Maalesef bu başvuru döneminde TOKİ’ye başvuru yapamıyorsunuz.”

Amaç, kullanıcıların başvuru yapmadan önce **uygunluklarını hızlıca öğrenmesini** sağlayan
bilgilendirici ve sade bir test aracı geliştirmektir.  
Resmî bir başvuru işlemi yapılmaz, sadece bilgilendirme testi sunulur.

---

🏗️ PROJE OLUŞTURMA TALİMATLARI

Yeni bir **Next.js** projesi oluştur.
Proje adı: `toki-uygunluk-testi`

Kullanılacak teknolojiler:

- React + TypeScript
- Material UI (MUI)
- useState ve useEffect ile durum yönetimi
- Responsive (mobil uyumlu) tasarım
- Basit ve modern bir arayüz (Material UI bileşenleriyle)
- Türkçe metinler

🎨 TASARIM DETAYLARI

- Arka plan: Açık gri (#f5f5f5)
- Kartlar: Beyaz, köşeleri yuvarlatılmış, gölgeli
- Butonlar: TOKİ mavisi (#005fa3)
- Yazı tipi: Inter veya Roboto
- İlerleme: Material UI Stepper veya basit “Sonraki / Önceki” butonları

---

Sonuç ekranı:

✅ Uygun → “Tebrikler, TOKİ başvuru şartlarını sağlıyorsunuz!”
❌ Uygun değil → “Maalesef bu başvuru döneminde TOKİ’ye başvuru yapamıyorsunuz.”

“Yeniden Dene” butonu ile başa dön.

---

📁 COMPONENT YAPISI

- pages/index.tsx → Giriş ekranı (“Teste Başla” butonu)
- components/QuestionCard.tsx → Her soruyu gösterir
- components/QuizFlow.tsx → Soru sıralamasını yönetir
- components/ResultScreen.tsx → Sonuç ekranı

---

🧩 EKSTRA ÖNERİLER

- Tüm metinler Türkçe olacak.
- Cevaplar LocalStorage’da saklanabilir (isteğe bağlı).
- Basit geçiş animasyonları (Framer Motion) kullanılabilir.

SEO için başlık: “TOKİ Uygunluk Testi – Başvuru Şartlarını Öğrenin”

✨ Sonuçta ortaya çıkan web sitesi:

- Kullanımı kolay
- Türkçe, sade ve bilgilendirici

  \*\*\* Vatandaşların TOKİ başvuru koşullarına uygunluğunu hızlıca öğrenebileceği bir test aracı olacak.

🎯 PROJENİN AMACI

Kullanıcılara birkaç soruluk bir test sunarak, TOKİ 500 Bin Sosyal Konut Projesi için gerekli
başvuru şartlarını sağlayıp sağlamadıklarını kolayca öğrenmelerini sağlamak.

Kullanıcı siteye girer → “Teste Başla” butonuna tıklar →
Sorular adım adım gösterilir →
Sonuç ekranında “Uygun” veya “Uygun değil” yanıtı verilir.

---

### 🧱 SORU AKIŞI

1️⃣ **Vatandaşlık**

> En az 10 yıldır T.C. vatandaşı mısınız?

- Evet
- Hayır (→ Uygun değil)

---

2️⃣ **Yaş**

> 18 yaşını doldurdunuz mu?

- Evet
- Hayır (→ Uygun değil)

---

3️⃣ **Kategori Seçimi**

> Hangi kategoriye başvurmak istiyorsunuz?

- Şehit Ailesi, Terör, Harp veya Vazife Malulü
- Gazi (Kıbrıs, Kore)
- En az %40 Engelli Vatandaş
- Emekli
- 3 ve Daha Fazla Çocuklu Aile
- Genç (18–30 yaş arası)
- Diğer

---

4️⃣ **İkamet Durumu**

> Projenin bulunduğu il/ilçe/beldede en az 1 yıldır ikamet ediyor musunuz?  
> (Şehit Aileleri için 3 yıl şartı vardır.)

- Evet
- Hayır (→ Uygun değil)

---

5️⃣ **Konut Sahipliği**

> Sizin, eşinizin veya çocuklarınızın adına Türkiye’de tapuda kayıtlı bağımsız konut var mı?

- Evet (→ Uygun değil)
- Hayır

---

6️⃣ **Daha Önce TOKİ’den Konut veya Arsa Aldınız mı?**

- Evet (→ Uygun değil)
- Hayır

---

7️⃣ **Gelir Durumu**

> Aylık hane halkı toplam net geliriniz (12 ay ortalaması):

- 127.000 TL ve altı (İstanbul için 145.000 TL ve altı)
- Daha yüksek (→ Uygun değil)

---

8️⃣ **Eş Durumu**

> Evliyseniz, eşiniz de aynı şartları sağlıyor mu?

- Evet
- Hayır (→ Uygun değil)
- Bekarım

---

9️⃣ **Kategoriye Özel Ek Şartlar (yalnızca seçilen kategoriye göre gösterilir):**

- **Genç:** 10/11/1995 tarihinden sonra doğmuş olmak gerekir.
- **3+ Çocuklu:** 19/12/2007 tarihinden sonra doğan en az 3 çocuk sahibi olmak gerekir.
- **Şehit Ailesi:** “Hak Sahipliği” TOKİ/Sosyal Güvenlik Kurumu tarafından onaylanmış olmalı.
- **Gazi:** 1005 Sayılı Kanun kapsamında Kore veya Kıbrıs Gazisi olmalı.
- **Engelli:** En az %40 engel oranına sahip sağlık kurulu raporu bulunmalı.
- **Emekli:** SGK emeklisi olmak veya vefat eden emeklinin dul eşi olmak gerekir.

---

### ⚙️ MANTIK AKIŞI

Cevaplar `useState` içinde tutulacak.
Tüm gerekli şartlar sağlanıyorsa “Uygun”, aksi durumda “Uygun değil” sonucu gösterilecek.

Basitleştirilmiş örnek:

```ts
if (
  tcCitizen &&
  age >= 18 &&
  residence &&
  !hasHouse &&
  !hasTokiBefore &&
  incomeOk &&
  spouseOk
) {
  result = "Uygun";
} else {
  result = "Uygun Değil";
}
```
