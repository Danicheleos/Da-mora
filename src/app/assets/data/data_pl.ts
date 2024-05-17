import { Question } from 'src/app/core/interfaces/question.interface';

export const dataPl: Question[] = [
  {
    text: 'Co oznacza taki znak przed wejściem do kanału?',
    image: '/assets/images/1.png',
    answers: [
      { text: 'uwaga na fale wytwarzane przez motorówki', correct: false },
      { text: 'zakaz wytwarzania fali', correct: true },
      { text: 'miejsce o niebezpiecznym zafalowaniu', correct: false }
    ]
  },
  {
    text: 'Co musi zrobić sternik jachtu, kiedy na kursie zauważy poniższe znaki?',
    image: '/assets/images/2.png',
    answers: [
      { text: 'przepuścić jednostki motorowe płynące z naprzeciwka', correct: false },
      { text: 'nie przekraczać skrajni zaznaczonej białymi kolorami', correct: true },
      { text: 'przekraczać skrajnie zaznaczona czerwonymi kolorami', correct: false }
    ]
  },
  {
    text: 'Na drodze wodnej pod mostem sternik zauważył poniższy znak. Co on oznacza?',
    image: '/assets/images/3.png',
    answers: [
      { text: 'można płynąć tylko w jednym kierunku i od strony znaku', correct: false },
      { text: 'utrudnienia na torze wodnym', correct: false },
      { text: 'zalecane przejście w obydwu kierunkach', correct: true }
    ]
  },
  {
    text: 'Gdzie sternik musi zacumować jacht jeśli płynie w kierunku poniższego znaku?',
    image: '/assets/images/4.png',
    answers: [
      { text: 'w dowolnym miejscu, znak oznacza miejsce postojowe', correct: false },
      { text: 'nie wolno parkować z prawej strony znaku', correct: false },
      { text: 'wolno parkować od znaku w kierunku prawej strony', correct: true }
    ]
  },
  {
    text: 'Od której strony należy omijać poniższy znak kardynalny?',
    image: '/assets/images/5.png',
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
    image: '/assets/images/19.png',
    answers: [
      { text: 'minąć znak lewa burta', correct: false },
      { text: 'minąć znak prawa burta', correct: true },
      { text: 'trzymać się w bezpiecznej odległości od znaku', correct: false }
    ]
  },
  {
    text: 'Jacht płynący z prądem rzeki zbliża się do przedstawionych niżej znaków nawigacyjnych ustawionych na brzegu. Co musi zrobić sternik?',
    isMultiple: false,
    image: '/assets/images/20.png',
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
      { text: '14 węzłów', correct: true }
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
    text: "Gdzie możemy spodziewać się strefy przyspieszenia wiatru?",
    isMultiple: false,
    answers: [
      { text: "pomiędzy wyspami a innymi obiektami.", correct: true },
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
    text: "Gdzie cyklon i antycyklon w układzie niskiego ciśnienia?",
    isMultiple: false,
    answers: [
      { text: "cyklon w centrum, antycyklon na zewnątrz.", correct: true },
      { text: "antycyklon w centrum, cyklon na zewnątrz.", correct: false },
      { text: "wewnątrz i na zewnątrz niskiego ciśnienia.", correct: false }
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
    text: "Na wodach śródlądowych, w jakiej odległości od brzegu żeglarz jachtowy może prowadzić jacht o długości do 12 metrów?",
    isMultiple: false,
    answers: [
      { text: "dalej niż 4 mile.", correct: false },
      { text: "do 2 mil.", correct: true },
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
      { text: "fok i sztaksyl.", correct: true },
      { text: "fok i genaker.", correct: false },
      { text: "fok i kliper.", correct: false }
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
  }
];
