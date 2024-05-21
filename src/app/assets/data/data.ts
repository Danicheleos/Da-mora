import { Question } from 'src/app/core/interfaces/question.interface';

export const data: Question[] = [
  {
    textPl: 'Co oznacza taki znak przed wejściem do kanału?',
    textRu: 'Что означает такой знак перед входом в канал?',
    image: '/assets/images/1.png',
    answers: [
      {
        textPl: 'Uwaga na fale wytwarzane przez motorówki',
        textRu: 'Следите за волнами, создаваемыми моторными лодками',
        correct: false,
      },
      {
        textPl: 'Zakaz wytwarzania fali',
        textRu: 'Запрет создания волн',
        correct: true,
      },
      {
        textPl: 'Miejsce o niebezpiecznym zafalowaniu',
        textRu: 'Место с небезопасным волнением',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Co musi zrobić sternik jachtu, kiedy na kursie zauważy poniższe znaki?',
    textRu:
      'Что должен сделать рулевой яхты, когда заметит на курсе знаки ниже?',
    image: '/assets/images/2.png',
    answers: [
      {
        textPl: 'Przepuścić jednostki motorowe płynące z naprzeciwka',
        textRu: 'Пропустить моторные судна, идущие с противоположной стороны',
        correct: false,
      },
      {
        textPl: 'Nie przekraczać skrajni zaznaczonej białymi kolorami',
        textRu: 'Не пересекать границы, отмеченные белым цветом',
        correct: true,
      },
      {
        textPl: 'Przekraczać skrajnie zaznaczona czerwonymi kolorami',
        textRu: 'Пересекать границы, отмеченные красным цветом',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Na drodze wodnej pod mostem sternik zauważył poniższy znak. Co on oznacza?',
    textRu:
      'На водном пути под мостом рулевой заметил знак ниже. Что означает этот знак?',
    image: '/assets/images/3.png',
    answers: [
      {
        textPl: 'Można płynąc tylko w jednym kierunku i od strony znaku',
        textRu: 'Можно идти только одним направлением и со стороны знака',
        correct: false,
      },
      {
        textPl: 'Utrudnienia na torze wodnym',
        textRu: 'Сложный водный путь',
        correct: false,
      },
      {
        textPl: 'Zalecane przejście w obydwu kierunkach',
        textRu: 'Рекомендуется проход в обоих направлениях',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Gdzie sternik musi zacumować jacht jeśli płynie w kierunku poniższego znaku?',
    textRu:
      'Где рулевой должен пришвартоваться, если идет в направлении знака ниже?',
    image: '/assets/images/4.png',
    answers: [
      {
        textPl: 'W dowolnym miejscu, znak oznacza miejsce postojowe',
        textRu: 'В любом месте, знак означает место стоянки',
        correct: false,
      },
      {
        textPl: 'Nie wolno parkować z prawej strony znaku',
        textRu: 'Нельзя швартовать с правой стороны знака',
        correct: false,
      },
      {
        textPl: 'Wolno parkować od znaku w kierunku prawej strony',
        textRu: 'Можно швартовать в направлении стороне справа от знака',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Od której strony należy omijać poniższy znak kardynalny?',
    textRu: 'C какой стороны следует обойти кардинальный знак внизу?',
    image: '/assets/images/5.png',
    answers: [
      {
        textPl: 'Znak omijamy od północy',
        textRu: 'Знак обойти с севера',
        correct: true,
      },
      {
        textPl:
          'Informuje nas o niebezpieczeństwach znajdujących się od północnej strony, znak omijamy od południa',
        textRu: 'Информирует нас об опасности с севера, знак обойти c юга,',
        correct: false,
      },
      {
        textPl: 'Zawsze omijamy prawa burt',
        textRu: 'Всегда обходим правым бортом',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Kto odpowiada za bezpieczeństwo jachtu i załogi?',
    textRu: 'Кто отвечает за безопасность яхты и команды?',
    answers: [
      {
        textPl: 'Każdy odpowiada za siebie',
        textRu: 'Каждый отвечает за себя',
        correct: false,
      },
      {
        textPl: 'Kierownik statku czyli osoba, która jest kapitanem na jachcie',
        textRu: 'Работник судна, который является капитаном на яхте',
        correct: true,
      },
      {
        textPl:
          'Tylko i wyłącznie właściciel jachtu, nawet jeśli nie jest kapitanem jachtu',
        textRu: 'Только хозяин яхты, даже если он не является капитаном яхты',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Jacht płynący pod żaglami i na silniku jest uważany za:',
    textRu: 'Яхта, идущая под парусами и на моторе считается:',
    answers: [
      {
        textPl: 'Statek żaglowy',
        textRu: 'Судном парусным',
        correct: false,
      },
      {
        textPl: 'Statek mechaniczny',
        textRu:
          'Судном моторным,с. судном моторным, но только когда двигатель работает',
        correct: true,
      },
      {
        textPl: 'Statek mechaniczny tylko wtedy gdy silnik pracuje na biegu',
        textRu: 'Судном моторным, но только когда двигатель работает',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czy statek, który ciągnie za sobą kotwice jest statkiem w drodze?',
    textRu: 'Является ли судно, сорвавшее якорь, судном на ходу?',
    answers: [
      {
        textPl: 'Tak',
        textRu: 'Да',
        correct: true,
      },
      {
        textPl: 'Nie',
        textRu: 'Нет',
        correct: false,
      },
      {
        textPl:
          'Jeśli nie ma uruchomionego silnika lub postawionych żagli nie jest statkiem w drodze',
        textRu:
          'Если нет включённого двигателя или поставленных парусов, судно не является судном на ходу',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Liny olinowania stałego na jachcie typu slup, to:',
    textRu: 'Элементы стоячего такелажа на яхте типа шлюп, это:',
    answers: [
      {
        textPl: 'Sztag, wanty, fały',
        textRu: 'Штаг, ванты, фалы',
        correct: false,
      },
      {
        textPl: 'Achtersztag, wanty, sztag',
        textRu: 'Ахтерштаг, ванты, штаг',
        correct: true,
      },
      {
        textPl: 'Kontrafał, achtersztag, fal płatwy mieczowej',
        textRu: 'Нирал, ахтерштаг, фал шверта',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Na kursie bejdewind za mocno wybrany fok i poluzowany grot  powoduje:',
    textRu:
      'На курсе бейдевинд сильно выбранный передний парус и потравленный грот вызывают:',
    answers: [
      {
        textPl: 'Wzrost zawietrzności jachtu',
        textRu: 'Увеличение подветренноcти',
        correct: true,
      },
      {
        textPl: 'Wzrost nawietrzności jachtu',
        textRu: 'Увеличение наветренности',
        correct: false,
      },
      {
        textPl: 'Nie ma znaczenia na zawietrzność i nawietrzność jachtu',
        textRu: 'Нет значения в подветренной и наветренной стороне яхты',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Przy prawidłowo wybranych żaglach na jakim kursie występuje największa silą przechylająca?',
    textRu:
      'При правильно поставленных парусах, на каком курсе возникает наибольшая сила крена?',
    answers: [
      {
        textPl: 'Baksztag',
        textRu: 'Бакштаг',
        correct: false,
      },
      {
        textPl: 'Fordewind',
        textRu: 'Фордевинд',
        correct: false,
      },
      {
        textPl: 'Pełny bejdewind',
        textRu: 'Бейдевинд',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Który kurs jest ostrzejszy a który pełniejszy?',
    textRu: 'Какой курс является острее, а какой полнее?',
    answers: [
      {
        textPl: 'Półwiatr jest ostrzejszy a bejdewind pełniejszy',
        textRu: 'Галфвинд является острее, а бейдевинд полнее',
        correct: false,
      },
      {
        textPl: 'Baksztag jest ostrzejszy a półwiatr pełniejszy',
        textRu: 'Бакштаг является острее, а галфвинд полнее',
        correct: false,
      },
      {
        textPl: 'Baksztag jest ostrzejszy a fordewind pełniejszy',
        textRu: 'Бакштаг является острее, а фордевинд полнее',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Kiedy jacht płynie prawym halsem?',
    textRu: 'Когда яхта идёт правым галсом?',
    answers: [
      {
        textPl: 'Wiatr wieje w lewa burtę',
        textRu: 'Ветер дует в левый борт',
        correct: false,
      },
      {
        textPl: 'Wiatr wieje w prawa burtę',
        textRu: 'Ветер дует в правый борт',
        correct: true,
      },
      {
        textPl: 'Grot pracuje na lewej burcie, a fok na prawej',
        textRu: 'Грот работает на левом борту, а передний парус на правом',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Na kursie bejdewind, w trakcie silnego podmuchu wiatru , jacht nadmiernie się przechylił. Co musi zrobić sternik aby przeciwdziałać przechyłowi?',
    textRu:
      'На курсе бейдевинд, при сильном порыве ветра яхту чрезмерно накренило. Что должен сделать рулевой, чтобы противодействовать крену?',
    answers: [
      {
        textPl: 'Zluzować żagle, wyostrzyć, balastować na burcie nawietrznej',
        textRu: 'Травить паруса, привестись, откренять на наветренном борте',
        correct: true,
      },
      {
        textPl: 'Odpaść do półwiatr i balastować',
        textRu: 'Увалиться до галфинда, откренять',
        correct: false,
      },
      {
        textPl: 'Nic nie robić i przeczekać podmuch wiatru',
        textRu: 'Ничего не делать и подождать порыва ветра',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Refowanie żagli powoduje:',
    textRu: 'Рифление парусов вызывает:',
    answers: [
      {
        textPl: 'Zwiększenie nawietrzności jachtu',
        textRu: 'Увеличение наветренности яхты',
        correct: false,
      },
      {
        textPl: 'Obniżenie środka i zmniejszenie powierzchni ożaglowania',
        textRu: 'Занижение центра тяжести и уменьшение площади паруса',
        correct: true,
      },
      {
        textPl: 'Tylko zmniejszenie powierzchni ożaglowani',
        textRu: 'Только уменьшение площади паруса',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Wiatr pozorny osiąga największe i najmniejsze wartości na kursach:',
    textRu:
      'Вымпельный ветер достигает наибольшего и наименьшего значения на курсах:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Największe – bejdewind, najmniejsze – fordewind',
        textRu: 'Наибольшее - бейдевинд, наименьшее - фордевинд',
        correct: true,
      },
      {
        textPl: 'Największe – półwiatr, najmniejsze – baksztag',
        textRu: 'Наибольшее - галфвинд, наименьшее - бакштаг',
        correct: false,
      },
      {
        textPl: 'Największe – bejdewind, najmniejsze – baksztag',
        textRu: 'Наибольшее - бейдевинд, наименьшее - бакштаг',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Na poruszającym się jachcie wiatr pozorny wieje prostopadle do diametralnej jachtu. Czy w takim przypadku wiatr rzeczywisty w stosunku do wiatru pozornego wieje z kierunku zbliżonego do:',
    textRu:
      'На движушейся яхте, вымпельный ветер дует перпендикуляно диаметральной плоскости яхты. В таком случае, ветер истинный относительно ветра вымпельного дует в направлении ближе к:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Bejdewindowego',
        textRu: 'Бейдевинду',
        correct: false,
      },
      {
        textPl: 'Baksztagowego',
        textRu: 'Бакштагу',
        correct: true,
      },
      {
        textPl: 'Nie zmienia kierunku',
        textRu: 'Не меняет направления',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Silą trzymania kotwicy zależy od:',
    textRu: 'Cила держания якоря зависит от:',
    isMultiple: true,
    answers: [
      {
        textPl:
          'Rodzaju kotwicy, rodzaju dna, kata jaki tworzy opuszczony łańcuch kotwiczny z trzonem kotwicy',
        textRu:
          'Типа якоря, типа дна, угла, сформированным наклоном якорной цепи',
        correct: true,
      },
      {
        textPl: 'Głębokości akwenu, rodzaju kotwicy, zanurzenia jachtu',
        textRu: 'Глубины водного пространства, типа якоря, дрейфа яхты',
        correct: false,
      },
      {
        textPl:
          'Od długości wydanego łańcucha kotwicznego, który powinien być nie krótszy niż miedzy 3 i nie dłuższy niż 5 głębokości w miejscu kotwiczeni',
        textRu:
          'От длины отданой якорной цепи, которая должна быть не короче 3 и  больше 5 глубин акватории в месте якорной стоянки',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jacht płynący z morza do portu w Gdyni, zbliżył się do przedstawionego niżej znaku nawigacyjnego ustawionego przed wejściem do portu. Co musi zrobić sternik?',
    textRu:
      'Яхта, идущая с моря в порт Гдыни приблежается до представленного ниже навигационного знака, установленного перед входом в порт. Что должен сделать рулевой?',
    isMultiple: false,
    image: '/assets/images/19.png',
    answers: [
      {
        textPl: 'Minąć znak lewa burta',
        textRu: 'Пройти знак левым бортом',
        correct: false,
      },
      {
        textPl: 'Minąć znak prawa burta',
        textRu: 'Пройти знак правым бортом',
        correct: true,
      },
      {
        textPl: 'Trzymać się w bezpiecznej odległości od znaku',
        textRu: 'Держаться на безопасном расстоянии от знака',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jacht płynący z prądem rzeki zbliża się do przedstawionych niżej znaków nawigacyjnych ustawionych na brzegu. Co musi zrobić sternik?',
    textRu:
      'Яхта, идущая по течению реки, сближается с предоставленными ниже навигационными знаками, установленными на берегу. Что должен сделать рулевой?',
    isMultiple: false,
    image: '/assets/images/20.png',
    answers: [
      {
        textPl: 'Skierować się w stronę lewego brzegu',
        textRu: 'Направить судно в сторону левого берега',
        correct: false,
      },
      {
        textPl: 'Trzymać się w bezpiecznej odległości od znaku',
        textRu: 'Держаться в безопасном расстоянии от знака',
        correct: false,
      },
      {
        textPl: 'Trzymać się prawego brzegu',
        textRu: 'Держаться правого берега',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Nadmiernie wybrane żagle na kursie pełny baksztag powodują:',
    textRu: 'Излишне выбранные паруса на курсе полный бакштаг приведут к:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Wzrost prędkości jachtu i siły przechylającej',
        textRu: 'Увеличению скорости яхты и опрокидывающей силы',
        correct: false,
      },
      {
        textPl: 'Zmniejszenie prędkości jachtu',
        textRu: 'Уменьшению скорости яхты',
        correct: true,
      },
      {
        textPl: 'Wzrost prędkości jachtu',
        textRu: 'Увеличению скорости яхты',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Co robimy z żaglami przy odpadaniu i ostrzeniu aby zapewnić prawidłowa prace?',
    textRu:
      'Что мы делаем с парусами при уваливании и приведении для обеспечения правильной работы?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Przy odpadaniu luzujemy, przy ostrzeniu wybieramy',
        textRu: 'При уваливании травим, при приведении выбираем',
        correct: true,
      },
      {
        textPl: 'Przy odpadaniu wybieramy, przy ostrzeniu luzujemy',
        textRu: 'При уваливании выбираем, при приведении травим',
        correct: false,
      },
      {
        textPl:
          'Luzujemy i wybieramy tylko ze względu na się wiatru a nie przy ostrzeniu lub odpadaniu',
        textRu:
          'Травим и выбираем только из-за силы ветра,а не при приведении или уваливании',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Co oznacza ostrzenie i odpadanie jachtu?',
    textRu: 'Что означает "привестись" и "увалиться"?',
    isMultiple: false,
    answers: [
      {
        textPl:
          'Kiedy jacht ostrzy to zbliża się, a kiedy odpada to oddala się do kierunku wiejącego wiatru',
        textRu:
          'Когда яхта приводится, она идёт в сторону ветра, когда уваливается, то отдаляется от дующего ветра',
        correct: true,
      },
      {
        textPl:
          'Kiedy jacht ostrzy to przechodzi na kursy pełne, a kiedy odpada wraca na kursy ostre',
        textRu:
          'Когда яхта приводится, то идёт на полном курсе, а когда уваливается - возвращается на острый курс',
        correct: false,
      },
      {
        textPl: 'Termin dotyczy tylko jachtów morskich',
        textRu: 'Термины касаются только морских яхт',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Który z jachtów będzie miał pierwszeństwo drogi?',
    textRu: 'Какая из яхт будет иметь право прохода?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Wyprzedzający',
        textRu: 'Обгоняющая',
        correct: false,
      },
      {
        textPl: 'Wypływający z portu',
        textRu: 'Выходящая с порта',
        correct: true,
      },
      {
        textPl: 'Płynący lewym halsem',
        textRu: 'Идущая левым галсом',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Który Regionalny Zarząd Gospodarki Wodnej sprawuje nadzór na bezpieczeństwem żeglugi śródlądowej na akwenie Wielkich Jezior Mazurskich?',
    textRu:
      'Какое Региональное Управление Водного Хозяйства обеспечивает надзор за безопасностью cудоходства на Мазурских озерах?',
    isMultiple: false,
    answers: [
      {
        textPl: 'W Białymstoku',
        textRu: 'В Белостоке',
        correct: true,
      },
      {
        textPl: 'W Giżycku',
        textRu: 'В Гижицко',
        correct: false,
      },
      {
        textPl: 'W Warszawie',
        textRu: 'В Варшаве',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Który wiatr będzie wiał z największą prędkością?',
    textRu: 'Какой ветер дует с наибольшей скоростью?',
    isMultiple: false,
    answers: [
      {
        textPl: '10 m/s',
        textRu: '10 м/с',
        correct: true,
      },
      {
        textPl: '25 km/godz',
        textRu: '25 км/ч',
        correct: false,
      },
      {
        textPl: '14 węzłów',
        textRu: '14 узлов',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czym się rożni szkwał od podmuchu wiatru?',
    textRu: 'В чем разница между шквалом и порывом ветра?',
    isMultiple: false,
    answers: [
      {
        textPl:
          'Szkwał oznacza nagły wzrost prędkości wiatru z możliwością zmiany kierunku  nawet o 180О',
        textRu:
          'Шквал означает внезапное увеличение скорости ветра с возможностью смены направления до 180О',
        correct: true,
      },
      {
        textPl: 'Oznaczają to samo',
        textRu: 'Означает одно и то же',
        correct: false,
      },
      {
        textPl:
          'Pojęcie szkwał określa cyrkulacje wiatru nad woda a podmuch wiatru na ladzie',
        textRu:
          'Термин шквал определяет циркуляцию ветра над водой, а порыв ветра - на земле',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czym się rożni bryza dzienna od morskiej?',
    textRu: 'В чем разница между дневным бризом и морским?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Bryza dzienna wieje po południu a bryza morska w nocy',
        textRu: 'Дневной бриз дует в полдень, а морской дует ночью',
        correct: false,
      },
      {
        textPl:
          'Bryza morska wieje po wschodzie słońca a bryza dzienna po południu',
        textRu:
          'Морской бриз дует при восходе солнца, а дневной дует в полдень',
        correct: false,
      },
      {
        textPl: 'Bryza dzienna i morska oznacza to samo',
        textRu: 'Дневной и морской бриз - одно и то же',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Silnie rozbudowujące się w pionie chmury typu Cumulus mogą prognozować:',
    textRu:
      'Cильно расширяющиеся вертикально облака типа Сumulus (кучевые облака) могут предсказать:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Wzrost siły wiatru lub pogorszenie pogody',
        textRu: 'Увеличение силы ветра или ухудшение погоды',
        correct: true,
      },
      {
        textPl: 'Zanik wiatru i poprawę pogody',
        textRu: 'Исчезновение ветра и улучшение погоды',
        correct: false,
      },
      {
        textPl: 'Opady ciągle',
        textRu: 'Осадки',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Gdzie możemy się spodziewać «efektu dyszy»:',
    textRu: 'Где мы можем ожидать зону акселерации ветра?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Pomiędzy wyspami I innymi przewężeniami',
        textRu: 'Между островами и другими объектами',
        correct: true,
      },
      {
        textPl: 'Przy przesuwaniu się frontu chłodnego',
        textRu: 'При движении холодного фронта',
        correct: false,
      },
      {
        textPl: 'W czasie silnych opadów deszczu',
        textRu: 'Во время сильных дождевых осадков',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Griby meteorologiczne to:',
    textRu: 'Метеорологические GRIB’ы это:',
    isMultiple: false,
    answers: [
      {
        textPl:
          'Niewielkich rozmiarów pliki cyfrowe, wygenerowane przez systemy komputerowe, nie sprawdzone przez synoptyka, zwierające prognozę pogody opracowana w oparciu o informatyczny model pogody',
        textRu:
          'Небольших размеров цифровые файлы, сгенерированные через компьютерные системы, не проверенные через cиноптика, содержащие погодные прогнозы основанные на IT модели',
        correct: true,
      },
      {
        textPl:
          'Niewielkich rozmiarów pliki cyfrowe, wygenerowane i sprawdzone przez synoptyka',
        textRu:
          'Небольших размеров цифровые файлы, сгенерированные и проверенные синоптиком',
        correct: false,
      },
      {
        textPl:
          'Niewielkich rozmiarów pliki cyfrowe, wygenerowane przez systemy komputerowe, sprawdzone przez synoptyka, zwierające prognozę pogody opracowana w oparciu o informatyczny model pogody',
        textRu:
          'Небольших размеров цифровые файлы, сгенерированные через компьютерные системы, проверенные через cиноптика, содержащие погодные прогнозы основанные на IT модели',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Szkwały oraz silne podmuchy wiatru mogą towarzyszyć chmurom:',
    textRu:
      'Шквалы и порывы ветра могут быть вместе с следующим типом облаков:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Cirrostratus',
        textRu: 'Сirrostratus (перисто-слоистые)',
        correct: false,
      },
      {
        textPl: 'Cumulonimbus',
        textRu: 'Cumulonimbus (кучево-дождевые)',
        correct: true,
      },
      {
        textPl: 'Stratus',
        textRu: 'Stratus (слоистые)',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Gdzie w układzie niżowym występuje największe i najmniejsze ciśnienie atmosferyczne?',
    textRu: 'Где циклон и антициклон в системе низкого давления?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Najmniejsze w środku a największe na zewnątrz',
        textRu: 'Циклон в центре, антициклон снаружи',
        correct: true,
      },
      {
        textPl: 'Największe w środku a najmniejsze na zewnątrz',
        textRu: 'Антициклон в центре, циклон снаружи',
        correct: false,
      },
      {
        textPl: 'W środku i na zewnątrz najmniejsze',
        textRu: 'Внутри и снаружи низкого давления',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Przy określaniu parametrów technicznych jachtu symbole Lc i KLW oznaczają:',
    textRu:
      'При определении технических параметров яхты, символы Lc и KLW означают:',
    isMultiple: false,
    answers: [
      {
        textPl:
          'Lс – zaniżenie maksymalne, KLW – konstrukcyjna długość linii wodnej',
        textRu:
          'Lc - максимальная осадка, KLW - конструкторская длина ватерлинии',
        correct: false,
      },
      {
        textPl:
          'Lс – długość całkowita, KLW – konstrukcyjna szerokość linii wodnej',
        textRu: 'Lc - целая длина, KLW - конструкторская ширина ватерлинии',
        correct: true,
      },
      {
        textPl:
          'Lс – szerokość całkowita, KLW - konstrukcyjna szerokość maksymaln',
        textRu: 'Lc - целая ширина, KLW - конструкторская максимальная ширина',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Kategoria projektowa jachtu C określa jednostki zaprojektowane do rejsów po wodach przybrzeżnych, dużych zatokach, zalewach, jeziorach i rzekach, w warunkach wiatru o sile:',
    textRu:
      'Проектная категория яхт С определяет запроектированные единицы для рейсов в прибрежных водах, больших заливах, наводнениях, озерах и реках, при условии силы ветра:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Do 6 B i fali do 2 m',
        textRu: 'До 6 баллов Бофорта и волн высотой до 2 метров',
        correct: true,
      },
      {
        textPl: 'Do 8 B i fali do 2 m',
        textRu: 'До 8 баллов Бофорта и волн высотой до 2 метров',
        correct: false,
      },
      {
        textPl: 'Do 4 B i fali do 1 m',
        textRu: 'До 4 баллов Бофорта и волн высотой до 1 метра',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Po wodach morskich, w jakiej odległości od brzegu, żeglarz jachtowy może prowadzić jachtu o długości  do 12 m?',
    textRu:
      'В морских водах, в какой дальности от берега żeglarz jachtowy может управлять яхтой длиной до 12 метров?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Powyżej 4 mil',
        textRu: 'Дальше 4 миль',
        correct: true,
      },
      {
        textPl: 'Do 2 mil',
        textRu: 'До 2 миль',
        correct: false,
      },
      {
        textPl: 'Do 1 mil',
        textRu: 'До одной мили',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Czy po Wiśle, żeglarz jachtowy może prowadzić jacht żaglowy dwumasztowy o  długości 20 metrów?',
    textRu:
      'Идущий по Висле, может ли żeglarz jachtowy вести двухмачтовую яхту длиной 20 метров?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Nie może',
        textRu: 'Не может',
        correct: false,
      },
      {
        textPl: 'Może ale pod warunkiem posiadania silnika spalinowego',
        textRu: 'Может, при условии, что есть двигатель внутреннего сгорания',
        correct: false,
      },
      {
        textPl: 'Мoże',
        textRu: 'Может',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Jaki akt prawny określa zakres uprawnień do prowadzenia jachtów żaglowych po wodach śródlądowych?',
    textRu:
      'Какой правовой акт определяет объем полномочий на эксплуатацию парусных яхт во внутренних водах?',
    isMultiple: false,
    answers: [
      {
        textPl:
          'Rozporządzenie MSiT z dnia 09 kwietnia 2013 roku w sprawie uprawiania turystyki wodnej',
        textRu:
          'Постановление MSiT от 9 апреля 2013 года касательно туристической водной практики',
        correct: false,
      },
      {
        textPl: 'Ustawa z dnia 25.06.2010 roku o sporcie',
        textRu: 'Акт от 25.06.2010 о спорте',
        correct: false,
      },
      {
        textPl:
          'Rozporządzenie Ministra Infrastruktury a dnia 28.04.2003 r. W sprawie przepisów żeglugowych na śródlądowych drogach wodnych',
        textRu:
          'Постановление Министра Инфраструктуры от 28.04.2003 касательно cудоходства во внутренних водах',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Jakie są minimalne wymagania wiekowe aby przystąpić do egzaminu na stopień żeglarza jachtowego?',
    textRu:
      'Каковы минимальные возрастные требования, чтобы приступить к экзамену на ступень żeglarza jachtowego?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Ukończone 15 lat',
        textRu: 'Полные 15 лет',
        correct: false,
      },
      {
        textPl: 'Ukończone 14 lat',
        textRu: 'Полные 14 лет',
        correct: true,
      },
      {
        textPl: 'Ukończone 12 lat',
        textRu: 'Полные 12 лет',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czego nie zaliczamy do osprzętu stałego?',
    textRu: 'Что входит в динамическое оборудование?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Wanty',
        textRu: 'Ванты',
        correct: false,
      },
      {
        textPl: 'Salingi',
        textRu: 'Краспицы',
        correct: false,
      },
      {
        textPl: 'Bom',
        textRu: 'Гик',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Refsejzingi śluza do:',
    textRu: 'Риф-шкентели служат для:',
    isMultiple: false,
    answers: [
      {
        textPl: 'Obwiązywania zrefowanego żagla do bomu',
        textRu: 'Обвязывания зарифлённого паруса к гику',
        correct: true,
      },
      {
        textPl: 'Kontrowania miecza',
        textRu: 'Держания шверта',
        correct: false,
      },
      {
        textPl: 'Zabezpieczenia przed przetarciem cum i szpringów',
        textRu: 'Защиты швартовых концов от перетираний',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Czy bez patentu można prowadzić jacht żaglowy o długości 7 metrów?',
    textRu: 'Можно ли управлять яхтой 7 метров без сертификата?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Nie można',
        textRu: 'Нельзя',
        correct: false,
      },
      {
        textPl: 'Można ale tylko po oznakowanych torach wodnych',
        textRu: 'Можно, но при ознакомлении водных путей',
        correct: false,
      },
      {
        textPl: 'Możn',
        textRu: 'Можно',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Ile KM ma silnik przyczepny Mercury 10kW?',
    textRu: 'Сколько лошадиных сил имеет навесной двигатель Mercury 10kW?',
    isMultiple: false,
    answers: [
      {
        textPl: '15.4',
        textRu: '15.4',
        correct: false,
      },
      {
        textPl: '13.6',
        textRu: '13.6',
        correct: true,
      },
      {
        textPl: '10',
        textRu: '10',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Jak nazywają się podstawowe żagle na jachcie typu slup?',
    textRu: 'Как называются базовые паруса на яхте типа шлюп?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Grot i fok',
        textRu: 'Грот и стаксель',
        correct: true,
      },
      {
        textPl: 'Grot i genaker',
        textRu: 'Грот и генакер',
        correct: false,
      },
      {
        textPl: 'Grot i kliwer',
        textRu: 'Грот и кливер',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Jak nazywają się płaty materiału, z których uszyty jest żagiel?',
    textRu: 'Как называется отдельный тканевый сегмент паруса?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Liki',
        textRu: 'Лики',
        correct: false,
      },
      {
        textPl: 'Broty',
        textRu: 'Бороды',
        correct: false,
      },
      {
        textPl: 'Bryty',
        textRu: 'Бриты',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Lazy Jack to:',
    textRu: 'Лэйзи Джек это:',
    isMultiple: false,
    answers: [
      {
        textPl:
          'Pokrowiec na żagiel grot zamocowany do bomu I podwieszony do masztu',
        textRu:
          'Чехол для грота, прикрепленный к гику и подвешенный веревками к мачте',
        correct: true,
      },
      {
        textPl: 'Urządzenie do rolowania foka',
        textRu: 'Устройство для закрутки стакселя',
        correct: false,
      },
      {
        textPl: 'Rozpinany daszek nad kokpitem',
        textRu: 'Съемный козырек над кокпитом',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'W trakcie plynęcia na silniku sternik zauważył brak chłodzenia silnika. Co powinen zrobić?',
    textRu:
      'В пути на воде под двигателем рулевой заметил отсутствие работы системы охлаждения двигателя. Как он должен поступить?',
    isMultiple: false,
    answers: [
      {
        textPl: 'Zmniejszyć oboroty i plynąć dalej',
        textRu: 'Уменьшить обороты и идти дальше',
        correct: false,
      },
      {
        textPl: 'Wyłączyć silnik aby nie dopuscic do przegrzania',
        textRu: 'Выключить двигатель, чтобы не допустить перегрева',
        correct: true,
      },
      {
        textPl: 'Polewać silnik wodą w celu zmniejszenia temperatury silnika',
        textRu: 'Облить водой в целях снижения температуры двигателя',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Podczas pracy silnika zmianę biegów wykonujemy:',
    textRu: 'Во время работы двигателя, переключение передач производится:',
    answers: [
      {
        textPl: 'Na niskich oborotach',
        textRu: 'На низких оборотах',
        correct: true,
      },
      {
        textPl:
          'Energicznie pociagając dżwignie biegów b bez zminay oborotow silnika',
        textRu:
          'Энергично потянуть рычаг передач и без смены оборотов двигателя',
        correct: false,
      },
      {
        textPl: 'Dodając więcej gazu',
        textRu: 'Добавить газу',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Na kursie baksztag odczucie sily wiatry rzeczywistego jest słabsze czy silniejsze w stosunku do wiatru pozornego',
    textRu:
      'На курсе бакштаг чувство силы истинного ветра слабее или сильнее по отношению к вымпельному ветру?',
    answers: [
      {
        textPl: 'Silniejsze',
        textRu: 'Сильнее',
        correct: false,
      },
      {
        textPl: 'Słabsze',
        textRu: 'Слабее',
        correct: true,
      },
      {
        textPl: 'Nie ma znaczeni',
        textRu: 'Не имеет значения',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Prawidłowo przeprowazona resuscytacja polaga na:',
    textRu: 'Правильно проведённая реанимация заключается в:',
    answers: [
      {
        textPl: 'Wykonywaniu 30 uciśnięć i 2 oddechów ratowniczyh',
        textRu: 'Выполнении 30 компрессий и 2 искусственных вдохов',
        correct: false,
      },
      {
        textPl:
          'Wykonywaniu resuscytacji do momentu przyjazdu sluzb ratunkowych',
        textRu: 'Выполнении реанимации до момента приезда скорой помощи',
        correct: false,
      },
      {
        textPl: 'Wszystkie odpowiedzi są prawidlowe',
        textRu: 'Все ответы верны',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Jaka temperatura wychłodzena wnętrza ciala może doprowadzić do hipotermii glebokej prowadzącej do śmeirci biologicznej?',
    textRu:
      'Какая температура охлаждения внутренних органов может привести к глубокому переохлаждению, ведущему к биологической смерти?',
    answers: [
      {
        textPl: '350C',
        textRu: '350C',
        correct: false,
      },
      {
        textPl: '330C',
        textRu: '330C',
        correct: false,
      },
      {
        textPl: '22-270C',
        textRu: '22-270C',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Czy przy oparzeniach I stopnia nalezy ochodzić powierzchenie oparzoną polewąc ją wodą?',
    textRu:
      'Допускается ли при ожогах первой степени обожённый участок обливать водой?',
    answers: [
      {
        textPl: 'Tak',
        textRu: 'Да',
        correct: true,
      },
      {
        textPl: 'Nie',
        textRu: 'Нет',
        correct: false,
      },
      {
        textPl: 'Tulko wodą z detergentem',
        textRu: 'Да, но с очищающим средством',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czy do gaszenia plonącej benzyny wolno używać wody?',
    textRu: 'Можно ли использовать воду для тушения горящего бензина?',
    answers: [
      {
        textPl: 'Nie wolno',
        textRu: 'Нельзя',
        correct: true,
      },
      {
        textPl: 'Wolno',
        textRu: 'Можно',
        correct: false,
      },
      {
        textPl: 'Wolno uzywać pod warunkiem, że benzyna jest bez dodatku oleju',
        textRu: 'Можно, но при условии что бензин без добавления масла',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Ferholung to manewr:',
    textRu: 'Ферхолунг - это манёвр:',
    answers: [
      {
        textPl: 'Obrócenia jachtu o 1800',
        textRu: 'Разворот яхты на 1800',
        correct: false,
      },
      {
        textPl:
          'Przesunięcia jachtu wzdluż nabrzeża przy pomocy lin i sil zalogi',
        textRu:
          'Движения яхты вдоль набережной с помощью веревок и сил команды',
        correct: true,
      },
      {
        textPl: 'Odejścia od nabrzeża na springu rufowym',
        textRu: 'Отход от набережной на кормовом шпринге',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Sternik zauważyl żeglarza, który czerwoną flagą zatacza kręgi. Co to może oznaczać?',
    textRu:
      'Рулевой заметил матроса, который описывает красным флагом круги. Что это означает?',
    answers: [
      {
        textPl: 'Sygnał wzywania pomocy',
        textRu: 'Сигнал вызова помощи',
        correct: true,
      },
      {
        textPl: 'Gest pozdrawiający innych żeglarzy',
        textRu: 'Сигнал приветствия других матросов',
        correct: false,
      },
      {
        textPl: 'Nic nie oznacz',
        textRu: 'Ничего не означает',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Przed wpłynięciem do kanału sternik zauważyl poniższy znak. Co on oznacza?',
    textRu:
      'Перед выходом в канал, рулевой заметил знак ниже. Что он означает?',
    image: '/assets/images/56.png',
    answers: [
      {
        textPl: 'Nakaz zachowania szczególnej ostrożności',
        textRu: 'Предписание соблюдения особой осторожности',
        correct: false,
      },
      {
        textPl: 'Nakaz zatrzymania statku',
        textRu: 'Предписание остановки судна',
        correct: false,
      },
      {
        textPl: 'Nakaz nadawania sygnaly dżwiękowego',
        textRu: 'Предписание подачи звукового сигнала',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Co oznacza znak zamieszczony poniżej?',
    textRu: 'Что означает знак ниже?',
    image: '/assets/images/57.png',
    answers: [
      {
        textPl:
          'Linia napowietrzana nad drogą wodną w odleglości 12 metrow od znaku',
        textRu:
          'Линия напряжения над водным путём на расстоянии 12 метров от знака',
        correct: false,
      },
      {
        textPl:
          'Linia napowietrzana nad drogą wodną na wysokości 12 metrów nadp poziomen najwyższej',
        textRu:
          'Линия напряжения над водным путём на высоте 12 метров над уровнем наивысшей воды',
        correct: true,
      },
      {
        textPl:
          'Linia napowietrzana nad drogą wodną na wysokości 12 metrów nadp poziomen najniżsczej wody',
        textRu:
          'Линия напряжения над водным путём на высоте 12 метров над уровнем наименьшей воды',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Dwa jachty płyną tym samym halsem i z taką samą predkoscią. Pierwszy bajdewindem a drugi baksztagiem. Kierunki ich przemieszczania się mogą wskazywać na ryzyko zderzenia. Który jacht powinien ustapić?',
    textRu:
      'Две яхты идут одинаковым галсом с одинаковой скоростью. Первый - бейдевиндом, второй - бакштагом.Их курсы могут создать риск столкновения. Кто должен уступить?',
    answers: [
      {
        textPl: 'Plynący bejdewindem',
        textRu: 'Идущий бейдевиндом',
        correct: false,
      },
      {
        textPl: 'Plynący baksztagiem',
        textRu: 'Идущий бакштагом',
        correct: true,
      },
      {
        textPl: 'Większy jacht ustępuje mniejszemu',
        textRu: 'Большая яхта уступает меньшей',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Osoba posiadąjaca patent żaglarza jachtowego może prowadzić:',
    textRu: 'Имеющий сертификат яхтенного матроса может управлять:',
    answers: [
      {
        textPl: 'Tylko jachty jendomasztowe',
        textRu: 'Только одномачтовые яхты',
        correct: false,
      },
      {
        textPl: 'Jedno i dwumasztowe',
        textRu: 'Одно- и двухмачтовые',
        correct: false,
      },
      {
        textPl: 'Ilość masztów nie ma znaczeni',
        textRu: 'Количество мачт не имеет значения',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Czy można zacumować jacht w kanale lączącym dwa jeziora?',
    textRu: 'Можно ли пришвартовать яхту в канале, соедниняющем два озера?',
    answers: [
      {
        textPl: 'Tak, ale tylko w miejscach do tego wyznaczonych',
        textRu: 'Да, но только в обозначенных местах',
        correct: true,
      },
      {
        textPl: 'Nie',
        textRu: 'Нет',
        correct: false,
      },
      {
        textPl: 'Można ale tylko w dzień',
        textRu: 'Можно, но только днём',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'W trakcie żeglugi ze względów bezpieczeństwa, należy poruszać się po burcie:',
    textRu:
      'Во время рейса, с точки зрения безопасности, перемещение по палубе следует делать с:',
    answers: [
      {
        textPl: 'Zawietrznej',
        textRu: 'Подветренной стороны',
        correct: false,
      },
      {
        textPl: 'Nawietrznej',
        textRu: 'Наветренной стороны',
        correct: true,
      },
      {
        textPl: 'Nie ma to znaczeni',
        textRu: 'Не имеет значения',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'W przypadku wypadnięcia za burtę gwałtowne poruszane się czlowieka w zimnej wodzie powoduje:',
    textRu:
      'В случае падения за борт, резкие движения человека в холодной воде вызовут:',
    answers: [
      {
        textPl: 'Skraca czas przeżycia',
        textRu: 'Сокращение времени выживания',
        correct: true,
      },
      {
        textPl: 'Dostarcza organizmowi więcej ciepla i wydluża czas przeżycia',
        textRu: 'Сохранение тепла и увеличение времени выживания',
        correct: false,
      },
      {
        textPl: 'Latwiejsze wyciagnięcie czlowieka ',
        textRu: 'Облегчение подъема человека из воды',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Czym niższa temperature wody tym szanse przeżycia chlowieka po wypadnięciu na burtę:',
    textRu:
      'Чем ниже температура воды при выпадении человека за борт, шансы выживания будут:',
    answers: [
      {
        textPl: 'Rosną',
        textRu: 'Выше',
        correct: false,
      },
      {
        textPl: 'Maleją',
        textRu: 'Ниже',
        correct: true,
      },
      {
        textPl: 'Nie ma znaczeni',
        textRu: 'Не имеет значения',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'W celu poprawienia bezpieczeństwa żeglugi, przy podmuchach wiatry o sile 60B:',
    textRu:
      'В целях обеспечения безопасного судоходства, при порывах ветра с силой 6 по шкале Бофорта следует:',
    answers: [
      {
        textPl: 'Refujemy żagle',
        textRu: 'Произвести рифление',
        correct: true,
      },
      {
        textPl: 'Płyniemy na pełnych żaglach i obserwujemy zachowanie jachtu',
        textRu: 'Идти под полными парусами и наблюдать поведение яхты',
        correct: false,
      },
      {
        textPl: 'Przechodzimy do pólwiatru',
        textRu: 'Увалиться до галфвинда',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Zworot przed rufę to:',
    textRu: 'Поворот фордевинд это:',
    answers: [
      {
        textPl:
          'Przejście rufą linii wiatru od baksztagu jednego halsu do baksztagu drugiego halsu',
        textRu:
          'Пересечение кормой линии ветра от бакштага одного галса до бакштага другого галса',
        correct: true,
      },
      {
        textPl:
          'Przejście dziobem lub rufą linii wiatru aby po zworocie wiatr wial w przeciwleglą burte',
        textRu:
          'Пересечение носом или кормой линии ветра, чтобы при повороте ветер дул с противоположного борта',
        correct: false,
      },
      {
        textPl: 'Przejście linii wiatru od baksztago do bejdewindu',
        textRu: 'Пересечение линии ветра от бакштага до фордевинда',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Na jacht zacumowany do nabrzeża działa wiatr:',
    textRu: 'На пришвартованную яхту к набережной дует ветер:',
    answers: [
      {
        textPl: 'Wlasny',
        textRu: 'Курсовой',
        correct: false,
      },
      {
        textPl: 'Pozorny',
        textRu: 'Вымпельный',
        correct: false,
      },
      {
        textPl: 'Rzeczywisty',
        textRu: 'Истинный',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Podniesienie miecza na kursach ostrych powoduje:',
    textRu: 'Поднятие шверта на острых курсах приведёт к:',
    answers: [
      {
        textPl: 'Wzrost prędkości jachtu',
        textRu: 'Увеличению скорости яхты',
        correct: false,
      },
      {
        textPl: 'Zwiększenie dryfu',
        textRu: 'Увеличению дрейфа',
        correct: true,
      },
      {
        textPl: 'Obniżenie srodka ciężkosci',
        textRu: 'Снижению центра тяжести',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Na kursie pólwiatr, zwiększenie stateczości jachtu uzyskamy w wyniku:',
    textRu: 'На курсе галфвинд, увеличение стабильности яхты будет в случае:',
    answers: [
      {
        textPl:
          'Refowania i luzowania żagli, balastowania na burcie nawietrznej',
        textRu:
          'Рифления и травления парусов, откренивания на наветренном борту',
        correct: true,
      },
      {
        textPl: 'Wybrania żagli',
        textRu: 'Выбирания парусов',
        correct: false,
      },
      {
        textPl: 'Podniesienia płetwy sterowej i miecz',
        textRu: 'Поднятие пера руля и шверта',
        correct: false,
      },
    ],
  },
  {
    textPl: 'W jakiej kolejności stawiamy żagle na jachcie typu slup?',
    textRu: 'В каком порядке поднимаются паруса на яхте типа шлюп?',
    answers: [
      {
        textPl: 'Od żagli przegnich',
        textRu: 'С передних парусов',
        correct: false,
      },
      {
        textPl: 'Od żagli tylnych',
        textRu: 'С задних парусов',
        correct: true,
      },
      {
        textPl: 'Nie ma znaczeni',
        textRu: 'Не имеет значения',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Forpik znajduje sie w części jachtu:',
    textRu: 'Форпик будет находится в следующей части яхты:',
    answers: [
      {
        textPl: 'W przedniej',
        textRu: 'В передней',
        correct: true,
      },
      {
        textPl: 'W tylnej',
        textRu: 'В задней',
        correct: false,
      },
      {
        textPl: 'W środkowej',
        textRu: 'В центре',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jak nazywa się lina lącząca jacht z nabrzeżem i biegnąca od dziobu w kierunku rufy?',
    textRu:
      'Как называется верёвка(швартов), которая соединяет яхту с набережной и идёт от носа к корме?',
    answers: [
      {
        textPl: 'Brest',
        textRu: 'Прижимной',
        correct: false,
      },
      {
        textPl: 'Cuma',
        textRu: 'Продольный',
        correct: false,
      },
      {
        textPl: 'Szpring',
        textRu: 'Шпринг',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Jak nazywa się wierzcholek masztu?',
    textRu: 'Как называется верх мачты?',
    answers: [
      {
        textPl: 'Nok',
        textRu: 'Нок',
        correct: false,
      },
      {
        textPl: 'Stopa',
        textRu: 'Стопа',
        correct: false,
      },
      {
        textPl: 'Top',
        textRu: 'Топ',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Co to jest dalba?',
    textRu: 'Что такое рейдовый пал?',
    answers: [
      {
        textPl: 'Drewniany lub betonowy slup stojący na ladzie',
        textRu: 'Деревянный либо бетонный столб, стоящий на земле',
        correct: false,
      },
      {
        textPl: 'Drewniany lub betonowy pal wbity w dno',
        textRu: 'Деревянная либо бетонная свая, вбитая в дно',
        correct: true,
      },
      {
        textPl: 'Okrągła boja zakotowiczona do dn',
        textRu: 'Круглый буй, привязанный ко дну',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Który z poniższych znaków stawiany jest wyjściu z kanalu?',
    textRu: 'Какой из расположенных знаков ниже ставится при выходе с канала?',
    image: 'assets/images/74.png',
    answers: [
      {
        textPl: 'Tylko typu A',
        textRu: 'Только тип А',
        correct: false,
      },
      {
        textPl: 'Tylko typu B',
        textRu: 'Только тип В',
        correct: false,
      },
      {
        textPl: 'A z prawej strony wyjścia, B z lewej strony wyjści',
        textRu: 'А с правой стороны выхода, В с левой стороны выхода',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Jaki jest numer telefonu alarmowego nad wodą Wodnego Ochotniczego Pogotowia Ratunkowego na szlaku Wielkich Jeziora Mazruskich i jeziorze Jeziorak',
    textRu:
      'Какой аварийный номер телефона у Водной Добровольной Спасательной Службы на Мазурских озёрах и озера Езёрак?',
    answers: [
      {
        textPl: '601 100 100 i 984 szlak WJM i j. Jeziorak',
        textRu: '601 100 100',
        correct: true,
      },
      {
        textPl: '600 100 100 i 985 szlak WJM i j. Jeziorak',
        textRu: '600 100 100',
        correct: false,
      },
      {
        textPl: '601 100 300 i 994 szlak WJM i j. Jeziorak',
        textRu: '601 100 300',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jachty mieczowe, posiadające komory wypornościowe zaliczamy do grupy łodzi:',
    textRu: 'Швертботы с камерами плавучести входят в группу лодок:',
    answers: [
      {
        textPl: 'Wywracalnych, ale niezatapialnych,',
        textRu: 'Опрокидывающихся, но непотопляемых',
        correct: true,
      },
      {
        textPl: 'Wywracalnych i zatapialnych,',
        textRu: 'Опрокидывающихся и погружающихся',
        correct: false,
      },
      {
        textPl: 'Zatapialnych, ale niewywracalnych',
        textRu: 'Погружающихся, но не опрокидываемых',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Trimaran jest jachtem, który zbudowany jest z:',
    textRu: 'Тримаран – это яхта, состоящая из:',
    answers: [
      {
        textPl: 'Dwóch kadłubów,',
        textRu: 'Двух корпусов',
        correct: false,
      },
      {
        textPl: 'Trzech kadłubów,',
        textRu: 'Трех корпусов',
        correct: true,
      },
      {
        textPl: 'Jednego kadłub',
        textRu: 'Одного корпуса',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Co to jest bakista?',
    textRu: 'Что такое бакиста?',
    answers: [
      {
        textPl: 'Jest to miejsce w którym przechowujemy osprzęt,',
        textRu: 'Место для хранения вещей',
        correct: true,
      },
      {
        textPl: 'Jest to dziobowy przedział sypialny,',
        textRu: 'Спальный отсек в носу лодки',
        correct: false,
      },
      {
        textPl: 'Jest to miejsce, w którym zbierana jest woda deszczowa',
        textRu: 'Место сбора дождевой воды',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Zęza to:',
    textRu: 'Трюм это:',
    answers: [
      {
        textPl: 'Pomieszczenie dziobowe,',
        textRu: 'Носовая каюта',
        correct: false,
      },
      {
        textPl: 'Podłoga na jachcie,',
        textRu: 'Пол на яхте',
        correct: false,
      },
      {
        textPl: 'Przestrzeń, która znajduje się pod podłogą wewnątrz jachtu',
        textRu: 'Пространство под полом на яхте',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Stępka jest to:',
    textRu: 'Киль это:',
    answers: [
      {
        textPl: 'Część masztu,',
        textRu: 'Часть мачты',
        correct: false,
      },
      {
        textPl: 'Główny element konstrukcji wzdłużnej jachtu,',
        textRu: 'Главный элемент продольной конструкции яхты',
        correct: true,
      },
      {
        textPl: 'Trzecia licząc od dołu reja na fokmaszcie',
        textRu: 'Третья снизу по счёту рея на фок-мачте',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Skrzynia mieczowa jest to:',
    textRu: 'Швертовый колодец это:',
    answers: [
      {
        textPl: 'Element łączący pokładnik ze wzdłużnikiem,',
        textRu: 'Элемент, соединяющий балку с фермой',
        correct: false,
      },
      {
        textPl: 'Zwyczajowe miejsce przechowywania broni białej,',
        textRu: 'Обычное место хранения оружия ближнего боя',
        correct: false,
      },
      {
        textPl: 'Element konstrukcyjny, w którym pracuje miecz',
        textRu: 'Структурный элемент, в котором работает шверт',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Głównym poprzecznym elementem konstrukcyjnym kadłuba jest:',
    textRu: 'Основным поперечным конструктивным элементом корпуса является:',
    answers: [
      {
        textPl: 'Wręgi,',
        textRu: 'Шпангоут',
        correct: true,
      },
      {
        textPl: 'Stewa,',
        textRu: 'Штевень',
        correct: false,
      },
      {
        textPl: 'Pawęż',
        textRu: 'Транец',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Końce bomu to:',
    textRu: 'Края гика это:',
    answers: [
      {
        textPl: 'Pięta i top,',
        textRu: 'Пятка и топ',
        correct: false,
      },
      {
        textPl: 'Nok i pięta,',
        textRu: 'Нок и пятка',
        correct: true,
      },
      {
        textPl: 'Pik i gard',
        textRu: 'Пик и гарда',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Jaki rodzaj miecz obrazuje rysunek obok?',
    textRu: 'Какой тип шверта показан на рисунке?  ',
    image: '/assets/images/84.png',
    answers: [
      {
        textPl: 'Balastowy,',
        textRu: 'Балластный',
        correct: false,
      },
      {
        textPl: 'Szybrowy,',
        textRu: 'Осевой',
        correct: true,
      },
      {
        textPl: 'Obrotowy',
        textRu: 'Вращающийся',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Lina olinowania stałego, która biegnie od topu masztu do dziobu, to?',
    textRu:
      'Элемент стоячего такелажа, который идёт от топа мачты до носа это:',
    answers: [
      {
        textPl: 'Wanta,',
        textRu: 'Ванта',
        correct: false,
      },
      {
        textPl: 'Achtersztag,',
        textRu: 'Ахтерштаг',
        correct: false,
      },
      {
        textPl: 'Sztag',
        textRu: 'Штаг',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Lina wszyta w lik żagla, która zapobiega rozciąganiu się tkaniny i służy jako pomoc przy mocowaniu żagla, to:',
    textRu:
      'Верёвка, вшитая  в лик паруса, которая предотвращает растяжение ткани и служит вспомогательным средством при креплении паруса:',
    answers: [
      {
        textPl: 'Reflina,',
        textRu: 'Риф-шкентель',
        correct: false,
      },
      {
        textPl: 'Halslina,',
        textRu: 'Галс-линь',
        correct: false,
      },
      {
        textPl: 'Liklin',
        textRu: 'Ликтрос',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Elementem olinowania stałego są?',
    textRu: 'Элементами стоячего такелажа являются:',
    answers: [
      {
        textPl: 'Sztag i topenanta,',
        textRu: 'Штаг и топенант',
        correct: false,
      },
      {
        textPl: 'Sztag i stenwanta,',
        textRu: 'Штаг и стень-ванта',
        correct: true,
      },
      {
        textPl: 'Stenwanta i szot fok',
        textRu: 'Стень-ванта и шкот стакселя',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Sposobem mocowania żagla do masztu nie jest?',
    textRu: 'Способом крепления паруса не является:',
    answers: [
      {
        textPl: 'Likszpara,',
        textRu: 'Лик-паз',
        correct: false,
      },
      {
        textPl: 'Kluza,',
        textRu: 'Клюз',
        correct: true,
      },
      {
        textPl: 'Pełzacz',
        textRu: 'Слайдер',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jak nazywa się urządzenie do podnoszenia i opuszczania silnika zaburtowego?',
    textRu:
      'Как называется устройство для поднятия и опускания забортного двигателя?',
    answers: [
      {
        textPl: 'Pantograf,',
        textRu: 'Пантограф',
        correct: true,
      },
      {
        textPl: 'Podnośnik,',
        textRu: 'Подъемник',
        correct: false,
      },
      {
        textPl: 'Marlink',
        textRu: 'Марлинь',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Elementem służącym do łączenia takielunku jest:',
    textRu: 'Элемент, использующийся для соединения такелажа это:',
    answers: [
      {
        textPl: 'Kipa,',
        textRu: 'Клюз',
        correct: false,
      },
      {
        textPl: 'Kausza,',
        textRu: 'Коуш',
        correct: false,
      },
      {
        textPl: 'Szekl',
        textRu: 'Скоба',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Jakiego rodzaju paliwo jest używane w czterosuwowych silnikach przyczepnych?',
    textRu: 'Какое топливо используется в четырехтактных лодочных моторах?',
    answers: [
      {
        textPl: 'Czysta benzyna,',
        textRu: 'Чистый бензин',
        correct: true,
      },
      {
        textPl: 'Benzyna zmieszana z olejem silnikowym,',
        textRu: 'Бензин, смешанный с моторным маслом',
        correct: false,
      },
      {
        textPl: 'Olej napędowy',
        textRu: 'Дизельное топливо',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Prawą stroną szlaku żeglownego na rzece jest:',
    textRu: 'Правая сторона судоходного пути по реке это:',
    answers: [
      {
        textPl:
          'Ta, która znajduje się na prawo od statku płynącego w dół rzeki (od źródła do ujścia),',
        textRu:
          'Тот, что справа от нижнего по течению судна (от истока до устья)',
        correct: true,
      },
      {
        textPl:
          'Ta, która znajduje się na prawo od statku płynącego w górę rzeki (od ujścia do źródła),',
        textRu:
          'Тот, что справа от корабля, идущего вверх по течению (от устья до истока)',
        correct: false,
      },
      {
        textPl: 'Ta, która znajduje się północnym lub wschodnim brzegu',
        textRu: 'Тот, что на северном или восточном берегу',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Zielona boja w kształcie stożka na śródlądziu oznacza:',
    textRu: 'Зелёный буй с конусом во внутренних водах означает:',
    answers: [
      {
        textPl: 'Lewą granicę szlaku żeglownego,',
        textRu: 'Левую границу фарватера',
        correct: true,
      },
      {
        textPl: 'Prawą granicę szlaku żeglownego,',
        textRu: 'Правую границу фарватера',
        correct: false,
      },
      {
        textPl: 'Rozgałęzienie toru żeglownego',
        textRu: 'Разветвление фарватера',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czerwona boja w kształcie walca oznacza:',
    textRu: 'Красный буй в форме цилиндра означает:',
    answers: [
      {
        textPl: 'Prawy brzeg,',
        textRu: 'Правый берег',
        correct: false,
      },
      {
        textPl: 'Zakaz wejścia na szlak żeglowny,',
        textRu: 'Запрет выхода на судоходный путь',
        correct: false,
      },
      {
        textPl: 'Prawą granicę szlaku żeglownego',
        textRu: 'Правая граница фарватера',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Co to jest jaz?',
    textRu: 'Плотина это:',
    answers: [
      {
        textPl:
          'Jest to budowla hydrotechniczna służąca do ochrony przed falami,',
        textRu:
          'Это гидротехническое сооружение, используемое для защиты от волн',
        correct: false,
      },
      {
        textPl:
          'Jest to budowla hydrotechniczna umożliwiająca jachtom uzupełnianie wody,',
        textRu:
          'Это гидротехническое сооружение, позволяющее яхтам пополнять запасы воды',
        correct: false,
      },
      {
        textPl:
          'Jest to budowla hydrotechniczna, umożliwiająca długotrwałe spiętrzenie wody',
        textRu:
          'Это гидротехническое сооружение, обеспечивающее длительное накопление воды',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Budowla hydrotechniczna umożliwiająca pokonanie różnicy poziomu wody między dwoma zbiornikami wody to:',
    textRu:
      'Гидротехническим сооружением, позволяющим преодолевать перепад уровня воды между двумя водохранилищами, является:',
    answers: [
      {
        textPl: 'Śluza',
        textRu: 'Шлюз',
        correct: true,
      },
      {
        textPl: 'Jaz ',
        textRu: 'Плотина',
        correct: false,
      },
      {
        textPl: 'Spad',
        textRu: 'Спуск',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Na rysunku przedstawiony jest znak:',
    textRu: 'На рисунке представлен знак:',
    image: '/assets/images/97.png',
    answers: [
      {
        textPl: 'Wschodni znak kardynalny',
        textRu: 'Восточный кардинальный знак',
        correct: false,
      },
      {
        textPl: 'Zachodni znak kardynalny',
        textRu: 'Западный кардинальный знак',
        correct: true,
      },
      {
        textPl: 'Rozgałęzienie szlaku żeglownego',
        textRu: 'Разветвление судоходного пути',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Znak na rysunku mówi nam, że niebezpieczeństwo znajduje się na:',
    textRu: 'Знак на рисунке говорит о том, что опасность находится:',
    image: '/assets/images/98.png',
    answers: [
      {
        textPl: 'Wschód od znaku',
        textRu: 'К востоку от знака',
        correct: true,
      },
      {
        textPl: 'Zachód od znaku',
        textRu: 'К западу от знака',
        correct: false,
      },
      {
        textPl: 'Północ od znaku',
        textRu: 'К северу от знака',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Widząc północny znak kardynalny, należy go opłynąć od?',
    textRu: 'Увидев северный кардинальный знак, следует обогнуть его:',
    answers: [
      {
        textPl: 'Od południa,',
        textRu: 'С юга',
        correct: false,
      },
      {
        textPl: 'Od północy,',
        textRu: 'С севера',
        correct: true,
      },
      {
        textPl: 'Od zachodu',
        textRu: 'С запада',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Na wodach morskich kierunek toru wodnego oznaczony jest:',
    textRu: 'На морской акватории направление фарватера обозначается:',
    answers: [
      {
        textPl: 'Od strony portu do morza,',
        textRu: 'Из порта в море',
        correct: false,
      },
      {
        textPl: 'Od strony morza do portu,',
        textRu: 'От моря до порта',
        correct: true,
      },
      {
        textPl: 'Tak jak na wodach śródlądowych',
        textRu: 'Как во внутренних водах',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Podczas śluzowania nie wolno:',
    textRu: 'Во время шлюзования нельзя:',
    answers: [
      {
        textPl: 'Odpychać się od ściany śluzy za pomocą rąk lub nóg,',
        textRu: 'Отталкиваться от стены шлюза руками или ногами',
        correct: true,
      },
      {
        textPl: 'Cumować na biegowo,',
        textRu: 'Заложить швартовую серьгу',
        correct: false,
      },
      {
        textPl: 'Cumować do innego jachtu',
        textRu: 'Швартоваться к другой яхте',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Hamowanie żaglami polega na:',
    textRu: 'Торможение паруса производится:',
    answers: [
      {
        textPl: 'Wyluzowaniu żagli,',
        textRu: 'Травлением паруса',
        correct: false,
      },
      {
        textPl: 'Wypchnięciu ich na wiatr,',
        textRu: 'Перекидыванием их на ветер',
        correct: true,
      },
      {
        textPl: 'Wybraniu ich maksymalnie',
        textRu: 'Полным выбором паруса',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Co stanie się gdy wrzucimy bieg wstecz przy śrubie prawoskrętnej trzymając ster „zero”:',
    textRu:
      'Что будет, если включить передачу заднего хода с правым винтом, удерживающим «нулевой» руль:',
    answers: [
      {
        textPl: 'Jacht ruszy do tyłu, a rufa zostanie odrzucona w prawo,',
        textRu:
          'Лодка будет двигаться назад, а корма будет отброшена на правый борт',
        correct: false,
      },
      {
        textPl: 'Jacht ruszy prosto do tyłu,',
        textRu: 'Лодка пойдет прямо за кормой',
        correct: false,
      },
      {
        textPl: 'Jacht ruszy do tyłu, a rufa zostanie odrzucona w lewo',
        textRu: 'Лодка будет двигаться назад, а корма будет отброшена влево',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Szpring dziobowy na jachcie jest poprowadzony od:',
    textRu: 'Носовой шпринг на яхте проводится от:',
    answers: [
      {
        textPl: 'Dziobu jachtu do polera przed jachtem,',
        textRu: 'От носа яхты на кнехт возле носа яхты',
        correct: false,
      },
      {
        textPl: 'Dziobu jachtu do polera przy rufie jachtu,',
        textRu: 'От носа яхты на кнехт позади кормы яхты',
        correct: true,
      },
      {
        textPl: 'Rufy jachtu do polera przy dziobie jachtu',
        textRu: 'От кормы яхты до кнехта возле носа яхт',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Aby zrównoważyć silną nawietrzność jachtu podczas szkwału, należy:',
    textRu:
      'Чтобы уравновесить сильную наветренность лодки при порыве ветра, нужно:',
    answers: [
      {
        textPl: 'Wybrać tylny żagiel,',
        textRu: 'Выбрать задний парус',
        correct: true,
      },
      {
        textPl: 'Zrzucić przednie żagle,',
        textRu: 'Скрутить передний парус',
        correct: false,
      },
      {
        textPl: 'Poluzować tylny żagiel',
        textRu: 'Потравить задний парус',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Wyjaśnij pojęcie zawietrzności jachtu:',
    textRu: 'Объясните понятие подветренности яхты:',
    answers: [
      {
        textPl: 'Jest to tendencja jachtu do samoistnego ostrzenia,',
        textRu: 'Это склонность лодки приводить себя самостоятельно',
        correct: false,
      },
      {
        textPl: 'Jest to tendencja jachtu do samoistnego odpadania,',
        textRu: 'Это склонность лодки уваливать себя самостоятельно',
        correct: true,
      },
      {
        textPl: 'Jest to tendencja jachtu do samoistnego pływania z wiatrem',
        textRu: 'Это склонность яхты плыть по ветру самостоятельно',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Co to znaczy, że jacht płynie prawym halsem?',
    textRu: 'Что означает, что яхта идёт правым галсом?',
    answers: [
      {
        textPl:
          'Lewa burta jest burtą nawietrzną, żagle układają się na prawej burcie,',
        textRu:
          'Левый борт - наветренная сторона, паруса расположены на правом борту',
        correct: false,
      },
      {
        textPl: 'Jacht płynie w prawą stronę,',
        textRu: 'Яхта идёт вправо',
        correct: false,
      },
      {
        textPl:
          'Prawa burta jest burtą nawietrzną, żagle układają się na lewej burcie',
        textRu:
          'Правый борт - наветренная сторона, паруса расположены на левом борту',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Co trzeba zrobić, gdy jacht nadmiernie się przechyla?',
    textRu: 'Что делать, если яхту сильно кренит?',
    answers: [
      {
        textPl:
          'Przenieść balast na burtę zawietrzną, wybrać maksymalnie żagle, odpaść od wiatru,',
        textRu:
          'Переместить вес на подветренную сторону, максимально поднять паруса, увалиться от ветра',
        correct: false,
      },
      {
        textPl:
          'Przenieść balast na burtę nawietrzną, luzować żagle, ostrzyć, refować żagle,',
        textRu:
          'Переместить вес на наветренную сторону, потравить паруса, привестись, зарифовать паруса',
        correct: true,
      },
      {
        textPl: 'Przenieść balast do tyłu, ustawić się bokiem do wiatru',
        textRu: 'Переместить вес назад, встать боком к ветру',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Siła ciągu powstająca na żaglu zwiększa się w przypadku:',
    textRu: 'Сила тяги паруса увеличивается при:',
    answers: [
      {
        textPl: 'Zwiększenia przechyłu jachtu,',
        textRu: 'Увеличении крена яхты',
        correct: false,
      },
      {
        textPl: 'Zmniejszenia przechyłu przez balastowanie jachtu,',
        textRu: 'Уменьшению крена с помощью откренивая',
        correct: true,
      },
      {
        textPl: 'Wyluzowania żagli do łopotu',
        textRu: 'Ослабления парусов до фалания',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Podniesienie płetwy sterowej o 45° spowoduje:',
    textRu: 'Поднятие пера руля на 45° приведет к',
    answers: [
      {
        textPl: 'Polepszenie sterowności,',
        textRu: 'Улучшению управляемости',
        correct: false,
      },
      {
        textPl: 'Pogorszenie sterowności,',
        textRu: 'Ухудшению управляемости',
        correct: true,
      },
      {
        textPl: 'Zmniejszenie dryfu',
        textRu: 'Уменьшению дрейфа',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Wiatr zachodni wieje:',
    textRu: 'Западный ветер дует:',
    answers: [
      {
        textPl: 'Z zachodu,',
        textRu: 'С запада',
        correct: true,
      },
      {
        textPl: 'Na zachód,',
        textRu: 'На запад',
        correct: false,
      },
      {
        textPl: 'Zachodzie Słońc',
        textRu: 'На закате',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Bryza dzienna na jeziorze wieje w kierunku:',
    textRu: 'Дневной бриз на озере дует в сторону:',
    answers: [
      {
        textPl: 'Od jeziora do jego brzegu,',
        textRu: 'От озера до его берега',
        correct: true,
      },
      {
        textPl: 'Od brzegów jeziora do jego środka,',
        textRu: 'От берегов озера к его центру',
        correct: false,
      },
      {
        textPl: 'Zawsze ze wschodu na zachód',
        textRu: 'Всегда с востока на запад',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Długotrwałe opady o niezbyt silnym natężeniu zwiastują chmury:',
    textRu:
      'Продолжительные дожди не очень сильной интенсивности предвещают облака:',
    answers: [
      {
        textPl: 'Cirrus i cirrostratus,',
        textRu: 'Cirrus и cirrostratus (перистые и перисто-кучевые)',
        correct: false,
      },
      {
        textPl: 'Cumulus i cumulonimbus,',
        textRu: 'Cumulus и cumulonimbus (кучевые и кучево-дождевые)',
        correct: false,
      },
      {
        textPl: 'Stratus i nimbostratus',
        textRu: 'Stratus и nimbostratus (слоистые и слоисто-дождевые)',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Jednostką ciśnienia atmosferycznego jest:',
    textRu: 'Единицей атмосферного давления является:',
    answers: [
      {
        textPl: 'Lux,',
        textRu: 'Люкс',
        correct: false,
      },
      {
        textPl: 'Hektopaskal,',
        textRu: 'Гектопаскаль',
        correct: true,
      },
      {
        textPl: 'M2',
        textRu: 'М2',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Zakres skali Beauforta to:',
    textRu: 'Диапазон шкалы Бофорта составляет:',
    answers: [
      {
        textPl: '0°- 9 °,',
        textRu: '0°- 9°',
        correct: false,
      },
      {
        textPl: '0°- 10°,',
        textRu: '0°- 10°',
        correct: false,
      },
      {
        textPl: '0°- 12 °',
        textRu: '0°- 12°',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Jak zachowuje się wiatr wiejący znad wysokiego brzegu?',
    textRu: 'Как ведет себя ветер, дующий с высокого берега?',
    answers: [
      {
        textPl:
          'Zmienia kierunek na przeciwny do wiatru rzeczywistego – na dopychający do brzegu,',
        textRu:
          'Меняет направление на противоположное истинному ветру - на оттеснение к берегу',
        correct: true,
      },
      {
        textPl: 'Zmienia kierunek na równoległy do brzegu,',
        textRu: 'Меняет направление на параллельное берегу',
        correct: false,
      },
      {
        textPl: 'Zwiększa tylko siłę',
        textRu: 'Только увеличивает силу',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Bezpieczniejsze kotwicowisko na jeziorze znajduje się:',
    textRu: 'Более безопасная якорная стоянка на озере находится:',
    answers: [
      {
        textPl: 'Po stronie zawietrznej wyspy,',
        textRu: 'На подветренной стороне острова',
        correct: true,
      },
      {
        textPl: 'Po stronie nawietrznej wyspy,',
        textRu: 'На наветренной стороне острова',
        correct: false,
      },
      {
        textPl: 'Obie strony są niebezpieczne',
        textRu: 'Обе стороны не безопасны',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Prędkość wiatru zależy od:',
    textRu: 'Скорость ветра зависит от:',
    answers: [
      {
        textPl: 'Różnicy ciśnień między dwoma punktami,',
        textRu: 'Разницы давлений между двумя точками',
        correct: true,
      },
      {
        textPl: 'Wielkości jachtu,',
        textRu: 'Размера яхты',
        correct: false,
      },
      {
        textPl: 'Wielkości barometru,',
        textRu: 'Размера барометра',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Szkwał jest to:',
    textRu: 'Шквал – это:',
    answers: [
      {
        textPl: 'Część dziobowa jachtu balastowego,',
        textRu: 'Носовая часть балластной яхты',
        correct: false,
      },
      {
        textPl: 'Nagły silny podmuch,',
        textRu: 'Внезапный сильный порыв ветра',
        correct: true,
      },
      {
        textPl: 'Wiatr występujący w strefie międzyzwrotnikowej',
        textRu: 'Тропический ветер',
        correct: false,
      },
    ],
  },
  {
    textPl: 'W obszarze wyżu wiatry wieją:',
    textRu: 'В зоне повышенного давления дуют ветры:',
    answers: [
      {
        textPl: 'Od środka układu na zewnątrz,',
        textRu: 'Из центра системы наружу',
        correct: true,
      },
      {
        textPl: 'Do środka układu,',
        textRu: 'К центру системы',
        correct: false,
      },
      {
        textPl:
          'Od środka układu na półkuli północnej, a do środka na półkuli południowej',
        textRu:
          'От центра системы в северном полушарии и до центра в южном полушарии',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jeden długi dźwięk nadawany przez statek na drodze śródlądowej oznacza:',
    textRu:
      'Один длинный звуковой сигнал с судна на внутреннем водном пути означает:',
    answers: [
      {
        textPl: 'Uwaga,',
        textRu: 'Обратить внимание',
        correct: true,
      },
      {
        textPl: 'Moje maszyny pracują wstecz,',
        textRu: 'Двигатель работает реверсом',
        correct: false,
      },
      {
        textPl: 'Nie mogę manewrować',
        textRu: 'Не могу маневрировать',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Powtarzające się długie dźwięki oznaczają:',
    textRu: 'Повторяющиеся длинные гудки означают:',
    answers: [
      {
        textPl: 'Wzywam pomocy',
        textRu: 'Зову на помощь',
        correct: true,
      },
      {
        textPl: 'Zmieniam mój kurs w lewo',
        textRu: 'Меняю курс влево',
        correct: false,
      },
      {
        textPl: 'Mam zamiar zawrócić w prawo',
        textRu: 'Собираюсь повернуть направо',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czarny stożek wierzchołkiem w dół wywieszony na statku oznacza:',
    textRu: 'Перевернутый черный конус, свисающий с штага означает:',
    answers: [
      {
        textPl: 'Pojedynczy mały statek w ruchu,',
        textRu: 'Один небольшой корабль в движении',
        correct: false,
      },
      {
        textPl: 'Statek płynący jednocześnie na żaglach i na silniku,',
        textRu: 'Судно, идущее под парусами и двигателем одновременно',
        correct: true,
      },
      {
        textPl: 'Statek na kotwicy',
        textRu: 'Судно на якоре',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Czarna kula wywieszona na dziobie jachtu oznacza:',
    textRu: 'Черный шар, свисающий с носа яхты, означает:',
    answers: [
      {
        textPl: 'Statek płynący jednocześnie na żaglach i na silniku,',
        textRu: 'Судно, идущее под парусами и двигателем одновременно',
        correct: false,
      },
      {
        textPl: 'Pojedynczy mały statek w ruchu,',
        textRu: 'Один небольшой корабль в движении',
        correct: false,
      },
      {
        textPl: 'Statek na kotwicy',
        textRu: 'Судно на якоре',
        correct: true,
      },
    ],
  },
  {
    textPl: 'W jaki sposób postawisz jacht w dryf?',
    textRu: 'Как поставить яхту в дрейф?',
    answers: [
      {
        textPl:
          'W kursie bajdewind wykonasz zwrot przez sztag bez luzowania foka,',
        textRu:
          'На курсе бейдевинд сделать поворот оверштаг без переброса переднего паруса',
        correct: true,
      },
      {
        textPl:
          'Z kursu baksztag zrobisz zwrot przez sztag i umocujesz ster do burty,',
        textRu:
          'На курсе бакштаг сделать поворот оверштаг и прикрепить руль к борту',
        correct: false,
      },
      {
        textPl: 'Zrzucisz żagle, przymocujesz ster do prawej burty',
        textRu: 'Спустить паруса и вывернуть штурвал на правый борт',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jakie czynności należy wykonać przed wyrzuceniem kotwicy z dziobu:',
    textRu: 'Что делать перед тем, как сбросить якорь с носа:',
    answers: [
      {
        textPl: 'Dla bezpieczeństwa zrzucić foka i przygotować linę kotwiczną,',
        textRu:
          'В целях безопасности опустить передний парус и подготовить якорный канат',
        correct: false,
      },
      {
        textPl:
          'Płynąć w linii wiatru i poczekać aż jacht zatrzyma się lub zacznie się cofać,',
        textRu:
          'Идти по ветру и ждать, пока лодка остановится или начнет двигаться задним ходом',
        correct: false,
      },
      {
        textPl: 'Obie odpowiedzi są prawidłowe',
        textRu: 'Оба варианта верные',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Którą burta podejmujemy człowieka z wody na jachcie mieczowym?',
    textRu: 'С какого борта нужно поднимать человека за бортом на швертботе?',
    answers: [
      {
        textPl: 'Zawietrzną,',
        textRu: 'Подветренной',
        correct: false,
      },
      {
        textPl: 'Nawietrzną,',
        textRu: 'Наветренной',
        correct: true,
      },
      {
        textPl: 'Nie ma to znaczeni',
        textRu: 'Не имеет значения',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Halsowanie jest to:',
    textRu: 'Лавировка – это:',
    answers: [
      {
        textPl: 'Wyciąganie jachtów z hali,',
        textRu: 'Вытягивание яхты с стоянки',
        correct: false,
      },
      {
        textPl:
          'Przemieszczanie się pod wiatr, na zmianę prawym i lewym bajdewindem,',
        textRu:
          'Движение против ветра, попеременно с правым и левым бейдевиндом',
        correct: true,
      },
      {
        textPl: 'Zmniejszanie powierzchni żagli',
        textRu: 'Уменьшение площади паруса',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Stawianie i zrzucanie żagli należy wykonywać:',
    textRu: 'Подъем и спуск парусов следует производить:',
    answers: [
      {
        textPl: 'Pod wiatr,',
        textRu: 'Против ветра',
        correct: true,
      },
      {
        textPl: 'W dowolnym kursie,',
        textRu: 'На любом курсе',
        correct: false,
      },
      {
        textPl: 'Tylko w kursach pełnych',
        textRu: 'Только на полных курсах',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Jaki kąt ma światło burtowe?',
    textRu: 'Какой сектор освещения у бортового огня судна?',
    answers: [
      {
        textPl: '112,5 °',
        textRu: '112,5°',
        correct: true,
      },
      {
        textPl: '135 °',
        textRu: '135°',
        correct: false,
      },
      {
        textPl: '225 °',
        textRu: '225°',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Na brzegu widnieje taki znak. Co on oznacza:',
    textRu: 'На берегу виден такой знак. Что он означает?',
    image: '/assets/images/131.png',
    answers: [
      {
        textPl:
          'Uwaga most o wysokości przęsła nad wodą podanej na znaku (12 m)',
        textRu:
          'Обратить внимание на мост с высотой пролета над водой, указанной на знаке (12 м)',
        correct: false,
      },
      {
        textPl:
          'Zakaz ruchu statków o mocy silnika większej niż podana na znaku (12KM)',
        textRu:
          'Запрещение движения судов с мощностью двигателя большей, чем указано на знаке (12 л.с.)',
        correct: false,
      },
      {
        textPl: 'Nakaz nie przekraczania prędkości podanej na znaku (12km/h)',
        textRu: 'Приказ не превышать скорость, указанную на знаке (12 км/ч)',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Na brzegu zaobserwowano znak jak na rysunku. Jak należy się zachować?',
    textRu: 'На берегу замечен следующий знак. Как нужно себя вести?',
    image: '/assets/images/132.png',
    answers: [
      {
        textPl:
          'Zachować ostrożność, mogą przepływać szybkie łodzie i skutery wodne',
        textRu:
          'Будьте осторожны, могут пройти быстроходные катера и водные мотоциклы',
        correct: false,
      },
      {
        textPl: 'Zmniejszyć szybkość, aby nie wytwarzać fali',
        textRu: 'Уменьшить скорость, чтобы не создавать волну',
        correct: true,
      },
      {
        textPl: 'Zachować ostrożność, nierówna linia brzegowa, spłyceni',
        textRu: 'Будьте осторожны, неровная береговая линия, мелководье',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Zaobserwowano znak przedstawiony na rysunku. Co on oznacza?',
    textRu: 'Замечен следующий знак. Что он означает?',
    image: '/assets/images/133.png',
    answers: [
      {
        textPl: 'Nakaz zachowania szczególnej ostrożności',
        textRu: 'Замечание проявить крайнюю осторожность',
        correct: true,
      },
      {
        textPl: 'Zakaz ruchu statków żaglowych',
        textRu: 'Запрет на движение парусных судов',
        correct: false,
      },
      {
        textPl: 'Nakaz nadania sygnału dźwiękowego',
        textRu: 'Замечание для подачи звукового сигнала',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Co oznacza ten znak?',
    textRu: 'Что означает этот знак?',
    image: '/assets/images/134.png',
    answers: [
      {
        textPl: 'Nakaz żeglugi tylko z jednym żaglem',
        textRu: 'Приказ плыть только с одним парусом',
        correct: false,
      },
      {
        textPl: 'Pierwszeństwo przejścia dla jachtów żaglowych',
        textRu: 'Приоритет прохода парусных яхт',
        correct: false,
      },
      {
        textPl: 'Zakaz żeglugi pod żaglami',
        textRu: 'Запрет движения парусных судов',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Zaobserwowała znak oznacza:',
    textRu: 'Наблюдаемый знак обозначает:',
    image: '/assets/images/135.png',
    answers: [
      {
        textPl: 'Uwaga, przeszkoda podwodna',
        textRu: 'Внимание, подводное препятствие',
        correct: false,
      },
      {
        textPl: 'Nakaz nadania sygnału dźwiękowego',
        textRu: 'Приказ подать звуковой сигнал',
        correct: true,
      },
      {
        textPl: 'Zakaz zatrzymywania się',
        textRu: 'Запрет остановки',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jacht o długości 8 m i wysokości masztu 14 m wpływa do kanału. Na brzegu ustawione są znaki. Co należy zrobić?',
    textRu:
      'Яхта длиной 8 м и высотой мачты 14 м входит в канал. На берегу есть указатели. Как следует поступить?',
    image: '/assets/images/136.png',
    answers: [
      {
        textPl: 'Nie ma przeszkód, płynąć dalej',
        textRu: 'Препятствий нет, продолжить движение',
        correct: false,
      },
      {
        textPl: 'Położyć maszt i płynąć dalej',
        textRu: 'Опустить мачту и идти дальше',
        correct: true,
      },
      {
        textPl: 'Nie da się przejść jacht jest za długi',
        textRu: 'Невозможно пройти, яхта слишком длинная',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Z jachtu o wysokości masztu 8 m, szerokości 3 m i zanurzeniu 1 m, zaobserwowano przy wejściu do kanału tablice jak na rysunku. Jak należy postąpić?',
    textRu:
      'С яхты с высотой мачты 8 м, шириной 3 м и осадкой 1 м у входа в канал был замечен такой знак, как показано на рисунке. Как поступить?',
    image: '/assets/images/137.png',
    answers: [
      {
        textPl: 'Nie da się przejść, należy zawrócić',
        textRu: 'Пройти невозможно, надо повернуть назад',
        correct: false,
      },
      {
        textPl: 'Można przejść po złożeniu masztu',
        textRu: 'Вы можете идти после складывания мачты',
        correct: true,
      },
      {
        textPl: 'Można przejść nie ma przeszkód',
        textRu: 'Вы можете идти без препятствий',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Według zasad bhp trzymanie rąk i nóg poza burtą jachtu jest:',
    textRu:
      'Согласно правилам безопасности держать руки и ноги за бортом яхты:',
    answers: [
      {
        textPl: 'Nie mówią nic na ten temat',
        textRu: 'Об этом ничего не говорят',
        correct: false,
      },
      {
        textPl: 'Zdecydowanie zabronione',
        textRu: 'Категорически запрещено',
        correct: true,
      },
      {
        textPl: 'Dozwolone, ale tylko podczas żeglugi',
        textRu: 'Разрешено, но только во время плавания',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Osoba posiadająca stopień żeglarza jachtowego jest uprawniona do prowadzenia na wodach śródlądowych jachtów o powierzchni żagli:',
    textRu:
      'Лицо, имеющее сертификат яхтенного матроса, имеет право управлять яхтами во внутренних водах со следующей площадью парусности:',
    answers: [
      {
        textPl: 'Do 15 m2',
        textRu: 'До 15 м2',
        correct: false,
      },
      {
        textPl: 'Do 40 m2',
        textRu: 'До 40 м2',
        correct: false,
      },
      {
        textPl: 'Bez ograniczeń',
        textRu: 'Без ограничений',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Przy śluzie pierwszeństwo mają statki:',
    textRu: 'У шлюза приоритет прохода имеют следующие суда:',
    answers: [
      {
        textPl: 'Wchodzące do śluzy',
        textRu: 'Входящие в шлюз',
        correct: false,
      },
      {
        textPl: 'Duże, niezależnie czy wchodzą czy wychodzą ze śluzy',
        textRu:
          'Большие, независимо от того, входят ли они в шлюз или выходят из него',
        correct: false,
      },
      {
        textPl: 'Wychodzące ze śluzy',
        textRu: 'Выходящие из шлюза',
        correct: true,
      },
    ],
  },
  {
    textPl:
      'Jacht płynący lewym halsem ustępuje z drogi jachtowi płynącemu prawym halsem:',
    textRu: 'Яхта на левом галсе уступает место лодке на правом галсе:',
    answers: [
      {
        textPl: 'Tak',
        textRu: 'Да',
        correct: true,
      },
      {
        textPl: 'Nie',
        textRu: 'Нет',
        correct: false,
      },
      {
        textPl: 'Zawsze ustępuje jacht mniejszy',
        textRu: 'Меньшая яхта всегда уступает',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Jeżeli dwa jachty żaglowe mają wiatr z tej samej burty, to jacht znajdujący się od strony nawietrznej powinien:',
    textRu:
      'Если две парусные яхты идут одинаковым галсом, то яхта, находящаяся на наветренной стороне должна:',
    answers: [
      {
        textPl: 'Kontynuować rejs po ustalonej trasie',
        textRu: 'Продолжить курс по своему маршруту',
        correct: false,
      },
      {
        textPl:
          'Wezwać jacht żaglowy znajdujący się po zawietrznej do ustąpienia z drogi',
        textRu: 'Сообщить подветренной парусной лодке уступить дорогу',
        correct: false,
      },
      {
        textPl: 'Ustąpić z drogi',
        textRu: 'Уступить дорогу подветренной яхте',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Dwa jachty płyną przeciwnymi halsami, ustępuje:',
    textRu: 'Две яхты идут противоположными галсами, уступить должна:',
    answers: [
      {
        textPl: 'Jacht płynący prawym halsem',
        textRu: 'Идущая правым галсом',
        correct: false,
      },
      {
        textPl: 'Jacht płynący lewym halsem',
        textRu: 'Идущая левым галсом',
        correct: true,
      },
      {
        textPl: 'Jacht większy',
        textRu: 'Большая яхта',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Prawa burta jachtu żaglowego na śródlądziu oznaczona jest światłem koloru:',
    textRu:
      'Правый борт парусной яхты во внутренних водах маркируется цветным огнем:',
    answers: [
      {
        textPl: 'Czerwonego',
        textRu: 'Красного цвета',
        correct: false,
      },
      {
        textPl: 'Zielonego',
        textRu: 'Зеленого цвета',
        correct: true,
      },
      {
        textPl: 'Białego',
        textRu: 'Белого цвета',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Pozycja HELP to:',
    textRu: 'Позиция ПОМОЩЬ:',
    answers: [
      {
        textPl: 'Sposób wzywania pomocy',
        textRu: 'Как позвать на помощь',
        correct: false,
      },
      {
        textPl:
          'Sposób ułożenia ciała w wodzie zmniejszający utratę ciepła z organizmu',
        textRu:
          'Способ расположения тела в воде, уменьшающий потери тепла телом',
        correct: true,
      },
      {
        textPl:
          'Sposób ułożenia ciała w wodzie zwiększający utratę ciepła z organizmu',
        textRu: 'Положение тела в воде, что увеличивает потерю тепла телом',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Pierwszą czynnością po wywróceniu jachtu jest:',
    textRu: 'Первое действие после опрокидывания яхты:',
    answers: [
      {
        textPl: 'Sprawdzenie stanu załogi',
        textRu: 'Проверка экипажа',
        correct: true,
      },
      {
        textPl: 'Zabezpieczenie jachtu przed ‘grzybem’',
        textRu: 'Попытка перевернуть яхту обратно',
        correct: false,
      },
      {
        textPl:
          'Zabezpieczenie osprzętu i wyposażenia ruchomego przed utonięciem',
        textRu: 'Защита приспособлений и подвижного оборудования от затопления',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Pozycję „boczną bezpieczną” stosujemy w przypadku:',
    textRu: 'Положение «потерпевшегос» используется в случае:',
    answers: [
      {
        textPl: 'Krwawienia z nosa',
        textRu: 'Носовых кровотечений',
        correct: false,
      },
      {
        textPl: 'Gdy osoba jest nieprzytomna',
        textRu: 'Когда человек без сознания',
        correct: true,
      },
      {
        textPl: 'Po urazie kręgosłup',
        textRu: 'После травмы позвоночника',
        correct: false,
      },
    ],
  },
  {
    textPl:
      'Resuscytacje krążeniowo-oddechową osoby dorosłej prowadzimy w schemacie:',
    textRu:
      'Сердечно-легочная реанимация взрослого человека проводится по следующей схеме:',
    answers: [
      {
        textPl: '30 uciśnięć klatki piersiowej do 2 wdechów ratunkowych',
        textRu: '30 компрессий грудной клетки на 2 искусственных вдоха',
        correct: true,
      },
      {
        textPl:
          '5 wdechów ratunkowych i następnie 30 uciśnięć klatki piersiowej do 2 wdechów ratunkowych',
        textRu:
          '5 искусственных вдохов, за которыми следует 30 компрессий грудной клетки до 2 искусственных вдохов',
        correct: false,
      },
      {
        textPl: '2 wdechy ratunkowe do 15 uciśnięć klatki piersiowej',
        textRu: 'От 2 искусственных вдохов до 15 нажатий на грудную клетку',
        correct: false,
      },
    ],
  },
  {
    textPl: 'Do koła ratunkowego wchodzimy:',
    textRu: 'Использование спасательного круга:',
    answers: [
      {
        textPl: 'Podpływając pod koło',
        textRu: 'Подплыть под круг',
        correct: false,
      },
      {
        textPl: 'Chwytamy się obiema rękoma',
        textRu: 'Хватать обеими руками',
        correct: false,
      },
      {
        textPl: 'Zakładamy koło przez głowę i zakładamy pod pachy',
        textRu: 'Надеть круг на голову и положить его под мышки',
        correct: true,
      },
    ],
  },
  {
    textPl: 'Sztrandowanie jest to:',
    textRu: 'Штрандование (посадка на мель) это:',
    answers: [
      {
        textPl: 'Niezamierzone wejście na mieliznę',
        textRu: 'Непреднамеренная посадка на мель',
        correct: false,
      },
      {
        textPl: 'Celowe wejście na mieliznę',
        textRu: 'Преднамеренная посадка на мель',
        correct: true,
      },
      {
        textPl: 'Wyciąganie jachtu na brzeg po sezonie',
        textRu: 'Вытаскивание яхты на берег после окончания сезона',
        correct: false,
      },
    ],
  },
];
