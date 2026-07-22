# Faktagranskning – Explore EU

**Granskad:** 22 juli 2026
**Underlag:** allt sakinnehåll i `data/programs.js`, `data/areas.js`, `lib/programMeta.js`, `lib/programSections.js` och språkfilerna (sv/en/es/it/de).
**Metod:** varje siffra, datum, belopp och behörighetskrav har stämts av mot officiella EU-källor (youth.europa.eu, erasmus-plus.ec.europa.eu, traineeships.ec.europa.eu, europarl.europa.eu, ela.europa.eu, eures.europa.eu, eurodesk.eu, european-union.europa.eu). Källor listas längst ned.

---

## Sammanfattning

Sidan är **övervägande korrekt** — merparten av alla belopp, datum och behörighetskrav stämmer mot officiella källor. Jag hittade **6 sakfel** (varav 3 är föråldrade/underskattade siffror), **2 namn-/stavfel** och **5 okällade eller oprecisa påståenden** som bör åtgärdas.

Inget fel är allvarligt vilseledande, men flera siffror har hunnit bli inaktuella sedan uppgiften "korrekt per maj 2026". De viktigaste att rätta är antalet officiella EU-språk (23 → 24) och de föråldrade EURES-siffrorna.

| # | Typ | Var | Kort |
|---|-----|-----|------|
| 1 | Sakfel | EU Youth Portal | "23 officiella EU-språk" → **24** |
| 2 | Föråldrad siffra | EURES | "3 miljoner lediga tjänster" → **~3,9 miljoner** |
| 3 | Föråldrad siffra | EURES | "850+ rådgivare" → **1 000+** |
| 4 | Överdriven siffra | Eurodesk | "4 000+ multiplikatorer" → **3 500+** |
| 5 | Strukturfel | Erasmus+ | Jean Monnet framställs som en av "3 nyckelaktioner" (den tredje är KA3) |
| 6 | Föråldrad siffra | Schuman | Sverige "2 257 €" bygger på gammal koefficient (119,5 %); nu ~122 % |
| 7 | Namnfel | EU Youth Portal | "Euredesk" → **Eurodesk** (2 ställen) |
| 8 | Stavfel | Schuman | "Funktionedsättningstillägg" → **Funktionsnedsättningstillägg** |
| 9–13 | Okällat/oprecist | Områden, ESK, TMS | invented procentsiffror, "5 vänner", "3 organisationer", ESF+, externa länkar |

> **Obs om språkfiler:** rättar du en siffra i `data/programs.js` (svenska) måste samma ändring göras i motsvarande post i `lib/programMeta.js` och `lib/programSections.js` samt språkfilerna `en/es/it/de`, annars blir översättningarna inkonsekventa.

---

## 1. Bekräftade sakfel

### 1.1 EU Youth Portal – "23 officiella EU-språk" är fel

**Var:** `data/programs.js` rad 708 (stat) och rad 719 (brödtext); speglas i `lib/programMeta.js` (alla språk) och `lib/translations/*`.

**Nuvarande text:**
> `{ value: '23', label: 'Officiella EU-språk' }`
> "Den täcker 23 officiella EU-språk, och DiscoverEU-innehåll finns dessutom på isländska, makedonska, norska, serbiska och turkiska."

**Problem:** EU har **24 officiella språk** (iriska har full status, kroatiska tillkom 2013), inte 23. Själva portalen är dessutom tillgänglig på ~27 språk (de 24 officiella plus flera icke-officiella).

**Korrekt uppgift:** 24 officiella EU-språk. Portalen erbjuder innehåll på fler språk än så.

**Förslag på ny formulering:**
> `{ value: '24', label: 'Officiella EU-språk' }`
> "Portalen finns på EU:s alla 24 officiella språk, och DiscoverEU-innehåll finns dessutom på isländska, makedonska, norska, serbiska och turkiska."

**Källa:** [Europeiska unionens officiella språk](https://european-union.europa.eu/principles-countries-history/languages_sv), [European Youth Portal (Wikipedia – språkomfattning)](https://en.wikipedia.org/wiki/European_Youth_Portal)

---

### 1.2 EURES – "3 miljoner lediga tjänster" är föråldrat

**Var:** `data/programs.js` rad 447 (stat), 454 (hero), 465 (format), 477 (covered), 486 (steg); speglas i alla språkfiler.

**Nuvarande text:** "3 milj." / "en databas med 3 miljoner lediga tjänster".

**Problem:** EURES-portalen innehåller i dag **omkring 3,9 miljoner** lediga tjänster (nära 4 miljoner). "3 miljoner" underskattar med nästan en miljon.

**Korrekt uppgift:** ~3,9 miljoner lediga tjänster (1 miljon CV stämmer och kan behållas).

**Förslag:** ändra "3 milj." → **"~4 milj."** och "3 miljoner lediga tjänster" → **"nästan 4 miljoner lediga tjänster"**.

**Källa:** [EURES – European Labour Authority](https://www.ela.europa.eu/en/activities/eures)

---

### 1.3 EURES – "850+ rådgivare" är föråldrat

**Var:** `data/programs.js` rad 448 (stat), 458 (brödtext "mer än 850 rådgivare"), 472 (format "850+"); speglas i alla språkfiler.

**Problem:** EURES-nätverket har i dag **över 1 000 rådgivare**. "850+" är inte direkt falskt men underskattar och är inaktuellt.

**Korrekt uppgift:** 1 000+ EURES-rådgivare.

**Förslag:** ändra "850+" → **"1 000+"** och "ett nätverk av mer än 850 rådgivare" → **"ett nätverk av mer än 1 000 rådgivare"**.

**Källa:** [EURES – European Labour Authority](https://www.ela.europa.eu/en/activities/eures)

---

### 1.4 Eurodesk – "4 000+ lokala multiplikatorer" är överdrivet

**Var:** `data/programs.js` rad 581 (stat), 587 (hero), 591 (brödtext "mer än 4 000"), 610 (covered); speglas i alla språkfiler.

**Problem:** Eurodesk anger själva på sin officiella About-sida (uppdaterad 2026) **"over 3,500 local information providers"** — inte 4 000+.

**Korrekt uppgift:** 3 500+ lokala multiplikatorer (38 center och 36 länder stämmer och behålls).

**Förslag:** ändra "4 000+" → **"3 500+"** och "mer än 4 000 lokala informationsgivare" → **"mer än 3 500 lokala informationsgivare"**.

**Källa:** [Eurodesk – About us](https://eurodesk.eu/about-us-youth/) ("38 Eurodesk Centres connected to over 3,500 local information providers in 36 European countries").

---

### 1.5 Erasmus+ – Jean Monnet framställs felaktigt som en av "3 nyckelaktioner"

**Var:** `data/programs.js` rad 174 (stat "3 Nyckelaktioner") + rad 200–206 (tredje format-kortet "Jean Monnet-åtgärder"); speglas i `lib/programSections.js` för es/it/de.

**Problem:** Erasmus+ tre nyckelaktioner (Key Actions) är **KA1 (Lärande­rörlighet), KA2 (Samarbete mellan organisationer) och KA3 (Stöd till politikutveckling och samarbete)**. Jean Monnet-åtgärderna är en *egen* del av programmet (liksom idrott), inte en nyckelaktion. Sidan visar KA1, KA2 och Jean Monnet som de tre korten och hoppar över KA3 — vilket antyder att Jean Monnet är den tredje nyckelaktionen.

**Korrekt uppgift:** de tre nyckelaktionerna är KA1, KA2, KA3. Jean Monnet är en kompletterande åtgärd.

**Förslag:** antingen (a) byt det tredje kortet till **KA3 – Stöd till politikutveckling och samarbete** och nämn Jean Monnet + idrott som "övriga delar", eller (b) behåll Jean Monnet-kortet men ta bort/omformulera stat-etiketten så den inte läses som att Jean Monnet = KA3. Enklast: lägg till ett kort för KA3 och behåll Jean Monnet separat.

**Källa:** [Erasmus+ Programme Guide – Key Actions](https://erasmus-plus.ec.europa.eu/programme-guide/part-b), [Erasmus+ budget & struktur](https://erasmus-plus.ec.europa.eu/whats-new/news/erasmus-2021-2027-programme-brings-over-eu262-billion-to-support-mobility-and-cooperation-0)

---

### 1.6 Schuman – ersättningen för Sverige (2 257 €) bygger på en föråldrad koefficient

**Var:** `data/programs.js` rad 382 (stat "2 257 €"), 392 (brödtext "2 257 euro … koefficient 119,5 %"), 400 (format), 411 (covered). Samma logik gäller de framräknade beloppen i `lib/programMeta.js`: Tyskland ~1 948 €, Italien ~1 899 €, Spanien ~1 719 €.

**Problem:** Grundbeloppet **1 889 €/mån (från januari 2026) + 300 € reseersättning stämmer**. Men Sveriges belopp räknas fram genom att multiplicera med landets korrigeringskoefficient. Sidan använder **119,5 %** (1 889 × 1,195 ≈ 2 257). Sveriges (Stockholms) korrigeringskoefficient ligger för 2026 snarare på **~122 %**, vilket ger **≈2 300 €**. Koefficienterna uppdateras ungefär årligen och för icke-euroländer (SE, DK) svänger de kraftigt med växelkursen.

**Korrekt uppgift:** grundbelopp och reseersättning är korrekta; de landsspecifika beloppen (SE/DE/IT/ES) bör räknas om mot den **senaste officiella korrigeringskoefficienten**.

**Förslag:** uppdatera Sverige-beloppet efter aktuell koefficient (~2 300 € vid 122 %) och sätt gärna ett "~" framför som i övriga språkversioner, alternativt skriv "ca 2 300 €". Lägg in en notis om att beloppet varierar med koefficienten och kontrolleras hos Europaparlamentet.

**Källa:** [Eurostat – korrigeringskoefficienter (Belgien = 100)](https://ec.europa.eu/eurostat/databrowser/view/prc_colc_nat/default/table?lang=en), [Europaparlamentet – Schuman-praktik (grundbelopp 1 889 € fr.o.m. jan 2026)](https://www.europarl.europa.eu/traineeships/)

---

## 2. Namn- och stavfel

### 2.1 "Euredesk" → "Eurodesk"

**Var:** `data/programs.js` rad 699 (tagline) och rad 715 (hero-sub) i posten `eu-youth-portal`.

**Nuvarande text:** "EU-kommissionens och **Euredesks** gemensamma portal" / "…gemensamma plattform".

**Problem:** nätverket heter **Eurodesk**, inte "Euredesk". Felstavat namn på en aktör som sidan lyfter fram.

**Förslag:** byt båda till "Eurodesk".

---

### 2.2 "Funktionedsättningstillägg" → "Funktionsnedsättningstillägg"

**Var:** `data/programs.js` rad 413 (covered-rubrik i Schuman-posten).

**Problem:** felstavning (saknar "s" och "n": funktion**s**ned**s**ättning). Innehållet (upp till 50 % extra vid minst 20 % funktionsnedsättning) är korrekt.

**Förslag:** rätta rubriken till "Funktionsnedsättningstillägg".

---

## 3. Okällade eller oprecisa påståenden

### 3.1 Områdessidor – uppdiktade procentsiffror

**Var:** `data/areas.js` rad 17 ("~30 %", andel av alla ESK-platser, socialt arbete), rad 93 ("~25 %", utbildning & ungdom), rad 55 ("25+", länder med aktiva migrationsprojekt).

**Problem:** EU publicerar ingen officiell statistik som stödjer att t.ex. 30 % av alla ESK-platser är socialt arbete eller 25 % utbildning. Siffrorna framstår som uppskattningar utan källa och kan vilseleda eftersom de presenteras som fakta.

**Förslag:** antingen (a) ta bort de exakta procenten och beskriv kvalitativt ("en av de största kategorierna" — vilket brödtexten redan gör), eller (b) om siffran ska behållas, ange källa. Samma gäller "25+ länder".

---

### 3.2 ESK – "tillsammans med minst 5 vänner"

**Var:** `data/programs.js` rad 48 (Solidaritetsprojekt-format).

**Problem:** kravet är en grupp om **minst 5 unga personer totalt (inklusive dig själv)**, inte "5 vänner utöver dig". "5 vänner" antyder 6 personer.

**Förslag:** "Skapa ett eget projekt … tillsammans med **minst 5 personer** (inklusive dig själv)". Belopp (630 €/mån) och coach-stöd är korrekt.

**Källa:** [European Youth Portal – Solidarity Projects](https://youth.europa.eu/solidarity/young-people/solidarity-projects_en)

---

### 3.3 ESK Humanitärt – "3 organisationer krävs"

**Var:** `data/programs.js` rad 104 (stat).

**Problem:** jag kunde inte bekräfta att exakt "3 organisationer" krävs. Individuellt humanitärt volontärarbete bygger normalt på en **stöd­organisation** och en **värdorganisation** (2). Siffran 3 är oklar.

**Förslag:** kontrollera mot ESK-guiden och byt vid behov till en verifierbar uppgift, eller ersätt stat:en med något säkert (t.ex. "2 v–12 mån" eller åldersspannet).

**Källa:** [European Solidarity Corps Guide](https://youth.europa.eu/solidarity/organisations/reference-documents-resources_en)

---

### 3.4 EURES TMS – "Finansieras via ESF+"

**Var:** `data/programs.js` rad 512 (budget) och rad 518 (stat "ESF+").

**Problem:** korrekt men oprecist. TMS finansieras via **EaSI-delen av ESF+** (Employment and Social Innovation). Flera officiella TMS-sidor anger fortfarande "EaSI".

**Förslag:** förtydliga till "EaSI-delen av ESF+" eller "EaSI (ESF+)". Litet, men gör det spårbart. (De tre lead-projekten SE/DE/IT samt täckning EU + Norge + Island är korrekt.)

**Källa:** [EURES TMS – EaSI-finansiering](https://www.fondazionebrodolini.it/en/projects/eures-targeted-mobility-scheme-tms-2025-2027)

---

### 3.5 Områdeslänkar pekar på omesc.se, inte officiella EU-källor

**Var:** `data/programs.js` rad 79–84 (`areas[].href` i ESK-posten pekar på `https://www.omesc.se/omraden/...`).

**Problem:** sidan anger i README att primärkällan är officiella EU-webbplatser, men områdeslänkarna går till en extern tredjepartssajt (omesc.se). Det är inte ett sakfel, men värt att vara medveten om för trovärdighet och konsekvens.

**Förslag:** överväg att länka till youth.europa.eu:s områdesbeskrivningar, eller var tydlig med att omesc.se är en extern resurs.

---

### 3.6 Europe Direct – "400 lokala center" (mindre precisering)

**Var:** `data/programs.js` rad 645, 652, 670, 677.

**Problem:** "400" är rimligt — EU skriver själv "omkring 400" — men det formellt finansierade nätverket 2021–2025 var **424–436 center**. Den avtalsperioden löpte ut vid årsskiftet 2025/26, så en ny generation kan ha annat antal.

**Förslag:** skriv **"omkring 400"** i stället för det exakta "400", och kontrollera siffran mot den nya avtalsperioden. Telefonnummer, öppettider (mån–fre 9–18 CET), svar inom 3 arbetsdagar samt ukrainska/ryska är korrekt.

**Källa:** [Europe Direct – hitta ditt närmaste center](https://european-union.europa.eu/contact-eu/meet-us/find-closest-europe-direct-centre_sv)

---

## 4. Kontrollerat och korrekt

Följande centrala uppgifter stämmer mot officiella källor och behöver **inte** ändras:

- **DiscoverEU:** 40 000 resekort och budget 23,5 milj. € för vår-2026-omgången, ansökan 8–22 april 2026, född 1 juli 2007–30 juni 2008, 7 resdagar, quiz (5 frågor + 1 tiebreak), resa 1 juli 2026–30 sep 2027, Inclusion Action 18–21 år. ✔
- **Erasmus+:** budget 26,2 mdr € (nästan dubbelt mot 14,7 mdr € 2014–2020), start 1987, över 16 miljoner deltagare sedan 1987. ✔
- **ESK:** 18–30 år, budget 1,01 mdr € (1,009 mdr), 2 v–12 mån, solidaritetsprojekt 630 €/mån. ✔
- **ESK Humanitärt:** 18–35 år, sedan 2022, 5 dagars fysisk utbildning, center i Frankrike/Tyskland/Italien/Spanien, tre omgångar/år. ✔
- **Blue Book:** 1 538,16 €/mån (okt-2026-sessionen), ~1 000 platser/session, placeringar inkl. EEAS/Frontex/EEA, max 6 veckors tidigare EU-erfarenhet. ✔
- **Schuman:** grundbelopp 1 889 €/mån + 300 € resa, funktionsnedsättningstillägg upp till 50 %, Schuman Recruitment & Development Programme (25 praktikanter/period). ✔
- **EURES:** 31 länder (EU27 + Island, Liechtenstein, Norge, Schweiz), samordnas av ELA sedan 2021, 1 miljon CV, ~2 miljoner gränspendlare. ✔
- **Eurodesk:** 38 center, 36 länder, grundat mars 1990 i Edinburgh, AISBL i Bryssel, driver Youth Portal-helpdesken. ✔
- **Europe Direct:** +800 6 7 8 9 10 11 (gratis inom EU), +32 22 99 96 96 utanför, ukrainska + ryska, svar inom 3 arbetsdagar. ✔
- **EU Youth Portal:** EU:s ungdomsstrategi 2019–2027, rådets resolution 26 nov 2018, 11 europeiska ungdomsmål, Engage/Connect/Empower. ✔

---

## 5. Åtgärdslista (prioriterad)

**Rätta först (tydliga fel):**
1. EU Youth Portal: 23 → **24** officiella EU-språk (rad 708, 719 + speglingar).
2. "Euredesk" → **Eurodesk** (rad 699, 715).
3. EURES: "3 milj." → **~4 milj.**, "850+" → **1 000+** (rad 447–486 + speglingar).
4. Eurodesk: "4 000+" → **3 500+** (rad 581–610 + speglingar).
5. Erasmus+: lägg KA3 bland nyckelaktionerna / flytta Jean Monnet till "övriga delar" (rad 174, 200–206).
6. Stavning: "Funktionedsättningstillägg" → **Funktionsnedsättningstillägg** (rad 413).

**Uppdatera/verifiera (tidskänsligt):**
7. Schuman: räkna om Sverige-beloppet (~2 300 € vid 122 %) och de framräknade DE/IT/ES-beloppen mot aktuell korrigeringskoefficient.
8. Europe Direct: "400" → "omkring 400" och kontrollera mot ny avtalsperiod.

**Se över (okällat/oprecist):**
9. Områdessidor: ta bort eller källbelägg "~30 %", "~25 %", "25+".
10. ESK: "5 vänner" → "minst 5 personer".
11. ESK Humanitärt: verifiera "3 organisationer".
12. EURES TMS: "ESF+" → "EaSI (ESF+)".
13. Områdeslänkar: överväg officiella EU-länkar i stället för omesc.se.

---

## Källor

- [Europeiska unionens språk (24 officiella)](https://european-union.europa.eu/principles-countries-history/languages_sv)
- [EURES – European Labour Authority](https://www.ela.europa.eu/en/activities/eures)
- [Eurodesk – About us](https://eurodesk.eu/about-us-youth/)
- [Erasmus+ – budget & nyckelaktioner](https://erasmus-plus.ec.europa.eu/whats-new/news/erasmus-2021-2027-programme-brings-over-eu262-billion-to-support-mobility-and-cooperation-0)
- [Erasmus+ Programme Guide (Key Actions)](https://erasmus-plus.ec.europa.eu/programme-guide/part-b)
- [DiscoverEU – ansökningsregler](https://youth.europa.eu/discovereu/rules_en)
- [Commission – 40 000 DiscoverEU-pass 2026 (IP/26/783)](https://ec.europa.eu/commission/presscorner/detail/en/ip_26_783)
- [European Solidarity Corps – vem kan delta (18–30 / 18–35)](https://youth.europa.eu/solidarity/faq/3_en)
- [European Solidarity Corps – budget 1,009 mdr €](https://eur-lex.europa.eu/EN/legal-content/summary/european-solidarity-corps-programme-2021-2027.html)
- [Solidaritetsprojekt – grupp om minst 5 unga, 630 €/mån](https://youth.europa.eu/solidarity/young-people/solidarity-projects_en)
- [Blue Book Traineeship – programöversikt](https://traineeships.ec.europa.eu/about/programme-essentials_en)
- [Blue Book – 1 538,16 €, okt-2026-session](https://euneighbourseast.eu/opportunities/blue-book-traineeship-programme-applications-now-open-for-october-2026-session/)
- [Europaparlamentet – Schuman-praktik](https://www.europarl.europa.eu/traineeships/)
- [Eurostat – korrigeringskoefficienter](https://ec.europa.eu/eurostat/databrowser/view/prc_colc_nat/default/table?lang=en)
- [EURES TMS 2025–2027 (EaSI/ESF+)](https://www.fondazionebrodolini.it/en/projects/eures-targeted-mobility-scheme-tms-2025-2027)
- [Europe Direct – kontakt & center](https://european-union.europa.eu/contact-eu/meet-us/find-closest-europe-direct-centre_sv)
