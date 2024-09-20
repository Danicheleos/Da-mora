import { Question } from 'src/app/core/interfaces/question.interface';

const imagesIDS = new Set([
  9,23,25,26,27,28,29,30,31,32,33,34,39,48,52,53,54,55,89,90,91,93,94,344,345,355
])

export function parseData(data: string): Question[] {
  const questions = data.split('\n\n');
  return questions.reduce((acc, text, index) => {
    const [textPl, answerPL1, answerPL2, answerPL3, textRu, answerRU1, answerRU2, answerRU3] = text.split('\n');
    try {
      const newQuestion: Question = {
        index,
        textPl: textPl.replace(/^[0-9]*.\s/, ''),
        textRu: textRu.replace(/^[0-9]*.\s/, ''),
        image: imagesIDS.has(index + 1) || (index + 1 >= 210 && index + 1 <= 302) ? `assets/images/motorowka/${index+1}.png` : '',
        answers: [
          {
            textPl: answerPL1.replace('A. ', '').replace('А. ', ''),
            textRu: answerRU1.replace('A. ', '').replace('А. ', '').replace('$', ''),
            correct: answerRU1.endsWith('$')
          },
          {
            textPl: answerPL2.replace('B. ', '').replace('В. ', ''),
            textRu: answerRU2.replace('B. ', '').replace('В. ', '').replace('$', ''),
            correct: answerRU2.endsWith('$')
          },
          {
            textPl: answerPL3.replace('C. ', '').replace('С. ', ''),
            textRu: answerRU3.replace('C. ', '').replace('С. ', '').replace('$', ''),
            correct: answerRU3.endsWith('$')
          }
        ]
      }
      return [...acc, newQuestion];
    } catch {
      return acc;
    }
  }, new Array())
}

export const dataMotor = `1. Łódź motorowa typu RIB
A. łódź motorowa do połowu ryb
B. łódź motorowa o konstrukcji hybrydowej stanowiące połączenie  sztywnej i elastycznej
C. łódź motorowa o napędzie strugowodnym
1. Скоростная лодка типа RIB – это:
А. скоростная лодка для ловли рыбы
B. моторная лодка гибридной конструкции, представляющая собой сочетание жесткой и гибкой конструкции (баллонов плавучести) $
C. скоростная лодка со строгальным приводом

2. Jacht motorowy, który posiada plaskie dno, osiąga prędkości  to
А. Jacht wypornościowy
В. Jacht ślizgowy
С. Jacht balastowy
2. Моторная яхта, которая имеет плоское дно, достигающая скорости – это:
A. водовымещающая яхта
B. скользящая яхта $
C. балластная яхта

3. Stępka jest to:
А. Część osprzętu pokładowego
В. Główny element konstrukcji wzdłużnej jachtu
С. Główny element konstrukcji dziobu jachtu
3. Киль – это:
A. часть бортового оборудования
B. основной элемент продольной конструкции яхты $
С. основной элемент конструкции носовой части яхты

4. Kokpit jest to:
А. Miejsce do przechowywania kotwicy
B. Zagłębienie w pokładzie, w którym przebywa załoga podczas żeglugi
С. Najniżej położona część jachtu
4. Кокпит – это:
А. место для закрепления якоря
B. углубление в палубе, в которой находится экипаж во время плавания $
C. самая нижняя часть яхты

5. Co to jest knaga?:
А. Miejsce mocowania silnika
В. Osprzęt pokładowy służący do unieruchamiania różnych lin
С. Urządzenie do liny ratowniczej
5. Что такое кнехт:
А. место крепления двигателя
B. деталь швартовного устройства, для закрепления концов веревок и обездвиживания моторной яхты $
C. устройство спасательной веревки

6. Handreling to:
А. Poręncz przytwierdzona do pokładówki, nadbudówki, jako uchwat dla dłoni
В. Wzmocnienie burty jachtu
С. Uchwyt do podnoszenia silnika przyczepnego
6. Релинг – это:
A. поручень, прикрепленный к палубе, надстройке, как поручень для рук $
B. укрепление борта яхты
C. ручка для подъема тягового двигателя

7. Zęza to
A. Pomieszczenie dziobowe
B. Podłoga na jachcie
C. Przestrzeń, która znajduje się pod podłogą wewnątrz jachtu
7. Трюм - это:
А. помещение в носу яхты
В. пол на яхте
С. пространство, в корпусе судна между днищем и(или вторым дном) и вышележащей палубой $

8. Wręga to
A. Element konstrukcji wzdłużnej jachtu
B. Element konstrukcji poprzecznej jachtu
C. Element konstrukcji mocowania silnika.
8. Перемычка БИМС - это:
А. элемент продольной конструкции яхты
В. элемент поперечной конструкции яхты $
С. элемент конструкции крепления двигателя

9. Jak nazywa się lina cumownicza łącząca rufę jachtu z polerem na nabrzeżu umieszczonym za jachtem?
A. Cuma rufowa
B. Spring rufowy
C. Cuma środkowa
9. Как называется швартов, соединяющий корму яхты с кнехтом (№1 на рис.) на причале, расположенной за яхтой?
А. кормовой канат $
B. кормовой шпринг
C. центральный канат

10. Zadaniem układu trymowania silnika zaburtowego jest:
А. Prawidłowe ustawienie wzdłużne jachtu względem wody podczas płynięcia
B. Prawidłowe ustawienie wzdłużne jachtu względem wody podczas postoju
C. Prawidłowe ustawienie poprzeczne jachtu względem wody podczas płynięcia
10. Задачей системы удержания подвесного мотора является:
A. правильное продольное выравнивание яхты относительно воды во время движения $
B. правильное продольное положение яхты относительно воды во время стоянки
C. правильное поперечное положение яхты относительно воды во время движения

11. Prawidłową pracę układu chłodzenia silnika zaburtowego stwierdzamy na podstawie:
A. Wskaźnika ciśnienia oleju
B. Wylotu wody chłodzącej
C. Wskaźnika ciśnienia wody
11. Правильную работу системы охлаждения подвесного мотора определяем по:
A. датчику давления масла
B. выходу охлаждающей воды $
C. датчику давления воды

12. Skok śruby napędowej to:
A. Teoretyczna długość drogi, jaką pokonuje śruba napędowa jednostki pływającej podczas jednego obrotu
B. Odległość pomiędzy osią a zewnętrzną krawędzią śruby
C. Luz na wale śrubowym
12. Ход гребного винта - это:
A. теоретическая длина пути, которую пропеллер плывущего средства проходит за один оборот $
B. расстояние между осью и внешним краем винта
C. зазор на винтовом валу

13. Jednostka mocy o wartości 1 kW to:
A. 1,36 konia mechanicznego
B.100 Watt
C. 2,5 konia mechanicznego
13. Единица мощности 1 кВт - это:
A. 1,36 лошадиная сила $
B. 100 Ватт
C. 2,5 лошадиных сил

14. Przed uruchomieniem zapłonu, na łodzi wyposażonej w silnik stacjonarny, należy w pierwszej kolejności:
A. Przewietrzyć komorę silnika
B. Sprawdzić filtr paliwa
C. Sprawdzić układ kierowniczy
14. Перед запуском зажигания на лодке, оснащенной стационарным двигателем, необходимо в первую очередь:
A. проветрить моторный отсек $
B. проверить топливный фильтр
C. проверить рулевое управление

15. Zrywka to:
A. Urządzenie służące do rozruchu silnika
B. Awaryjny wyłącznik silnika
C. Zabezpieczenie śruby napędowej
15. Страховочная чека - это:
A. устройство, используемое для запуска двигателя
B. аварийный выключатель двигателя $
C. защита пропеллера

16. Do zasilania silnika dwusuwowego używamy:
A. Oleju napędowego
B. Mieszanki benzyny z olejem
C. Benzyny
16. Для питания двухтактного двигателя мы используем:
А. дизельное топливо
B. смесь бензина и масла $
C. бензин

17. W chwilę po uruchomieniu silnika należy sprawdzić:
A. Czy silnik jest dobrze zamocowany na pawęży
B. Czy silnik jest chłodzony
C. Czy wydostają się spaliny spod wody
17. Сразу после запуска двигателя необходимо проверить:
A. хорошо ли закреплен двигатель на транце
B. охлаждается ли двигатель $
С. выходят ли выхлопные газы из-под воды

18. Gaźnik w silniku zaburtowym jest to:
A. Urządzenie do wytwarzania mieszanki paliwowo-powietrznej
B. Urządzenie do wytwarzania mieszanki paliwowo-olejowej
C. Rodzaj przekładni
18. Карбюратор в подвесном двигателе - это:
A. устройство для производства топливно-воздушной смеси $
B. устройство для производства топливно-масляной смеси
C. тип редуктора

19. Napęd strugowodny to:
A. Rodzaj pędnika wykorzystujący siłę odrzutu wody
B. Rodzaj pędnika stosowany na łodziach motorowych uprawiających żeglugę w strefie ciszy
C. Urządzenie sterowe
19. Водомёт:
A. тип двигателя, использующий силу отдачи воды $
B. тип двигателя, используемый на моторных лодках, которые занимаются плаванием в Зоне Тишины
C. рулевое устройство

20. Przy uruchomionym silniku zaburtowym, zrywkę należy:
A. Przymocować do części ciała lub garderoby
B. Przymocować do części kadłuba jachtu
C. Przymocować do koła ratunkowego
20. При работающем подвесном двигателе, страховочная чека двигателя должна быть:
A. прикреплена к части тела или гардероба $
B. прикреплена к части корпуса яхты
C. прикреплена к спасательному кругу

21. Wschodni znak kardynalny to:
A. Pława, kolumienka lub tyka ze znakiem szczytowym dwa czarne stożki, jeden nad drugim, wierzchołkami skierowanymi w górę
B. Pława, kolumienka lub tyka ze znakiem szczytowym dwa czarne stożki, jeden nad drugim, podstawami do siebie
C. Pława, kolumienka lub tyka ze znakiem szczytowym dwa czarne stożki, jeden nad drugim, wierzchołkami skierowanymi w dół
21. Восточный Кардинальный знак - это:
A. плавающий знак, столбик или пика с двумя черными конусами, один над другим, вершинами, направленными вверх
B. плавающий знак, столбик или пика с двумя черными конусами, один над другим, основаниями друг к другу $
C. плавающий знак, столбик или пика с двумя черными конусами, один над другим, вершинами, направленными вниз

22. Północny znak kardynalny należy omijać:
A. Od północy, zachodu lub wschodu
B. Jedynie od strony południa
C. Od północy pozostawiając go na południu
22. Северный Кардинальный знак следует избегать:
А. с севера, запада или востока
B. только с юга
C. с севера, оставляя его на юге $

23. Zielona tyka na wodach śródlądowych oznacza:
A. Lewą granicę szlaku żeglownego
B. Prawą granicę szlaku żeglownego
C. Miejsce na akwenie przeznaczone do połowu
23. Зеленая пика (вешка) во внутренних водах означает:
А. левая граница судоходного пути $
B. правая граница судоходного шале
C. место на водоеме, предназначенное для ловли рыбы

24. 1 mila morska (Mm) to:
A. Odcinek równika odpowiadający jednej minucie kątowej = 1,852 km
B. Jednostka prędkości = 10 km/h
C. Jednostka długości = 1652 m
24. 1 морская миля (Mm) составляет:
A. участок экватора, соответствующий одной угловой минуте = 1,852 км $
B. единица скорости = 10 км/ч
C. единица длины = 1652 м

25. Znak brzegowy w kształcie czerwonego trójkąta skierowanego wierzchołkiem w dół oznacza:
A. Miejsce niebezpieczne na lewym brzegu
B. Miejsce niebezpieczne na prawym brzegu
C. Miejsce niebezpieczne na rozgałęzieniu szlaku
25. Пограничный знак в форме красного треугольника, направленного вершиной вниз, означает:
А. опасное место на левом берегу
B. опасное место на правом берегу $
С. опасное место на разветвлении ходового пути

26. Prostokątna tablica pomalowana w poziome pasy o kolorach CZERWONY-BIAŁY-CZERWONY oznacza:
A. Rozgałęzienie szlaku wodnego
B. Zakaz wjazdu lub przejazdu
C. Nakaz rozdzielenia pociągu holowniczego
26. Прямоугольная табличка, окрашенная в горизонтальные полосы красно-бело-красного цвета:
А. разветвление водного пути
B. запрет на въезд или проезд $
C. предупреждение о разделении фарватера

27. Przedstawiona na rysunku tablica (biały kwadrat z czerwoną obwódką) oznacza:
A. Przebieg szlaku wzdłuż prawego brzegu
B. Miejsce niebezpieczne na prawym brzegu
C. Przebieg szlaku wzdłuż lewego brzegu
27. Изображенный на рисунке знак (белый квадрат с красной каймой) обозначает:
А. маршрут вдоль правого берега $
B. опасное место на правом берегу
С. маршрут вдоль левого берега

28. Przedstawiony na rysunku znak brzegowy (żółty kwadrat z pionowym czarnym pasem) wskazuje:
A. Przebieg szlaku żeglownego wzdłuż lewego brzegu
B. Przejście szlaku żeglownego od prawego do lewego brzegu
C. Przejście szlaku żeglownego od lewego do prawego brzegu
28. Пограничный знак (желтый квадрат с вертикальной черной полосой), изображенный на рисунке, указывает:
А. ход судоходного пути по левому берегу
B. переход судоходного пути от правого к левому берегу $
C. переход судоходного пути от левого к правому берегу

29. Przedstawiony na rysunku znak (biała tablica z czerwoną obwódką i przekreślonymi czarnymi strzałkami) oznacza:
A. Zakaz ruchu statków sportowych i turystycznych
B. Zakaz wszelkiego wyprzedzania
C. Zakaz wyprzedzania pociągów holowniczych
29. Изображенный на рисунке знак (белая табличка с красной каймой и зачеркнутыми черными стрелками) обозначает:
А. запрет на движение спортивных и туристических судов
B. запрет на все обгоны $
С. запрет обгона буксирных судов

30. Przedstawiony na rysunku znak (biała tablica z czerwoną obwódką i przekreśloną śrubą) oznacza:
А. Zakaz ruchu statków sportowych i turystycznych
B. Zakaz ruchu statków żaglowych
C. Zakaz ruchu statków o napędzie mechanicznym
 30. Знак, изображенный на рисунке (белая доска с красной каймой и зачеркнутым винтом), обозначает:
А. запрет на движение спортивных и туристических судов
B. запрет на движение парусных судов
С. запрет на движение судов с механическим приводом $

31. Przedstawiona na rysunku biało-czerwona tablica z pionową kreską, oznacza:
A. Nakaz zachowania szczególnej ostrożności
B. Nakaz nadania sygnału dźwiękowego
C. Nakaz zatrzymania statku w warunkach określonych przepisami
31. Изображенная на рисунке бело-красная табличка с вертикальной черной чертой, обозначает:
A. предписание соблюдать особую осторожность и бдительность $
B. передача звукового сигнала
C. задержание судна в условиях, установленных Правилами

32. Przedstawiony na rysunku znak (biała tablica z czerwoną obwódką, strzałką od góry i cyframi) oznacza:
A. Ograniczenie głębokości do 7,5m
B. Ograniczenie wysokości wolnej burty do 7,5m
C. Ograniczenie wysokości prześwitu nad lustrem wody do 7,5m
32. Изображенный на рисунке знак (белая табличка с красной каймой, стрелкой сверху и цифрами) обозначает:
A. ограничение глубины до 7,5 м
B. ограничение высоты надводного борта до 7,5м
C. ограничение высоты зазора над поверхностью воды до 7,5 м $

33. Żółty romb umieszczony na przęśle mostu oznacza:
A. Przejście w obu kierunkach
B. Przejście w jednym kierunku
C. Przejście chwilowo zamknięte
33. Желтый ромб, помещенный на мостовой мост, означает:
A. переход в обоих направлениях $
B. переход в одном направлении
С. переход временно закрыт

34. Przedstawiony na rysunku znak oznacza:
A. Przejście w obu kierunkach określone tablicami
B. Przejście w jednym kierunku określone tablicami
C. Zakaz przejścia poza skrajną określoną tablicami (pod mostem, przez jaz)
34. Изображенный на рисунке знак означает:
А. переход в обоих направлениях, определенных таблицами
B. переход в одном направлении, обозначенный таблицами
С. запрет на пересечение границ, отмеченных белым цветом (под мостом, через плотину) $

35. Co oznacza pojęcie locja?
A. Dział wiedzy zajmujący się określaniem pozycji statku
B. Sygnalizację śródlądową
C. Dział wiedzy żeglarskiej zajmujący się opisem i oznakowaniem szlaków żeglownych
35. Что означает понятие «лоция»?
A. отдел знаний, занимающийся определением положения судна
B. внутренняя сигнализация
C. отдел морских знаний, занимающийся описанием и маркировкой судоходных маршрутов $

36. Szlak żeglowny jest to:
A. Pas wody o dostatecznej dla żeglugi głębokości i szerokości
B. Każdy akwen, na którym można uprawiać sporty motorowe
C. Każdy akwen niezależnie od jego wielkości i głębokości
36. Судоходный маршрут - это:
A. водный путь, достаточный для судоходства по глубине и ширине $
B. любой водоем, где можно заняться автоспортом
C. любой водоем независимо от его размера и глубины

37. Śluza jest to:
A. Przegroda poprzeczna spiętrzająca wodę
B. Budowla łącząca dwa akweny o różnych poziomach wody
C. Kanał spławny
37. Шлюз - это:
A. поперечная перегородка для перекрытия воды
B. сооружение, соединяющее два водоема с разным уровнем воды $
C. судоходный канал

38. 1 kabel to:
A. Jednostka długości = 0,1 Mm
B. Jednostka prędkości = 0,1 węzła
C. Jednostka ciśnienia wynosząca 0,1 bara
38. 1 кабель - это:
A. единица длины = 0,1 мм $
B. единица скорости = 0,1 узла
C. единица давления = 0,1 бар

39. Boja ze znakiem szczytowym w kształcie stożka oznacza (na wodach morskich):
A. Prawą stronę szlaku żeglownego
B. Lewą stronę szlaku żeglownego
C. Nakaz przejścia na prawą stronę szlaku żeglownego
39. Буй с конусообразным пиковым знаком означает (в морских водах):
A. правая сторона судоходного пути $
B. левая сторона судоходного маршрута
C. указатель о переходе на правую сторону судоходного пути
на берегу  на воде

40. Chmurą burzową jest:
A. Nimbostratus
B. Altostratus
C. Cumulonimbus
40. Грозовое облако:
A. Nimbostratus
B. Altostratus
C. Cumulonimbus $

41. Do pomiaru ciśnienia atmosferycznego służy:
A. Barometer
B. Higrometr
C. Anemometer
41. Для измерения атмосферного давления используется:
А. Барометр $
B. Гигрометр
C. Анемометр

42. Co to są izobary:
A. Są to linie na mapach synoptycznych, łączące miejsca o tym samym ciśnieniu
B. Są to linie na mapach synoptycznych, łączące miejsca o tej samej temperaturze
C. Są to linie na mapach synoptycznych, łączące miejsca o tej samej wilgotności
42. Что такое «изобары»:
А. это линии на синоптических картах, соединяющие места с одинаковым давлением $
B. это линии на синоптических картах, соединяющие места с одинаковой температурой
C. это линии на синоптических картах, соединяющие места с одинаковой влажностью

43. Północny wiatr:
A. Wieje z północy
B. Wieje na północ
C. Wieje o północy
43. Северный ветер:
А. дует с севера $
B. дует на север
C. дует в север

44. Podczas bryzy dziennej wiatr wieje:
A. Od lądu w kierunku morza
B. Z morza w kierunku lądu
C. Wzdłuż brzegu z południa na północ
44. Во время дневного бриза дует ветер:
А. от суши к морю
B. от моря к суше $
C. вдоль берега с юга на север

45. Jachty śródlądowe (przeznaczone do uprawiania turystyki, sportu, sportowego połowu ryb) o napędzie mechanicznym, o mocy silników większej niż 15 kW powinny być rejestrowane w:
A. Nie muszą być zarejestrowane
B. W systemie REJA 24
C. W Urzędzie Gminy
45. Внутренние яхты (предназначенные для туризма, спорта, спортивной рыбалки) с механическим приводом и мощностью двигателей более 15 кВт должны регистрироваться:
A. они не должны быть зарегистрированы
B. в системе REJA 24 $
C. в Муниципальном Управлении (Ужонде Гмины)

46. Jachty śródlądowe, podlegające obowiązkowi przeglądów technicznych to:
A. Jachty śródlądowe wyposażone w silnik o mocy równej lub przekraczającej 75 kW
B. Jachty śródlądowe wyposażone w silnik strugowodny o mocy 50 kW
C. Jachty śródlądowe wyposażone w silnik o mocy równej lub przekraczającej 65 kW
46. К яхтам во внутренних водах, подлежащим техническому осмотру, относятся:
A. яхты во внутренних водах, оснащенные двигателем мощностью, равной или превышающей 75 кВт $
B. яхты во внутренних водах, оснащенные водомётным двигателем мощностью 50 кВт
C. яхты во внутренних водах, оснащенные двигателем мощностью, равной или превышающей 65 кВт

47. Statek o napędzie mechanicznym, który chce wyprzedzić inny statek o napędzie mechanicznym powinien:
A. Ustąpić mu pierwszeństwa drogi
B. Unikać zmiany kursu w prawo
C. Unikać zmiany kursu w lewo
47. Судно с механическим приводом, который хочет обогнать другое судно с механическим приводом, должно:
А. уступить ему дорогу $
B. избегать изменения курса вправо
С. избегать изменения курса влево

48. Statek pokazuje znaki dzienne, takie jak na rysunku, co to oznacza?
A. Statek stojący na mieliźnie
B. Statek o ograniczonej zdolności manewrowej
C. Statek stojący na kotwicy
48. Судно показывает дневные знаки, как на рисунке, что это значит?
A. судно, стоящее на мели
B. корабль с ограниченной маневренностью $
C. корабль, стоящий на якоре

49. Jeżeli dwa statki o napędzie mechanicznym płyną kursami przeciwnymi to:
A. Oba powinny zmienić kurs w lewo
B. Oba powinny zmienić kurs w prawo
C. Oba powinny nadać sygnał dźwiękowy
49. Если два судна с механическим приводом движутся противоположными курсами, то:
A. оба должны изменить курс влево
B. оба должны изменить курс вправо $
C. оба должны подавать звуковой сигнал

50. Seria bardzo krótkich dźwięków oznacza:
A. Zmieniam mój kurs w prawo
B. Niebezpieczeństwo zderzenia
C. Uwaga
50. Серия очень коротких сигналов (звуков) означает:
A. я меняю свой курс вправо
B. опасность столкновения $
C. внимание

51. Jeden długi dźwięk nadawany przez statek oznacza:
A. Uwaga
B. Moje maszyny pracują wstecz
C. Nie mogę manewrować
51. Один длинный звук, передаваемый судном, означает:
A. внимание $
B. моя моторная яхта идет задним ходом
C. я не могу маневрировать

52. Widoczna nocą jednostka pokazuje światła jak na rysunku. Określ rodzaj statku i stronę.
A. Jacht żaglowy widoczny od dziobu
B. Statek mechaniczny widoczny od dziobu
C. Statek mechaniczny widoczny od rufy
52. Видимая ночью судоходное средство показывает огни, как показано на рисунке. Определите тип судна и сторону.
A. парусная яхта видна с носовой части
B. судно, видимое с носовой части $
C. судно, видимое с кормы

53. Widoczna nocą jednostka pokazuje światła jak na rysunku. Określ rodzaj statku i stronę.
A. Zestaw holowniczy widoczny od dziobu
B. Jacht żaglowy widoczny od dziobu
C. Statek mechaniczny widoczny od dziobu
53. Видимый ночью комплект сигнальных огней показывает, как показано на рисунке. Определите тип судна и сторону.
A. буксировочный комплект, видимый с носовой части
B. парусная яхта видна с носа $
C. механический корабль, видимый с носовой части

54. Widoczna nocą jednostka pokazuje światła jak na rysunku. Określ rodzaj statku i stronę
A. Statek mechaniczny widoczny od prawej burty
B. Zestaw holowniczy widoczny od prawej burty
C. Statek mechaniczny widoczny od lewej burty
54. Видимый ночью комплект сигнальных огней показывает, как показано на рисунке. Определите тип судна и сторону
A. механическое судно, видимое с правого борта $
B. буксирный комплект, видимый с правого борта
C. механическое судно, видимое с левого борта

55. Czarna kula wywieszona na dziobie statku oznacza:
A. Statek stojący na mieliźnie
B. Pojedynczy mały statek w ruchu
C. Statek na kotwicy
55. Черный шар, установленный на носу корабля, означает:
A. судно, стоящее на мели
B. одиночный маленький корабль в движении
C. корабль на якоре $

56. Oznakowanie dzienne promu to:
A. Dwie czarne kule jedna pod drugą
B. Zielona kula
C. Czerwona kula
56. Дневная маркировка парома - это:
А. два черных шара друг под другом
B. зеленая сфера $
C. красный шар

57. Na burtach unieruchomionego statku wywieszono czerwono-białą i czerwoną flagę. Z której strony miniesz tę jednostkę?
A. Od strony bezpieczniejszej wody
B. Od strony flagi czerwonej
C. Od strony flagi czerwono-białej
57. На бортах обездвиженного судна были вывешены красно-белый и красный флаги. С какой стороны вы пройдете это судно?
А. с более безопасной стороны
B. со стороны красного флага
C. со стороны красно-белого флага $

58. Patent sternika motorowodnego (osoby pełnoletniej) upoważnia do:
A. Prowadzenia jachtów motorowych po wodach śródlądowych bez ograniczeń
B. Prowadzenia jachtów motorowych po wodach śródlądowych o mocy silnika do 60 KM
C. Prowadzenia jachtów motorowych po wodach śródlądowych o długości do 7,5m
58. Патент стерника, управляющего моторной лодкой (совершеннолетнему) дает право на:
А. управление моторными яхтами во внутренних водах без ограничений $
B. управление моторными яхтами во внутренних водах с мощностью двигателя до 60 л.с.
C. управление моторными яхтами во внутренних водах длиной до 7,5 м

59. Pierwszą czynnością po wywrotce jachtu jest:
A. Policzenie załogi
B. Sprawdzenie szczelności kadłuba
C. Odłączenie akumulatora
59. Первое действие после опрокидывания яхты это:
А. подсчет экипажа $
B. проверка герметичности корпуса
C. отключение аккумулятора

60. W jaki sposób może ograniczyć utratę ciepła rozbitek przebywający w wodzie?
A. Wykonując intensywne ruchy
B. Podciągając złączone kolana od brody i obejmując je oburącz
C. Zdejmując zbędną odzież
60. Как можно ограничить потерю тепла потерпевшему кораблекрушение, находящемуся в воде?
А. выполнение интенсивных движений
B. подтянуть соединенные колени до подбородка и обнять их обеими руками $
С. снимая лишнюю одежду

61. Ogrzewanie człowieka, który uległ przechłodzeniu po wyjściu z wody należy przeprowadzać:
A. Stopniowo
B. Szybko
C. Nie ma znaczenia
61. Согревание человека, который переохладился после выхода из воды, следует проводить:
А. постепенно $
B. быстро
C. не имеет значения

62. Człowiek, któremu rzucono koło ratunkowe:
A. Kładzie się na nim
B. Zakłada je przez głowę pod ramiona
C. Trzyma się go rękoma
62. Человек, которому брошен спасательный круг:
А. ложится на него
B. надевает его через голову под плечи $
С. держится за него руками

63. Podczas alarmu opuszczenia jednostki pas ratunkowy należy zakładać:
A. Pod pokładem
B. Na pokładzie
C. W wodzie
63. Во время аварийной сигнализации необходимо зафиксировать спасательный пояс:
А. под палубой
B. на борту $
С. в воде

64. Co to jest hipotermia?
A. Wychłodzenie organizmu
B. Przegrzanie organizmu
C. Przewianie organizmu
64. Что такое переохлаждение?
А. переохлаждение организма $
B. перегрев организма
С. предрасположенность организма

65. Złamanie przedramienia unieruchamiamy:
A. W miejscu złamania
B. W miejscu złamania z nadgarstkiem
C. Przedramię ze stawem łokciowym i nadgarstkiem
65. Перелом предплечья необходимо обездвижить:
А. в месте перелома
B. в месте перелома с запястьем
C. предплечье с локтевым суставом и запястьем $

66. Łączność alarmową na radiu VHF prowadzimy na kanale:
A. Kanał 112
B. Kanał 16
C.Kanał 19
66. Аварийная связь на УКВ-радио осуществляется по каналу:
А. канал 112
B. канал 16 $
С. канал 19

67. Ile kamizelek ratunkowych powinno znajdować się na pokładzie jachtu wypływającego w rejs?
A. Dla każdego członka załogi
B. Dla przynajmniej połowy załogi
C. Tylko dla osób nieletnich
67. Сколько спасательных жилетов должно быть на борту яхты, отправляющейся в круиз?
А. для каждого члена экипажа $
B. по крайней мере для половины экипажа.
C. только для несовершеннолетних

68. Do gaszenia palącej się benzyny należy użyć:
A. Oleju gaśniczego
B. Gaśnicy proszkowej
C. Wody i detergentów
68. Для тушения горящего бензина необходимо использовать:
A. огнетушащее масло
B. порошковый огнетушитель $
C. воду и моющие средства

69. Co należy robić w przypadku pożaru silnika stacjonarnego?
A. Wyłączyć silnik, otworzyć komorę silnika i gasić za pomocą gaśnicy
B. Zamknąć dopływ paliwa, wyłączyć silnik, gasić za pomocą gaśnicy przez mały otwór
C.Wyłączyć silnik. Gasić silnik wodą
69. Что делать при возгорании стационарного двигателя?
A. выключите двигатель, откройте моторный отсек и тушите огнетушителем
B. закройте подачу топлива, выключите двигатель, потушите огнетушителем через небольшое отверстие $
C. выключите двигатель, гасить двигатель водой

70. Przed rozpoczęciem rejsu należy:
A. Zapoznać członków załogi ze środkami ratunkowymi i przećwiczyć ich używanie
B. Omówić kolejne etapy rejsu
C. Sprawdzić ilość ciepłych ubrań zabranych na rejs przez każdego uczestnika rejsu
70. Перед началом рейса необходимо:
A. познакомить членов экипажа со спасательными средствами и попрактиковаться в их использовании $
B. обсудить этапы рейса
C. проверить количество теплой одежды, взятой в круиз каждым участником

71. Podnoszenie i opuszczanie w górę i w dół wyprostowanych ramion na pokładzie jachtu oznacza:
A. Wzywam pomocy
B. Utraciłem zdolność manewrowania
C. Niebezpieczeństwo zderzenia
71. Подъем и опускание вверх и вниз прямых рук на палубе яхты означает:
А. призываю на помощь $
B. потерял способность маневрировать
С. опасность столкновения

72. Jakie oddziaływanie ma prawoskrętna śruba przy początkowej fazie płynięcia do przodu?
A. Odrzuca rufę w prawo
B. Odrzuca rufę w lewo
C. Odrzuca dziób w prawo
72. Какое влияние оказывает правосторонний винт при начальной фазе прямого потока?
А. отбрасывает корму вправо $
B. отбрасывает корму влево
C. отбрасывает нос вправо

73. Mając możliwość wyboru miejsca i sposobu cumowania, który wariant manewru jest bezpieczniejszy?
A. Cumowanie pod wiatr i pod prąd
B. Cumowanie z wiatrem dopychającym
C. Cumowanie z prądem i wiatrem
73. Имея возможность выбрать место и способ швартовки, какой вариант маневра безопаснее?
А. швартовка против ветра и против течения $
B. швартовка с попутным ветром
C. швартовка с попутными течением и ветром

74. Jako holowany, gdzie umocujesz linę holowniczą na swojej łodzi?
A. Możliwie najdalej z przodu na dziobie
B. Na środku łodzi
C. Nie ma znaczenia
74. Как буксируемый, где вы закрепите буксирный трос на своей лодке?
А. как можно дальше, спереди на носу $
B. в середине лодки
C. не имеет значения

75. Po wpłynięciu do śluzy należy:
A. Zacumować na stałe i opuścić jacht
B. Zacumować jacht w sposób umożliwiający pracę na cumach
C. Nie cumować, trzymać się bosakami
75. После входа в шлюз необходимо:
A. пришвартоваться навсегда и покинуть яхту
B. пришвартовать яхту таким образом, чтобы она могла работать на швартовых (двигалась вверх и вниз) $
C. не швартоваться, держаться не пришвартованным

76. Rufowa część jachtu, do której mocowany jest silnik to:
A. półpokład
B. pawęż
C. dziobnica
76. Кормовая часть яхты, к которой крепится двигатель:
А. полупокрытие
B. транец $
C. клюв

77. Lina cumująca jacht, biegnąca z dziobu jachtu, na nabrzeże w kierunku rufy to:
A. cuma dziobowa
B. szpring dziobowy
C. brest
77. Швартов яхты, идущий от носовой части яхты к причалу к корме:
А. носовой швартовый
B. носовой шпринг $
С. прижимной

78. Lina cumująca jacht, biegnąca z dziobu prostopadle do nabrzeża to:
A. cuma dziobowa
B. szpring dziobowy
C. brest dziobowy
78. Швартов яхты, идущий от носа перпендикулярно причалу:
А. носовой швартовый
B. носовой шпринг
С. прижимной носовой $

79. Lina cumująca jacht, biegnąca z dziobu jachtu, na nabrzeże na poler znajdujący się przed dziobem jachtu to:
A. cuma dziobowa
B. szpring dziobowy
C. brest dziobowy
79. Швартов яхты, идущий от носовой части яхты к причалу на кнехт, расположенный перед носовой частью яхты:
А. носовой швартовый $
B. носовой шпринг
С. прижимной носовой

80. Liny służące do cumowania to:
A. cuma dziobowa i reflinka
B. cumy i szpringi (dziobowe i rufowe)
C. szpring dziobowy i rufowy oraz life-liny
80. Веревки, используемые для швартовки:
А. носовой швартивый и рефлин
B. швартовые и шпринги (носовые и кормовые) $
C. носовой и кормовой шпринги и веревка для спасения утопающего

81. Do mocowania cum na nabrzeżu służy:
A. balustrada pomostu
B. dowolny znak nawigacyjny
C. poler
81. Для крепления веревок (канатов) на набережной используется:
А. перила пирса
B. любой навигационный знак
C. кнехт $

82. Do mocowania cum i innych lin na pokładzie służy:
A. knaga
B. rumpel
C. odbijacz
82. Для крепления канатов и других веревок на палубе используется:
А. утка $
B. румпель
C. отбойник

83. Denniki to elementy:
A. ozdobne kadłuba
B. konstrukcyjne kadłuba, łączące pokład z wręgami
C. konstrukcyjne kadłuba, łączące stępkę (kil) z wręgami
83. Стрингер - это элементы:
A. декоративного корпуса
B. конструктивные фюзеляжи, соединяющие палубу со шпангоутами
C. конструктивные фюзеляжи, соединяющие киль со шпангоутами $

84. Pokładniki to elementy:  может настил?
A. ozdobne kadłuba
B. konstrukcyjne kadłuba, łączące pokład z wręgami
C. konstrukcyjne kadłuba, łączące kil z wręgami
84. Палубный настил - это элементы:
A. декоративного корпуса
B. конструктивные фюзеляжи, соединяющие палубу со шпангоутами $
C. конструктивные фюзеляжи, соединяющие киль со шпангоутами

85. Greting to:
A. drewniana podłoga na jachcie
B. przestrzeń w dziobowej części kadłuba
C. przestrzeń w rufowej części kadłuba
85. Слань (паеолы):
А. деревянный пол на яхте $
B. пространство в носовой части фюзеляжа
C. пространство в кормовой части корпуса

86. Achterpik to:
A. drewniana podłoga na jachcie
B. przestrzeń w dziobowej części kadłuba
C. przestrzeń w rufowej części kadłuba
86. Транец это:
А. деревянный пол на яхте
B. пространство в носовой части фюзеляжа
C. пространство в кормовой части корпуса $

87. Forpik to:
A. drewniana podłoga na jachcie
B. przestrzeń w dziobowej części kadłuba
C. przestrzeń w rufowej części kadłuba
87. Форпик:
А. деревянный пол на яхте
B. пространство в носовой части фюзеляжа $
C. пространство в кормовой части корпуса

88. Wzmocnienia chroniące kadłub jachtu z zewnątrz to:
A. bukszpryty
B. listwy odbojowe (odbojnice)
C. Polery
88. Накладки для защиты корпуса яхты снаружи:
А. бушприты
B. привальный брус $
С. полеры

89. Kotwica przedstawiona obok to:
A. kotwica admiralicji
B. kotwica Danfortha (patentowa)
C. kotwica pługowa (CQR)
89. Якорь, расположенный на рисунке:
А. якорь Адмиралтейства
B. якорь Данфорта (патент) $
C. плуговый якорь (CQR)

90. Kotwica przedstawiona obok to:
A. kotwica admiralicji
B. kotwica Danfortha (patentowa)
C. kotwica Bruce'a
90. Якорь, расположенный на рисунке:
А. якорь Адмиралтейства
B. якорь Данфорта (патент)
C. якорь Брюса $

91. Kotwica przedstawiona obok to:
A. kotwica admiralicji
B. kotwica Danfortha (patentowa)
C. kotwica pługowa (CQR)
91. Якорь, изображенный на рисунке:
А. якорь Адмиралтейства
B. якорь Данфорта (патент)
C. якорь-плуг (CQR) 92

92. Celem utrzymania sprawności działania instalacji zęzowej jachtu należy:
A. dbać, aby do zęzy nie dostawały się przedmioty mogące zablokować pracę pomp lub zatkać przewody
B. przed rozpoczęciem rejsu zalać zęzę wodą i ją wypompować
C. przynajmniej raz na 3 miesiące wzywać wyspecjalizowany serwis w celu dokonania konserwacji systemu zęzowego
92. Для поддержания работоспособности трюмной установки яхты необходимо:
A. следить за тем, чтобы в трюм не попадали предметы, которые могут блокировать работу насосов или забивать трубопроводы $
B. перед началом круиза залить трюм водой и откачать её
C. не реже одного раза в 3 месяца вызывать специализированный сервис для обслуживания трюмной системы

93. Element przedstawiony obok to:
svekla
raksa
blok
93. Элемент, представленный рядом:
скоба $
ракса
блок

94. Element przedstawiony obok to:
kausza
raksa
krętlik
94. Элемент, представленный рядом:
А. кавш
B. ракса
С. вертлюг $

95. Jacht składający się z dwóch kadłubów to:
A. catamaran
B. trimaran
C. skuter
95. Яхта, состоящая из двух корпусов:
A. катамаран $
B. тримаран
С. скутер

96. Używanie elektrycznej windy kotwicznej powinno być realizowane wyłącznie
poza portami
w porze dziennej, aby nie powodować nadmiernego hałasu
przy pracującym silniku głównym na obrotach gwarantujących ładowanie akumulatora
96. Использование электрической якорной лебедки должно осуществляться только:
за пределами портов
в дневное время, чтобы не шуметь
при работающем главном двигателе на оборотах, гарантирующих заряд батареи $

97. Podstawowa instalacja elektryczna na większości jachtów charakteryzuje się napięciem:
A. 230 Volt
B. 12 Volt
C. 24 Volt
97. Базовая электрическая система на большинстве яхт характеризуется напряжением:
A. 230 вольт
B. 12 вольт $
C. 24 вольт

98. Stosowany w jachtowych instalacjach gazowych gaz jest
lżejszy od powietrza
ma taki sam ciezar jak powietrze
cięższy od powietrza
98. Газ, используемый в яхтенных газовых установках, является
легче воздуха
он имеет тот же вес, что и воздух
тяжелее воздуха $

99. Uruchamiając kuchenkę gazowa, najpierw należy
otworzyć zawór na butli
otworzyć zawór przy kuchence
wykonać test przyłączy gazowych przy pomocy zapalniczki
99. При запуске газовой плиты сначала необходимо
открыть клапан на баллоне $
открыть клапан у плиты
выполнить тест газовых соединений с помощью зажигалки

100. wyłączając kuchenkę
należy najpierw zamknąć zawór na butli, potem zawor na kuchence
wystarczy zamknąć zawór kuchenki
wystarczy zamknąć zawór na butli
100. выключая плиту
сначала закройте клапан на баллоне, затем клапан на плите $
просто закройте клапан плиты
просто закройте клапан на баллоне

101. kuchenki jachtowe wykorzystają z reguły
LPG
propan-butan
gaz ziemny
101. яхтенные плиты будут использовать, как правило
LPG
пропан-бутан $
природный газ
102. Kolorem czerwonym oznaczone są
elementy wyposażenia ppoż.
elementy systemu GMDSS
elementy instalacji elektrycznej
102. Красным цветом обозначены
элементы оборудования ППБ $
компоненты системы GMDSS
элементы электропроводки

103. Przed uruchomieniem silnika zaburtowego:
A. należy podnieść go na pantografie tak, aby śruba nie była zanurzona w wodzie
B. należy wstrząsnąć bakiem, aby wymieszać mieszankę paliwową
C. należy ustawić przekładnię na bieg jałowy, odkręcić odpowietrznik zbiornika paliwa i opuścić silnik tak, aby spodzina była cała pod wodą
103. Перед запуском подвесного двигателя:
A. должны поднять его на пантографе, чтобы винт не был погружен в воду
B. встряхнуть бак, чтобы смешать топливную смесь
C. установить коробку передач на холостой ход, открутить вентиляционное отверстие топливного бака и опустить двигатель так, чтобы нижняя часть была полностью под водой $

104. Podczas pracy typowego silnika zaburtowego:
A. z otworu kontrolnego powinna delikatnie kapać gorąca woda
B. z otworu kontrolnego powinna lać się równym strumieniem woda
C. nie powinna lać się z silnika woda
104. При работе типичного подвесного мотора:
A. горячая вода должна осторожно капать из контрольного отверстия
B. из контрольного отверстия должна литься ровная струя воды $
C. Вода не должна вытекать из двигателя

105. Pompa wody zaburtowej używana w układzie chłodzenia silników jachtowych to:
A. pompa tłokowa
B. pompa wirnikowa z wirnikiem gumowym
C. pompa membranowa
105. Подвесной водяной насос, используемый в системе охлаждения яхтенных двигателей:
A. поршневой насос
B. роторный насос с резиновым рабочим колесом $
C. мембранный насос

106. Silnik zaburtowy należy uruchamiać wyłącznie, gdy spodzina jest całkowicie w wodzie, gdyż:
A. wtedy silnik ma zapewnione chłodzenie
B. wtedy nie przekraczamy norm emisji hałasu
C. wtedy nie przekraczamy norm dotyczących emisji spalin
106. Подвесной двигатель следует запускать только тогда, когда нижняя часть полностью находится в воде, так как:
A. тогда двигатель охлаждается $
B. тогда мы не превышаем нормы шума
C. тогда мы не превышаем нормы выбросов выхлопных газов

107. Podczas uruchamiania silnika zaburtowego z manetką w rumplu, manetka gazu powinna być w pozycji:
A. minimum
B. maksimum
C. start
107. При запуске подвесного двигателя с переключателем в румпеле переключатель газа должен находиться в положении:
А. минимум
B. максимум
C. старт $

108. Przed uruchomieniem silnika stacjonarnego należy:
A. ustawić manetkę na bieg jałowy
B. ustawić manetkę na wolno naprzód"
C. oddać cumy
108. Перед запуском стационарного двигателя необходимо:
A. установите переключатель на холостой ход $
B. установить переключатель на медленный вперед"
C. отдать швартовы

109. Śruba napędowa z przekładnią typu „Z-drive":
A. może się poruszać w płaszczyźnie poziomej i pionowej
B. jest z reguły nieruchoma
C. porusza się wyłącznie w płaszczyźnie pionowej
109. Приводной винт с редуктором типа "Z-drive" (водомёты):
A. может двигаться в горизонтальной и вертикальной плоскости $
B. она, как правило, неподвижна
C. движется только в вертикальной плоскости

110. Śruba napędowa z przekładnią typu „S-drive"/„Sail-drive":
A. może się poruszać w płaszczyźnie poziomej i pionowej
B. jest z reguły nieruchoma
C. porusza się tylko i wyłącznie w płaszczyźnie pionowej morzu
110. Винт с редуктором типа "s-drive"/„Sail-drive":
A. может двигаться в горизонтальной и вертикальной плоскости
B. она, как правило, неподвижна $
C. движется только в вертикальной плоскости

111. Wymiana wirnika pompy wodnej w silniku zaburtowym eksploatowanym na :
A. może być bezproblemowo wykonana przez sternika na wodzie, jeśli zajdzie potrzeba
B. powinna być wykonywana w serwisie, podczas przeglądu silnika, min. co 2 lata
C. nie jest konieczna, gdyż wirnik jest przewidziany na całe życie" silnika
111. Замена крыльчатки водяного насоса на подвесном моторе, работающем в море:
A. может быть легко сделано рулевым на воде, если необходимо Д дно
B. должно быть выполнено в сервисе, при осмотре двигателя, мин. каждые 2 года $
C. не требуется, поскольку Ротор рассчитан на всю жизнь двигателя

112. W silnikach przyczepnych (zaburtowych) stosuje się z reguły przekładnię:
A. mechaniczną
B. hydrauliczną
C. pasową
112. В тяговых (подвесных) моторах, как правило, используется трансмиссия:
А. механическая $
B. гидравлическая
С. ременная

113. Napęd strugowodny jest charakterystyczny dla:
A. skuterów wodnych
B. barek turystycznych
C. jachtów żaglowo-motorowych
113. Струйный привод характерен для:
А. гидроциклов $
B. туристических барж
C. парусно-моторных яхт

114. Co to jest duoprop?
A. pędnik w jachtach motorowych złożony z dwu śrub pracujących współosiowo: jedna jest prawoskrętna a druga lewoskrętna, śruby obracają się w przeciwnych kierunkach
B. układ napędowy złożony z dwóch silników i dwóch linii wałów
C. podwójny system chłodzenia w silnikach stacjonarnych
114. Что такое контрвращающийся винт?
A. устройство на моторных яхтах, состоящий из двух винтов, работающих соосно: один правый, а другой левый, винты вращаются в противоположных направлениях $
B. трансмиссия, состоящая из двух двигателей и двух линий валов
C. двойная система охлаждения в стационарных двигателях

115. Ster strumieniowy na jachcie to:
A. pędnik pracujący poprzecznie do osi wzdłużnej jachtu, umieszczony na dziobie (rzadziej również na rufie), pomagający w manewrach portowych
B. rodzaj napędu skuterów wodnych
C. dodatkowe urządzenie sterowe wykorzystywane, gdy jednostka porusza się w stanie bezwypornościowym
115. Подруливающее устройство на яхте - это:
A. устройство работающее поперечно с продольной осью яхты, расположенное на носу (реже также на корме), помогающее в маневрах при швартовке $
B. тип привода гидроцикла
C. дополнительное рулевое устройство, используемое, когда судно движется в неуправляемом состоянии

116. Główne parametry charakteryzujące śrubę napędową jednostki pływającej to:
A. średnica wału śruby
B. skok śruby i średnica śruby
C. prędkość kątowa
116. Основными параметрами, характеризующими гребной винт плавсредства, являются:
A. диаметр вала винта
B. шаг винта и диаметр винта  $
C. угловая скорость

117. Przy śrubie lewoskrętnej pracującej wstecz rufa jest:
A. zarzucana w prawą stronę
B. zarzucana w lewą stronę
C. niezarzucana
117. При левозакрученном винте, работающем задним ходом, корму:
А. ведет в правую сторону $
B. ведет в левую сторону
С. не влияет

118. Przy śrubie prawoskrętnej pracującej wstecz rufa jest:
A. zarzucana w lewą stronę
B. zarzucana w prawą stronę
C. nie zarzucana
118. При правозакрученном винте, работающем задним ходом, корму:
А. ведет в правую сторону
B. ведет в левую сторону $
С. не влияет

119. Ile koni mechanicznych ma 1 kW:
A. 1,85 KM
B. 1,56 KM
C. 1,36 KM
119. Сколько лошадиных сил в 1 кВт:
А. 1,85 км
B. 1,56 км
С. 1,36 км $

120. Czy silnik dwusuwowy jest wyposażony w miskę olejową:
A. nie
B. tak
C. zależnie od producenta
120. Оснащен ли двухтактный двигатель масляным поддоном:
А. Нет $
B. Да
C. В зависимости от производителя

121. Jak często należy sprawdzać, czy prawidłowo działa chłodzenie silnika?
A. na początku sezonu
B. przy każdej wymianie oleju
C. każdorazowo, zaraz po uruchomieniu silnika
121. Как часто вы должны проверять, правильно ли работает охлаждение двигателя?
А. в начале сезона
B. при каждой замене масла
C. каждый раз, сразу после запуска двигателя $

122. Tzw. zrywkę na silniku zaburtowym należy:
A. przymocować do elementu jachtu solidnie zamocowanego do kadłuba
B. pozostawić luźno zwisającą
C. założyć na nadgarstek lub inną część ciała sternika
122. Так называемый рывок на подвесном двигателе должен:
A. прикрепить к элементу яхты, прочно прикрепленному к корпусу
B. оставьте свободно свисать
C. надеть на запястье или другую часть тела рулевого $

123. Przed wyłączeniem (odstawieniem) silnika należy:
A. zakręcić dopływ paliwa do filtra
B. przegazować i odstawić silnik na wysokich obrotach
C. zredukować obroty do minimalnych na biegu jałowym
123. Перед выключением (снятием) двигателя необходимо:
A. закрыть подачу топлива к фильтру
B. перегазовать и поставить двигатель на высокие обороты
C. уменьшить обороты до минимума на холостом ходу $

124. Uzupełnianie paliwa podczas pracy silnika:
A. jest dozwolone
B. jest zabronione
C. jest dozwolone pod warunkiem pracy silnika na biegu jałowym
124. заправка топлива при работе двигателя:
А. допускается
B. запрещается $
C. допускается при условии работы двигателя на холостом ходу

125. Wymiana wirnika pompy wodnej w silniku stacjonarnym:
A. jest czynnością, którą każdy prowadzący jednostkę pływającą powinien umieć wykonać samodzielnie
B. jest skomplikowaną czynnością serwisową wykonywaną rzadko, jedynie przez wykwalifikowane serwisy i wymagającą wyjęcia jachtu z wody
C. powinna być wykonywana przez serwis nie rzadziej niż raz na miesiąc
125. Замена крыльчатки водяного насоса в стационарном двигателе:
А. это действие, которое каждый, кто управляет плавсредством, должен уметь выполнять самостоятельно  $
B. сложная сервисная деятельность, выполняемая редко, только квалифицированными сервисами и требующая извлечения яхты из воды
C. должно выполняться сервисом не реже одного раза в месяц

126. Przełączanie biegu od razu z naprzód" na „wstecz" jest:
A. dozwolone, lecz wiąże się z nieprzyjemnym dla ucha zgrzytem
B. bezwzględnie zabronione - może prowadzić do poważnego uszkodzenia przekładni
C. zalecane, gdyż zapewnia sprawne manewrowanie w porcie
126. Переключение передач сразу с "вперед" На "назад":
А. разрешено, но связано с неприятным для уха скрежетом
B. строго запрещено-может привести к серьезному повреждению трансмиссии $
C. рекомендуется, так как обеспечивает плавное маневрирование в порту

127. Paliwo dla silnika zaburtowego to:
A. zawsze czysta etylina
B. zawsze mieszanka etylina-olej
C. czysta etylina lub mieszanka etylina-olej w zależności od typu silnika
127. Топливо для подвесного двигателя:
А. всегда чистый бензин
B. всегда смесь бензина с маслом
C. чистый бензин или смесь бензина с маслом в зависимости от типа двигателя $

128. Do sterowania obrotami silnika służy:
A. obrotomierz
B. wihajster
C. manetka
128. Для управления оборотами двигателя используется:
A. тахометр
B. переключатель передач
C. ручка газа $

129. Czy ratowanie życia ludzkiego na morzu jest płatne?
A. jest płatne, więc należy wykupić specjalne ubezpieczenie
B. jest bezpłatne
C. jest bezpłatne podobnie jak ratowanie jachtów
129. Cпасение жизни людей на море:
A. оплачивается, поэтому необходимо приобрести специальную страховку
B. это бесплатно  $
C. это бесплатно, как и спасение яхт

130. Ratownictwem morskim załóg jednostek pływających zajmuje się:
A. SAR
B. WOPR
C. SAS
130. Морским спасением экипажей плавсредств занимается:
А. SАR $
B. WOPR
C. SAS

131. Po zauważeniu czerwonej rakiety spadochronowej należy:
A. szybko oddalić się jak najdalej od niebezpieczeństwa
B. spróbować nawiązać kontakt, postarać się przekazać informację do stacji brzegowej, jeśli możemy to powinniśmy pospieszyć z pomocą, gdyż czyjeś życie jest zagrożone
C. odpowiedzieć na pozdrowienie również wystrzeliwując czerwoną rakietę spadochronową
131. При обнаружении Красной сигнальной ракеты необходимо:
А. быстро удалиться как можно дальше от опасности
B. попытаться установить контакт, попытаться передать информацию на береговую станцию, если мы можем, мы должны поспешить на помощь, потому что чья-то жизнь находится под угрозой $
C. ответить на приветствие, также запустив красную сигнальную ракету

132. Rakiety wyrzucające czerwone gwiazdki, wystrzeliwane w krótkich odstępach czasu oznaczają:
A. sygnał wzywania pomocy
B. urodziny kapitana
C. sygnał nie zbliżać się"
132. Ракеты, стреляющие красными вспышками, запускаемые в быстрой последовательности, означают:
A. сигнал бедствия $
B. день рождения капитана
C. сигнал “не приближаться"

133. Na jachcie morskim należy stosować:
A. kamizelki asekuracyjne, gdyż są wygodne i nie krępują ruchów
B. wyłącznie kamizelki ratunkowe w kolorze pomarańczowym z atestem SOLAS
C. kamizelki ratunkowe, również pneumatyczne zintegrowane z pasami asekuracyjnymi, gdyż w odróżnieniu od kamizelek asekuracyjnych zapewniają odwrócenie człowieka twarzą do góry z ustami ponad wodą
133. На морской яхте следует использовать:
А. страховочные жилеты, так как они удобны и не стесняют движений
B. только спасательные жилеты оранжевого цвета с сертификатом SOLAS
C. спасательные жилеты, также пневматические, интегрированные в страховочные пояса, поскольку в отличие от страховочных жилетов они обеспечивают переворачивание человека лицом вверх с ртом над водой  $

134. Człowiek stojący na jachcie i zataczający kręgi dowolnym przedmiotem lu podnoszący powoli do góry i opuszczający wyprostowane ręce to:
A. osoba, która się dobrze bawi
B. osoba, która wzywa pomocy
C. osoba przekazująca informację: „nie zbliżajcie się do nas"
134. Человек, стоящий на яхте и сигнализирующий круговыми движениями любыми предметами, медленно поднимающийся вверх и опускающий руки вниз:
А. человек, который развлекается
B. человек, который обращается за помощью  $
C. лицо, передающее информацию: "не приближайтесь к нам"

135. Aby wezwać pomoc, należy:
A. używać wszelkich dostępnych środków - zależnie od akwenu, odległości od brzegu oraz wyposażenia jednostki
B. stosować się ściśle do przepisów lokalnych w zakresie organizacji służb ratowniczych
C. postępować zgodnie z konwencją MARPOL
135. Чтобы позвать на помощь, необходимо:
A. использовать все доступные средства в зависимости от водоема, расстояния от берега и оборудования судна $
B. строго соблюдать местные правила в отношении аварийных служб
C. следовать соглашению MARPOL

136. Uruchamianie pirotechnicznych środków sygnalizacyjnych powinno być przeprowadzane:
A. na dowolnej burcie statku
B. wyłącznie na burcie zawietrznej statku
C. wyłącznie na burcie nawietrznej statku
136. Запуск пиротехнических сигнальных средств должен осуществляться:
A. на любом борту судна
B. только на подветренном борту судна $
C. только на наветренном борту судна

137. Na jachcie śródlądowym do 12 m długości z 6-osobową załogą:
A. wystarczy 5 kamizelek ratunkowych lub asekuracyjnych
B. powinno być 1 koło ratunkowe i 6 kamizelek ratunkowych
C. wystarczą 3 kola ratunkowe, kamizelki są wtedy zbędne
137. При хождении на яхтах во внутренних водах длиной до 12 м с экипажем из 6 человек:
A. достаточно 5 спасательных или страховочных жилетов
B. должно быть 1 спасательный круг и 6 спасательных жилетов $
C. достаточно 3 спасательных круга, тогда жилеты лишние

138. Obowiązkowe wyposażenie każdego jachtu o długości ponad 3,5 m napędzanego silnikiem spalinowym to:
A. środki ratunkowe, apteczka, gaśnica
B. środki ratunkowe, apteczka
C. środki ratunkowe, gaśnica
138. Обязательным оснащением любой яхты длиной более 3,5 м, приводимой в движение двигателем внутреннего сгорания, является:
А. спасательные средства, аптечка первой помощи, огнетушитель $
B. спасательные средства, аптечка
C. спасательные средства, огнетушитель

139. Na jeden cykl przy resuscytacji krążeniowo-oddechowej składa się:
A. 10 ucisków z częstotliwością ok. 60 na min. 3 wdmuchnięcia
B. 30 ucisków z częstotliwością ok. 100 na min. 2 wdmuchnięcia
C. 20 ucisków z częstotliwością ok. 100 na min. 2 wdmuchnięcia
139. Один цикл сердечно-легочной реанимации состоит из:
А. 10 компрессий с частотой около 60 в мин. 3 вдоха воздуха
B. 30 компрессий с частотой около 100 в мин. 2 вдоха воздуха $
C. 20 компрессий с частотой около 100 в мин. 2 вдоха воздуха

140. Wyporność typowej kamizelki ratunkowej dla osoby dorosłej wynosi?
A. 200-300 N
B. 100-150 N
C. 300-400 N
140. Плавучесть типичного спасательного жилета для взрослого составляет?
А. 200-300 Н
B. 100-150 N $
C. 300-400 N

141. Pierwszą czynnością, którą robi kapitan po wywrotce jachtu, jest:
A. przeliczenie załogi i założenie pasów ratunkowych
B. zabezpieczenie sprzętu
C. płynięcie wpław do brzegu
141. Первое действие, которое делает капитан после опрокидывания яхты, - это:
А. пересчет экипажа и установка спасательных поясов $
B. защита оборудования
C. плавание вплавь к берегу

142. W przypadku stwierdzenia przybywania wody w kadłubie jachtu morskiego należy:
A. sprawdzić, czy jest to woda morska, czy słodka, następnie działać odpowiednio do sytuacji
B. niezwłocznie wezwać służby ratownicze
C. przygotować załogę do ewakuacji
142. При обнаружении поступления воды в Корпус морской яхты необходимо:
A. проверить, является ли это морской или пресной водой, затем действовать в соответствии с ситуацией $
B. немедленно вызвать спасательные службы
С. подготовить экипажа к эвакуации

143. Po podjęciu człowieka z wody:
A. należy mu podać 50g alkoholu aby się rozgrzał, dać suche ubrania do przebrania
B. nie wolno mu podawać alkoholu - należy podać ciepłą herbatę i suche ubrania
C. należy podać mu środki uspokajające
143. После взятия человека из воды:
А. ему нужно дать 50 г спирта, чтобы согреться, дать сухую одежду для переодевания
B. ему нельзя давать алкоголь-нужно давать теплый чай и сухую одежду  $
C. ему следует дать успокоительные

144. Podczas holowania jachtu przez inną jednostkę, o prędkości zestawu decyduje:
A. kapitan jednostki holującej
B. kapitan jednostki holowanej
C. zapis w przepisach lokalnych
144. При буксировке яхты другим агрегатом скорость установки определяется:
А. капитаном буксирующего судна
B. капитаном буксируемого судна $
C. требованиями местного законодательства

145. Mając do czynienia z osobą nieprzytomną należy:
A. najpierw sprawdzić oddech
B. niezwłocznie rozpocząć sztuczne oddychanie
C. jak najszybciej zasięgnąć porady lekarza i działać dokładnie wg jego instrukcji
145. Имея дело с бессознательным человеком, необходимо:
A. сначала проверить дыхание $
B. немедленно начать искусственное дыхание
C. как можно скорее обратиться к врачу и действовать точно в соответствии с его инструкциями

146. Udrażnianie dróg oddechowych polega na:
A. odchyleniu głowy do tyłu i uniesieniu żuchwy do góry
B. ułożeniu ratowanego w pozycji bocznej ustalonej
C. podaniu środka znieczulającego
146. Очистка дыхательных путей заключается в том чтобы:
A. наклонить голову назад и поднять нижнюю челюсть вверх $
B. положить спасаемого на бок
C. ввести анестетики

147. W przypadku zauważenia omdlenia należy:
A. rozpocząć masaż serca
B. ułożyć w pozycji bocznej ustalonej i dostarczyć świeżego powietrza
C. użyć defibrylatora
147. При обнаружении обморока следует:
A. начать массаж сердца
B. положить в фиксированное боковое положение и подать свежий воздух $
C. использовать дефибриллятор

148. Defibrylator służy do:
A. gaszenia pożaru w przedziale silnikowym
B. odkażania ran
C. przywracania prawidłowej akcji serca
148. Дефибриллятор используется для:
А. пожаротушение в моторном отсеке
B. обеззараживание ран
C. восстановления нормального сердечного ритма $

149. Użycie automatycznego defibrylatora jest:
A. skomplikowane i wymaga fachowego przeszkolenia
B. proste i możliwe do wykonania dla każdego - należy postępować zgodnie z instrukcjami głosowymi i piktogramami
C. dopuszczalne wyłącznie dla osób o wykształceniu medycznym
149. Использование автоматического дефибриллятора:
A. сложный процесс и требует профессиональной подготовки
B. просто и выполнимо для всех - следуйте голосовым инструкциям и пиктограммам $
C. допускается только для лиц с медицинским образованием

150. W przypadku poparzenia skóry należy:
A. miejsce oparzone zdezynfekować spirytusem lub wodą utlenioną
B. miejsce poparzone schłodzić wodą i zabezpieczyć jałowym kompresem. a następnie jak najszybciej dotrzeć do lekarza
C. nic nie robić samemu, jak najszybciej dotrzeć do lekarza
150. При ожоге кожи необходимо:
A. продезинфицировать обожженное место спиртом или перекисью водорода
B. обожженное место охладить водой и защитить стерильным компрессом, а затем как можно скорее обратиться к врачу $
C. ничего не делать самостоятельно, как можно скорее обратиться к врачу

151. Przy zranieniach z obfitym upływem krwi należy:
A. zatamować wyciek krwi bezpośrednio na ranie
B. przykleić plaster
C. podać środki rozkurczowe
151. При ранениях с обильным кровотоком необходимо:
А. протереть кровь прямо на ране $
B. приклеить пластырь
C. дать диастолические средства

152. Krwawienie tętnicze charakteryzuje się:
A. intensywnym wypływaniem jasnej krwi
B. powolnym wypływaniem ciemnej krwi
C. przedostawaniem się krwi do wnętrza ciała
152. Артериальное кровотечение характеризуется:
А. интенсивным выделением светлой крови $
B. медленным вытеканием темной крови
C. попаданием крови внутрь тела

153. Krwawienie żylne charakteryzuje się:
A intensywnym wypływaniem jasnej krwi
B. powolnym wypływaniem ciemnej krwi
C. przedostawaniem się krwi do wnętrza ciała
153. Венозное кровотечение характеризуется:
А. интенсивным выделением светлой крови
B. медленным вытеканием темной крови $
С. попаданием крови внутрь тела

154. Krwotok wewnętrzny charakteryzuje się:
A. intensywnym wypływaniem jasnej krwi
B. powolnym wypływaniem ciemnej krwi
C. przedostawaniem się krwi do wnętrza ciała
154. Внутреннее кровоизлияние характеризуется:
А. интенсивным выделением светлой крови
B. медленным вытеканием темной крови
C. попаданием крови внутрь тела $

155. Przy poparzeniu kwasem akumulatorowym należy:
A. wytrzeć, a następnie zmyć miejsce poparzone dużą ilością wody, założyć jałowy opatrunek
B. niezwłocznie zawinąć poparzenie bandażem
C. podać środki uspokajające
155. При ожоге аккумуляторной кислотой необходимо:
A. протереть, а затем промыть место, обожженное большим количеством воды, надеть стерильную повязку $
B. немедленно обернуть ожог повязкой
C. дать успокоительные

156. Apteczka jachtowa powinna zawierać:
A. środki opatrunkowe, środki dezynfekcyjne oraz inne w przypadku dłuższych rejsów
B. wyłącznie środki przeciwko chorobie morskiej
C. lekarstwa homeopatyczne
156. Аптечка яхты должна содержать:
A. перевязочные, дезинфицирующие и другие средства для длительных круизов $
B. только меры против морской болезни
C. гомеопатические лекарства

157. W przypadku odcięcia lub urwania palca należy:
A. pozbyć się urwanej części, ranę zdezynfekować i zabezpieczyć, udać się jak najszybciej do lekarza
B. zabezpieczyć w niskiej temperaturze urwaną część, ranę zabezpieczyć, udać się jak najszybciej do lekarza, gdyż jest szansa na przyszycie palca
C. udać się jak najszybciej do lekarza, samodzielnie nie podejmować żadnych działań
157. Если палец отрезан или оторван, необходимо:
A. избавиться от оторванной части, продезинфицировать и защить рану, обратиться к врачу как можно скорее
B. обезопасить при низкой температуре оторванную часть, защитить рану, как можно скорее обратиться к врачу, так как есть шанс пришить палец  $
C. как можно скорее обратиться к врачу, самостоятельно не предпринимать никаких действий

158. W przypadku urazu kończyny z prawdopodobnym złamaniem należy:
A. wyłącznie zdezynfekować miejsce urazu
B. usztywnić dwa sąsiednie stawy
C. wyłącznie wezwać pomoc medyczną
158. В случае травмы конечности с вероятным переломом необходимо:
А. только продезинфицировать место травмы
B. укрепить два соседних сустава $
C. только обратиться за медицинской помощью

159. Czas od wpadnięcia do wody do momentu wystąpienia hipotermii jest zależny:
A. wyłącznie od temperatury wody
B. od temperatury wody, rodzaju ubrania i kondycji fizycznej wpadającego
C. wyłącznie od wieku wpadającego
159. Время от падения в воду до начала переохлаждения зависит:
А. исключительно от температуры воды
B. от температуры воды, типа одежды и физического состояния падающего $
С. исключительно от возраста

160. Po podjęciu na pokład osoby z objawami hipotermii należy niezwłocznie
A. zapewnić suche ubrania, podać coś ciepłego do picia i zapewnić możliwość rozgrzania
B. zapewnić suche ubrania, podać rozgrzewającą herbatę z alkoholem
C. przeprowadzić wywiad z rozbitkiem
160. После того, как люди с симптомами переохлаждения будут приняты на борт, следует немедленно
A. обеспечить сухую одежду, дать что-нибудь теплое для питья и обеспечить возможность согреться $
B. обеспечить сухую одежду, дать согревающий чай с алкоголем
C. взять интервью у потерпевшего кораблекрушение

161. Hipotermia jest to zjawisko:
A. polegające na przechłodzeniu organizmu
B. atmosferyczne związane z przechodzeniem frontu chłodnego
C. związane z urazem ciśnieniowym organizmu
161. Переохлаждение это явление:
А. переохлаждения организма $
B. атмосферное, связанное с прохождением холодного фронта
C. связанное с травмой давления тела

162. Średni czas przeżycia człowieka w wodzie o temperaturze 10°C wynosi:
A. ponad 3 godziny
B. około 2 godzin
C. około 6 godzin
162. Среднее время выживания человека в воде с температурой 10°C составляет:
A. более 3 часов
B. около 2 часов $
C. около 6 часов

163. Pozycja, HELP to:
A. ułożenie ciała rozbitka w wodzie w pozycji embrionalnej, z kończynami przy tułowiu
B. pozycja rozbitka przyjmowana podczas ewakuacji do helikoptera
C. pozycja rozbitków, która ułatwi zauważenie i uratowanie przez samoloty SAR
163. Позиция, HELP это:
А. положение тела потерпевшего кораблекрушение в воде в позе эмбриона с конечностями у туловища $
B. положение потерпевшего кораблекрушение, принятое во время эвакуации на вертолет
C. положение потерпевших кораблекрушение, которое облегчит обнаружение и спасение самолетами SAR

164. Jakie zachowanie grupy rozbitków gwarantuje najdłuższe przeżycie w wodzie?
A. przyjęcie pozycji embrionalnej przez każdego z rozbitków
B. przyjęcie pozycji bocznej ustalonej przez każdego z rozbitków
C. przyjęcie pozycji “CLINCH" (kilka osób ciasno objętych) przez grupę
rozbitków
164. Какое поведение группы выживших гарантирует самое длительное выживание в воде?
А. принятие эмбрионального положения каждым выжившим
B. принятие бокового положения, установленного каждым из потерпевших кораблекрушение
C. принятие позиции “CLINCH" (несколько человек плотно охвачены) группой
потерпевших кораблекрушение $

165. Co to są sztormliny?
A. liny do holowania małych statków podczas sztormu
B. liny zabezpieczające osprzęt pokładowy przed zmyciem za burtę podczas sztormu
C. liny biegnące wzdłuż kadłuba, przygotowane do wpięcia pasów bezpieczeństwa, co zapobiega wypadnięciu za burtę załogi podczas pracy na pokładzie podczas sztormu
165. Что такое штормовые ремни?
A. канаты для буксировки небольших судов во время шторма
B. тросы для защиты бортового оборудования от смывания за борт во время шторма
C. тросы, идущие вдоль корпуса, подготовленные для пристегивания ремней безопасности, что предотвращает падение экипажа за борт при работе на палубе во время шторма $

166. Co należy zrobić zaraz po wypadnięciu człowieka za burtę?
A. ogłosić alarm, rzucić koło ratunkowe i wykonać manewr.człowiek za burtą
B. niezwłocznie wezwać pomocy
C. skoczyć za ním z kamizelką ratunkową
166. Что делать сразу после того, как человек упал за борт?
A. объявить тревогу, бросить спасательный круг и выполнить маневр человек за бортом $
B. немедленно вызвать помощь
C. прыгнуть за ним с спасательным жилетом

167. Statki ratownicze SAR mają za zadanie:
A. podjąć osoby znajdujące się na statku ratowanym i jeśli warunki pozwalają, to holować statek do portu
B. podjąć osoby znajdujące się na statku ratowanym i nie wolno im holować statku
C. holować statek ratowany do portu wraz ze wszystkimi osobami na pokładzie
167. Спасательные суда SAR имеют задачу:
A. взять людей, находящихся на спасаемом корабле, и, если позволяют условия, буксировать судно в порт
B. принимать лиц, находящихся на спасаемом судне, и им не разрешается буксировать судно $
C. буксировать спасаемое судно в порт вместе со всеми на борту

168. Na rejsie morskim ćwiczebny alarm człowiek za burtą" powinien być przeprowadzony:
A. niezwłocznie po wyjściu z portu
B. nie później niż na 24 godziny od wyjścia z portu
C. niezwłocznie po zaokrętowaniu
168. В морском круизе учение о тревоге человек за бортом " должен быть проведен:
A. сразу после выхода из порта
B. не позднее чем через 24 часа после выхода из порта $
C. сразу после посадки

169. Manewry portowe należy wykonywać:
A. z minimalną prędkością zapewniającą manewrowość
B. z prędkością nie większą niż 2 węzły
C. z prędkością nie mniejszą niż 2 węzły
169. Маневры в марине (бухте) должны быть выполнены:
A. с минимальной скоростью для маневренности $
B. со скоростью не более 2 узлов
C. со скоростью не менее 2 узлов

170. Morska łączność radiowa rozpoczynająca się od „MAYDAY, MAYDAY, MAYDAY" to:
A. łączność pilna, gdy nie ma bezpośredniego zagrożenia życia ludzkiego (np. transport medyczny, porada medyczna, wezwanie asysty holownika)
B. sygnał wzywania pomocy
C. ostrzeżenie sztormowe
170. Морская радиосвязь, начинающаяся с "MAYDAY, MAYDAY, MAYDAY":
A. срочная связь, когда нет непосредственной угрозы жизни человека (например, медицинский транспорт, медицинская консультация, вызов помощи буксира)
B. сигнал бедствия $
C. штормовое предупреждение

171. Na morzu łączność radiowa rozpoczynająca się od SECURITE, SECURITE, SECURITE" to:
A. łączność pilna (Urgency), gdy nie ma bezpośredniego zagrożenia życia ludzkiego (np. transport medyczny, porada medyczna, wezwanie asysty holownika)
B. łączność dla zapewnienia bezpieczeństwa (Safety), np. ostrzeżenie o zauważonym niebezpieczeństwie, ostrzeżenia nawigacyjne, ostrzeżenia sztormowe
C. sygnał wzywania pomocy
171. В море радиосвязь, начинающаяся с SECURITE, SECURITE, SECURITE":
A. срочная связь (Urgency), когда нет непосредственной угрозы жизни человека (например, медицинский транспорт, медицинская консультация, вызов помощи буксира)
B. подключение для обеспечения безопасности (Safety), например, предупреждение об обнаруженной опасности, навигационные предупреждения, штормовые предупреждения $
C. сигнал бедствия

172. Na morzu łączność radiowa rozpoczynająca się od „PAN-PAN, PAN-PAN, PAN- PAN" to:
A. łączność pilna (Urgency), gdy nie ma bezpośredniego zagrożenia życia ludzkiego (np. transport medyczny, porada medyczna, wezwanie asysty holownika)
B. sygnał wzywania pomocy
C. ostrzeżenie sztormowe
172. В море радиосвязь, начинающаяся с "Пан-Пан, Пан-Пан, Пан - Пан", - это:
A. срочная связь (Urgency), когда нет непосредственной угрозы жизни человека (например, медицинский транспорт, медицинская консультация, вызов помощи буксира) $
B. сигнал бедствия
C. штормовое предупреждение

173. Gaśnicą pianową nie wolno gasić:
A. urządzeń elektrycznych
B. otwartego ognia
C. elementów drewnianych
173. Пенным огнетушителем нельзя тушить:
A. электрические приборы $
B. открытый огонь
C. деревянные элементы

174. Gaśnica proszkowa służy do gaszenia:
A. urządzeń elektrycznych i urządzeń w przedziale silnikowym
B. wyłącznie pożarów na otwartych pokładach
C. wyłącznie płonących paliw
174. Порошковый огнетушитель используется для тушения:
A. электрооборудования и оборудования в моторном отсеке $
B. только пожаров на открытых палубах
C. только горящего топлива

175. Prawidłowy sposób użycia gaśnicy proszkowej to:
A. wstrząsnąć, odwrócić gaśnicę tak, aby głowica była na dole i nacisnąć spust
B. wstrząsanie nie jest konieczne, należy gaśnicę odwrócić głowicą do dołu i nacisnąć spust
C. wstrząsnąć, trzymać gaśnicę głowicą do góry, nacisnąć na chwilę spust, zwolnić, a następnie nacisnąć spust ponownie
175. Правильный способ использования порошкового огнетушителя:
A. встряхнуть, перевернуть огнетушитель так, чтобы головка была внизу, и нажать на спусковой крючок
B. встряхивать не требуется, огнетушитель следует перевернуть головой вниз и нажать на спусковой крючок
C. встряхнуть, удерживать головку огнетушителя вверх, нажав на курок на мгновение, отпустив, а затем снова нажав на курок $

176. Po zauważeniu požaru na statku w ruchu należy:
A. ustawić się na takim kursie, żeby wiatr nie rozprzestrzeniał pożaru na Inne części statku
B. z maksymalną prędkością płynąć do portu
C. niezwłocznie opuścić jednostkę
176. Заметив пожар на корабле в движении, следует:
A. установить такой курс, чтобы ветер не распространял огонь на другие части корабля $
B. на максимальной скорости плыть в порт
C. немедленно покинуть судно

177. Doprowadzenie do celowego i kontrolowanego osadzenia jednostki na piaszczystym brzegu, płytkiej wodzie lub na mieliźnie nazywamy:
A. sztormowaniem
B. plażowaniem
C. sztrandowaniem
177. Приведение к преднамеренной и контролируемой посадке судна на песчаный берег, мелководье или на мель называется:
А. штормовкой
B. пляжование
C.швартовкой в (на) берег $

178. Sztrandowanie wykonujemy:
A. praktycznie na każdym brzegu i rodzaju dna
B. z największą ostrożnością, po starannym wybraniu miejsca sztrandowania
C. na skalistych wysepkach
178. Швартовку на (в) мы выполняем:
А. практически на каждом берегу и типе дна
B. с наибольшей осторожностью, после тщательного выбора места швартовки на (в) $
С. на скалистых островках

179. Sztrandowanie wykonujemy:
A. jedynie w sytuacji awaryjnej, gdyż zawsze wiąże się z ryzykiem uszkodzenia kadłuba
B. często, gdyż jest to wygodny manewr cumowania
C. przy dużej prędkości jachtu
179. Швартовку на (в) берег выполняем:
А. только в аварийной ситуации, так как всегда сопряжено с риском повреждения корпуса $
B. часто, так как это удобный маневр швартовки
C. на высокой скорости яхты

180. Przy wietrze powyżej 8°B zaleca się sztormowanie (jeśli akwen na to pozwala):
A. pod wiatr i falę
B. wyłącznie w dryfie
C. z wiatrem
180. При ветре выше 8 ° b рекомендуется глиссировать (если водоем позволяет):
A. против ветра и волны
B. исключительно в дрейфе
С. с ветром $

181. Mycie pokładu jachtu stojącego przy kei, z wykorzystaniem detergentów:
należy wykonywać codziennie dla zapewnienia czystości kadłuba
jest szkodliwe dla środowiska, więc należy tego unikać
jest szkodliwe dla drewnianych elementów pokładu, więc należy tego unikać
181. Мойка палубы яхты, стоящей у причала, с использованием моющих средств:
A. необходимо выполнять ежедневно для обеспечения чистоты корпуса
B. это вредно для окружающей среды, поэтому этого следует избегать $
C. это вредно для деревянных элементов палубы, поэтому этого следует избегать

182. Jakiego typu środki czystości należy używać na jachcie?
powierzchniowo czynne
biodegradowalne
niskopieniace
182. Какие чистящие средства следует использовать на яхте?
поверхностно-активные
биоразлагаемые $
малопенистые

183. Odprowadzenie nieczystości z WC “typu morskiego” wprost do wody na śródlądziu:
jest zabronione
jest dozwolone, ale jest niewskazane
jest dozwolone na niektórych akwenach
183. Отвод нечистот из туалета "морского типа" прямо в воду на внутренней поверхности:
запрещено $
это разрешено, но не рекомендуется
разрешено в некоторых водоемах

184. Na jachcie morskim używanie kingstona (WC) w porcie jest dozwolone:
bez ograniczeń
tylko w porcie o intensywnej wymianie wody
wyłącznie jeżeli jacht jest wyposażony w zbiornik fekaliów i odpływ ze zbiornika jest zamknięty
184. На морской яхте разрешено использование Kingston (WC) в гавани:
без ограничений
только в порту с интенсивным водообменом
только если яхта оборудована резервуаром для фекалий и сток из резервуара закрыт $

185. Zawartość WC chemicznego można opróżnić:
bezpośrednio za burtę, ale w odległości min. 50m od brzegu
do dowolnej toalety lądowej
tylko w miejscach do tego przeznaczonych (porty, kempingi, stacje benzynowe)
185. Содержимое химического туалета можно опорожнить:
прямо за борт, но на расстоянии мин. 50м от берега
для любого наземного туалета
только в местах, предназначенных для этого (порты, кемпинги, заправочные станции) $

186. Odpadki (śmieci) powstające na jachcie podczas rejsu należy:
wyrzucić za burtę, jednak nie bliżej niż 200 m od brzegu
dostarczyć do selektywnego punktu odbioru odpadów, właściwego dla gminy, na której terenie się znajdujemy
wrzucić do pojemnika na odprawy w najbliższym porcie
186. Отходы (мусор), образующиеся на яхте во время круиза, должны:
выбросить за борт, но не ближе 200 м от берега
доставить в селективный пункт сбора отходов, подходящий для муниципалитета, на территории которого мы находимся
бросить в контейнер для регистрации в ближайшем порту $

187. Jednostki używane na mapie morskiej do określenia głębokości
to zawsze są metry
to zawsze są tężnie
mogą być różne i są zawsze podane na mapie
187. Единицы, используемые на морской карте для определения глубины
это всегда метры
это всегда сажени
они могут быть разными и всегда указаны на карте $

188. Do pomiaru głębokości używa się:
echosondy lub sondy ręcznej
namiernika
logu
188. Для измерения глубины используется:
эхолот или ручной зонд $
линейка
веревкой с грузом

189. Liczba określająca głębokość, podana w danym punkcie na mapie:
jest zawsze zgodna z odczytem echosondy jachtu znajdującego się w danym miejscu
powinna być interpretowana zgodnie ze wskazówkami umieszczonymi na mapie (m.in. jednostki, zero mapy) i z reguły jest to minimalna głębokość jaka może wystąpić w tym miejscu
to zawsze jest głębokość jaka może wystąpić w tym punkcie podana w metrach
189. Число, определяющее глубину, указанное в данной точке на карте:
оно всегда соответствует показаниям эхолота яхты, расположенной в данном месте
оно должна быть интерпретировано в соответствии с указаниями, размещенными на карте (m.in. единицы, ноль карты), и, как правило, это минимальная глубина, которая может возникнуть в этом месте $
это всегда глубина, которая может возникнуть в этой точке, указанной в метрах

190. Znaki i skróty stosowane na mapach morskich:
są jednakowe u wszystkich wydawców map na całym świecie
sa wyjasnione w legendzie umieszczonej zawsze w lewym dolnym rogu mapy
są publikowane przez wydawców map w odrębnych wydawnictwach
190. Знаки и сокращения, используемые на морских картах:
они одинаковы для всех издателей карт по всему миру
они объясняются в легенде, всегда расположенной в левом нижнем углу карты
они публикуются издателями карт в отдельных издательствах $

191. Rovnik to:
południk przechodzący przez Greenwich
dowolny rownoleznik
równoleżnik na szerokości geograficznej 0°
191. Экватор это:
меридиан, проходящий через Гринвич
любая параллель
параллель на широте 0° $

192. Wycinek koła wielkiego przechodzącego przez oś Ziemi to:
naezdnik
dowolny południk
dowolny rownoleznik
192. Вырез большого круга, проходящего через ось Земли:
ось вращения
любой меридиан $
любая параллель

193. Mapy w dużej skali:
obejmują mniejszy obszar, ale z większą ilością szczegółów
obejmują wiekszy obszar, ale z mniejsza iloscia szczegolow
są drukowane na arkuszach o większych wymiarach
193. Крупномасштабные карты:
покрывают меньшую площадь, но с большей детализацией $
охватывают большую площадь, но с меньшим количеством деталей
печатаются на листах большего размера

194. Mapy w małej skali:
obejmują mniejszy obszar, ale z większą ilością szczegółów
obejmują wiekszy obszar, ale z mniejsza iloscia szczegolow
są drukowane na arkuszach o mniejszych wymiarach
194. Мелкомасштабные карты:
покрывают меньшую площадь, но с большей детализацией
охватывают большую площадь, но с меньшим количеством деталей $
печатаются на листах меньшего размера

195. Mapy elektroniczne:
należy używać zamiast papierowych, gdyż są zawsze bardziej aktualne
sa dobra pomoca nawigacyjna, ale nalezy zwrocic uwage na źródło ich pochodzenia; należy posiadać również mapy papierowe
nie są dopuszczone do użytku w nawigacji
195. Электронные карты:
должны использовать вместо бумажных, так как они всегда более актуальны
являются хорошим навигационным средством, но вы должны обратить внимание на источник их происхождения; также вы должны иметь бумажные карты $
не разрешены для использования в навигации

196. Wydawnictwa nazywane locjami opisują:
międzynarodowy system oznakowania dróg śródlądowych lub morskich
akweny oraz wybrzeża dla zapewnienia bezpieczeństwa i sprawności żeglugi
międzynarodowe przepisy dotyczące oświetlenia nocnego statków
196. Издательства, называемые лоциями, описывают:
международную систему маркировки внутренних или морских дорог
акваторию и берега для обеспечения безопасности и эффективности судоходства $
международные правила ночного освещения судов

197. Południk o numerze “0” to:
południk przechodzący przez Lizbonę
południk przechodzący przez Greenwich
południk przechodzący przez Waszyngton
197. Меридиан с номером "0":
меридиан, проходящий через Лиссабон
меридиан, проходящий через Гринвич $
меридиан, проходящий через Вашингтон

198. Izobaty sa to:
linie łączące punkty o takim samym ciśnieniu atmosfery
linie łączące punkty o takiej samej gęstości wody
linie łączące punkty o takiej samej głębokości
198. Изобаты это:
линии, соединяющие точки с одинаковым давлением атмосферы
линии, соединяющие точки с одинаковой плотностью воды
линии, соединяющие точки одинаковой глубины $

199. Numeru kanału radiowego do komunikacji z kapitanem portu należy szukać:
w locji
w dzienniku jachtowym
we właściwym tomie Admiralty Tide Tables
199. Номер радиоканала для связи с капитаном порта нужно искать:
в лоции $
в журнале яхт
в правильном томе Admiralty Tide Tables

200. Mapy oraz locje wydane 9 lat temu:
A. są nadal całkowicie aktualne
B. absolutnie nie mogą być wykorzystywane do nawigacji
C. mogą być wykorzystywane do nawigacji pod warunkiem naniesienia dostępnych poprawek i podejścia do informacji z nich pozyskanych z ograniczonym zaufaniem
200. Карты и лоции, выпущенные 9 лет назад:
А. все еще полностью актуальны
B. абсолютно не могут использоваться для навигации
C. могут использоваться для навигации при условии внесения доступных исправлений и подхода к информации, полученной из них с ограниченным доверием $

201. Do ręcznego pomiaru prędkości służy:
A. log burtowy
B. bukszpryt
C. pelengator
201. Для ручного измерения скорости используется:
А. бортовой Лаг $
B. бушприт
C. пеленгатор

202. Log to urządzenie podające:
A. prędkość jachtu nad dnem i kurs
B. głębokość
C. przebyty dystans oraz prędkość jachtu po wodzie
202. Лаг - это устройство показывающее:
A. скорость яхты над дном и курс
B. глубина
C. пройденное расстояние и скорость яхты по воде $

203. Z typowego morskiego urządzenia GPS można odczytać:
A. długość i szerokość geograficzną, kurs drogi nad dnem, prędkość nad dnem
B. długość i szerokość geograficzną, prędkość po wodzie i kurs kompasowy
C. długość i szerokość geograficzną, ciśnienie atmosferyczne, głębokość
203. С типичного морского GPS-устройства можно прочитать:
А. долготу и широту, курс дороги над дном, скорость над дном $
B. долготу и широту, скорость по воде и направление по компасу
C. долготу и широту, атмосферное давление, глубину

204. Jaki kurs wskazuje kompas na jachcie?
A. kurs magnetyczny
B. kurs kompasowy
C. kurs rzeczywisty
204. Какой курс указывает компас на яхте?
А. магнитный курс
B. курс компаса $
C. реальный курс

205. Pozycja odczytana z odbiornika GPS:
A. nigdy nie jest obarczona błędem większym niż 50 m
B. nigdy nie jest obarczona błędem większym niż 2 m
C. może być obarczona dużym błędem, zależnie od konfiguracji satelitów warunków propagacji, więc nie należy nawigacji opierać wyłącznie na odbiorniku GPS
205. Положение считывается с приемника GPS:
А. никогда, не чревато ошибкой более 50 м
B. никогда, не чревато ошибкой более 2 м
C. может быть чревато большой ошибкой, в зависимости от конфигурации спутников, условий распространения, поэтому не следует использовать навигацию только на GPS-приемнике $

206. Inne określenie na namiernik to:
A. szturwał
B. sekstant
C. pelengator, kompas namiarowy
206. Дополнительные приборы для измерения:
А. штурвал
B. секстант
C. пеленгатор, компас $

207. W celu zapewnienia prawidłowej pracy kompasu, jego obudowa oraz elementy znajdujące się w pobliżu powinny być:
A. magnetycznie obojętne
B. namagnesowane
C. wykonane wyłącznie z tworzyw sztucznych
207. Для обеспечения правильной работы компаса, его корпус и близлежащие компоненты должны быть:
А. магнитно инертными $
B. намагниченными
C. сделанными только из пластика

208. Wiatr wschodni to:
A. wiatr wiejący na wschód
B. wiatr wiejący o wschodzie słońca
C. wiatr wiejący ze wschodu
208. Восточный ветер-это:
А. ветер, дующий на восток
B. ветер, дующий на восход солнца
C. ветер, дующий с востока $

209. Prąd północny to:
A. prąd płynący z północy
B. prąd występujący około północy czasu lokalnego
C. prąd płynący na północ
209. Северное течение - это:
А. течение с севера
B. течение происходящий около полуночи по местному времени
C. течение на север $

210. Przedstawiony znak oznacza:
A. zakaz wyprzedzania
B. zakaz ruchu dwukierunkowego
C. nakaz ruchu dwukierunkowego
210. Изображенный знак означает:
А. запрет на обгон $
B. запрет на двустороннее движение
C. предупреждение о возможности двустороннего движения

211. Przedstawiony znak oznacza:
A. zakaz wyprzedzania; dotyczy tylko zestawów
B. bezwzględny zakaz wyprzedzania
C. zakaz ruchu dwukierunkowego
211. Изображенный знак означает:
A. обгон запрещен; применяется только к наборам $
B. абсолютный запрет на обгон
C. запрет двухстороннего движения

212. Przedstawiony znak oznacza:
A. zakaz postoju (na kotwicy lub na cumach przy brzegu)
B. zakaz parkowania samochodów na nabrzeżu
C. zakaz postoju na cumach
212. Изображенный знак означает:
А. запрет на стоянку (на якоре или на причалах у берега) $
B. запрет на парковку автомобилей на набережной
C. запрет на стоянку на причалах

213. Przedstawiony znak oznacza:
A. koniec ograniczenia prędkości do 40 km/h
B. zakaz postoju na szerokości określonej na znaku w metrach (od znaku - tu 40 m)
C. zakaz poruszania się statków o długości większej niż 40 m
213. Изображенный знак означает:
A. конец ограничения скорости до 40 км / ч
B. запрет на остановку на ширине, указанной на отметке в метрах (от отметки-здесь 40 м) $
C. запрет на передвижение судов длиной более 40 м

214. Przedstawiony znak oznacza:
A. koniec zakazu kotwiczenia
B. zakaz kotwiczenia, wleczenia kotwicy, łańcucha lub liny
C. uwaga na liczne kotwice leżące na dnie
214. Изображенный знак означает:
A. окончание запрета якорения
B. запрет якорения, буксировки якоря, цепи или веревки $
C. обратить внимание на многочисленные якоря, лежащие на дне

215. Przedstawiony znak oznacza:
A. zakaz cumowania do brzegu
B. zakaz używania polerów cumowniczych
C. zakaz kotwiczenia
215. Изображенный знак означает:
А. запрет швартовки у берега $
B. запрет на использование швартовых кнехтов
C. запрет якорения

216. Przedstawiony znak oznacza:
A. zakaz zawracania
B. zakaz mijania się prawymi burtami
C. zakaz cyrkulacji
216. Изображенный знак означает:
А. запрет на разворот $
B. запрет на прохождение правыми бортами
C. запрет на циркуляцию

217. Przedstawiony znak lub światło oznacza:
A. zakaz poruszania się skuterów wodnych
B. zakaz wytwarzania fali
C. zakaz poruszania się statków o napędzie mechanicznym
217. Изображенный знак или свет означает:
A. запрет на передвижение гидроциклов
Б. запрет на создание волн $
C. запрет на передвижение судов с механическим приводом

218. Przedstawione znaki (światła) oznaczają:
A. zakaz przejścia - przygotować się do wejścia lub przejścia
B. jaz w bliskiej odległości
C. lewą główkę portu
218. Изображенные знаки (огни) означают:
А. запрет на проезд - готовиться к въезду или проезду $
B. плотина в непосредственной близости
C. левая сторона входа в порт
(один из на рис.:)

219. Przedstawiony znak oznacza:
A. zakaz ruchu statków używanych wyłącznie do uprawiania sportu lub rekreacji
B. koniec strefy przeznaczonej dla sportu wyczynowego
C. zakaz uprawiania narciarstwa wodnego
219. Изображенный знак означает:
A. запрет на движение судов, используемых только для занятий спортом или отдыха $
B. Конец зоны, предназначенной для соревновательных видов спорта
C. Запрет на водные лыжи

220. Przedstawiony znak oznacza:
A. zakaz uprawiania narciarstwa wodnego oraz holowania statków powietrznych za statkiem
B. zakaz uprawiania narciarstwa wodnego
C. zakaz skoków na nartach
220. Изображенный знак означает:
Запрет на катание на водных лыжах и буксировку воздушных судов за кораблем $
Запрет на водные лыжи
Запрет на прыжки на лыжах

221. Przedstawiony znak oznacza:
A. zakaz ruchu statków sportowych
B. koniec portu jachtowego
C. zakaz ruchu statków żaglowych
221. Изображенный знак означает:
A. запрет на движение спортивных судов
B. край яхтенного порта
C. Запрет на движение парусных судов $

222. Przedstawiony znak oznacza:
A. zakaz wędkowania z łodzi wiosłowej
B. zakaz ruchu statków, które nie są statkami o napędzie mechanicznym i żaglowym
C. zakaz ruchu jednostek sportowych
222. Изображенный знак означает:
А. запрет на рыбалку с лодки оборудованной веслами
B. запрет на движение судов, не являющихся судами с механическим и парусным приводом $
C. запрет на движение спортивных судов

223. Przedstawiony znak oznacza:
A. zakaz pływania na desce z żaglem
B. zakaz pływania w ślizgu
C. zakaz ruchu jednostek żaglowych
223. Изображенный знак означает:
А. запрет на плавание на доске с парусом $
B. запрет на плавание в скольжении
C. запрет на движение парусных судов

224. Przedstawiony znak oznacza:
A. zakaz wytwarzania fali
B. zakaz ruchu skuterów wodnych
C. koniec strefy, w której małe statki używane wyłącznie do uprawiania sportu lub rekreacji mogły rozwijać duże prędkości
224. Изображенный знак означает:
А. запрет на создание волн
B. запрет на движение гидроциклов
C. конец зоны, где небольшие суда, используемые исключительно для занятий спортом или отдыха, могли развивать высокие скорости $

225. Przedstawiony znak oznacza:
A. zakaz wodowania i wciągania statków na brzeg
B. zakaz pozostawiania łodzi na przyczepach
C. zakaz przejazdu przez bród
225. Изображенный знак означает:
A. запрет на спуск и подъем судов на берег $
Б. запрет оставлять лодки на прицепах
C. запрет на проезд через брод

226. Przedstawiony znak oznacza:
A. zakaz wytwarzania fali
B. zakaz ruchu skuterów wodnych
C. zakaz ruchu statków o napędzie mechanicznym
226. Изображенный знак означает:
А. запрет на создание волн
B. запрет на движение гидроциклов $
C. запрет на движение судов с механическим приводом

227. Przedstawiony znak oznacza:
A. nakaz zatrzymania statku
B. nakaz ruchu w kierunku wskazanym przez znak
C. nakaz nadania długiego sygnału dźwiękowego
227. Изображенный знак означает:
А. требование о задержании судна
B. требование движения в направлении, указанном знаком $
C. требование о передаче длинного звукового сигнала

228. Przedstawiony znak oznacza:
A. nakaz skierowania statku na tę stronę szlaku żeglownego, która leży z lewej burty
B. nakaz wyprzedzania
C. początek strefy ruchu lewostronnego
228. Изображенный знак означает:
A. требование направить судно на ту сторону судоходной пути, который находится с левого борта $
B. требование на обгон
C. начало зоны левостороннего движения

229. Przedstawiony znak oznacza:
A. nakaz skierowania statku na tę stronę szlaku żeglownego, która leży z prawej burty
B. początek strefy ruchu prawostronnego
C. nakaz postoju przy prawym brzegu
229. Изображенный знак означает:
A. требование направить судно на ту сторону судоходной пути, который находится с правого борта $
B. требование на обгон
C. требования о стоянке на правом берегу

230. Przedstawiony znak oznacza:
A. ruch dwukierunkowy
B. nakaz trzymania się tej strony szlaku żeglownego, która leży z lewej burty
C. że masz pierwszeństwo przy mijaniu
230. Изображенный знак означает:
А. двустороннее движение
B. требование держаться той стороны судоходного пути, который лежит с левого борта $
C. есть приоритет при прохождении

231. Przedstawiony znak oznacza:
A. ruch dwukierunkowy
B. konieczność ustąpienia pierwszeństwa przy mijaniu
C. nakaz trzymania się tej strony szlaku żeglownego, która leży z prawej burty
231. Изображенный знак означает:
А. двустороннее движение
B. необходимость уступить дорогу при проезде
C. требование придерживаться той стороны судоходного пути, который лежит с правого борта $

232. Przedstawiony znak oznacza:
A. mijankę
B. nakaz przejścia na tę stronę szlaku żeglownego, która leży z lewej burty
C. nakaz przejścia na tę stronę szlaku żeglownego, która leży z prawej burty
232. Изображенный знак означает:
А. обход
B. требование о переходе на ту сторону судоходного пути, которая лежит с левого борта $
C. требование о переходе на ту сторону судоходного пути, которая лежит с правого борта

233. Przedstawiony znak oznacza:
A. mijankę
B. nakaz przejścia na tę stronę szlaku żeglownego, która leży z lewej burty
C. nakaz przejścia na tę stronę szlaku żeglownego, która leży z prawej burty
233. Изображенный знак означает:
А. обход
B. требование о переходе на ту сторону судоходного пути, которая лежит с левого борта
C. требование о переходе на ту сторону судоходного пути, которая лежит с правого борта $

234. Przedstawiony znak oznacza:
A. nakaz nadania sygnału dźwiękowego
B. nakaz zachowania szczególnej ostrożności
C. nakaz zatrzymania statku w warunkach określonych przepisami
234. Изображенный знак означает:
A. требование о передаче звукового сигнала
B. требование о особой осторожности
C. требование о задержании судна в условиях, установленных Правилами $

235. Przedstawiony znak oznacza:
A. nakaz nieprzekraczania podanej na znaku prędkości 12 km/h
B. nakaz nieprzekraczania podanej na znaku prędkości 12 węzłów
C. nakaz nieprzekraczania podanej na znaku prędkości - 12 mil
235. Изображенный знак означает:
A. запрет на превышение указанной на отметке скорости 12 км/ч $
B. требование не превышать указанную на знаке скорость 12 узлов
C. требование не превышать указанную на знаке скорость 12 миль

236. Przedstawiony znak oznacza:
A. nakaz nadania sygnału dźwiękowego
B. nakaz zachowania szczególnej ostrożności
C. nakaz zatrzymania statku w warunkach określonych przepisami
236. Изображенный знак означает:
A. требование о передаче звукового сигнала $
B. требование о особой осторожности
C. требование о задержании судна в условиях, установленных Правилами

237. Przedstawiony znak oznacza:
A. nakaz zachowania szczególnej ostrożności; wyjście na główną drogę dozwolone, gdy nie zmusi to statków na tej drodze do zmiany kursu lub prędkości
B. nakaz zatrzymania statku
C. skrzyżowanie z równorzędną drogą wodną
237. Изображенный знак означает:
A. требование о особой осторожности; выход на главную дорогу разрешен, если это не заставит суда на этой дороге изменить курс или скорость $
B. требование о задержании судна
С. пересечение с равноправным водным путем

238. Przedstawiony znak oznacza:
A. nakaz zachowania szczególnej ostrożności przy przecinaniu głównej drogi wodnej, które może mieć miejsce, gdy nie zmusza się statków do zmiany kursu lub prędkości
B. skrzyżowanie równorzędnych dróg wodnych
C. nakaz zatrzymania statku
238. Изображенный знак означает:
A. требование о особой осторожности при пересечении основного водного пути, который может иметь место, когда суда не вынуждены менять курс или скорость $
B. пересечение равноправных водных путей
C. требование о задержании судна

239. Przedstawiony znak (dwa światła żółte migające) oznacza:
A. nakaz zachowania szczególnej ostrożności
B. nakaz zmiany kursu lub prędkości przez statki idące główną drogą wodną w sytuacjach, gdy z portu lub bocznej drogi wodnej wychodzą statki
C. nakaz ruchu jednokierunkowego
239. Изображенный знак (два желтых мигающих света) означает:
A. требование о особой осторожности
B. требование об изменении курса или скорости судами, идущими по главному водному пути, в ситуациях, когда суда выходят из порта или бокового водного пути $
C. требование об одностороннем движении

240. Przedstawiony znak oznacza:
A. zakaz prowadzenie komunikacji przez radiotelefon VHF
B. nakaz wyłączenia radiotelefonów
C. nakaz prowadzenia nasłuchu radiotelefonicznego
240. Показанный знак обозначает:
A. запрет на УКВ-радиосвязь
B. требование выключить радиоприемники
C. требование о проведении радиотелефонного вещания $

241. Przedstawiony znak oznacza:
A. nakaz prowadzenia nasłuchu radiotelefonicznego na kanale 11
B. nakaz prowadzenia nasłuchu na paśmie VHF przez czas 11 minut
C. zakaz używania wskazanego 11 kanału VHF
241. Изображенный знак означает:
А. требование вести радиотелефонное вещание на канале 11 $
B. требование о проведении вещания на УКВ-диапазоне в течение 11 минут
C. запрет на использование указанного 11 УКВ-канала

242. Przedstawiony znak oznacza:
A. konieczność ruchu z prędkością wyższą niż wskazana na znaku - 2,2 km/h
B. ograniczoną wysokość do 2,2 m
C. ograniczoną głębokość do 2,2 m
242. Изображенный знак означает:
А. необходимость движения со скоростью выше указанной на отметке-2,2 км / ч
B. ограниченная высота до 2,2 м
C. ограниченная глубина до 2,2 м $

243. Przedstawiony znak oznacza:
A. ograniczoną przestrzeń do cumowania do 45 m
B. ograniczoną długość zestawu statków do 45 m
C. ograniczoną szerokość przejścia lub szlaku żeglownego do 45 m
243. Изображенный знак означает:
A. ограниченное пространство для швартовки до 45 м
B. ограниченная длина нескольких судов до 45 м
C. ограниченная ширина прохода или судоходного пути до 45 м $

244. Przedstawiony znak oznacza:
A. granicę szlaku żeglownego oddaloną od prawego brzegu w odległości 40 m; statki powinny przechodzić wodległości od brzegu większej niż 40 m
B. nakaz utrzymania odległości od brzegu nie większej niż 40 m
C. miejsca do cumowania na odcinku 40 m
244. Изображенный знак означает:
A. границы судоходного пути, удаленные от правого берега на расстоянии 40 м; суда должны проходить водораздел от берега на расстоянии более, чем 40 м $
Б. требование о соблюдении расстояния от берега не более 40 м
C. причалы на участке 40 м

245. Przedstawiony znak (dwie tablice lub dwa światła żółte stałe) oznacza:
A. zalecenie przejścia w jednym kierunku (np. pod mostem)
B. zalecenie przejścia w obydwu kierunkach (np. pod mostem)
C. zakaz ruchu statków
245. Изображенный знак (две таблички или два светло-желтых фиксированных) означает:
А. рекомендация двигаться в одном направлении (например, под мостом) $
B. рекомендация двигаться в обоих направлениях (например, под мостом)
C. запрет на движение судов

246. Przedstawiony znak (dwie tablice lub dwa światła zielone stałe) oznacza:
A. zalecenie trzymania się we wskazanym obszarze
B. nakaz zatrzymania się pomiędzy tablicami
C. bezpieczne miejsce do cumowania
246. Изображенный знак (две таблички или два сплошных Зеленых Фонаря) означает:
А. рекомендация придерживаться указанной области $
B. требование об остановке между знаками
C. безопасное место для швартовки

247. Przedstawiony znak (tablica lub światło białe stałe i migające) oznacza:
A. zalecenia przejścia w kierunku prawego brzegu
B. nakaz ruchu prawostronnego
C. zalecenie przejścia w kierunku określonym strzałką
247. Изображенный знак (массив или белый свет, постоянный и мигающий) означает:
А. рекомендации по переходу к правому берегу
B. требование на правостороннее движение
C. рекомендация двигаться в направлении, указанном стрелкой $

248. Przedstawiony znak (tablica lub jedno światło zielone stałe lub dwa świa zielone stałe) oznacza:
A. granicę państwa
B. zakaz przejścia
C. zezwolenie przejścia
248. Изображенный знак (табличка или один зеленый свет фиксированный или два зеленых света фиксированных) означает:
А. границы государства
B. запрет на проезд
C. разрешение прохода $

249. Przedstawiony znak oznacza:
A. linię napowietrzną 12kV
B. niebezpieczeństwo burz
C. linię napowietrzną na wysokości 12 m nad drogą wodną
249. Изображенный знак означает:
A. воздушная линия 12 кв
B. опасность грозы
C. воздушная линия на высоте 12 м над водным путем $

250. Przedstawiony znak oznacza:
A. jaz w bliskiej odległości
B. prom na uwięzi
C. prom przemieszczający się swobodnie
250. Изображенный знак означает:
А. плотина в непосредственной близости $
B. привязанный паром
C. свободно передвигающийся паром

251. Przedstawiony znak oznacza:
A. jaz w bliskiej odległości
B. prom na uwięzi
C. prom przemieszczający się swobodnie
251. Изображенный знак означает:
А. плотина в непосредственной близости
B. привязанный паром $
C. свободно передвигающийся паром

252. Przedstawiony znak oznacza:
A. jaz w bliskiej odległości
B. prom na uwięzi
C. prom przemieszczający się swobodnie
252. Изображенный знак означает:
А. плотина в непосредственной близости
B. привязанный паром
C. свободно передвигающийся паром $

253. Przedstawiony znak oznacza:
A. zezwolenie wyłącznie na postój na kotwicy
B. zezwolenie na postój (na kotwicy lub na cumach przy brzegu)
C. zezwolenie wyłącznie na postój na cumach
253. Изображенный знак означает:
А. разрешение только на стоянку на якоре
B. разрешение на стоянку (на якоре или на причалах у берега) $
C. разрешение только на стоянку на причалах

254. Przedstawiony znak oznacza:
A. zezwolenie na postój na akwenie, którego szerokość ma 60 m, licząc od miejsca ustawienia znaku
B. że zalecana prędkość to 60 km/h
C. że głębokość przy znaku wynosi 60 m
254. Изображенный знак означает:
А. разрешение на остановку на водоеме, ширина которого составляет 60 м, считая от места установки знака $
B. что рекомендуемая скорость составляет 60 км / ч
C. что глубина на отметке 60 м

255. Przedstawiony znak oznacza:
A. zezwolenie na postój na akwenie ograniczonym odstępami w odległości 30 i 60m, licząc od miejsca ustawienia znaku 30-60
B. maksymalny czas postoju w dni robocze 30 min, w weekend 60 min
C. miejsca cumownicze dla statków o długości od 30 do 60 m
255. Изображенный знак означает:
А. разрешение на остановку на акватории, ограниченную интервалом в 30 и 60 м, считая от места установки отметки 30-60 $
B. максимальное время простоя в рабочие дни 30 мин, в выходные дни 60 мин
C. причальные места для судов длиной от 30 до 60 м

256. Przedstawiony znak oznacza:
A. numer nabrzeża - w tym wypadku numer 4
B. zezwolenie na postój statków przez ograniczony czas - w tym wypadku do 4 godzin
C. zezwolenie na postój, burta przy burcie, w maksymalnej liczbie podanej na znaku - w tym wypadku 4
256. Изображенный знак означает:
А. номер причала-в данном случае номер 4
B. разрешение на остановку судов в течение ограниченного времени-в этом случае до 4 часов
C. разрешение на остановку, борт у борта, в максимальном количестве, указанном на знаке, в данном случае 4 $

257. Przedstawiony znak oznacza:
A. miejsce postoju zarezerwowane dla wszystkich statków, które nie wiozą materiałów niebezpiecznych
B. miejsce postoju zarezerwowane dla statków, z wyjątkiem statków przeznaczonych do pchania, wiozących materiały niebezpieczne
C. miejsce postoju zarezerwowane wyłącznie dla statków przeznaczonych do pchania, które nie wiozą materiałów niebezpiecznych
257. Изображенный знак означает:
A. причал зарезервирован для всех судов, которые не перевозят опасные материалы
B. причал, предназначенный для судов, за исключением судов, предназначенных для толкания, перевозящих опасные материалы
C. причал предназначен только для толкающих судов, которые не перевозят опасные материалы $

258. Przedstawiona grupa znaków oznacza:
A. miejsce postoju zarezerwowane dla wszystkich statków, które nie wiozą materiałów niebezpiecznych
B. miejsce postoju zarezerwowane dla statków, z wyjątkiem statków przeznaczonych do pchania, wiozących materiały niebezpieczne
C. miejsce postoju zarezerwowane wyłącznie dla statków przeznaczonych do pchania wiozących materiały niebezpieczne
258. Представленная группа знаков означает:
A. причал зарезервирован для всех судов, которые не перевозят опасные материалы
B. причал, предназначенный для судов, за исключением судов, предназначенных для толкания, перевозящих опасные материалы
C. причал предназначен только для судов, предназначенных для перевозки опасных материалов $

259. Przedstawiony znak oznacza:
A. miejsce postoju zarezerwowane dla wszystkich statków, które nie wiozą materiałów niebezpiecznych
B. miejsce postoju zarezerwowane dla statków, z wyjątkiem statków przeznaczonych do pchania, które nie wiozą materiałów niebezpiecznych
C. miejsce postoju zarezerwowane dla statków przeznaczonych do pchania wiozących materiały niebezpieczne
259. Изображенный знак означает:
A. причал зарезервирован для всех судов, которые не перевозят опасные материалы
B. причал, предназначенный для судов, за исключением судов, предназначенных для толкания, которые не перевозят опасные материалы $
C. причал зарезервирован для судов, предназначенных для перевозки опасных материалов

260. Przedstawiona grupa znaków oznacza:
A. miejsce postoju zarezerwowane dla wszystkich statków, które nie wiozą materiałów niebezpiecznych
B. miejsce postoju zarezerwowane dla statków, z wyjątkiem statków przeznaczonych do pchania, wiozących materiały niebezpieczne
C. miejsce postoju zarezerwowane dla statków przeznaczonych do pchania wiozących materiały niebezpieczne
260. Представленная группа знаков означает:
A. причал предназначен для всех судов, которые не перевозят опасные материалы
B. причал, предназначен для судов, перевозящих опасные материалы, за исключением судов, предназначенных для буксирования $
C. причал предназначен для судов, предназначенных для перевозки опасных материалов

261. Przedstawiony znak oznacza:
A. miejsce postoju zarezerwowane dla wszystkich statków, które nie wiozą materiałów niebezpiecznych
B. miejsce postoju z wyjątkiem wiozących zarezerwowane dla statków, statków przeznaczonych do pchania, materiały niebezpieczne
C. miejsce postoju zarezerwowane dla statków przeznaczonych do pchania wiozących materiały niebezpieczne
261. Изображенный знак означает:
A. причал предназначен для всех судов, которые не перевозят опасные материалы $
B. причал, предназначен для судов, перевозящих опасные материалы, за исключением судов, предназначенных для буксирования
C. причал предназначен для судов, предназначенных для перевозки опасных материалов

262. Przedstawiona grupa znaków oznacza:
miejsce postoju zarezerwowane dla wszystkich statków, które wioza materiały niebezpieczne
miejsce składowania materiałów niebezpiecznych
uwaga, silny prąd
262. Представленная группа знаков означает:
причал предназначен для всех судов, перевозящих опасные материалы $
место хранения опасных материалов
внимание, сильный ток

263. Przedstawiony znak oznacza:
zezwolenie na cumowanie
zezwolenie na postój na kotwicy i wleczenie kotwicy, łańcucha lub liny
zakaz kotwiczenia
263. Изображенный знак означает:
разрешение на швартовку
разрешение на якорную стоянку и буксировку якоря, цепи или веревки $
запрет на якорение

264. Przedstawiony znak oznacza:
zezwolenie na cumowanie do brzegu
zezwolenie na kotwiczenia
zakaz cumowania do polerow
264. Изображенный знак означает:
разрешение на швартовку у берега $
разрешение на якорение
запрет швартовки к кнехтам

265. Przedstawiony znak oznacza:
wskazanie miejsca do zawracania
nakaz zawrocenia
nakaz mijania się prawymi burtami
265. Изображенный знак означает:
указание места для разворота $
требование о развороте
требование об обходе правыми бортами

266. Przedstawiony znak oznacza:
skrzyzowanie z droga uznana za boczna droge wodna w stosunku do drogi wodnej, po której idzie statek
skrzyżowanie z równorzędna droga wodna
bezpośrednia bliskość portu
266. Изображенный знак означает:
пересечение с судоходным путем считается боковым водным путем по отношению к судоходному пути, по которому идет судно $
пересечение с равноправным водным путем
непосредственная близость порта

267. Przedstawiony znak oznacza:
skrzyzowanie z droga uznana za boczna droge wodna w stosunku do drogi wodnej, po której idzie statek
skrzyżowanie z równorzędna droga wodna
polaczenie z droga uznana za boczna droge wodna w stosunku do drogi, po której idzie statek
267. Изображенный знак означает:
пересечение с судоходным путем считается боковым водным путем по отношению к водному пути, по которому идет судно
пересечение с равноправным водным путем
соединение с судоходным путем считается боковым водным путем по отношению к судоходному пути, по которому идет судно $

268. Przedstawiony znak oznacza:
skrzyżowanie z równorzędna droga wodna
skrzyżowanie z droga uznana za glowna droge wodna w stosunku do drogi, po której idzie statek
polaczenie z droga uznana za boczna droge wodna w stosunku do drogi, po której idzie statek
268. Изображенный знак означает:
пересечение с равноправным водным путем
пересечение с судоходным путем считается основным водным путем по отношению к судоходному пути, по которому идет судно $
соединение с судоходным путем считается боковым водным путем по отношению к судоходному пути, по которому идет судно

269. Przedstawiony znak oznacza:
koniec drogi wodnej
połączenie z droga uznana za glowna droge wodna w stosunku od drogi, po której idzie statek
polaczenie z droga uznana za boczna droge wodna w stosunku do drogi, po której idzie statek
269. Изображенный знак означает:
конец водного пути
соединение с судоходным путем считается основным водным путем по отношению к судоходному пути, по которому идет судно $
соединение с судоходным путем считается боковым водным путем по отношению к судоходному пути, по которому идет судно

270. Przedstawiony znak oznacza:
koniec obowiązywania zakazu lub nakazu albo ograniczenia
nurka pod woda
zakaz ruchu statków
270. Изображенный знак означает:
прекращение действия запрета или ограничения $
водолаз под водой
запрет на движение судов

271. Przedstawiony znak (jedno lub dwa światła stałe białe) oznacza:
zamknieta sluze
przejście dozwolone
brak możliwości cumowania
271. Изображенный знак (один или два мигающих белых света) означает:
закрытый шлюз
проход разрешен
отсутствие возможности швартовки $

272. Przedstawiony znak (jedno lub dwa światła migające białe) oznacza:
zamknieta sluze
przejście dozwolone
brak możliwości cumowania
272. Изображенный знак (один или два мигающих белых света) означает:
закрытый шлюз
проход разрешен $
отсутствие возможности швартовки

273. Przedstawiony znak oznacza:
ujecie wody z jeziora
zakaz kotwiczenia - w poblizu rura wodociagowa
miejsce poboru wody pitnej
273. Изображенный знак означает:
водозабор воды с озера
запрет на якорь, рядом водопроводная труба
место сбора питьевой воды $

274. Przedstawiony znak oznacza:
miejsce, w którym można korzystać z telefonu
zakaz rozmowy przez telefon
koniec zakazu używania telefonów komórkowych
274. Изображенный знак означает:
место, где можно пользоваться телефоном $
запрет на разговоры по телефону
конец запрета на использование мобильных телефонов

275. Przedstawiony znak oznacza:
zezwolenie na rozwijanie dużych prędkości
zezwolenie na ruch żeglugowy statków o napędzie mechanicznym
nakaz płynięcia na jednym silniku dla jednostek wielosilnikowych
275. Изображенный знак означает:
разрешение на развитие высоких скоростей
разрешение на судоходство судов с механическим приводом $
порядок хождения на одном двигателе для многодвигательных агрегатов

276. Przedstawiony znak oznacza:
zezwolenie na ruch żeglugowy statków używanych wyłącznie do uprawiania sportu lub rekreacji
zalecenie szybkiej, sportowej żeglugi
miejsce cumownicze dla jednostek sportowych
276. Изображенный знак означает:
разрешение на судоходство судов, используемых только для занятий спортом или отдыха $
рекомендация быстрой спортивной доставки
причал для спортивных подразделений

277. Przedstawiony znak oznacza:
wyciag dla narciarzy wodnych w pobliżu
zezwolenie na uprawianie narciarstwa wodnego oraz holowanie statkow powietrznych za statkiem
uwaga skoki narciarskie
277. Изображенный знак указывает:
подъемник для водных лыж рядом
разрешение на катание на водных лыжах и буксировку за судном $
внимание, прыжки с трамплина

278. Przedstawiony znak oznacza:
zezwolenie na ruch statków żaglowych
nakaz postawienia żagli na statkach żaglowych
akwen wyłącznie dla statków żaglowych
278. Изображенный знак означает:
разрешение на движение парусных судов $
требование поставить паруса на парусные суда
акватория исключительно для парусных судов

279. Przedstawiony znak oznacza:
zezwolenie na ruch statków o napędzie wiosłowym
akwen wyłącznie dla łodzi wiosłowych
akwen wyłącznie dla łodzi wiosłowych
zalecany napęd: wiosłowy
279. Изображенный знак означает:
разрешение на движение гребных судов $
акватория исключительно для гребных лодок
рекомендуемый привод: гребной

280. Przedstawiony znak oznacza:
akwen wyłączne dla pływających na desce z żaglem
zezwolenie na pływanie w ślizgu
zezwolenie na pływanie na desce z żaglem
280. Изображенный знак означает:
акватория эксклюзивная для плавающих на доске с парусом
разрешение на плавание в режиме скольжения (глиссировании)
разрешение на плавание на доске с парусом $

281. Przedstawiony znak oznacza:
A. zezwolenie na wytwarzanie fali
B. zezwolenie na ruch małych statków sportowych i turystycznych z dużą prędkością
C. zalecenie poruszania się z dużą prędkością
281. Изображенный знак означает:
A. разрешение на создание волны
B. разрешение на движение небольших спортивных и туристических судов с высокой скоростью $
C. рекомендация двигаться на высокой скорости

282. Przedstawiony znak oznacza:
A. wskazanie kanału radiotelefonicznego, na którym można uzyskać informacje nawigacyjne (w tym wypadku: kanał numer 11)
B. zalecenie nasłuchu na paśmie VHF przez okres 11 minut
C. zalecenie zgłoszenia swojej pozycji na kanale 11 VHF
282. Изображенный знак означает:
A. указание радиоканала, по которому можно получить навигационную информацию (в данном случае: канал № 11) $
B. рекомендация прослушивания в диапазоне УКВ в течение 11 минут
C. рекомендация сообщить о своей позиции на канале 11 УКВ

283. Przedstawiony znak oznacza:
A. zezwolenie na wytwarzanie fali
B. zezwolenie na wodowanie skuterów wodnych
C. zezwolenie na ruch skuterów wodnych
283. Изображенный знак означает:
A. разрешение на создание волны
B. разрешение на запуск гидроциклов
C. разрешение на движение гидроциклов $

284. Przedstawiony znak oznacza:
A. miejsce postoju zarezerwowane dla załadunku i wyładunku samochodów
B. prom samochodowy
C. wzmożony ruch amfibii
284. Изображенный знак означает:
A. место для погрузки и разгрузки автомобилей $
B. автомобильный паром
С. усиленное передвижение амфибий

285. Przedstawiony znak oznacza:
A. miejsce przeprawy przez rzekę „w bród"
B. stromy brzeg
C. zezwolenie na lądowanie i wciąganie statków na brzeg
285. Изображенный знак означает:
А. место переправы через реку "в брод"
B. крутой берег
C. разрешение на спуск и подъем судов на берег $

286. Na śródlądziu przedstawiony znak oznacza:
A. prawą granicę szlaku żeglownego
B. lewą granicę szlaku żeglownego
C. rozgałęzienie szlaku żeglownego
286. На внутренних водах изображенный знак означает:
А. правая граница судоходного пути $
B. левая граница судоходного пути
C. разветвление судоходного пути

287. Na śródlądziu przedstawiony znak oznacza:
A. prawą granicę szlaku żeglownego
B. lewą granicę szlaku żeglownego
C. rozgałęzienie szlaku żeglownego
287. На внутренних водах изображенный знак означает:
А. правая граница судоходного пути
B. левая граница судоходного пути
C. разветвление судоходного пути $

288. Na wodach morskich (IALA A) przedstawiony znak oznacza:
A. rozgałęzienie szlaku żeglownego - szlak główny odchodzi w lewo
B. przebieg szlaku żeglownego blisko prawego brzegu
C. rozgałęzienie szlaku żeglownego - szlak główny odchodzi w prawo
288. В морских водах (IALA A) изображенный знак означает:
A. ответвление судоходного пути, основной путь уходит влево
B. ход судоходного пути вблизи правого берега
C. ответвление судоходного пути, главный путь уходит вправо $

289. Na wodach morskich (IALA A) przedstawiony znak oznacza:
A. rozgałęzienie szlaku żeglownego - szlak główny odchodzi w lewo
B. przebieg szlaku żeglownego blisko prawego brzegu
C. rozgałęzienie szlaku żeglownego - szlak główny odchodzi w prawo
289. В морских водах (IALA A) изображенный знак означает:
A. ответвление судоходного пути, основной  путь уходит влево $
B. ход судоходного пути вблизи правого берега
C. ответвление судоходного пути, главный путь уходит вправо

290. Przedstawiony znak oznacza:
A. rozgałęzienie szlaku żeglownego - szlak główny odchodzi w lewo
B. przebieg szlaku żeglownego blisko prawego brzegu
C. rozgałęzienie szlaku żeglownego - szlak główny odchodzi w prawo
290. Изображенный знак означает:
A. ответвление судоходного пути, основной  путь уходит влево
B. ход судоходного пути вблизи правого берега $
C. ответвление судоходного пути, главный путь уходит вправо

291. Przedstawiony znak oznacza:
A. przejście szlaku żeglownego od prawego do lewego brzegu
B. przejście szlaku żeglownego od lewego do prawego brzegu
C. przebieg szlaku żeglownego blisko lewego brzegu
291. Изображенный знак означает:
А. переход судоходного маршрута от правого к левому берегу
B. переход судоходного маршрута от левого к правому берегу
C. ход судоходного маршрута вблизи левого берега $

292. Przedstawiony znak to:
A. znak na prawym brzegu wskazujący przejście szlaku żeglownego od prawego do lewego brzegu
B. znak na lewym brzegu wskazujący przejście szlaku żeglownego od lewego do prawego brzegu
C. przebieg szlaku żeglownego blisko lewego brzegu
292. Изображенный знак:
А. знак на правом берегу, указывающий на прохождение судоходного пути с правого на левый берег
B. знак на левом берегу, указывающий на прохождение судоходного пути с левого на правый берег $
C. ход судоходного пути вблизи левого берега

293. Na śródlądziu przedstawiony znak oznacza:
A. miejsce niebezpieczne przy lewym brzegu
B. miejsce niebezpieczne na środku drogi wodnej
C. miejsce niebezpieczne przy prawym brzegu
293. На внутренней стороне изображенный знак означает:
A. опасное место на левом берегу
B. опасное место посреди водного пути $
C. опасное место на правом берегу

294. Przedstawiony znak oznacza:
A. północny znak kardynalny i należy go minąć od północy
B. południowy znak kardynalny i należy go minąć od południa
C. zachodni znak kardynalny i należy go minąć od zachodu
294. Изображенный знак означает:
А. Северный Кардинальный знак и должен быть пройден с севера $
B. Южный Кардинальный знак и должен быть пройден с юга
C. Западный Кардинальный знак и должен быть пройден с запада

295. Przedstawiony znak oznacza:
A. północny znak kardynalny i należy go minąć od północy
B. południowy znak kardynalny i należy go minąć od południa
C. zachodni znak kardynalny i należy go minąć od zachodu
295. Изображенный знак означает:
А. Северный Кардинальный знак и должен быть пройден с севера
B. Южный Кардинальный знак и должен быть пройден с юга $
C. Западный Кардинальный знак и должен быть пройден с запада

296. Przedstawiony znak oznacza:
A. północny znak kardynalny i należy go minąć od północy
B. południowy znak kardynalny i należy go minąć od południa
C. zachodni znak kardynalny i należy go minąć od zachodu
296. Изображенный знак означает:
А. Северный Кардинальный знак и должен быть пройден с севера
B. Южный Кардинальный знак и должен быть пройден с юга
C. западный Кардинальный знак и должен быть пройден с запада $

297. Przedstawiony znak oznacza:
A. zachodni znak kardynalny i należy go minąć od zachodu
B. wschodní znak kardynalny i należy go minąć od wschodu
C. północny znak kardynalny i należy go minąć od północy
297. Изображенный знак означает:
А. западный Кардинальный знак, и должен быть пройден с запада
B. восточный Кардинальный знак и должен быть пройден с востока $
C. северный Кардинальный знак и должен быть пройден с севера

298. Przedstawiony znak to:
A. znak bezpiecznej wody
B. znak STOP
C. znak odosobnionego niebezpieczeństwa
298. Изображенный знак:
A. знак безопасной воды
B. знак остановки
C. знак отдельно стоящей опасности $

299. Przedstawiony znak to:
A. znak bezpiecznej wody
B. znak STOP
C. znak odosobnionego niebezpieczeństwa
299. Изображенный знак:
A. знак безопасной воды $
B. знак остановки
C. знак отдельнo стоящей опасности

300. Przedstawiony znak oznacza:
A. prawą stronę wyjścia z akwenu
B. akwen zamknięty dla ruchu żeglugowego
C. lewą stronę wyjścia z akwenu
300. Изображенный знак означает:
А. правая сторона выхода из водоема $
B. акватория закрыта для судоходства
C. левая сторона выхода из водоема

301. Przedstawiony znak oznacza:
A. prawą stronę wyjścia z akwenu
B. akwen zamknięty dla ruchu żeglugowego
C. lewą stronę wyjścia z akwenu
301. Изображенный знак означает:
А. правая сторона выхода из водоема
B. акватория закрыта для судоходства
C. левая сторона выхода из водоема $

302. Przedstawiony znak oznacza:
A. prawą stronę wyjścia z akwenu
B. akwen zamknięty dla ruchu żeglugowego
C. lewą stronę wyjścia z akwenu
302. Изображенный знак означает:
А. правая сторона выхода из водоема
B. акватория закрыта для судоходства $
C. левая сторона выхода из водоема

303. Jak należy interpretować ruch w górę rzeki?
A. ruch w kierunku źródeł rzeki
B. ruch w kierunku ujścia rzeki
C. ruch ze wschodu na zachód lub z południa na północ
303. Как следует интерпретировать Движение вверх по реке?
А. движение к истокам реки $
B. движение к устью реки
C. движение с востока на запад или с юга на север

304. Jak należy interpretować ruch w dół rzeki?
A. ruch w kierunku źródeł rzeki
B. ruch w kierunku ujścia rzeki
C. ruch ze wschodu na zachód lub z południa na północ
304. Как следует интерпретировать движение вниз по течению?
А. движение к истокам реки
B. движение к устью реки $
C. движение с востока на запад или с юга на север

305. Wypukły brzeg zakola rzeki, nazywa się:
A. buchta
B. róg
C. ploso
305. Выпуклый берег изгиба реки, называется:
А. бухта
B. рог $
C. пойма

306. Umocniony brzeg rzeki nazywa się:
A. buchta
B. opaska
C. ploso
306. Укрепленный берег реки называется:
А. бухта
B. изголовье $
C. пойма

307. Najgłębsze miejsce w zakolu rzeki nazywa się:
A. buchta
B. opaska
C. ploso
307. Самое глубокое место в изгибе реки называется:
А. бухта
B. изголовье
C. пойма $

308. Płycizna pomiędzy płosami nazywa się:
A. buchta
B. przemiał
C. grzebień
308. Мелководье между поймами называется:
А. бухта
B. коса $
C. гребень

309. Pojęcie rzeka “dzika” oznacza:
A. wyłącznie rzekę meandrującą
B. wyłącznie rzekę w lesie deszczowym
C. rzekę naturalną, nieuregulowaną
309. Понятие "Дикая река" означает:
А. только извилистая река
B. только река в тропическом лесу
C. река естественная, нерегулируемая $

310. Zielone i czerwone światło przed śluzą oznacza:
A. zezwolenie na wejście do śluzy
B. zakaz przejścia - przygotować się do wejścia lub przejścia
C. awaria śluzy
310. Зеленый и красный свет перед шлюзом означает:
A. разрешение на вход в шлюз
B. запрет на вход, готовиться ко входу или проходу $
C. неисправность шлюза

311. Dwa zielone światła przed śluzą oznaczają:
A. zezwolenie na wejście do śluzy
B. uwaga, przygotowanie do śluzowania
C. zakaz wejścia do śluzy
311. Два зеленых фонаря перед шлюзом означают:
A. разрешение на вход в шлюз $
B. внимание, подготовка к шлюзованию
C. запрет на вход в шлюз

312. Dwa czerwone światła przed śluzą oznaczają:
A. zezwolenie na wejście do śluzy
B. uwaga, przygotowanie do śluzowania
C. zakaz wejścia do śluzy
312. Два красных фонаря перед шлюзом означают:
A. разрешение на вход в шлюз
B. внимание, подготовка к шлюзованию
C. запрет на вход в шлюз $

313. Morze terytorialne RP sięga od brzegu na:
A. 2 Mm
B. 12 Mm
C. 20 Mm
313. Территориальное море РП простирается от берега до:
A. 2 Мм
B. 12 Мм $
C. 20 Мм

314. Wyłączna strefa ekonomiczna RP jest określona co do wielkości:
A. przez umowy międzynarodowe
B. przez Sejm
C. na 25 Mm od polskiego brzegu Bałtyku
314. Исключительная экономическая зона РП определена по величине:
А. международными соглашениями $
B. через Сейм
C. в 25 Мм от польского берега Балтийского моря

315. Morskie wody wewnętrzne RP:
A. sięgają na 2 Mm od brzegu morza
B. wchodzą w skład terytorium RP i obejmują między innymi wody portów oraz część zatoki Gdańskiej
C. sięgają na 12 Mm od brzegu morza
315. Морские внутренние воды РП:
A. достигают 2 Мм от берега моря
B. они входят в состав территории Польши и включают, среди прочего, воды портов и часть Гданьского залива $
C. достигают 12 Мм от берега моря

316. Nabieżnik to:
A. boja podejściowa
B. para staw lub tablic - z przodu niższa, z tyłu wyższa
C. środek toru podejściowego
316. Буй прохода - это:
А. подходной буй
B. пара буев или знаков - спереди ниже, сзади выше $
C. центр пути приближения

317. Jeżeli zbliżając się do linii nabieżnika, widzimy niższy znak z lewej a wyższy z prawej, to powinniśmy:
A. skręcić w lewo
B. skręcić w prawo
C. kontynuować podejście, wszystko jest OK
317. Если, приближаясь к линии бую прохода, мы видим Нижний знак слева и более высокий справа, то мы должны:
A. повернуть налево $
B. повернуть направо
C. продолжить подход, все в порядке

318. Aby wejść w nabieżnik, należy płynąć:
A. pomiędzy znaki
B. w kierunku niższego znaku
C. w kierunku wyższego znaku
318. Чтобы войти в шлюз, нужно плыть:
А. между знаками
B. к нижнему знаку $
C. к более высокому знаку

319. Dla statku płynącego w dół rzeki, prawą stroną szlaku jest:
A. brzeg po lewej stronie
B. brzeg po prawej stronie
C. ta strona, którą określają tablice informacyjne
319. Для судна, идущего вниз по течению, правая сторона пути:
A. край слева
B. край справа $
C. эта сторона, которую определяют информационные знаки

320. Na jeziorach zamkniętych prawa strona szlaku żeglownego to ta, którą mamy po prawej, gdy płyniemy:
A. z północy na południe
B. z południa na północ
C. z zachodu na wschód
320. На закрытых озерах правая сторона судоходного пути - это та, которая находится справа, когда мы идем:
А. с севера на юг
B. с юга на север $
С. с запада на восток

321. Inna nazwa na szlak żeglowny to:
A. kilwater
B. farwater
C. falszkil
321. Другое название судоходного пути :
А. кильватер
B. фарватер $
C. фальшкиль

322. IALA to:
A. międzynarodowy system oznakowania nawigacyjnego
B. międzynarodowy system ratownictwa morskiego
C. system bezpieczeństwa portowego
322. IALA это:
A. международная навигационная система маркировки $
B. международная система морского спасения
C. система безопасности порта

323. Jeżeli czas zaciemnienia jest krótszy niż czas świecenia to takie światlo nazywamy:
A. światłem błyskowym
B. światłem przerywanym
C. światłem izofazowym
323. Если время затемнения меньше времени свечения, то такой свет называется:
A. вспышка света
B. прерывистым светом $
С. изофазным светом

324. Jeżeli czas zaciemnienia jest dłuższy niż czas świecenia, to takie światło nazywamy:
A. światłem błyskowym
B. światłem przerywanym
C. światłem izofazowym
324. Если время затемнения больше времени свечения, то такой свет называется:
A. вспышка света $
B. прерывистым светом
С. изофазным светом

325. Jeżeli czas zaciemnienia jest równy czasowi świecenia to takie światło nazywamy:
A. światłem błyskowym
B. światłem przerywanym
C. światłem izofazowym
325. Если время затемнения равно времени свечения, то такой свет называется:
A. вспышка света
B. прерывистым светом
C. изофазным светом $

326. Meteorologia to nauka o:
A. klimacie
B. prognozowaniu pogody
C. zjawiskach występujących w atmosferze
326. Метеорология - это наука о:
А. климате
B. прогнозе погоды
C. явлениях, происходящих в атмосфере $

327. Na którym kanale VHF są podawane morskie prognozy pogody?
A. zawsze na kanale 71
B. zawsze na kanale 13
C. na różnych kanałach, numer kanału oraz godziny emisji prognozy pogody są podane w locjach dotyczących danego akwenu
327. На каком канале УКВ даются морские прогнозы погоды?
A. всегда на канале 71
B. всегда на канале 13
C. на разных каналах, номер канала и время трансляции прогноза погоды указаны в лоции, относящейся к конкретному водоему $

328. Chmura sygnalizująca silne wiatry z gwałtownymi szkwałami, której często towarzyszy kołnierz burzowy to:
A. altocumulus (Ac)
B. cumulonimbus (Cb)
C. altostratus (As)
328. Облако, сигнализирующее о сильных ветрах с сильными шквалами, часто сопровождаемое штормовым закручиванием облаков:
A. altocumulus (Ac)
B. cumulonimbus  - кучево-дождевые (Cb) $
C. altostratus (As)

329. Nimbostratus (Ns) i cumulonimbus (Cb) to chmury przynoszące:
A. deszcz
B. ładną, słoneczną pogodę
C. brak wiatru
329. Нимбострат (Ns) и кучево-дождевые облака (Cb) - это облака, приносящие:
А. дождь $
B. хорошую солнечную погоду
C. отсутствие ветра

330. Chmury: cirrus (Ci), cirrostratus (Cs), altostratus (As) sygnalizują:
A. zbliżenie się frontu chłodnego
B. zbliżanie się frontu ciepłego
C. ochłodzenie
330. Облака: cirrus (Ci), cirrostratus (Cs), altostratus (As) сигнализируют:
А. приближение холодного фронта
В. приближение теплого фронта $
C. похолодание

331. Jaki kierunek przyjmuje wiatr?
A. od wyżu do niżu
B. od niżu do wyżu
C. równoległy do izobar
331. Какое направление принимает ветер?
А. от высот до низов $
B. от низов до высот
C. параллельно изобару

332. Do chmur piętra wysokiego zalicza się:
A. stratus (St), stratocumulus (Sc), nimbostratus (Ns)
B. altocumulus (Ac), altostratus (As)
C. cirrostratus (Cs), cirrocumulus (Cc), cirrus (Ci)
332. К облакам верхнего этажа относятся:
A. stratus (St), stratocumulus (Sc), nimbostratus (Ns)
B. altocumulus (Ac), altostratus (As)
C. cirrostratus (Cs), cirrocumulus (Cc), cirrus (Ci) $

333. Do chmur piętra średniego zalicza się:
A. stratus (St), stratocumulus (Sc), nimbostratus (Ns)
B. altocumulus (Ac), altostratus (As)
C. cirrostratus (Cs), cirrocumulus (Cc), cirrus (Ci)
333. К облакам среднего этажа относятся:
A. stratus (St), stratocumulus (Sc), nimbostratus (Ns)
B. altocumulus (Ac), altostratus (As) $
C. cirrostratus (Cs), cirrocumulus (Cc), cirrus (Ci)

334. Do chmur piętra niskiego zalicza się:
A. stratus (St), stratocumulus (Sc), nimbostratus (Ns)
B. altocumulus (Ac), altostratus (As)
C. cirrostratus (Cs), cirrocumulus (Cc), cirrus (Ci)
334. К облакам низкого этажа относятся:
A. stratus (St), stratocumulus (Sc), nimbostratus (Ns) $
B. altocumulus (Ac), altostratus (As)
C. cirrostratus (Cs), cirrocumulus (Cc), cirrus (Ci)

335. Silne uderzenie wiatru, w kierunku odmiennym niż wiejący w danej chwili wiatr to:
A. bryza
B. monsun
C. szkwał
335. Сильный порыв ветра в направлении, отличном от ветра, дующего в данный момент:
А. Бриз
B. Муссон
С. Шквал $

336. Przyrząd służący do pomiaru ciśnienia atmosferycznego to:
A. anemometer
B. barometer, aneroid
C. batiskaf
336. Прибор, используемый для измерения атмосферного давления:
Анемометр
барометр, анероид $
батискаф

337. Silne świecenie gwiazd zapowiada:
A. pogodę bezwietrzną
B. rychłe opady deszczu
C. silny wiatr
337. Сильное сияние звезд предвещает:
А. безветренную погоду
B. неизбежные дожди
C. сильный ветер $

338. Wolno zanikające opady w niżu są charakterystyczne dla:
A. strefy podzwrotnikowej
B. strefy równikowej
C. przejścia frontu ciepłego
338. Медленно исчезающие осадки в низинах характерны для:
A. субтропической зоны
B. экваториальной зоны
С. перехода теплого фронта $

339. Poranna obfita rosa zapowiada:
A. dobrą pogodę
B. opady deszczu
C. ochłodzenie
339. Утренняя обильная роса предвещает:
А. хорошую погоду $
B. осадки
C. похолодание

340. Źródłami profesjonalnych prognoz pogody w morskiej żegludze przybrzeżnej są:
A. wyłącznie komunikaty i ostrzeżenia radiowe nadawane na falach VHF i komunikaty dostępne w kapitana tych portów
B. komunikaty i ostrzeżenia radiowe nadawane na falach VHF, informacje dostępne w dzienniku jachtowym, komunikaty dostępne w kapitana tych portów i inne
C. komunikaty i ostrzeżenia radiowe nadawane na falach VHF, informacje z serwisów internetowych, komunikaty dostępne w kapitana tych portów i inne
340. Источниками профессиональных прогнозов погоды в морском судоходстве являются:
A. только радиосообщения и предупреждения, транслируемые на УКВ волнах, и сообщения, доступные у Капитанов этих портов
B. радиосообщения и предупреждения, транслируемые на УКВ волнах, информация, доступная в журнале яхт, сообщения, доступные у Капитанов этих портов и другие
C. радиосообщения и предупреждения, транслируемые на УКВ волнах, информация из интернет-сервисов, сообщения, доступные у Капитанов этих портов и другие $

341. Podczas rejsu morskiego powinniśmy zwrócić największą uwagę na prognozy pogody:
A. na najbliższe 3 doby
B. na najbliższe 24 godziny
C. na najbliższe 7 dni
341. Во время морского круиза мы должны уделять наибольшее внимание прогнозам погоды:
А. на ближайшие 3 дня
B. на ближайшие 24 часа $
C. на ближайшие 7 дней

342. Najbardziej przydatna informacja uzyskana z regularnych odczytów barometru to:
A. tendencja zmian ciśnienia w funkcji czasu
B. wartość ciśnienia w danym momencie
C. wilgotność
342. Наиболее полезная информация, полученная из регулярных показаний барометра - это:
A. тенденция изменения давления в зависимости от времени $
B. значение давления в данный момент
C. влажность

343. Strefa przejściowa na styku dwóch mas powietrza o różnych właściwościach (temperatura, wilgotność) to:
A. front atmosferyczny
B. termoclina
C. mistral
343. Переходная зона на стыке двух воздушных масс с разными свойствами (температура, влажность) - это:
А. атмосферный фронт $
B. термоклин
C. мистраль

344. Obok przedstawiono:
A. front ciepły
B. front zimny
C. front zokludowany
344. Ниже изображен:
А. теплый фронт
B. холодный фронт $
С. смешанный фронт

345. Powyżej przedstawiono:
A. front ciepły
B. front zimny
C. front zokludowany
345. Ниже показан:
А. теплый фронт
B. холодный фронт
С. смешанный фронт $

346. Co to jest tęcza?
A. efekt rozszczepienia promieni słonecznych przez krople deszczu, mgły czy chmury
B. wyłącznie efekt rozszczepienia promieni słonecznych przez mgłę
C. efekt rozszczepienia promieni słonecznych przy przejściu przez warstwę gazów
346. Что такое радуга?
А. эффект прохождения солнечных лучей каплями дождя, туманом или облаками $
B. только эффект расщепления солнечных лучей туманом
C. эффект деления солнечных лучей при прохождении через слой газов

347. Do pomiaru prędkości wiatru służy:
A. anemometr
B. barometr
C. aneroid
347. Для измерения скорости ветра используется:
А. анемометр $
B. барометр
C. анероид

348. Wywołanie przez radiostację VHF innego statku w celu uzyskania prognozy pogody jest:
A. możliwe, jeśli jest taka konieczność
B. nielegalne
C. powszechnie stosowane
348. Вызов УКВ радиостанций другого судна для получения прогноза погоды:
А. возможно, если это необходимо $
B. незаконно
C. широко используется

349. Instytucją odpowiedzialną za przygotowywanie prognoz pogody i ostrzeżeń meteorologicznych dla polskiego wybrzeża Bałtyku jest:
A. Biuro Hydrograficzne Marynarki Wojennej RP
B. Instytut Meteorologiczny Polskiego Radia
C. Instytut Meteorologii i Gospodarki Wodnej
349. Учреждением, ответственным за подготовку прогнозов погоды и метеорологических предупреждений для польского побережья Балтийского моря, является:
А. Гидрографическое Бюро ВМФ РП
B. Метеорологический Институт Польского Радио
C. Институт Метеорологии и Водного Хозяйства $

350. Ostrzeżenie przed niebezpiecznymi, nagłymi zjawiskami meteorologicznymi to silne żółte światła migające z częstotliwością:
A. ok. 40 błysków na minutę
B. ok. 90 błysków na minutę
C. ok. 120 błysków na minutę
350. Предупреждение об опасных, внезапных метеорологических явлениях - яркие желтые огни, мигающие с частотой:
А. около 40 вспышек в минуту
B. около 90 вспышек в минуту $
С. около 120 вспышек в минуту

351. O konieczności zwrócenia uwagi na możliwość wystąpienia nagłych zjawisk meteorologicznych informuje silne żółte światła migające z częstotliwością
A. ok. 40 błysków na minutę
B. ok. 90 błysków na minutę
C. ok. 120 błysków na minutę
351. О необходимости обратить внимание на возможность возникновения внезапных метеорологических явлений сообщает яркий желтый свет, мигающий с частотой
А. около 40 вспышек в минуту $
B. около 90 вспышек в минуту
С. около 120 вспышек в минуту

352. Izobara to:
A. linia łącząca miejsca o tych samych głębokościach
B. linia łącząca miejsca o tych samych wartościach ciśnienia atmosferycznego
C. przyrząd do pomiaru ciśnienia atmosferycznego
352. Изобара:
A. линия, соединяющая места одинаковой глубины
B. линия, соединяющая места с одинаковыми значениями атмосферного давления $
C. прибор для измерения атмосферного давления

353. Wiatr wiejący z prędkością 40 węzłów oznacza:
A znakomite warunki do żeglugi turystycznej
B. sztorm
C. cyklon tropikalny o niszczącej sile
353. Ветер, дующий со скоростью 40 узлов, означает:
отличные условия для туристического плавания
шторм $
тропический циклон разрушительной силы

354. Flauta (sztil) oznacza:
A. falę posztormową
B. zupełny brak wiatru
C. zbliżający się sztorm
354. Flauta (штиль) означает:
A. штормовая волна
B. полное отсутствие ветра $
С. надвигающийся шторм

355. Ten symbol na mapie pogodowej oznacza:
A. front ciepły
B. wiatr o sile sztormu
C. front zimny
355. Этот символ на карте погоды означает (см. рис. ниже):
А. теплый фронт
B. ветер с силой шторма $
С. холодный фронт

356. Podczas bryzy nocnej wiatr wieje:
A. od akwenu w kierunku lądu
B. od lądu w kierunku akwenu
C. wzdłuż brzegu
356. Во время ночного бриза, ветер дует:
от водоема к суше
от суши к водоему $
вдоль берега

357. Ruch powietrza od akwenu do lądu to zjawisko określane jako:
A. bryza nocna
B. bryza dzienna
C. monsun
357. Движение воздуха от водоема к суше - это явление, называемое:
А. ночной бриз
B. дневной бриз $
С. муссон

358. Od ilu stopni w skali Beauforta zaczyna się sztorm?
A. 8°B
B. 10°B
C. 12°B
358. На скольких градусах по шкале Бофорта начинается шторм?
A. 8°B $
B. 10°B
C. 12°B

359. Skala Beauforta służy do określania:
A. stanu morza
B. siły wiatru
C. kierunku wiatru
359. Шкала Бофорта используется для определения:
А. состояние моря
B. силы ветра $
C. направление ветра

360. Wiatr o sile 3°B to wiatr wiejący z prędkością:
A. 7-10 węzłów
B. 22-27 węzłów
C. 34-40 węzłów
360. Ветер 3°B - это ветер, дующий со скоростью:
A. 7-10 узлов $
B. 22-27 узлов
C. 34-40 узлов

361. Wiatr o sile 6°B, jest to wiatr wiejący z prędkością:
A. 7-10 węzłów
B. 22-27 węzłów
C. 34-40 węzłów
361. Ветер 6°B, это ветер, дующий со скоростью:
A. 7-10 узлов
B. 22-27 узлов $
C. 34-40 узлов

362. Wiatr o sile 8°B, jest to wiatr wiejący z prędkością:
A. 7-10 węzłów
B. 22-27 węzłów
C. 34-40 węzłów
362. Ветер 8°B, это ветер, дующий со скоростью:
A. 7-10 узлов
B. 22-27 узлов
C. 34-40 узлов $

363. Cyrkulacja mas powietrza w niżu w kierunku przeciwnym do kierunku ruchu wskazówek zegara jest charakterystyczna dla:
A. półkuli północnej
B. półkuli południowej
C. strefy zwrotnikowej
363. Циркуляция воздушных масс в низине против часовой стрелки характерна для:
А. северного полушария $
B. южного полушария
C. тропической зоны

364. Cyrkulacja mas powietrza w niżu w kierunku zgodnym z kierunkiem ruchu wskazówek zegara jest charakterystyczna dla:
A. półkuli północnej
B. półkuli południowej
C. strefy podbiegunowej
364. Циркуляция воздушных масс в низине по часовой стрелке характерна для:
А. северного полушария
B. южного полушария $
С. полярной зоны

365. Aby przystąpić do egzaminu na patent sternika motorowodnego należy
A. mieć ukończone 14 lat
B. mieć aktualne zaświadczenie lekarskie
C. mieć ukończone 16 lat
365. Для сдачи экзамена на патент на моторную лодку необходимо
A. быть старше 14 лет $
B. иметь актуальную медицинскую справку
C. быть старше 16 лет

366. Patent sternika motorowodnego uprawnia do:
A. prowadzenie jachtów motorowych bez ograniczeń
B. prowadzenie jachtów motorowych po wodach śródlądowych, prowadzenie jachtów motorowych o długości kadłuba do 12 m po wodach wewnętrznych, prowadzenie jachtów motorowych na pozostałych wodach morskich w strefie do 2 Mm od brzegu
C. prowadzenie jachtów motorowych po wodach śródlądowych, prowadzenie jachtów motorowych o długości kadłuba do 12 m po wodach wewnętrznych, prowadzenie jachtów motorowych na pozostałych wodach morskich w strefie do 2 Mm od brzegu, w porze dziennej
366. Патент на моторную лодку дает право на:
А. управление моторными яхтами без ограничений
B. управление моторными яхтами во внутренних водах, ууправление моторными яхтами длиной корпуса до 12 м во внутренних водах, управление моторными яхтами в остальных морских водах в зоне до 2 Мм от берега
C. управление моторными яхтами во внутренних водах, управление моторными яхтами длиной корпуса до 12 м во внутренних водах, управление моторными яхтами в других морских водах в зоне до 2 мм от берега, в дневное время $

367. Które stwierdzenie jest prawdziwe?
A. osoba, która nie ukończyła 18 roku życia, może realizować swoje uprawnienia wyłącznie na jachtach motorowych o mocy silnika do 60 kW
B. osoba, która nie ukończyła 16 roku życia, może realizować swoje uprawnienia wyłącznie na jachtach motorowych o mocy silnika do 60 kW
C. osoba, która nie ukończyła 18 roku życia, może realizować swoje uprawnienia na jachtach motorowych wyłącznie z opiekunem prawnym
367. Какое утверждение верно?
A. лицо, не достигшее 18 лет, может управлять моторной яхтой с мощностью двигателя до 60 кВт
B. лицо, не достигшее 16 лет, может управлять моторной яхтой с мощностью двигателя до 60 кВт $
C. лицо, не достигшее 18 лет, может управлять моторной яхтой только с законным опекуном

368. Osoba bez patentu motorowodnego może prowadzić jacht motorowy z silnikiem o mocy:
A. do 10 kW
B. do 5 kW
C. do 60 kW
368. Человек без патента на моторную лодку может управлять моторной яхтой с двигателем мощностью:
А. до 10 кВт $
B. до 5 кВт
C. до 60 кВт

369. Posiadanie dodatkowej licencji jest wymagane przy holowaniu:
A. wyłącznie narciarza wodnego i obiektów latających
B. wszelkich obiektów pływających (narciarz, banan, koło itp.) i latających
C. innego statku
369. Дополнительная лицензия требуется при буксировке:
А. только водных лыжников и летающих объектов
B. любых плавучих и летающих объектов (лыжник, банан, колесо, парашют и т.д.) $
С. другого судна

370. Za bezpieczeństwo żeglugi odpowiada:
A. armator
B. mechanik
C. kapitan lub kierownik statku
370. За безопасность судоходства отвечает:
А. судовладелец
B. механик
C. капитан или рулевой судна $

371. Przy spotkaniu dwóch jachtów motorowych na przecinających się kursach, ustępuje z drogi:
A. ten jacht, który płynie wolniej
B. ten jacht, który ma prawą wolną
C. ten jacht, który ma drugi jacht ze swojej prawej strony
371. При встрече двух моторных яхт на пересекающихся курсах, уступает путь:
А. та яхта, которая плывет медленнее
B. та яхта, у которой есть правая свободная сторона
C. та яхта, у которой есть другая яхта справа $

372. Jeżeli dwa statki idą naprzeciwko siebie i istnieje ryzyko zderzenia to obydwa powinny:
A. w wyraźny sposób zmienić kurs w рrawo, a aby minać sie lewymi burtami
B. w wyraźny sposób zmienić kurs w lewo, aby minąć się prawymi burtami
C. zatrzymać się
372. Если два судна идут друг против друга и существует риск столкновения, то оба должны:
А. четко и понятно изменить курс вправо, чтобы пройти левыми бортами $
B. четко и понятно изменить курс влево, чтобы пройти правыми бортами
C. остановиться

373. Statek żaglowy to:
A. każdy statek poruszający się za pomocą żagli i maszyny
B. każdy statek poruszający się wyłącznie za pomocą żagli
C. każdy statek poruszający się za pomocą żagli i innego napędu
373. Парусное судно:
A. любое судно, движущееся с помощью парусов и двигателя
B. любое судно, движущееся исключительно с помощью парусов $
C. каждое судно, движущееся с помощью парусов и других движителей

374. Mały statek to:
A. statek, którego długość jest mniejsza niż 12 m i szerokość jest mniejsza niż 3 m
B. statek o długości do 7 m
C. statek o długości do 20 m mogący przewozić nie więcej niż 12 osób
374. Маленькое судно - это:
A. судно, длина которого составляет менее 12 м, а ширина-менее 3 м
B. судно длиной до 7 м
C. судно длиной до 20 м, способное перевозить не более 12 человек $

375. Statek na postoju to wyłącznie:
A. statek, inny obiekt pływający lub scalone materiały pływające, stojące pośrednio lub bezpośrednio na kotwicy
B. statek, inny obiekt pływający lub scalone materiały pływające, stojące pośrednio lub bezpośrednio na kotwicy, lub przymocowane do brzegu
C. statek, stojący pośrednio lub bezpośrednio na kotwicy, lub przymocowany do brzegu
375. Судно на стоянке-это только:
A. судно, другой плавучий объект или объединенные плавучие материалы, стоящие косвенно или непосредственно на якоре
B. судно, другой плавучий объект или объединенные плавучие материалы, стоящие косвенно или непосредственно на якоре или прикрепленные к берегу $
C. судно, стоящее косвенно или прямо на якоре или прикрепленное к берегу

376. Pojęcie “zestaw holowany” definiuje się jako:
A. formację składającą się z jednego lub więcej statków, innych obiektów pływających, holowanych przez jeden lub więcej statków o napędzie mechanicznym, zwanych holownikiem
B. połączoną formację, składająca się ze statku holowanego przez statek o napędzie mechanicznym, zwany holownikiem
C. formację składającą się ze statków połączonych burtami
376. Термин “буксируемая сцепка” определяется как:
A. формирование, состоящее из одного или нескольких судов, других плавучих объектов, буксируемых одним или несколькими судами с механическим приводом, называемыми буксиром $
B. комбинированное образование, состоящее из судна, буксируемого судном с механическим приводом, которое называется буксиром
C. комплект, состоящий из судов, соединенных бортами

377. Pojęcie “prom" definiuje się jako:
A. statek o długości do 12 m mogący przewozić nie więcej niż 12 osób
B. statek o długości powyżej 12 m służący do przewozu osób i ładunku w poprzek drogi wodnej
C. statek zakwalifikowany przez Urząd Żeglugi Śródlądowej jako prom służący do przewozu osób i ładunku w poprzek drogi wodnej
377. Понятие “пром" определяется как :
A. судно длиной до 12 м, способное перевозить не более 12 человек
B.  судно длиной более 12 м для перевозки людей и грузов по водному пути
C. судно, зарегистрированное для управления по внутреннему судоходству как паром и, используемое для перевозки людей и грузов по водному пути $

378. Małe statki o napędzie mechanicznym:
A. ustępują pierwszeństwa małyrn statkom niebędącym statkami o napędzie mechanicznym (np. łodzie wiosłowe), statkom o napędzie żaglowym
B. nie muszą nikomu ustępować pierwszeństwa
C. ustępują pierwszeństwa tylko większym statkom o napędzie mechanicznym
378. Небольшие суда с механическим приводом:
A. уступают приоритет малым судам, не являющимся судами с механическим приводом (например, гребными лодками), парусным судам $
B. они не должны уступать приоритет никому
C. уступают приоритет только более крупным судам с механическим приводом

379. Który statek ma pierwszeństwo podczas spotkania w główkach portu?
A. wchodzący do portu
B. wychodzący z portu
C. kuter rybacki
379. Какое судно имеет приоритет при встрече во время входа в порт?
А. вход в порт
B. выход из порта $
C. рыболовный катер

380. Który statek ma pierwszeństwo na rzece?
A. szybszy
B. płynący w górę rzeki
C. płynący w dół rzeki
380. Какое судно имеет приоритет на реке? То, которое:
быстрее
идет вверх по течению
идет вниз по течению $

381. Który jacht ma pierwszeństwo podczas wyprzedzania?
wyprzedzany
wiekszy
wyprzedzający
381. Какая яхта имеет приоритет при обгоне?
A. обгоняемая
B. которая больше
C. обогонающая $

382. Który jacht ma pierwszeństwo podczas wyprzedzania?
А. wyprzedzany
B. większy
C. wyprzedzający
382. Какая яхта имеет преимущество при обгоне?
А. обгоняемая $
B. больше
C. обгоняющая

383. Zakaz wyprzedzania obowiązuje:
tylko przed śluzami
tylko na drogach wodnych oznaczonych znakiem zakazu wyprzedzania oraz znaku mijania i wyprzedzania
przed śluzami, w kanałach (dotyczy to jednostek  tego samego typu), pod mostami, na drogach wodnych oznaczonych znakiem zakazu wyprzedzania oraz znakiem zakazu mijania i wyprzedzania
383. Запрет на обгон действует:
только перед глиссированием
только на водных путях, отмеченных знаком прохода и знаком обгона
перед шлюзами, в каналах (это относится к единицам того же типа), под мостами, на водных путях, отмеченных знаком запрета на прохождение и обгон $

384. Jakie ograniczenia prędkości obowiązują na śródlądowych drogach wodnych (o ile lokalne nie stanowią inaczej):
na rzekach 30 km / h, na jeziorach 12 km/h, na kanałach bez ograniczeń
na rzekach 12 km/h, na jeziorach bez ograniczeń, na kanałach 6 km/h
na rzekach 12 km/h, na jeziorach 30 km/h, na kanałach bez ograniczeń
384. Какие ограничения скорости действуют на внутренних водных путях (если местные знаки не предусматривают иное):
на реках 30 км / ч, на озерах 12 км / ч, на каналах без ограничений
на реках 12 км / ч, на озерах без ограничений, на каналах 6 км / ч $
на реках 12 км / ч, на озерах 30 км / ч, на каналах без ограничений

385. Jak jest traktowany jacht płynący na żaglach i na silniku?
A. jako statek żaglowy
B. jako statek o napędzie mechanicznym
C. przepisy tego nie precyzują
385. Каким судном считается, яхта идущая на парусах и на двигателе?
как парусное судно
как судно с механическим приводом $
правила этого не уточняют

386. Jaka jest prawidłowa kolejność pierwszeństwa jachtów:
A. 1. motorowy 2. żeglowny 3. wioślowy
B. 1. żeglowny 2. wiosłowy 3. motorowy
C. 1. wiosłowy 2. żeglowny 3. motorowy
386. Каков правильный порядок приоритета для яхт:
А. 1. моторная 2. парусная 3. на веслах
B. 1. парусная 2. на веслах 3. моторная $
С. 1. на веслах 2. парусная 3. моторная

387. Która z jednostek ma pierwszeństwo przy spotkaniu windsurfingu z jachtem o napędzie mechanicznym?
A. przepisy tego nie precyzują
B. jacht o napędzie mechanicznym
C. windsurfing
387. Какое судно имеет приоритет при встрече виндсерфинга с яхтой с механическим приводом?
А. правила этого не уточняют
B. яхта с механическим приводом
C. виндсерфинг $

388. Nieuprzywilejowany statek poruszający się z prędkością powyżej 40 km/h:
A. powinien pozostawić innym statkom akwen zapewniający im możliwość zachowania kursu oraz swobodę manewrowania
B. ma pierwszeństwo drogi
C. ma pierwszeństwo drogi, ale jedynie w odniesieniu do jachtów żaglowych.
388. Уступающее судно, движущееся со скоростью более 40 км/ч:
A. должно предоставить другим судам акваторию, обеспечивающую им возможность сохранять курс и место для маневрирования $
B. имеет приоритет движения
C. имеет приоритет движения, но только в отношении парусных яхт

389. Jeden długi dźwięk trwa:
ok. 4 sekundy
ok. 2 sekundy
ok. 1 sekundy
389. Один длинный звуковой сигнал продолжается:
около 4 секунд $
около 2 секунд
около 1 секунды

390. Jeden krótki dźwięk trwa:
ok. 4 sekundy
ok. 2 sekundy
ok. 1 sekunda
390. Один короткий звуковой сигнал продолжается:
около 4 секунд
около 2 секунд
около 1 секунды $

391. Sygnał "wzywam pomocy" to:
A. seria krótkich dźwięków
B. cztery krótkie dźwięki
C. powtarzające się długie dźwięki lub jeden ciągły sygnał
391. Звуковой сигнал "призываю на помощь" это:
А. серия коротких звуковых сигналов
B. четыре коротких звуковых сигналов
C. повторяющиеся длинные звуковые сигналы или один непрерывный звуковой сигнал $

392. Sygnał "człowiek za burtą":
A. Seria podwójnych krótkich dźwięków
B. seria pojedynczych krótkich dźwięków
C. trzy krótkie dźwięki
392. Сигнал "человек за бортом" представляет собой:
А. серию двойных коротких звуковых сигналов $
B. серию одиночных коротких звуковых сигналов
C. три коротких звуковых сигнала

393. Sygnał "zmieniam kurs w prawo" to:
A. dwa krótkie dźwięki
B. jeden krótki dźwięk
C. trzy krótkie dźwięki
393. Сигнал "меняю курс вправо" это:
А. два коротких звуковых сигнала
B. один короткий звуковой сигнал $
C. три коротких звуковых сигнала

394. Sygnał “zmieniam kurs w lewo” to:
A. dwa krótkie dźwięki
B. jeden krótki dźwięk
C. trzy krótkie dźwięki
394. Сигнал ”меняю курс влево" это:
А. два коротких звуковых сигнала $
B. один короткий звуковой сигнал
C. три коротких звуковых сигнала

395. Co oznacza jeden długi dźwięk nadany przez statek?
A. uwaga
B. moje maszyny pracuja wstecz
C. nie mogę manewrować
395. Что означает один длинный звуковой сигнал, данный судном?
A. внимание $
B. мои двигатели работают в обратном направлении
C. не могу маневрировать

396. Jaki sygnał nadaje prom w czasie mgły?
A. jeden długi i dwa krótkie dźwięki
B. jeden długi i cztery krótkie dźwięki
C. trzy krótkie dźwięki i jeden długi dźwięk
396. Какой звуковой сигнал подает паром во время тумана?
A. один длинный и два коротких звуковых сигнала
B. один длинный и четыре коротких звуковых сигнала $
C. три коротких и один длинный звуковых сигнала

397. Sygnał "moje maszyny pracują wstecz" to:
A. trzy krótkie dźwięki
B. trzy długie dźwięki
C. seria podwójnych krótkich dźwięków
397. Звуковой сигнал "мои двигатели работают в обратном режиме” звучит как:
А. три коротких звуковых сигнала $
B. три длинных звуковых сигнала
C. серия двойных коротких звуковых сигналов

398. Sygnał “nie mogę manewrować" to:
A. dwa krótkie dźwięki
B. cztery krótkie dźwięki
C. trzy krótkie dźwięki
398. Звуковой сигнал "не могу маневрировать" это:
А. два коротких звуковых сигнала
B. четыре коротких звуковых сигнала $
C. три коротких звуковых сигнала

399. Sygnał dźwiękowy zamierzam Cię wzpryedyic wydluy Twojej prawej burty" to:
A. jeden krótki
B. dwa długie i dwa krótkie
C. dwa długie i jeden krótki
399. Звуковой сигнал "намерен обойти по правому борту" - это:
A. один короткий звуковой сигнал
B. два длинных и два коротких звуковых сигнала
C. два длинных и один короткий звуковой сигнал $

400. Długi sygnał słyszalny co około minutę we mgle oznacza:
A. statek na kotwicy
B. nic nie oznacza
C. statek w ruchu, z wyjątkiem promów i pociągów holowanych, sprzężonych i pchanych
400. Длинный сигнал, слышимый около минуты в тумане, означает:
A. судно на якоре
B. ничего не значит
C. судно в движении, за исключением паромов и буксируемых, сцепленных и буксируемых судов $

401. Sygnał dźwiękowy "zamierzam Cię wyprzedzić wzdłuż Twojej lewej burty" to:
A. jeden krótki
B. dwa długie i dwa krótkie
C. dwa długie i jeden krótki
401. Звуковой сигнал "собираюсь обогнать по левому борту" это:
A. один короткий звуковой сигнал
B. два длинных и два коротких звуковых сигнала $
C. два длинных и один короткий звуковой сигнал

402. Sygnał dźwiękowy "zwracam w lewo" to:
A. jeden długi, dwa krótkie, jeden długi dźwięk
B. dwa długie i jeden krótki
C. jeden długi i dwa krótkie
402. Звуковой сигнал "поворачиваю налево" это:
A. один длинный, два коротких, один длинный звуковой сигнал
B. два длинных и один короткий звуковой сигнал
C. один длинный и два коротких звуковых сигнала $

403. Sygnał "zatrzymajcie natychmiast statek" to:
A. jeden długi, jeden krótki, dwa długie dźwięki
B. jeden krótki, jeden długi, dwa krótkie dźwięki
C. jeden długi, dwa krótkie, jeden długi dźwięk
403. Сигнал "немедленно остановите корабль" это:
один длинный, один короткий, два длинных звуковых сигнала
один короткий, один длинный, два коротких звуковых сигнала $
один длинный, два коротких, один длинный звуковой сигнал

404. Sygnał "niebezpieczeństwo zderzenia" to:
A. seria bardzo krótkich dźwięków
B. seria długich dźwięków
C. dwa krótkie dźwięki
404. Сигнал "опасность столкновения" это:
A. серия очень коротких звуковых сигналов $
B. серия длинных звуковых сигналов
C. два коротких звуковых сигнала

405. Kilkusekundowy sygnał nadawany dzwonem słyszany co okolo minute we mgle oznacza:
A. statek zajęty pracami podwodnymi
B. statek nieodpowiadający za swoje ruchy
C. statek na kotwicy
405. Сигнал в несколько секунд, передаваемый колоколом, слышимым примерно каждую минуту в тумане, означает:
A. судно занятое подводными работами
B. судно, не отвечающее за свои движения
C. судно на якоре $

406. Co oznacza jeden długi dźwięk i jeden krótki nadany przez statek?
A. zamierzam wyprzedzać wzdłuż waszej prawej burty.
B. zawracam w prawo
C. statek nieodpowiadający za swoje ruchy
406. Что означает один длинный звук и один короткий, передаваемый судном?
А. собираюсь обогнать по правому борту.
B. поворачиваю направо $
C. судно, неуправляемо

407. Dwa długie sygnały słyszane co około minutę we mgle oznaczają:
A. zestaw pchany, sprzężony lub zestaw holowany
B. statek w ruchu, z wyjątkiem promów i zestawów holowanych, sprzężonych i pchanych
C. statek na kotwicy
407. Два длинных сигнала, услышанных в тумане, означают:
A. толкаемый, сцепленный или буксируемая сцепка судов $
B. судно в движении, за исключением паромов и буксируемых, сцепленных и толкаемых буксируемых сцепок судов
C. судно на якоре

408. Sektor świecenia światła burtowego wynosi:
A. 112,5°
B. 90°
C. 130°
408. Сектор освещения бортового света составляет:
А. 112,5° $
B. 90°
С. 130°

409. Sektor świecenia światła masztowego wynosi
225°
215°
235°
409. Сектор освещения мачтового света составляет:
225° $
215°
235°

410. Sektor świecenia światła rufowego wynosi:
A. 145°
B. 135°
C. 180°
410. Сектор освещения кормового света составляет:
A. 145°
B. 135° $
С. 180°

411. Jakiego koloru powinno być światło burtowe prawe?
A. czerwonego
B. zielonego
C. białego
411. Какого цвета должен быть правый бортовой огонь?
А. красного
B. зеленого $
С. белого

412. Jakiego koloru powinien być światło burtowe lewe?
A. czerwonego
B. zielonego
C. białego
412. Какого цвета должен быть левый бортовой огонь?
А. красного $
B. зеленого
С. белого

413. Światło koloru białego to:
A. światło rufowe lub światło masztowe pozycyjne lub światło kotwiczne
B. światło rufowe lub światło burtowe
C. światło oznaczające statek zajęty połowem
413. Свет белого цвета это:
A. кормовой фонарь или позиционный мачтовый фонарь или якорный фонарь $
B. кормовой фонарь или бортовой фонарь
C. фонарь, обозначающий судно, осуществляющее рыбалку

414. Jak powinien być oznakowany w nocy statek o napędzie  mechanicznym o długości do 7 metrów podczas ruchu z prędkością do 10 km/h W nocy?
A. światło biale widoczne dookoła widnokręgu
B. światło czerwone widoczne dookola widnokręgu
C. światło zielone widoczne dookola widnokręgu.
414. Как следует обозначать ночью судно с механическим приводом длиной до 7 метров при движении со скоростью до 10 км/ч?
А. белый свет, видимый по всему кругу $
B. красный свет, видимый по всему кругу
C. зеленый свет, видимый по всему кругу.

415. Dodatkowa oznakowanie nocne statku  pojawiającego przez trałowanie to:
światło zielone nad białym widoczne dookola widnokręgu.
światło czerwone nad białym widoczne dookola widnokręgu.
światło białe nad czerwonym widoczne dookola widnokręgu..
415. Дополнительное ночное обозначение рыболовного судна путем траления осуществляется:
зеленым светом над белым, виден по кругу $
красным светом над белым, виден по кругу.
белым светом над красным, виден по кругу.

416. Dodatkowe oznakowanie nocne statku pojawiającego metoda inna niż przez trałowanie to:
światło zielone nad białym widoczne dookola widnokręgu
światło czerwone nad białym widoczne dookola widnokręgu.
światło białe nad czerwonym widoczne dookola widnokręgu.
416. Дополнительное ночное обозначение рыболовного судна методом, отличным от траления осуществляется:
зеленым светом над белым, виден по всему кругу
красным светом над белым, виден по кругу $
белый свет над красным, виден по кругу.

417. Dodatkowe oznakowanie nocne statku pelniacego sluzbe pilotowa to:
światło zielone nad białym widoczne dookola widnokręgu
światło czerwone nad białym widoczne dookola widnokręgu.
światło białe nad czerwonym widoczne dookola widnokręgu.
417. Дополнительными ночными фонарями для судна, находящегося в лоцманской службе, являются:
зеленый свет над белым, видимый по всему горизонту
красный свет над белым светом, видимым по всему горизонту
белый свет над красным светом, видимым по всему горизонту $

418. Jak w porze nocnej powinien być dodatkowo oznacnakowany statek, który utracił manewrowość?
dwa zielone światła widoczne widoczne dookoła widnokręgu
B. dwa czerwone światła widoczne widoczne dookoła widnokręgu
trzy czerwone światła widoczne widoczne dookoła widnokręgu
418. Как в ночное время должен быть дополнительно обозначено судно, потерявшее маневренность
два зеленых фонаря, видимых по всему кругу
два красных фонаря, видимых по всему кругу $
три красных фонаря, видимых по всему кругу

419. Jak w porze nocnej powinien być oznakowany statek o długości 9 m stojący na kotwicy?
białe światło widoczne dookola widnokręgu
zielone światło widoczne dookola widnokręgu
czerwone światło widoczne dookola widnokręgu
419. Как в ночное время должно быть обозначено судно длиной 9 м, стоящее на якоре?
белый свет, видимый по всему кругу $
зеленый свет, видимый по всему кругу
разбитый свет, видимый по всему кругу

420. Oznakowanie promu na wodach śródlądowych, na uwięzi w nocy to:
światło zielone nad białym widoczne dookola widnokręgu
światło białe nad zielonym widoczne dookoła widnokręgu
światło czerwone nad białym widoczne dookola widnokręgu
420. Маркировка парома во внутренних водах, пришвартованного ночью:
зеленый свет над белым виден по всему кругу $
белый свет над зеленым виден по всему кругу
красный свет над белым виден по всему кругу

421. Drugie światło masztowe na morzu oznacza statek o długości:
A. 25 m i więcej
B. 110 m i więcej
C. 50 m i więcej
421. Второй флагшток в море означает судно длиной:
A. 25 м и более
В. 110 м и более
С. 50 м и более $

422. Drugie światło masztowe na śródlądziu oznacza statek o długości:
A. 25 m i więcej
B. 110 m i więcej
C. 50 m i więcej
422. Второй мачтовый свет на внутренней стороне означает судно длиной:
A. 25 м и более
B. 110 м и более $
С. 50 м и более

423. Jakiego koloru dodatkowe swiatlo w porze nocnej na wodach śródlądowych powinien nieść statek przewożący materiały łatwopalne?
A. niebieskie
B. białe
C. czerwone
423. Какого цвета дополнительный свет в ночное время во внутренних водах должно нести судно, перевозящее легковоспламеняющиеся материалы?
А. синий $
B. белый
С. красный

424. Jakie dodatkowe światła powinien nieść prom przemieszczający się swobodnie w nocy na wodach śródlądowych?
na przemian światło zielone, białe i zielone widoczne dookola widnokręgu
jedno światło zielone nad białym widoczne dookola widnokręgu
dwa światła białe nad zielonym widoczne dookola widnokręgu
424. Какое дополнительное освещение должен нести паром, свободно перемещающийся ночью во внутренних водах?
чередуйте зеленый, белый и зеленый свет, видимый по всему кругу
один зеленый свет над белым, видимый по всему кругу $
два белых света над зеленым, видимых по всему кругу

425. Jak dodatkowo w porze nocnej powinien być oznakowany statek o ograniczonej zdolności manewrowej?
pionowo umieszczone trzy czerwone światła, widoczne dookola widnokręgu
pionowo umieszczone swiatlo czerwone,biale, czerwone widoczne dookola widnokręgu
niebeskie światło, widoczne dookola widnokręgu
425. Как дополнительно в ночное время должно быть обозначено судно с ограниченной маневренностью?
вертикально расположенные три красных фонаря, видимые по всему кругу
вертикально расположенные: красный, белый, красный фонари, видимые по всему кругу $
голубой свет, видимый по кругу

426. Jak powinien być oznakowany w nocy na śródlądziu statek o napędzie mechanicznym o długości większej niż 110 m?
czerwone swiatlo na lewej burcie, zielone światło na prawej burcie, białe światło na rufie, dwa białe światła masztowe na dwóch różnych masztach.
światło białe nad zielonym  widoczne dookola widnokręgu
czerwone światło na lewej burcie, zielone światło na prawej burcie, jedno białe światło masztowe
426. Как на внутренних водах следует обозначать ночью судно с механическим приводом длиной более 110 м?
красным светом по левому борту, зеленый свет по правому борту, белый свет на корме, два белых фонаря на двух разных мачтах $
белый свет над зеленым видимым кругом,
красный свет по левому борту, зеленый свет по правому борту, один белый свет на мачте

427. Statek, dodatkowo oznaczony w nocy dwoma czerwonymi światłami ustawionymi w pionie widocznymi  dookola widnokręgu jest statkiem:
nieodpowiadajacym za swoje ruchy
idącym równocześnie na żaglach i silniku
stojącym na kotwicy
427. Судно, дополнительно обозначенное ночью двумя вертикальными красными огнями, видимыми по всему кругу, является судном:
не отвечающим за свои движения (неуправляемое судно) $
идущим одновременно на парусах и двигателе
стоящим на якоре

428. Z której burty należy minąć statek niosący na prawej burcie światło czerwone, a na lewej dwa zielone ustawione w pionie?
z prawej burty
z lewej burty
z dowolnej burty
428. С какого борта должно пройти судно, несущее по правому борту красный свет, а по левому два зеленых, расположенных вертикально?
с правого борта
с левого борта $
с любого борта

429. Statek oznakowany w nocy dodatkowo trzema czerwonymi światłami ustawionymi w pionie widocznymi dookola widnokręgu jest statkiem:
pojawiającym przez trałowanie
ograniczonym swoim zanurzeniem
na mieliznie
429. Судно, обозначенное ночью дополнительно тремя красными огнями, установленными вертикально, видимыми по всему кругу, является судном:
занимающимся ловлей путем траления
ограниченным своей осадкой $
на мели

430. Jak powinien być oznakowany w nocy na morzu statek o napędzie mechanicznym o długości mniejszej niż 50m:
światło białe nad zielonym  widoczne dookola widnokręgu
czerwone swiatlo na lewej burcie, zielone swiatlo na prawej burcie, białe swiatlo na rufie, białe swiatlo na maszcie.
czerwone światło na lewej burcie, zielone światło na prawej burcie.
430. Как ночью в море следует обозначать судно с механическим приводом длиной менее 50 м:
белый свет над зеленым видимым кругом
красный свет по левому борту, зеленый свет по правому борту, белый свет по корме, белый свет по мачте $
красный свет по левому борту, зеленый свет по правому борту

431. Z której burty należy minąć statek niosący na lewej burcie czerwona kule a na prawej dwa zielone romby ustawione w pionie?
z prawej burty
z lewej burty
z dowolnej burty
431. С какого борта должно пройти судно, несущее по левому борту красный шар, а по правому два зеленых ромба, расположенных вертикально?
с правого борта $
с левого борта
с любого борта

432. Tyka z wiecha na śródlądowym szlaku wodnym oznacza:
prawą stronę szlaku żeglownego
lewa strona szlaku żeglownego
miejsce szczególnie niebezpieczne
432. Вешка со щеткой на внутренних водах означает:
правую сторону судоходного пути $
левую сторону судоходного пути
особо опасное место

433. Tyka bez wiechy na śródlądowym szlaku wodnym oznacza:
lewa strona szlaku żeglownego
prawą stronę szlaku żeglownego
miejsce szczególnie niebezpieczne
433. Вешка без щетки на внутренних водах означает:
левую сторону судоходного пути $
правую сторону судоходного пути
особо опасное место

434. Jak powinien być oznakowany prom z pierwszeństwem przejścia, przemieszczający się swobodnie w dzień na wodach śródlądowych?
zielona kula nad białym walcem
biały walec
czarna kula
434. Как должен быть обозначен паром имеющий право дороги, свободно перемещающийся днем во внутренних водах?
зеленый шар над белым цилиндром $
белый цилиндр
черный шар

435. Jak w porze dziennej powinien być oznakowany statek z pierwszeństwem przejścia?
biały proporzec
zielony proporzec
czerwony proporzec
435. Как в дневное время должно быть обозначено судно с правом дороги?
белый вымпел
зеленый вымпел
красный вымпел $

436. Jak w porze dziennej powinien być oznakowany prom na uwięzi, na wodach śródlądowych:
czerwona kula
zielona kula
zielony walec
436. Как в дневное время следует обозначать пришвартованный паром во внутренних водах:
красный шар
зеленый шар $
зеленый цилиндр

437. Jak w porze dziennej powinien być oznakowany statek o ograniczonej zdolności manewrowej?
umieszczone pionowo: dwa czarne walce, a między nimi czarna kula
umieszczone pionowo: dwie czarne kule, a między nimi dwa czarne stożki zlaczone podstawami.
umieszczone pionowo: trzy czarne kule
437. Как в дневное время должно быть обозначено судно с ограниченной маневренностью?
расположенные вертикально: два черных цилиндра, а между ними черный шар
расположены вертикально: два черных шара, а между ними два черных конуса, соединенных основаниями $
вертикальное размещение: три черных шара

438. Jak w porze dziennej na wodach śródlądowych powinien byc oznakowany statek przewożący materiały łatwopalne?
czarny stożek skierowany wierzchołkiem w górę
niebieski stożek skierowany wierzchołkiem w górę
niebieski stożek skierowany wierzchołkiem w dół
438. Как в дневное время во внутренних водах должно быть обозначено судно, перевозящее легковоспламеняющиеся материалы?
черный конус, направленный вершиной вверх
синий конус, направленный вершиной вверх
синий конус, направленный вершиной вниз $

439. Statek oznakowany czarnym stożkiem skierowanym wierzczolkiem w dół to:
statek idący wyłącznie na silniku
statek zajęty połowem
statek idący równocześnie na żaglach i silniku
439. Судно, обозначенное черным конусом, направленным вершиной вниз - это:
судно, идущее исключительно на двигателе
судно занято рыбалкой
судно, идущее одновременно на парусах и двигателе $

440. Dwa czarne stożki połączone wierzchołkami oraz stożek skierowany wierzchołkiem w górę to znak dzienny oznaczający:
statek zajęty połowem innym niż trałowanie
statek ograniczony swoim zanurzeniem
statek zajęty połowem przez tralowanie
440. Два черных конуса, соединенных вершинами, и конус, обращенный вершиной вверх - это дневной знак, обозначающий:
судно занято рыбной ловлей, кроме траления $
судно ограничено своей осадкой
судно занято рыбалкой путем траления

441. Na wodach morskich statek oznakowany w dzień czarną kulą to:
statek na kotwica
statek tralujacy miny
poglebiarka
441. В морских водах судно, отмеченное днем черным шаром:
судно на якоре $
минный тральщик
земснаряд

442. Jak w porze dziennej powinien być oznakowany holownik zajęty holowaniem, na wodach śródlądowych?
czarny walec
B. żółty walec z bialymi i czarnymi paskami na jego brzegach
żółta kula
442. Как в дневное время должен быть обозначен буксир, занятый буксировкой, во внутренних водах?
черный цилиндр
желтый цилиндр с белыми и черными полосами по краям $
желтый шар

443. Oznakowanie promu przemieszczającego się swobodnie za dnia, na wodach śródlądowych to:
zielona kula nad białym walcem
B. zielony walec
zielona kula
443. Паром, свободно движущегося днем, во внутренних водах обозначается:
зеленым шаром над белым цилиндром
зеленым цилиндром
зеленым шаром $

444. Dwie czarne kule w pionie są znakiem dziennym oznaczającym:.
A.statek ograniczony swoim zanurzeniem
B. statek nieodpowiadający za swoje ruchy
C. statek na mieliźnie
Два черных шара по вертикали - это дневной знак, обозначающий:
судно ограничено своей осадкой
судно, не отвечающее за свои маневры $
судно на мели

445. Czarny walec pod salingiem jest znakiem dziennym oznaczającym:
statek zajęty bołówem
statek ograniczony swoim zanurzeniem
statek na mieliźnie
445. Черный цилиндр под парусом - это дневной знак, обозначающий:
судно занятое ловом рыбы
судно ограниченное своей осадкой $
судно на мели

446. Dwa czarne stożki połączone wierzchołkami to znak dzienny oznaczający:
statek zajety połowem przez trałowanie
statek ograniczony swoim zanurzeniem
statek na mieliźnie
446. Два черных конуса, соединенных вершинами - это дневной знак, обозначающий:
судно занято рыбалкой путем траления $
судно ограничено своей осадкой
судно на мели

447. Jak w porze dziennej na wodach śródlądowych powinien być oznakowany statek stojący na kotwicy?
czarna kula
biała kula
czarny stożek skierowany wierzchołkiem w dół.
447. Как в дневное время во внутренних водах должно быть обозначено судно, стоящее на якоре?
черным шаром $
белым шаром
черным конусом направленным верхушкой вниз

448. Powyżej jakiej mocy silników przegląd techniczny jachtu motorowego jest obowiązkowy?
A. 75 KW
B. 75 km
C. 100 KW
448. Выше какой мощности двигателей обязателен технический осмотр моторного судна?
75 кВт $
75 км
100 кВт

449. Dla jakich jachtów motorowych rejestracja nie jest obowiązkowa?
dla jachtów o mocy silnika poniżej 15 kw
dla jachtów pływających wyłącznie po wodach śródlądowych
wyłącznie dla jachtów o mocy silnikow poniżej 10 kW.
449. Для каких моторных яхт регистрация не является обязательной?
для яхт с мощностью двигателя менее 15 кВт $
для яхт, плавающих только во внутренних водах
исключительно для яхт с двигателями мощностью менее 10 кВт.Для каких моторных яхт регистрация не является обязательной?

450. Z prawej strony masztu podnosimy:
A. banderę właściwa dla załogi jachtu
B. banderę klubowa lub firmowa załogi
C. banderę kraju na wodach terytorialnych, którego aktualnie przebywamy, ale dopiero po dokonaniu odprawy granicznej, oczekując na odprawę, podnosimy żółtą flagę" Q " MKS (Nie dotyczy to sytuacji, w której jest to kraj bandery statku)
450. Какой флаг поднимается с правой стороны мачты:
A. флаг, подходящий для экипажа яхты
B. клубный или корпоративный флаг экипажа
C. флаг страны в территориальных водах, в которых мы сейчас находимся, но только после прохождения пограничной проверки, ожидая регистрации, мы поднимаем желтый флаг" Q " MKS (это не относится к ситуации, когда это страна флага судна) $

451. Kiedy światła statku powinny być zapalone?
A. od zachodu do wschodu słońca i przy ograniczonej widoczności
B. od zachodu do wschodu słońca
C. Od 18:00 do 06:00.
451. В какое время должны быть включены огни на судне?
А. от заката до восхода солнца и при ограниченной видимости $
Б. от заката до восхода солнца
С 18:00 до 06:00.

452. Organami uprawnionymi do kontroli dokumentów statku na śródlądziu są:
A. policja, WOPR, Urząd Żeglugi Śródlądowej
B. policja, Urząd Żeglugi Śródlądowej, Urząd Celny
C. wyłącznie policja
452. Органами, уполномоченными на контроль над судном во внутренних водах, являются:
A. полиция, WOPR, управление внутреннего судоходства
B. полиция, Управление Внутренних Перевозок, таможня $
C. только полиция

453. Poruszając się po jachcie, należy używać obuwia:
A. z naturalnej skóry
B. nieprzemakalnego
C. na miękkiej, gumowej podeszwie, najlepiej w kolorze białym.
453. Передвигаясь по яхте, следует пользоваться обувью:
A. натуральная кожа
B. непромокаемый
C. на мягкой резиновой подошве, желательно белого цвета $

454. Zdjęcie butów przed wejściem na jacht jako gość to:
A. archaiczne zachowanie, współcześnie nie mające uzasadnienia
B. oznaka szacunku dla gospodarzy i wyraz znajomości etykiety żeglarskiej
C. zbędny nadmiar kurtuazji
454. Снять обувь перед тем, как войти на яхту в качестве гостя:
А. архаичное поведение, в настоящее время не оправданное
B. знак уважения к хозяевам и выражение знания морского этикета $
C. излишняя вежливость

455. Jacht morski płynący na silniku nosi banderę:
A. na maszynie
B. na flagstoku
C. na relingi
455. Морская яхта, идущая под двигателем, несет флаг:
А. на мачте
B. на флагштоке $
С. на рейлинге

456. Bandera w czasie postoju jachtu w porcie podniesiona jest na rufie:
A. od wschodu do zachodu słońca
B. całą dobę
C. od 08:00 do zachodu słońca
456. Флаг в порту поднимается на корме во время стоянки яхты:
А. от восхода до заката
B. круглосуточно
C. с 08:00 до заката $

457. Czarteruj jacht obcej bandery, bandera polska lub proporzec klubowy:
A. można podnieść na achtersztagu, obok banderu jachtu.
B. Można podnieść z lewej strony masztu
C. Można podnieść z prawej strony masztu
457. Арендуя яхту под иностранным флагом, польским флагом или клубным флагом:
А. можно поднять на ахтерштаге, рядом с флагом яхты
B. можно поднять с левой стороны мачты $
C. можно поднять с правой стороны мачты

458. Głośne zachowanie w marinach i portach jachtowych:
A. to dowód znajomości kulturze wodniackiej
B. swiadczy o braku kultury i podstawowych zasad współzycia społecznego oraz naraża osoby tak zachowujące się na sankcje.
C. wymaga uprzedniego odwiedzenia sąsiedujacych jachtów i wypicia symbolicznego kieliszka z ich kapitanami
458. Громкое поведение в пристанях для яхт и портах:
А. это доказательство знания водной культуры
B. свидетельствует об отсутствии культуры и основных принципов социального общения и подвергает лиц, которые так ведут себя, санкциям $
C. требование посетить соседние яхты и выпить символический бокал с их капитанами

459. Czy należy odbierać i układać na papierze cumy od obcego cumujacego jachtu?
A. można, za zgodą kapitana dobijającej jednostki
B. jest to niedozwolone
C. Nie, gdyż jest to dowodem braku znajomości etykiety żeglarskiej.
459. Можно ли отвязывать швартовые с другой яхты и завязывать их на кнехт?
А. можно, с согласия капитана пришвартованного рядом судна
B. это не допускается $
C. нет, это свидетельствует о незнании морского этикета

460. Obkładanie cum na polerach zajętych przez inną jednostkę:
A. jest zabronione
B. jest dopuszczalne w wyjątkowych sytuacjach
C. wymaga takiego obłożenia cum, aby cumujący wcześniej nie miał problemu z oddaniem własnych cum
460. Наложение швартовых на кнехт, который уже занят швартовым другой яхты:
А. запрещено
B. допустимо в исключительных ситуациях
C. требуется такое фиксирование швартовых, чтобы у пришвартованной ранее яхты не было проблем с отдачей собственных швартовых $

461. Gdy po wpłynięciu do obcego, zatłoczonego portu znajdziemy wolne miejsce cumownicze to:
Można zacumować, ale nalezy niezwlocznie znaleźć bosmana/zarzadce nabrezeza i spytac sie o pozwolenie zacumowania uzgadniajac czaspostoju i ewetualnie naleza oplate
nalezy sie cieszyc ze szczęścia i zgodnie z wodniacka zasadą  "kto pierwszy, ten lepszy" uznać, że to miejsce właśnie na nas czekało
przed zacumowaniem musimy bezwzględnie uzgodnić przez radio dostępność miejsca postojowego
461. Когда мы заходим в чужой, переполненный порт, мы находим свободное место для швартовки:
можно пришвартоваться, но следует незамедлительно найти боцмана / управляющего порта и спросить разрешения пришвартоваться, согласовав время стоянки и, следовательно, причалить $
мы должны наслаждаться счастьем и, согласно правилу "первым пришел, первым обслужен", признать, что это место просто ждало нас
перед швартовкой необходимо обязательно согласовать по радио наличие парковочного места
`;
