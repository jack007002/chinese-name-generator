// 常用取名字库
const nameCharacters = {
  male: {
    classic: ['轩', '宇', '泽', '瑞', '博', '文', '明', '浩', '然', '睿', '哲', '翰', '墨', '云', '帆'],
    modern: ['晨', '阳', '辰', '宸', '昊', '皓', '俊', '杰', '凯', '乐', '悦', '欣', '逸', '轩', '宇'],
    elegant: ['书', '墨', '文', '彦', '儒', '贤', '德', '仁', '义', '礼', '智', '信', '诚', '谦', '和']
  },
  female: {
    classic: ['婉', '雅', '静', '淑', '慧', '琳', '瑶', '璇', '颖', '诗', '梦', '涵', '萱', '菲', '蕊'],
    modern: ['欣', '悦', '晴', '萌', '琪', '彤', '薇', '娜', '莉', '佳', '怡', '可', '馨', '雨', '晨'],
    elegant: ['书', '画', '琴', '棋', '诗', '词', '雅', '韵', '兰', '竹', '梅', '菊', '荷', '莲', '芷']
  },
  neutral: ['安', '乐', '悦', '欣', '嘉', '瑞', '祥', '和', '平', '宁', '泰', '康', '福', '禄', '寿']
}

// 拼音映射（简化版）
const pinyinMap = {
  '轩': 'xuān', '宇': 'yǔ', '泽': 'zé', '瑞': 'ruì', '博': 'bó',
  '文': 'wén', '明': 'míng', '浩': 'hào', '然': 'rán', '睿': 'ruì',
  '哲': 'zhé', '翰': 'hàn', '墨': 'mò', '云': 'yún', '帆': 'fān',
  '晨': 'chén', '阳': 'yáng', '辰': 'chén', '宸': 'chén', '昊': 'hào',
  '皓': 'hào', '俊': 'jùn', '杰': 'jié', '凯': 'kǎi', '乐': 'lè',
  '悦': 'yuè', '欣': 'xīn', '逸': 'yì', '书': 'shū', '彦': 'yàn',
  '儒': 'rú', '贤': 'xián', '德': 'dé', '仁': 'rén', '义': 'yì',
  '礼': 'lǐ', '智': 'zhì', '信': 'xìn', '诚': 'chéng', '谦': 'qiān',
  '和': 'hé', '婉': 'wǎn', '雅': 'yǎ', '静': 'jìng', '淑': 'shū',
  '慧': 'huì', '琳': 'lín', '瑶': 'yáo', '璇': 'xuán', '颖': 'yǐng',
  '诗': 'shī', '梦': 'mèng', '涵': 'hán', '萱': 'xuān', '菲': 'fēi',
  '蕊': 'ruǐ', '晴': 'qíng', '萌': 'méng', '琪': 'qí', '彤': 'tóng',
  '薇': 'wēi', '娜': 'nà', '莉': 'lì', '佳': 'jiā', '怡': 'yí',
  '可': 'kě', '馨': 'xīn', '雨': 'yǔ', '画': 'huà', '琴': 'qín',
  '棋': 'qí', '词': 'cí', '韵': 'yùn', '兰': 'lán', '竹': 'zhú',
  '梅': 'méi', '菊': 'jú', '荷': 'hé', '莲': 'lián', '芷': 'zhǐ',
  '安': 'ān', '嘉': 'jiā', '祥': 'xiáng', '平': 'píng', '宁': 'níng',
  '泰': 'tài', '康': 'kāng', '福': 'fú', '禄': 'lù', '寿': 'shòu'
}

// 字义解释
const meaningMap = {
  '轩': '高大、气宇轩昂', '宇': '天地宇宙、气度不凡', '泽': '恩泽、润泽',
  '瑞': '吉祥、祥瑞', '博': '博学、宽广', '文': '文采、文雅',
  '明': '光明、明亮', '浩': '浩大、广阔', '然': '自然、坦然',
  '睿': '睿智、聪慧', '哲': '哲理、智慧', '翰': '文翰、书法',
  '墨': '笔墨、文采', '云': '云彩、高远', '帆': '帆船、远航',
  '晨': '早晨、朝气', '阳': '阳光、温暖', '辰': '时辰、星辰',
  '宸': '帝王居所、尊贵', '昊': '广大无边', '皓': '洁白、明亮',
  '俊': '俊秀、才智出众', '杰': '杰出、卓越', '凯': '凯旋、胜利',
  '乐': '快乐、欢乐', '悦': '喜悦、愉快', '欣': '欣喜、欣欣向荣',
  '逸': '安逸、超凡脱俗', '书': '书籍、学识', '彦': '有才学的人',
  '儒': '儒雅、学者', '贤': '贤德、才能', '德': '品德、道德',
  '仁': '仁爱、仁慈', '义': '正义、情义', '礼': '礼仪、礼貌',
  '智': '智慧、聪明', '信': '诚信、信任', '诚': '诚实、真诚',
  '谦': '谦虚、谦逊', '和': '和谐、温和', '婉': '温婉、柔美',
  '雅': '优雅、高雅', '静': '安静、文静', '淑': '淑女、贤淑',
  '慧': '智慧、聪慧', '琳': '美玉', '瑶': '美玉、珍贵',
  '璇': '美玉', '颖': '聪颖、才华', '诗': '诗意、文雅',
  '梦': '梦想、美好', '涵': '涵养、包容', '萱': '忘忧草、快乐',
  '菲': '芬芳、花草茂盛', '蕊': '花蕊、精华', '晴': '晴朗、开朗',
  '萌': '萌芽、可爱', '琪': '美玉', '彤': '红色、朝气',
  '薇': '蔷薇、美丽', '娜': '婀娜、优美', '莉': '茉莉、清香',
  '佳': '美好、优秀', '怡': '怡然、愉快', '可': '可爱、善良',
  '馨': '馨香、温馨', '雨': '雨水、滋润', '画': '绘画、艺术',
  '琴': '琴棋书画', '棋': '棋艺、智慧', '词': '诗词、文采',
  '韵': '韵味、风韵', '兰': '兰花、高雅', '竹': '竹子、气节',
  '梅': '梅花、坚韧', '菊': '菊花、高洁', '荷': '荷花、清雅',
  '莲': '莲花、纯洁', '芷': '香草、芬芳', '安': '平安、安宁',
  '嘉': '美好、嘉奖', '祥': '吉祥、祥和', '平': '平安、平和',
  '宁': '安宁、宁静', '泰': '泰然、安泰', '康': '健康、安康',
  '福': '幸福、福气', '禄': '福禄、俸禄', '寿': '长寿、寿命'
}

// 五行属性
const wuxingMap = {
  '金': ['锐', '钢', '铭', '鑫', '瑞', '睿'],
  '木': ['林', '森', '柏', '桐', '梓', '彦', '萱', '菲', '蕊', '兰', '竹', '梅', '菊', '荷', '莲', '芷'],
  '水': ['海', '江', '涛', '泽', '浩', '涵', '雨'],
  '火': ['炎', '焱', '煜', '烨', '阳', '晨', '明', '昊', '皓', '晴', '彤'],
  '土': ['坤', '培', '城', '堃', '宇', '轩', '宸', '安', '宁']
}

// 生成名字
export function generateNames(userInfo) {
  const { surname, gender, nameLength, style, avoidWords } = userInfo
  const names = []
  const avoidChars = avoidWords ? avoidWords.split('') : []

  // 确定使用的字库
  let charPool = []
  const genderKey = gender === 'male' ? 'male' : gender === 'female' ? 'female' : 'neutral'

  if (style && style.length > 0) {
    style.forEach(s => {
      if (genderKey === 'neutral') {
        charPool = [...charPool, ...nameCharacters.neutral]
      } else {
        charPool = [...charPool, ...(nameCharacters[genderKey][s] || [])]
      }
    })
  } else {
    // 默认使用所有风格
    if (genderKey === 'neutral') {
      charPool = nameCharacters.neutral
    } else {
      Object.values(nameCharacters[genderKey]).forEach(chars => {
        charPool = [...charPool, ...chars]
      })
    }
  }

  // 去重并过滤避讳字
  charPool = [...new Set(charPool)].filter(char => !avoidChars.includes(char))

  // 生成名字
  const count = 15
  const lengths = nameLength === 'all' ? [1, 2] : [parseInt(nameLength)]

  for (let i = 0; i < count; i++) {
    const len = lengths[Math.floor(Math.random() * lengths.length)]
    let name = ''

    for (let j = 0; j < len; j++) {
      const char = charPool[Math.floor(Math.random() * charPool.length)]
      name += char
    }

    const fullName = surname + name
    const pinyin = getPinyin(fullName)
    const score = calculateScore(fullName)
    const characters = name.split('').map(char => ({
      char,
      meaning: meaningMap[char] || '美好寓意'
    }))

    names.push({
      fullName,
      name,
      pinyin,
      score,
      characters,
      wuxing: getWuxing(name),
      rhythm: '音韵和谐',
      origin: '精心挑选'
    })
  }

  // 按分数排序
  return names.sort((a, b) => b.score - a.score)
}

// 获取拼音
function getPinyin(name) {
  return name.split('').map(char => pinyinMap[char] || char).join(' ')
}

// 计算评分
function calculateScore(name) {
  // 简化的评分算法
  const baseScore = 75
  const randomBonus = Math.floor(Math.random() * 20)
  return Math.min(baseScore + randomBonus, 99)
}

// 获取五行
function getWuxing(name) {
  const wuxingList = []
  for (const [element, chars] of Object.entries(wuxingMap)) {
    for (const char of name) {
      if (chars.includes(char)) {
        wuxingList.push(element)
      }
    }
  }
  return wuxingList.length > 0 ? wuxingList.join('、') : '五行平衡'
}

// 测试名字
export function testName(name) {
  const score = calculateScore(name)
  const rhythm = 75 + Math.floor(Math.random() * 20)
  const meaning = 75 + Math.floor(Math.random() * 20)
  const wuxing = 75 + Math.floor(Math.random() * 20)

  let description = ''
  if (score >= 90) {
    description = '非常优秀的名字！'
  } else if (score >= 80) {
    description = '很好的名字！'
  } else if (score >= 70) {
    description = '不错的名字！'
  } else {
    description = '还可以的名字'
  }

  return {
    score,
    rhythm,
    meaning,
    wuxing,
    description
  }
}
