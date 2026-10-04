// Teksty polskiej wersji. *słowo* — akcent (czerwony), \n — nowa linia.
export default {
  name: 'Polski',
  label: 'PL',
  locale: 'pl_PL',
  logoTag: 'Warsztat · Poznań',

  meta: {
    title: 'AUTO 61 — warsztat samochodowy w Poznaniu: zawieszenie, opony, olej',
    description:
      'Niezależny warsztat samochodowy na Grunwaldzie w Poznaniu. Naprawa zawieszenia, wymiana opon i wulkanizacja, wymiana oleju, hamulce, diagnostyka komputerowa. Twoje części lub nasze. Mówimy po polsku i ukraińsku.',
  },

  nav: {
    skip: 'Przejdź do treści',
    menu: 'Menu główne',
    lang: 'Język',
    open: 'Otwórz menu',
    close: 'Zamknij menu',
    cta: 'Umów wizytę',
    items: {
      home: 'Start',
      services: 'Usługi',
      care: 'Podejście',
      parts: 'Części',
      process: 'Jak pracujemy',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
  },

  hero: {
    mark: 'Poznań · Grunwald · od 2012',
    title: 'Twoje auto\nw *dobrych*\nrękach',
    lead: 'Niezależny warsztat, w którym naprawiamy dokładnie to, co trzeba — i ani śrubki więcej. Zawieszenie, opony, olej, hamulce i diagnostyka. Najpierw rozmowa i wycena, potem klucz.',
    cta: 'Umów wizytę',
    call: 'Zadzwoń',
    open: 'Otwarte',
    closed: 'Zamknięte',
    hours: 'Pn–Pt 8–18 · Sb 9–14',
    gauge: 'obr/min × 1000',
    badge: 'Diagnoza\n0 zł',
    badgeNote: 'przy zleceniu naprawy',
    photoAlt: 'Mechanik AUTO 61 przy pracy w komorze silnika',
  },

  ticker: ['Zawieszenie', 'Wulkanizacja', 'Wymiana oleju', 'Hamulce', 'Diagnostyka OBD', 'Geometria kół', 'Klimatyzacja', 'Rozrząd', 'Akumulatory'],

  stats: [
    { value: '14', unit: 'lat', label: 'w Poznaniu, w jednym miejscu' },
    { value: '6', unit: 'stanowisk', label: 'w tym dwa do geometrii i opon' },
    { value: '12', unit: 'mies.', label: 'gwarancji na wykonaną pracę' },
    { value: '4,9', unit: '★', label: 'średnia ocen klientów w Google' },
  ],

  services: {
    eyebrow: 'Usługi',
    title: 'Od *wymiany oleju*\npo remont zawieszenia',
    lead: 'Obsługujemy samochody osobowe i dostawcze do 3,5 t wszystkich marek. Ceny to robocizna brutto — bez części.',
    from: 'od',
    featured: [
      { img: 'suspension', title: 'Zawieszenie', text: 'Amortyzatory, sprężyny, wahacze, tuleje, łączniki stabilizatora. Stuki i ściąganie diagnozujemy na podnośniku, nie „na ucho”.', price: '80 zł' },
      { img: 'tires', title: 'Opony i wulkanizacja', text: 'Sezonowa wymiana, wyważanie, naprawa przebić, czujniki TPMS. Przechowamy też Twój komplet do następnego sezonu.', price: '120 zł' },
      { img: 'oil', title: 'Wymiana oleju', text: 'Olej zgodny z normą producenta, filtry oleju, powietrza, kabinowy i paliwa. Wpis do książki serwisowej i przypomnienie o kolejnej.', price: '79 zł' },
      { img: 'brakes', title: 'Hamulce', text: 'Klocki, tarcze, zaciski, przewody i płyn hamulcowy. Każdą naprawę kończymy pomiarem na rolkach lub jazdą próbną.', price: '120 zł' },
    ],
    items: [
      { icon: 'diag', title: 'Diagnostyka komputerowa', text: 'Odczyt i analiza błędów, parametry na żywo, kodowanie.', price: '100 zł' },
      { icon: 'align', title: 'Geometria kół', text: 'Pomiar 3D i ustawienie zbieżności po wymianie części.', price: '150 zł' },
      { icon: 'ac', title: 'Klimatyzacja', text: 'Odgrzybianie, szczelność układu, nabicie czynnika.', price: '199 zł' },
      { icon: 'gear', title: 'Rozrząd i sprzęgło', text: 'Pasek lub łańcuch rozrządu, pompa wody, sprzęgło, dwumas.', price: '600 zł' },
      { icon: 'battery', title: 'Akumulator i elektryka', text: 'Test akumulatora i ładowania, oświetlenie, rozruszniki.', price: '40 zł' },
    ],
  },

  care: {
    eyebrow: 'Podejście',
    title: 'Traktujemy Twoje auto\njak *własne*',
    lead: 'Samochód to często drugi najdroższy zakup w życiu i codzienne narzędzie pracy. Dlatego każdy krok w warsztacie jest przewidywalny — i udokumentowany.',
    photoAlt: 'Czyste wnętrze samochodu, kierownica z osłoną',
    items: [
      { icon: 'shield', title: 'Osłony od pierwszej minuty', text: 'Fotel, kierownica, dźwignia i dywaniki dostają jednorazowe osłony, zanim mechanik usiądzie za kółkiem.' },
      { icon: 'camera', title: 'Zdjęcia i raport', text: 'Przyjmując auto, robimy zdjęcia. Usterki pokazujemy na zdjęciach lub wideo — wysyłamy na WhatsApp lub Telegram.' },
      { icon: 'check', title: 'Nic bez Twojej zgody', text: 'Jeśli w trakcie wyjdzie coś dodatkowego, dzwonimy z wyceną. Nie dopisujemy prac i nie podnosimy ceny po fakcie.' },
      { icon: 'box', title: 'Stare części do wglądu', text: 'Wymienione części oddajemy w pudełku albo pokazujemy przy odbiorze. Widzisz, za co płacisz.' },
      { icon: 'key', title: 'Jazda próbna', text: 'Po naprawie zawieszenia czy hamulców auto przechodzi jazdę próbną. Oddajemy je czyste i z tymi samymi ustawieniami fotela.' },
      { icon: 'doc', title: 'Gwarancja na piśmie', text: '12 miesięcy na robociznę, na części — gwarancja producenta. Wszystko na fakturze lub paragonie.' },
    ],
    quote: '„Oddajemy auto tak, jak sami chcielibyśmy je odebrać.”',
    quoteAuthor: 'Marek, właściciel AUTO 61',
  },

  parts: {
    eyebrow: 'Części',
    title: 'Twoje części\n*albo* nasze',
    lead: 'Nie zmuszamy do kupowania części w warsztacie. Wybierz wariant, który Ci pasuje — w obu przypadkach naprawa jest wykonana tak samo starannie.',
    photoAlt: 'Części samochodowe na warsztatowym stole',
    options: [
      {
        tag: 'Wariant A',
        title: 'Masz swoje części? Zamontujemy',
        text: 'Kupiłeś część w sklepie lub internecie — przywieź ją razem z autem. Przed montażem sprawdzimy, czy pasuje i czy nie ma wad.',
        points: ['Płacisz tylko za robociznę', 'Sprawdzamy numer i stan części przed montażem', 'Doradzimy, co kupić, jeśli nie jesteś pewien', 'Gwarancja na montaż'],
      },
      {
        tag: 'Wariant B',
        title: 'Zamówimy za Ciebie',
        text: 'Dobieramy części po numerze VIN u sprawdzonych hurtowni w Poznaniu. Najczęściej są na miejscu tego samego dnia.',
        points: ['Oryginał lub sprawdzony zamiennik — do wyboru', 'Cena części podana przed zamówieniem', 'Dostawa zwykle w 2–4 godziny', 'Pełna gwarancja: część + montaż'],
      },
    ],
    note: 'Nie montujemy jedynie części używanych do układu hamulcowego i kierowniczego — ze względu na bezpieczeństwo.',
  },

  process: {
    eyebrow: 'Jak pracujemy',
    title: 'Pięć biegów\n*do odbioru*',
    steps: [
      { title: 'Zgłoszenie', text: 'Telefon, WhatsApp lub formularz. Ustalamy termin, zwykle w ciągu 1–3 dni.' },
      { title: 'Przyjęcie i diagnoza', text: 'Oglądamy auto przy Tobie, robimy zdjęcia, sprawdzamy usterkę na podnośniku lub testerem.' },
      { title: 'Wycena i zgoda', text: 'Dostajesz koszt robocizny i części oraz termin. Pracujemy dopiero po Twoim „tak”.' },
      { title: 'Naprawa', text: 'Wykonujemy uzgodniony zakres. Jeśli pojawi się coś nowego — najpierw dzwonimy.' },
      { title: 'Odbiór z raportem', text: 'Pokazujemy, co zrobiliśmy, oddajemy stare części i dokumenty. Gwarancja 12 miesięcy.' },
    ],
  },

  testimonials: {
    eyebrow: 'Opinie',
    title: 'Co mówią *kierowcy*',
    items: [
      { text: 'Przywiozłem własne amortyzatory z internetu. Panowie sprawdzili, że jeden jest z innego rocznika, zanim cokolwiek rozkręcili. Uczciwie i szybko.', name: 'Tomasz', car: 'Škoda Octavia III' },
      { text: 'Dostałam zdjęcia klocków i tarcz na WhatsApp z wyceną. Zero niespodzianek przy płaceniu, auto oddane czystsze niż przywiozłam.', name: 'Katarzyna', car: 'Toyota Yaris' },
      { text: 'Obsługa po ukraińsku — dla mnie to duża sprawa. Wymiana rozrządu i oleju w jeden dzień, części zamówione rano.', name: 'Andrij', car: 'Ford Transit Custom' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Częste *pytania*',
    items: [
      { q: 'Czy mogę przywieźć własne części?', a: 'Tak. Montujemy części klienta — płacisz wtedy tylko za robociznę, a my dajemy gwarancję na montaż. Przed pracą sprawdzamy, czy część pasuje i nie ma wad. Ze względów bezpieczeństwa nie montujemy używanych części hamulcowych i kierowniczych.' },
      { q: 'Ile trwa wymiana oleju lub opon?', a: 'Wymiana oleju z filtrami trwa ok. 30–45 minut, sezonowa wymiana kół z wyważaniem — ok. 40 minut. Możesz poczekać na miejscu: mamy poczekalnię z kawą i Wi-Fi.' },
      { q: 'Czy przechowujecie opony?', a: 'Tak. Komplet opon lub kół myjemy, opisujemy i przechowujemy do kolejnego sezonu. Przy wymianie wystarczy podać numer rejestracyjny.' },
      { q: 'Skąd mam wiedzieć, ile zapłacę?', a: 'Po diagnozie dostajesz wycenę robocizny i części. Jeśli w trakcie naprawy wyjdzie coś dodatkowego, dzwonimy i czekamy na Twoją decyzję. Kwota na fakturze nie zaskoczy.' },
      { q: 'Jak mogę zapłacić?', a: 'Gotówką, kartą, BLIK-iem lub przelewem. Firmom wystawiamy faktury VAT, obsługujemy też floty.' },
      { q: 'Czy mówicie po ukraińsku?', a: 'Tak, w warsztacie rozmawiasz z nami po polsku lub po ukraińsku — także przez telefon i komunikatory.' },
    ],
  },

  cta: {
    title: 'Coś stuka, piszczy\nalbo *świeci*?',
    text: 'Zadzwoń — powiemy, czy możesz jeszcze jechać i kiedy najlepiej przyjechać.',
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Umów *wizytę*',
    lead: 'Zostaw kilka słów o aucie i usterce — oddzwonimy w godzinach pracy warsztatu z terminem i wstępną wyceną.',
    address: 'Adres',
    hoursLabel: 'Godziny',
    hours: ['Pn–Pt 8:00–18:00', 'Sobota 9:00–14:00', 'Niedziela — nieczynne'],
    phone: 'Telefon',
    email: 'E-mail',
    messengers: 'Komunikatory',
    social: 'Media społecznościowe',
    route: 'Wyznacz trasę',
    form: {
      name: 'Imię',
      phone: 'Telefon',
      car: 'Marka, model, rok',
      carPh: 'np. VW Golf VII, 2016',
      service: 'Czego dotyczy wizyta?',
      services: ['Zawieszenie', 'Opony', 'Olej i filtry', 'Hamulce', 'Diagnostyka', 'Inne'],
      parts: 'Części',
      partsOptions: ['Zamówcie dla mnie', 'Mam własne'],
      message: 'Opis usterki',
      messagePh: 'np. stuka z przodu na nierównościach, od tygodnia…',
      consent: 'Wyrażam zgodę na kontakt w sprawie mojego zgłoszenia. Dane nie są przekazywane osobom trzecim.',
      submit: 'Wyślij e-mailem',
      whatsapp: 'Wyślij przez WhatsApp',
      subject: 'Zgłoszenie wizyty — AUTO 61',
      sent: 'Dziękujemy! Otworzyła się wiadomość z gotowym tekstem — wystarczy ją wysłać.',
    },
  },

  footer: {
    tagline: 'Niezależny warsztat samochodowy w Poznaniu. Naprawiamy uczciwie — po polsku i po ukraińsku.',
    legal: 'Ceny na stronie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego.',
    rights: 'Wszelkie prawa zastrzeżone.',
    privacy: 'Polityka prywatności',
    cookies: 'Ustawienia cookies',
    photos: 'Zdjęcia',
    top: 'Do góry',
  },

  cookies: {
    title: 'Pliki cookies',
    text: 'Używamy niezbędnych plików cookies, aby strona działała. Za Twoją zgodą także analitycznych — by wiedzieć, co jest dla Ciebie przydatne.',
    acceptAll: 'Akceptuj wszystkie',
    rejectAll: 'Tylko niezbędne',
    settings: 'Ustawienia',
    dialogTitle: 'Ustawienia cookies',
    save: 'Zapisz wybór',
    close: 'Zamknij',
    always: 'Zawsze aktywne',
    categories: {
      necessary: { title: 'Niezbędne', text: 'Zapamiętują język i Twój wybór cookies.' },
      analytics: { title: 'Analityczne', text: 'Anonimowe statystyki odwiedzin.' },
      marketing: { title: 'Marketingowe', text: 'Dopasowanie reklam w mediach społecznościowych.' },
    },
  },
}
