// ============================================================
// countryGuideData.js — 10 Countries & Famous Cities Dataset
// Multiple country photos, country overviews, and detailed city sights
// ============================================================

export const countryGuideData = [
  // 1. TURKEY
  {
    id: 'turkey',
    flag: '🇹🇷',
    name: { ru: 'Турция', en: 'Turkey' },
    cardImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop&q=80',
    priceFrom: '38 500 ₽',
    visa: { ru: 'Без визы (до 60 дней)', en: 'Visa-free (up to 60 days)' },
    flightTime: { ru: '3.5–4.5 часа', en: '3.5–4.5 hours' },
    bestSeason: { ru: 'Май — Октябрь', en: 'May — October' },
    tagline: {
      ru: 'Тёплое Средиземное море, роскошный «всё включено» и великая история',
      en: 'Warm Mediterranean Sea, luxury all-inclusive resorts, and imperial history'
    },
    overview: {
      ru: 'Турция — одно из самых любимых направлений для комфортного пляжного отдыха. Здесь великолепный сервис «всё включено», теплое бирюзовое море, величественные Торосские горы, античные города Римской империи и чарующий колорит восточных базаров.',
      en: 'Turkey is a world-renowned vacation hotspot offering legendary all-inclusive luxury, crystal Mediterranean waters, dramatic mountain vistas, and millennia of rich history.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'antalya',
        name: { ru: 'Анталья', en: 'Antalya' },
        tag: { ru: 'Пляжи & All-Inclusive', en: 'Beaches & All-Inclusive' },
        flight: { ru: '3ч 40м', en: '3h 40m' },
        temp: '+28°C',
        priceFrom: '42 900 ₽',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=700&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Главный курортный центр Турецкой Ривьеры. Песчано-галечные пляжи, водопады и уютный старый город Калеичи.',
          en: 'The heart of the Turkish Riviera, world-renowned for turquoise beaches, luxury all-inclusive resorts, and waterfalls.'
        },
        attractions: [
          {
            name: { ru: 'Старый город Калеичи & Ворота Адриана', en: 'Kaleiçi Old Town & Hadrian’s Gate' },
            desc: { ru: 'Мощёные улочки, османские особняки, римские башни и древняя гавань.', en: 'Cobblestone alleyways, Ottoman timber mansions, and Roman imperial towers.' }
          },
          {
            name: { ru: 'Водопады Дюден', en: 'Düden Waterfalls' },
            desc: { ru: 'Нижний водопад обрушивается со скалы высотой 40 метров прямо в Средиземное море.', en: 'A dramatic 40-meter waterfall plummeting directly off a cliff into the sea.' }
          },
          {
            name: { ru: 'Пляж Коньяалты', en: 'Konyaaltı Beach' },
            desc: { ru: 'Многокилометровый оборудованный пляж с панорамой Торосских гор и набережной.', en: 'Wide beach promenade framed by the dramatic peaks of the Taurus Mountains.' }
          }
        ]
      },
      {
        id: 'istanbul',
        name: { ru: 'Стамбул', en: 'Istanbul' },
        tag: { ru: 'История, Культура & Шопинг', en: 'History, Culture & Shopping' },
        flight: { ru: '4ч 10м', en: '4h 10m' },
        temp: '+22°C',
        priceFrom: '38 500 ₽',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=700&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Великий мегаполис на стыке Европы и Азии, разделенный Босфором. Дворцы султанов, мечети и восточные базары.',
          en: 'A captivating transcontinental metropolis bridging Europe and Asia across the historic Bosphorus strait.'
        },
        attractions: [
          {
            name: { ru: 'Айя-София и Голубая мечеть', en: 'Hagia Sophia & Blue Mosque' },
            desc: { ru: 'Шедевры византийского и османского зодчества с тысячелетней историей.', en: 'Iconic architectural marvels featuring imperial gold mosaics and six minarets.' }
          },
          {
            name: { ru: 'Дворец Топкапы & Гранд Базар', en: 'Topkapi Palace & Grand Bazaar' },
            desc: { ru: 'Резиденция султанов и один из старейших крытых рынков мира с 4000 лавками.', en: 'Palatial seat of Ottoman sultans and one of the largest covered bazaars on earth.' }
          },
          {
            name: { ru: 'Круиз по проливу Босфор', en: 'Bosphorus Strait Cruise' },
            desc: { ru: 'Панорамные виды на дворцы, старинные крепости и подвесные мосты.', en: 'Breathtaking boat tour taking in palaces, wooden yalı villas, and suspension bridges.' }
          }
        ]
      },
      {
        id: 'bodrum',
        name: { ru: 'Бодрум', en: 'Bodrum' },
        tag: { ru: 'Богема, Яхты & Премиум отдых', en: 'Bohemian Chic, Yachts & Nightlife' },
        flight: { ru: '4ч 00м', en: '4h 00m' },
        temp: '+26°C',
        priceFrom: '56 000 ₽',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Эгейская жемчужина в греческом стиле: белоснежные домики, цветущие бугенвиллии и элитные марины для яхт.',
          en: 'The Saint-Tropez of the Aegean: whitewashed hillside villas, bright bougainvillea, and superyacht harbors.'
        },
        attractions: [
          {
            name: { ru: 'Замок Святого Петра & Музей подводной археологии', en: 'Castle of St. Peter & Underwater Museum' },
            desc: { ru: 'Крепость рыцарей-госпитальеров XV века с коллекцией древнейших кораблекрушений.', en: '15th-century Crusader castle home to shipwreck artifacts from the Bronze Age.' }
          },
          {
            name: { ru: 'Марина Ялыкавак', en: 'Yalıkavak Marina' },
            desc: { ru: 'Элитный порт для суперяхт, бутики мировых брендов и рестораны высокой кухни.', en: 'Award-winning luxury marina with high-end boutiques and world-class dining.' }
          },
          {
            name: { ru: 'Ветряные мельницы Бодрума', en: 'Bodrum Historic Windmills' },
            desc: { ru: 'Каменные мельницы XVIII века на холме с панорамным обзором на две бухты.', en: 'Stone windmills on a hilltop separating Bodrum Bay from Gümbet.' }
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
    cardImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80',
    priceFrom: '49 900 ₽',
    visa: { ru: 'Без визы (по прибытии)', en: 'Visa-free on arrival' },
    flightTime: { ru: '4.5–5 часов', en: '4.5–5 hours' },
    bestSeason: { ru: 'Октябрь — Апрель', en: 'October — April' },
    tagline: {
      ru: 'Города будущего, тёплый Персидский залив, сафари в пустыне и шопинг',
      en: 'Cities of the future, warm Arabian Gulf waters, desert safaris, and luxury'
    },
    overview: {
      ru: 'Объединенные Арабские Эмираты — символ роскоши и инноваций XXI века. Здесь сочетаются ультрасовременные мегаполисы с головокружительными башнями, традиционные базары благовоний, золотые барханы пустыни и круглогодичный пляжный отдых на берегу Персидского залива.',
      en: 'The United Arab Emirates is a beacon of futuristic innovation and Arabian elegance, boasting monumental skyscrapers, palm islands, desert dunes, and warm gulf waters.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'dubai',
        name: { ru: 'Дубай', en: 'Dubai' },
        tag: { ru: 'Небоскребы & Премиум развлечения', en: 'Skyscrapers & World Records' },
        flight: { ru: '4ч 50м', en: '4h 50m' },
        temp: '+31°C',
        priceFrom: '58 000 ₽',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Город мировых рекордов, футуристической архитектуры, насыпных островов и пляжей с видом на башни.',
          en: 'A futuristic desert metropolis boasting monumental architecture, man-made archipelagoes, and luxury beach clubs.'
        },
        attractions: [
          {
            name: { ru: 'Бурдж-Халифа & Поющие фонтаны', en: 'Burj Khalifa & Dubai Fountain' },
            desc: { ru: 'Самое высокое здание в мире (828 м) со смотровыми площадками и светомузыкальным шоу.', en: 'World’s tallest skyscraper with observation decks on level 148 and dancing lake fountains.' }
          },
          {
            name: { ru: 'Остров Пальма Джумейра & Atlantis', en: 'Palm Jumeirah & Atlantis' },
            desc: { ru: 'Легендарный рукотворный остров в форме пальмы с аквапарком Aquaventure.', en: 'Iconic palm-tree shaped island hosting luxury beach resorts and thrilling waterparks.' }
          },
          {
            name: { ru: 'Дубай Молл & Аквариум', en: 'Dubai Mall & Oceanarium' },
            desc: { ru: 'Крупнейший торгово-развлекательный центр с гигантским туннельным аквариумом.', en: 'Gigantic lifestyle mall featuring a walk-through shark tunnel and Olympic ice rink.' }
          }
        ]
      },
      {
        id: 'abudhabi',
        name: { ru: 'Абу-Даби', en: 'Abu Dhabi' },
        tag: { ru: 'Культура, Музеи & Королевская роскошь', en: 'Culture, Heritage & Royal Luxury' },
        flight: { ru: '5ч 10м', en: '5h 10m' },
        temp: '+30°C',
        priceFrom: '61 000 ₽',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Столица ОАЭ: белоснежные мраморные мечети, Лувр на воде и головокружительный парк Ferrari World.',
          en: 'The stately capital combining peaceful mangrove lagoons, royal marble palaces, and Louvre Abu Dhabi.'
        },
        attractions: [
          {
            name: { ru: 'Мечеть шейха Зайда', en: 'Sheikh Zayed Grand Mosque' },
            desc: { ru: 'Архитектурный шедевр из белого мрамора с 82 куполами и кристаллами Swarovski.', en: 'One of the world’s grandest mosques adorned with pure Macedonian marble.' }
          },
          {
            name: { ru: 'Лувр Абу-Даби', en: 'Louvre Abu Dhabi' },
            desc: { ru: 'Художественный музей под ажурным куполом с эффектом «дождя из света».', en: 'World-renowned art museum sheltered under a massive lace-pattern floating dome.' }
          }
        ]
      },
      {
        id: 'rak',
        name: { ru: 'Рас-эль-Хайма', en: 'Ras Al Khaimah' },
        tag: { ru: 'Горы, Природа & Спокойный пляж', en: 'Mountains, Nature & Beach All-Inclusive' },
        flight: { ru: '5ч 00м', en: '5h 00m' },
        temp: '+29°C',
        priceFrom: '49 900 ₽',
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Самый северный эмират с живописными горами Джебель Джейс и чистыми пляжами.',
          en: 'The UAE’s nature playground: rugged mountain peaks, untouched sand beaches, and relaxing beachfront resorts.'
        },
        attractions: [
          {
            name: { ru: 'Гора Джебель Джейс & Зиплайн', en: 'Jebel Jais & World’s Longest Zipline' },
            desc: { ru: 'Высшая точка ОАЭ и полет со скоростью до 160 км/ч над скалистыми ущельями.', en: 'Guinness World Record 2.83km zipline flight across majestic mountain valleys.' }
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
    cardImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&auto=format&fit=crop&q=80',
    priceFrom: '39 500 ₽',
    visa: { ru: 'Виза по прилёту ($25) / Синай 0$', en: 'Visa on arrival ($25) / Sinai free stamp' },
    flightTime: { ru: '4.5–5 часов', en: '4.5–5 hours' },
    bestSeason: { ru: 'Круглый год (Окт–Май)', en: 'Year-round (best: Oct–May)' },
    tagline: {
      ru: 'Красочнейшие коралловые рифы Красного моря и древние пирамиды',
      en: 'Vibrant Red Sea coral reefs, Pyramids of Giza, and endless sunshine'
    },
    overview: {
      ru: 'Египет — колыбель цивилизации и главное круглогодичное море для россиян. Всего 4.5 часа полета — и вы погружаетесь в подводный мир Красного моря с невероятными кораллами, дельфинами и черепахами, а также можете прикоснуться к тайнам фараонов у подножия Великих Пирамид.',
      en: 'Egypt combines ancient wonders with the world’s most biodiverse tropical coral reefs in the Red Sea, offering warm sun and beachfront relaxation all 365 days of the year.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'hurghada',
        name: { ru: 'Хургада', en: 'Hurghada' },
        tag: { ru: 'Песчаные пляжи & Семейный отдых', en: 'Sandy Beaches & Family Resorts' },
        flight: { ru: '5ч 00м', en: '5h 00m' },
        temp: '+29°C',
        priceFrom: '39 500 ₽',
        image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Курорт с пологим песчаным входом в море, идеальный для отдыха с детьми и аквапарков.',
          en: 'Stretching along 40km of coast with calm sandy waters, perfect for families and windsurfing.'
        },
        attractions: [
          {
            name: { ru: 'Остров Гифтун и пляж Махмея', en: 'Giftun Island & Mahmya Beach' },
            desc: { ru: 'Белоснежный песок и кристальная лазурная вода, напоминающая Мальдивы.', en: 'Exotic white-sand marine national park with extraordinary reef snorkeling.' }
          },
          {
            name: { ru: 'Набережная Хургада Марина', en: 'Hurghada Marina Boulevard' },
            desc: { ru: 'Современный променад с причалами для яхт, рыбными ресторанами и кофейнями.', en: 'Vibrant seafront promenade lined with yachts, boutiques, and open-air cafes.' }
          }
        ]
      },
      {
        id: 'sharm',
        name: { ru: 'Шарм-эль-Шейх', en: 'Sharm El-Sheikh' },
        tag: { ru: 'Коралловые рифы & Дайвинг #1', en: 'Coral Reefs & World-class Diving' },
        flight: { ru: '4ч 45м', en: '4h 45m' },
        temp: '+30°C',
        priceFrom: '41 200 ₽',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Расположен на юге Синайского полуострова. Знаменит живыми рифами прямо у отельных понтонов.',
          en: 'Sheltered by dramatic Sinai mountains, world-famous for sheer drop-off coral walls and sea life.'
        },
        attractions: [
          {
            name: { ru: 'Заповедник Рас-Мохаммед', en: 'Ras Mohammed National Park' },
            desc: { ru: 'Легендарное место погружений с тысячами видов экзотических рыб и черепахами.', en: 'The jewel of the Red Sea featuring Shark Reef, Yolanda Reef, and mangrove channels.' }
          },
          {
            name: { ru: 'Бухта Наама Бей & Старый рынок', en: 'Naama Bay & Old Market' },
            desc: { ru: 'Сердце ночной жизни курорта и восточный базар с величественной мечетью Аль-Сахаба.', en: 'Bustling seaside walkway and Ottoman-style bazaar framed by Al Sahaba Mosque.' }
          }
        ]
      },
      {
        id: 'cairo',
        name: { ru: 'Каир и Гиза', en: 'Cairo & Giza' },
        tag: { ru: 'Пирамиды & Древние сокровища', en: 'Pyramids & Ancient Treasures' },
        flight: { ru: '5ч 15м', en: '5h 15m' },
        temp: '+27°C',
        priceFrom: '45 000 ₽',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Многомиллионная столица Египта. Великие пирамиды, Большой Сфинкс и сокровища Тутанхамона.',
          en: 'A legendary civilization hub: Giza pyramids, the Great Sphinx, and Grand Egyptian Museum treasures.'
        },
        attractions: [
          {
            name: { ru: 'Пирамиды Гизы и Сфинкс', en: 'Pyramids of Giza & The Sphinx' },
            desc: { ru: 'Единственное уцелевшее чудо древнего мира, возвышающееся посреди пустыни.', en: 'The last remaining wonder of the ancient world guarded by the enigmatic Great Sphinx.' }
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
    cardImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&auto=format&fit=crop&q=80',
    priceFrom: '59 900 ₽',
    visa: { ru: 'Без визы (до 60 дней)', en: 'Visa-free (up to 60 days)' },
    flightTime: { ru: '9–10 часов', en: '9–10 hours' },
    bestSeason: { ru: 'Ноябрь — Апрель', en: 'November — April' },
    tagline: {
      ru: 'Страна улыбок: изумрудные острова, сочные фрукты и золотые храмы',
      en: 'The Land of Smiles: emerald island waters, exotic culinary journeys, and temples'
    },
    overview: {
      ru: 'Таиланд влюбляет в себя с первого вздоха: невероятные бирюзовые лагуны Андаманского моря, колоритные плавучие рынки, пряная кухня том-ям, величественные храмы Будды и искреннее гостеприимство местных жителей.',
      en: 'Thailand captivates travelers with tropical karst islands, Buddhist sanctuaries, vibrant street cuisine, soothing Thai massage, and year-round tropical warmth.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'phuket',
        name: { ru: 'Пхукет', en: 'Phuket' },
        tag: { ru: 'Тропические пляжи & Острова', en: 'Tropical Beaches & Island Hopping' },
        flight: { ru: '9ч 30м', en: '9h 30m' },
        temp: '+32°C',
        priceFrom: '69 000 ₽',
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=700&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Самый большой остров Таиланда. Живописные бухты Ката и Карон, и изумрудные острова Пхи-Пхи.',
          en: 'Thailand’s largest paradise island, combining powdery white sand coves with dramatic limestone sea karsts.'
        },
        attractions: [
          {
            name: { ru: 'Большой Будда & Храм Ват Чалонг', en: 'Big Buddha & Wat Chalong' },
            desc: { ru: '45-метровая статуя из белого мрамора на вершине горы Наккерд с круговой панорамой.', en: '45-meter marble monument overlooking Chalong Bay and the island’s most revered monastery.' }
          },
          {
            name: { ru: 'Острова Пхи-Пхи & Майя Бэй', en: 'Phi Phi Islands & Maya Bay' },
            desc: { ru: 'Знаменитые лагуны из фильма «Пляж» с изумрудной водой и отвесными скалами.', en: 'Famous limestone cliffs and turquoise lagoons made world-famous by the film "The Beach".' }
          }
        ]
      },
      {
        id: 'pattaya',
        name: { ru: 'Паттайя', en: 'Pattaya' },
        tag: { ru: 'Экскурсии & Развлечения', en: 'Entertainment & Sightseeing' },
        flight: { ru: '9ч 00м', en: '9h 00m' },
        temp: '+31°C',
        priceFrom: '59 900 ₽',
        image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Курорт на побережье Сиамского залива с сотнями экскурсий, тропическими садами и островами.',
          en: 'A vibrant coastal resort destination packed with tropical theme parks, water excursions, and nightlife.'
        },
        attractions: [
          {
            name: { ru: 'Храм Истины', en: 'Sanctuary of Truth' },
            desc: { ru: 'Величественный деревянный храм высотой 105 метров, построенный без единого гвоздя.', en: 'A colossal 105-meter intricately carved all-wood oceanfront temple.' }
          },
          {
            name: { ru: 'Тропический сад Нонг Нуч', en: 'Nong Nooch Tropical Botanical Garden' },
            desc: { ru: 'Один из красивейших садов Азии с коллекцией орхидей и парком слонов.', en: 'Sprawling 500-acre botanical wonderland showcasing rare orchids and gardens.' }
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
    cardImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&auto=format&fit=crop&q=80',
    priceFrom: '115 000 ₽',
    visa: { ru: 'Без визы (до 90 дней)', en: 'Visa-free (up to 90 days)' },
    flightTime: { ru: '8.5–9 часов', en: '8.5–9 hours' },
    bestSeason: { ru: 'Ноябрь — Апрель', en: 'November — April' },
    tagline: {
      ru: 'Виллы над водой, белоснежный песок и плавание с мантами',
      en: 'Overwater luxury villas, powder-soft white sand, and manta ray snorkeling'
    },
    overview: {
      ru: 'Мальдивы — вершина романтического и уединенного отдыха. Бирюзовые лагуны Индийского океана, собственные виллы на сваях прямо над водой, коралловые рифы с безобидными акулами и скатами, и полное ощущение пребывания в раю.',
      en: 'The Maldives represents the pinnacle of barefoot luxury: individual island resorts, private overwater villas, crystal lagoons, and vibrant coral house reefs.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'male_atoll',
        name: { ru: 'Северный и Южный Мале Атолл', en: 'North & South Male Atolls' },
        tag: { ru: 'Виллы на воде & Быстрый катер', en: 'Overwater Villas & Fast Speedboat' },
        flight: { ru: '8ч 30м', en: '8h 30m' },
        temp: '+30°C',
        priceFrom: '115 000 ₽',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Ближайшие к аэропорту атоллы: трансфер на катере за 20–40 минут и роскошные резорт-острова.',
          en: 'Prime atolls closest to the international airport with effortless speedboat transfers and world-class luxury.'
        },
        attractions: [
          {
            name: { ru: 'Домашние коралловые рифы', en: 'House Reef Snorkeling' },
            desc: { ru: 'Плавание прямо с лестницы водной виллы среди черепах, скатов и ярких тропических рыб.', en: 'Snorkel straight off your villa deck into reefs teeming with turtles and rays.' }
          },
          {
            name: { ru: 'Подводные рестораны и спа', en: 'Underwater Dining' },
            desc: { ru: 'Ужины на глубине 5 метров под водой с панорамой океанской жизни.', en: 'Fine dining 5 meters beneath the Indian Ocean with panoramic marine views.' }
          }
        ]
      },
      {
        id: 'ari_atoll',
        name: { ru: 'Ари Атолл', en: 'Ari Atoll' },
        tag: { ru: 'Китовые акулы & Манта-пойнт', en: 'Whale Sharks & Manta Sanctuary' },
        flight: { ru: '9ч 00м (гидросамолет)', en: '9h 00m (seaplane)' },
        temp: '+30°C',
        priceFrom: '135 000 ₽',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Один из крупнейших атоллов планеты. Мечта дайверов благодаря круглогодичным встречам с китовыми акулами.',
          en: 'One of the world’s top marine dive regions, celebrated for wild whale shark and giant manta ray encounters.'
        },
        attractions: [
          {
            name: { ru: 'Сафари к китовым акулам', en: 'Whale Shark Snorkeling' },
            desc: { ru: 'Плавание бок о бок с крупнейшей безобидной рыбой океана.', en: 'Snorkel safely alongside gentle ocean giants in their natural habitat.' }
          }
        ]
      }
    ]
  },

  // 6. RUSSIA
  {
    id: 'russia',
    flag: '🇷🇺',
    name: { ru: 'Россия', en: 'Russia' },
    cardImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&auto=format&fit=crop&q=80',
    priceFrom: '14 500 ₽',
    visa: { ru: 'Паспорт РФ (без виз и загранпаспорта)', en: 'Domestic (No visa needed)' },
    flightTime: { ru: '1–4 часа', en: '1–4 hours' },
    bestSeason: { ru: 'Круглый год', en: 'Year-round' },
    tagline: {
      ru: 'Черноморское побережье, горы Кавказа и императорские дворцы',
      en: 'Black Sea Riviera, Caucasus Alpine peaks, and imperial palaces'
    },
    overview: {
      ru: 'Путешествия по родной стране — это разнообразие, не имеющее аналогов: субтропические пляжи Сочи и горнолыжные трассы Роза Хутор, монументальное величие Санкт-Петербурга, восточный колорит Казани и первозданная природа Байкала.',
      en: 'Domestic tourism in Russia offers incredible diversity: from palm-lined Black Sea promenades and snowy Caucasus peaks to Saint Petersburg’s imperial palaces.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'sochi',
        name: { ru: 'Сочи & Красная Поляна', en: 'Sochi & Krasnaya Polyana' },
        tag: { ru: 'Море, Пальмы & Горные пики', en: 'Sea, Palms & Mountains' },
        flight: { ru: '3ч 30м', en: '3h 30m' },
        temp: '+25°C',
        priceFrom: '26 500 ₽',
        image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Главная всесезонная столица отдыха: субтропическая набережная, Олимпийский парк и альпийские курорты Роза Хутор.',
          en: 'Russia’s premier year-round resort combining subtropical beaches with Alpine peaks at Rosa Khutor.'
        },
        attractions: [
          {
            name: { ru: 'Курорт Роза Хутор & Роза Пик (2320 м)', en: 'Rosa Khutor & Rosa Peak' },
            desc: { ru: 'Канатные дороги над облаками с панорамным обзором на Кавказский хребет.', en: 'Scenic cable cars climbing above the clouds to panoramic Caucasus summit viewpoints.' }
          },
          {
            name: { ru: 'Олимпийский парк & Поющий фонтан', en: 'Olympic Park & Musical Fountain' },
            desc: { ru: 'Олимпийские стадионы Сочи-2014 и вечернее светомузыкальное шоу «Чаша огня».', en: 'The 2014 Winter Games complex featuring spectacular illuminated dancing fountains.' }
          }
        ]
      },
      {
        id: 'spb',
        name: { ru: 'Санкт-Петербург', en: 'Saint Petersburg' },
        tag: { ru: 'Дворцы, Мосты & Белые ночи', en: 'Imperial Palaces & Drawbridges' },
        flight: { ru: '1ч 40м', en: '1h 40m' },
        temp: '+19°C',
        priceFrom: '18 900 ₽',
        image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Северная столица: разводные мосты через Неву, фонтаны Петергофа, каналы и Эрмитаж.',
          en: 'The Venice of the North: world-famous drawbridges, canals, Peterhof fountains, and the Hermitage.'
        },
        attractions: [
          {
            name: { ru: 'Государственный Эрмитаж & Зимний дворец', en: 'The State Hermitage' },
            desc: { ru: 'Один из величайших музеев мира с тремя миллионами экспонатов.', en: 'Imperial residence housing over 3 million masterpieces of global fine art.' }
          },
          {
            name: { ru: 'Петергоф — Столица фонтанов', en: 'Peterhof Grand Cascade' },
            desc: { ru: 'Большой каскад золотых статуй на берегу Финского залива.', en: 'Grand imperial sea palace featuring 150+ gravity-powered gold fountain cascades.' }
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
    cardImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=80',
    priceFrom: '65 000 ₽',
    visa: { ru: 'Без визы (до 45 дней)', en: 'Visa-free (up to 45 days)' },
    flightTime: { ru: '9.5–10 часов', en: '9.5–10 hours' },
    bestSeason: { ru: 'Ноябрь — Май', en: 'November — May' },
    tagline: {
      ru: 'Изумрудные бухты, вкуснейшие морепродукты и песчаные пляжи',
      en: 'Emerald limestone bays, world-famous gastronomy, and tropical coasts'
    },
    overview: {
      ru: 'Вьетнам очаровывает теплотой моря, целебными минеральными грязями Нячанга, захватывающими канатными дорогами над океаном, древними башнями чамов и сказочной атмосферой древнего города Хойан с шелковыми фонариками.',
      en: 'Vietnam is a tropical paradise known for warm waters, mineral hot springs, world-record over-sea cable cars, fresh seafood, and ancient heritage towns.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'nhatrang',
        name: { ru: 'Нячанг', en: 'Nha Trang' },
        tag: { ru: 'Пляжи, Грязи & Парк VinWonders', en: 'Beaches, Mud Baths & Theme Parks' },
        flight: { ru: '10ч 00м', en: '10h 00m' },
        temp: '+30°C',
        priceFrom: '65 000 ₽',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1528127269322-539801943592?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Главный пляжный курорт: километры золотого песка, минеральные ванны и остров развлечений.',
          en: 'Vietnam’s beach capital: kilometers of golden coast, rejuvenating mineral mud spas, and island day trips.'
        },
        attractions: [
          {
            name: { ru: 'Остров развлечений VinWonders (Vinpearl)', en: 'VinWonders Amusement Island' },
            desc: { ru: 'Морская канатная дорога над заливом, огромный аквапарк и колесо обозрения.', en: 'Spectacular island amusement park reached by an over-sea cable car.' }
          },
          {
            name: { ru: 'Башни По Нагар (Тямские башни)', en: 'Po Nagar Cham Towers' },
            desc: { ru: 'Древние индуистские каменные храмы VII–XII веков с видом на реку Кай.', en: 'Centuries-old stone temples honoring the goddess Yan Po Nagar.' }
          }
        ]
      },
      {
        id: 'phuquoc',
        name: { ru: 'Остров Фукуок', en: 'Phu Quoc Island' },
        tag: { ru: 'Белоснежный песок & Закаты', en: 'Powder Sand & Sunset Luxury' },
        flight: { ru: '10ч 30м', en: '10h 30m' },
        temp: '+31°C',
        priceFrom: '74 000 ₽',
        image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Остров в Сиамском заливе с нежным белым песком пляжа Сао и потрясающими закатами.',
          en: 'A tranquil tropical jewel in the Gulf of Thailand famed for Starfish Beach and postcard sunsets.'
        },
        attractions: [
          {
            name: { ru: 'Пляж Бай Сао (Sao Beach)', en: 'Bai Sao White Sand Beach' },
            desc: { ru: 'Знаменитый пляж с мучнистым белым песком и склонившимися пальмами.', en: 'Pristine white sand beach with sweeping leaning coconut palms and calm waters.' }
          }
        ]
      }
    ]
  },

  // 8. CHINA
  {
    id: 'china',
    flag: '🇨🇳',
    name: { ru: 'Китай', en: 'China' },
    cardImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&auto=format&fit=crop&q=80',
    priceFrom: '59 000 ₽',
    visa: { ru: 'Без визы на Хайнань (в тургруппе)', en: 'Visa-free for Hainan tour groups' },
    flightTime: { ru: '7–9 часов', en: '7–9 hours' },
    bestSeason: { ru: 'Октябрь — Май', en: 'October — May' },
    tagline: {
      ru: '«Восточные Гавайи» острова Хайнань и Великая Китайская стена',
      en: 'The "Hawaii of the Orient" at Hainan, and imperial dynasties'
    },
    overview: {
      ru: 'Китай удивляет контрастами: тропический остров Хайнань на широте Гавайев с целебными термальными источниками и пляжами с белым песком, и монументальный Пекин с Великой Китайской стеной и Запретным городом императоров.',
      en: 'China blends tropical wellness beaches on Hainan Island with the awe-inspiring imperial grandeur of the Great Wall and Forbidden City.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'sanya',
        name: { ru: 'Санья (Хайнань)', en: 'Sanya (Hainan Island)' },
        tag: { ru: 'Восточные Гавайи & Термальные спа', en: 'Oriental Hawaii & Thermal Spas' },
        flight: { ru: '9ч 00м прямой', en: '9h 00m direct' },
        temp: '+29°C',
        priceFrom: '59 000 ₽',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Тропический рай на одной широте с Гавайями. Пляжи Дадунхай и Ялонгвань, центры китайской медицины.',
          en: 'Tropical island luxury on the same latitude as Hawaii, renowned for wellness spas and crystal bays.'
        },
        attractions: [
          {
            name: { ru: 'Статуя богини Гуаньинь (108 м)', en: '108m Guanyin Buddha' },
            desc: { ru: 'Гигантская трехликая белоснежная статуя над морем в парке Наньшань.', en: 'Magnificent 108-meter statue of Guanyin standing above sea waves in Nanshan Park.' }
          },
          {
            name: { ru: 'Тропический лес Янода & Стеклянный мост', en: 'Yanoda Glass Bridge' },
            desc: { ru: 'Прозрачный мост над джунглями и каскадные водопады.', en: 'Pristine rainforest with sky-high glass suspension bridges and zip lines.' }
          }
        ]
      },
      {
        id: 'beijing',
        name: { ru: 'Пекин', en: 'Beijing' },
        tag: { ru: 'Великая стена & Запретный город', en: 'The Great Wall & Forbidden City' },
        flight: { ru: '7ч 30м', en: '7h 30m' },
        temp: '+23°C',
        priceFrom: '68 000 ₽',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Императорская столица с тысячелетней историей и величайшими памятниками мира.',
          en: 'The imperial heart of China showcasing ancient dynasties, iconic imperial palaces, and culinary mastery.'
        },
        attractions: [
          {
            name: { ru: 'Великая Китайская стена', en: 'Great Wall of China' },
            desc: { ru: 'Грандиознейшее оборонительное сооружение человечества по горным хребтам.', en: 'One of mankind’s ultimate wonders snaking majestically across misty mountain ridges.' }
          }
        ]
      }
    ]
  },

  // 9. CUBA
  {
    id: 'cuba',
    flag: '🇨🇺',
    name: { ru: 'Куба', en: 'Cuba' },
    cardImage: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=600&auto=format&fit=crop&q=80',
    priceFrom: '89 000 ₽',
    visa: { ru: 'Без визы (до 90 дней)', en: 'Visa-free (up to 90 days)' },
    flightTime: { ru: '12–13 часов прямой', en: '12–13 hours direct' },
    bestSeason: { ru: 'Ноябрь — Апрель', en: 'November — April' },
    tagline: {
      ru: 'Остров Свободы: лазурный океан, ретро-автомобили и сальса',
      en: 'The Island of Freedom: turquoise Atlantic waters and vintage convertibles'
    },
    overview: {
      ru: 'Куба — это живая романтика Карибского бассейна: 20 километров чистейших белоснежных пляжей Варадеро, разноцветные кабриолеты 50-х годов на набережной Малекон в Гаване, звуки сальсы и легендарный кубинский ром.',
      en: 'Cuba is a vibrant Caribbean paradise of powder-white beaches in Varadero, iconic 1950s pastel convertibles in Havana, and soulful Latin rhythms.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'varadero',
        name: { ru: 'Варадеро', en: 'Varadero' },
        tag: { ru: '20 км карибских пляжей & All-Inclusive', en: '20km Caribbean Beach & All-Inclusive' },
        flight: { ru: '12ч 30м', en: '12h 30m' },
        temp: '+29°C',
        priceFrom: '89 000 ₽',
        image: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Знаменитая песчаная коса с лазурными волнами Атлантики. 20 км непрерывных пляжей с «всё включено».',
          en: 'A 20-kilometer uninterrupted spit of powdery white sand consistently ranked among the world’s top beaches.'
        },
        attractions: [
          {
            name: { ru: 'Пляжи Варадеро & Катамаран Кайо-Бланко', en: 'Varadero Beach & Cayo Blanco' },
            desc: { ru: 'Морская прогулка под парусом на необитаемый коралловый остров.', en: 'Sail aboard a luxury catamaran to uninhabited coral atolls with wild dolphin encounters.' }
          }
        ]
      },
      {
        id: 'havana',
        name: { ru: 'Гавана', en: 'Havana' },
        tag: { ru: 'Колониальный шарм & Ретро-кары', en: 'Colonial Charm & Vintage Convertibles' },
        flight: { ru: '12ч 45м', en: '12h 45m' },
        temp: '+28°C',
        priceFrom: '94 000 ₽',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Колоритная столица с монументальным Капитолием, набережной Малекон и яркими американскими авто 50-х годов.',
          en: 'A cinematic time capsule where classic pastel convertibles roll along the sea-splashed Malecón.'
        },
        attractions: [
          {
            name: { ru: 'Старая Гавана & Набережная Малекон', en: 'Old Havana & El Malecón' },
            desc: { ru: 'Атмосферные колониальные площади ЮНЕСКО и морской бульвар.', en: 'Enchanting baroque squares, cobbled alleys, and Hemingway’s favorite spots.' }
          }
        ]
      }
    ]
  },

  // 10. INDIA
  {
    id: 'india',
    flag: '🇮🇳',
    name: { ru: 'Индия', en: 'India' },
    cardImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=80',
    priceFrom: '48 000 ₽',
    visa: { ru: 'Электронная e-Visa онлайн (2–4 дня)', en: 'Online e-Visa (2–4 days)' },
    flightTime: { ru: '6.5–7.5 часов', en: '6.5–7.5 hours' },
    bestSeason: { ru: 'Октябрь — Апрель', en: 'October — April' },
    tagline: {
      ru: 'Золотые пляжи Аравийского моря, Аюрведа и Тадж-Махал',
      en: 'Golden Arabian Sea shores, Ayurvedic healing, and the Taj Mahal'
    },
    overview: {
      ru: 'Индия — страна ярких эмоций и вековой мудрости: пальмовые пляжи Гоа с теплым Аравийским морем и вечерними закатами, сказочный белоснежный мрамор Тадж-Махала в Агре и тихие изумрудные заводи Бэквотерс в Керале.',
      en: 'India enchants visitors with golden sandy coasts in Goa, tranquil backwaters in Kerala, and the timeless white marble wonder of the Taj Mahal.'
    },
    countryPhotos: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=80'
    ],
    cities: [
      {
        id: 'goa',
        name: { ru: 'Гоа (Север и Юг)', en: 'Goa (North & South)' },
        tag: { ru: 'Пляжи, Закаты & Аюрведа', en: 'Beaches, Sunsets & Ayurveda' },
        flight: { ru: '7ч 00м прямой', en: '7h 00m direct' },
        temp: '+32°C',
        priceFrom: '48 000 ₽',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Самый популярный курорт Индии: Юг — тихий белоснежный песок и 5* отели; Север — вечеринки, рынки и свобода.',
          en: 'Tranquil white sands in South Goa, vibrant sunset markets and bohemian beach shacks in North Goa.'
        },
        attractions: [
          {
            name: { ru: 'Водопад Дудхсагар («Молочный океан»)', en: 'Dudhsagar Waterfalls' },
            desc: { ru: 'Четырехуровневый водопад высотой 310 метров в тропических джунглях.', en: 'One of India’s tallest four-tiered waterfalls tumbling 310m through verdant jungle.' }
          },
          {
            name: { ru: 'Старый Гоа & Базилика Бом-Иисус', en: 'Old Goa & Basilica of Bom Jesus' },
            desc: { ru: 'Португальские барочные соборы XVI века под эгидой ЮНЕСКО.', en: 'UNESCO Portuguese colonial baroque cathedrals holding relics of St. Francis Xavier.' }
          }
        ]
      },
      {
        id: 'golden_triangle',
        name: { ru: 'Дели и Агра (Тадж-Махал)', en: 'Delhi & Agra (Taj Mahal)' },
        tag: { ru: 'Чудо света & Дворцы махараджей', en: 'Wonder of the World & Royal Palaces' },
        flight: { ru: '6ч 00м', en: '6h 00m' },
        temp: '+26°C',
        priceFrom: '54 000 ₽',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Белоснежный символ вечной любви Тадж-Махал и могущественные цитадели Великих Моголов.',
          en: 'The Golden Triangle: the eternal white marble wonder of the Taj Mahal and royal Mughal fortresses.'
        },
        attractions: [
          {
            name: { ru: 'Мавзолей Тадж-Махал', en: 'The Taj Mahal' },
            desc: { ru: 'Величайший памятник архитектуры из полупрозрачного мрамора в Агре.', en: 'The ultimate monument to love, crafted from luminous white marble in Agra.' }
          }
        ]
      },
      {
        id: 'kerala',
        name: { ru: 'Керала', en: 'Kerala' },
        tag: { ru: 'Родина Аюрведы & Заводи', en: 'Birthplace of Ayurveda & Backwaters' },
        flight: { ru: '8ч 00м', en: '8h 00m' },
        temp: '+30°C',
        priceFrom: '62 000 ₽',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: '«Собственная страна Бога»: изумрудные заводи Бэквотерс, плавучие дома-хаусботы и аюрведа.',
          en: '"God’s Own Country": serene palm-canopied backwaters, houseboat cruises, and authentic Ayurvedic wellness centers.'
        },
        attractions: [
          {
            name: { ru: 'Круиз на хаусботе по заводям Аллеппи', en: 'Alleppey Backwaters Houseboat Cruise' },
            desc: { ru: 'Путешествие на традиционной керальской лодке среди тихих тропических лагун.', en: 'Drift along serene palm-fringed tropical canals aboard converted teak rice barges.' }
          }
        ]
      }
    ]
  }
];
