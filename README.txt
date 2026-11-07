MOTORHEAD – sajt prodavnice delova
==================================

Sadržaj:
  index.html      – stranica
  css/style.css   – izgled (boje se menjaju na vrhu fajla, u :root)
  js/app.js       – proizvodi, korpa, omiljeno, pretraga, poručivanje
  img/            – slike (hero i kategorije)

Postavljanje: ceo sadržaj foldera prebacite u public_html (ili www) na hostingu.
Lokalno: dvoklik na index.html.

Pre puštanja u rad:
  1. Proizvodi su primer. Izmenite listu "const P = [...]" na vrhu js/app.js
     (naziv, šifra, cena, stara cena za akciju, količina na stanju, specifikacije).
  2. Email info@motorhead.rs je primer – zamenite ga u index.html.
  3. Porudžbine, upiti i kontakt forma prikazuju potvrdu, ali se nigde ne šalju.
     Za pravu prodavnicu potrebno je povezati slanje (npr. PHP mail skripta,
     Formspree ili prodavnički sistem kao WooCommerce).
  4. Besplatna dostava i cena dostave: konstante FREE i SHIP u js/app.js.
