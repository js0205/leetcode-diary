const chineseToNumber  = (str:string) => {
  const n = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const d = ['十', '百', '千', '万', '亿'];
  if(str.length === 1){
      return n.indexOf(str);
  }
  if(str[0] === '十'){
      return 10 + n.indexOf(str[1]);
  }
  let result = 0;
  let digit = 0;
  let nums = str.split('');
  for(const i of nums){
      if(n.includes(i)){
          digit = n.indexOf(i);
      }else if(d.includes(i)){
          if(i === '十'){
            result += digit * 10;
            digit = 0;
          }else if(i === '百'){
            result += digit * 100;
            digit = 0;
          }else if(i === '千'){
            result += digit * 1000;
            digit = 0;
          }else if(i === '万'){
            result += digit * 10000;
            digit = 0;
          }else if(i === '亿'){
            result +=digit * 100000000;
            digit = 0;
          }
      }
  }
  result += digit;
  return result;
}

export default chineseToNumber;
