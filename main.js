function scramble(str1, str2) {
    let str2SetString = Array.from(new Set(str2)).join('')
    for (let i = 0; i < str2SetString.length; i++){
      const find = new RegExp(`[${str2.split('')[i]}]`, 'g')
      if (str1.match(find) == null || str1.match(find).length < str2.match(find).length)
        {
          return false
        }
    }
    return true
  }