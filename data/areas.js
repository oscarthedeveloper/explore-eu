// Swedish baseline data for ESK activity areas (6 areas)
// Each area gets a dedicated page at /[locale]/omraden/[slug]

export const areas = [
  {
    slug: 'socialt-arbete',
    emoji: '🤝',
    name: 'Socialt arbete & inkludering',
    tagline: 'Stöd människor i utsatta situationer och bidra till ett mer inkluderande samhälle.',
    color: 'blue',
    hero: {
      heading: 'Människor först',
      sub: 'Som ESK-volontär inom socialt arbete arbetar du nära människor som befinner sig i utsatta livssituationer — hemlöshet, missbruk, psykisk ohälsa, ensamhet eller social isolering. Du blir en del av ett team som bygger värdighet och tillit, en relation i taget.',
    },
    stats: [
      { value: '6–12 mån', label: 'Vanligaste projektlängd' },
      { value: '~30%', label: 'Andel av alla ESK-platser' },
      { value: '0 €', label: 'Kostnad för dig' },
    ],
    body: 'Socialt arbete är en av de största kategorierna inom Europeiska Solidaritetskåren. Det handlar sällan om någon "expertroll" — det handlar om att finnas där. Att laga frukost på ett härbärge. Att följa med någon till banken. Att prata, lyssna, vara närvarande.\n\nProjekt finns i hela Europa: från storstadsbaserade härbärgen och stödbostäder i Berlin och Lissabon, till mindre lokala initiativ på landsbygden. Många projekt riktar sig mot specifika grupper — hemlösa, EU-medborgare i utsatthet, personer med beroendeproblematik, ensamstående föräldrar, personer som lämnat institutionsvård.\n\nDu får oftast ett konkret ansvarsområde efter en introduktionsperiod. Värdorganisationen utbildar dig löpande, och du arbetar alltid tillsammans med erfaren personal.',
    examples: [
      { icon: '🏠', title: 'Härbärgen & stödbostäder', desc: 'Hjälp till med vardagliga rutiner, måltider, gemenskapsaktiviteter och att skapa en trygg miljö för boende.' },
      { icon: '🤲', title: 'Uppsökande verksamhet', desc: 'Följ med på fältarbete för att möta hemlösa direkt på gatan — dela ut mat, kläder, hygienartiklar och information.' },
      { icon: '☕', title: 'Sociala mötesplatser', desc: 'Driv kaféverksamhet, aktivitetshus eller dagcenter där människor kan komma in från kylan och hitta gemenskap.' },
      { icon: '🧠', title: 'Stöd vid psykisk ohälsa', desc: 'Var en stödperson i lågtröskelverksamheter, gruppaktiviteter eller individuell vägledning under handledning.' },
      { icon: '🍞', title: 'Matbanker & utdelning', desc: 'Organisera och dela ut mat till familjer i ekonomisk utsatthet — en av de mest konkreta insatserna.' },
      { icon: '🎯', title: 'Mentorskap', desc: 'Var en stabil förebild för unga eller vuxna som behöver stöd i sin återintegration eller livsförändring.' },
    ],
    skills: ['Empati & lyhördhet', 'Konflikthantering', 'Aktivt lyssnande', 'Tålamod', 'Gränssättning', 'Tvärkulturell kommunikation', 'Trygghet i obekväma situationer'],
    suitedFor: [
      'Du som vill jobba direkt med människor — inte bakom en skärm.',
      'Du som är intresserad av sociala frågor, jämlikhet eller socialt arbete som framtida yrke.',
      'Du som har mental stabilitet att möta tunga berättelser utan att brytas av dem.',
      'Du som är beredd att lära dig — inte fixa allt direkt.',
    ],
    practical: {
      duration: 'De allra flesta projekt är 6–12 månader. Kortare projekt (2–4 månader) finns men är ovanligare.',
      languages: 'Engelska räcker oftast som startspråk. Du förväntas lära dig grunderna i det lokala språket — utan det blir vardagsarbetet svårt.',
      requirements: 'Inga formella krav, men personlig stabilitet är viktigt. Vissa projekt kräver utdrag ur belastningsregistret. Erfarenhet av frivilligarbete är meriterande men inte nödvändigt.',
    },
  },

  {
    slug: 'migration-integration',
    emoji: '🌐',
    name: 'Migration & integration',
    tagline: 'Hjälp nyanlända att hitta sin plats i ett nytt samhälle — språk, kultur, rättigheter, vardag.',
    color: 'amber',
    hero: {
      heading: 'En bro mellan världar',
      sub: 'Som ESK-volontär inom migration och integration arbetar du tillsammans med människor som just har anlänt till ett nytt land — flyktingar, asylsökande, ensamkommande, EU-medborgare i utsatthet. Du hjälper dem att navigera myndigheter, lära sig språket, hitta sin nya vardag.',
    },
    stats: [
      { value: '6–12 mån', label: 'Vanligaste projektlängd' },
      { value: '25+', label: 'Länder med aktiva projekt' },
      { value: '0 €', label: 'Kostnad för dig' },
    ],
    body: 'Migration är en av Europas största sociala frågor — och en av de mest meningsfulla områdena att arbeta inom. ESK-projekt finns i mottagningscenter, asylboenden, ungdomsgårdar för ensamkommande, integrationscenter och organisationer som arbetar med papperslösa.\n\nArbetet är konkret och varierande: språkkaféer, läxhjälp för barn, juridisk grundinformation, fritidsaktiviteter, kvinnogrupper, informationsinsatser om rättigheter. Många projekt drivs av NGO:er som arbetar parallellt med det offentliga systemet, men också av kyrkor, fackföreningar och kommunala center.\n\nProjekt som rör flyktingmottagande kräver ofta särskild handledning — du arbetar med människor som ibland upplevt trauma, och organisationen ger dig löpande stöd. Du förväntas inte vara terapeut. Du förväntas vara en närvarande medmänniska.',
    examples: [
      { icon: '💬', title: 'Språkkaféer & lektioner', desc: 'Led informella språkträffar där deltagare övar det lokala språket genom vardagliga samtal, lekar och teman.' },
      { icon: '📋', title: 'Information om rättigheter', desc: 'Hjälp människor att förstå hur de söker uppehållstillstånd, hittar boende, registrerar sig hos myndigheter.' },
      { icon: '👨\u200d👩\u200d👧', title: 'Familjeaktiviteter', desc: 'Organisera utflykter, kulturella evenemang och aktiviteter som skapar gemenskap mellan nyanlända och lokalsamhället.' },
      { icon: '📖', title: 'Läxhjälp för barn', desc: 'Stöd barn och unga med skolarbete, läsning och inlärning av det lokala språket. Ofta i fritidsverksamhet.' },
      { icon: '🎓', title: 'Vuxenutbildning', desc: 'Assistera i kurser om datorkunskap, jobbsökning, körkortsteori eller praktiska vardagskunskaper.' },
      { icon: '🤝', title: 'Vänverksamhet', desc: 'Bygg en-till-en-relationer mellan nyanlända och lokala invånare — en av de mest effektiva integrationsåtgärderna.' },
    ],
    skills: ['Tvärkulturell kompetens', 'Tålamod med språkliga hinder', 'Diplomati', 'Pedagogisk förmåga', 'Empati', 'Förmåga att förenkla komplex information', 'Kulturell ödmjukhet'],
    suitedFor: [
      'Du som är nyfiken på andra kulturer och vill bli kollegor med människor från hela världen.',
      'Du som tror på en mer öppen och solidarisk Europa.',
      'Du som har lätt för att kommunicera även när språket inte räcker till.',
      'Du som kan hantera byråkratisk frustration utan att tappa hoppet.',
    ],
    practical: {
      duration: '6–12 månader. Vissa projekt med långsiktig vänverksamhet eller stöd till barn kräver minst 9 månader.',
      languages: 'Engelska som arbetsspråk är vanligt, men det lokala språket är avgörande på sikt. Vissa projekt värdesätter arabiska, dari, ukrainska eller andra språk särskilt.',
      requirements: 'Mental stabilitet är centralt. Vissa projekt kräver intervju i förväg. Erfarenhet av att arbeta med människor från olika bakgrunder är meriterande.',
    },
  },

  {
    slug: 'utbildning-ungdom',
    emoji: '📚',
    name: 'Utbildning & ungdom',
    tagline: 'Inspirera nästa generation — i klassrum, på fritidsgårdar, i informella lärandemiljöer.',
    color: 'purple',
    hero: {
      heading: 'Tänd gnistor hos andra',
      sub: 'Som ESK-volontär inom utbildning och ungdom arbetar du med barn, tonåringar eller unga vuxna — i skolor, fritidsgårdar, ungdomsorganisationer eller informella lärandemiljöer. Du blir en förebild, en mentor, ibland en storasyster eller storebror.',
    },
    stats: [
      { value: '6–12 mån', label: 'Vanligaste projektlängd' },
      { value: '~25%', label: 'Andel av alla ESK-platser' },
      { value: '0 €', label: 'Kostnad för dig' },
    ],
    body: 'Detta är ett av de bredaste och mest populära områdena inom ESK. Projekten varierar från reguljära skolor (där du oftast är språkassistent eller hjälper i klassrum) till fritidsgårdar, ungdomscenter och organisationer som arbetar med informellt lärande — alltså lärande som händer utanför skolan, genom aktiviteter, spel, workshops och samtal.\n\nMånga europeiska skolor tar emot ESK-volontärer för att ge eleverna autentisk kontakt med ett annat europeiskt språk och kultur. Du är inte lärare — du är en närvarande ung vuxen som introducerar engelska, svenska, eller din egen kultur, ofta genom konversation och lek.\n\nFritidssektorn är minst lika viktig. Här handlar det om att vara en stabil närvaro för unga som kanske inte alltid har det stödet hemma — leda aktiviteter, lyssna, organisera utflykter, bygga ett mentorskap över tid.',
    examples: [
      { icon: '🏫', title: 'Språkassistent i skola', desc: 'Stöd språklärare i klassrum, led mindre grupper, hjälp elever som behöver extra stöd. Ofta inom EU-språk eller engelska.' },
      { icon: '🎮', title: 'Fritidsgård & ungdomsklubb', desc: 'Led aktiviteter, spel, workshops och samtal med tonåringar. Bygg långvariga mentorskap över tid.' },
      { icon: '🎨', title: 'Kreativa verkstäder', desc: 'Driv konst-, musik-, drama- eller hantverksverkstäder som verktyg för personlig utveckling och uttryck.' },
      { icon: '📖', title: 'Läxhjälp & studiestöd', desc: 'Stöd barn och unga som behöver extra hjälp med skolarbete, ofta i kombination med fritidsverksamhet.' },
      { icon: '🌐', title: 'Internationella utbyten', desc: 'Hjälp till att organisera Erasmus+-utbyten, ungdomskonferenser och europeiska medvetenhetskampanjer.' },
      { icon: '⚽', title: 'Idrott & friluftsliv', desc: 'Led sport- och friluftsaktiviteter som verktyg för inkludering, hälsa och teamarbete.' },
    ],
    skills: ['Pedagogisk lyhördhet', 'Energi & lekfullhet', 'Gruppledning', 'Konfliktlösning bland barn/unga', 'Kreativ problemlösning', 'Tålamod', 'Förmåga att vara förebild'],
    suitedFor: [
      'Du som gillar barn och unga och har lätt för att kommunicera med dem.',
      'Du som funderar på en framtid som lärare, fritidspedagog, socialarbetare eller barnpsykolog.',
      'Du som har energi och idéer — och tål kaos när det behövs.',
      'Du som vill upptäcka ditt eget samhälle genom yngre människors ögon.',
    ],
    practical: {
      duration: '9–12 månader är vanligast, ofta knutet till skolår. Sommarprojekt (2–3 månader) finns men främst för läger och fritidsverksamhet.',
      languages: 'Engelska räcker i många språkassistentroller. För fritidsverksamhet behöver du oftast lära dig det lokala språket — det är så du bygger relationer.',
      requirements: 'Många skolor kräver utdrag ur belastningsregistret. Erfarenhet av att arbeta med barn (sommarläger, scouter, idrottsledare) är meriterande.',
    },
  },

  {
    slug: 'miljo-hallbarhet',
    emoji: '🌿',
    name: 'Miljö & hållbarhet',
    tagline: 'Jobba konkret med klimat, biologisk mångfald, ekologiskt jordbruk och hållbara samhällen.',
    color: 'green',
    hero: {
      heading: 'För en planet som håller',
      sub: 'Som ESK-volontär inom miljö och hållbarhet arbetar du med klimatfrågor, naturvård, ekologiskt jordbruk eller cirkulär ekonomi. Du blir en del av Europas gröna omställning — i naturreservat, på ekogårdar, i miljöorganisationer eller i städer som driver hållbarhetsprojekt.',
    },
    stats: [
      { value: '3–12 mån', label: 'Stor variation i projektlängd' },
      { value: 'Landsbygd', label: 'Många projekt utanför städer' },
      { value: '0 €', label: 'Kostnad för dig' },
    ],
    body: 'Detta är ett område som vuxit kraftigt de senaste åren. ESK-projekt finns inom naturvård (skogsförvaltning, restaurering av våtmarker, fågelinventering), ekologiskt jordbruk (gårdar som tar emot WWOOF-liknande volontärer), miljöutbildning (centers som tar emot skolklasser), klimataktivism (NGO:er och påverkansorganisationer) och hållbar stadsutveckling.\n\nMånga projekt finns på landsbygden, ibland i avlägsna områden — det är något att vara medveten om. Det innebär nära kontakt med naturen, men också att du kan vara ganska isolerad från större städer och annat nattliv. Den som söker autentisk landsbygdserfarenhet kommer hitta sig hemma; den som vill ha urban vibb bör söka projekt i städer.\n\nArbetet är ofta fysiskt — du planterar, gräver, beskär, observerar, dokumenterar. Du lär dig nya tekniker och får praktisk kunskap som du kan ta med dig.',
    examples: [
      { icon: '🌳', title: 'Skogs- & naturvård', desc: 'Plantering, röjning, restaurering av biotoper, fågelinventering, övervakning av skyddade arter.' },
      { icon: '🌾', title: 'Ekologiskt jordbruk', desc: 'Lär dig permakultur, agroekologi och hållbart jordbruk genom praktiskt arbete på gårdar och i trädgårdar.' },
      { icon: '🐝', title: 'Biologisk mångfald', desc: 'Stöd projekt om bin, fjärilar, småfåglar — inventering, habitatskapande, publikevenemang.' },
      { icon: '📢', title: 'Miljöutbildning', desc: 'Led pedagogiska aktiviteter för skolklasser och allmänhet på naturcenter eller utomhuspedagogiska skolor.' },
      { icon: '♻️', title: 'Cirkulär ekonomi', desc: 'Arbeta med återbruksprojekt, repair cafés, second hand-butiker och initiativ för minskat matsvinn.' },
      { icon: '🌍', title: 'Klimataktivism', desc: 'Stöd organisationer som driver klimatfrågor genom kampanjer, opinionsbildning och samhällsdialog.' },
    ],
    skills: ['Praktisk problemlösning', 'Fysisk uthållighet', 'Vetenskaplig grundkunskap', 'Tålamod (naturarbete tar tid)', 'Lagarbete utomhus', 'Långsiktigt tänkande', 'Anpassningsförmåga'],
    suitedFor: [
      'Du som trivs utomhus och inte är rädd för fysiskt arbete eller dåligt väder.',
      'Du som vill omsätta klimatengagemang i konkret handling.',
      'Du som funderar på en framtid inom miljö, biologi, agronomi eller hållbarhet.',
      'Du som kan njuta av tystnad och rytm i en lantlig miljö.',
    ],
    practical: {
      duration: 'Stor variation. Korta säsongsprojekt (2–3 månader vid skörd eller plantering) finns parallellt med årslånga projekt. Tänk på säsong när du söker.',
      languages: 'Engelska räcker i många internationella miljöprojekt. På mindre ekogårdar kan grundläggande språkkunskaper i värdlandets språk vara viktigare.',
      requirements: 'Inga formella krav. Men fysisk förmåga, körkort (ibland) och stabilitet i lantlig miljö är meriterande. Allergier (bin, hö, sol) bör övervägas.',
    },
  },

  {
    slug: 'kultur-konst',
    emoji: '🎨',
    name: 'Kultur & konst',
    tagline: 'Använd kreativitet som verktyg för förändring — konst, media, teater, film, kulturarv.',
    color: 'pink',
    hero: {
      heading: 'Kreativitet som förändrar',
      sub: 'Som ESK-volontär inom kultur och konst arbetar du på museer, kulturhus, filmfestivaler, teatrar, mediaorganisationer eller community-baserade konstprojekt. Du bidrar till att kultur når fler — och får själv professionell erfarenhet i en bransch som annars kan vara svår att komma in i.',
    },
    stats: [
      { value: '6–12 mån', label: 'Vanligaste projektlängd' },
      { value: 'Städer', label: 'Främst urbana projekt' },
      { value: '0 €', label: 'Kostnad för dig' },
    ],
    body: 'Kulturområdet inom ESK är brett och varierat. Det inkluderar både traditionell institutionell kultur — museer, gallerier, teatrar, filmfestivaler, kulturarv — och mer aktivistiska, community-baserade former: gatukonst, gemenskapsteater, video som verktyg för marginaliserade röster, dokumentärfilmsprojekt med flyktingar, hantverkskollektiv.\n\nFör många som vill in i kulturbranschen är ESK en utmärkt språngbräda. Du får riktig arbetslivserfarenhet på ett museum, en kulturredaktion eller i en filmproduktion — något som annars kräver praktik som ofta är obetald eller knuten till studier.\n\nDet är värt att notera att dessa platser ofta är populära, så konkurrensen kan vara hård. Tidig ansökan och en tydlig motivering om varför just kultur är meriterande.',
    examples: [
      { icon: '🏛️', title: 'Museer & gallerier', desc: 'Stöd publikarbete, utställningsproduktion, pedagogisk verksamhet, kommunikation och evenemang.' },
      { icon: '🎬', title: 'Film & media', desc: 'Hjälp till på filmfestivaler, dokumentärprojekt, ungdomsfilmskolor eller producenter av samhällsmedia.' },
      { icon: '🎭', title: 'Teater & scenkonst', desc: 'Assistera i produktioner, ungdomsteatergrupper, communityteater eller gatuteater i marginaliserade områden.' },
      { icon: '🎵', title: 'Musik & musikundervisning', desc: 'Stöd musikskolor, körprojekt, koncertarrangemang eller musikterapeutiska initiativ.' },
      { icon: '📚', title: 'Bibliotek & litteratur', desc: 'Driv läsfrämjande, författarbesök, kreativt skrivande för unga eller berättarverkstäder.' },
      { icon: '🛠️', title: 'Hantverk & traditioner', desc: 'Lär dig och hjälp att förmedla lokala traditioner — keramik, träslöjd, vävning, mat — på kulturarvscenter.' },
    ],
    skills: ['Kreativt tänkande', 'Visuell kommunikation', 'Projektledning', 'Storytelling', 'Sociala medier-kompetens', 'Konstnärlig disciplin', 'Tvärkulturell estetisk medvetenhet'],
    suitedFor: [
      'Du som har konstnärligt intresse, akademiskt eller praktiskt.',
      'Du som funderar på en framtid inom konst, film, teater, media, museer eller kulturpolitik.',
      'Du som vill bygga portfolio och nätverk i en bransch som annars är svårtillgänglig.',
      'Du som ser kultur som verktyg för förändring, inte bara underhållning.',
    ],
    practical: {
      duration: '6–12 månader är vanligast, ibland synkat med kultursäsonger. Festivalprojekt kan vara kortare och mer intensiva.',
      languages: 'Engelska räcker ofta i internationella sammanhang (museer, festivaler), men för communityarbete är lokalspråket nyckeln.',
      requirements: 'Konstnärlig erfarenhet är meriterande men inte alltid nödvändig. Många projekt vill se motivation och kreativ portfolio (även enkel).',
    },
  },

  {
    slug: 'halsa-omsorg',
    emoji: '💚',
    name: 'Hälsa & omsorg',
    tagline: 'Bidra till välmående — folkhälsoarbete, äldreomsorg, funktionsstöd, palliativ vård.',
    color: 'red',
    hero: {
      heading: 'Närvaro som läker',
      sub: 'Som ESK-volontär inom hälsa och omsorg arbetar du med äldre, personer med funktionsnedsättning, personer i palliativ vård eller folkhälsoinriktade organisationer. Du är inte vårdpersonal — du är en mänsklig närvaro som kompletterar och avlastar professionella.',
    },
    stats: [
      { value: '6–12 mån', label: 'Vanligaste projektlängd' },
      { value: 'EU + 3:e land', label: 'Både inom EU och utanför' },
      { value: '0 €', label: 'Kostnad för dig' },
    ],
    body: 'Hälsa och omsorg är ett område där din närvaro betyder mycket — kanske mer än du tror. Ofta handlar det inte om medicinska insatser, utan om sällskap. Att läsa högt för en äldre dam. Att vara badkompis åt en man med utvecklingsstörning. Att hålla i handen någon vars liv närmar sig sitt slut.\n\nProjekten finns i äldreboenden, dagverksamheter för personer med funktionsnedsättning, hospice, lågtröskelmottagningar för utsatta grupper, organisationer som arbetar med folkhälsa eller HIV-prevention. Vissa organisationer arbetar specifikt med yngre människor med psykisk ohälsa.\n\nDet är ett område som kräver mental stabilitet. Du möter ibland sjukdom, åldrande och död. Värdorganisationen ger dig handledning och stöd, och du arbetar aldrig ensam i tunga situationer. Men det är viktigt att du själv reflekterar över om du har resurserna för det.',
    examples: [
      { icon: '👵', title: 'Äldreomsorg', desc: 'Sällskap, högläsning, promenader, gemenskapsaktiviteter på äldreboenden eller med ensamboende äldre.' },
      { icon: '♿', title: 'Stöd vid funktionsnedsättning', desc: 'Assistera i dagverksamheter, ledsaga vid utflykter, vara badkompis eller medåkare i fritidsaktiviteter.' },
      { icon: '🕊️', title: 'Palliativ vård & hospice', desc: 'Var en stillsam närvaro för människor i livets slutskede. Mycket handledning och stöd ingår.' },
      { icon: '🏥', title: 'Lågtröskelmottagningar', desc: 'Hjälp till på mottagningar som arbetar med hemlösa, missbrukare eller papperslösa i hälsofrågor.' },
      { icon: '📢', title: 'Folkhälsoarbete', desc: 'Informera om sexuell hälsa, mental hälsa, beroenden eller vaccinationer — ofta i skolor eller på event.' },
      { icon: '🧠', title: 'Mental hälsa hos unga', desc: 'Stöd organisationer som arbetar med unga som lider av ångest, depression eller social isolering.' },
    ],
    skills: ['Mental stabilitet', 'Empati utan att absorbera', 'Konkret omsorg', 'Förmåga att sitta i tystnad', 'Hygienmedvetenhet', 'Diskretion', 'Lugn i pressade situationer'],
    suitedFor: [
      'Du som funderar på en framtid inom vård, social omsorg, psykologi eller folkhälsa.',
      'Du som har mental stabilitet och självkännedom.',
      'Du som inte är rädd för det fysiska, det skröpliga, det mänskliga.',
      'Du som vill möta livet i hela dess bredd — inklusive åldrande och avslutning.',
    ],
    practical: {
      duration: '6–12 månader. Vissa palliativa projekt kräver minst 9 månader för att skapa kontinuitet med vårdtagare.',
      languages: 'Lokalt språk är ofta avgörande — relationer byggs i samtal. Engelska räcker sällan långt i daglig omsorg.',
      requirements: 'Mental stabilitet och egen reflektion är viktigt. Utdrag ur belastningsregistret krävs ofta. Erfarenhet av närstående eller anhörigvård är meriterande.',
    },
  },
]

export function getAreaBySlug(slug) {
  return areas.find((a) => a.slug === slug)
}
