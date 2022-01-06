module.exports = function toReadable (number) {
  let newNum = String(number).split('');
  let answer = [];
  let simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let decimals = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = ['hundred'];
  if(number >= 0 && number < 20) {
    for(let i = 0; i < 1; i++) {
      answer.push(simple[number]);
      return answer.join('');
    }
  }
  else if(number >= 20 && number < 100) {
    for(let j = 0; j < 1; j++) {
      if (newNum[1] === '0') {
        answer.push(decimals[newNum[0] - 2]);
        return answer.join('');
      }
      else {
        answer.push(decimals[newNum[0] - 2] + ' ' + simple[newNum[1]]);
        return answer.join('');
      }
    }
  }
  else if(number >= 100 && number < 1000) {
    for(let k = 0; k < 1; k++) {
      if (newNum[1] === '0' && newNum[2] > 0) {
        answer.push(simple[newNum[0]] + ' ' + hundred + ' ' + simple[newNum[2]]);
        return answer.join('');
      }
      else if (newNum[1] === '1') {
        answer.push(simple[newNum[0]] + ' ' + hundred + ' ' + simple[newNum[1] + newNum[2]]);
        return answer.join('');
      }
      else if (newNum[1] > 1 && newNum[2] != '0') {
        answer.push(simple[newNum[0]] + ' ' + hundred + ' ' + decimals[newNum[1] - 2] + ' ' + simple[newNum[2]]);
        return answer.join('');
      }
      else if (newNum[1] > 1 && newNum[1] != '0' && newNum[2] === '0') {
        answer.push(simple[newNum[0]] + ' ' + hundred + ' ' + decimals[newNum[1] - 2]);
        return answer.join('');
      }
      else if (newNum[1] === '0' && newNum[2] === '0') {
        answer.push(simple[newNum[0]] + ' ' + hundred);
        return answer.join('');
      }
    }
  }
}