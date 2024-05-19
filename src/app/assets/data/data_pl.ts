import { Question } from 'src/app/core/interfaces/question.interface';

export const dataPl: Question[] = [
  {
    text: 'Co oznacza taki znak przed wejściem do kanału?',
    image: 'assets/images/1.png',
    answers: [
      { text: 'uwaga na fale wytwarzane przez motorówki', correct: false },
      { text: 'zakaz wytwarzania fali', correct: true },
      { text: 'miejsce o niebezpiecznym zafalowaniu', correct: false }
    ]
  },
  {
    text: 'Co musi zrobić sternik jachtu, kiedy na kursie zauważy poniższe znaki?',
    image: 'assets/images/2.png',
    answers: [
      { text: 'przepuścić jednostki motorowe płynące z naprzeciwka', correct: false },
      { text: 'nie przekraczać skrajni zaznaczonej białymi kolorami', correct: true },
      { text: 'przekraczać skrajnie zaznaczona czerwonymi kolorami', correct: false }
    ]
  },
  {
    text: 'Na drodze wodnej pod mostem sternik zauważył poniższy znak. Co on oznacza?',
    image: 'assets/images/3.png',
    answers: [
      { text: 'można płynąć tylko w jednym kierunku i od strony znaku', correct: false },
      { text: 'utrudnienia na torze wodnym', correct: false },
      { text: 'zalecane przejście w obydwu kierunkach', correct: true }
    ]
  },
  {
    text: 'Gdzie sternik musi zacumować jacht jeśli płynie w kierunku poniższego znaku?',
    image: 'assets/images/4.png',
    answers: [
      { text: 'w dowolnym miejscu, znak oznacza miejsce postojowe', correct: false },
      { text: 'nie wolno parkować z prawej strony znaku', correct: false },
      { text: 'wolno parkować od znaku w kierunku prawej strony', correct: true }
    ]
  },
  {
    text: 'Od której strony należy omijać poniższy znak kardynalny?',
    image: 'assets/images/5.png',
    answers: [
      { text: 'znak omijamy od północy', correct: true },
      { text: 'informuje nas o niebezpieczeństwach znajdujących się od północnej strony, znak omijamy od południa', correct: false },
      { text: 'zawsze omijamy prawa burta', correct: false }
    ]
  },
  {
    text: 'Kto odpowiada za bezpieczeństwo jachtu i załogi?',
    answers: [
      { text: 'każdy odpowiada za siebie', correct: false },
      { text: 'kierownik statku czyli osoba, która jest kapitanem na jachcie', correct: true },
      { text: 'tylko i wyłącznie właściciel jachtu, nawet jeśli nie jest kapitanem jachtu', correct: false }
    ]
  },//
  {
    text: 'Jacht płynący pod żaglami i na silniku jest uważany za:',
    answers: [
      { text: 'statek żaglowy', correct: false },
      { text: 'statek mechaniczny', correct: true },
      { text: 'statek mechaniczny tylko wtedy gdy silnik pracuje na biegu', correct: false }
    ]
  },
  {
    text: 'Czy statek, który ciągnie za sobą kotwice jest statkiem w drodze?',
    answers: [
      { text: 'tak', correct: true },
      { text: 'nie', correct: false },
      { text: 'jeśli nie ma uruchomionego silnika lub postawionych żagli nie jest statkiem w drodze', correct: false }
    ]
  },//
  {
    text: 'Liny olinowania stałego na jachcie typu slup, to:',
    answers: [
      { text: 'sztag, wanty, fały', correct: false },
      { text: 'achtersztag, wanty, sztag', correct: true },
      { text: 'kontrafał, achtersztag, fal płatwy mieczowej', correct: false }
    ]
  },
  {
    text: 'Na kursie bejdewind za mocno wybrany fok i poluzowany grot powoduje:',
    answers: [
      { text: 'wzrost zawietrzności jachtu', correct: true },
      { text: 'wzrost nawietrzności jachtu', correct: false },
      { text: 'nie ma znaczenia na zawietrzność i nawietrzność jachtu', correct: false }
    ]
  },
  {
    text: 'Przy prawidłowo wybranych żaglach na jakim kursie występuje największa silą przechylająca?',
    answers: [
      { text: 'baksztag', correct: false },
      { text: 'fordewind', correct: false },
      { text: 'pełny bejdewind', correct: true }
    ]
  },
  ///
  {
    text: 'Który kurs jest ostrzejszy a który pełniejszy?',
    answers: [
      { text: 'półwiatr jest ostrzejszy a bejdewind pełniejszy', correct: false },
      { text: 'baksztag jest ostrzejszy a półwiatr pełniejszy', correct: false },
      { text: 'baksztag jest ostrzejszy a fordewind pełniejszy', correct: true }
    ]
  },
  {
    text: 'Kiedy jacht płynie prawym halsem?',
    answers: [
      { text: 'wiatr wieje w lewa burtę', correct: false },
      { text: 'wiatr wieje w prawa burtę', correct: true },
      { text: 'grot pracuje na lewej burcie, a fok na prawej', correct: false }
    ]
  },
  {
    text: 'Na kursie bejdewind, w trakcie silnego podmuchu wiatru, jacht nadmiernie się przechylił. Co musi zrobić sternik aby przeciwdziałać przechyłowi?',
    answers: [
      { text: 'zluzować żagle, wyostrzyć, balastować na burcie nawietrznej', correct: true },
      { text: 'odpaść do półwiatr i balastować', correct: false },
      { text: 'nic nie robić i przeczekać podmuch wiatru', correct: false }
    ]
  },
  {
    text: 'Refowanie żagli powoduje:',
    answers: [
      { text: 'zwiększenie nawietrzności jachtu', correct: false },
      { text: 'obniżenie środka i zmniejszenie powierzchni ożaglowania', correct: true },
      { text: 'tylko zmniejszenie powierzchni ożaglowania', correct: false }
    ]
  },
  {
    text: 'Wiatr pozorny osiąga największe i najmniejsze wartości na kursach:',
    isMultiple: false,
    answers: [
      { text: 'największe – bejdewind, najmniejsze – fordewind', correct: true },
      { text: 'największe – półwiatr, najmniejsze – baksztag', correct: false },
      { text: 'największe – bejdewind, najmniejsze – baksztag', correct: false }
    ]
  },
  {
    text: 'Na poruszającym się jachcie wiatr pozorny wieje prostopadle do diametralnej jachtu. Czy w takim przypadku wiatr rzeczywisty w stosunku do wiatru pozornego wieje z kierunku zbliżonego do:',
    isMultiple: false,
    answers: [
      { text: 'bejdewindowego', correct: false },
      { text: 'baksztagowego', correct: true },
      { text: 'nie zmienia kierunku', correct: false }
    ]
  },
  {
    text: 'Siłą trzymania kotwicy zależy od:',
    isMultiple: true,
    answers: [
      { text: 'rodzaju kotwicy, rodzaju dna, kata jaki tworzy opuszczony łańcuch kotwiczny z trzonem kotwicy', correct: true },
      { text: 'głębokości akwenu, rodzaju kotwicy, zanurzenia jachtu', correct: false },
      { text: 'od długości wydanego łańcucha kotwicznego, który powinien być nie krótszy niż miedzy 3 i nie dłuższy niż 5 głębokości w miejscu kotwiczenia', correct: false }
    ]
  },
  {
    text: 'Jacht płynący z morza do portu w Gdyni, zbliżył się do przedstawionego niżej znaku nawigacyjnego ustawionego przed wejściem do portu. Co musi zrobić sternik?',
    isMultiple: false,
    image: 'assets/images/19.png',
    answers: [
      { text: 'minąć znak lewa burta', correct: false },
      { text: 'minąć znak prawa burta', correct: true },
      { text: 'trzymać się w bezpiecznej odległości od znaku', correct: false }
    ]
  },
  {
    text: 'Jacht płynący z prądem rzeki zbliża się do przedstawionych niżej znaków nawigacyjnych ustawionych na brzegu. Co musi zrobić sternik?',
    isMultiple: false,
    image: 'assets/images/20.png',
    answers: [
      { text: 'skierować się w stronę lewego brzegu', correct: false },
      { text: 'trzymać się w bezpiecznej odległości od znaku', correct: false },
      { text: 'trzymać się prawego brzegu', correct: true }
    ]
  },
  ///
  {
    text: 'Nadmiernie wybrane żagle na kursie pełny baksztag powodują:',
    isMultiple: false,
    answers: [
      { text: 'wzrost prędkości jachtu i siły przechylającej', correct: false },
      { text: 'zmniejszenie prędkości jachtu', correct: true },
      { text: 'wzrost prędkości jachtu', correct: false }
    ]
  },
  {
    text: 'Co robimy z żaglami przy odpadaniu i ostrzeniu aby zapewnić prawidłową pracę?',
    isMultiple: false,
    answers: [
      { text: 'przy odpadaniu luzujemy, przy ostrzeniu wybieramy', correct: true },
      { text: 'przy odpadaniu wybieramy, przy ostrzeniu luzujemy', correct: false },
      { text: 'luzujemy i wybieramy tylko ze względu na się wiatru a nie przy ostrzeniu lub odpadaniu', correct: false }
    ]
  },
  {
    text: 'Co oznacza ostrzenie i odpadanie jachtu?',
    isMultiple: false,
    answers: [
      { text: 'kiedy jacht ostrzy to zbliża się, a kiedy odpada to oddala się do kierunku wiejącego wiatru', correct: true },
      { text: 'kiedy jacht ostrzy to przechodzi na kursy pełne, a kiedy odpada wraca na kursy ostre', correct: false },
      { text: 'termin dotyczy tylko jachtów morskich', correct: false }
    ]
  },
  {
    text: 'Który z jachtów będzie miał pierwszeństwo drogi?',
    isMultiple: false,
    answers: [
      { text: 'wyprzedzający', correct: false },
      { text: 'wypływający z portu', correct: true },
      { text: 'płynący lewym halsem', correct: false }
    ]
  },
  {
    text: 'Który Regionalny Zarząd Gospodarki Wodnej sprawuje nadzór na bezpieczeństwem żeglugi śródlądowej na akwenie Wielkich Jezior Mazurskich?',
    isMultiple: false,
    answers: [
      { text: 'w Białymstoku', correct: true },
      { text: 'w Giżycku', correct: false },
      { text: 'w Warszawie', correct: false }
    ]
  },
  {
    text: 'Który wiatr będzie wiał z największą prędkością?',
    isMultiple: false,
    answers: [
      { text: '10 m/s', correct: true },
      { text: '25 km/godz', correct: false },
      { text: '14 węzłów', correct: false }
    ]
  },
  /////
  {
    text: "Czym się różni szkwał od podmuchu wiatru?",
    isMultiple: false,
    answers: [
      { text: "szkwał oznacza nagły wzrost prędkości wiatru z możliwością zmiany kierunku nawet o 180°.", correct: true },
      { text: "oznaczają to samo.", correct: false },
      { text: "pojęcie szkwał określa cyrkulacje wiatru nad wodą a podmuch wiatru na lądzie.", correct: false }
    ]
  },
  {
    text: "Czym się różni bryza dzienna od morskiej?",
    isMultiple: false,
    answers: [
      { text: "bryza dzienna wieje po południu a bryza morska w nocy.", correct: false },
      { text: "bryza morska wieje po wschodzie słońca a bryza dzienna po południu.", correct: false },
      { text: "bryza dzienna i morska oznaczają to samo.", correct: true }
    ]
  },
  {
    text: "Silnie rozbudowujące się w pionie chmury typu Cumulus mogą prognozować:",
    isMultiple: false,
    answers: [
      { text: "zwiększenie siły wiatru lub pogorszenie się pogody.", correct: true },
      { text: "zniknięcie wiatru i poprawę pogody.", correct: false },
      { text: "opady.", correct: false }
    ]
  },
  {
    text: "Gdzie możemy się spodziewać «efektu dyszy»?",
    isMultiple: false,
    answers: [
      { text: "pomiędzy wyspami a innymi przewężeniami.", correct: true },
      { text: "podczas ruchu zimnego frontu.", correct: false },
      { text: "podczas silnych opadów deszczu.", correct: false }
    ]
  },
  {
    text: "Griby meteorologiczne to:",
    isMultiple: false,
    answers: [
      { text: "niewielkich rozmiarów pliki cyfrowe generowane przez systemy komputerowe, niezweryfikowane przez synoptyka, zawierające prognozy pogody oparte na modelach IT.", correct: true },
      { text: "niewielkich rozmiarów pliki cyfrowe generowane i zweryfikowane przez synoptyka.", correct: false },
      { text: "niewielkich rozmiarów pliki cyfrowe generowane przez systemy komputerowe, zweryfikowane przez synoptyka, zawierające prognozy pogody oparte na modelach IT.", correct: false }
    ]
  },
  {
    text: "Szkwały i podmuchy wiatru mogą być obecne razem z następującym typem chmur:",
    isMultiple: false,
    answers: [
      { text: "Сirrostratus (warstwowo-cirrusowe).", correct: false },
      { text: "Cumulonimbus (kłębiaste-deszczowe).", correct: true },
      { text: "Stratus (warstwowe).", correct: false }
    ]
  },
  {
    text: "Gdzie w układzie niżowym występuje największe i najmniejsze ciśnienie atmosferyczne?",
    isMultiple: false,
    answers: [
      { text: "najmniejsze w środku a największe na zewnątrz.", correct: true },
      { text: "największe w środku a najmniejsze na zewnątrz.", correct: false },
      { text: "w środku i na zewnątrz najmniejsze.", correct: false }
    ]
  },
  {
    text: "Przy określaniu parametrów technicznych jachtu, symbole Lc i KLW oznaczają:",
    isMultiple: false,
    answers: [
      { text: "Lc - maksymalne zanurzenie, KLW - konstrukcyjna długość wodnicy.", correct: false },
      { text: "Lc - pełna długość, KLW - konstrukcyjna szerokość wodnicy.", correct: true },
      { text: "Lc - pełna szerokość, KLW - konstrukcyjna maksymalna szerokość.", correct: false }
    ]
  },
  {
    text: "Kategoria projektowa jachtów C określa zaprojektowane jednostki do żeglugi na akwenach przybrzeżnych, dużych zatokach, ujściach, jeziorach i rzekach przy sile wiatru:",
    isMultiple: false,
    answers: [
      { text: "do 6 stopni w skali Beauforta i fali do 2 metrów.", correct: true },
      { text: "do 8 stopni w skali Beauforta i fali do 2 metrów.", correct: false },
      { text: "do 4 stopni w skali Beauforta i fali do 1 metra.", correct: false }
    ]
  },
  {
    text: "Po wodach morskich, w jakiej odległości od brzegu, żeglarz jachtowy nie może prowadzić jachtu o długości  do 12 m?",
    isMultiple: false,
    answers: [
      { text: "dalej niż 4 mile.", correct: true },
      { text: "do 2 mil.", correct: false },
      { text: "do jednej mili.", correct: false }
    ]
  },
  {
    text: "Podążając Wisłą, czy żeglarz jachtowy może prowadzić dwumasztowy jacht o długości 20 metrów?",
    isMultiple: false,
    answers: [
      { text: "nie może.", correct: false },
      { text: "może, pod warunkiem, że jest silnik spalinowy.", correct: false },
      { text: "może.", correct: true }
    ]
  },
  {
    text: "Jaki akt prawny określa zakres uprawnień do eksploatacji jachtów żaglowych na wodach śródlądowych?",
    isMultiple: false,
    answers: [
      { text: "Rozporządzenie MSiT z dnia 9 kwietnia 2013 r. w sprawie turystyki wodnej.", correct: false },
      { text: "Ustawa z dnia 25.06.2010 r. o sporcie.", correct: false },
      { text: "Rozporządzenie Ministra Infrastruktury z dnia 28.04.2003 r. w sprawie żeglugi śródlądowej.", correct: true }
    ]
  },
  {
    text: "Jakie są minimalne wymagania wiekowe, aby przystąpić do egzaminu na stopień żeglarza jachtowego?",
    isMultiple: false,
    answers: [
      { text: "pełne 15 lat.", correct: false },
      { text: "pełne 14 lat.", correct: true },
      { text: "pełne 12 lat.", correct: false }
    ]
  },
  {
    text: "Czego nie zaliczamy do osprzętu stałego?",
    isMultiple: false,
    answers: [
      { text: "wanty.", correct: false },
      { text: "salingi.", correct: false },
      { text: "bom.", correct: true }
    ]
  },
  {
    text: "Refsejzingi śluza do?",
    isMultiple: false,
    answers: [
      { text: "obwiązywania zrefowanego żagla do bomu.", correct: true },
      { text: "kontrowania miecza.", correct: false },
      { text: "zabezpieczenia przed przetarciem cum i szpringów.", correct: false }
    ]
  },
  {
    text: "Czy bez patentu można prowadzić jacht żaglowy o długości 7 metrów?",
    isMultiple: false,
    answers: [
      { text: "nie można.", correct: false },
      { text: "można, ale po zapoznaniu się z drogami wodnymi.", correct: false },
      { text: "można.", correct: true }
    ]
  },
  {
    text: "Ile KM ma silnik przyczepny Mercury 10kW?",
    isMultiple: false,
    answers: [
      { text: "15.4.", correct: false },
      { text: "13.6.", correct: true },
      { text: "10.", correct: false }
    ]
  },
  {
    text: "Jak nazywają się podstawowe żagle na jachcie typu szkuner?",
    isMultiple: false,
    answers: [
      { text: "grot i fok.", correct: true },
      { text: "grot i genaker.", correct: false },
      { text: "grot i kliwer.", correct: false }
    ]
  },
  {
    text: "Jak nazywa się pojedynczy tkaninowy segment żagla?",
    isMultiple: false,
    answers: [
      { text: "liki.", correct: false },
      { text: "broty.", correct: false },
      { text: "bryty.", correct: true }
    ]
  },
  {
    text: "Lazy Jack to:",
    isMultiple: false,
    answers: [
      { text: "pokrowiec na grocie przymocowany do sztagu i zawieszony liny na maszcie.", correct: true },
      { text: "urządzenie do nawijania sztaksyla.", correct: false },
      { text: "odłączany daszek nad kokpitem.", correct: false }
    ]
  },
  {
    text: "W trakcie plynęcia na silniku sternik zauważył brak chłodzenia silnika. Co powinen zrobić?",
    isMultiple: false,
    answers: [
      { text: "zmniejszyć obroty i kontynuować rejs.", correct: false },
      { text: "wyłączyć silnik, aby uniknąć przegrzania.", correct: true },
      { text: "zalać wodą w celu obniżenia temperatury silnika.", correct: false }
    ]
  },
  //
  {
    text: "Podczas pracy silnika zmianę biegów wykonujemy:",
    answers: [
      { text: "na niskich oborotach,", correct: true },
      { text: "energicznie pociągając dźwignię biegów b bez zmiany obrotów silnika,", correct: false },
      { text: "dodając więcej gazu.", correct: false }
    ]
  },
  {
    text: "Na kursie baksztag odczucie sily wiatry rzeczywistego jest słabsze czy silniejsze w stosunku do wiatru pozornego.",
    answers: [
      { text: "silniejsze,", correct: false },
      { text: "słabsze,", correct: true },
      { text: "nie ma znaczenia.", correct: false }
    ]
  },
  {
    text: "Prawidłowo przeprowazona resuscytacja polaga na:",
    answers: [
      { text: "wykonywaniu 30 uciśnięć i 2 oddechów ratowniczyh,", correct: false },
      { text: "wykonywaniu resuscytacji do momentu przyjazdu służb ratunkowych,", correct: false },
      { text: "wszystkie odpowiedzi są prawidlowe.", correct: true }
    ]
  },
  {
    text: "Jaka temperatura wychłodzena wnętrza ciala może doprowadzić do hipotermii glebokej prowadzącej do śmeirci biologicznej?",
    answers: [
      { text: "35°C,", correct: false },
      { text: "33°C,", correct: false },
      { text: "22-27°C.", correct: true }
    ]
  },
  {
    text: "Czy przy oparzeniach I stopnia nalezy ochodzić powierzchenie oparzoną polewąc ją wodą?",
    answers: [
      { text: "tak,", correct: true },
      { text: "nie,", correct: false },
      { text: "tulko wodą z detergentem.", correct: false }
    ]
  },
  {
    text: "Czy do gaszenia plonącej benzyny wolno używać wody?",
    answers: [
      { text: "nie wolno,", correct: true },
      { text: "wolno,", correct: false },
      { text: "wolno uzywać pod warunkiem, że benzyna jest bez dodatku oleju.", correct: false }
    ]
  },
  {
    text: "Ferholung to manewr:",
    answers: [
      { text: "obrócenia jachtu o 180°,", correct: false },
      { text: "przesunięcia jachtu wzdluż nabrzeża przy pomocy lin i sil załogi.", correct: true },
      { text: "odejścia od nabrzeża na springu rufowym.", correct: false }
    ]
  },
  {
    text: "Sternik zauważyl żeglarza, który czerwoną flagą zatacza kręgi. Co to może oznaczać?",
    answers: [
      { text: "sygnał wzywania pomocy,", correct: true },
      { text: "gest pozdrawiający innych żeglarzy,", correct: false },
      { text: "nic nie oznacza.", correct: false }
    ]
  },
  {
    text: "Przed wpłynięciem do kanału sternik zauważyl poniższy znak. Co on oznacza?",
    image: 'assets/images/56.png',
    answers: [
      { text: "nakaz zachowania szczególnej ostrożności,", correct: false },
      { text: "nakaz zatrzymania statku,", correct: false },
      { text: "nakaz nadawania sygnaly dżwiękowego.", correct: true }
    ]
  },
  {
    text: "Co oznacza znak zamieszczony poniżej?",
    image: 'assets/images/57.png',
    answers: [
      { text: "linia napowietrzana nad drogą wodną w odleglości 12 metrow od znaku,", correct: false },
      { text: "linia napowietrzana nad drogą wodną na wysokości 12 metrów nad poziomem najwyższej,", correct: true },
      { text: "linia napowietrzana nad drogą wodną na wysokości 12 metrów nad poziomem najniżsczej wody.", correct: false }
    ]
  },
  {
    text: "Dwa jachty płyną tym samym halsem i z taką samą predkoscią. Pierwszy bajdewindem a drugi baksztagiem. Kierunki ich przemieszczania się mogą wskazywać na ryzyko zderzenia. Który jacht powinien ustąpić?",
    answers: [
      { text: "plynący bejdewindem,", correct: false },
      { text: "plynący baksztagiem,", correct: true },
      { text: "większy jacht ustępuje mniejszemu.", correct: false }
    ]
  },
  {
    text: "Osoba posiadąjaca patent żaglarza jachtowego może prowadzić:",
    answers: [
      { text: "tylko jachty jendomasztowe,", correct: false },
      { text: "jedno i dwumasztowe,", correct: false },
      { text: "ilość masztów nie ma znaczenia.", correct: true }
    ]
  },
  {
    text: "Czy można zacumować jacht w kanale lączącym dwa jeziora?",
    answers: [
      { text: "tak, ale tylko w miejscach do tego wyznaczonych,", correct: true },
      { text: "nie,", correct: false },
      { text: "można ale tylko w dzień.", correct: false }
    ]
  },
  {
    text: "W trakcie żeglugi ze względów bezpieczeństwa, należy poruszać się po burcie:",
    answers: [
      { text: "zawietrznej,", correct: false },
      { text: "nawietrznej,", correct: true },
      { text: "nie ma to znaczenia.", correct: false }
    ]
  },
  {
    text: "W przypadku wypadnięcia za burtę gwałtowne poruszane się czlowieka w zimnej wodzie powoduje:",
    answers: [
      { text: "skraca czas przeżycia,", correct: true },
      { text: "dostarcza organizmowi więcej ciepla i wydluża czas przeżycia,", correct: false },
      { text: "latwiejsze wyciagnięcie czlowieka.", correct: false }
    ]
  },
  {
    text: "Czym niższa temperature wody tym szanse przeżycia chlowieka po wypadnięciu na burtę:",
    answers: [
      { text: "rosną,", correct: false },
      { text: "maleją,", correct: true },
      { text: "nie ma znaczenia.", correct: false }
    ]
  },
  {
    text: "W celu poprawienia bezpieczeństwa żeglugi, przy podmuchach wiatry o sile 60B:",
    answers: [
      { text: "refujemy żagle,", correct: true },
      { text: "płyniemy na pełnych żaglach i obserwujemy zachowanie jachtu,", correct: false },
      { text: "przechodzimy do pólwiatru.", correct: false }
    ]
  },
  {
    text: "Zworot przed rufę to:",
    answers: [
      { text: "przejście rufą linii wiatru od baksztagu jednego halsu do baksztagu drugiego halsu,", correct: true },
      { text: "przejście dziobem lub rufą linii wiatru aby po zworocie wiatr wiał w przeciwległą burtę,", correct: false },
      { text: "przejście linii wiatru od baksztago do bejdewindu.", correct: false }
    ]
  },
  {
    text: "Na jacht zacumowany do nabrzeża działa wiatr:",
    answers: [
      { text: "wlasny,", correct: false },
      { text: "pozorny,", correct: false },
      { text: "rzeczywisty.", correct: true }
    ]
  },
  {
    text: "Podniesienie miecza na kursach ostrych powoduje:",
    answers: [
      { text: "wzrost prędkości jachtu,", correct: false },
      { text: "zwiększenie dryfu,", correct: true },
      { text: "obniżenie srodka ciężkosci.", correct: false }
    ]
  },
  {
    text: "Na kursie pólwiatr, zwiększenie stateczości jachtu uzyskamy w wyniku:",
    answers: [
      { text: "refowania i luzowania żagli, balastowania na burcie nawietrznej,", correct: true },
      { text: "wybrania żagli,", correct: false },
      { text: "podniesienia płetwy sterowej i miecza.", correct: false }
    ]
  },
  {
    text: "W jakiej kolejności stawiamy żagle na jachcie typu slup?",
    answers: [
      { text: "od żagli przegnich,", correct: false },
      { text: "od żagli tylnych,", correct: true },
      { text: "nie ma znaczenia.", correct: false }
    ]
  },
  ////
  {
    text: "Forpik znajduje sie w części jachtu:",
    answers: [
      { text: "w przedniej", correct: true },
      { text: "w tylnej", correct: false },
      { text: "w środkowej", correct: false }
    ]
  },
  {
    text: "Jak nazywa się lina lącząca jacht z nabrzeżem i biegnąca od dziobu w kierunku rufy?",
    answers: [
      { text: "brest", correct: false },
      { text: "cuma", correct: false },
      { text: "szpring", correct: true }
    ]
  },
  {
    text: "Jak nazywa się wierzcholek masztu?",
    answers: [
      { text: "nok", correct: false },
      { text: "stopa", correct: false },
      { text: "top", correct: true }
    ]
  },
  {
    text: "Co to jest dalba?",
    answers: [
      { text: "drewniany lub betonowy slup stojący na ladzie", correct: false },
      { text: "drewniany lub betonowy pal wbity w dno", correct: true },
      { text: "okrągła boja zakotowiczona do dna", correct: false }
    ]
  },
  {
    text: "Który z poniższych znaków stawiany jest wyjściu z kanalu?",
    image: 'assets/images/74.png',
    answers: [
      { text: "tylko typu A", correct: false },
      { text: "tylko typu B", correct: false },
      { text: "A z prawej strony wyjścia, B z lewej strony wyjścia", correct: true }
    ]
  },
  {
    text: "Jaki jest numer telefonu alarmowego nad wodą Wodnego Ochotniczego Pogotowia Ratunkowego na szlaku Wielkich Jeziora Mazurskich i jeziorze Jeziorak.",
    answers: [
      { text: "601 100 100 i 984 szlak WJM i j. Jeziorak", correct: true },
      { text: "600 100 100 i 985 szlak WJM i j. Jeziorak", correct: false },
      { text: "601 100 300 i 994 szlak WJM i j. Jeziorak", correct: false }
    ]
  },
  {
    text: "Jachty mieczowe, posiadające komory wypornościowe zaliczamy do grupy łodzi:",
    answers: [
      { text: "wywracalnych, ale niezatapialnych", correct: true },
      { text: "wywracalnych i zatapialnych", correct: false },
      { text: "zatapialnych, ale niewywracalnych", correct: false }
    ]
  },
  {
    text: "Trimaran jest jachtem, który zbudowany jest z:",
    answers: [
      { text: "dwóch kadłubów", correct: false },
      { text: "trzech kadłubów", correct: true },
      { text: "jednego kadłuba", correct: false }
    ]
  },
  {
    text: "Co to jest bakista?",
    answers: [
      { text: "jest to miejsce w którym przechowujemy osprzęt", correct: true },
      { text: "jest to dziobowy przedział sypialny", correct: false },
      { text: "jest to miejsce, w którym zbierana jest woda deszczowa", correct: false }
    ]
  },
  {
    text: "Zęza to:",
    answers: [
      { text: "pomieszczenie dziobowe", correct: false },
      { text: "podłoga na jachcie", correct: false },
      { text: "przestrzeń, która znajduje się pod podłogą wewnątrz jachtu", correct: true }
    ]
  },
  {
    text: "Stępka jest to:",
    answers: [
      { text: "część masztu", correct: false },
      { text: "główny element konstrukcji wzdłużnej jachtu", correct: true },
      { text: "trzecia licząc od dołu reja na fokmaszcie", correct: false }
    ]
  },
  {
    text: "Skrzynia mieczowa jest to:",
    answers: [
      { text: "element łączący pokładnik ze wzdłużnikiem", correct: false },
      { text: "zwyczajowe miejsce przechowywania broni białej", correct: false },
      { text: "element konstrukcyjny, w którym pracuje miecz", correct: true }
    ]
  },
  {
    text: "Głównym poprzecznym elementem konstrukcyjnym kadłuba jest:",
    answers: [
      { text: "wręgi", correct: true },
      { text: "stewa", correct: false },
      { text: "pawęż", correct: false }
    ]
  },
  {
    text: "Końce bomu to:",
    answers: [
      { text: "pięta i top", correct: false },
      { text: "nok i pięta", correct: true },
      { text: "pik i garda", correct: false }
    ]
  },
  {
    text: "Jaki rodzaj miecz obrazuje rysunek obok?",
    image: 'assets/images/84.png',
    answers: [
      { text: "balastowy", correct: false },
      { text: "szybrowy", correct: true },
      { text: "obrotowy", correct: false }
    ]
  },
  {
    text: "Lina olinowania stałego, która biegnie od topu masztu do dziobu, to?",
    answers: [
      { text: "wanta", correct: false },
      { text: "achtersztag", correct: false },
      { text: "sztag", correct: true }
    ]
  },
  /////
  {
    text: "Lina wszyta w lik żagla, która zapobiega rozciąganiu się tkaniny i służy jako pomoc przy mocowaniu żagla, to:",
    answers: [
      { text: "reflina", correct: false },
      { text: "halslina", correct: false },
      { text: "liklina", correct: true }
    ]
  },
  {
    text: "Elementem olinowania stałego są?",
    answers: [
      { text: "sztag i topenanta", correct: false },
      { text: "sztag i stenwanta", correct: true },
      { text: "stenwanta i szot foka", correct: false }
    ]
  },
  {
    text: "Sposobem mocowania żagla do masztu nie jest?",
    answers: [
      { text: "likszpara", correct: false },
      { text: "kluza", correct: true },
      { text: "pełzacz", correct: false }
    ]
  },
  {
    text: "Jak nazywa się urządzenie do podnoszenia i opuszczania silnika zaburtowego?",
    answers: [
      { text: "pantograf", correct: true },
      { text: "podnośnik", correct: false },
      { text: "marlinka", correct: false }
    ]
  },
  {
    text: "Elementem służącym do łączenia takielunku jest:",
    answers: [
      { text: "kipa", correct: false },
      { text: "kausza", correct: false },
      { text: "szekla", correct: true }
    ]
  },
  {
    text: "Jakiego rodzaju paliwo jest używane w czterosuwowych silnikach przyczepnych?",
    answers: [
      { text: "czysta benzyna", correct: true },
      { text: "benzyna zmieszana z olejem silnikowym", correct: false },
      { text: "olej napędowy", correct: false }
    ]
  },
  {
    text: "Prawą stroną szlaku żeglownego na rzece jest:",
    answers: [
      { text: "ta, która znajduje się na prawo od statku płynącego w dół rzeki (od źródła do ujścia)", correct: true },
      { text: "ta, która znajduje się na prawo od statku płynącego w górę rzeki (od ujścia do źródła)", correct: false },
      { text: "ta, która znajduje się północnym lub wschodnim brzegu", correct: false }
    ]
  },
  {
    text: "Zielona boja w kształcie stożka na śródlądziu oznacza:",
    answers: [
      { text: "lewą granicę szlaku żeglownego", correct: true },
      { text: "prawą granicę szlaku żeglownego", correct: false },
      { text: "rozgałęzienie toru żeglownego", correct: false }
    ]
  },
  {
    text: "Czerwona boja w kształcie walca oznacza:",
    answers: [
      { text: "prawy brzeg", correct: false },
      { text: "zakaz wejścia na szlak żeglowny", correct: false },
      { text: "prawą granicę szlaku żeglownego", correct: true }
    ]
  },
  {
    text: "Co to jest jaz?",
    answers: [
      { text: "jest to budowla hydrotechniczna służąca do ochrony przed falami", correct: false },
      { text: "jest to budowla hydrotechniczna umożliwiająca jachtom uzupełnianie wody", correct: false },
      { text: "jest to budowla hydrotechniczna, umożliwiająca długotrwałe spiętrzenie wody", correct: true }
    ]
  },
  {
    text: "Budowla hydrotechniczna umożliwiająca pokonanie różnicy poziomu wody między dwoma zbiornikami wody to:",
    answers: [
      { text: "śluza", correct: true },
      { text: "jaz", correct: false },
      { text: "spad", correct: false }
    ]
  },
  {
    text: "Na rysunku przedstawiony jest znak:",
    image: 'assets/images/97.png',
    answers: [
      { text: "wschodni znak kardynalny", correct: false },
      { text: "zachodni znak kardynalny", correct: true },
      { text: "rozgałęzienie szlaku żeglownego", correct: false }
    ]
  },
  {
    text: "Znak na rysunku mówi nam, że niebezpieczeństwo znajduje się na:",
    image: 'assets/images/98.png',
    answers: [
      { text: "wschód od znaku", correct: true },
      { text: "zachód od znaku", correct: false },
      { text: "północ od znaku", correct: false }
    ]
  },
  {
    text: "Widząc północny znak kardynalny, należy go opłynąć od?",
    answers: [
      { text: "od południa", correct: false },
      { text: "od północy", correct: true },
      { text: "od zachodu", correct: false }
    ]
  },
  {
    text: "Na wodach morskich kierunek toru wodnego oznaczony jest:",
    answers: [
      { text: "od strony portu do morza", correct: false },
      { text: "od strony morza do portu", correct: true },
      { text: "tak jak na wodach śródlądowych", correct: false }
    ]
  },
  {
    text: "Podczas śluzowania nie wolno:",
    answers: [
      { text: "odpychać się od ściany śluzy za pomocą rąk lub nóg", correct: true },
      { text: "cumować na biegowo", correct: false },
      { text: "cumować do innego jachtu", correct: false }
    ]
  },
  {
    text: "Hamowanie żaglami polega na:",
    answers: [
      { text: "wyluzowaniu żagli", correct: false },
      { text: "wypchnięciu ich na wiatr", correct: true },
      { text: "wybraniu ich maksymalnie", correct: false }
    ]
  },
  ////
  {
    text: "Co stanie się gdy wrzucimy bieg wstecz przy śrubie prawoskrętnej trzymając ster „zero”?",
    answers: [
      { text: "jacht ruszy do tyłu, a rufa zostanie odrzucona w prawo", correct: false },
      { text: "jacht ruszy prosto do tyłu", correct: false },
      { text: "jacht ruszy do tyłu, a rufa zostanie odrzucona w lewo", correct: true }
    ]
  },
  {
    text: "Szpring dziobowy na jachcie jest poprowadzony od:",
    answers: [
      { text: "dziobu jachtu do polera przed jachtem", correct: false },
      { text: "dziobu jachtu do polera przy rufie jachtu", correct: true },
      { text: "rufy jachtu do polera przy dziobie jachtu", correct: false }
    ]
  },
  {
    text: "Aby zrównoważyć silną nawietrzność jachtu podczas szkwału, należy:",
    answers: [
      { text: "wybrać tylny żagiel", correct: true },
      { text: "zrzucić przednie żagle", correct: false },
      { text: "poluzować tylny żagiel", correct: false }
    ]
  },
  {
    text: "Wyjaśnij pojęcie zawietrzności jachtu:",
    answers: [
      { text: "jest to tendencja jachtu do samoistnego ostrzenia", correct: false },
      { text: "jest to tendencja jachtu do samoistnego odpadania", correct: true },
      { text: "jest to tendencja jachtu do samoistnego pływania z wiatrem", correct: false }
    ]
  },
  {
    text: "Co to znaczy, że jacht płynie prawym halsem?",
    answers: [
      { text: "lewa burta jest burtą nawietrzną, żagle układają się na prawej burcie", correct: false },
      { text: "jacht płynie w prawą stronę", correct: false },
      { text: "prawa burta jest burtą nawietrzną, żagle układają się na lewej burcie", correct: true }
    ]
  },
  {
    text: "Co trzeba zrobić, gdy jacht nadmiernie się przechyla?",
    answers: [
      { text: "przenieść balast na burtę zawietrzną, wybrać maksymalnie żagle, odpaść od wiatru", correct: false },
      { text: "przenieść balast na burtę nawietrzną, luzować żagle, ostrzyć, refować żagle", correct: true },
      { text: "przenieść balast do tyłu, ustawić się bokiem do wiatru", correct: false }
    ]
  },
  {
    text: "Siła ciągu powstająca na żaglu zwiększa się w przypadku:",
    answers: [
      { text: "zwiększenia przechyłu jachtu", correct: false },
      { text: "zmniejszenia przechyłu przez balastowanie jachtu", correct: true },
      { text: "wyluzowania żagli do łopotu", correct: false }
    ]
  },
  {
    text: "Podniesienie płetwy sterowej o 45° spowoduje:",
    answers: [
      { text: "polepszenie sterowności", correct: false },
      { text: "pogorszenie sterowności", correct: true },
      { text: "zmniejszenie dryfu", correct: false }
    ]
  },
  {
    text: "Wiatr zachodni wieje:",
    answers: [
      { text: "z zachodu", correct: true },
      { text: "na zachód", correct: false },
      { text: "zachodzie Słońca", correct: false }
    ]
  },
  {
    text: "Bryza dzienna na jeziorze wieje w kierunku:",
    answers: [
      { text: "od jeziora do jego brzegu", correct: true },
      { text: "od brzegów jeziora do jego środka", correct: false },
      { text: "zawsze ze wschodu na zachód", correct: false }
    ]
  },
  {
    text: "Długotrwałe opady o niezbyt silnym natężeniu zwiastują chmury:",
    answers: [
      { text: "Cirrus i cirrostratus", correct: false },
      { text: "Cumulus i cumulonimbus", correct: false },
      { text: "Stratus i nimbostratus", correct: true }
    ]
  },
  {
    text: "Jednostką ciśnienia atmosferycznego jest:",
    answers: [
      { text: "lux", correct: false },
      { text: "hektopaskal", correct: true },
      { text: "m2", correct: false }
    ]
  },
  {
    text: "Zakres skali Beauforta to:",
    answers: [
      { text: "0°- 9 °", correct: false },
      { text: "0°- 10°", correct: false },
      { text: "0°- 12 °", correct: true }
    ]
  },
  {
    text: "Jak zachowuje się wiatr wiejący znad wysokiego brzegu?",
    answers: [
      { text: "zmienia kierunek na przeciwny do wiatru rzeczywistego – na dopychający do brzegu", correct: true },
      { text: "zmienia kierunek na równoległy do brzegu", correct: false },
      { text: "zwiększa tylko siłę", correct: false }
    ]
  },
  {
    text: "Bezpieczniejsze kotwicowisko na jeziorze znajduje się:",
    answers: [
      { text: "po stronie zawietrznej wyspy", correct: true },
      { text: "po stronie nawietrznej wyspy", correct: false },
      { text: "obie strony są niebezpieczne", correct: false }
    ]
  },
  {
    text: "Prędkość wiatru zależy od:",
    answers: [
      { text: "różnicy ciśnień między dwoma punktami", correct: true },
      { text: "wielkości jachtu", correct: false },
      { text: "wielkości barometru", correct: false }
    ]
  },
  {
    text: "Szkwał jest to:",
    answers: [
      { text: "część dziobowa jachtu balastowego", correct: false },
      { text: "nagły silny podmuch", correct: true },
      { text: "wiatr występujący w strefie międzyzwrotnikowej", correct: false }
    ]
  },
  //////
  {
    text: "W obszarze wyżu wiatry wieją:",
    answers: [
      { text: "od środka układu na zewnątrz", correct: true },
      { text: "do środka układu", correct: false },
      { text: "od środka układu na półkuli północnej, a do środka na półkuli południowej", correct: false }
    ]
  },
  {
    text: "Jeden długi dźwięk nadawany przez statek na drodze śródlądowej oznacza:",
    answers: [
      { text: "uwaga", correct: true },
      { text: "moje maszyny pracują wstecz", correct: false },
      { text: "nie mogę manewrować", correct: false }
    ]
  },
  {
    text: "Powtarzające się długie dźwięki oznaczają:",
    answers: [
      { text: "wzywam pomocy", correct: true },
      { text: "zmieniam mój kurs w lewo", correct: false },
      { text: "mam zamiar zawrócić w prawo", correct: false }
    ]
  },
  {
    text: "Czarny stożek wierzchołkiem w dół wywieszony na statku oznacza:",
    answers: [
      { text: "pojedynczy mały statek w ruchu", correct: false },
      { text: "statek płynący jednocześnie na żaglach i na silniku", correct: true },
      { text: "statek na kotwicy", correct: false }
    ]
  },
  {
    text: "Czarna kula wywieszona na dziobie jachtu oznacza:",
    answers: [
      { text: "statek płynący jednocześnie na żaglach i na silniku", correct: false },
      { text: "pojedynczy mały statek w ruchu", correct: false },
      { text: "statek na kotwicy", correct: true }
    ]
  },
  {
    text: "W jaki sposób postawisz jacht w dryf?",
    answers: [
      { text: "w kursie bajdewind wykonasz zwrot przez sztag bez luzowania foka", correct: true },
      { text: "z kursu baksztag zrobisz zwrot przez sztag i umocujesz ster do burty", correct: false },
      { text: "zrzucisz żagle, przymocujesz ster do prawej burty", correct: false }
    ]
  },
  {
    text: "Jakie czynności należy wykonać przed wyrzuceniem kotwicy z dziobu:",
    answers: [
      { text: "dla bezpieczeństwa zrzucić foka i przygotować linę kotwiczną", correct: false },
      { text: "płynąć w linii wiatru i poczekać aż jacht zatrzyma się lub zacznie się cofać", correct: false },
      { text: "oba odpowiedzi są prawidłowe", correct: true }
    ]
  },
  {
    text: "Którą burta podejmujemy człowieka z wody na jachcie mieczowym?",
    answers: [
      { text: "zawietrzną", correct: false },
      { text: "nawietrzną", correct: true },
      { text: "nie ma to znaczenia", correct: false }
    ]
  },
  {
    text: "Halsowanie jest to:",
    answers: [
      { text: "wyciąganie jachtów z hali", correct: false },
      { text: "przemieszczanie się pod wiatr, na zmianę prawym i lewym bajdewindem", correct: true },
      { text: "zmniejszanie powierzchni żagli", correct: false }
    ]
  },
  {
    text: "Stawianie i zrzucanie żagli należy wykonywać:",
    answers: [
      { text: "pod wiatr", correct: true },
      { text: "w dowolnym kursie", correct: false },
      { text: "tylko w kursach pełnych", correct: false }
    ]
  },
  {
    text: "Jaki kąt ma światło burtowe?",
    answers: [
      { text: "112,5 °", correct: true },
      { text: "135 °", correct: false },
      { text: "225 °", correct: false }
    ]
  },
  {
    text: "Na brzegu widnieje taki znak. Co on oznacza:",
    image: 'assets/images/131.png',
    answers: [
      { text: "uwaga most o wysokości przęsła nad wodą podanej na znaku (12 m)", correct: false },
      { text: "zakaz ruchu statków o mocy silnika większej niż podana na znaku (12KM)", correct: false },
      { text: "nakaz nie przekraczania prędkości podanej na znaku (12km/h)", correct: true }
    ]
  },
  {
    text: "Zaobserwowano znak oznacza:",
    image: 'assets/images/132.png',
    answers: [
      { text: "zachować ostrożność, mogą przepływać szybkie łodzie i skutery wodne", correct: false },
      { text: "zmniejszyć szybkość, aby nie wytwarzać fali", correct: true },
      { text: "zachować ostrożność, nierówna linia brzegowa, spłycenia", correct: false }
    ]
  },
  {
    text: "Zaobserwowano znak przedstawiony na rysunku. Co on oznacza?",
    image: 'assets/images/133.png',
    answers: [
      { text: "nakaz zachowania szczególnej ostrożności", correct: true },
      { text: "zakaz ruchu statków żaglowych", correct: false },
      { text: "nakaz nadania sygnału dźwiękowego", correct: false }
    ]
  },
  {
    text: "Co oznacza ten znak?",
    image: 'assets/images/134.png',
    answers: [
      { text: "nakaz żeglugi tylko z jednym żaglem", correct: false },
      { text: "pierwszeństwo przejścia dla jachtów żaglowych", correct: false },
      { text: "zakaz żeglugi pod żaglami", correct: true }
    ]
  },
  {
    text: "Zaobserwowała znak oznacza?",
    image: 'assets/images/135.png',
    answers: [
      { text: "uwaga, przeszkoda podwodna", correct: false },
      { text: "nakaz nadania sygnału dźwiękowego", correct: true },
      { text: "zakaz zatrzymywania się", correct: false }
    ]
  },
  {
    text: "Jacht o długości 8 m i wysokości masztu 14 m wpływa do kanału. Na brzegu ustawione są znaki. Co należy zrobić?",
    image: 'assets/images/136.png',
    answers: [
      { text: "nie ma przeszkód, płynąć dalej", correct: false },
      { text: "położyć maszt i płynąć dalej", correct: true },
      { text: "nie da się przejść jacht jest za długi", correct: false }
    ]
  },
  {
    text: "Z jachtu o wysokości masztu 8 m, szerokości 3 m i zanurzeniu 1 m, zaobserwowano przy wejściu do kanału tablice jak na rysunku. Jak należy postąpić?",
    image: 'assets/images/137.png',
    answers: [
      { text: "nie da się przejść, należy zawrócić", correct: false },
      { text: "można przejść po złożeniu masztu", correct: true },
      { text: "można przejść nie ma przeszkód", correct: false }
    ]
  },
  {
    text: "Według zasad bhp trzymanie rąk i nóg poza burtą jachtu jest:",
    answers: [
      { text: "nie mówią nic na ten temat", correct: false },
      { text: "zdecydowanie zabronione", correct: true },
      { text: "dozwolone, ale tylko podczas żeglugi", correct: false }
    ]
  },
  {
    text: "Osoba posiadająca stopień żeglarza jachtowego jest uprawniona do prowadzenia na wodach śródlądowych jachtów o powierzchni żagli:",
    answers: [
      { text: "do 15 m2", correct: false },
      { text: "do 40 m2", correct: false },
      { text: "bez ograniczeń", correct: true }
    ]
  },
  {
    text: "Przy śluzie pierwszeństwo mają statki:",
    answers: [
      { text: "wchodzące do śluzy", correct: false },
      { text: "duże, niezależnie czy wchodzą czy wychodzą ze śluzy", correct: false },
      { text: "wychodzące ze śluzy", correct: true }
    ]
  },
  {
    text: "Jacht płynący lewym halsem ustępuje z drogi jachtowi płynącemu prawym halsem:",
    answers: [
      { text: "tak", correct: true },
      { text: "nie", correct: false },
      { text: "zawsze ustępuje jacht mniejszy.", correct: false }
    ]
  },
  {
    text: "Jeżeli dwa jachty żaglowe mają wiatr z tej samej burty, to jacht znajdujący się od strony nawietrznej powinien:",
    answers: [
      { text: "kontynuować rejs po ustalonej trasie", correct: false },
      { text: "wezwać jacht żaglowy znajdujący się po zawietrznej do ustąpienia z drogi", correct: false },
      { text: "ustąpić z drogi.", correct: true }
    ]
  },
  {
    text: "Dwa jachty płyną przeciwnymi halsami, ustępuje:",
    answers: [
      { text: "jacht płynący prawym halsem", correct: false },
      { text: "jacht płynący lewym halsem", correct: true },
      { text: "jacht większy.", correct: false }
    ]
  },
  {
    text: "Prawa burta jachtu żaglowego na śródlądziu oznaczona jest światłem koloru:",
    answers: [
      { text: "czerwonego", correct: false },
      { text: "zielonego", correct: true },
      { text: "białego.", correct: false }
    ]
  },
  {
    text: "Pozycja HELP to:",
    answers: [
      { text: "sposób wzywania pomocy", correct: false },
      { text: "sposób ułożenia ciała w wodzie zmniejszający utratę ciepła z organizmu", correct: true },
      { text: "sposób ułożenia ciała w wodzie zwiększający utratę ciepła z organizmu.", correct: false }
    ]
  },
  {
    text: "Pierwszą czynnością po wywróceniu jachtu jest:",
    answers: [
      { text: "sprawdzenie stanu załogi", correct: true },
      { text: "zabezpieczenie jachtu przed ‘grzybem’", correct: false },
      { text: "zabezpieczenie osprzętu i wyposażenia ruchomego przed utonięciem.", correct: false }
    ]
  },
  {
    text: "Pozycję „boczną bezpieczną” stosujemy w przypadku:",
    answers: [
      { text: "krwawienia z nosa", correct: false },
      { text: "gdy osoba jest nieprzytomna", correct: true },
      { text: "po urazie kręgosłupa.", correct: false }
    ]
  },
  {
    text: "Resuscytacje krążeniowo-oddechową osoby dorosłej prowadzimy w schemacie:",
    answers: [
      { text: "30 uciśnięć klatki piersiowej do 2 wdechów ratunkowych", correct: true },
      { text: "5 wdechów ratunkowych i następnie 30 uciśnięć klatki piersiowej do 2 wdechów ratunkowych", correct: false },
      { text: "2 wdechy ratunkowe do 15 uciśnięć klatki piersiowej.", correct: false }
    ]
  },
  {
    text: "Do koła ratunkowego wchodzimy:",
    answers: [
      { text: "podpływając pod koło", correct: false },
      { text: "chwytamy się obiema rękoma", correct: false },
      { text: "zakładamy koło przez głowę i zakładamy pod pachy.", correct: true }
    ]
  },
  {
    text: "Sztrandowanie jest to:",
    answers: [
      { text: "niezamierzone wejście na mieliznę", correct: false },
      { text: "celowe wejście na mieliznę", correct: true },
      { text: "wyciąganie jachtu na brzeg po sezonie.", correct: false }
    ]
  }
];
