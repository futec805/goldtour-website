// ============================================================
// siteContent.js — Master Bilingual Content Dictionary
// All Russian text with English translations for every section
// ============================================================

const BASE = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : '/';

export const siteContent = {
  // ─── Company Info ───
  company: {
    name: { ru: 'Золотой тур', en: 'Gold Tour' },
    fullName: { ru: 'Туристическое агентство «Золотой тур»', en: 'Travel Agency "Gold Tour"' },
    phone: '+7 (960) 189-24-64',
    email: 'goldtour2@yandex.ru',
    address: {
      ru: 'Нижегородская область, г. Кстово, ул. Чванова, д. 26',
      en: '26 Chvanova St., Kstovo, Nizhny Novgorod Region, Russia',
    },
    workingHours: { ru: 'Пн–Сб 10:00–19:00', en: 'Mon–Sat 10:00–19:00' },
    telegramUrl: 'https://t.me/goldtour_nn',
    whatsappUrl: 'https://wa.me/79601892464',
    tourvisorId: '223415',
    tourvisorSearchId: '9975387',
    tourvisorHeroSearchId: '9975388',
  },

  // ─── Navigation ───
  nav: {
    search: { ru: 'Поиск туров', en: 'Tour Search' },
    quiz: { ru: 'Подобрать тур', en: 'Tour Finder' },
    destinations: { ru: 'Направления', en: 'Destinations' },
    guide: { ru: 'Путеводитель', en: 'City Guide' },
    services: { ru: 'Услуги', en: 'Services' },
    about: { ru: 'О нас', en: 'About Us' },
    reviews: { ru: 'Отзывы', en: 'Reviews' },
    contacts: { ru: 'Контакты', en: 'Contacts' },
    callback: { ru: 'Заказать звонок', en: 'Request Callback' },
  },

  // ─── Hero Section ───
  hero: {
    title: {
      ru: 'Ваш идеальный пляжный отдых начинается здесь',
      en: 'Your Ideal Beach Vacation Starts Here',
    },
    subtitle: {
      ru: 'Поиск туров по 80+ надёжным туроператорам с прямыми вылетами из Нижнего Новгорода и Москвы',
      en: 'Search tours from 80+ trusted operators with direct flights from Nizhny Novgorod & Moscow',
    },
    ctaSearch: { ru: 'Найти тур онлайн', en: 'Search Tours Online' },
    ctaQuiz: { ru: 'Пройти квиз', en: 'Take the Quiz' },
  },

  // ─── Trust Bar ───
  trustBar: {
    items: [
      {
        number: '80+',
        label: { ru: 'Туроператоров', en: 'Tour Operators' },
      },
      {
        number: '200+',
        label: { ru: 'Довольных клиентов', en: 'Happy Clients' },
      },
      {
        number: '24/7',
        label: { ru: 'Поддержка менеджера', en: 'Manager Support' },
      },
      {
        number: '0%',
        label: { ru: 'Скрытых комиссий', en: 'Hidden Fees' },
      },
    ],
  },

  // ─── Tour Quiz ───
  quiz: {
    sectionTitle: { ru: 'Подберите тур за 1 минуту', en: 'Find Your Tour in 1 Minute' },
    sectionSubtitle: {
      ru: 'Ответьте на 4 простых вопроса и получите 3 лучших варианта отдыха в WhatsApp или Telegram за 15 минут',
      en: 'Answer 4 simple questions and receive 3 best vacation options on WhatsApp or Telegram in 15 minutes',
    },
    steps: [
      {
        question: { ru: 'Какой отдых вы предпочитаете?', en: 'What type of vacation do you prefer?' },
        options: [
          { label: { ru: 'Пляж и море', en: 'Beach & Sea' }, icon: '🏖️' },
          { label: { ru: 'Семейный отдых', en: 'Family Vacation' }, icon: '👨‍👩‍👧‍👦' },
          { label: { ru: 'Романтическое путешествие', en: 'Romantic Getaway' }, icon: '💑' },
          { label: { ru: 'Всё включено / релакс', en: 'All Inclusive / Relax' }, icon: '🍹' },
        ],
      },
      {
        question: { ru: 'Куда хотите поехать?', en: 'Where would you like to go?' },
        options: [
          { label: { ru: 'Египет', en: 'Egypt' }, icon: '🇪🇬' },
          { label: { ru: 'Турция', en: 'Turkey' }, icon: '🇹🇷' },
          { label: { ru: 'ОАЭ', en: 'UAE' }, icon: '🇦🇪' },
          { label: { ru: 'Таиланд', en: 'Thailand' }, icon: '🇹🇭' },
          { label: { ru: 'Мальдивы', en: 'Maldives' }, icon: '🇲🇻' },
          { label: { ru: 'Не определился', en: 'Not sure yet' }, icon: '🌍' },
        ],
      },
      {
        question: { ru: 'Ваш бюджет на человека?', en: 'Your budget per person?' },
        options: [
          { label: { ru: 'До 60 000 ₽', en: 'Up to 60,000 ₽' }, icon: '💰' },
          { label: { ru: '60 000 – 120 000 ₽', en: '60,000 – 120,000 ₽' }, icon: '💰💰' },
          { label: { ru: '120 000 – 200 000 ₽', en: '120,000 – 200,000 ₽' }, icon: '💰💰💰' },
          { label: { ru: 'VIP без ограничений', en: 'VIP No Limit' }, icon: '👑' },
        ],
      },
      {
        question: { ru: 'Куда отправить подборку?', en: 'Where should we send the options?' },
        options: [
          { label: { ru: 'WhatsApp', en: 'WhatsApp' }, icon: '📱' },
          { label: { ru: 'Telegram', en: 'Telegram' }, icon: '✈️' },
          { label: { ru: 'Позвоните мне', en: 'Call me' }, icon: '📞' },
        ],
      },
    ],
    contactPlaceholder: {
      ru: 'Введите номер телефона',
      en: 'Enter your phone number',
    },
    submitButton: {
      ru: 'Получить подборку бесплатно',
      en: 'Get Free Recommendations',
    },
    successMessage: {
      ru: 'Спасибо! Наш менеджер свяжется с вами в течение 15 минут 🎉',
      en: 'Thank you! Our manager will contact you within 15 minutes 🎉',
    },
  },

  // ─── Destinations ───
  destinations: {
    sectionTitle: { ru: 'Популярные направления', en: 'Popular Destinations' },
    sectionSubtitle: {
      ru: 'Лучшие пляжные курорты мира по спецпредложениям с прямым вылетом из Нижнего Новгорода и Москвы',
      en: 'Best beach resorts worldwide on special offers departing directly from Nizhny Novgorod & Moscow',
    },
    items: [
      {
        id: 'egypt',
        name: { ru: 'Египет', en: 'Egypt' },
        description: { ru: 'Красное море, коралловые рифы, все включено и круглый год теплое солнце', en: 'Red Sea, coral reefs, all-inclusive luxury and year-round warm sunshine' },
        originalPrice: { ru: '68 000 ₽', en: '68,000 ₽' },
        offerPrice: { ru: '48 000 ₽', en: '48,000 ₽' },
        discount: '-29%',
        savings: { ru: 'Экономия 20 000 ₽', en: 'Save 20,000 ₽' },
        image: `${BASE}images/destinations/egypt.jpg`,
        flag: '🇪🇬',
        large: true,
        category: 'beach',
        rating: 4.9,
        flight: { ru: '4.5 ч из Нижнего Новгорода', en: '4.5 h from Nizhny Novgorod' },
        temp: '+28°C',
        visa: { ru: 'Виза в аэропорту $25', en: 'Visa on arrival $25' },
        bestResorts: ['Хургада (Hurghada)', 'Шарм-эль-Шейх (Sharm)', 'Макади Бэй (Makadi)'],
      },
      {
        id: 'turkey',
        name: { ru: 'Турция', en: 'Turkey' },
        description: { ru: 'Средиземноморская классика, первоклассные семейные отели и Ultra All Inclusive', en: 'Mediterranean classic, top-tier family resorts and Ultra All Inclusive' },
        originalPrice: { ru: '74 000 ₽', en: '74,000 ₽' },
        offerPrice: { ru: '52 000 ₽', en: '52,000 ₽' },
        discount: '-30%',
        savings: { ru: 'Экономия 22 000 ₽', en: 'Save 22,000 ₽' },
        image: `${BASE}images/destinations/turkey.jpg`,
        flag: '🇹🇷',
        category: 'family',
        rating: 4.8,
        flight: { ru: '4 часа (прямой чартер)', en: '4 h (direct charter)' },
        temp: '+27°C',
        visa: { ru: 'Без визы (до 60 дней)', en: 'No visa required (up to 60 days)' },
        bestResorts: ['Анталья', 'Белек', 'Кемер', 'Сиде'],
      },
      {
        id: 'uae',
        name: { ru: 'ОАЭ', en: 'UAE' },
        description: { ru: 'Роскошь небоскребов, пляжи Персидского залива, шопинг и парки развлечений', en: 'Futuristic luxury, Persian Gulf coastlines, tax-free shopping and theme parks' },
        originalPrice: { ru: '95 000 ₽', en: '95,000 ₽' },
        offerPrice: { ru: '68 000 ₽', en: '68,000 ₽' },
        discount: '-28%',
        savings: { ru: 'Экономия 27 000 ₽', en: 'Save 27,000 ₽' },
        image: `${BASE}images/destinations/uae.jpg`,
        flag: '🇦🇪',
        category: 'luxury',
        rating: 4.9,
        flight: { ru: '5 часов из Москвы / НН', en: '5 h from Moscow / NN' },
        temp: '+30°C',
        visa: { ru: 'Бесплатная виза по прилёту', en: 'Free visa on arrival' },
        bestResorts: ['Дубай (Dubai)', 'Рас-эль-Хайма', 'Фуджейра'],
      },
      {
        id: 'thailand',
        name: { ru: 'Таиланд', en: 'Thailand' },
        description: { ru: 'Андаманское море, белоснежные острова, тайский массаж и сочные фрукты', en: 'Andaman Sea, white sand islands, tropical nature and fresh exotic fruits' },
        originalPrice: { ru: '115 000 ₽', en: '115,000 ₽' },
        offerPrice: { ru: '85 000 ₽', en: '85,000 ₽' },
        discount: '-26%',
        savings: { ru: 'Экономия 30 000 ₽', en: 'Save 30,000 ₽' },
        image: `${BASE}images/destinations/thailand.jpg`,
        flag: '🇹🇭',
        large: true,
        category: 'exotic',
        rating: 4.9,
        flight: { ru: '9 часов (прямой рейс)', en: '9 h (direct flight)' },
        temp: '+31°C',
        visa: { ru: 'Без визы (до 60 дней)', en: 'No visa required (up to 60 days)' },
        bestResorts: ['Пхукет (Карон, Ката)', 'Паттайя', 'Самуи'],
      },
      {
        id: 'maldives',
        name: { ru: 'Мальдивы', en: 'Maldives' },
        description: { ru: 'Виллы над бирюзовой лагуной, коралловые атоллы, абсолютный релакс и романтика', en: 'Overwater bungalows, crystal turquoise lagoons, pure privacy and romance' },
        originalPrice: { ru: '190 000 ₽', en: '190,000 ₽' },
        offerPrice: { ru: '140 000 ₽', en: '140,000 ₽' },
        discount: '-26%',
        savings: { ru: 'Экономия 50 000 ₽', en: 'Save 50,000 ₽' },
        image: `${BASE}images/destinations/maldives.jpg`,
        flag: '🇲🇻',
        category: 'luxury',
        rating: 5.0,
        flight: { ru: '8.5 часов из Москвы', en: '8.5 h from Moscow' },
        temp: '+29°C',
        visa: { ru: 'Бесплатная виза 30 дней', en: 'Free 30-day visa on arrival' },
        bestResorts: ['Северный Мале', 'Южный Мале', 'Ари Атолл'],
      },
      {
        id: 'cuba',
        name: { ru: 'Куба', en: 'Cuba' },
        description: { ru: 'Атлантика и Карибы, белоснежный песок Варадеро, ретро-авто и карибский колорит', en: 'Atlantic and Caribbean coasts, Varadero powder sand, vintage cars and music' },
        originalPrice: { ru: '150 000 ₽', en: '150,000 ₽' },
        offerPrice: { ru: '110 000 ₽', en: '110,000 ₽' },
        discount: '-27%',
        savings: { ru: 'Экономия 40 000 ₽', en: 'Save 40,000 ₽' },
        image: `${BASE}images/destinations/cuba.jpg`,
        flag: '🇨🇺',
        category: 'beach',
        rating: 4.7,
        flight: { ru: '13 часов (прямой рейс)', en: '13 h direct flight' },
        temp: '+28°C',
        visa: { ru: 'Без визы (до 90 дней)', en: 'No visa required (up to 90 days)' },
        bestResorts: ['Варадеро', 'Кайо-Коко', 'Гавана'],
      },
      {
        id: 'hainan',
        name: { ru: 'Китай (Хайнань)', en: 'China (Hainan)' },
        description: { ru: 'Восточные Гавайи, термальные источники, теплое Южно-Китайское море и СПА', en: 'Eastern Hawaii, hot springs, warm South China Sea beaches and wellness spas' },
        originalPrice: { ru: '110 000 ₽', en: '110,000 ₽' },
        offerPrice: { ru: '79 000 ₽', en: '79,000 ₽' },
        discount: '-28%',
        savings: { ru: 'Экономия 31 000 ₽', en: 'Save 31,000 ₽' },
        image: `${BASE}images/destinations/hainan.jpg`,
        flag: '🇨🇳',
        category: 'exotic',
        rating: 4.8,
        flight: { ru: '9.5 часов (прямой чартер)', en: '9.5 h direct charter' },
        temp: '+28°C',
        visa: { ru: 'Безвизовый въезд для групп', en: 'Visa-free for tourist groups' },
        bestResorts: ['Санья (Дадунхай)', 'Ялонг Бэй', 'Хайтанг'],
      },
    ],
  },

  // ─── Hot Tours ───
  hotTours: {
    sectionTitle: { ru: '🔥 Горящие туры', en: '🔥 Hot Deals' },
    sectionSubtitle: {
      ru: 'Лучшие предложения с максимальными скидками. Вылет в ближайшие дни!',
      en: 'Best offers with maximum discounts. Departing within days!',
    },
    badge: { ru: 'Горящий тур', en: 'Hot Deal' },
    bookNow: { ru: 'Забронировать', en: 'Book Now' },
    perPerson: { ru: '/чел.', en: '/person' },
    nights: { ru: 'ночей', en: 'nights' },
    allInclusive: { ru: 'Всё включено', en: 'All Inclusive' },
    items: [
      {
        hotel: 'Sunrise Royal Makadi Resort 5★',
        location: { ru: 'Египет, Макади Бэй', en: 'Egypt, Makadi Bay' },
        price: '52 400 ₽',
        oldPrice: '78 000 ₽',
        discount: '-33%',
        nights: 7,
        mealPlan: 'AI',
        image: `${BASE}images/destinations/egypt.jpg`,
      },
      {
        hotel: 'Rixos Premium Belek 5★',
        location: { ru: 'Турция, Белек', en: 'Turkey, Belek' },
        price: '89 900 ₽',
        oldPrice: '125 000 ₽',
        discount: '-28%',
        nights: 10,
        mealPlan: 'UAI',
        image: `${BASE}images/destinations/turkey.jpg`,
      },
      {
        hotel: 'Atlantis The Palm 5★',
        location: { ru: 'ОАЭ, Дубай', en: 'UAE, Dubai' },
        price: '112 000 ₽',
        oldPrice: '158 000 ₽',
        discount: '-29%',
        nights: 7,
        mealPlan: 'HB',
        image: `${BASE}images/destinations/uae.jpg`,
      },
    ],
  },

  // ─── Services ───
  services: {
    sectionTitle: { ru: 'Наши услуги', en: 'Our Services' },
    sectionSubtitle: {
      ru: 'Полный спектр туристических услуг для вашего идеального отпуска',
      en: 'Complete range of travel services for your perfect vacation',
    },
    items: [
      {
        title: { ru: 'Пакетные туры', en: 'Package Tours' },
        description: {
          ru: 'Перелёт, трансфер, проживание и страховка — всё в одном пакете по лучшей цене',
          en: 'Flight, transfer, accommodation & insurance — all in one package at the best price',
        },
        icon: 'Plane',
      },
      {
        title: { ru: 'Подбор отелей', en: 'Hotel Booking' },
        description: {
          ru: 'Бронирование проверенных отелей по всему миру без переплат',
          en: 'Book verified hotels worldwide with no hidden surcharges',
        },
        icon: 'Hotel',
      },
      {
        title: { ru: 'Авиабилеты', en: 'Flight Tickets' },
        description: {
          ru: 'Чартерные и регулярные рейсы из Нижнего Новгорода и Москвы',
          en: 'Charter and scheduled flights from Nizhny Novgorod & Moscow',
        },
        icon: 'PlaneTakeoff',
      },
      {
        title: { ru: 'Визовая поддержка', en: 'Visa Assistance' },
        description: {
          ru: 'Помощь в оформлении виз: консультации, документы, подача заявки',
          en: 'Visa consulting, document preparation & application submission',
        },
        icon: 'FileCheck',
      },
      {
        title: { ru: 'Морские круизы', en: 'Sea Cruises' },
        description: {
          ru: 'Речные круизы по Волге и морские круизы по Средиземноморью',
          en: 'River cruises on the Volga & Mediterranean sea cruises',
        },
        icon: 'Ship',
      },
      {
        title: { ru: 'Индивидуальные туры', en: 'Custom Tours' },
        description: {
          ru: 'Персональный маршрут для вашей семьи, пары или компании друзей',
          en: 'Personalized itineraries for your family, couple, or group of friends',
        },
        icon: 'Map',
      },
    ],
  },

  // ─── How We Work ───
  howWeWork: {
    sectionTitle: { ru: 'Как мы работаем', en: 'How It Works' },
    sectionSubtitle: {
      ru: 'От заявки до пляжа — всего 4 простых шага',
      en: 'From inquiry to the beach — just 4 simple steps',
    },
    steps: [
      {
        number: '01',
        title: { ru: 'Заявка или звонок', en: 'Request or Call' },
        description: {
          ru: 'Оставьте заявку онлайн, напишите в WhatsApp или позвоните — мы на связи',
          en: 'Submit a request online, text us on WhatsApp, or call — we are always available',
        },
      },
      {
        number: '02',
        title: { ru: 'Персональный подбор', en: 'Personalized Selection' },
        description: {
          ru: 'Менеджер подберёт 3 лучших варианта по вашему бюджету и пожеланиям',
          en: 'Your manager will select 3 best options matching your budget and preferences',
        },
      },
      {
        number: '03',
        title: { ru: 'Оформление и оплата', en: 'Booking & Payment' },
        description: {
          ru: 'Заключаем договор, оформляем бронирование и принимаем оплату онлайн или в офисе',
          en: 'We sign the contract, finalize the booking, and accept payment online or at the office',
        },
      },
      {
        number: '04',
        title: { ru: 'Незабываемый отдых', en: 'Unforgettable Vacation' },
        description: {
          ru: 'Собирайте чемодан! Мы на связи 24/7 от вылета до возвращения домой',
          en: 'Pack your bags! We stay in touch 24/7 from departure until you return home',
        },
      },
    ],
  },

  // ─── Why Choose Us ───
  whyChooseUs: {
    sectionTitle: { ru: 'Почему выбирают «Золотой тур»', en: 'Why Choose Gold Tour' },
    items: [
      {
        title: { ru: '80+ проверенных операторов', en: '80+ Verified Operators' },
        description: {
          ru: 'Работаем с Coral Travel, Pegas, Anex Tour, Fun&Sun, Biblio Globus и другими лидерами рынка',
          en: 'Partnered with Coral Travel, Pegas, Anex Tour, Fun&Sun, Biblio Globus and other market leaders',
        },
        icon: 'ShieldCheck',
      },
      {
        title: { ru: 'Честные цены без доплат', en: 'Transparent Pricing' },
        description: {
          ru: 'Никаких скрытых комиссий и топливных сборов — вы платите ровно столько, сколько видите',
          en: 'No hidden commissions or fuel surcharges — you pay exactly what you see',
        },
        icon: 'BadgeRussianRuble',
      },
      {
        title: { ru: 'Менеджер 24/7 в мессенджере', en: '24/7 Manager on Messenger' },
        description: {
          ru: 'Персональный менеджер доступен в WhatsApp и Telegram от бронирования до возвращения',
          en: 'Personal manager available on WhatsApp & Telegram from booking until return',
        },
        icon: 'MessageCircle',
      },
      {
        title: { ru: 'Опыт более 5 лет', en: '5+ Years Experience' },
        description: {
          ru: 'Каждый сотрудник работает в сфере туризма более 5 лет и имеет профильное образование',
          en: 'Every team member has 5+ years in tourism with professional education & certifications',
        },
        icon: 'Award',
      },
    ],
  },

  // ─── Reviews ───
  reviews: {
    sectionTitle: { ru: 'Отзывы наших туристов', en: 'Our Travelers\' Reviews' },
    sectionSubtitle: {
      ru: 'Реальные истории наших клиентов о незабываемом отдыхе',
      en: 'Real stories from our clients about unforgettable vacations',
    },
    items: [
      {
        name: { ru: 'Анна К.', en: 'Anna K.' },
        destination: { ru: 'Египет, Хургада', en: 'Egypt, Hurghada' },
        rating: 5,
        text: {
          ru: 'Потрясающий отдых! Менеджер Екатерина подобрала идеальный отель для нас с детьми. Всё включено, отличный пляж, дети в восторге от аквапарка. Спасибо «Золотому туру»!',
          en: 'Amazing vacation! Manager Ekaterina selected the perfect hotel for our family with kids. All inclusive, great beach, kids loved the waterpark. Thank you Gold Tour!',
        },
        date: { ru: 'Октябрь 2024', en: 'October 2024' },
      },
      {
        name: { ru: 'Дмитрий и Ольга М.', en: 'Dmitry & Olga M.' },
        destination: { ru: 'Турция, Белек', en: 'Turkey, Belek' },
        rating: 5,
        text: {
          ru: 'Летали на медовый месяц в Белек. Rixos Premium — это сказка! Менеджер помог забронировать романтический ужин на берегу. Обязательно вернёмся через «Золотой тур».',
          en: 'Flew to Belek for our honeymoon. Rixos Premium was a fairy tale! The manager helped arrange a romantic dinner on the shore. We will definitely return through Gold Tour.',
        },
        date: { ru: 'Сентябрь 2024', en: 'September 2024' },
      },
      {
        name: { ru: 'Сергей П.', en: 'Sergey P.' },
        destination: { ru: 'ОАЭ, Дубай', en: 'UAE, Dubai' },
        rating: 5,
        text: {
          ru: 'Первый раз бронировал через агентство и не пожалел. Цена оказалась ниже, чем самостоятельно! Менеджер был на связи даже когда я уже был в Дубае. Рекомендую!',
          en: 'First time booking through an agency and no regrets. The price was lower than booking myself! The manager stayed in touch even when I was already in Dubai. Highly recommend!',
        },
        date: { ru: 'Ноябрь 2024', en: 'November 2024' },
      },
    ],
  },

  // ─── Contact Section ───
  contact: {
    sectionTitle: { ru: 'Свяжитесь с нами', en: 'Contact Us' },
    sectionSubtitle: {
      ru: 'Приходите в наш офис или напишите в мессенджер — мы всегда рады помочь!',
      en: 'Visit our office or message us — we are always happy to help!',
    },
    officeTitle: { ru: 'Наш офис', en: 'Our Office' },
    phoneLabel: { ru: 'Телефон', en: 'Phone' },
    emailLabel: { ru: 'Электронная почта', en: 'Email' },
    addressLabel: { ru: 'Адрес', en: 'Address' },
    hoursLabel: { ru: 'Режим работы', en: 'Working Hours' },
    writeUs: { ru: 'Написать нам', en: 'Write to Us' },
    messagePlaceholder: { ru: 'Ваше имя', en: 'Your name' },
    phonePlaceholder: { ru: 'Ваш телефон', en: 'Your phone' },
    textPlaceholder: { ru: 'Ваш вопрос или пожелание...', en: 'Your question or request...' },
    sendButton: { ru: 'Отправить сообщение', en: 'Send Message' },
  },

  // ─── Footer ───
  footer: {
    copyright: {
      ru: '© 2024 Туристическое агентство «Золотой тур». Все права защищены.',
      en: '© 2024 Travel Agency "Gold Tour". All rights reserved.',
    },
    privacy: { ru: 'Политика конфиденциальности', en: 'Privacy Policy' },
    personalData: {
      ru: 'Положение об обработке персональных данных (152-ФЗ)',
      en: 'Personal Data Processing Policy (152-FZ)',
    },
    disclaimer: {
      ru: 'Информация на сайте не является публичной офертой. Для уточнения актуальных цен и наличия свяжитесь с менеджером.',
      en: 'Information on this website is not a public offer. Contact our manager for current prices and availability.',
    },
  },

  // ─── Callback Modal ───
  callbackModal: {
    title: { ru: 'Заказать обратный звонок', en: 'Request a Callback' },
    subtitle: {
      ru: 'Оставьте номер — мы перезвоним в течение 5 минут',
      en: 'Leave your number — we will call back within 5 minutes',
    },
    namePlaceholder: { ru: 'Ваше имя', en: 'Your name' },
    phonePlaceholder: { ru: '+7 (___) ___-__-__', en: '+7 (___) ___-__-__' },
    submitButton: { ru: 'Перезвоните мне', en: 'Call me back' },
    successMessage: {
      ru: 'Спасибо! Мы перезвоним вам в ближайшее время 📞',
      en: 'Thank you! We will call you back shortly 📞',
    },
  },

  // ─── Hot Tours CTA ───
  hotToursCta: {
    title: {
      ru: 'Подключитесь к ленте горящих туров',
      en: 'Subscribe to Hot Tour Updates',
    },
    subtitle: {
      ru: 'Получайте лучшие предложения с максимальными скидками прямо в свой мессенджер',
      en: 'Get the best deals with maximum discounts directly in your messenger',
    },
    telegramButton: { ru: 'Подписаться в Telegram', en: 'Subscribe on Telegram' },
    whatsappButton: { ru: 'Подписаться в WhatsApp', en: 'Subscribe on WhatsApp' },
  },

  // ─── Booking Modal ───
  bookingModal: {
    title: { ru: 'Бронирование тура', en: 'Book This Tour' },
    subtitle: {
      ru: 'Оставьте контакты — менеджер зафиксирует за вами цену и организует бронирование',
      en: 'Leave your details — our manager will lock in the price and organize your booking',
    },
    selectedTour: { ru: 'Выбранный тур', en: 'Selected Tour' },
    hotelLabel: { ru: 'Отель / Курорт', en: 'Hotel / Resort' },
    durationLabel: { ru: 'Длительность', en: 'Duration' },
    priceLabel: { ru: 'Стоимость от', en: 'Price from' },
    namePlaceholder: { ru: 'Ваше имя', en: 'Your Name' },
    phonePlaceholder: { ru: '+7 (___) ___-__-__', en: '+7 (___) ___-__-__' },
    messengerChoice: { ru: 'Удобный способ связи:', en: 'Preferred contact method:' },
    submitButton: { ru: 'Подтвердить заявку на бронь', en: 'Confirm Booking Request' },
    successMessage: {
      ru: 'Заявка принята! Менеджер свяжется с вами в течение 10 минут для подтверждения бронирования 🎉',
      en: 'Request received! Our manager will contact you within 10 minutes to confirm your reservation 🎉',
    },
  },

  // ─── Legal / Privacy Modal ───
  legal: {
    privacyTitle: { ru: 'Политика конфиденциальности', en: 'Privacy Policy' },
    privacyText: {
      ru: `Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую Туристическое агентство «Золотой тур» может получить о Пользователе во время использования сайта.

1. Общие положения
1.1. Использование сайта означает согласие Пользователя с настоящей Политикой и условиями обработки его персональных данных.
1.2. В случае несогласия с условиями Политики Пользователь должен прекратить использование сайта.

2. Персональные данные Пользователей
2.1. В рамках настоящей Политики под персональными данными понимаются:
- Имя Пользователя;
- Номер контактного телефона;
- Адрес электронной почты;
- Город отправления и предпочтения по отдыху.
2.2. Агентство не проверяет достоверность предоставляемых данных, однако исходит из того, что Пользователь предоставляет актуальную информацию.

3. Цели обработки
3.1. Персональные данные собираются исключительно для:
- Обработки заявок на подбор и бронирование туристических путевок;
- Связи с Пользователем в мессенджерах (WhatsApp, Telegram) и по телефону;
- Оформления договоров оказания туристических услуг.`,
      en: `This Privacy Policy applies to all information that Travel Agency "Gold Tour" may obtain about the User during their use of the website.

1. General Provisions
1.1. Using the website signifies the User's agreement with this Policy and the terms of processing personal data.
1.2. If the User disagrees with the terms, they must cease using the website.

2. Personal Data Collected
2.1. Under this Policy, personal data includes:
- User's name;
- Contact phone number;
- Email address;
- Departure city and vacation preferences.
2.2. The Agency assumes that the User provides accurate and up-to-date information.

3. Purposes of Processing
3.1. Data is collected solely for:
- Processing requests for tour selection and bookings;
- Communicating via messengers (WhatsApp, Telegram) and telephone;
- Executing travel service contracts.`
    },
    fz152Title: { ru: 'Положение об обработке данных (152-ФЗ РФ)', en: 'Personal Data Regulation (152-FZ RF)' },
    fz152Text: {
      ru: `В соответствии с Федеральным законом РФ от 27.07.2006 № 152-ФЗ «О персональных данных»:

1. Настоящим Пользователь подтверждает свое согласие на обработку Туристическим агентством «Золотой тур» своих персональных данных (фамилия, имя, номер телефона, e-mail) с использованием средств автоматизации или без таковых.
2. Согласие дается на совершение действий: сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача туроператорам для бронирования авиабилетов и гостиничных номеров, обезличивание, блокирование, удаление.
3. Согласие действует бессрочно и может быть отозвано путем направления письменного уведомления на электронный адрес goldtour2@yandex.ru.`,
      en: `In accordance with Federal Law of the Russian Federation No. 152-FZ "On Personal Data" dated July 27, 2006:

1. The User hereby consents to the processing of their personal data (full name, phone number, email) by Travel Agency "Gold Tour" with or without automation tools.
2. Consent is given for: collection, recording, systematization, storage, clarification, extraction, utilization, transfer to accredited tour operators for flight and hotel bookings, depersonalization, and deletion.
3. Consent is valid indefinitely and may be revoked by submitting a written notice to goldtour2@yandex.ru.`
    }
  },
};
