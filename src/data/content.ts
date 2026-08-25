import type { Locale, LocalizedText } from './i18n';

export type EquipmentCategory = 'boiler' | 'drying';

export interface CatalogVisual {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
  kind: 'photo' | 'scheme' | 'detail';
}

export interface EquipmentModelTable {
  title: LocalizedText;
  columns: LocalizedText[];
  rows: string[][];
  note?: LocalizedText;
}

export interface EquipmentItem {
  slug: string;
  category: EquipmentCategory;
  model: string;
  range: string;
  title: LocalizedText;
  summary: LocalizedText;
  applications: LocalizedText;
  details: LocalizedText;
  features: LocalizedText[];
  image: string;
  imageAlt: LocalizedText;
  gallery: CatalogVisual[];
  modelTable: EquipmentModelTable;
  specs: Array<{ label: LocalizedText; value: string | LocalizedText }>;
}

export const equipment: EquipmentItem[] = [
  {
    slug: 'kwh-azsd', category: 'boiler', model: 'KWH + AZSD', range: '55–2 000 кВт',
    title: { ru: 'Котлы KWH и системы AZSD', by: 'Катлы KWH і сістэмы AZSD', en: 'KWH boilers and AZSD systems' },
    summary: { ru: 'Базовый комплекс для сжигания древесной щепы, стружки, опилок и коры.', by: 'Базавы комплекс для спальвання драўнянай шчэпы, стружкі, пілавіння і кары.', en: 'A base system for wood chips, shavings, sawdust and bark.' },
    applications: { ru: 'Отопление и технологическое теплоснабжение производственных объектов.', by: 'Ацяпленне і тэхналагічнае цеплазабеспячэнне вытворчых аб’ектаў.', en: 'Space heating and process heat for industrial facilities.' },
    details: { ru: 'Стальные трёхходовые водогрейные котлы KWH работают совместно с керамической системой газификации AZSD. Топливо дозируется автоматически, а конструкция комплекса позволяет использовать влажные отходы деревообработки и получать тепло для отопления или технологических процессов.', by: 'Сталёвыя троххадовыя вадагрэйныя катлы KWH працуюць разам з керамічнай сістэмай газіфікацыі AZSD. Паліва дазуецца аўтаматычна, а канструкцыя комплексу дазваляе выкарыстоўваць вільготныя адходы дрэваапрацоўкі для ацяплення або тэхналагічных працэсаў.', en: 'Steel three-pass KWH hot-water boilers operate with an AZSD ceramic gasification system. Fuel is metered automatically, while the system is designed to use moist woodworking residues for heating or process heat.' },
    features: [
      { ru: 'Мощность котлов KWH до 2 000 кВт', by: 'Магутнасць катлоў KWH да 2 000 кВт', en: 'KWH boiler output up to 2,000 kW' },
      { ru: 'Щепа, стружка, опилки и кора фракцией до 30 мм', by: 'Шчэпа, стружка, пілавінне і кара фракцыяй да 30 мм', en: 'Wood chips, shavings, sawdust and bark up to 30 mm' },
      { ru: 'Допустимая влажность топлива до 60% для крупных AZSD', by: 'Дапушчальная вільготнасць паліва да 60% для буйных AZSD', en: 'Fuel moisture up to 60% for larger AZSD units' },
      { ru: 'Автоматическое дозирование топлива и воздуха', by: 'Аўтаматычнае дазаванне паліва і паветра', en: 'Automatic fuel and combustion-air control' },
    ],
    image: '/images/catalog/detail/kwh-azsd-system.webp',
    imageAlt: { ru: 'Комплекс KWH и AZSD', by: 'Комплекс KWH і AZSD', en: 'KWH and AZSD system' },
    gallery: [
      { src: '/images/catalog/detail/kwh-azsd-system.webp', kind: 'photo', alt: { ru: 'Комплекс KWH и AZSD', by: 'Комплекс KWH і AZSD', en: 'KWH and AZSD system' }, caption: { ru: 'Базовая компоновка KWH + AZSD', by: 'Базавая кампаноўка KWH + AZSD', en: 'Base KWH + AZSD arrangement' } },
      { src: '/images/catalog/detail/kwh-construction.webp', kind: 'scheme', alt: { ru: 'Котёл KWH и схема его конструкции', by: 'Кацёл KWH і схема яго канструкцыі', en: 'KWH boiler and construction diagram' }, caption: { ru: 'Котёл KWH и конструктивный разрез', by: 'Кацёл KWH і канструктыўны разрэз', en: 'KWH boiler and construction cutaway' } },
      { src: '/images/catalog/detail/azsd-unit-b.webp', kind: 'photo', alt: { ru: 'Автоматизированная система AZSD', by: 'Аўтаматызаваная сістэма AZSD', en: 'Automated AZSD system' }, caption: { ru: 'Исполнение AZSD с расходным бункером', by: 'Выкананне AZSD з расходным бункерам', en: 'AZSD configuration with day hopper' } },
      { src: '/images/catalog/detail/azsd-process.webp', kind: 'scheme', alt: { ru: 'Схема процесса сжигания в AZSD', by: 'Схема працэсу спальвання ў AZSD', en: 'AZSD combustion process diagram' }, caption: { ru: 'Подача топлива и зоны горения', by: 'Падача паліва і зоны гарэння', en: 'Fuel feed and combustion zones' } },
    ],
    modelTable: {
      title: { ru: 'Модельный ряд котлов KWH', by: 'Мадэльны шэраг катлоў KWH', en: 'KWH boiler range' },
      columns: [{ ru: 'Модель', by: 'Мадэль', en: 'Model' }, { ru: 'Номинальная мощность', by: 'Намінальная магутнасць', en: 'Nominal output' }],
      rows: [['KWH-110', '110 кВт'], ['KWH-180', '180 кВт'], ['KWH-300', '300 кВт'], ['KWH-500/600', '500/600 кВт'], ['KWH-800', '800 кВт'], ['KWH-1000', '1 000 кВт'], ['KWH-1200', '1 200 кВт'], ['KWH-1500', '1 500 кВт'], ['KWH-2000', '2 000 кВт']],
      note: { ru: 'Размер и исполнение комплекса зависят от выбранной топки AZSD и схемы топливоподачи.', by: 'Памер і выкананне комплексу залежаць ад выбранай топкі AZSD і схемы падачы паліва.', en: 'Overall dimensions and configuration depend on the selected AZSD furnace and fuel-feed system.' },
    },
    specs: [
      { label: { ru: 'Котлы KWH', by: 'Катлы KWH', en: 'KWH boilers' }, value: '55–2 000 кВт' },
      { label: { ru: 'Системы AZSD', by: 'Сістэмы AZSD', en: 'AZSD systems' }, value: '50–1 000 кВт' },
      { label: { ru: 'Топливо', by: 'Паліва', en: 'Fuel' }, value: { ru: 'щепа · стружка · опилки · кора', by: 'шчэпа · стружка · пілавінне · кара', en: 'chips · shavings · sawdust · bark' } },
    ],
  },
  {
    slug: 'kwh-pt', category: 'boiler', model: 'KWH/PT', range: '600–3 000 кВт',
    title: { ru: 'Котлы KWH/PT', by: 'Катлы KWH/PT', en: 'KWH/PT boilers' },
    summary: { ru: 'Комплекс с гидротолкателем и скребковым транспортёром для неоднородного древесного топлива.', by: 'Комплекс з гідраштурхачом і скрабковым транспарцёрам для неаднароднага драўнянага паліва.', en: 'A hydraulic-pusher and scraper-conveyor system for non-uniform woody fuel.' },
    applications: { ru: 'Производства с корой, опилками и кусковыми древесными отходами.', by: 'Вытворчасці з карой, пілавіннем і кавалкавымі драўнянымі адходамі.', en: 'Sites generating bark, sawdust and larger wood residues.' },
    details: { ru: 'KWH/PT рассчитан на смесь коры, опилок и кусковой древесины влажностью до 50%. Подвижный пол бункера KWP подаёт топливо в скребковый транспортёр, затем гидравлический толкатель дозирует его в топочную камеру с подвижными колосниками.', by: 'KWH/PT разлічаны на сумесь кары, пілавіння і кавалкавай драўніны вільготнасцю да 50%. Рухомая падлога бункера KWP падае паліва ў скрабковы транспарцёр, пасля чаго гідраўлічны штурхач дазуе яго ў топачную камеру.', en: 'KWH/PT is designed for a mixture of bark, sawdust and wood pieces with moisture up to 50%. A moving floor in the KWP bunker feeds a scraper conveyor, followed by a hydraulic pusher that meters fuel into the moving-grate combustion chamber.' },
    features: [
      { ru: 'Фракция кусковой древесины до 50 × 30 × 300 мм', by: 'Фракцыя кавалкавай драўніны да 50 × 30 × 300 мм', en: 'Wood pieces up to 50 × 30 × 300 mm' },
      { ru: 'Подвижный пол KWP и скребковый транспортёр', by: 'Рухомая падлога KWP і скрабковы транспарцёр', en: 'KWP moving floor and scraper conveyor' },
      { ru: 'Двухступенчатая защита от обратного пламени', by: 'Двухступеньчатая абарона ад зваротнага полымя', en: 'Two-stage burn-back protection' },
      { ru: 'Автоматическое золоудаление и сенсорное управление', by: 'Аўтаматычнае выдаленне попелу і сэнсарнае кіраванне', en: 'Automatic ash removal and touch-panel control' },
    ],
    image: '/images/catalog/detail/kwh-pt-plan.webp',
    imageAlt: { ru: 'Компоновка котельного комплекса KWH/PT', by: 'Кампаноўка кацельнага комплексу KWH/PT', en: 'KWH/PT boiler system arrangement' },
    gallery: [
      { src: '/images/catalog/detail/kwh-pt-plan.webp', kind: 'scheme', alt: { ru: 'Трёхмерная компоновка KWH/PT', by: 'Трохмерная кампаноўка KWH/PT', en: 'KWH/PT 3D arrangement' }, caption: { ru: 'Бункер KWP, редлер и котёл KWH/PT', by: 'Бункер KWP, рэдлер і кацёл KWH/PT', en: 'KWP bunker, scraper conveyor and KWH/PT boiler' } },
      { src: '/images/catalog/detail/kwh-pt-layout.webp', kind: 'scheme', alt: { ru: 'План размещения KWH/PT', by: 'План размяшчэння KWH/PT', en: 'KWH/PT layout drawing' }, caption: { ru: 'Пример минимальной компоновки котельной', by: 'Прыклад мінімальнай кампаноўкі кацельні', en: 'Example minimum boiler-room layout' } },
      { src: '/images/catalog/detail/kwh-pt-system.webp', kind: 'detail', alt: { ru: 'Экран управления KWH/PT', by: 'Экран кіравання KWH/PT', en: 'KWH/PT control screen' }, caption: { ru: 'Сенсорная панель управления комплексом', by: 'Сэнсарная панэль кіравання комплексам', en: 'System touch control panel' } },
    ],
    modelTable: {
      title: { ru: 'Конфигурации KWH/PT', by: 'Канфігурацыі KWH/PT', en: 'KWH/PT configurations' },
      columns: [{ ru: 'Модель', by: 'Мадэль', en: 'Model' }, { ru: 'Мощность', by: 'Магутнасць', en: 'Output' }, { ru: 'Минимальное помещение, Д × Ш × В', by: 'Мінімальнае памяшканне, Д × Ш × В', en: 'Minimum room, L × W × H' }],
      rows: [['KWH-600/PT', '600 кВт', '9,5 × 11,5 × 5 м'], ['KWH-1000/PT', '1 000 кВт', '10 × 12 × 5 м'], ['KWH-1200/PT', '1 200 кВт', '10 × 12 × 5 м'], ['KWH-2000/PT', '2 000 кВт', '11 × 13 × 5 м'], ['KWH-2500/PT', '2 500 кВт', '12 × 12,5 × 5 м'], ['KWH-3000/PT', '3 000 кВт', '12 × 13 × 5 м']],
      note: { ru: 'Ёмкость бункера KWP выбирается из вариантов 20, 40 или 50 м³.', by: 'Ёмістасць бункера KWP выбіраецца з варыянтаў 20, 40 або 50 м³.', en: 'KWP bunker capacity is selected from 20, 40 or 50 m³ options.' },
    },
    specs: [
      { label: { ru: 'Мощность', by: 'Магутнасць', en: 'Output' }, value: '600–3 000 кВт' },
      { label: { ru: 'Подача', by: 'Падача', en: 'Fuel feed' }, value: { ru: 'гидротолкатель · редлер', by: 'гідраштурхач · рэдлер', en: 'hydraulic pusher · scraper conveyor' } },
      { label: { ru: 'Фракция', by: 'Фракцыя', en: 'Fuel size' }, value: { ru: 'до 50 × 30 × 300 мм', by: 'да 50 × 30 × 300 мм', en: 'up to 50 × 30 × 300 mm' } },
    ],
  },
  {
    slug: 'zgh', category: 'boiler', model: 'ZGH / ZGH-RR', range: '300–3 000 кВт',
    title: { ru: 'Водогрейные установки ZGH', by: 'Вадагрэйныя ўстаноўкі ZGH', en: 'ZGH hot-water units' },
    summary: { ru: 'Автоматизированные установки с неподвижными или подвижными колосниками.', by: 'Аўтаматызаваныя ўстаноўкі з нерухомымі або рухомымі каласнікамі.', en: 'Automated units with fixed or moving grates.' },
    applications: { ru: 'Получение горячей воды для отопления и технологических процессов.', by: 'Атрыманне гарачай вады для ацяплення і тэхналагічных працэсаў.', en: 'Hot-water production for heating and industrial processes.' },
    details: { ru: 'Компактная водогрейная установка ZGH объединяет керамическую топку, жаротрубный теплообменник, расходный бункер, автоматику и противопожарную защиту. Версия ZGH-RR оснащается подвижными колосниками для древесины фракцией до 100 мм.', by: 'Кампактная вадагрэйная ўстаноўка ZGH аб’ядноўвае керамічную топку, жаротрубны цеплаабменнік, расходны бункер, аўтаматыку і супрацьпажарную абарону. Версія ZGH-RR аснашчаецца рухомымі каласнікамі для драўніны фракцыяй да 100 мм.', en: 'The compact ZGH hot-water unit combines a ceramic furnace, fire-tube heat exchanger, day hopper, controls and fire protection. ZGH-RR adds moving grates for woody fuel up to 100 mm.' },
    features: [
      { ru: 'Компактная компоновка для модернизации котельных', by: 'Кампактная кампаноўка для мадэрнізацыі кацельняў', en: 'Compact arrangement for boiler-room modernisation' },
      { ru: 'Влажность древесного топлива до 40%', by: 'Вільготнасць драўнянага паліва да 40%', en: 'Woody fuel moisture up to 40%' },
      { ru: 'ZGH-RR с подвижными колосниками', by: 'ZGH-RR з рухомымі каласнікамі', en: 'ZGH-RR with moving grates' },
      { ru: 'Опциональная фильтрация и дистанционный контроль', by: 'Апцыянальная фільтрацыя і дыстанцыйны кантроль', en: 'Optional flue-gas filtration and remote monitoring' },
    ],
    image: '/images/zgh120eco.jpg.png',
    imageAlt: { ru: 'Водогрейная установка HAMECH ZGH', by: 'Вадагрэйная ўстаноўка HAMECH ZGH', en: 'HAMECH ZGH hot-water unit' },
    gallery: [
      { src: '/images/catalog/detail/zgh-cutaway.webp', kind: 'photo', alt: { ru: 'Водогрейная установка ZGH', by: 'Вадагрэйная ўстаноўка ZGH', en: 'ZGH hot-water unit' }, caption: { ru: 'Компактное исполнение ZGH с бункером', by: 'Кампактнае выкананне ZGH з бункерам', en: 'Compact ZGH unit with hopper' } },
      { src: '/images/catalog/detail/zgh-rr-system.webp', kind: 'scheme', alt: { ru: 'Комплекс ZGH-RR', by: 'Комплекс ZGH-RR', en: 'ZGH-RR system' }, caption: { ru: 'Компоновка ZGH-RR с транспортёром', by: 'Кампаноўка ZGH-RR з транспарцёрам', en: 'ZGH-RR arrangement with conveyor' } },
      { src: '/images/catalog/detail/zgh-rr-cutaway.webp', kind: 'scheme', alt: { ru: 'Разрез котла ZGH-RR', by: 'Разрэз катла ZGH-RR', en: 'ZGH-RR boiler cutaway' }, caption: { ru: 'Теплообменник, топка и подвижные колосники', by: 'Цеплаабменнік, топка і рухомыя каласнікі', en: 'Heat exchanger, furnace and moving grates' } },
      { src: '/images/catalog/detail/zgh-plus.webp', kind: 'scheme', alt: { ru: 'Установка ZGH PLUS', by: 'Устаноўка ZGH PLUS', en: 'ZGH PLUS unit' }, caption: { ru: 'Исполнение ZGH PLUS для специальных древесных отходов', by: 'Выкананне ZGH PLUS для спецыяльных драўняных адходаў', en: 'ZGH PLUS for specialist wood residues' } },
    ],
    modelTable: {
      title: { ru: 'Модельный ряд ZGH', by: 'Мадэльны шэраг ZGH', en: 'ZGH model range' },
      columns: [{ ru: 'Модель', by: 'Мадэль', en: 'Model' }, { ru: 'Мощность', by: 'Магутнасць', en: 'Output' }, { ru: 'Расход топлива при номинале', by: 'Расход паліва пры намінале', en: 'Fuel use at nominal output' }, { ru: 'Масса', by: 'Маса', en: 'Weight' }],
      rows: [['ZGH-300', '300 кВт', '105 кг/ч', '5 000 кг'], ['ZGH-600', '600 кВт', '210 кг/ч', '10 000 кг'], ['ZGH-1000', '1 000 кВт', '350 кг/ч', '15 200 кг'], ['ZGH-2000', '2 000 кВт', '700 кг/ч', '18 000 кг']],
      note: { ru: 'Расход указан для топлива с теплотворностью 13 690 кДж/кг и влажностью 25%.', by: 'Расход пазначаны для паліва з цеплатворнасцю 13 690 кДж/кг і вільготнасцю 25%.', en: 'Fuel consumption is stated for 13,690 kJ/kg calorific value and 25% moisture.' },
    },
    specs: [
      { label: { ru: 'Мощность', by: 'Магутнасць', en: 'Output' }, value: '300–3 000 кВт' },
      { label: { ru: 'Влажность топлива', by: 'Вільготнасць паліва', en: 'Fuel moisture' }, value: { ru: 'до 40%', by: 'да 40%', en: 'up to 40%' } },
      { label: { ru: 'Исполнение', by: 'Выкананне', en: 'Configuration' }, value: 'ZGH · ZGH-RR · ZGH PLUS' },
    ],
  },
  {
    slug: 'sk', category: 'drying', model: 'SK', range: '27,1–164,6 м³',
    title: { ru: 'Крупногабаритные камеры SK', by: 'Буйнагабарытныя камеры SK', en: 'Large SK drying chambers' },
    summary: { ru: 'Свободностоящие камеры фронтальной загрузки с реверсивной вентиляцией и автоматическим управлением.', by: 'Асобна стаячыя камеры франтальнай загрузкі з рэверсіўнай вентыляцыяй і аўтаматычным кіраваннем.', en: 'Free-standing front-loading chambers with reversible ventilation and automatic control.' },
    applications: { ru: 'Сушка пиломатериалов хвойных и лиственных пород до заданной влажности.', by: 'Сушка піламатэрыялаў хвойных і лісцевых парод да зададзенай вільготнасці.', en: 'Drying softwood and hardwood timber to a specified moisture level.' },
    details: { ru: 'Камера SK представляет собой свободностоящую алюминиевую конструкцию с фронтальной загрузкой вилочным погрузчиком. Реверсивные вентиляторы распределяют воздух по всей ширине штабеля, автоматика контролирует температуру и влажность воздуха и древесины.', by: 'Камера SK уяўляе сабой асобна стаячую алюмініевую канструкцыю з франтальнай загрузкай пагрузчыкам. Рэверсіўныя вентылятары размяркоўваюць паветра па ўсёй шырыні штабеля, аўтаматыка кантралюе тэмпературу і вільготнасць паветра і драўніны.', en: 'An SK chamber is a free-standing aluminium structure loaded from the front by forklift. Reversible fans distribute air across the full stack width, while controls monitor air and timber temperature and moisture.' },
    features: [
      { ru: 'Сушка пиломатериалов из 21 породы древесины', by: 'Сушка піламатэрыялаў з 21 пароды драўніны', en: 'Drying programmes for 21 timber species' },
      { ru: 'Рабочая температура до 95 °C', by: 'Рабочая тэмпература да 95 °C', en: 'Operating temperature up to 95 °C' },
      { ru: 'Реверсивная вентиляция и автоматическое управление', by: 'Рэверсіўная вентыляцыя і аўтаматычнае кіраванне', en: 'Reversible ventilation and automatic control' },
      { ru: 'Опциональная термообработка по ISPM 15', by: 'Апцыянальная тэрмаапрацоўка паводле ISPM 15', en: 'Optional ISPM 15 heat treatment' },
    ],
    image: '/images/catalog/detail/sk-concept.webp',
    imageAlt: { ru: 'Сушильные камеры HAMECH серии SK', by: 'Сушыльныя камеры HAMECH серыі SK', en: 'HAMECH SK timber drying chambers' },
    gallery: [
      { src: '/images/catalog/detail/sk-concept.webp', kind: 'scheme', alt: { ru: 'Конструкция сушильной камеры SK', by: 'Канструкцыя сушыльнай камеры SK', en: 'SK chamber construction' }, caption: { ru: 'Принципиальная конструкция камеры SK', by: 'Прынцыповая канструкцыя камеры SK', en: 'SK chamber construction concept' } },
      { src: '/images/catalog/detail/sk-installation.webp', kind: 'photo', alt: { ru: 'Монтаж корпуса сушильной камеры', by: 'Мантаж корпуса сушыльнай камеры', en: 'Drying chamber shell installation' }, caption: { ru: 'Алюминиевая конструкция на этапе монтажа', by: 'Алюмініевая канструкцыя на этапе мантажу', en: 'Aluminium structure during installation' } },
      { src: '/images/catalog/detail/sk-ventilation.webp', kind: 'detail', alt: { ru: 'Реверсивные вентиляторы камеры SK', by: 'Рэверсіўныя вентылятары камеры SK', en: 'SK chamber reversible fans' }, caption: { ru: 'Вентиляторный стенд и распределение воздуха', by: 'Вентылятарны стэнд і размеркаванне паветра', en: 'Fan wall and airflow distribution' } },
      { src: '/images/catalog/detail/sk-controls.webp', kind: 'detail', alt: { ru: 'Автоматика сушильной камеры', by: 'Аўтаматыка сушыльнай камеры', en: 'Drying chamber controls' }, caption: { ru: 'Силовая и управляющая автоматика', by: 'Сілавая і кіруючая аўтаматыка', en: 'Power and control cabinets' } },
      { src: '/images/catalog/detail/sk-realizations.webp', kind: 'photo', alt: { ru: 'Варианты установленных камер SK', by: 'Варыянты ўсталяваных камер SK', en: 'Examples of installed SK chambers' }, caption: { ru: 'Примеры внешнего исполнения камер', by: 'Прыклады вонкавага выканання камер', en: 'Examples of chamber exterior configurations' } },
    ],
    modelTable: {
      title: { ru: 'Представительные модели SK', by: 'Прадстаўнічыя мадэлі SK', en: 'Representative SK models' },
      columns: [{ ru: 'Модель', by: 'Мадэль', en: 'Model' }, { ru: 'Разовая загрузка', by: 'Разавая загрузка', en: 'Batch capacity' }, { ru: 'Среднее теплопотребление', by: 'Сярэдняе цепласпажыванне', en: 'Average heat demand' }, { ru: 'Наружные размеры, Ш × Г × В', by: 'Вонкавыя памеры, Ш × Г × В', en: 'External dimensions, W × D × H' }],
      rows: [['SK-74', '27,1 м³', '95 кВт', '5,23 × 7,24 × 4,41 м'], ['SK-136', '53,6 м³', '175 кВт', '6,73 × 7,24 × 5,61 м'], ['SK-230', '91,8 м³', '320 кВт', '9,03 × 8,75 × 5,61 м'], ['SK-410', '164,6 м³', '560 кВт', '13,23 × 10,26 × 5,61 м']],
      note: { ru: 'Показатели загрузки зависят от толщины доски, прокладок и использования загрузочного пространства.', by: 'Паказчыкі загрузкі залежаць ад таўшчыні дошкі, пракладак і выкарыстання загрузачнай прасторы.', en: 'Batch capacity depends on board thickness, stickers and loading-space utilisation.' },
    },
    specs: [
      { label: { ru: 'Модели', by: 'Мадэлі', en: 'Models' }, value: 'SK-74…SK-410' },
      { label: { ru: 'Разовая загрузка', by: 'Разавая загрузка', en: 'Batch capacity' }, value: '27,1–164,6 м³' },
      { label: { ru: 'Теплопотребление', by: 'Цепласпажыванне', en: 'Heat demand' }, value: '95–560 кВт' },
    ],
  },
  {
    slug: 'dqk-modular', category: 'drying', model: 'DQK / DQKR / DQKE', range: 'Модульная система',
    title: { ru: 'Модульные сушильные камеры', by: 'Модульныя сушыльныя камеры', en: 'Modular drying chambers' },
    summary: { ru: 'Сегментные камеры, длина которых формируется количеством модулей под требуемую загрузку.', by: 'Сегментныя камеры, даўжыня якіх фарміруецца колькасцю модуляў пад патрэбную загрузку.', en: 'Segmented chambers whose length is configured by the number of modules required.' },
    applications: { ru: 'Гибкая компоновка новых и расширяемых деревообрабатывающих производств.', by: 'Гнуткая кампаноўка новых і пашыраемых дрэваапрацоўчых вытворчасцяў.', en: 'Flexible layouts for new and expanding woodworking sites.' },
    details: { ru: 'Камеры DQKR-2, DQKF-2 и DQKE-140 собираются из 2–12 секций длиной 1 480 мм. Каждый модуль включает реверсивный вентилятор и калорифер; камера оснащается увлажнением, приточно-вытяжной системой, рельсовым путём и ручным либо автоматическим управлением.', by: 'Камеры DQKR-2, DQKF-2 і DQKE-140 збіраюцца з 2–12 секцый даўжынёй 1 480 мм. Кожны модуль уключае рэверсіўны вентылятар і каларыфер; камера абсталёўваецца ўвільгатненнем, прытокава-выцяжной сістэмай, рэйкавым шляхам і ручным або аўтаматычным кіраваннем.', en: 'DQKR-2, DQKF-2 and DQKE-140 chambers are assembled from 2–12 sections, each 1,480 mm long. Every module includes a reversible fan and heater; the chamber adds humidification, supply and exhaust ducts, rails, and manual or automatic control.' },
    features: [
      { ru: 'От 2 до 12 модулей с шагом длины 1 480 мм', by: 'Ад 2 да 12 модуляў з крокам даўжыні 1 480 мм', en: 'Two to twelve modules in 1,480 mm increments' },
      { ru: 'Горячая вода или пар в качестве теплоносителя', by: 'Гарачая вада або пара ў якасці цепланосьбіта', en: 'Hot water or steam as the heating medium' },
      { ru: 'Одно- или двухдверное проходное исполнение', by: 'Адна- або двухдзвернае прахадное выкананне', en: 'Single- or double-door pass-through configuration' },
      { ru: 'Ручное или автоматическое управление сушкой', by: 'Ручное або аўтаматычнае кіраванне сушкай', en: 'Manual or automatic drying control' },
    ],
    image: '/images/catalog/detail/dqk-interior.webp',
    imageAlt: { ru: 'Модульная сушильная камера HAMECH', by: 'Модульная сушыльная камера HAMECH', en: 'HAMECH modular timber drying chamber' },
    gallery: [
      { src: '/images/catalog/detail/dqk-interior.webp', kind: 'photo', alt: { ru: 'Внутреннее устройство модульной сушильной камеры', by: 'Унутраная будова модульнай сушыльнай камеры', en: 'Modular drying chamber interior' }, caption: { ru: 'Рельсовый путь, вентиляторы и калориферы', by: 'Рэйкавы шлях, вентылятары і каларыферы', en: 'Rails, fans and heating coils' } },
      { src: '/images/catalog/detail/sk-controls.webp', kind: 'detail', alt: { ru: 'Автоматика управления сушкой', by: 'Аўтаматыка кіравання сушкай', en: 'Drying process controls' }, caption: { ru: 'Шкафы контроля технологического процесса', by: 'Шафы кантролю тэхналагічнага працэсу', en: 'Process monitoring and control cabinets' } },
      { src: '/images/catalog/detail/sk-ventilation.webp', kind: 'detail', alt: { ru: 'Система циркуляции воздуха', by: 'Сістэма цыркуляцыі паветра', en: 'Air circulation system' }, caption: { ru: 'Реверсивная вентиляция сушильной камеры', by: 'Рэверсіўная вентыляцыя сушыльнай камеры', en: 'Reversible chamber ventilation' } },
    ],
    modelTable: {
      title: { ru: 'Примеры модульных конфигураций DQKR-2', by: 'Прыклады модульных канфігурацый DQKR-2', en: 'Example DQKR-2 modular configurations' },
      columns: [{ ru: 'Модель', by: 'Мадэль', en: 'Model' }, { ru: 'Глубина', by: 'Глыбіня', en: 'Depth' }, { ru: 'Загрузка, доска 25 мм', by: 'Загрузка, дошка 25 мм', en: 'Batch, 25 mm boards' }, { ru: 'Среднее теплопотребление', by: 'Сярэдняе цепласпажыванне', en: 'Average heat demand' }],
      rows: [['DQKR-2/2', '3 200 мм', '7,5 м³', '36 кВт'], ['DQKR-2/5', '7 640 мм', '18,5 м³', '90 кВт'], ['DQKR-2/8', '12 080 мм', '29,5 м³', '144 кВт'], ['DQKR-2/10', '15 040 мм', '37 м³', '180 кВт']],
      note: { ru: 'Полный каталог также содержит линейки DQKF-2 и DQKE-140 с загрузкой до 43 и 21,5 м³ соответственно.', by: 'Поўны каталог таксама змяшчае лінейкі DQKF-2 і DQKE-140 з загрузкай да 43 і 21,5 м³ адпаведна.', en: 'The full catalogue also covers DQKF-2 and DQKE-140 ranges with capacities up to 43 and 21.5 m³ respectively.' },
    },
    specs: [
      { label: { ru: 'Серии', by: 'Серыі', en: 'Series' }, value: 'DQK-2 · DQKR-2 · DQKE-140' },
      { label: { ru: 'Конструкция', by: 'Канструкцыя', en: 'Construction' }, value: { ru: 'сегментная · расширяемая', by: 'сегментная · пашыраемая', en: 'segmented · expandable' } },
      { label: { ru: 'Управление', by: 'Кіраванне', en: 'Control' }, value: { ru: 'автоматическое / полуавтоматическое', by: 'аўтаматычнае / паўаўтаматычнае', en: 'automatic / semi-automatic' } },
    ],
  },
];

export type ObjectKind = 'boiler' | 'drying' | 'combined';

export interface ProjectObject {
  id: string;
  kind: ObjectKind;
  client: string;
  location: string;
  year: string;
  equipment: string;
  capacity: string;
  image?: string;
  featured?: boolean;
}

export const projects: ProjectObject[] = [
  { id: 'gap-5-minsk', kind: 'boiler', client: 'РУП «Грузовой автопарк №5»', location: 'Минск', year: '2004–2005', equipment: 'KWH-600 / AZSD-500 + KWH-300 / AZSD-250', capacity: '900 кВт', featured: true },
  { id: 'dorremstroy-nesvizh', kind: 'boiler', client: 'КУП «Дорремстрой №168»', location: 'Несвиж', year: '2004–2005', equipment: 'KWH-600 / AZSD-500', capacity: '1 260 кВт' },
  { id: 'logoysk-3', kind: 'boiler', client: 'РУП «Логойский комхоз», котельная №3', location: 'Плещеницы', year: '2004–2005', equipment: 'KWH-1000×2 / AZSD-1000×2', capacity: '2 000 кВт' },
  { id: 'brest-boiler', kind: 'boiler', client: 'КУПП «Брестское котельное хозяйство»', location: 'Брест', year: '2005–2006', equipment: 'KWH-1000 / AZSD-1000', capacity: '1 000 кВт' },
  { id: 'smolmebel-boiler', kind: 'boiler', client: 'ИП «Смолмебель»', location: 'Смолевичи', year: '2005–2006', equipment: 'KWH-600 / AZSD-500', capacity: '600 кВт' },
  { id: 'nesvizh-flax', kind: 'boiler', client: 'ОАО «Несвижский льнозавод»', location: 'Городея', year: '2007–2009', equipment: 'KWH-300 / AZSD-250', capacity: '1 160 кВт' },
  { id: 'volki', kind: 'boiler', client: 'Брестский психоневрологический дом-интернат', location: 'д. Волки', year: '2007–2009', equipment: 'KWH-1000 / AZSD-1000 + KWH-600 / AZSD-500', capacity: '1 600 кВт' },
  { id: 'logoysk-boiler-2', kind: 'boiler', client: 'РУП «Логойский комхоз», котельная №2', location: 'Плещеницы', year: '2007–2009', equipment: 'KWH-2000×2 / AZSD-1000×4', capacity: '4 000 кВт', image: '/images/kotelnaja-pleschenitsy.jpg', featured: true },
  { id: 'komsokol', kind: 'boiler', client: 'ИП «Комсокол»', location: 'Фаниполь', year: '2008', equipment: 'KWH-1000×2 / AZSD-1000×2', capacity: '2 000 кВт' },
  { id: 'osipovichi', kind: 'boiler', client: 'Осиповичское УКП ЖКХ, котельная №1', location: 'Осиповичи', year: '2007–2009', equipment: 'KWH-2000 / AZSD-1000×2', capacity: '4 000 кВт', featured: true },
  { id: 'naliboki', kind: 'boiler', client: 'Налибокская ГОСШ', location: 'Налибоки', year: '2008–2011', equipment: 'KWH-180×2', capacity: '360 кВт' },
  { id: 'slonim', kind: 'boiler', client: 'Слонимское ГУП ЖКХ, котельная по ул. Войкова', location: 'Слоним', year: '2008–2009', equipment: 'KWH-2000 / AZSD-1000×2', capacity: '5 550 кВт', featured: true },
  { id: 'zvezdny', kind: 'boiler', client: 'Оздоровительный центр «Звёздный»', location: 'Радошковичи', year: '2008–2010', equipment: 'KWH-1000×2 / AZSD-1000×2', capacity: '2 000 кВт' },
  { id: 'geraneny', kind: 'boiler', client: 'Блочно-модульная котельная', location: 'д. Геранёны', year: '2009–2010', equipment: 'KWH-1000×2 / AZSD-1000×2', capacity: '2 000 кВт' },
  { id: 'asterisk', kind: 'drying', client: 'ИУЧПП «АСТЕРИСК»', location: 'Брест', year: '2002', equipment: 'SK-78×1', capacity: '53,6 м³' },
  { id: 'gubis-agro', kind: 'combined', client: 'СП ООО «Губис Агро» / Wood Works', location: 'д. Аношки', year: '2003', equipment: 'KWH-1000 / AZSD-1000 / SK-78×2', capacity: '1 000 кВт · 107,2 м³' },
  { id: 'irion-wood', kind: 'combined', client: 'СООО «Ирион Вуд»', location: 'Раков', year: '2004', equipment: 'KWH-2000 / AZSD-1000×2 / ZOD-120 / SK-78×4', capacity: '2 000 кВт · 214,4 м³' },
  { id: 'smolmebel-drying', kind: 'combined', client: 'ИП «Смолмебель»', location: 'Смолевичи', year: '2006', equipment: 'KWH-600 / AZSD-500 / SK-78×2', capacity: '600 кВт · 107,2 м³' },
  { id: 'orsha-depot', kind: 'combined', client: 'Железнодорожное депо', location: 'Орша', year: '2006', equipment: 'KWH-110 / AZSD-100 / SK-42', capacity: '110 кВт · 27,1 м³' },
  { id: 'zolotaya-roshcha', kind: 'drying', client: 'ЧТПУП «Золотая Роща»', location: 'Минск', year: '2006', equipment: 'SKW-55 (ISOVER)', capacity: '35,7 м³' },
  { id: 'alyans', kind: 'combined', client: 'ЗАО «Альянс»', location: 'Лельчицы', year: '2007', equipment: 'KWH-300 / AZSD-250 / SK-55', capacity: '300 кВт · 35,7 м³' },
  { id: 'astratrans', kind: 'combined', client: 'УП «Астратранс»', location: 'Пинск', year: '2008', equipment: 'KWH-110×2 / AZSD-100×2 / SK-55 / A1×630', capacity: '110 кВт · 35,7 м³' },
  { id: 'wooden-house', kind: 'drying', client: 'ИП «Вуден Хаус»', location: 'Слуцк', year: '2008', equipment: 'SK-100×4', capacity: '268 м³' },
  { id: 'mpmk-167', kind: 'drying', client: 'МПМК-167', location: 'Щучин', year: '2009', equipment: 'SK-55×1', capacity: '35,7 м³' },
  { id: 'forest-production', kind: 'drying', client: 'ЧПТУП «Форест Продакшн»', location: 'Витебск', year: '2009', equipment: 'SK-78×2', capacity: '107,2 м³' },
  { id: 'demi', kind: 'drying', client: 'ИП «Деми»', location: 'Витебск', year: '2010', equipment: 'SK-78×2', capacity: '107,2 м³' },
  { id: 'monastery', kind: 'combined', client: 'Свято-Елисаветинский женский монастырь', location: 'Минск', year: '2010–2011', equipment: 'KWH-110 / AZSD-100 / DQKE-140/5 / DQKR-2/5', capacity: '100 кВт · 35 м³' },
  { id: 'baidimex', kind: 'drying', client: 'СООО «Байдимекс»', location: 'Мосты', year: '2016', equipment: 'SK-262×2', capacity: '209,6 м³' },
  { id: 'lestractinvest', kind: 'drying', client: 'ООО «Лестрактинвест»', location: 'Дзержинск', year: '2018', equipment: 'SK-136×3', capacity: '160,8 м³' },
  { id: 'vudzhi', kind: 'combined', client: 'ИП Жихарко / «ВУДЖИ»', location: 'Барановичи', year: '2007–2018', equipment: 'KWH-300 / AZSD-250 / KWH-1200/PT / SK-78×2 / SK-230 / SK-170×2', capacity: '1 500 кВт · 333 м³', featured: true },
];

export interface ReviewItem {
  id: string;
  organization: string;
  year: string;
  subject: LocalizedText;
  summary: LocalizedText;
  image: string;
}

export const reviews: ReviewItem[] = [
  {
    id: 'logoysk', organization: 'РУП «Логойский комхоз»', year: '2010',
    subject: { ru: 'Котельные №2 и №3 в Плещеницах', by: 'Кацельні №2 і №3 у Плешчаніцах', en: 'Boiler plants No. 2 and No. 3 in Pleshchenitsy' },
    summary: { ru: 'Отзыв об эксплуатации комплексов KWH/AZSD мощностью 2 и 4 МВт.', by: 'Водгук аб эксплуатацыі комплексаў KWH/AZSD магутнасцю 2 і 4 МВт.', en: 'Operating reference for 2 MW and 4 MW KWH/AZSD systems.' },
    image: '/images/reviews/logoysk.webp',
  },
  {
    id: 'drevtekh', organization: 'ООО «Древтех»', year: '—',
    subject: { ru: 'Сушильное оборудование HAMECH', by: 'Сушыльнае абсталяванне HAMECH', en: 'HAMECH timber drying equipment' },
    summary: { ru: 'Письмо о критериях выбора сушильных камер и опыте применения оборудования.', by: 'Ліст аб крытэрыях выбару сушыльных камер і вопыце прымянення абсталявання.', en: 'A letter on drying-chamber selection criteria and equipment experience.' },
    image: '/images/reviews/drevtekh.webp',
  },
  {
    id: 'vudzhi', organization: 'ЧУПТП «ВУДЖИ»', year: '2020',
    subject: { ru: 'Пять сушильных камер SK', by: 'Пяць сушыльных камер SK', en: 'Five SK drying chambers' },
    summary: { ru: 'Положительный отзыв о камерах SK-78, SK-170 и SK-230, введённых в 2011–2018 годах.', by: 'Станоўчы водгук аб камерах SK-78, SK-170 і SK-230, уведзеных у 2011–2018 гадах.', en: 'Positive reference for SK-78, SK-170 and SK-230 chambers commissioned between 2011 and 2018.' },
    image: '/images/reviews/vudzhi.webp',
  },
];

export const documents = [
  { id: 'catalog', title: { ru: 'Каталог HAMECH / «Энергостройинвест-ПРО»', by: 'Каталог HAMECH / «Энергостройинвест-ПРО»', en: 'HAMECH / Energostroyinvest-PRO catalogue' }, file: '/catalog.pdf', type: 'catalog', date: '49 pages' },
  { id: 'azsd-declaration', title: { ru: 'Декларация соответствия установок AZSD', by: 'Дэкларацыя адпаведнасці ўстановак AZSD', en: 'AZSD system declaration of conformity' }, file: '/images/documents/azsd-declaration.webp', type: 'historical', date: '2016–2021' },
  { id: 'boiler-declaration', title: { ru: 'Декларация соответствия котлов KWH, KWPK, KWH/PT, ZGH', by: 'Дэкларацыя адпаведнасці катлоў KWH, KWPK, KWH/PT, ZGH', en: 'KWH, KWPK, KWH/PT and ZGH boiler declaration' }, file: '/images/documents/boiler-declaration.webp', type: 'historical', date: '2016–2021' },
  { id: 'drying-declaration', title: { ru: 'Декларация соответствия сушильных камер', by: 'Дэкларацыя адпаведнасці сушыльных камер', en: 'Timber drying chamber declaration of conformity' }, file: '/images/documents/drying-declaration.webp', type: 'historical', date: '2016–2021' },
] as const;

export const equipmentForCategory = (category: EquipmentCategory) =>
  equipment.filter((item) => item.category === category);

export const localized = (text: LocalizedText, locale: Locale) => text[locale];

export const formatTechnicalValue = (value: string | LocalizedText, locale: Locale) => {
  const text = typeof value === 'string' ? value : value[locale];
  return locale === 'en'
    ? text
        .replaceAll('кВт', 'kW')
        .replaceAll('кг/ч', 'kg/h')
        .replaceAll('кг', 'kg')
        .replaceAll('мм', 'mm')
        .replaceAll('м³', 'm³')
        .replaceAll('м²', 'm²')
    : text;
};
