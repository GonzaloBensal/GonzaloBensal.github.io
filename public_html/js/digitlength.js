let switchEmojis = (valor) => {
  switch(valor){
    case 0:
        emoji = " 🙄";
        break;
    case 1:
      emoji = " 😆";
      break;
    case 2:
      emoji = " 😂";
      break;
    case 3:
      emoji = " 😅";
      break;
    case 4:
      emoji = " 🙂";
      break;
    case 5:
      emoji = " 😐";
      break;
    case 6:
      emoji = " 😮";
      break;
    case 7:
      emoji = " 😲";         
      break;
    default:
      emoji = " 😵";
    }
  return emoji;
};

let digit_s = (val) => {
// defines if it's digit or digits
  return val > 1 || val === 0 ? " digits" : " digit";
};

let digitor = (valor, contador) => {
// bug-patch for main program. 
// Main program: when its value is 0, returns length = 0
// which is incorrect, this function fixes it
	return valor.value =='0' ? " 1" + digit_s(1) : valor.value === null ? " 0" + digit_s(0) : contador + digit_s(contador);
};

let digitLength = (valor) => {
  let contador = 0;
  let res = Math.abs(valor.value);
  while(res >= 1) {
    res = res/10;
    contador++;
  };
	document.getElementById("resultado").innerHTML = "Number " + valor.value + " has " + digitor(valor, contador) + switchEmojis(contador);
};