// ============================================================
// countryGuideData.js — 10 Countries & Famous Cities Guide
// High-res photo galleries, tourist attractions, and travel stats
// ============================================================

export const countryGuideData = [
  // 1. TURKEY
  {
    id: 'turkey',
    flag: '🇹🇷',
    name: { ru: 'Турция', en: 'Turkey' },
    heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы (до 60 дней)', en: 'Visa-free (up to 60 days)' },
    flightTime: { ru: '3.5–4.5 часа', en: '3.5–4.5 hours' },
    bestSeason: { ru: 'Май — Октябрь', en: 'May — October' },
    tagline: {
      ru: 'Тёплое Средиземное море, роскошный «всё включено» и великая история',
      en: 'Warm Mediterranean Sea, luxury all-inclusive resorts, and imperial history'
    },
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
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы (по прибытии)', en: 'Visa-free on arrival' },
    flightTime: { ru: '4.5–5 часов', en: '4.5–5 hours' },
    bestSeason: { ru: 'Октябрь — Апрель', en: 'October — April' },
    tagline: {
      ru: 'Города будущего, тёплый Персидский залив, сафари в пустыне и беспошлинный шопинг',
      en: 'Cities of the future, warm Arabian Gulf waters, desert safaris, and tax-free shopping'
    },
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
          ru: 'Город мировых рекордов, футуристической архитектуры, насыпных островов и пляжей с видом на сверкающие башни.',
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
            desc: { ru: 'Архитектурный шедевр из белого мрамора с 82 куполами и люстрами с кристаллами Swarovski.', en: 'One of the world’s grandest mosques adorned with pure Macedonian marble and Persian carpets.' }
          },
          {
            name: { ru: 'Лувр Абу-Даби', en: 'Louvre Abu Dhabi' },
            desc: { ru: 'Художественный музей под ажурным куполом с эффектом «дождя из света».', en: 'World-renowned art museum sheltered under a massive lace-pattern floating dome.' }
          },
          {
            name: { ru: 'Остров Яс & Ferrari World', en: 'Yas Island & Ferrari World' },
            desc: { ru: 'Парк аттракционов с самой быстрой американской горкой в мире Formula Rossa (240 км/ч).', en: 'Motorsport theme park home to Formula Rossa, reaching 240 km/h in 4.9 seconds.' }
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
          ru: 'Самый северный эмират с живописными горами Джебель Джейс, чистыми песчаными пляжами и доступным «всё включено».',
          en: 'The UAE’s nature playground: rugged mountain peaks, untouched sand beaches, and relaxing beachfront resorts.'
        },
        attractions: [
          {
            name: { ru: 'Гора Джебель Джейс & Самый длинный зиплайн', en: 'Jebel Jais & World’s Longest Zipline' },
            desc: { ru: 'Высшая точка ОАЭ и полет со скоростью до 160 км/ч над скалистыми ущельями.', en: 'Guinness World Record 2.83km zipline flight across majestic mountain valleys.' }
          },
          {
            name: { ru: 'Остров Аль-Марджан', en: 'Al Marjan Island' },
            desc: { ru: 'Архипелаг из четырех насыпных островов с первоклассными курортными отелями.', en: 'Four man-made coral-shaped islands with pristine private beaches and boardwalks.' }
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
    heroImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Виза по прилёту ($25) / Синайский штамп 0$', en: 'Visa on arrival ($25) / Sinai free stamp' },
    flightTime: { ru: '4.5–5 часов', en: '4.5–5 hours' },
    bestSeason: { ru: 'Круглый год (идеально: Окт–Май)', en: 'Year-round (best: Oct–May)' },
    tagline: {
      ru: 'Красочнейшие коралловые рифы Красного моря, древние пирамиды и круглогодичное лето',
      en: 'Vibrant Red Sea coral reefs, Pyramids of Giza, and endless sunshine'
    },
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
          ru: 'Курорт с пологим песчаным входом в море, идеальный для отдыха с детьми, аквапарков и морских прогулок.',
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
          },
          {
            name: { ru: 'Сафари на квадроциклах в пустыне', en: 'Desert Quad Buggy Safari' },
            desc: { ru: 'Гонки по барханам на закате и традиционный бедуинский чай под звездным небом.', en: 'Thrilling sunset dune riding culminating in an authentic Bedouin camp dinner.' }
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
            desc: { ru: 'Легендарное место погружений с тысячами видов экзотических рыб и морскими черепахами.', en: 'The jewel of the Red Sea featuring Shark Reef, Yolanda Reef, and mangrove channels.' }
          },
          {
            name: { ru: 'Бухта Наама Бей & Старый рынок', en: 'Naama Bay & Old Market' },
            desc: { ru: 'Сердце ночной жизни курорта и восточный базар с величественной мечетью Аль-Сахаба.', en: 'Bustling seaside walkway and Ottoman-style bazaar framed by Al Sahaba Mosque.' }
          },
          {
            name: { ru: 'Монастырь Святой Екатерины & Гора Синай', en: 'St. Catherine’s & Mount Sinai' },
            desc: { ru: 'Древнейший действующий христианский монастырь у подножия библейской горы Моисея.', en: 'UNESCO World Heritage site at the foot of Mount Sinai where Moses received the Tablets.' }
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
          },
          {
            name: { ru: 'Большой Египетский Музей (GEM)', en: 'Grand Egyptian Museum' },
            desc: { ru: 'Новейший грандиозный музейный комплекс с полной коллекцией золота фараонов.', en: 'Massive modern architectural masterpiece presenting King Tutankhamun’s complete tomb treasures.' }
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
    heroImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы (до 60 дней)', en: 'Visa-free (up to 60 days)' },
    flightTime: { ru: '9–10 часов', en: '9–10 hours' },
    bestSeason: { ru: 'Ноябрь — Апрель', en: 'November — April' },
    tagline: {
      ru: 'Страна улыбок: изумрудные острова, тропические фрукты, храмы и тайский массаж',
      en: 'The Land of Smiles: emerald island waters, exotic culinary journeys, and golden temples'
    },
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
          ru: 'Самый большой остров Таиланда в Андаманском море. Живописные бухты Ката и Карон, ночная жизнь Бангла Роуд.',
          en: 'Thailand’s largest paradise island, combining powdery white sand coves with dramatic limestone sea karsts.'
        },
        attractions: [
          {
            name: { ru: 'Большой Будда & Храм Ват Чалонг', en: 'Big Buddha & Wat Chalong' },
            desc: { ru: '45-метровая статуя из белого бирманского мрамора на вершине горы Наккерд.', en: '45-meter marble monument overlooking Chalong Bay and the island’s most revered monastery.' }
          },
          {
            name: { ru: 'Острова Пхи-Пхи & Бухта Майя Бэй', en: 'Phi Phi Islands & Maya Bay' },
            desc: { ru: 'Лагуны из фильма «Пляж» с изумрудной водой и отвесными скалами.', en: 'Famous limestone cliffs and turquoise lagoons made world-famous by the film "The Beach".' }
          },
          {
            name: { ru: 'Старый город Пхукет-Таун', en: 'Old Phuket Town' },
            desc: { ru: 'Колоритные португальские особняки, арт-кафе и воскресный ночной маркет.', en: 'Colorful Sino-Portuguese heritage architecture, vibrant street murals, and artisan night bazaars.' }
          }
        ]
      },
      {
        id: 'pattaya',
        name: { ru: 'Паттайя', en: 'Pattaya' },
        tag: { ru: 'Экскурсии, Шоу & Доступный отдых', en: 'Entertainment, Sightseeing & Budget' },
        flight: { ru: '9ч 00м', en: '9h 00m' },
        temp: '+31°C',
        priceFrom: '59 900 ₽',
        image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Крупнейший курорт на побережье Сиамского залива с сотнями экскурсий, тропическими садами и островами.',
          en: 'A vibrant coastal resort destination packed with tropical theme parks, water excursions, and nightlife.'
        },
        attractions: [
          {
            name: { ru: 'Храм Истины', en: 'Sanctuary of Truth' },
            desc: { ru: 'Величественный деревянный храм высотой 105 метров, построенный без единого гвоздя.', en: 'A colossal 105-meter intricately carved all-wood oceanfront temple.' }
          },
          {
            name: { ru: 'Тропический сад Нонг Нуч', en: 'Nong Nooch Tropical Botanical Garden' },
            desc: { ru: 'Один из красивейших садов Азии с коллекцией орхидей и парком динозавров.', en: 'Sprawling 500-acre botanical wonderland showcasing rare orchids and French-style gardens.' }
          },
          {
            name: { ru: 'Коралловый остров Ко Лан', en: 'Koh Larn Coral Island' },
            desc: { ru: 'Остров с чистейшей лазурной водой всего в 20 минутах на катере от города.', en: 'Quick speedboat getaway featuring pristine turquoise swimming waters and beach seafood shacks.' }
          }
        ]
      },
      {
        id: 'samui',
        name: { ru: 'Самуи', en: 'Koh Samui' },
        tag: { ru: 'Кокосовые пальмы & Релакс', en: 'Coconut Palms, Wellness & Seclusion' },
        flight: { ru: '10ч 30м', en: '10h 30m' },
        temp: '+30°C',
        priceFrom: '78 000 ₽',
        image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Умиротворяющий остров в Сиамском заливе с нетронутыми пальмовыми рощами и спа-отелями высокого уровня.',
          en: 'A tranquil tropical haven known for palm-fringed shorelines, rainforest interiors, and luxury spas.'
        },
        attractions: [
          {
            name: { ru: 'Национальный морской парк Ангтхонг', en: 'Ang Thong National Marine Park' },
            desc: { ru: 'Архипелаг из 42 необитаемых изумрудных островов и скрытое озеро Изумрудная лагуна.', en: 'A postcard-perfect archipelago of 42 uninhabited islands with hidden saltwater lagoons.' }
          },
          {
            name: { ru: 'Скалы Дедушка и Бабушка (Хин Та и Хин Яй)', en: 'Hin Ta & Hin Yai Rocks' },
            desc: { ru: 'Природные гранитные скалы необычной формы на пляже Ламай.', en: 'Legendary natural granite coastal formations framed by crashing tropical waves.' }
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
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы (до 90 дней)', en: 'Visa-free (up to 90 days)' },
    flightTime: { ru: '8.5–9 часов', en: '8.5–9 hours' },
    bestSeason: { ru: 'Ноябрь — Апрель', en: 'November — April' },
    tagline: {
      ru: 'Виллы над водой, белоснежный песок, лазурные лагуны и плавание с мантами',
      en: 'Overwater luxury villas, powder-soft white sand, and swimming with manta rays'
    },
    cities: [
      {
        id: 'male_atoll',
        name: { ru: 'Северный и Южный Мале Атолл', en: 'North & South Male Atolls' },
        tag: { ru: 'Виллы на воде & Быстрый трансфер', en: 'Overwater Villas & Fast Speedboat' },
        flight: { ru: '8ч 30м', en: '8h 30m' },
        temp: '+30°C',
        priceFrom: '115 000 ₽',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Ближайшие к международному аэропорту атоллы: трансфер на катере за 20–40 минут и роскошные резорт-острова.',
          en: 'Prime atolls closest to the international airport with effortless speedboat transfers and world-class luxury.'
        },
        attractions: [
          {
            name: { ru: 'Домашние коралловые рифы', en: 'House Reef Snorkeling' },
            desc: { ru: 'Плавание прямо с лестницы водной виллы среди рифовых акул, скатов и черепах.', en: 'Snorkel straight off your villa deck into reefs teeming with turtles, reef sharks, and rays.' }
          },
          {
            name: { ru: 'Подводные рестораны и СПА', en: 'Underwater Dining & Spas' },
            desc: { ru: 'Ужины на глубине 5 метров с панорамным обзором на морскую фауну океана.', en: 'Fine dining 5 meters beneath the Indian Ocean with 180-degree panoramic marine views.' }
          }
        ]
      },
      {
        id: 'ari_atoll',
        name: { ru: 'Ари Атолл', en: 'Ari Atoll' },
        tag: { ru: 'Китовые акулы & Манта-пойнт', en: 'Whale Sharks & Manta Point' },
        flight: { ru: '9ч 00м (гидросамолет)', en: '9h 00m (seaplane)' },
        temp: '+30°C',
        priceFrom: '135 000 ₽',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Один из крупнейших атоллов планеты. Мечта дайверов со всего мира благодаря круглогодичным встречам с китовыми акулами.',
          en: 'One of the world’s top marine dive regions, celebrated for wild whale shark and giant manta ray encounters.'
        },
        attractions: [
          {
            name: { ru: 'Сафари к китовым акулам', en: 'South Ari Whale Shark Sanctuary' },
            desc: { ru: 'Уникальная возможность снорклинга бок о бок с крупнейшей рыбой в океане.', en: 'Snorkel safely alongside gentle ocean giants in their natural protected habitat.' }
          },
          {
            name: { ru: 'Песчаные отмели Сандбанк', en: 'Deserted Sandbank Picnics' },
            desc: { ru: 'Уединенные полоски белоснежного песка посреди открытого океана только для двоих.', en: 'Private boat escapes to isolated white sand spits surrounded by endless crystal waters.' }
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
    heroImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Внутренний паспорт РФ', en: 'Domestic (No visa needed)' },
    flightTime: { ru: '1–4 часа', en: '1–4 hours' },
    bestSeason: { ru: 'Круглый год', en: 'Year-round' },
    tagline: {
      ru: 'Черноморское побережье, горы Кавказа, императорские дворцы и шедевры архитектуры',
      en: 'Black Sea Riviera, Caucasus Alpine peaks, imperial palaces, and cultural heritage'
    },
    cities: [
      {
        id: 'sochi',
        name: { ru: 'Сочи & Красная Поляна', en: 'Sochi & Krasnaya Polyana' },
        tag: { ru: 'Море, Пальмы & Горные вершины', en: 'Sea, Palms & Alpine Mountains' },
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
            name: { ru: 'Курорт Роза Хутор & Роза Пик (2320 м)', en: 'Rosa Khutor & Rosa Peak (2320m)' },
            desc: { ru: 'Канатные дороги над облаками, водопады и панорамный обзор на хребет Аибга.', en: 'Scenic cable cars climbing above the clouds to panoramic Caucasus summit viewpoints.' }
          },
          {
            name: { ru: 'Олимпийский парк & Поющий фонтан', en: 'Olympic Park & Musical Fountain' },
            desc: { ru: 'Олимпийские стадионы Сочи-2014, трасса Формулы-1 и вечернее световое шоу «Чаша Олимпийского огня».', en: 'The 2014 Winter Games complex featuring spectacular illuminated dancing fountains.' }
          },
          {
            name: { ru: 'Скайпарк Сочи (Skypark)', en: 'Skypark Sochi' },
            desc: { ru: 'Самый длинный подвесной пешеходный мост в России над живописным Ахштырским ущельем.', en: 'One of the world’s longest suspension pedestrian bridges towering over a scenic canyon.' }
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
            name: { ru: 'Государственный Эрмитаж & Зимний дворец', en: 'The State Hermitage & Winter Palace' },
            desc: { ru: 'Один из величайших художественных музеев мира с тремя миллионами экспонатов.', en: 'Imperial residence housing over 3 million masterpieces of global fine art.' }
          },
          {
            name: { ru: 'Музей-заповедник Петергоф', en: 'Peterhof Grand Cascade & Fountains' },
            desc: { ru: '«Столица фонтанов» на берегу Финского залива с Большим каскадом и золотыми статуями.', en: 'Grand imperial sea palace featuring 150+ gravity-powered gold fountain cascades.' }
          },
          {
            name: { ru: 'Ночная экскурсия под разводными мостами', en: 'Midnight Drawbridge Boat Cruise' },
            desc: { ru: 'Романтичные прогулки на катере по Неве в период белых ночей.', en: 'Iconic nighttime boat rides watching historic Neva River bridges open for freighters.' }
          }
        ]
      },
      {
        id: 'kazan',
        name: { ru: 'Казань', en: 'Kazan' },
        tag: { ru: 'Слияние культур & Гастрономия', en: 'Eurasian Heritage & Gastronomy' },
        flight: { ru: '1ч 00м (или поезд)', en: '1h 00m' },
        temp: '+21°C',
        priceFrom: '14 500 ₽',
        image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Третья столица России, где гармонично соседствуют православные соборы и бирюзовая мечеть Кул-Шариф.',
          en: 'A vibrant millennium-old cultural hub where Christian cathedrals and Islamic minarets stand side by side.'
        },
        attractions: [
          {
            name: { ru: 'Казанский Кремль & Мечеть Кул-Шариф', en: 'Kazan Kremlin & Qol Sharif Mosque' },
            desc: { ru: 'Белокаменная крепость ЮНЕСКО и падающая башня Сююмбике.', en: 'UNESCO World Heritage fortress overlooking the Volga with leaning Soyembika Tower.' }
          },
          {
            name: { ru: 'Остров-град Свияжск', en: 'Sviyazhsk Island-City' },
            desc: { ru: 'Исторический город-крепость XVI века посреди слияния Волги и Свияги.', en: 'Charming island fortress town founded by Ivan the Terrible in 1551.' }
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
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы (до 45 дней)', en: 'Visa-free (up to 45 days)' },
    flightTime: { ru: '9.5–10 часов', en: '9.5–10 hours' },
    bestSeason: { ru: 'Ноябрь — Май', en: 'November — May' },
    tagline: {
      ru: 'Изумрудные бухты, вкуснейшие морепродукты, белоснежный песок и колониальный шарм',
      en: 'Emerald limestone bays, world-famous street gastronomy, and tropical palm coasts'
    },
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
          ru: 'Самый популярный пляжный курорт Вьетнама: километры песчаных пляжей, целебные минеральные источники и свежие лобстеры.',
          en: 'Vietnam’s beach capital: kilometers of golden coast, rejuvenating mineral mud spas, and island day trips.'
        },
        attractions: [
          {
            name: { ru: 'Остров развлечений VinWonders (Vinpearl)', en: 'VinWonders Amusement Island' },
            desc: { ru: 'Морская канатная дорога над заливом, огромный аквапарк, сафари и колесо обозрения.', en: 'Spectacular island amusement park reached by an over-sea cable car.' }
          },
          {
            name: { ru: 'Башни По Нагар (Тямские башни)', en: 'Po Nagar Cham Towers' },
            desc: { ru: 'Древние индуистские храмы VII–XII веков с видом на реку Кай.', en: 'Centuries-old Hindu stone temples honoring the goddess Yan Po Nagar.' }
          },
          {
            name: { ru: 'Минеральные грязелечебницы Тхап Ба', en: 'Thap Ba Hot Mineral Mud Springs' },
            desc: { ru: 'Купание в целебной теплой глине и гидромассажные бассейны в тени тропических садов.', en: 'Natural volcanic mud baths and hot mineral waterfall pools for total relaxation.' }
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
          ru: 'Тропический остров в Сиамском заливе с нежнейшим белым песком пляжа Сао и потрясающими закатами на пляже Лонг Бич.',
          en: 'A tranquil tropical jewel in the Gulf of Thailand famed for Starfish Beach and postcard sunsets.'
        },
        attractions: [
          {
            name: { ru: 'Пляж Бай Сао (Sao Beach)', en: 'Bai Sao White Sand Beach' },
            desc: { ru: 'Знаменитый пляж с мучнистым белым песком, наклоненными пальмами и спокойной водой.', en: 'Pristine white sand beach with sweeping leaning coconut palms and calm waters.' }
          },
          {
            name: { ru: 'Канатная дорога Хон Тхом', en: 'Hon Thom Cable Car (World’s Longest)' },
            desc: { ru: 'Самая длинная в мире трехканатная дорога (7,9 км) над бирюзовым морем и рыбацкими деревнями.', en: 'Guinness World Record 7.9km oversea cable car soaring above fishing flotillas.' }
          }
        ]
      },
      {
        id: 'danang',
        name: { ru: 'Дананг и Хойан', en: 'Da Nang & Hoi An' },
        tag: { ru: 'Золотой мост & Фонарики ЮНЕСКО', en: 'Golden Bridge & Lantern City' },
        flight: { ru: '10ч 15м', en: '10h 15m' },
        temp: '+28°C',
        priceFrom: '72 000 ₽',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Город мостов Дананг и сказочный старинный Хойан, освещаемый по вечерам тысячами шелковых фонариков.',
          en: 'Da Nang’s futuristic coastal bridges combined with the UNESCO magic of lantern-lit ancient Hoi An.'
        },
        attractions: [
          {
            name: { ru: 'Золотой мост в руках гиганта (Ba Na Hills)', en: 'Golden Bridge at Ba Na Hills' },
            desc: { ru: 'Знаменитый мост на высоте 1400 м, поддерживаемый двумя колоссальными каменными руками.', en: 'Sensational pedestrian walkway held aloft by two giant moss-weathered stone hands.' }
          },
          {
            name: { ru: 'Древний город Хойан', en: 'Hoi An Ancient Lantern Town' },
            desc: { ru: 'Атмосферный торговый город ЮНЕСКО с желтыми улочками, каналами и речными лодками.', en: 'Unesco world heritage port town adorned with hand-crafted silk lanterns.' }
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
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы на Хайнань (в составе тургруппы)', en: 'Visa-free for Hainan tour groups' },
    flightTime: { ru: '7–9 часов', en: '7–9 hours' },
    bestSeason: { ru: 'Октябрь — Май', en: 'October — May' },
    tagline: {
      ru: '«Восточные Гавайи» острова Хайнань, Великая Китайская стена и древние храмы',
      en: 'The "Hawaii of the Orient" at Hainan, the Great Wall, and imperial dynasties'
    },
    cities: [
      {
        id: 'sanya',
        name: { ru: 'Санья (Остров Хайнань)', en: 'Sanya (Hainan Island)' },
        tag: { ru: 'Восточные Гавайи & Термальные источники', en: 'Oriental Hawaii & Thermal Spas' },
        flight: { ru: '9ч 00м (прямой рейс)', en: '9h 00m direct' },
        temp: '+29°C',
        priceFrom: '59 000 ₽',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Тропический рай на одной широте с Гавайями. Пляжи бухт Дадунхай и Ялонгвань, центры китайской медицины и радоновые источники.',
          en: 'Tropical island luxury on the same latitude as Hawaii, renowned for wellness spas and crystal bays.'
        },
        attractions: [
          {
            name: { ru: 'Статуя богини Гуаньинь в Наньшане (108 м)', en: '108m Guanyin Buddha of Nanshan' },
            desc: { ru: 'Гигантская трехликая белоснежная статуя над Южно-Китайским морем.', en: 'Magnificent 108-meter statue of Guanyin standing above sea waves in Nanshan Park.' }
          },
          {
            name: { ru: 'Тропический лес Янода & Стеклянный мост', en: 'Yanoda Rainforest & Glass Bridge' },
            desc: { ru: 'Подвесной прозрачный мост над джунглями, каскадные водопады и подвесные тропы.', en: 'Pristine rainforest with sky-high glass suspension bridges and zip lines.' }
          },
          {
            name: { ru: 'Бухта Ялонгвань (Дракон залив)', en: 'Yalong Bay Luxury Coast' },
            desc: { ru: '7 км чистейшего белого песка с лучшими 5-звездочными мировыми отелями.', en: 'Crescent-shaped emerald bay lined with world-class beach resorts.' }
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
          ru: 'Императорская столица Китая с тысячелетней историей, дворцами династий Мин и Цин и футуристической архитектурой.',
          en: 'The imperial heart of China showcasing ancient dynasties, iconic imperial palaces, and culinary mastery.'
        },
        attractions: [
          {
            name: { ru: 'Великая Китайская стена (Мутяньюй)', en: 'Great Wall of China (Mutianyu)' },
            desc: { ru: 'Грандиознейшее оборонительное сооружение человечества, змеящееся по горным хребтам.', en: 'One of mankind’s ultimate wonders snaking majestically across misty mountain ridges.' }
          },
          {
            name: { ru: 'Запретный город (Гугун)', en: 'The Forbidden City' },
            desc: { ru: 'Крупнейший в мире дворцовый комплекс с 9999 комнатами правителей Китая.', en: 'World’s grandest palace complex that housed 24 Chinese emperors over 500 years.' }
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
    heroImage: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Без визы (до 90 дней)', en: 'Visa-free (up to 90 days)' },
    flightTime: { ru: '12–13 часов (прямой рейс)', en: '12–13 hours direct' },
    bestSeason: { ru: 'Ноябрь — Апрель', en: 'November — April' },
    tagline: {
      ru: 'Остров Свободы: бирюзовый Атлантический океан, ретро-автомобили, сальса и ром',
      en: 'The Island of Freedom: turquoise Atlantic waters, vintage 1950s cars, and infectious salsa'
    },
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
          ru: 'Знаменитая песчаная коса, омываемая лазурными волнами Атлантики. 20 км непрерывных пляжей с «всё включено».',
          en: 'A 20-kilometer uninterrupted spit of powdery white sand consistently ranked among the world’s top beaches.'
        },
        attractions: [
          {
            name: { ru: 'Пляжи Варадеро & Катамаран на Кайо-Бланко', en: 'Varadero Beach & Cayo Blanco Catamaran' },
            desc: { ru: 'Морская прогулка под парусом на необитаемый коралловый остров с обедом из лангустов.', en: 'Sail aboard a luxury catamaran to uninhabited coral atolls with wild dolphin encounters.' }
          },
          {
            name: { ru: 'Пещера Белламар & Парк Хосоне', en: 'Bellamar Caves & Josone Park' },
            desc: { ru: 'Кристальные сталактитовые пещеры возрастом 300 000 лет и тропический оазис.', en: '300,000-year-old crystal caverns and historic tropical gardens.' }
          }
        ]
      },
      {
        id: 'havana',
        name: { ru: 'Гавана', en: 'Havana' },
        tag: { ru: 'Колониальная романтика & Ретро-кары', en: 'Colonial Charm & Vintage Convertibles' },
        flight: { ru: '12ч 45м', en: '12h 45m' },
        temp: '+28°C',
        priceFrom: '94 000 ₽',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Колоритная столица с монументальным Капитолием, набережной Малекон и яркими американскими кабриолетами 50-х годов.',
          en: 'A cinematic time capsule where classic pastel convertibles roll along the sea-splashed Malecón.'
        },
        attractions: [
          {
            name: { ru: 'Старая Гавана (Habana Vieja)', en: 'Old Havana (UNESCO Heritage)' },
            desc: { ru: 'Атмосферные колониальные площади, Кафедральный собор и бары Хемингуэя El Floridita.', en: 'Enchanting baroque squares, cobbled alleys, and Hemingway’s favorite daiquiri bars.' }
          },
          {
            name: { ru: 'Набережная Малекон & Капитолий', en: 'El Malecón & National Capitol' },
            desc: { ru: '8-километровый приморский бульвар — главное место вечерних встреч, музыки и танцев.', en: '8km iconic sea boulevard capturing the soulful musical spirit of the Cuban people.' }
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
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80',
    visa: { ru: 'Электронная виза (e-Visa онлайн за 2–4 дня)', en: 'Online e-Visa (2–4 days)' },
    flightTime: { ru: '6.5–7.5 часов', en: '6.5–7.5 hours' },
    bestSeason: { ru: 'Октябрь — Апрель', en: 'October — April' },
    tagline: {
      ru: 'Золотые пляжи Аравийского моря, древняя Аюрведа, пряности и Тадж-Махал',
      en: 'Golden Arabian Sea shores, ancient Ayurvedic healing, fragrant spices, and the Taj Mahal'
    },
    cities: [
      {
        id: 'goa',
        name: { ru: 'Гоа (Север и Юг)', en: 'Goa (North & South)' },
        tag: { ru: 'Пляжи, Шейки, Закаты & Аюрведа', en: 'Beaches, Shacks, Sunsets & Ayurveda' },
        flight: { ru: '7ч 00м (прямой рейс)', en: '7h 00m direct' },
        temp: '+32°C',
        priceFrom: '48 000 ₽',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop&q=80',
        photos: [
          'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&auto=format&fit=crop&q=80'
        ],
        desc: {
          ru: 'Самый популярный индийский штат у россиян. Юг — это тишина, белый песок и роскошные 5* отели; Север — атмосфера свободы, рынки и вечеринки.',
          en: 'India’s tropical coastal jewel: tranquil white sands and luxury resorts in the South; lively sunset markets and bohemian spirit in the North.'
        },
        attractions: [
          {
            name: { ru: 'Водопад Дудхсагар («Молочный океан»)', en: 'Dudhsagar Waterfalls' },
            desc: { ru: 'Четырехуровневый водопад высотой 310 метров среди диких джунглей с обезьянками.', en: 'One of India’s tallest four-tiered waterfalls tumbling 310m through verdant jungle.' }
          },
          {
            name: { ru: 'Старый Гоа & Базилика Бом-Иисус', en: 'Old Goa & Basilica of Bom Jesus' },
            desc: { ru: 'Португальские барочные соборы XVI века, где покоятся мощи святого Франциска Ксаверия.', en: 'UNESCO Portuguese colonial baroque cathedrals holding relics of St. Francis Xavier.' }
          },
          {
            name: { ru: 'Пляж Палолем и вечерний закат в Арамболе', en: 'Palolem Beach & Arambol Drum Circle' },
            desc: { ru: 'Красивейшая полукруглая лагуна с пальмами и знаменитые закаты под бой барабанов.', en: 'Crescent-shaped paradise bay and atmospheric sunset gathering on the sand.' }
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
          ru: 'Легендарный Золотой Треугольник Индии: белоснежный символ вечной любви Тадж-Махал и Красный Форт.',
          en: 'The Golden Triangle: the eternal white marble wonder of the Taj Mahal and royal Mughal fortresses.'
        },
        attractions: [
          {
            name: { ru: 'Мавзолей Тадж-Махал', en: 'The Taj Mahal' },
            desc: { ru: 'Величайший памятник архитектуры из полупрозрачного мрамора с инкрустацией самоцветами.', en: 'The ultimate monument to love, crafted from luminous white marble in Agra.' }
          },
          {
            name: { ru: 'Красный форт в Агре', en: 'Agra Red Fort' },
            desc: { ru: 'Могущественная цитадель Великих Моголов из красного песчаника с видом на реку Ямуну.', en: 'Vast UNESCO imperial fortress of red sandstone commanding views toward the Taj.' }
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
          ru: '«Собственная страна Бога»: изумрудные заводи Бэквотерс, плавучие дома-хаусботы, чайные плантации и аюрведические ретриты.',
          en: '"God’s Own Country": serene palm-canopied backwaters, houseboat cruises, and authentic Ayurvedic wellness centers.'
        },
        attractions: [
          {
            name: { ru: 'Круиз на хаусботе по заводям Аллеппи', en: 'Alleppey Backwaters Houseboat Cruise' },
            desc: { ru: 'Путешествие на традиционной керальской лодке кеттуваллам среди тихих лагун и деревень.', en: 'Drift along serene palm-fringed tropical canals aboard converted teak rice barges.' }
          },
          {
            name: { ru: 'Чайные плантации Муннара', en: 'Munnar Mist-Covered Tea Hills' },
            desc: { ru: 'Изумрудные холмы на высоте 1600 м над уровнем моря с чистейшим горным воздухом.', en: 'Endless rolling emerald green tea estates perched in the Western Ghats.' }
          }
        ]
      }
    ]
  }
];
