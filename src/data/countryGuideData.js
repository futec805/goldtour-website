// ============================================================
// countryGuideData.js — 10 Countries & Famous Cities Dataset
// Tailored specifically for Russian tourists: direct flights from NN/MSK,
// currency/payment tips, Russian-speaking service, and beach photography.
// ============================================================

const BASE = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : '/';

export const countryGuideData = [
  // 1. TURKEY
  {
    id: 'turkey',
    flag: '🇹🇷',
    name: { ru: 'Турция', en: 'Turkey' },
    cardImage: `${BASE}images/destinations/turkey.jpg`,
    priceFrom: '38 500 ₽',
    visa: { ru: 'Без визы до 60 дней (загранпаспорт РФ)', en: 'Visa-free up to 60 days' },
    flightTime: { ru: 'Прямые рейсы из Н.Новгорода (~4 ч) и Москвы (~4.5 ч)', en: 'Direct from Nizhny Novgorod (~4h) & Moscow (~4.5h)' },
    bestSeason: { ru: 'Май — Октябрь (бархатный сезон: сентябрь–октябрь)', en: 'May — October (best: Sep–Oct)' },
    tagline: {
      ru: 'Любимый курорт россиян: роскошный «Ultra All Inclusive», теплое море и детская анимация',
      en: 'Top resort for Russian tourists: Ultra All-Inclusive, warm seas, and family animation'
    },
    overview: {
      ru: 'Турция — абсолютный лидер пляжного отдыха для туристов из России. Ни одна страна не сравнится с турецким уровнем сервиса «Ультра Всё включено», огромными отельными территориями с аквапарками, детскими клубами и русскоговорящими аниматорами. Море прогревается до +28°C, перелет из Нижнего Новгорода занимает всего 4 часа, а для въезда не требуется виза.',
      en: 'Turkey is the leading beach destination for travelers, offering unbeatable Ultra All-Inclusive resort service, warm Mediterranean waters up to +28°C, and effortless direct charters.'
    },
    // Russian tourist practical intelligence
    russianTravelerTips: {
      money: { ru: 'Принимаются карты UnionPay РФ (Газпромбанк, РСХБ), наличные доллары и евро. Во многих обменниках и лавках можно обменять наличные рубли.', en: 'Russian UnionPay cards accepted, USD/EUR cash, and rubles exchanged in many resort kiosks.' },
      flights: { ru: 'Прямые чартерные рейсы из Нижнего Новгорода (Стригино) в Анталью в сезон, а также ежедневные вылеты из Москвы (Southwind, Turkish Airlines, Red Wings, Аэрофлот).', en: 'Direct charter flights from Nizhny Novgorod (GOJ) and multiple daily flights from Moscow.' },
      language: { ru: 'В 95% отелей персонал говорит по-русски. Экскурсии, анимация и детские клубы ведутся на русском языке.', en: 'Russian-speaking hotel personnel, children animation, and tour guides widely available.' },
      beaches: { ru: 'Песчаные пляжи в Сиде и Белеке, песчано-галечные в Анталье и Кемере с кристальной водой и горным воздухом.', en: 'Sandy and pebble beaches with warm turquoise water and mountain backdrops.' }
    },
    countryPhotos: [
      `${BASE}images/destinations/turkey.jpg`,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'antalya',
        name: { ru: 'Анталья и побережье', en: 'Antalya & Coast' },
        tag: { ru: 'Песчаные пляжи, All-Inclusive & Семьи', en: 'Beaches, All-Inclusive & Families' },
        flight: { ru: '3ч 50м (прямой)', en: '3h 50m direct' },
        temp: '+29°C (вода +27°C)',
        priceFrom: '42 900 ₽',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
          `${BASE}images/destinations/turkey.jpg`,
          'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Широкие песчаные и мелкогалечные пляжи (Коньяалты, Лара) с Голубым флагом, пологий удобный вход в море для детей.',
          en: 'Blue Flag sandy & fine-pebble beaches (Lara & Konyaalti) with gentle slope for children.'
        },
        desc: {
          ru: 'Сердце отдыха в Турции для семей с детьми. Отели-города с аквапарками, шведским столом 24/7, водопадами Дюден и шопингом в моллах TerraCity и Mall of Antalya.',
          en: 'Prime Mediterranean retreat featuring mega family resorts, waterparks, Düden waterfall cascades, and great shopping.'
        },
        attractions: [
          {
            name: { ru: 'Пляж Лара и пляж Коньяалты (Голубой флаг)', en: 'Lara & Konyaaltı Beaches' },
            desc: { ru: 'Многокилометровые обустроенные пляжи с шезлонгами, пальмами и видом на Торосские горы.', en: 'Miles of golden shoreline lined with beach clubs and backed by the Taurus Mountains.' }
          },
          {
            name: { ru: 'Водопад Нижний Дюден в море', en: 'Lower Düden Sea Waterfall' },
            desc: { ru: 'Потрясающий 40-метровый водопад, обрушивающийся прямо со скалы в морскую лазурь.', en: 'Dramatic 40-meter cascade plunging directly into the azure Mediterranean.' }
          },
          {
            name: { ru: 'Старый город Калеичи & Римские ворота Адриана', en: 'Kaleiçi Old Town' },
            desc: { ru: 'Уютные мощеные улочки, восточные кофейни и древний порт с яхтенными прогулками.', en: 'Atmospheric historic district with Ottoman architecture and seaside cafes.' }
          }
        ]
      },
      {
        id: 'bodrum',
        name: { ru: 'Бодрум (Эгейское море)', en: 'Bodrum (Aegean Coast)' },
        tag: { ru: 'Бирюзовые бухты, Яхты & Премиум', en: 'Turquoise Bays, Yachts & Luxury' },
        flight: { ru: '4ч 10м', en: '4h 10m' },
        temp: '+27°C (вода +25°C)',
        priceFrom: '56 000 ₽',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=80',
          `${BASE}images/destinations/turkey.jpg`
        ],
        beachInfo: {
          ru: 'Закрытые живописные бухты Эгейского моря с прозрачнейшей изумрудной водой, соснами и деревянными пирсами.',
          en: 'Sheltered pine-covered Aegean coves with crystal emerald waters and wooden sun decks.'
        },
        desc: {
          ru: '«Турецкая Ривьера» в европейском стиле: белоснежные виллы, цветущие бугенвиллии, роскошные пляжные клубы и свежайшие морепродукты.',
          en: 'European-style Aegean paradise with whitewashed villas, yacht marinas, and beach clubs.'
        },
        attractions: [
          {
            name: { ru: 'Бухта Битез и пляж Ялыкавак', en: 'Bitez Bay & Yalıkavak Beach' },
            desc: { ru: 'Идеальные песчаные пляжи в окружении мандариновых рощ и марины для суперяхт.', en: 'Idyllic sand beaches fringed with citrus orchards and luxury marinas.' }
          },
          {
            name: { ru: 'Замок Святого Петра и подводный музей', en: 'Castle of St. Peter' },
            desc: { ru: 'Крепость рыцарей-госпитальеров с сокровищами затонувших кораблей.', en: 'Crusader castle featuring ancient sunken Bronze Age treasures.' }
          }
        ]
      }
    ]
  },

  // 2. UAE
  {
    id: 'uae',
    flag: '🇦🇪',
    name: { ru: 'ОАЭ', en: 'UAE' },
    cardImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&auto=format&fit=crop&q=80',
    priceFrom: '49 900 ₽',
    visa: { ru: 'Без визы до 90 дней (штамп по прилёту бесплатно)', en: 'Visa-free up to 90 days (free on arrival)' },
    flightTime: { ru: 'Прямые рейсы из Москвы (~5 ч) и стыковки из НН', en: 'Direct from Moscow (~5h)' },
    bestSeason: { ru: 'Октябрь — Апрель (идеально для пляжа: +28..+32°C)', en: 'October — April (ideal beach weather)' },
    tagline: {
      ru: 'Тёплый Персидский залив, белые пляжи, небоскребы и безопасность #1 в мире',
      en: 'Warm Persian Gulf, white sand beaches, skyscrapers, and world-class safety'
    },
    overview: {
      ru: 'ОАЭ — идеальный выбор для побега из российской зимы в теплое лето. Теплый бирюзовый Персидский залив, безупречно чистые песчаные пляжи с видом на башни Бурдж-Халифа и колесо обозрения, мировые парки аттракционов и полное отсутствие преступности.',
      en: 'The UAE is the ultimate warm winter escape: Persian Gulf turquoise waters, white sand beaches, futuristic landmarks, and luxury hospitality.'
    },
    russianTravelerTips: {
      money: { ru: 'Карты UnionPay российских банков работают во многих торговых центрах. Легко обменять наличные доллары и евро на дирхамы (AED). Рубли можно обменять в Дубае.', en: 'Russian UnionPay cards work across major malls. Easy exchange of USD/EUR and rubles.' },
      flights: { ru: 'Регулярные рейсы flydubai, Air Arabia, Победа, Аэрофлот, Emirates. Перелет около 5 часов.', en: 'Direct regular and charter flights with flydubai, Emirates, Aeroflot.' },
      language: { ru: 'Во всех отелях 4* и 5* есть русскоязычные менеджеры на ресепшн (Guest Relations), меню на русском.', en: 'Russian-speaking staff available at front desks and guest services in 4-5 star hotels.' },
      beaches: { ru: 'Мелкий белый песок, кристально чистая вода Персидского залива, комфортный пологий заход, отсутствие волн.', en: 'Fine white sand, crystal-clear calm waters, gentle entry, minimal waves.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'dubai',
        name: { ru: 'Дубай (JBR и Пальма)', en: 'Dubai (JBR & Palm)' },
        tag: { ru: 'Белый песок, Залив & Небоскребы', en: 'White Sand, Gulf & Skyscrapers' },
        flight: { ru: '4ч 50м прямой', en: '4h 50m direct' },
        temp: '+31°C (вода +28°C)',
        priceFrom: '58 000 ₽',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Широкие песчаные пляжи JBR Marina Beach и Palm West Beach с белым персидским песком, бесплатными душами и набережной.',
          en: 'Vibrant JBR & Palm West beaches with white sand, beach clubs, and skyline panoramas.'
        },
        desc: {
          ru: 'Сочетание первоклассного пляжного отдыха на лазурном побережье и потрясающих развлечений: подъем на Бурдж-Халифа, сафари на джипах по золотым барханам и шопинг.',
          en: 'World-famous seaside luxury blending beach relaxation on JBR with observation decks, desert safaris, and malls.'
        },
        attractions: [
          {
            name: { ru: 'Пляж JBR и набережная The Walk', en: 'JBR Beach & The Walk' },
            desc: { ru: 'Главный открытый пляж Дубая с белым песком, водными мотоциклами и видом на колесо Айн Дубай.', en: 'Lively beach promenade featuring white sands, water sports, and seaside cafes.' }
          },
          {
            name: { ru: 'Остров Пальма Джумейра & Аквапарк Aquaventure', en: 'Palm Jumeirah & Aquaventure' },
            desc: { ru: 'Искусственный остров-пальма с роскошными резортами и крупнейшим в мире аквапарком.', en: 'World-famous palm-shaped island with luxury beachfront resorts and waterparks.' }
          },
          {
            name: { ru: 'Бурдж-Халифа & Шоу поющих фонтанов', en: 'Burj Khalifa & Fountain Show' },
            desc: { ru: 'Самая высокая башня на планете (828 м) со смотровой площадкой и вечерним представлением.', en: 'Tallest building on earth with observation decks and spectacular dancing fountains.' }
          }
        ]
      },
      {
        id: 'rak',
        name: { ru: 'Рас-эль-Хайма', en: 'Ras Al Khaimah' },
        tag: { ru: 'Отели All-Inclusive & Горы', en: 'Beach All-Inclusive & Nature' },
        flight: { ru: '5ч 00м', en: '5h 00m' },
        temp: '+29°C (вода +27°C)',
        priceFrom: '49 900 ₽',
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Многокилометровые широкие песчаные пляжи на острове Аль-Марджан, спокойное море без волн, роскошные отели с «всё включено».',
          en: 'Pristine wide sand beaches on Al Marjan Island with calm gulf waters and all-inclusive resorts.'
        },
        desc: {
          ru: 'Самый зеленый и живописный эмират. Лучший выбор в ОАЭ для туристов, которые хотят турецкий «всё включено» на берегу теплого океана.',
          en: 'The UAE’s top choice for all-inclusive beachfront relaxation against mountain backdrops.'
        },
        attractions: [
          {
            name: { ru: 'Пляжи острова Аль-Марджан', en: 'Al Marjan Island Beaches' },
            desc: { ru: 'Белоснежные коралловые насыпные острова с лучшими пляжными отелями Rixos и Hilton.', en: 'Four coral-shaped islands with calm water, private resort beaches, and promenades.' }
          },
          {
            name: { ru: 'Гора Джебель Джейс & Зиплайн', en: 'Jebel Jais Mountain Peak' },
            desc: { ru: 'Высшая точка ОАЭ со свежим воздухом и самым длинным зиплайном в мире.', en: 'Highest peak in the UAE with mountain views and record-breaking zipline.' }
          }
        ]
      }
    ]
  },

  // 3. EGYPT
  {
    id: 'egypt',
    flag: '🇪🇬',
    name: { ru: 'Египет', en: 'Egypt' },
    cardImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&auto=format&fit=crop&q=80',
    priceFrom: '39 500 ₽',
    visa: { ru: 'Синайский штамп бесплатно (15 дней) или марка $25', en: 'Free Sinai stamp (15 days) or $25 visa' },
    flightTime: { ru: 'Прямые чартеры из Нижнего Новгорода и Москвы (~5 ч)', en: 'Direct charters from NN and Moscow (~5h)' },
    bestSeason: { ru: 'Круглый год (идеально: Октябрь — Май)', en: 'Year-round (best: Oct–May)' },
    tagline: {
      ru: 'Самое красивое море в мире: живые коралловые рифы, пляжи и «Всё включено»',
      en: 'World’s most vibrant coral reefs, Red Sea beaches, and All-Inclusive'
    },
    overview: {
      ru: 'Красное море — это природный аквариум планеты прямо у порога вашего отеля. Теплая кристально прозрачная вода, коралловые сады с тысячами разноцветных рыбок, пологие песчаные пляжи Хургады и знаменитый египетский All-Inclusive делают Египет самым доступным круглогодичным курортом для россиян.',
      en: 'Egypt’s Red Sea is an underwater wonderland with coral gardens, warm clear waters, sandy family lagoons, and complete all-inclusive value.'
    },
    russianTravelerTips: {
      money: { ru: 'В ходу доллары и евро (купюры нового образца). Карты UnionPay работают в банкоматах. В лавках часто принимают оплату переводом на Сбербанк/Т-Банк или рублями.', en: 'USD/EUR cash preferred. UnionPay in ATMs. Many souvenir shops accept Russian ruble bank transfers.' },
      flights: { ru: 'Прямые рейсы из Нижнего Новгорода (Стригино) и Москвы (Шереметьево/Внуково) в Хургаду и Шарм-эль-Шейх.', en: 'Direct charter and scheduled flights to Hurghada & Sharm El-Sheikh.' },
      language: { ru: 'Русский язык понимают практически везде: от носильщиков и гидов до аниматоров и врачей в отелях.', en: 'Russian widely understood across all tourist areas, excursions, and hotels.' },
      beaches: { ru: 'В Хургаде — песчаные пологие пляжи; в Шарм-эль-Шейхе — коралловые рифы прямо с понтона (рекомендуются коралловые тапочки).', en: 'Sandy gentle-sloping beaches in Hurghada; coral drop-off reefs with pontoons in Sharm.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'hurghada',
        name: { ru: 'Хургада (Песчаные пляжи)', en: 'Hurghada (Sandy Beach)' },
        tag: { ru: 'Песок, Пологий вход & Семейные отели', en: 'Sand, Gentle Entry & Family' },
        flight: { ru: '4ч 50м (прямой рейс)', en: '4h 50m direct' },
        temp: '+29°C (вода +26°C)',
        priceFrom: '39 500 ₽',
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Широкие золотые песчаные пляжи с естественным пологим заходом в воду без кораллов. Идеально для купания детей и пожилых людей.',
          en: 'Wide golden sand shores with natural gentle entry into calm warm waters without corals.'
        },
        desc: {
          ru: 'Главный семейный курорт Египта: песчаное дно, огромные территории отелей с аквапарками, прогулки на катерах к островам Гифтун и морские деликатесы на набережной Марина.',
          en: 'Premier family seaside resort with soft sandy seabeds, mega waterpark hotels, and boat tours.'
        },
        attractions: [
          {
            name: { ru: 'Остров Гифтун & Пляж Махмея («Египетские Мальдивы»)', en: 'Giftun Island & Mahmya Beach' },
            desc: { ru: 'Ослепительно белый песок, прозрачная бирюзовая лагуна и снорклинг среди кораллов.', en: 'Exotic white-sand marine national park with extraordinary reef snorkeling.' }
          },
          {
            name: { ru: 'Набережная Хургада Марина', en: 'Hurghada Marina Promenade' },
            desc: { ru: 'Европейский променад с причалами для белоснежных яхт, кафе и детскими городками.', en: 'Chic palm-lined promenade filled with yachts, seafood dining, and boutiques.' }
          }
        ]
      },
      {
        id: 'sharm',
        name: { ru: 'Шарм-эль-Шейх (Рифы и Дайвинг)', en: 'Sharm El-Sheikh (Coral Reefs)' },
        tag: { ru: 'Коралловые сады, Снорклинг & Бухты', en: 'Coral Gardens, Snorkeling & Bays' },
        flight: { ru: '4ч 40м (прямой рейс)', en: '4h 40m direct' },
        temp: '+30°C (вода +27°C)',
        priceFrom: '41 200 ₽',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Живой коралловый риф прямо у берега отелей. Заход в море с удобных понтонов сразу в подводный мир с рыбками-бабочками и черепахами.',
          en: 'Pristine house reefs right off hotel shores with pontoon access to turtles and exotic fish.'
        },
        desc: {
          ru: 'Расположен на юге Синая, защищен от зимних ветров горами (бухты Наама Бей, Шаркс Бей, Рас-Умм-Сид). Мечта любого любителя подводного плавания.',
          en: 'Wind-sheltered Sinai bays celebrated globally for colorful coral walls and sunny winters.'
        },
        attractions: [
          {
            name: { ru: 'Морской заповедник Рас-Мохаммед', en: 'Ras Mohammed National Park' },
            desc: { ru: 'Один из красивейших коралловых заповедников мира с подводными гротами и скалами.', en: 'World-famous marine park with dramatic underwater drop-offs and sea turtles.' }
          },
          {
            name: { ru: 'Бухта Наама Бей и площадь Сохо', en: 'Naama Bay & SOHO Square' },
            desc: { ru: 'Пешеходная зона с поющими фонтанами, сценами с концертами и восточными сувенирами.', en: 'Vibrant entertainment center with illuminated dancing fountains, ice bar, and cafes.' }
          }
        ]
      }
    ]
  },

  // 4. THAILAND
  {
    id: 'thailand',
    flag: '🇹🇭',
    name: { ru: 'Таиланд', en: 'Thailand' },
    cardImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=700&auto=format&fit=crop&q=80',
    priceFrom: '59 900 ₽',
    visa: { ru: 'Без визы до 60 дней для граждан РФ', en: 'Visa-free up to 60 days' },
    flightTime: { ru: 'Прямые чартеры из Москвы (~9 ч) и стыковки из НН', en: 'Direct from Moscow (~9h)' },
    bestSeason: { ru: 'Ноябрь — Апрель (сухой сезон, спокойное море)', en: 'November — April (calm sunny sea)' },
    tagline: {
      ru: 'Тропический рай: теплое Андаманское море, острова-баунти, фрукты и массаж',
      en: 'Tropical paradise: warm Andaman Sea, bounty islands, exotic fruits, and Thai hospitality'
    },
    overview: {
      ru: 'Таиланд — главная любовь российских путешественников в Юго-Восточной Азии. Белоснежные пляжи в тени кокосовых пальм, прозрачная бирюзовая вода Андаманского моря, спелые манго и ананасы за копейки, знаменитый тайский массаж и безвизовый въезд на целых 60 дней.',
      en: 'Thailand is the ultimate Southeast Asian tropical haven: powdery beaches, turquoise waters, sweet mangoes, Thai massages, and 60 days visa-free.'
    },
    russianTravelerTips: {
      money: { ru: 'Наличные доллары (лучше купюры 50/100$) и евро выгодно меняются в обменниках TT Currency. Работают карты UnionPay (снятие бат в банкоматах).', en: 'USD 50/100 notes exchanged at top rates in TT Exchange booths. UnionPay works in local ATMs.' },
      flights: { ru: 'Прямые рейсы Аэрофлот, Azur Air, Red Wings из Москвы и регионов в Пхукет и Бангкок.', en: 'Direct regular and charter flights from Moscow and Russian hubs to Phuket.' },
      language: { ru: 'На Пхукете и в Паттайе практически все экскурсии, вывески в кафе и меню переведены на русский язык.', en: 'Russian menus, excursion guides, and pharmacy signage are everywhere in Phuket.' },
      beaches: { ru: 'Мягкий белый и золотистый песок, теплая морская вода (+29..+31°C), пологий вход, потрясающие закаты.', en: 'Soft white sand, bath-warm water (+30°C), gentle entry, world-class tropical sunsets.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'phuket',
        name: { ru: 'Остров Пхукет', en: 'Phuket Island' },
        tag: { ru: 'Пляжи Карон, Ката & Острова', en: 'Karon, Kata Beaches & Islands' },
        flight: { ru: '9ч 20м (прямой рейс)', en: '9h 20m direct' },
        temp: '+32°C (вода +29°C)',
        priceFrom: '69 000 ₽',
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Знаменитые пляжи Карон («поющий песок»), Ката и Банг Тао с чистейшей лазурной водой Андаманского моря.',
          en: 'Celebrated Karon, Kata & Bang Tao beaches with singing sands and turquoise Andaman water.'
        },
        desc: {
          ru: 'Самый популярный остров Таиланда. Тропическая зелень джунглей, прогулки на катерах к островам Пхи-Пхи и Джеймса Бонда, вечерние ночные рынки со свежими морепродуктами.',
          en: 'Thailand’s prime island featuring Andaman waters, Phi Phi boat tours, night markets, and beach clubs.'
        },
        attractions: [
          {
            name: { ru: 'Пляжи Ката, Карон и Банг Тао', en: 'Kata, Karon & Bang Tao Beaches' },
            desc: { ru: 'Кристально чистое море, широкая полоса песка и развитая инфраструктура для отдыха.', en: 'Postcard-perfect beaches with coconut trees, gentle surf, and sunset cocktail bars.' }
          },
          {
            name: { ru: 'Острова Пхи-Пхи & Залив Майя Бэй', en: 'Phi Phi Islands & Maya Bay' },
            desc: { ru: 'Однодневная экскурсия на скоростном катере в бухту из фильма «Пляж».', en: 'Iconic limestone karst islands with emerald water lagoons and wild snorkeling.' }
          },
          {
            name: { ru: 'Большой Будда на холме Наккерд', en: 'Big Buddha Summit' },
            desc: { ru: '45-метровая мраморная статуя с круговой панорамой на весь остров и море.', en: '45-meter white marble monument commanding 360-degree views of the island.' }
          }
        ]
      },
      {
        id: 'pattaya',
        name: { ru: 'Паттайя и остров Ко Лан', en: 'Pattaya & Koh Larn' },
        tag: { ru: 'Доступный отдых, Острова & Шоу', en: 'Budget, Islands & Shows' },
        flight: { ru: '9ч 00м', en: '9h 00m' },
        temp: '+31°C (вода +29°C)',
        priceFrom: '59 900 ₽',
        image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Купание на чистейших лазурных пляжах кораллового острова Ко Лан (20 минут на пароме или катере от пирса Бали Хай).',
          en: 'Crystal azure waters on Koh Larn island beaches just 20 minutes by boat from Pattaya pier.'
        },
        desc: {
          ru: 'Самый бюджетный и насыщенный курорт: сотни экскурсий (река Квай, тропический сад Нонг Нуч), свежие креветки и фрукты.',
          en: 'Exciting and affordable coastal hub with tropical gardens, elephant sanctuaries, and island trips.'
        },
        attractions: [
          {
            name: { ru: 'Коралловый остров Ко Лан (Пляж Тьен)', en: 'Koh Larn Coral Island' },
            desc: { ru: 'Белоснежный песок и кристальная бирюзовая вода Сиамского залива.', en: 'White sand beaches with clear turquoise waters and seaside seafood shacks.' }
          },
          {
            name: { ru: 'Тропический сад Нонг Нуч', en: 'Nong Nooch Tropical Gardens' },
            desc: { ru: 'Один из крупнейших ботанических парков Азии с коллекцией редких орхидей.', en: 'Sprawling 500-acre botanical gardens with French gardens and cultural shows.' }
          }
        ]
      }
    ]
  },

  // 5. MALDIVES
  {
    id: 'maldives',
    flag: '🇲🇻',
    name: { ru: 'Мальдивы', en: 'Maldives' },
    cardImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&auto=format&fit=crop&q=80',
    priceFrom: '115 000 ₽',
    visa: { ru: 'Без визы до 90 дней (загранпаспорт РФ)', en: 'Visa-free up to 90 days' },
    flightTime: { ru: 'Прямой рейс Аэрофлот из Москвы (~8.5 ч)', en: 'Direct Aeroflot from Moscow (~8.5h)' },
    bestSeason: { ru: 'Ноябрь — Апрель (сухой сезон «Ируваи»)', en: 'November — April' },
    tagline: {
      ru: 'Премиум-отдых мечты: виллы над лазурной водой, белый песок и релакс',
      en: 'Dream escape: overwater villas, pure white sand, and tropical tranquility'
    },
    overview: {
      ru: 'Мальдивские острова — это сказка наяву для романтического отдыха, медового месяца и полной перезагрузки. Отели формата «один остров — один отель», где можно ходить босиком по нежнейшему мучнистому песку, спускаться прямо с террасы водной виллы в бирюзовую лагуну и наблюдать за скатами и акулами.',
      en: 'The Maldives offers supreme barefoot seclusion: one-island-one-resort privacy, overwater bungalows, house reefs, and dining under the stars.'
    },
    russianTravelerTips: {
      money: { ru: 'В резортах все счета закрываются в долларах США (USD) или картами зарубежных банков / UnionPay. Наличные доллары принимаются везде.', en: 'Resort folios in USD. UnionPay accepted at major luxury resort islands.' },
      flights: { ru: 'Прямые ежедневные рейсы «Аэрофлот» из Москвы (Шереметьево) в Мале, а также удобные стыковки через Дубай (Emirates, flydubai).', en: 'Direct daily Aeroflot flights from Moscow (SVO) to Male (MLE).' },
      language: { ru: 'Во всех популярных 5* резортах есть русскоговорящие хосты (батлеры) и гиды.', en: 'Russian-speaking island hosts, butlers, and excursion guides in popular resorts.' },
      beaches: { ru: 'Идеальный коралловый белый песок, который никогда не нагревается на солнце. Спокойная лазурная лагуна без волн.', en: 'Cool white coral sand that never gets hot, calm lagoons, and vibrant marine life.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'male_atoll',
        name: { ru: 'Мале Атоллы (Север и Юг)', en: 'Male Atolls' },
        tag: { ru: 'Виллы на воде & Быстрый катер', en: 'Overwater Villas & Speedboat' },
        flight: { ru: '8ч 30м (прямой рейс)', en: '8h 30m direct' },
        temp: '+30°C (вода +29°C)',
        priceFrom: '115 000 ₽',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Частные белоснежные пляжи резорт-островов с пологим спуском в прозрачные лагуны, защищенные внешними рифами от океанских волн.',
          en: 'Pristine private island beaches surrounded by calm crystal lagoons.'
        },
        desc: {
          ru: 'Ближайшие к аэропорту курорты. Трансфер на скоростном катере занимает всего 20–40 минут после прилета без необходимости ждать гидросамолет.',
          en: 'Prime atolls with fast speedboat transfers, overwater villas, and spectacular private house reefs.'
        },
        attractions: [
          {
            name: { ru: 'Домашние коралловые рифы с акулами-няньками', en: 'House Reef Marine Life' },
            desc: { ru: 'Снорклинг прямо у вашей виллы среди морских черепах, дружелюбных рифовых акул и скатов.', en: 'Snorkel straight off your villa deck into reefs teeming with turtles and rays.' }
          },
          {
            name: { ru: 'Ужины на песчаных отмелях (Sandbank)', en: 'Deserted Sandbank Dining' },
            desc: { ru: 'Уединенные островки белого песка посреди бирюзового океана только для вас.', en: 'Private boat escapes to isolated white sand spits surrounded by crystal waters.' }
          }
        ]
      }
    ]
  },

  // 6. RUSSIA
  {
    id: 'russia',
    flag: '🇷🇺',
    name: { ru: 'Россия (Черное море)', en: 'Russia (Black Sea)' },
    cardImage: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=700&auto=format&fit=crop&q=80',
    priceFrom: '26 500 ₽',
    visa: { ru: 'Внутренний паспорт РФ (без виз и загранпаспорта)', en: 'Domestic (No passport needed)' },
    flightTime: { ru: 'Прямые рейсы из Нижнего Новгорода (3.5 ч) и Москвы (3.5 ч)', en: 'Direct from NN and Moscow (~3.5h)' },
    bestSeason: { ru: 'Июнь — Октябрь (пляж) / Круглый год (горы)', en: 'June — October (beach) / Year-round (mountains)' },
    tagline: {
      ru: 'Черноморское побережье: субтропики, горы Красной Поляны и море без валютных хлопот',
      en: 'Black Sea Riviera: subtropical beaches, Alpine mountains, and easy domestic travel'
    },
    overview: {
      ru: 'Сочи — главная жемчужина отечественного туризма. Субтропический климат с пальмами, обновленные современные пляжи с шезлонгами и бунгало, олимпийское наследие, возможность утром искупаться в теплом Черном море, а днем подняться на канатной дороге на высоту 2320 м в Красной Поляне.',
      en: 'Sochi is Russia’s subtropical resort capital, combining modern Black Sea beaches, palm boulevards, and snowcapped Caucasus peaks at Rosa Khutor.'
    },
    russianTravelerTips: {
      money: { ru: 'Принимаются любые карты МИР, СБП, наличные рубли. Полное отсутствие курсовых разниц и конвертаций.', en: 'MIR cards, Russian payment systems, domestic rubles.' },
      flights: { ru: 'Прямые регулярные авиарейсы из Нижнего Новгорода (Стригино) в аэропорт Сочи (Адлер) круглый год.', en: 'Direct regular flights from Nizhny Novgorod and Moscow to Sochi (AER).' },
      language: { ru: 'Родной русский язык, российская медицина по полису ОМС, привычные стандарты сервиса.', en: 'Full domestic language comfort and medical coverage.' },
      beaches: { ru: 'Благоустроенные мелкогалечные пляжи («Ривьера», «Имеретинский», «Маяк») с кристальной водой и набережными.', en: 'Well-maintained pebble and sand beach clubs with seaside promenades.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'sochi',
        name: { ru: 'Сочи и Сириус (Имеретинка)', en: 'Sochi & Sirius' },
        tag: { ru: 'Море, Пальмы, Олимпийский парк & Горы', en: 'Sea, Palms & Olympic Coast' },
        flight: { ru: '3ч 30м прямой рейс', en: '3h 30m direct' },
        temp: '+26°C (вода +25°C)',
        priceFrom: '26 500 ₽',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Широкая Имеретинская набережная с пляжами с мелкой галькой, прозрачная морская вода, деревянные дорожки и шезлонги.',
          en: 'Wide Imereti promenade with pebble beach clubs, clear waters, and palm avenues.'
        },
        desc: {
          ru: 'Современный европейский курорт: чистейшая морская набережная без железной дороги, Олимпийские стадионы, Сочи Парк и курорт Красная Поляна в 40 минутах на «Ласточке».',
          en: 'Subtropical seaside resort combining Olympic landmarks, theme parks, and alpine cable cars.'
        },
        attractions: [
          {
            name: { ru: 'Имеретинский пляж и набережная Сириуса', en: 'Sirius Seaside Promenade' },
            desc: { ru: '7 км широкой благоустроенной набережной с велодорожками, ресторанами и чистым морем.', en: '7km picturesque coastal promenade lined with modern beach clubs and dining.' }
          },
          {
            name: { ru: 'Курорт Роза Хутор & Роза Пик (2320 м)', en: 'Rosa Khutor Alpine Peak' },
            desc: { ru: 'Канатные дороги над облаками в горах Кавказа всего в 40 минутах от пляжа.', en: 'Cable cars climbing above the clouds to panoramic Caucasus summit viewpoints.' }
          }
        ]
      }
    ]
  },

  // 7. VIETNAM
  {
    id: 'vietnam',
    flag: '🇻🇳',
    name: { ru: 'Вьетнам', en: 'Vietnam' },
    cardImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=700&auto=format&fit=crop&q=80',
    priceFrom: '65 000 ₽',
    visa: { ru: 'Без визы до 45 дней для граждан РФ', en: 'Visa-free up to 45 days' },
    flightTime: { ru: 'Прямые чартерные рейсы из Москвы (~9.5 ч)', en: 'Direct charters from Moscow (~9.5h)' },
    bestSeason: { ru: 'Ноябрь — Май (на Фукуоке и в Нячанге)', en: 'November — May' },
    tagline: {
      ru: 'Золотые песчаные пляжи, свежие морепродукты и грязевые спа-курорты',
      en: 'Golden sand beaches, fresh seafood, and mineral mud spas'
    },
    overview: {
      ru: 'Вьетнам привлекает российских туристов удивительным сочетанием низких цен, длинных песчаных пляжей Южно-Китайского моря, потрясающих креветок и лобстеров за копейки, целебных грязелечебниц и безвизового въезда на 45 дней.',
      en: 'Vietnam delights travelers with value luxury: tropical coastlines, mud spas, islands, and fresh seafood.'
    },
    russianTravelerTips: {
      money: { ru: 'Наличные доллары выгодно меняются на донги (VND) в ювелирных магазинах. Карты UnionPay работают в банкоматах VRB (Российско-Вьетнамский Банк).', en: 'USD cash exchanged in jewelry shops. UnionPay works in VRB ATMs.' },
      flights: { ru: 'Чартерные и регулярные рейсы в Нячанг (аэропорт Камрань) и на остров Фукуок.', en: 'Flights to Cam Ranh (Nha Trang) and Phu Quoc Island.' },
      language: { ru: 'В Нячанге масса вывесок, ресторанов и экскурсионных бюро на русском языке («Русский информационный центр»).', en: 'Russian signage, info centers, and guides abundant in Nha Trang.' },
      beaches: { ru: 'Широкие пляжи с мягким желтым и белым песком, пологий заход, ласковое теплое Южно-Китайское море.', en: 'Wide golden sand shores, warm waters, and scenic island day trips.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'nhatrang',
        name: { ru: 'Курорт Нячанг', en: 'Nha Trang Beach' },
        tag: { ru: 'Пляжи, Грязевые спа & VinWonders', en: 'Beaches, Mud Spas & VinWonders' },
        flight: { ru: '10ч 00м прямой', en: '10h 00m direct' },
        temp: '+30°C (вода +28°C)',
        priceFrom: '65 000 ₽',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: '7-километровый городской песчаный пляж с пальмовым парком Чан Фу, а также пляж Бай Дай с белоснежным песком.',
          en: '7km sandy beach promenade with palm gardens and calm bay waters.'
        },
        desc: {
          ru: 'Столица пляжного Вьетнама: минеральные ванны Тхап Ба, канатная дорога на остров развлечений Vinpearl и свежие морепродукты в уличных кафе.',
          en: 'Beach capital famous for mineral mud baths, island cable cars, and seafood feasts.'
        },
        attractions: [
          {
            name: { ru: 'Парк развлечений VinWonders на острове', en: 'VinWonders Island Park' },
            desc: { ru: 'Канатная дорога над морем, аквапарк, зоопарк и колесо обозрения.', en: 'Island theme park reached by an over-sea cable car.' }
          },
          {
            name: { ru: 'Пляж Бай Дай (Длинный пляж)', en: 'Bai Dai White Sand Beach' },
            desc: { ru: 'Широкая полоса белого песка с пологим заходом и бирюзовым морем.', en: 'Wide white sand beach with gentle entry and turquoise waters.' }
          }
        ]
      }
    ]
  },

  // 8. CHINA (HAINAN)
  {
    id: 'china',
    flag: '🇨🇳',
    name: { ru: 'Китай (Остров Хайнань)', en: 'China (Hainan Island)' },
    cardImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80',
    priceFrom: '59 000 ₽',
    visa: { ru: 'Без визы до 30 дней в составе тургруппы', en: 'Visa-free up to 30 days in tour groups' },
    flightTime: { ru: 'Прямые регулярные рейсы «Аэрофлот» из Москвы (~9.5 ч)', en: 'Direct Aeroflot from Moscow (~9.5h)' },
    bestSeason: { ru: 'Октябрь — Май (тропический мягкий климат)', en: 'October — May' },
    tagline: {
      ru: '«Восточные Гавайи»: пляжи Южно-Китайского моря, радоновые источники и китайская медицина',
      en: 'The "Hawaii of the Orient": warm tropical beaches, hot springs, and wellness'
    },
    overview: {
      ru: 'Хайнань — единственный тропический остров Китая на одной географической широте с Гавайями. Здесь потрясающая экология, чистейшее Южно-Китайское море, песчаные бухты Дадунхай и Ялонгвань, целебные термальные источники Наньтянь и центры традиционной китайской медицины.',
      en: 'Hainan is China’s tropical wellness paradise, sharing the latitude of Hawaii, with emerald bays, thermal hot springs, and beach resorts.'
    },
    russianTravelerTips: {
      money: { ru: 'Рекомендуется брать наличные юани (CNY) из России или доллары/евро для обмена. Карты UnionPay работают в банкоматах Bank of China.', en: 'Bring cash Yuan (CNY) or USD. Russian UnionPay cards work at Bank of China ATMs.' },
      flights: { ru: 'Прямые рейсы Москва — Санья (а/к «Аэрофлот») и прямые чартеры.', en: 'Direct scheduled flights between Moscow and Sanya Phoenix Airport.' },
      language: { ru: 'В бухте Дадунхай всё ориентировано на россиян: русские рестораны («СССР», «Трактир»), меню и русскоговорящие врачи.', en: 'Dadonghai Bay is heavily tailored to Russian tourists with Russian clinics and menus.' },
      beaches: { ru: 'Мягкий белый песок в бухте Ялонгвань, спокойная прозрачная вода, кокосовые рощи прямо у кромки прибоя.', en: 'Soft white sand in Yalong Bay, calm waters, and lush palm coastlines.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'sanya',
        name: { ru: 'Город Санья и Бухты', en: 'Sanya & Tropical Bays' },
        tag: { ru: 'Пляжи, Термальные спа & Долголетие', en: 'Beaches, Thermal Spas & Wellness' },
        flight: { ru: '9ч 30м (прямой рейс)', en: '9h 30m direct' },
        temp: '+29°C (вода +27°C)',
        priceFrom: '59 000 ₽',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Бухта Ялонгвань (элитный белый песок) и Дадунхай (оживленный пляж с ресторанами и фруктовыми лавками).',
          en: 'Crescent-shaped Yalong Bay and lively Dadonghai beaches with soft sand.'
        },
        desc: {
          ru: 'Тропический курорт мирового уровня: гигантская статуя богини Гуаньинь над морем, стеклянный мост в джунглях Янода и отели ведущих мировых цепочек.',
          en: 'Tropical island luxury with a 108m sea statue, rainforest canopy walks, and hot spring spas.'
        },
        attractions: [
          {
            name: { ru: 'Бухта Ялонгвань («Залив Дракона»)', en: 'Yalong Bay Beach' },
            desc: { ru: '7 км чистейшего белого песка с пологим входом в прозрачное изумрудное море.', en: '7km pristine crescent beach with crystal waters and international resorts.' }
          },
          {
            name: { ru: 'Статуя богини Гуаньинь (108 м) в парке Наньшань', en: '108m Guanyin Buddha of Nanshan' },
            desc: { ru: 'Монументальная трехликая статуя, стоящая на постаменте прямо в море.', en: 'Magnificent 108-meter statue of Guanyin standing above sea waves in Nanshan Park.' }
          }
        ]
      }
    ]
  },

  // 9. INDIA
  {
    id: 'india',
    flag: '🇮🇳',
    name: { ru: 'Индия (Штат Гоа)', en: 'India (Goa Coast)' },
    cardImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop&q=80',
    priceFrom: '48 000 ₽',
    visa: { ru: 'Электронная виза онлайн (e-Visa оформляется за 2–4 дня)', en: 'Online e-Visa (2–4 days)' },
    flightTime: { ru: 'Прямые чартеры из Москвы и Екатеринбурга в Гоа (~7 ч)', en: 'Direct charters from Moscow (~7h)' },
    bestSeason: { ru: 'Октябрь — Апрель (сухой теплый сезон)', en: 'October — April' },
    tagline: {
      ru: 'Широкие пляжи Аравийского моря, закаты под шум прибоя, морепродукты и Аюрведа',
      en: 'Wide Arabian Sea beaches, breathtaking sunsets, fresh seafood, and Ayurveda'
    },
    overview: {
      ru: 'Гоа — легендарное побережье Аравийского моря, где царит атмосфера абсолютной свободы и умиротворения. Бесконечные песчаные пляжи с пальмами, свежие тигровые креветки в пляжных шейках, потрясающие закаты под бой барабанов и восстанавливающие аюрведические массажи.',
      en: 'Goa is India’s coastal paradise on the Arabian Sea, renowned for endless golden sands, palm groves, beach shacks, and rejuvenating Ayurveda.'
    },
    russianTravelerTips: {
      money: { ru: 'Наличные доллары и евро выгодно меняются в шейках и лавках. Рубли можно обменять или перевести безналичным переводом в русских агентствах в Гоа.', en: 'USD cash easily exchanged in beach shacks. Russian bank transfer cash-outs widely available.' },
      flights: { ru: 'Прямые чартерные рейсы Аэрофлот и Azur Air из Москвы в новый международный аэропорт Мопа (GOX) и Даболим.', en: 'Direct charter flights from Moscow straight to Goa Manohar International Airport (MOPA).' },
      language: { ru: 'В Северном Гоа (Морджим, Арамболь) огромное русскоязычное сообщество: русские кафе, меню, врачи и экскурсии.', en: 'Huge Russian traveler community in North Goa (Morjim, Arambol) with Russian services.' },
      beaches: { ru: 'Широчайшие песчаные пляжи с пологим песчаным дном, теплые волны Аравийского моря (+29°C), пляжные шезлонги.', en: 'Extremely wide golden sand beaches with gentle entry and warm Arabian Sea waves.' }
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'goa',
        name: { ru: 'Пляжи Гоа (Север и Юг)', en: 'Goa (North & South Beaches)' },
        tag: { ru: 'Песчаные пляжи, Закаты & Шейки', en: 'Golden Beaches, Sunsets & Shacks' },
        flight: { ru: '7ч 00м (прямой рейс)', en: '7h 00m direct' },
        temp: '+32°C (вода +29°C)',
        priceFrom: '48 000 ₽',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
        ],
        beachInfo: {
          ru: 'Широкие песчаные пляжи с золотым песком: Юг (Варка, Кавелоссим, Палолем) — тишина и роскошные 5* отели; Север (Морджим, Мандрем, Арамболь) — уютные шезлонги у кафе-шейков.',
          en: 'Expansive golden sand beaches: serene luxury in South Goa; vibrant sunset beach shacks in North Goa.'
        },
        desc: {
          ru: 'Идеальное место для зимовки и пляжного отдыха: купание в теплых волнах Аравийского моря, поездки к водопаду Дудхсагар и португальские форты XVI века.',
          en: 'Tropical getaway celebrated for warm Arabian Sea waters, Dudhsagar jungle waterfalls, and colonial forts.'
        },
        attractions: [
          {
            name: { ru: 'Пляжи Морджим («Русская деревня») и Палолем', en: 'Morjim & Palolem Beaches' },
            desc: { ru: 'Широкая полоса золотого песка с морскими черепахами и уютными пляжными шезлонгами.', en: 'Wide golden sand shores with sea turtles, beach shacks, and sunset drumming circles.' }
          },
          {
            name: { ru: 'Четырехуровневый водопад Дудхсагар («Молочный океан»)', en: 'Dudhsagar Jungle Waterfalls' },
            desc: { ru: '310-метровый водопад в диких джунглях Западных Гат с купанием в прохладном озере.', en: '310-meter four-tiered jungle waterfall with cool mountain swimming pool.' }
          }
        ]
      }
    ]
  }
];
