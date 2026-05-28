<<<<<<< HEAD
# explore-eu
=======
# Explore EU

En inofficiell guide till alla EU:s finansierade möjligheter för unga — volontärarbete, stipendier, praktik, jobb och informationsstöd.

## Kom igång

```bash
# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

## Bygga för produktion

```bash
npm run build
npm start
```

## Struktur

```
eu-mojligheter/
├── app/
│   ├── layout.js          # Root layout med IBM Plex Sans, Nav och Footer
│   ├── page.js            # Startsidan
│   ├── globals.css        # Tailwind och bastyler
│   ├── not-found.js       # 404-sida
│   └── program/
│       └── [slug]/
│           └── page.js    # Dynamisk programsida (11 program)
├── components/
│   ├── Nav.js             # Mörk navigationslista
│   ├── Footer.js          # Footer med alla programlänkar
│   ├── FAQ.js             # Accordionkomponent
│   ├── ProgramCard.js     # Kort för ett program
│   └── ProgramFilter.js   # Filtrerbar programgrid
└── data/
    └── programs.js        # Källdata för alla 11 EU-program
```

## Program som täcks

1. Europeiska Solidaritetskåren (ESK)
2. ESK — Humanitärt volontärarbete
3. Erasmus+
4. DiscoverEU
5. Blue Book Traineeship (EU-kommissionen)
6. Robert Schuman-praktiken (Europaparlamentet)
7. EURES
8. EURES Targeted Mobility Scheme
9. Eurodesk
10. Europa Direkt
11. EU Youth Portal

## Datakälla

Primärkälla: officiella EU-webbplatser (youth.europa.eu, commission.europa.eu, eacea.ec.europa.eu, erasmus-plus.ec.europa.eu, eures.europa.eu, european-union.europa.eu). Informationen är korrekt per maj 2026.

## Lägga till eller uppdatera program

All programdata finns i `data/programs.js`. Varje program är ett objekt med:
- Grundläggande info (slug, namn, emoji, tagline)
- Hero-sektion
- Vad-är-det-sektion
- Formats (aktivitetsformer)
- Covered (vad EU täcker)
- Steps (steg-för-steg)
- FAQ
- Officiell URL

## Teknikstack

- **Next.js 14** med App Router
- **Tailwind CSS** för styling
- **IBM Plex Sans** och **IBM Plex Serif** via next/font/google

## Anpassning

Byt namn på webbplatsen i:
- `app/layout.js` (metadata)
- `components/Nav.js` (logo)
- `components/Footer.js` (varumärke)
>>>>>>> 7060612 (Initial commit)
