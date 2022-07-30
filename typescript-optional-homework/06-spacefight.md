Hozzunk létre egy egyszerű alkalmazást, ami egy űrállomás űrhajói állapotát tudja nyomonkövetni.

# Űrhajók

Minden űrhajónak van neve (String), aktuális tartóssága (int), egy maximum tartóssága (int) és tűzereje (int).
Emellett minden űrhajó számára elérhetőek az alábbi metódusok:

- `status()`: adja vissza az űrhajó adatait egy Stringben, pl ˛`"SS Balthar, durability: 20/100, firepower: 40"` vagy `"MSC Galactus, durability 120/120, firepower: 80"`

- `repair(int repairPercentage)`: megnöveli az űrhajó aktuális tartósságát a hajó maximum tartósságának annyi százalékával (lefelé kerekítve), amennyi a paraméterben kapott szám (soha nem mehet fel a maximum tartósság fölé).

- `getDamage(int damage)`: a paraméterben kapott sérülést vonja le az űrhajó aktuális tartósságából (az aktuális tartósság nem mehet 0 alá)

##### SpaceFighter

A kis, gyors mozgású űrvadász maximum tartóssága 100, ugyanekkora aktuális tartóssággal kezd.

##### Avenger

A bosszúálló űrhajók fel vannak szereplve ion torpedókkal, amiknek van saját neve(String), ezért a státusban ez is megjelenik, pl.: `"SS Alexander, durability: 100/100, firepower: 40, ion torpedo: Eyepoker"`
A maximum tartósságuk 150, ugyanekkora aktuális tartóssággal kezdenek.

##### Battlecruiser

A csatahajók nagyok, nagy páncéllal, ezért amikor sérülnek, akkor csak a paraméterül kapott sebzés 80%-át szenvedik el, a többit felfogják a pajzsok.
Viszont az ilyen mértékű gépeket lassabban is lehet javítani, ezért amikor javítják, akkor a paraméterben kapott %-ból le kell vonni 10-et, és csak ennyit fog javulni (ugyanakkor 10%-ot minimum javítanak rajta).
A maximum tartósságuk 230, ugyanekkora aktuális tartóssággal kezdenek.

# SpaceStation

Az állomás tudja, hogy milyen űrhajói vannak, és az alábbi metódusai vannak:

- `addShip(Ship ship)`, amivel egy űrhajót lehet hozzáadni a csapathoz

- `repairShips(int repairPercentage)`, ami kiadja az utasítást a szerelőknek, és minden űrhajón elvégznek annyi javítást, amennyire idő van (ezt jelképezi a paraméterben átadott %, pl. ha a paraméterbe 20 kerül, az 20%-os javítást jelent)

- `spacefight(int damage)`, ami csatába küldi az összes űrhajót. Visszatérési értékként visszaadja a teljes flotta sebzését, és miután ezt kiszámolta, minden űrhajó sérül annyit, ami a paraméterben átadott sebzés. Minden olyan űrhajó, ami aktuális tartóssága 0-ra csökken, elpusztult, és el kell távolítani az űrállomásról.

- `getStatus()`, ami visszaadja az űrhajók státuszát egy String listában
