// let arrEn = [
//   "`",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",
//   "0",  "-",  "=",  "Backspace",  "Tab",  "q",  "w",  "e",
//   "r",  "t",  "y",  "u",  "i",  "o",  "p",  "[",  "]",
//   "\\",  "Delete",  "Caps Lock",  "a",  "s",  "d",  "f",
//   "g",  "h",  "j",  "k",  "l",  ";",  "'",  "Enter",  "Shift",
//   "z",  "x",  "c",  "v",  "b",  "n",  "m",  ",",  ".",
//   "/",  "▲",  "Shift",  "Ctrl",  "Win",  "Alt",  " ",  "Alt",
//   "◄",  "▼",  "►",  "Ctrl"];

// const arrEnCapsLock = [
//   '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
//   'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
//   'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

// const arrEnShift = [
//   '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
//   'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
//   'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

// const arrEnCapsLockShift = [
//   '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
//   'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
//   'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

// const arrRu = [
//   'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
//   'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲;', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄;', '▼', '►', 'Ctrl'];

// const arrRuCapsLock = [
//   'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
//   'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
//   'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

// const arrRuShift = [
//   'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
//   'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
//   'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

// const arrRuCapsLockShift = [
//   'ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
//   'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift',
//   'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];


const container = document.createElement("div"),  
  textarea = document.createElement("textarea"),
  keyboard = document.createElement("div"),
  description = document.createElement("div"),
  language = document.createElement("div");

let keys = [
  "`",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",
  "0",  "-",  "=",  "Backspace",  "Tab",  "q",  "w",  "e",
  "r",  "t",  "y",  "u",  "i",  "o",  "p",  "[",  "]",
  "\\",  "Delete",  "Caps Lock",  "a",  "s",  "d",  "f",
  "g",  "h",  "j",  "k",  "l",  ";",  "'",  "Enter",  "Shift",
  "z",  "x",  "c",  "v",  "b",  "n",  "m",  ",",  ".",
  "/",  "▲",  "Shift",  "Ctrl",  "",  "Alt",  " ",  "Alt",
  "◄",  "▼",  "►",  "Ctrl",];

let keysUp = [
  "`",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",
  "0",  "-",  "=",  "Backspace",  "Tab",  "Q",  "W",  "E",
  "R",  "T",  "Y",  "U",  "I",  "O",  "P",  "[",  "]",  "\\",
  "Delete",  "Caps Lock",  "A",  "S",  "D",  "F",  "G",  "H",
  "J",  "K",  "L",  ";",  "'",  "Enter",  "Shift",  "Z",
  "X",  "C",  "V",  "B",  "N",  "M",  ",",  ".",  "/",
  "▲",  "Shift",  "Ctrl",  "",  "Alt",  " ",  "Alt",  "◄",
  "▼",  "►",  "Ctrl",
];

let keysShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'Ctrl', '', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'
];

let keysRu = [
  "ё",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",
  "0",  "-",  "=",  "Backspace",  "Tab",  "й",  "ц",  "у",
  "к",  "е",  "н",  "г",  "ш",  "щ",  "з",  "х",  "ъ",  "\\",
  "Delete",  "Caps Lock",  "ф",  "ы",  "в",  "а",  "п",
  "р",  "о",  "л",  "д",  "ж",  'э',  "Enter",  "Shift",
  "я",  "ч",  "с",  "м",  "и",  "т",  "ь",  "б",  "ю",
  ".",  "▲",  "Shift",  "Ctrl",  "",  "Alt",  " ",
  "Alt",  "◄",  "▼",  "►",  "Ctrl",
];

function init() {  
  container.classList.add("container");  
  textarea.classList.add("textarea");  
  keyboard.classList.add("keyboard");
  for (let i = 0; i < keys.length; i++) {
    let key = document.createElement("div");
    key.classList.add("key");
    key.textContent = keys[i];
    if (keys[i] === "Backspace") {
      key.classList.add("backspace");
      key.classList.add('no-caps')
    }
    if (keys[i] === "Tab") {
      key.classList.add("tab");
      key.classList.add('no-caps')
    }
    if (keys[i] === "Delete") {
      key.classList.add("del");
      key.classList.add('no-caps')
    }
    if (keys[i] === "Caps Lock") {
      key.classList.add("caps-lock");
      key.classList.add('no-caps')
    }
    if (keys[i] === "Enter") {
      key.classList.add("enter");
      key.classList.add('no-caps')
    }
    if (keys[i] === "Shift") {
      key.textContent = "Shift";
      key.classList.add('no-caps')
    }
    if (keys[i] === "▲") {
      key.classList.add("arrow-up");
    }
    if (keys[i] === "◄") {
      key.classList.add("arrow-left");
    }
    if (keys[i] === "▼") {
      key.classList.add("arrow-down");
    }
    if (keys[i] === "►") {
      key.classList.add("arrow-right");
    }
    if (keys[i] === "Ctrl") {
      key.textContent = "Ctrl";
    }
    if (keys[i] === "") {
      key.classList.add("win");
    }
    if (keys[i] === "Alt") {
      key.textContent = "Alt";
      key.classList.add('no-caps')
    }
    if (keys[i] === " ") {
      key.classList.add("space");
      key.textContent = " ";      
    }
    keyboard.appendChild(key);
  }
  let keysChilds = keyboard.children;
  for (let i = 0; i < keysChilds.length; i++) {    
    keysChilds[42].classList.add("shift-left");
    keysChilds[54].classList.add("shift-right");
    keysChilds[55].classList.add("ctrl-left");    
    keysChilds[63].classList.add("ctrl-right");
    keysChilds[57].classList.add("alt-left");  
    keysChilds[59].classList.add("alt-right");    
  }
  description.classList.add("description");
  description.textContent = "Клавиатура создана в операционной системе Windows";
  language.classList.add("language");
  language.textContent = "Для переключения языка комбинация: левые Shift + Alt";  
  container.appendChild(textarea);
  container.appendChild(keyboard);
  container.appendChild(description);
  container.appendChild(language);  
  
  document.body.appendChild(container);
}

window.addEventListener("DOMContentLoaded", function () {
  init();
  
});
let keysChilds = keyboard.children

//==========================================keypress========================================
 
window.addEventListener("keydown", (e) => {
 let position = textarea.selectionStart;
 const startPosition = textarea.value.slice(0, position);
 const endPosition = textarea.value.slice(position);  
  for (let i = 0; i < keysChilds.length; i++) {
    if(e.code == "ShiftLeft" && e.code == "AltLeft"){
      keysChilds[i].innerHTML = keysRu[i];
    }
    if(e.code == "Backspace" &&
    keysChilds[i].classList.contains("backspace")){      
      keysChilds[i].classList.add('active');
      if (position === 0) {
      } else {
        textarea.value = textarea.value.slice(0, position - 1) + endPosition;
        position -= 1;
      }
    }
    if(e.code == "Tab" &&
    keysChilds[i].classList.contains("tab")){
      e.preventDefault()
      keysChilds[i].classList.add('active');
      textarea.value += `${startPosition}    ${endPosition}`;
      position += 4;
    }
    if(e.code == "Delete" &&
    keysChilds[i].classList.contains("del")){      
      keysChilds[i].classList.add('active');
      textarea.value = startPosition + textarea.value.slice(position + 1);

    }
    if(e.code == "Enter" &&
    keysChilds[i].classList.contains("enter")){
      keysChilds[i].classList.add('active');
      textarea.value += `${startPosition} \n ${endPosition}`;
      position += 1;
    }
    if (
      e.code == "ControlLeft" &&
      keysChilds[i].classList.contains("ctrl-left")
    ) {
      keysChilds[i].classList.add("active");
    }
    if (
      e.code == "ControlRight" &&
      keysChilds[i].classList.contains("ctrl-right")
    ) {
      keysChilds[i].classList.add("active");
    }
    if (   e.code == "ShiftLeft" && keysChilds[i].classList.contains("shift-left")) {
      keysChilds[i].classList.add("active");      
        for (let i = 0; i < keysChilds.length; i++) {
            keysChilds[i].innerHTML = keysShift[i];            
          }     
    }
    if (
      e.code == "ShiftRight" && keysChilds[i].classList.contains("shift-right")) {
      keysChilds[i].classList.add("active");      
      for (let i = 0; i < keysChilds.length; i++) {
        keysChilds[i].innerHTML = keysShift[i];        
      }
    }
    if (e.code == "ArrowUp" && keysChilds[i].classList.contains("arrow-up")) {
      keysChilds[i].classList.add("active");
      textarea.value+= "▲";
      position += 1;
    }
    if (
      e.code == "ArrowDown" &&
      keysChilds[i].classList.contains("arrow-down")
    ) {
      keysChilds[i].classList.add("active");
      textarea.value += "▼";
      position += 1;
    }
    if (
      e.code == "ArrowLeft" &&
      keysChilds[i].classList.contains("arrow-left")
    ) {
      keysChilds[i].classList.add("active");
      textarea.value += "◄";
      position += 1;
    }
    if (
      e.code == "ArrowRight" &&
      keysChilds[i].classList.contains("arrow-right")
    ) {
      keysChilds[i].classList.add("active");
      textarea.value += "►";
      position += 1;
    }
    if (e.code == "CapsLock" && keysChilds[i].classList.contains("caps-lock")) {
      if(keysChilds[i].classList.contains('active')){
        keysChilds[i].classList.remove("active");
        for (let i = 0; i < keysChilds.length; i++) {
            keysChilds[i].innerHTML = keys[i];            
          }
      }else{
        keysChilds[i].classList.add("active")
      for (let i = 0; i < keysChilds.length; i++) {
        keysChilds[i].innerHTML = keysUp[i];
        
      }
    }
    }
    if (e.code == "MetaLeft" && keysChilds[i].classList.contains("win")) {      
      keysChilds[i].classList.add("active");
      e.preventDefault();
    }
    if (e.code == 'AltLeft' && keysChilds[i].classList.contains('alt-left')) {
        keysChilds[i].classList.add('active');
        e.preventDefault();
    }
    if (e.code == 'AltRight' && keysChilds[i].classList.contains('alt-right')) {
        keysChilds[i].classList.add('active');
        e.preventDefault();
    }
    if (e.code == "Space" && keysChilds[i].innerHTML == " ") {
      keysChilds[i].classList.add("active");
      textarea.value += " ";
      position += 1;
    }
    if (e.key == keysChilds[i].innerHTML  && e.key !== "Shift" && e.key !== "Alt"
    && e.key !== "Backspace"
    && e.key !== "Delete" 
    && e.key !== "Enter"
    && e.key !== "Tab") {
      keysChilds[i].classList.add("active");
      textarea.value += e.key;
      position += 1;
    }    
  }
  textarea.setSelectionRange(position, position);
});
window.addEventListener("keyup", (e) => {
  for (let i = 0; i < keysChilds.length; i++) {
    e.preventDefault();
    if(e.code == "Enter" &&
    keysChilds[i].classList.contains("enter")){
      keysChilds[i].classList.remove('active');      
    }
    if (e.key == "Shift") {
        keysChilds[i].classList.remove("active");        
          for (let i = 0; i < keysChilds.length; i++) {
            keysChilds[i].innerHTML = keys[i];
          }
      }    
    if (e.code == "Space" && keysChilds[i].innerHTML == " ") {
      keysChilds[i].classList.remove("active");
    }
    if (
      e.code == "ControlLeft" &&
      keysChilds[i].classList.contains("ctrl-left")
    ) {
      keysChilds[i].classList.remove("active");
    }
    if (
      e.code == "ControlRight" &&
      keysChilds[i].classList.contains("ctrl-right")
    ) {
      keysChilds[i].classList.remove("active");
    }
    if (e.code == "ArrowUp" && keysChilds[i].classList.contains("arrow-up")) {
      keysChilds[i].classList.remove("active");
    }
    if (
      e.code == "ArrowDown" &&
      keysChilds[i].classList.contains("arrow-down")
    ) {
      keysChilds[i].classList.remove("active");
    }
    if (
      e.code == "ArrowLeft" &&
      keysChilds[i].classList.contains("arrow-left")
    ) {
      keysChilds[i].classList.remove("active");
    }
    if (
      e.code == "ArrowRight" &&
      keysChilds[i].classList.contains("arrow-right")
    ) {
      keysChilds[i].classList.remove("active");
    }    
    if (e.code == "MetaLeft" && keysChilds[i].classList.contains("win")) {
      e.preventDefault();
      keysChilds[i].classList.remove("active");      
    }
    if (e.code == 'AltLeft' && keysChilds[i].classList.contains('alt-left')) {
        keysChilds[i].classList.remove('active');
        e.preventDefault();
    }
    if (e.code == 'AltRight' && keysChilds[i].classList.contains('alt-right')) {
        keysChilds[i].classList.remove('active');
        e.preventDefault();
    }
    if (e.key == keysChilds[i].innerHTML) {
      keysChilds[i].classList.remove("active");
      e.preventDefault();
    }
  }
});

//=============================================click=======================

window.addEventListener("click", (e) => {
  let position = textarea.selectionStart;
 const startPosition = textarea.value.slice(0, position);
 const endPosition = textarea.value.slice(position); 
 
   if (
    e.target.classList.contains("key") && e.target.innerHTML == "Delete"  ) {
      textarea.value = startPosition + textarea.value.slice(position + 1);
    
  }else if (e.target.classList.contains("key") && e.target.innerHTML == "Tab") {
    textarea.value += `${startPosition}    ${endPosition}`;
    position += 4;
    
  } else if (
    e.target.classList.contains("key") && e.target.innerHTML == "Ctrl" ) {
    textarea.innerHTML += "";
  } else if (
    e.target.classList.contains("key") &&  e.target.innerHTML == "Alt" ) {
    textarea.innerHTML += "";
  } else if (e.target.classList.contains("key") && e.target.innerHTML == " ") {
    textarea.value += `${startPosition} ${endPosition}`;
      position += 1;
  } else if (
    e.target.classList.contains("key") && e.target.innerHTML == "Backspace" ) {
    if (position === 0) {
      } else {
        textarea.value = textarea.value.slice(0, position - 1) + endPosition;
        position -= 1;
      }
   
  } else if (e.target.classList.contains("key") && e.target.innerHTML == "") {
    textarea.value += "";
  } else if (
    e.target.classList.contains("key") && e.target.innerHTML == "Enter"  ) {
      textarea.value = `${startPosition}\n${endPosition}`;
      position += 1;
  } else if (
    e.target.classList.contains("key") && e.target.innerHTML == "Shift" ) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      for (let i = 0; i < keysChilds.length; i++) {
        keysChilds[i].innerHTML = keys[i];
      }
    } else {
      for (let i = 0; i < keysChilds.length; i++) {
        keysChilds[i].innerHTML = keysShift[i];
      }
      e.target.classList.add("active");
    }
  } else if (
    e.target.classList.contains("key") && e.target.innerHTML == "Caps Lock" ) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      for (let i = 0; i < keysChilds.length; i++) {
        keysChilds[i].innerHTML = keys[i];
      }
    } else {
      for (let i = 0; i < keysChilds.length; i++) {
        keysChilds[i].innerHTML = keysUp[i];
      }
      e.target.classList.add("active");
    }
  } else if (e.target.classList.contains("key") &&
  !(e.target.classList.contains("bakspace")) &&
  !(e.target.classList.contains("delete")) ) {
    textarea.value += e.target.innerText;
    position++;
  }
  
  textarea.setSelectionRange(position, position);
});





