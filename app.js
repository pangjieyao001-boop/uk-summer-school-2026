/*
 * Pang Jieyao · UK Summer School 2026
 * 专属行程助手 — 中英双语 / 纯前端静态页面
 */

const DEPARTURE_DATE = new Date('2026-06-28T00:00:00+08:00');

const I18N = {
  zh: {
    'meta.title': '庞洁瑶 · 2026 英国牛津夏校行程',
    'meta.desc': '庞洁瑶专属 2026 英国牛津赫特福德学院研究生暑期学校行程助手：日程、攻略、交通、机票注意事项与深圳湾赴港机场时间规划。',
    'brand.title': '我的英国行程',
    'brand.subtitle': '牛津夏校 · 2026',
    'lang.label': 'EN',
    'nav.home': '行程',
    'nav.guide': '攻略',
    'nav.transport': '交通',
    'nav.notes': '备忘',
    'hero.tag': 'LINGNAN × HERTFORD',
    'hero.title': '牛津大学赫特福德学院<br>研究生暑期学校',
    'hero.date': '2026.06.28 – 07.12',
    'hero.countdown': '距离出发还有',
    'hero.days': '天',
    'hero.statDays': '天行程',
    'hero.statPlace': '牛津',
    'hero.statFlights': '2 段飞行',
    'quick.flight': '机票须知',
    'quick.port': '口岸规划',
    'quick.stay': '住宿指南',
    'quick.pack': '行李清单',
    'itinerary.title': '每日行程',
    'itinerary.hint': '点击卡片查看详情',
    'itinerary.original': '官方行程表原图',
    'guide.title': '牛津 & 周边攻略',
    'guide.subtitle': '住在 Abingdon House，玩转牛津与英格兰乡村',
    'guide.accommodation.title': '住宿指南 · Abingdon House',
    'guide.accommodation.body': `
      <p><strong>住址：</strong>Abingdon House, Hertford College, Abingdon Road, Oxford（牛津市中心南侧，泰晤士河以南，距主校区约 1.2 km，步行 10–15 分钟）。</p>
      <ul>
        <li><strong>房型：</strong>单人间，共用卫生间（gender neutral）和小厨房。</li>
        <li><strong>网络：</strong>连接 Hertford 的 <code>InternationalProgrammes</code> Wi-Fi，欢迎包内有专属密码和二维码。</li>
        <li><strong>餐饮：</strong>学院每天提供早中晚三餐；小厨房仅供应冰箱、水壶、微波炉，不能做饭。</li>
        <li><strong>洗衣：</strong>Old Abingdon House 地下室洗衣房，洗衣 £2.50、烘干 £1.00，需自备洗衣液，刷卡支付。</li>
        <li><strong>保洁：</strong>工作日（周一至周五）Scouts 会打扫房间、每周换一次床单毛巾。</li>
        <li><strong>安全：</strong>出门务必锁门并随身携带钥匙；遗失钥匙罚款 £50。睡前锁窗锁门，贵重物品放包底。</li>
        <li><strong>提醒：</strong>宿舍一般无冷气，可带手持小风扇；洗澡/拖鞋、洗漱用品建议自备。</li>
      </ul>`,
    'guide.mustsee.title': '牛津必打卡',
    'guide.mustsee.body': `
      <p>从 Abingdon House 出发，沿 <strong>Abingdon Road / St Aldate’s</strong> 向北步行 10 分钟即到核心区。</p>
      <ul>
        <li><strong>Hertford Bridge（叹息桥）</strong>：赫特福德学院标志性威尼斯式天桥，拍照圣地。<button class="place-search-btn" data-query="Hertford Bridge Oxford">🔍 查攻略</button></li>
        <li><strong>Radcliffe Camera & Bodleian Library</strong>：牛津最上镜的圆顶图书馆，可预约参观。<button class="place-search-btn" data-query="Radcliffe Camera Oxford">🔍 查攻略</button></li>
        <li><strong>Christ Church College & Meadow</strong>：哈利波特食堂取景地，旁边 Meadow 适合野餐散步。<button class="place-search-btn" data-query="Christ Church Oxford">🔍 查攻略</button></li>
        <li><strong>Ashmolean Museum</strong>：英国 oldest public museum，免费入场。<button class="place-search-btn" data-query="Ashmolean Museum Oxford">🔍 查攻略</button></li>
        <li><strong>Pitt Rivers Museum</strong> & <strong>Natural History Museum</strong>：免费，藏品丰富。<button class="place-search-btn" data-query="Oxford University Museum of Natural History">🔍 查攻略</button></li>
        <li><strong>Covered Market</strong>：本地小吃、独立店铺和咖啡馆聚集地。<button class="place-search-btn" data-query="Covered Market Oxford">🔍 查攻略</button></li>
        <li><strong>Magdalen Bridge Boathouse</strong>：体验 Cherwell 河撑篙（punting），约 £22–25/小时。<button class="place-search-btn" data-query="Magdalen Bridge Boathouse Oxford">🔍 查攻略</button></li>
      </ul>
      <p><a href="https://www.google.com/maps/search/?api=1&query=Oxford+city+centre+UK" target="_blank">在地图中查看牛津中心</a></p>`,
    'guide.daytrips.title': '周末 & 自由日周边游',
    'guide.daytrips.body': `
      <p>7 月 5 日（周日）和 7 月 10 日（周五）是自由日，可向 RA 报备后独立出行。</p>
      <ul>
        <li><strong>伦敦 London</strong>：火车约 1 小时，可逛大英博物馆、泰晤士河、西区。Day 6 已包含国家美术馆团游。</li>
        <li><strong>剑桥 Cambridge</strong>：火车/大巴约 2–2.5 小时，体验康河撑篙与学院风。<button class="place-search-btn" data-query="Cambridge UK">🔍 查攻略</button></li>
        <li><strong>巴斯 Bath</strong>：火车约 1 小时，罗马浴场与新月楼。<button class="place-search-btn" data-query="Bath UK">🔍 查攻略</button></li>
        <li><strong>科茨沃尔德 Cotswolds</strong>：从牛津乘 S3/Stagecoach 或火车到 Moreton-in-Marsh，游览 Bibury、Bourton-on-the-Water、Stow-on-the-Wold 等蜂蜜色村庄。<button class="place-search-btn" data-query="Cotswolds UK">🔍 查攻略</button></li>
        <li><strong>布莱尼姆宫 Blenheim Palace</strong>：丘吉尔 birthplace，世界文化遗产。从牛津火车站乘 S3 公交约 20 分钟到宫门，凭公交票可享 30% 门票优惠。<button class="place-search-btn" data-query="Blenheim Palace">🔍 查攻略</button></li>
        <li><strong>巨石阵 Stonehenge</strong>：较远，建议参加一日团或火车到 Salisbury 再转接驳车。<button class="place-search-btn" data-query="Stonehenge UK">🔍 查攻略</button></li>
      </ul>
      <p><a href="https://www.google.com/maps/search/?api=1&query=Blenheim+Palace" target="_blank">布莱尼姆宫地图</a> · <a href="https://www.google.com/maps/search/?api=1&query=Cotswolds+UK" target="_blank">科茨沃尔德地图</a></p>`,
    'guide.food.title': '吃喝 & 生活',
    'guide.food.body': `
      <ul>
        <li><strong>支付：</strong>信用卡/Contactless 广泛可用，建议优先刷卡并选 GBP 结算。可少量兑换小面额现金。</li>
        <li><strong>超市：</strong>Tesco Express、Sainsbury's Local、Co-op、M&S 遍布市中心，适合买水果、零食、洗衣液。</li>
        <li><strong>咖啡/下午茶：</strong>Covered Market 内多家独立咖啡馆；学院 Welcome Tea（7.1）和 Gala Dinner（7.9）需正装出席。</li>
        <li><strong>药店：</strong>Boots / Superdrug，可买常用药。身体不适先告知 RA，必要时拨打 111；紧急医疗 999。</li>
        <li><strong>网络：</strong>建议提前购买英国流量 SIM（如 3UK/中国移动国际漫游/香港 Global SIM），保持与 RA 联系。</li>
        <li><strong>天气：</strong>6–7 月英国凉爽多变，带层次穿搭、防水外套/雨伞和舒适步行鞋。</li>
      </ul>`,
    'guide.map.title': '🗺️ 牛津地图',
    'guide.map.intro': '下方地图来自 OpenStreetMap，可直接查看牛津市中心与主要学院位置（无需 Google API Key）。',
    'guide.map.searchPlaceholder': '在地图上搜索地点，如 Radcliffe Camera',
    'guide.map.searchButton': '定位',
    'guide.map.notFound': '未找到该地点，请尝试英文名称。',
    'transport.title': '交通 & 机票',
    'transport.subtitle': '航班、机场接驳、牛津当地交通一键掌握',
    'transport.flight.title': '国泰航空 · 团体机票',
    'transport.flight.outMeta': '经济舱 62K · 飞行约 14h05m',
    'transport.flight.inMeta': '经济舱 65K · 飞行约 12h50m',
    'transport.flight.refLabel': '订位编号',
    'transport.flight.ticketLabel': '机票号码',
    'transport.flight.baggageLabel': '行李额',
    'transport.flight.baggage': '托运 1PC/23kg + 手提 1PC/7kg',
    'transport.coach.title': '机场 ↔ 牛津 · 大学接驳大巴',
    'transport.coach.body': `
      <p>大学统一安排往返 Heathrow 与牛津的团体大巴，个人不得擅自更改航班或滞留。</p>
      <ul>
        <li><strong>去程：</strong>抵达伦敦希思罗机场 T3 后，RA 接机，随团过英国边检，再乘大巴前往牛津。</li>
        <li><strong>返程：</strong>7 月 11 日由 RA 陪同从牛津乘大巴前往希思罗机场，搭乘 CX250（18:20 起飞）。具体集合时间将由 RA 提前通知。</li>
        <li><strong>注意：</strong>团体机票+大巴票，不可单独改签、提前离团或脱队；务必紧跟 RA 安排。</li>
      </ul>`,
    'transport.local.title': '牛津当地交通',
    'transport.local.body': `
      <ul>
        <li><strong>步行：</strong>Abingdon House 到 Hertford 主校区约 10–15 分钟；市中心大多数景点步行可达。</li>
        <li><strong>公交：</strong>Oxford Bus Company / Stagecoach 覆盖全城，可刷 Contactless 银行卡或 App 购票。常用线路：S3 去 Blenheim Palace / Woodstock。</li>
        <li><strong>火车：</strong>Oxford Station 可直达伦敦 Paddington / Marylebone（约 1h）、Bath（约 1h）、Birmingham 等。可用 Trainline 或 National Rail 查票。</li>
        <li><strong>打车：</strong>Uber 在牛津可用，夜间建议结伴而行。</li>
        <li><strong>重要提示：</strong>英国车辆靠左行驶，过马路务必先看右再看左！</li>
      </ul>
      <p><a href="https://www.oxfordbus.co.uk" target="_blank">Oxford Bus</a> · <a href="https://www.stagecoachbus.com" target="_blank">Stagecoach</a> · <a href="https://www.nationalrail.co.uk" target="_blank">National Rail</a></p>`,
    'transport.shenzhen.title': '深圳湾口岸 → 香港机场',
    'transport.shenzhen.body': `
      <p><strong>集合要求：</strong>6 月 28 日 19:00 在香港国际机场一号客运大楼离港大厅 A 行岛（Aisle A）集合。建议 18:00 前抵达机场。</p>
      <p><strong>推荐时间线（以 19:00 集合倒推）：</strong></p>
      <div class="timeline-plan">
        <div class="timeline-plan__item"><div class="timeline-plan__time">15:30</div><div class="timeline-plan__title">从深圳住处出发</div><div class="timeline-plan__desc">地铁 2 号线到海月站，再转 B817/B737 到深圳湾口岸。</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">16:00–16:30</div><div class="timeline-plan__title">深圳湾口岸过关</div><div class="timeline-plan__desc">通关时间 06:30–23:30，预留 20–30 分钟排队。</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">16:45</div><div class="timeline-plan__title">乘跨境巴士/公交</div><div class="timeline-plan__desc">可选环岛中港通直达机场巴士（约 45–75 分钟），或 B2 到天水围警署转 E34（约 75 分钟，更经济）。</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">18:00</div><div class="timeline-plan__title">抵达香港机场 T1</div><div class="timeline-plan__desc">寻找 Aisle A 与领队/TA 汇合，剩余时间休息/吃饭。</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">19:00</div><div class="timeline-plan__title">团体集合 & 办理值机</div><div class="timeline-plan__desc">跟随 Prof. Huang / Iris 办理国泰团体值机，航班 23:15 起飞。</div></div>
      </div>
      <p style="margin-top:12px"><strong>其他方案：</strong>跨境出租车约 250–300 港币、30–40 分钟；皇岗口岸 24 小时通关，可作为深夜备选。</p>
      <p><a href="https://www.gobybus.hk/bus/zh/port-Shenzhen-Bay" target="_blank">深圳湾跨境巴士</a> · <a href="https://www.hongkongairport.com/tc/transport/to-from-airport/public-buses.page" target="_blank">机场公交</a></p>`,
    'notes.title': '出行备忘',
    'notes.subtitle': '文件、行李、注意事项、紧急联络',
    'notes.flight.title': '出发与抵达注意事项',
    'notes.flight.body': `
      <ul>
        <li><strong>团体值机：</strong>6 月 28 日 19:00 在 Aisle A 国泰柜台办理团体值机，迟到只宽容 30 分钟。</li>
        <li><strong>证件随身：</strong>护照、登机牌、签证/ETA 纸质备份请放在随身包，不要托运。</li>
        <li><strong>充电宝：</strong>最多携带 2 个；全程禁止在机上充电、禁止托运、禁止放头顶行李舱，必须放在前排座椅下方的随身行李内。</li>
        <li><strong>英国边检：</strong>抵达后整团统一排队过关，等人齐后再去柜台，不要单独离队。</li>
        <li><strong>海关：</strong>提前查阅英国禁限带物品，药品需处方/说明书备查。</li>
        <li><strong>全程随团：</strong>机票与大巴为团体票，不得擅自改签、提前离团或单独行动。</li>
      </ul>
      <p><a href="https://www.cathaypacific.com/cx/en_HK/baggage/controlled-and-banned-items/lithium-batteries.html" target="_blank">国泰锂电池/充电宝规定</a> · <a href="https://www.gov.uk/bringing-goods-into-uk-personal-use/banned-and-restricted-goods" target="_blank">英国禁限带物品</a></p>`,
    'notes.docs.title': '重要文件',
    'notes.docs.body': `
      <ul>
        <li>有效期 6 个月以上的护照原件</li>
        <li>英国签证 / Entry Clearance / ETA 纸质复印件</li>
        <li>学生证、身份证（原件+复印件）</li>
        <li>国泰电子机票 / 订位编号 FEGYM8</li>
        <li>住宿地址与联系电话（Abingdon House, Hertford College）</li>
        <li>领队 Prof. Huang、TA Iris 的手机号码</li>
        <li>保险单 / 紧急联络人信息</li>
      </ul>`,
    'notes.pack.title': '行李清单',
    'notes.pack.body': `
      <ul>
        <li><strong>衣物：</strong>层次穿搭、轻便防水外套、雨伞、正装（Gala Dinner + 海报展示）、舒适步行鞋、拖鞋。</li>
        <li><strong>电器：</strong>英标转换插头（Type G，与香港相同）、手机充电器、充电宝（≤2 个）、手持小风扇。</li>
        <li><strong>洗漱：</strong>牙刷、牙膏、毛巾、洗浴用品、洗衣液小瓶。</li>
        <li><strong>健康：</strong>个人药品（带处方/说明书）、口罩、免洗洗手液。</li>
        <li><strong>其他：</strong>可重复使用水杯、英国流量 SIM 卡、少量英镑现金小面额、背包锁。</li>
      </ul>`,
    'notes.contacts.title': '紧急联络 & 常用电话',
    'notes.contacts.body': `
      <ul>
        <li><strong>领队 Prof. HUANG Yaoxuan Virginia：</strong>+852 6589 9952 / +86 138 1027 4852</li>
        <li><strong>助教 Ms. BAO Xujie Iris：</strong>+86 135 4863 7998</li>
        <li><strong>Hertford College Lodge：</strong>+44 (0)1865 279400</li>
        <li><strong>英国紧急报警/火警/急救：</strong>999</li>
        <li><strong>英国非紧急报警：</strong>101</li>
        <li><strong>英国医疗咨询热线：</strong>111</li>
        <li><strong>中国驻英国使馆领保：</strong>+44-20-7436 8294</li>
      </ul>`,
    'search.title': '🔍 搜索地点',
    'search.placeholder': '输入景点或餐厅，如 Radcliffe Camera',
    'search.button': '搜索',
    'search.loading': '正在搜索…',
    'search.empty': '没找到相关地点，换个关键词试试',
    'search.error': '搜索失败，请检查网络或稍后重试',
    'search.openNow': '营业中',
    'search.closed': '已休息',
    'search.hours': '营业时间',
    'search.reviews': '精选评论',
    'search.viewMap': '地图导航',
    'search.viewWebsite': '官网',
    'search.photoAlt': '地点照片'
  },
  en: {
    'meta.title': 'Pang Jieyao · UK Summer School 2026',
    'meta.desc': "Pang Jieyao's personal travel companion for the 2026 Lingnan-Hertford Postgraduate Summer School: itinerary, Oxford guide, transport, flight notes and Shenzhen Bay to HK Airport planning.",
    'brand.title': 'My UK Trip',
    'brand.subtitle': 'Oxford Summer School · 2026',
    'lang.label': '中',
    'nav.home': 'Itinerary',
    'nav.guide': 'Guide',
    'nav.transport': 'Transport',
    'nav.notes': 'Notes',
    'hero.tag': 'LINGNAN × HERTFORD',
    'hero.title': 'Hertford College, Oxford<br>Postgraduate Summer School',
    'hero.date': '28 Jun – 12 Jul 2026',
    'hero.countdown': 'Departure in',
    'hero.days': 'days',
    'hero.statDays': 'Days',
    'hero.statPlace': 'Oxford',
    'hero.statFlights': 'Flights',
    'quick.flight': 'Flight Notes',
    'quick.port': 'Port Plan',
    'quick.stay': 'Accommodation',
    'quick.pack': 'Packing',
    'itinerary.title': 'Daily Itinerary',
    'itinerary.hint': 'Tap a card for details',
    'itinerary.original': 'Official itinerary image',
    'guide.title': 'Oxford & Around',
    'guide.subtitle': 'Staying at Abingdon House — explore Oxford and the English countryside',
    'guide.accommodation.title': 'Accommodation · Abingdon House',
    'guide.accommodation.body': `
      <p><strong>Address:</strong> Abingdon House, Hertford College, Abingdon Road, Oxford (south of the river Thames, ~1.2 km / 10–15 min walk to the main college site).</p>
      <ul>
        <li><strong>Rooms:</strong> Single occupancy rooms with shared bathrooms (gender neutral) and small kitchens.</li>
        <li><strong>Wi-Fi:</strong> Connect to <code>InternationalProgrammes</code>. Your unique password/QR code is in the welcome pack.</li>
        <li><strong>Meals:</strong> Three meals a day are served in Hall. The kitchenette is only for fridge/kettle/microwave use.</li>
        <li><strong>Laundry:</strong> Basement laundry room in Old Abingdon House. Wash £2.50, dryer £1.00; buy detergent at a supermarket; pay by card.</li>
        <li><strong>Housekeeping:</strong> Scouts clean Mon–Fri and change bed linen/towels once a week.</li>
        <li><strong>Safety:</strong> Always lock your door and take your key. Lost key fee is £50. Lock windows before leaving.</li>
        <li><strong>Note:</strong> UK student rooms usually have no AC; bring a handheld fan. Slippers & toiletries are recommended.</li>
      </ul>`,
    'guide.mustsee.title': 'Oxford Must-Sees',
    'guide.mustsee.body': `
      <p>From Abingdon House, walk north along <strong>Abingdon Road / St Aldate’s</strong> for 10 minutes to reach the city centre.</p>
      <ul>
        <li><strong>Hertford Bridge (Bridge of Sighs)</strong>: iconic Venetian-style skyway at Hertford College.<button class="place-search-btn" data-query="Hertford Bridge Oxford">🔍 Search</button></li>
        <li><strong>Radcliffe Camera & Bodleian Library</strong>: Oxford’s most photographed building; guided tours available.<button class="place-search-btn" data-query="Radcliffe Camera Oxford">🔍 Search</button></li>
        <li><strong>Christ Church College & Meadow</strong>: Harry Potter dining hall inspiration; great for picnics.<button class="place-search-btn" data-query="Christ Church Oxford">🔍 Search</button></li>
        <li><strong>Ashmolean Museum</strong>: Britain’s oldest public museum, free entry.<button class="place-search-btn" data-query="Ashmolean Museum Oxford">🔍 Search</button></li>
        <li><strong>Pitt Rivers Museum</strong> & <strong>Natural History Museum</strong>: free and fascinating.<button class="place-search-btn" data-query="Oxford University Museum of Natural History">🔍 Search</button></li>
        <li><strong>Covered Market</strong>: indie food stalls, cafés and shops.<button class="place-search-btn" data-query="Covered Market Oxford">🔍 Search</button></li>
        <li><strong>Magdalen Bridge Boathouse</strong>: try punting on the River Cherwell, about £22–25/hour.<button class="place-search-btn" data-query="Magdalen Bridge Boathouse Oxford">🔍 Search</button></li>
      </ul>
      <p><a href="https://www.google.com/maps/search/?api=1&query=Oxford+city+centre+UK" target="_blank">View Oxford centre on map</a></p>`,
    'guide.daytrips.title': 'Weekend & Free-Day Trips',
    'guide.daytrips.body': `
      <p>5 July (Sun) and 10 July (Fri) are free days. Tell your RA before leaving Oxford.</p>
      <ul>
        <li><strong>London</strong>: train ~1 hour. Day 6 already includes a guided London & National Gallery tour.</li>
        <li><strong>Cambridge</strong>: ~2–2.5 hours by train/bus, famous for punting and college scenery.<button class="place-search-btn" data-query="Cambridge UK">🔍 Search</button></li>
        <li><strong>Bath</strong>: ~1 hour by train, Roman Baths and Royal Crescent.<button class="place-search-btn" data-query="Bath UK">🔍 Search</button></li>
        <li><strong>The Cotswolds</strong>: take S3/Stagecoach or train to Moreton-in-Marsh; visit Bibury, Bourton-on-the-Water, Stow-on-the-Wold.<button class="place-search-btn" data-query="Cotswolds UK">🔍 Search</button></li>
        <li><strong>Blenheim Palace</strong>: birthplace of Winston Churchill, UNESCO site. S3 bus from Oxford station to palace gates (~20 min); 30% entry discount with S3 ticket.<button class="place-search-btn" data-query="Blenheim Palace">🔍 Search</button></li>
        <li><strong>Stonehenge</strong>: further away; join a day tour or train to Salisbury then shuttle.<button class="place-search-btn" data-query="Stonehenge UK">🔍 Search</button></li>
      </ul>
      <p><a href="https://www.google.com/maps/search/?api=1&query=Blenheim+Palace" target="_blank">Blenheim Palace map</a> · <a href="https://www.google.com/maps/search/?api=1&query=Cotswolds+UK" target="_blank">Cotswolds map</a></p>`,
    'guide.food.title': 'Food & Daily Life',
    'guide.food.body': `
      <ul>
        <li><strong>Payments:</strong> Card/contactless is widely accepted. Choose GBP when prompted. Carry a small amount of GBP cash.</li>
        <li><strong>Supermarkets:</strong> Tesco Express, Sainsbury’s Local, Co-op, M&S are all around the centre.</li>
        <li><strong>Cafés/afternoon tea:</strong> many indie cafés in Covered Market. Dress formally for Welcome Tea (1 Jul) and Gala Dinner (9 Jul).</li>
        <li><strong>Pharmacy:</strong> Boots / Superdrug. If unwell, tell your RA first; call 111 for advice or 999 in an emergency.</li>
        <li><strong>Mobile data:</strong> buy a UK data SIM (e.g. 3UK) or enable roaming before departure so RA can reach you.</li>
        <li><strong>Weather:</strong> UK summer is mild but changeable. Pack layers, a waterproof jacket/umbrella and comfy walking shoes.</li>
      </ul>`,
    'guide.map.title': '🗺️ Oxford Map',
    'guide.map.intro': 'The map below is powered by OpenStreetMap — explore Oxford city centre and the main colleges without a Google API Key.',
    'guide.map.searchPlaceholder': 'Search on map, e.g. Radcliffe Camera',
    'guide.map.searchButton': 'Locate',
    'guide.map.notFound': 'Location not found, try the English name.',
    'transport.title': 'Transport & Flights',
    'transport.subtitle': 'Flights, airport coach, Oxford transport and Shenzhen Bay planning',
    'transport.flight.title': 'Cathay Pacific · Group Ticket',
    'transport.flight.outMeta': 'Economy 62K · ~14h05m',
    'transport.flight.inMeta': 'Economy 65K · ~12h50m',
    'transport.flight.refLabel': 'Booking Ref',
    'transport.flight.ticketLabel': 'Ticket No',
    'transport.flight.baggageLabel': 'Baggage',
    'transport.flight.baggage': 'Checked 1PC/23kg + Cabin 1PC/7kg',
    'transport.coach.title': 'Airport ↔ Oxford · University Coach',
    'transport.coach.body': `
      <p>The university arranges a group coach between Heathrow and Oxford. Personal flight changes or staying behind are not allowed.</p>
      <ul>
        <li><strong>Outbound:</strong> After landing at Heathrow T3, RAs will meet the group, pass UK immigration together, then take the coach to Oxford.</li>
        <li><strong>Return:</strong> On 11 July, RAs will accompany everyone by coach from Oxford to Heathrow for CX250 (departs 18:20). Exact pick-up time will be announced.</li>
        <li><strong>Important:</strong> This is a group flight+coach ticket. Do not change flights, leave the group, or make separate travel plans.</li>
      </ul>`,
    'transport.local.title': 'Oxford Local Transport',
    'transport.local.body': `
      <ul>
        <li><strong>Walking:</strong> Abingdon House to Hertford main site is ~10–15 min; most city centre sights are walkable.</li>
        <li><strong>Bus:</strong> Oxford Bus Company / Stagecoach cover the city. Pay contactless or via app. S3 bus goes to Blenheim Palace / Woodstock.</li>
        <li><strong>Train:</strong> Oxford Station has direct trains to London Paddington/Marylebone (~1h), Bath (~1h), Birmingham, etc. Check Trainline or National Rail.</li>
        <li><strong>Taxi:</strong> Uber operates in Oxford. Travel in pairs/groups after dark.</li>
        <li><strong>Reminder:</strong> Traffic drives on the LEFT. Look right first when crossing!</li>
      </ul>
      <p><a href="https://www.oxfordbus.co.uk" target="_blank">Oxford Bus</a> · <a href="https://www.stagecoachbus.com" target="_blank">Stagecoach</a> · <a href="https://www.nationalrail.co.uk" target="_blank">National Rail</a></p>`,
    'transport.shenzhen.title': 'Shenzhen Bay Port → HK Airport',
    'transport.shenzhen.body': `
      <p><strong>Group meeting:</strong> 19:00 on 28 June at Aisle A, Terminal 1 Departure Hall, Hong Kong International Airport. Aim to arrive by 18:00.</p>
      <p><strong>Suggested timeline (counting back from 19:00 meet):</strong></p>
      <div class="timeline-plan">
        <div class="timeline-plan__item"><div class="timeline-plan__time">15:30</div><div class="timeline-plan__title">Leave your Shenzhen base</div><div class="timeline-plan__desc">Metro Line 2 to Haiyue Station, then bus B817/B737 to Shenzhen Bay Port.</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">16:00–16:30</div><div class="timeline-plan__title">Cross Shenzhen Bay Port</div><div class="timeline-plan__desc">Port hours 06:30–23:30. Allow 20–30 min for queues.</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">16:45</div><div class="timeline-plan__title">Take cross-border bus / public bus</div><div class="timeline-plan__desc">Direct coach to HKIA (~45–75 min), or budget option B2 to Tin Shui Wai Police Station then E34 (~75 min).</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">18:00</div><div class="timeline-plan__title">Arrive at HKIA Terminal 1</div><div class="timeline-plan__desc">Find Aisle A, meet Prof. Huang / Iris, rest or eat before check-in.</div></div>
        <div class="timeline-plan__item"><div class="timeline-plan__time">19:00</div><div class="timeline-plan__title">Group check-in</div><div class="timeline-plan__desc">Group Cathay check-in for CX255 departing 23:15.</div></div>
      </div>
      <p style="margin-top:12px"><strong>Alternatives:</strong> Cross-border taxi about HK$250–300 / 30–40 min; Huanggang Port is 24-hour for late-night backup.</p>
      <p><a href="https://www.gobybus.hk/bus/zh/port-Shenzhen-Bay" target="_blank">Shenzhen Bay cross-border bus</a> · <a href="https://www.hongkongairport.com/tc/transport/to-from-airport/public-buses.page" target="_blank">HKIA buses</a></p>`,
    'notes.title': 'Travel Notes',
    'notes.subtitle': 'Documents, packing, notices, emergency contacts',
    'notes.flight.title': 'Departure & Arrival Notes',
    'notes.flight.body': `
      <ul>
        <li><strong>Group check-in:</strong> Meet at Aisle A, Cathay counter at 19:00 on 28 June. Only 30 minutes’ lateness is allowed.</li>
        <li><strong>Documents handy:</strong> Keep passport, boarding pass and visa/ETA copies in your carry-on, not checked luggage.</li>
        <li><strong>Power banks:</strong> max 2 per person. Do not charge on board, do not check in, do not put in overhead bins; keep in carry-on under the seat in front.</li>
        <li><strong>UK immigration:</strong> Wait for the whole group before approaching the counters. Do not leave the group.</li>
        <li><strong>Customs:</strong> Check UK banned/restricted goods in advance. Carry prescriptions/leaflets for personal medicines.</li>
        <li><strong>Stay with the group:</strong> Group ticket + coach; no individual changes or separate plans.</li>
      </ul>
      <p><a href="https://www.cathaypacific.com/cx/en_HK/baggage/controlled-and-banned-items/lithium-batteries.html" target="_blank">Cathay battery rules</a> · <a href="https://www.gov.uk/bringing-goods-into-uk-personal-use/banned-and-restricted-goods" target="_blank">UK restricted goods</a></p>`,
    'notes.docs.title': 'Important Documents',
    'notes.docs.body': `
      <ul>
        <li>Valid passport (≥6 months validity)</li>
        <li>UK visa / Entry Clearance / ETA printout</li>
        <li>Student ID and home-country ID (original + copy)</li>
        <li>Cathay e-ticket / booking reference FEGYM8</li>
        <li>Accommodation address and contact (Abingdon House, Hertford College)</li>
        <li>Prof. Huang and TA Iris phone numbers</li>
        <li>Insurance policy / emergency contact info</li>
      </ul>`,
    'notes.pack.title': 'Packing List',
    'notes.pack.body': `
      <ul>
        <li><strong>Clothing:</strong> layers, light waterproof jacket, umbrella, formal wear (Gala Dinner + poster presentation), comfy walking shoes, slippers.</li>
        <li><strong>Electronics:</strong> UK plug adapter (Type G, same as HK), phone charger, power banks (≤2), handheld fan.</li>
        <li><strong>Toiletries:</strong> toothbrush, toothpaste, towel, shower gel, small laundry detergent.</li>
        <li><strong>Health:</strong> personal medication (with prescription/leaflet), masks, hand sanitiser.</li>
        <li><strong>Others:</strong> reusable water bottle, UK data SIM, small GBP banknotes, small padlock.</li>
      </ul>`,
    'notes.contacts.title': 'Emergency Contacts',
    'notes.contacts.body': `
      <ul>
        <li><strong>Group Leader Prof. HUANG Yaoxuan Virginia:</strong> +852 6589 9952 / +86 138 1027 4852</li>
        <li><strong>TA Ms. BAO Xujie Iris:</strong> +86 135 4863 7998</li>
        <li><strong>Hertford College Lodge:</strong> +44 (0)1865 279400</li>
        <li><strong>UK emergency (police/fire/ambulance):</strong> 999</li>
        <li><strong>UK non-emergency police:</strong> 101</li>
        <li><strong>UK medical advice:</strong> 111</li>
        <li><strong>Chinese Embassy UK consular protection:</strong> +44-20-7436 8294</li>
      </ul>`,
    'search.title': '🔍 Search Places',
    'search.placeholder': 'Enter an attraction or restaurant, e.g. Radcliffe Camera',
    'search.button': 'Search',
    'search.loading': 'Searching…',
    'search.empty': 'No places found. Try a different keyword.',
    'search.error': 'Search failed. Please check your network and try again.',
    'search.openNow': 'Open now',
    'search.closed': 'Closed',
    'search.hours': 'Opening hours',
    'search.reviews': 'Reviews',
    'search.viewMap': 'View on map',
    'search.viewWebsite': 'Website',
    'search.photoAlt': 'Place photo'
  }
};

const DAYS = [
  {
    date: '2026-06-29', weekdayZh: '周一', weekdayEn: 'Mon',
    type: 'arrival', tagZh: '抵达日', tagEn: 'Arrival',
    titleZh: '抵达牛津', titleEn: 'Arrival in Oxford',
    summaryZh: '飞抵伦敦希思罗，随团过边检后乘大学大巴前往牛津，入住 Abingdon House，用餐并参加迎新说明。',
    summaryEn: 'Land at Heathrow, clear UK immigration as a group, take the university coach to Oxford and check in at Abingdon House.',
    items: [
      { time: '23:15', textZh: '香港起飞 CX255', textEn: 'Depart Hong Kong CX255' },
      { time: '06:20', textZh: '抵达伦敦希思罗 T3（英国时间）', textEn: 'Arrive Heathrow T3 (UK time)' },
      { time: 'morning', textZh: 'RA 接机，团体通关，乘大巴前往牛津', textEn: 'RAs meet group, group immigration, coach to Oxford' },
      { time: '全天', textZh: '入住、用餐、迎新说明', textEn: 'Check-in, meals, orientation' }
    ],
    tipsZh: ['提前把护照、签证、机票确认单放在随身包。', '下飞机后跟随 RA，切勿单独离队。', '飞机上尽量休息，抵达后先调整时差。'],
    tipsEn: ['Keep passport, visa and ticket confirmation in your carry-on.', 'Follow the RAs after landing; do not leave the group.', 'Rest on the flight and adjust to UK time.'],
    links: [
      { labelZh: '希思罗机场官网', labelEn: 'Heathrow Airport', url: 'https://www.heathrow.com' },
      { labelZh: '希思罗到牛津大巴', labelEn: 'Oxford Bus Airline', url: 'https://www.oxfordbus.co.uk/airline' }
    ]
  },
  {
    date: '2026-06-30', weekdayZh: '周二', weekdayEn: 'Tue',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: '项目启动 & 牛津初探', titleEn: 'Programme Intro & Oxford Tour',
    summaryZh: '上午了解项目与牛津导师制；下午牛津历史建筑探索；晚上公共演讲工作坊与 RA 文化活动。',
    summaryEn: 'Intro to the programme and Oxford tutorial system; tour of Oxford’s historic buildings; evening public-speaking workshop.',
    items: [
      { time: '09:30–11:00', textZh: '研究生暑期学校项目介绍', textEn: 'Introduction to the Summer School Programme' },
      { time: '11:30–13:00', textZh: '牛津大学与导师制介绍（可提问招生流程）', textEn: 'Introduction to Oxford University & the Tutorial System' },
      { time: '14:30–16:30', textZh: '探索之旅：牛津历史建筑自助游', textEn: 'Tour of Discovery: self-guided exploration of historic Oxford' },
      { time: '晚间', textZh: '公共演讲工作坊 + RA 文化活动', textEn: 'Public speaking workshop & cultural activities with RAs' }
    ],
    tipsZh: ['穿舒适步行鞋，下午会走较多路。', '对牛津申请流程有疑问可以主动提问。'],
    tipsEn: ['Wear comfortable walking shoes.', 'Ask questions about the Oxford admissions process.'],
    links: [
      { labelZh: '赫特福德学院官网', labelEn: 'Hertford College', url: 'https://www.hertford.ox.ac.uk' },
      { labelZh: '牛津大学官网', labelEn: 'University of Oxford', url: 'https://www.ox.ac.uk' }
    ]
  },
  {
    date: '2026-07-01', weekdayZh: '周三', weekdayEn: 'Wed',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: '管理领导力 & 欢迎茶会', titleEn: 'Management, Leadership & Welcome Tea',
    summaryZh: '上午管理领导力讲座与讨论；下午 15:15 参加正式 Welcome Tea（建议正装）；晚上 RA 文化活动。',
    summaryEn: 'Morning lecture and discussion on management & leadership; formal Welcome Tea at 15:15 (dress up); evening activities.',
    items: [
      { time: '09:30–11:00', textZh: '讲座：管理与领导力的最新理论与应用', textEn: 'Lecture: Management & Leadership latest theories' },
      { time: '11:30–13:00', textZh: '管理领导力小组讨论与活动', textEn: 'Management & Leadership discussion & activities' },
      { time: '15:15', textZh: 'Welcome Tea（正式茶会，建议正装）', textEn: 'Welcome Tea (formal, dress up encouraged)' },
      { time: '晚间', textZh: 'RA 文化活动', textEn: 'Cultural activities with RAs' }
    ],
    tipsZh: ['Welcome Tea 比较正式，可穿衬衫/连衣裙。', '这是认识同学和导师的好机会，主动交流。'],
    tipsEn: ['Dress smartly for Welcome Tea.', 'A good chance to meet tutors and classmates.'],
    links: []
  },
  {
    date: '2026-07-02', weekdayZh: '周四', weekdayEn: 'Thu',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: '医疗 AI & 学术海报工作坊', titleEn: 'AI in Healthcare & Poster Workshop',
    summaryZh: '上午 AI in Healthcare 讲座与讨论；下午学术海报制作工作坊，为最终海报展示做准备。',
    summaryEn: 'Morning lecture/discussion on AI in Healthcare; afternoon academic workshop on preparing effective research posters.',
    items: [
      { time: '09:30–11:00', textZh: 'AI 在医疗领域的应用讲座', textEn: 'AI in Healthcare lecture' },
      { time: '11:30–13:00', textZh: 'AI in Healthcare 讨论与活动', textEn: 'AI in Healthcare discussion & activities' },
      { time: '14:30–16:30', textZh: '学术工作坊：如何制作与展示研究海报', textEn: 'Academic Workshop: preparing & presenting research posters' },
      { time: '晚间', textZh: 'RA 文化活动', textEn: 'Cultural activities with RAs' }
    ],
    tipsZh: ['开始构思海报主题，可提前准备素材。', '不懂就问导师和 RA。'],
    tipsEn: ['Start thinking about your poster topic.', 'Ask tutors/RAs if you need help.'],
    links: []
  },
  {
    date: '2026-07-03', weekdayZh: '周五', weekdayEn: 'Fri',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: '社会政策 & 西方绘画史', titleEn: 'Social Policy & Western Painting',
    summaryZh: '上午社会政策讲座与讨论；下午西方绘画史讲座，为第二天国家美术馆之行做铺垫。',
    summaryEn: 'Social policy lecture and discussion; history of Western painting illustrated by National Gallery works.',
    items: [
      { time: '09:30–11:00', textZh: '社会政策讲座', textEn: 'Social Policy lecture' },
      { time: '11:30–13:00', textZh: '社会政策讨论与活动', textEn: 'Social Policy discussion & activities' },
      { time: '14:30–16:30', textZh: '西方绘画史：国家美术馆名作赏析', textEn: 'The History of Western Painting' },
      { time: '晚间', textZh: 'RA 文化活动', textEn: 'Cultural activities with RAs' }
    ],
    tipsZh: ['认真听讲，第二天能在国家美术馆看到讲座中的真迹。', '可提前下载国家美术馆地图。'],
    tipsEn: ['Listen closely — you will see these paintings at the National Gallery tomorrow.', 'Download the National Gallery map in advance.'],
    links: [
      { labelZh: '英国国家美术馆', labelEn: 'National Gallery', url: 'https://www.nationalgallery.org.uk' }
    ]
  },
  {
    date: '2026-07-04', weekdayZh: '周六', weekdayEn: 'Sat',
    type: 'tour', tagZh: '游学日', tagEn: 'Study Tour',
    titleZh: '伦敦一日游：国家美术馆', titleEn: 'London Study Tour & National Gallery',
    summaryZh: '全天由 RA 带队乘大巴前往伦敦，徒步游览地标后参观国家美术馆。',
    summaryEn: 'Full-day coach tour to London: iconic landmarks walking tour and visit to the National Gallery.',
    items: [
      { time: '全天', textZh: '伦敦城市地标徒步游', textEn: 'Walking tour of London landmarks' },
      { time: '下午', textZh: '参观国家美术馆（ seeing paintings from yesterday’s lecture）', textEn: 'Visit the National Gallery' },
      { time: '晚间', textZh: '乘大巴返回牛津', textEn: 'Return to Oxford by coach' }
    ],
    tipsZh: ['穿舒适鞋子，伦敦步行较多。', '带好充电宝、水和小零食。', '跟紧 RA，记好集合时间和地点。'],
    tipsEn: ['Wear comfortable shoes and bring water/snacks.', 'Keep your phone charged.', 'Stick with the RAs and note meeting points.'],
    links: [
      { labelZh: '国家美术馆官网', labelEn: 'National Gallery', url: 'https://www.nationalgallery.org.uk' },
      { labelZh: '伦敦地铁图', labelEn: 'TfL', url: 'https://tfl.gov.uk' }
    ]
  },
  {
    date: '2026-07-05', weekdayZh: '周日', weekdayEn: 'Sun',
    type: 'free', tagZh: '自由日', tagEn: 'Free Day',
    titleZh: '自由日：探索牛津或周边', titleEn: 'Free Day: Explore Oxford or Beyond',
    summaryZh: '可自行安排牛津市内活动，或向 RA 报备后前往伦敦、剑桥、巴斯、科茨沃尔德、布莱尼姆宫、巨石阵等地。',
    summaryEn: 'Free time. Optional independent trips to London, Cambridge, Bath, Cotswolds, Blenheim Palace or Stonehenge (sign up with RAs).',
    items: [
      { time: '建议', textZh: '牛津撑篙 / 步行导览 / 博物馆 / 购物', textEn: 'Punting, walking tour, museums or shopping in Oxford' },
      { time: '可选', textZh: '伦敦 / 剑桥 / 巴斯 / 科茨沃尔德 / 布莱尼姆宫 / 巨石阵', textEn: 'London / Cambridge / Bath / Cotswolds / Blenheim / Stonehenge' }
    ],
    tipsZh: ['离开牛津前必须在 RA 处登记并填写外出表。', '与同伴结伴出行，天黑后尤其注意安全。', '提前看好返程交通，确保能赶上晚餐签到（如报名）。'],
    tipsEn: ['Sign out with RAs before leaving Oxford.', 'Travel in pairs/groups and stay safe after dark.', 'Check return transport in advance.'],
    links: [
      { labelZh: '牛津撑篙', labelEn: 'Punting Oxford', url: 'https://www.magdalenbridgeboathouse.co.uk' },
      { labelZh: '布莱尼姆宫', labelEn: 'Blenheim Palace', url: 'https://www.blenheimpalace.com' },
      { labelZh: '科茨沃尔德', labelEn: 'Cotswolds', url: 'https://www.cotswolds.com' }
    ]
  },
  {
    date: '2026-07-06', weekdayZh: '周一', weekdayEn: 'Mon',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: 'AI 课堂 & 创意写作', titleEn: 'AI in the Classroom & Creative Writing',
    summaryZh: '上午探讨 AI 对教育的影响；下午创意写作工作坊；晚上 RA 文化活动。',
    summaryEn: 'AI in the Classroom session; Creative Writing workshop; evening activities with RAs.',
    items: [
      { time: '09:30–13:00', textZh: 'AI 在课堂：政策、教师与学生面临的挑战', textEn: 'AI in the Classroom: changes and challenges' },
      { time: '14:30–16:30', textZh: '创意写作工作坊', textEn: 'Creative Writing workshop' },
      { time: '晚间', textZh: 'RA 文化活动', textEn: 'Cultural activities with RAs' }
    ],
    tipsZh: ['可以带上笔记本记录写作灵感。', '思考 AI 与自己专业的结合点。'],
    tipsEn: ['Bring a notebook for writing ideas.', 'Think about how AI relates to your field.'],
    links: []
  },
  {
    date: '2026-07-07', weekdayZh: '周二', weekdayEn: 'Tue',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: '气候变化 & 创业学', titleEn: 'Climate Change & Entrepreneurship',
    summaryZh: '上午气候变化讲座与讨论；下午创业学与组织行为课程。',
    summaryEn: 'Climate Change lecture & discussion; Entrepreneurship and organisational behaviour session.',
    items: [
      { time: '09:30–11:00', textZh: '气候变化讲座', textEn: 'Climate Change lecture' },
      { time: '11:30–13:00', textZh: '气候变化讨论与活动', textEn: 'Climate Change discussion & activities' },
      { time: '14:30–16:30', textZh: '创业学：组织行为与运营效率', textEn: 'Entrepreneurship: organisational behaviour' },
      { time: '晚间', textZh: 'RA 文化活动', textEn: 'Cultural activities with RAs' }
    ],
    tipsZh: ['积极参与讨论，很多课程以互动为主。', '晚上早点休息，保持精力。'],
    tipsEn: ['Participate actively; many sessions are discussion-based.', 'Get a good night’s sleep.'],
    links: []
  },
  {
    date: '2026-07-08', weekdayZh: '周三', weekdayEn: 'Wed',
    type: 'program', tagZh: '课程日', tagEn: 'Programme',
    titleZh: '牛津博物馆 & 海报准备', titleEn: 'Museums of Oxford & Poster Prep',
    summaryZh: '上午参观牛津知名博物馆（Ashmolean / Pitt Rivers / 自然史 / 科学史）并完成书面作业；下午继续准备研究海报。',
    summaryEn: 'Visit Oxford museums (Ashmolean, Pitt Rivers, Natural History, History of Science) and prepare research posters.',
    items: [
      { time: '09:30–13:00', textZh: '牛津博物馆导览 + 参观 + 书面作业', textEn: 'Museums of Oxford intro + visit + written assignment' },
      { time: '14:30–16:30', textZh: '研究海报展示准备', textEn: 'Preparation for Research Poster Presentation' },
      { time: '晚间', textZh: 'RA 文化活动', textEn: 'Cultural activities with RAs' }
    ],
    tipsZh: ['博物馆免费，可拍照但请遵守规定。', '海报建议 tonight 前完成初稿。'],
    tipsEn: ['Museums are free; follow photo rules.', 'Aim to finish a poster draft tonight.'],
    links: [
      { labelZh: '阿什莫林博物馆', labelEn: 'Ashmolean', url: 'https://www.ashmolean.org' },
      { labelZh: '皮特河博物馆', labelEn: 'Pitt Rivers', url: 'https://www.prm.ox.ac.uk' },
      { labelZh: '自然史博物馆', labelEn: 'Natural History', url: 'https://www.oum.ox.ac.uk' }
    ]
  },
  {
    date: '2026-07-09', weekdayZh: '周四', weekdayEn: 'Thu',
    type: 'program', tagZh: '展示日', tagEn: 'Presentation',
    titleZh: '海报展示 & 结业晚宴', titleEn: 'Poster Presentations & Gala Dinner',
    summaryZh: '上午学术会议形式的研究海报展示；下午反馈与总结；晚上正装出席 Gala Dinner 与证书颁发仪式。',
    summaryEn: 'Research poster presentations; feedback & closing thoughts; formal Gala Dinner with certificate ceremony.',
    items: [
      { time: '09:30–13:00', textZh: '结业研究海报展示（学术会议形式）', textEn: 'End-of-course Research Poster Presentations' },
      { time: '14:30–16:30', textZh: '海报展示反馈与课程总结', textEn: 'Feedback on posters & closing thoughts' },
      { time: '晚间', textZh: 'Gala Dinner（正装出席，颁发证书）', textEn: 'Gala Dinner (formal dress, certificates)' }
    ],
    tipsZh: ['海报展示是重头戏，提前练习 2 分钟介绍。', '正装出席晚宴，可准备衬衫/西装/礼服。', '记得拍照留念（征得同意）。'],
    tipsEn: ['Practice a 2-minute pitch for your poster.', 'Wear formal attire for the Gala Dinner.', 'Take photos with consent.'],
    links: []
  },
  {
    date: '2026-07-10', weekdayZh: '周五', weekdayEn: 'Fri',
    type: 'free', tagZh: '自由日', tagEn: 'Free Day',
    titleZh: '自由日 & 反思论文截止', titleEn: 'Free Day & Essay Deadline',
    summaryZh: '自由安排；今晚 23:59 前提交 800–1000 字反思论文（含至少 3 张照片）。',
    summaryEn: 'Free day. Reflective essay (800–1000 words, ≥3 photos) due by 23:59.',
    items: [
      { time: '自由', textZh: '可继续在牛津游玩、购物或休息', textEn: 'Explore, shop or rest in Oxford' },
      { time: '23:59', textZh: '反思论文提交截止（Word/PDF，含 3 张照片）', textEn: 'Reflective essay deadline (Word/PDF with 3 photos)' }
    ],
    tipsZh: ['论文发送至 yaoxuanhuang@ln.edu.hk，抄送 xujiebao@ln.hk。', '记得封面写姓名和学号。', '提前检查字数和照片版权/同意。'],
    tipsEn: ['Email to yaoxuanhuang@ln.edu.hk and CC xujiebao@ln.hk.', 'Include name and student ID on the cover.', 'Check word count and photo consent.'],
    links: [
      { labelZh: '岭南大学邮箱', labelEn: 'Lingnan email', url: 'mailto:yaoxuanhuang@ln.edu.hk' }
    ]
  },
  {
    date: '2026-07-11', weekdayZh: '周六', weekdayEn: 'Sat',
    type: 'departure', tagZh: '返程日', tagEn: 'Departure',
    titleZh: '返程：牛津 → 希思罗 → 香港', titleEn: 'Departure: Oxford → Heathrow → Hong Kong',
    summaryZh: '由 RA 陪同乘大巴前往希思罗机场，搭乘 CX250（18:20 起飞）返回香港，次日 14:10 抵达。',
    summaryEn: 'RAs accompany the group by coach to Heathrow for CX250 (18:20), arriving Hong Kong 14:10 the next day.',
    items: [
      { time: '白天', textZh: '退房、整理行李、按 RA 通知时间集合乘大巴', textEn: 'Check out, pack and meet for the coach at the announced time' },
      { time: '18:20', textZh: 'CX250 从伦敦希思罗起飞', textEn: 'CX250 departs Heathrow' },
      { time: '+1 14:10', textZh: '抵达香港国际机场', textEn: 'Arrive Hong Kong International Airport' }
    ],
    tipsZh: ['提前称好行李，避免超重。', '把所有证件、充电宝放随身包。', '到香港后按自己的安排返回深圳/住处。'],
    tipsEn: ['Weigh luggage in advance to avoid excess fees.', 'Keep documents and power banks in carry-on.', 'Make your own way back to Shenzhen/home after HK arrival.'],
    links: [
      { labelZh: '国泰航班状态', labelEn: 'Cathay flight status', url: 'https://www.cathaypacific.com' }
    ]
  }
];

const GUIDE_TILES = [
  { id: 'accommodation', icon: '🏠', keyZh: '住宿', keyEn: 'Stay' },
  { id: 'oxford-mustsee', icon: '🎓', keyZh: '牛津打卡', keyEn: 'Must-Sees' },
  { id: 'oxford-map', icon: '🗺️', keyZh: '地图', keyEn: 'Map' },
  { id: 'day-trips', icon: '🚐', keyZh: '周边游', keyEn: 'Day Trips' },
  { id: 'food', icon: '🍽️', keyZh: '吃喝生活', keyEn: 'Food & Life' }
];

let currentLang = 'zh';

function t(key) {
  return (I18N[currentLang][key] ?? key);
}

function renderText() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.hasAttribute('data-i18n-attr')) {
      const attr = el.getAttribute('data-i18n-attr');
      el.setAttribute(attr, t(key));
    } else {
      el.innerHTML = t(key);
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  document.querySelector('#langToggle .lang-toggle__label').textContent = t('lang.label');
}

function osmEmbedUrl(lat, lon, zoom = 15) {
  const z = Math.max(1, zoom);
  const delta = 0.03 * Math.pow(2, 14 - z);
  const minLat = lat - delta;
  const maxLat = lat + delta;
  const minLon = lon - delta;
  const maxLon = lon + delta;
  const bbox = `${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}

function osmMapHTML(lat, lon, className = 'map-frame') {
  return `<iframe class="${className}" src="${osmEmbedUrl(lat, lon)}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="OpenStreetMap"></iframe>`;
}

async function geocodeOsm(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { 'Accept-Language': currentLang === 'zh' ? 'zh-CN' : 'en' } });
    const data = await res.json();
    if (data && data.length) {
      return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
    }
  } catch (err) {
    console.warn('OSM geocode failed', err);
  }
  return null;
}

let lastMapCoords = null;

function injectOxfordMap() {
  const frame = document.getElementById('oxfordMapFrame');
  if (!frame) return;
  const coords = lastMapCoords || { lat: 51.7520, lon: -1.2577 };
  frame.innerHTML = osmMapHTML(coords.lat, coords.lon, 'map-frame');
}

function renderMapCard() {
  const container = document.getElementById('oxfordMapContainer');
  if (!container) return;
  container.innerHTML = `
    <p>${t('guide.map.intro')}</p>
    <div class="map-search">
      <input type="text" id="mapSearchInput" placeholder="${t('guide.map.searchPlaceholder')}" aria-label="${t('guide.map.searchPlaceholder')}">
      <button id="mapSearchBtn" type="button">${t('guide.map.searchButton')}</button>
    </div>
    <div id="oxfordMapFrame"></div>
  `;

  const input = document.getElementById('mapSearchInput');
  const btn = document.getElementById('mapSearchBtn');
  if (input && btn) {
    const run = () => {
      const q = input.value.trim();
      if (q) searchMap(q);
    };
    btn.addEventListener('click', run);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
  }

  injectOxfordMap();
}

async function searchMap(query) {
  const btn = document.getElementById('mapSearchBtn');
  const frame = document.getElementById('oxfordMapFrame');
  if (btn) btn.disabled = true;
  if (frame) frame.innerHTML = `<p class="status-msg">${currentLang === 'zh' ? '正在定位…' : 'Locating…'}</p>`;
  const coords = await geocodeOsm(query);
  if (btn) btn.disabled = false;
  if (coords) {
    lastMapCoords = coords;
    injectOxfordMap();
  } else if (frame) {
    frame.innerHTML = `<p class="status-msg">${t('guide.map.notFound')}</p>`;
  }
}

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + 'T00:00:00');
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return lang === 'zh' ? `${m}月${day}日` : `${d.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}`;
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = DAYS.map((day, idx) => {
    const dateText = formatDate(day.date, currentLang);
    const weekday = currentLang === 'zh' ? day.weekdayZh : day.weekdayEn;
    const title = currentLang === 'zh' ? day.titleZh : day.titleEn;
    const summary = currentLang === 'zh' ? day.summaryZh : day.summaryEn;
    const tag = currentLang === 'zh' ? day.tagZh : day.tagEn;
    const chips = day.items.slice(0, 2).map(i => currentLang === 'zh' ? i.textZh : i.textEn).join(' · ');
    return `
      <article class="day-card day-card--${day.type}" data-index="${idx}">
        <div class="day-card__top">
          <span class="day-card__date">${dateText} · ${weekday}</span>
          <span class="day-card__tag day-card__tag--${day.type}">${tag}</span>
        </div>
        <h3 class="day-card__title">${title}</h3>
        <p class="day-card__summary">${summary}</p>
        <div class="day-card__footer">
          <span class="day-card__chip">${chips}</span>
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.index, 10)));
  });
}

function renderGuideTiles() {
  const grid = document.getElementById('guideGrid');
  grid.innerHTML = GUIDE_TILES.map(tile => `
    <a href="#${tile.id}" class="guide-tile" data-tab="guide">
      <div class="guide-tile__icon">${tile.icon}</div>
      <div class="guide-tile__title">${currentLang === 'zh' ? tile.keyZh : tile.keyEn}</div>
    </a>
  `).join('');

  grid.querySelectorAll('.guide-tile').forEach(link => {
    link.addEventListener('click', e => {
      const tab = link.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  });
}

function openModal(idx) {
  const day = DAYS[idx];
  const dateText = formatDate(day.date, currentLang);
  const weekday = currentLang === 'zh' ? day.weekdayZh : day.weekdayEn;
  const title = currentLang === 'zh' ? day.titleZh : day.titleEn;
  const tag = currentLang === 'zh' ? day.tagZh : day.tagEn;
  const items = day.items.map(i => `
    <li class="modal__item">
      <div class="modal__item-time">${i.time}</div>
      <div class="modal__item-text">
        <div class="modal__item-title">${currentLang === 'zh' ? i.textZh : i.textEn}</div>
        ${i.noteZh ? `<div class="modal__item-note">${currentLang === 'zh' ? i.noteZh : i.noteEn}</div>` : ''}
      </div>
    </li>
  `).join('');
  const tips = currentLang === 'zh' ? day.tipsZh : day.tipsEn;
  const tipList = tips.map(tip => `<li>${tip}</li>`).join('');
  const links = (day.links || []).map(l => `
    <a href="${l.url}" target="_blank" rel="noopener">${currentLang === 'zh' ? l.labelZh : l.labelEn}</a>
  `).join('');

  document.getElementById('modalHero').innerHTML = `
    <h2>${title}</h2>
    <p>${dateText} · ${weekday}</p>
    <div class="tag-row">
      <span class="tag">${tag}</span>
      <span class="tag">${currentLang === 'zh' ? '第' : 'Day'} ${idx + 1}</span>
    </div>
  `;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal__section">
      <h4 class="modal__section-title">${currentLang === 'zh' ? '日程安排' : 'Schedule'}</h4>
      <ul class="modal__list">${items}</ul>
    </div>
    <div class="modal__section">
      <h4 class="modal__section-title">${currentLang === 'zh' ? '贴心提示' : 'Tips'}</h4>
      <div class="modal__tips"><ul>${tipList}</ul></div>
    </div>
    ${links ? `<div class="modal__section"><div class="modal__links">${links}</div></div>` : ''}
  `;

  const modal = document.getElementById('dayModal');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('dayModal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function switchTab(target) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('page--active'));
  document.getElementById('page-' + target).classList.add('page--active');
  document.querySelectorAll('.bottom-nav__item').forEach(btn => {
    btn.classList.toggle('bottom-nav__item--active', btn.dataset.target === target);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCountdown() {
  const now = new Date();
  const diff = DEPARTURE_DATE - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById('countdownDays').textContent = days > 0 ? days : 0;
}

async function init() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang') === 'en') currentLang = 'en';
  if (params.get('lang') === 'zh') currentLang = 'zh';
  renderText();
  renderTimeline();
  renderGuideTiles();
  renderMapCard();
  updateCountdown();
  initPlaceSearch();
  attachPlaceSearchButtons();

  // Bottom navigation
  document.querySelectorAll('.bottom-nav__item').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
  });

  // Quick links & guide tiles that need tab switching
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.addEventListener('click', e => {
      const tab = el.getAttribute('data-tab');
      const href = el.getAttribute('href');
      if (tab) {
        switchTab(tab);
        if (href && href.startsWith('#')) {
          setTimeout(() => {
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 120);
        }
        if (el.tagName.toLowerCase() === 'a') e.preventDefault();
      }
    });
  });

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    closeModal();
    closePlaceModal();
    renderText();
    renderTimeline();
    renderGuideTiles();
    renderMapCard();
    attachPlaceSearchButtons();
  });

  // Modal close
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.getElementById('dayModal').addEventListener('click', e => {
    if (e.target.id === 'dayModal') closeModal();
  });

  // Auto-open search from URL (useful for testing and sharing)
  const testSearch = params.get('search');
  if (testSearch) {
    setTimeout(() => openPlaceModal(testSearch), 300);
  }

  // Handle deep links on load
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    const page = hash === '#flight-notes' || hash === '#shenzhen' || hash === '#coach' || hash === '#local-transport' ? 'transport'
               : hash === '#accommodation' || hash === '#oxford-mustsee' || hash === '#oxford-map' || hash === '#day-trips' || hash === '#food' ? 'guide'
               : hash === '#documents' || hash === '#packing' || hash === '#contacts' ? 'notes'
               : 'home';
    switchTab(page);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 200);
  }
}

document.addEventListener('DOMContentLoaded', init);

/* ===== Place search integration ===== */

function attachPlaceSearchButtons() {
  document.querySelectorAll('.place-search-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const query = btn.getAttribute('data-query');
      openPlaceModal(query);
    });
  });
}

function openPlaceModal(prefillQuery = '') {
  const modal = document.getElementById('placeModal');
  const input = document.getElementById('placeSearchInput');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  input.value = prefillQuery;
  document.getElementById('placeResult').innerHTML = '';
  input.focus();
  if (prefillQuery) doPlaceSearch(prefillQuery);
}

function closePlaceModal() {
  const modal = document.getElementById('placeModal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderStars(rating) {
  const full = Math.round(rating || 0);
  return '⭐'.repeat(full) + '☆'.repeat(5 - full) + ` <span>${rating || '-'}/5</span>`;
}

function priceLabel(level) {
  if (!level) return '';
  const map = {
    'PRICE_LEVEL_FREE': currentLang === 'zh' ? '免费' : 'Free',
    'PRICE_LEVEL_INEXPENSIVE': '£',
    'PRICE_LEVEL_MODERATE': '££',
    'PRICE_LEVEL_EXPENSIVE': '£££',
    'PRICE_LEVEL_VERY_EXPENSIVE': '££££'
  };
  return map[level] || '';
}

function renderPlaceSkeleton() {
  return `
    <div class="place-card">
      <div class="place-card__gallery">
        <div class="skeleton skeleton--img"></div>
        <div class="skeleton skeleton--img"></div>
      </div>
      <div class="place-card__info">
        <div class="skeleton skeleton--title"></div>
        <div class="skeleton skeleton--line" style="width:80%"></div>
        <div class="skeleton skeleton--line" style="width:60%"></div>
      </div>
    </div>
  `;
}

function renderPlaceResult(data, coords = null) {
  const container = document.getElementById('placeResult');
  if (!data.ok) {
    container.innerHTML = `<div class="status-msg status-msg--error">${t('search.error')}<br><small>${data.error || ''}</small></div>`;
    return;
  }
  const place = data.place;
  if (!place) {
    container.innerHTML = `<div class="status-msg">${t('search.empty')}</div>`;
    return;
  }

  const name = place.displayName?.text || place.displayName || 'Unknown';
  const summary = place.editorialSummary?.text || '';
  const address = place.formattedAddress || '';
  const rating = place.rating;
  const ratingCount = place.userRatingCount || 0;
  const price = priceLabel(place.priceLevel);
  const website = place.websiteUri || '';
  const mapQuery = encodeURIComponent(address || name);
  const hours = place.regularOpeningHours;
  const openNow = hours?.openNow;
  const weekday = hours?.weekdayDescriptions || [];
  const photos = (place.photos || []).filter(u => typeof u === 'string' && u.startsWith('http'));

  const photosHtml = photos.length
    ? `<div class="place-card__gallery">${photos.map(url => `<img src="${url}" alt="${t('search.photoAlt')}" loading="lazy" onerror="this.style.display='none'">`).join('')}</div>`
    : '';

  const openBadge = openNow !== undefined
    ? `<span class="place-card__hours--${openNow ? 'open' : 'closed'}">${openNow ? t('search.openNow') : t('search.closed')}</span>`
    : '';

  const hoursHtml = weekday.length
    ? `<div class="place-card__hours"><strong>${t('search.hours')}：</strong>${openBadge}<br>${weekday.join('<br>')}</div>`
    : '';

  const reviews = (place.reviews || []).slice(0, 3);
  const reviewsHtml = reviews.length
    ? `<div class="place-card__reviews">
        <div class="place-card__reviews-title">${t('search.reviews')}</div>
        ${reviews.map(r => `
          <div class="place-card__review">
            <div class="place-card__review-author">${r.authorAttribution?.displayName || ''} · ${'⭐'.repeat(Math.round(r.rating || 0))}</div>
            ${r.text?.text || r.text || ''}
          </div>
        `).join('')}
       </div>`
    : '';

  const actions = [];
  if (address) actions.push(`<a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">${t('search.viewMap')}</a>`);
  if (website) actions.push(`<a href="${website}" target="_blank" rel="noopener">${t('search.viewWebsite')}</a>`);

  container.innerHTML = `
    <div class="place-card">
      ${photosHtml}
      <div class="place-card__info">
        <h3 class="place-card__name">${name}${price ? ` <span style="font-size:14px;color:var(--text-3)">${price}</span>` : ''}</h3>
        <div class="place-card__rating">${renderStars(rating)} <span style="color:var(--text-3);font-weight:500">(${ratingCount})</span></div>
        ${summary ? `<div class="place-card__summary">${summary}</div>` : ''}
        ${address ? `<div class="place-card__address">📍 ${address}</div>` : ''}
        ${coords ? osmMapHTML(coords.lat, coords.lon, 'place-card__map') : ''}
        ${hoursHtml}
        ${reviewsHtml}
        ${actions.length ? `<div class="place-card__actions">${actions.join('')}</div>` : ''}
      </div>
    </div>
  `;
}

async function fetchPlace(query) {
  const res = await fetch(`/api/places?query=${encodeURIComponent(query)}&lang=${currentLang}`);
  return res.json();
}

async function doPlaceSearch(query) {
  const container = document.getElementById('placeResult');
  container.innerHTML = renderPlaceSkeleton();
  try {
    const [data, coords] = await Promise.all([fetchPlace(query), geocodeOsm(query)]);
    if (coords) {
      lastMapCoords = coords;
      injectOxfordMap();
    }
    renderPlaceResult(data, coords);
  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="status-msg status-msg--error">${t('search.error')}</div>`;
  }
}

function initPlaceSearch() {
  document.getElementById('searchToggle').addEventListener('click', () => openPlaceModal());

  const input = document.getElementById('placeSearchInput');
  const btn = document.getElementById('placeSearchBtn');

  btn.addEventListener('click', () => {
    const q = input.value.trim();
    if (q) doPlaceSearch(q);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) doPlaceSearch(q);
    }
  });

  document.querySelectorAll('[data-close-place]').forEach(el => {
    el.addEventListener('click', closePlaceModal);
  });

  document.getElementById('placeModal').addEventListener('click', e => {
    if (e.target.id === 'placeModal') closePlaceModal();
  });

  attachPlaceSearchButtons();
}
