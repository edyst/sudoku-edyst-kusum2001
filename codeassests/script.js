const difficulties = {
    easyLevel: [
      [0, 0, 0, 0, 3, 0, 0, 5, 7],
      [0, 0, 0, 2, 0, 4, 0, 0, 0],
      [7, 0, 3, 0, 9, 1, 6, 0, 0],
      [0, 9, 5, 0, 0, 3, 8, 0, 0], 
      [0, 2, 0, 6, 5, 0, 7, 0, 3], 
      [0, 7, 0, 0, 0, 2, 0, 0, 4], 
      [6, 0, 0, 9, 0, 0, 0, 0, 5], 
      [8, 5, 0, 0, 0, 7, 0, 0, 0], 
      [0, 0, 1, 0, 0, 0, 0, 0, 0], 
    ],
    mediumLevel: [
      [1, 0, 0, 0, 0, 2, 0, 7, 0], 
      [9, 0, 0, 5, 0, 0, 0, 0, 0],
      [3, 0, 5, 0, 0, 0, 0, 1, 0], 
      [0, 0, 0, 8, 0, 0, 0, 0, 0], 
      [0, 0, 2, 0, 0, 0, 1, 0, 0],
      [0, 0, 6, 9, 4, 7, 8, 0, 0],
      [0, 0, 0, 0, 9, 0, 4, 0, 5], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 6, 0, 0, 0, 0, 7], 
    ],
    hardLevel: [
      [4, 0, 0, 0, 6, 0, 0, 0, 2], 
      [0, 0, 2, 7, 0, 0, 5, 0, 0], 
      [0, 6, 0, 1, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 1, 2, 0, 0, 0], 
      [0, 7, 0, 0, 4, 0, 0, 1, 0],
      [0, 0, 6, 0, 0, 0, 8, 0, 0], 
      [8, 0, 5, 2, 9, 0, 0, 0, 0], 
      [0, 0, 7, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 8, 0, 6, 0], 
    ],
  };
  
  const everyboxgroup = {
    "00": ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    "01": ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    "02": ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    10: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    11: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    12: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    20: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    21: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    22: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    "03": ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    "04": ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    "05": ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    13: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    14: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    15: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    23: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    24: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    25: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    "06": ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    "07": ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    "08": ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    16: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    17: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    18: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    26: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    27: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    28: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    30: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    31: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    32: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    40: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    41: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    42: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    50: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    51: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    52: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    33: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    34: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    35: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    43: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    44: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    45: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    53: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    54: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    55: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    36: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    37: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    38: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    46: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    47: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    48: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    56: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    57: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    58: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    60: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    61: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    62: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    70: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    71: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    72: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    80: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    81: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    82: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    63: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    64: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    65: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    73: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    74: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    75: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    83: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    84: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    85: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    66: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    67: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    68: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    76: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    77: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    78: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    86: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    87: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
    88: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  };
  
  var easy = document.querySelector("#easy");
  var medium = document.querySelector("#medium");
  var hard = document.querySelector("#hard");
  var backColor = "rgb(235,235,228)";
  var onFocus_color = "lightblue";
  var forChangelevel = "easy";
  var uservalue = null;
  window.onload = () => {
    easy.focus();
    for (let a = 0; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        if (difficulties.easyLevel[a][b] !== 0) {
          var ele = document.querySelector(`#c${a}${b}`);
          ele.disabled = true;
          ele.style.background = "rgb(235,235,228)";
          ele.value = difficulties.easyLevel[a][b];
        }
        if (!document.querySelector(`#c${a}${b}`).disabled) {
          document.querySelector(`#c${a}${b}`).removeAttribute("style");
          document.querySelector(`#c${a}${b}`).classList.add("hoverstyle");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onfocus", "startFocus(this);");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onblur", "startBlur(this);");
        }
      }
    }
    forChangelevel = "easy";
  };
  
  const lastboardmustbecleared = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        var for_remove = document.querySelector(`#c${i}${j}`);
        for_remove.disabled = false;
        for_remove.value = "";
        for_remove.style.background = "#fff";
        if (for_remove.getAttribute("class")) {
          for_remove.classList.remove("hoverstyle");
        }
        if (
          for_remove.getAttribute("onfocus") &&
          for_remove.getAttribute("onblur")
        ) {
          for_remove.removeAttribute("onfocus");
          for_remove.removeAttribute("onblur");
        }
      }
    }
  };
  easy.addEventListener("click", () => {
    easy.focus();
    lastboardmustbecleared();
    for (let a = 0; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        if (difficulties.easyLevel[a][b] !== 0) {
          var ele = document.querySelector(`#c${a}${b}`);
          ele.disabled = true;
          ele.style.background = "rgb(235,235,228)";
          ele.value = difficulties.easyLevel[a][b];
        }
        if (!document.querySelector(`#c${a}${b}`).disabled) {
          document.querySelector(`#c${a}${b}`).removeAttribute("style");
          document.querySelector(`#c${a}${b}`).classList.add("hoverstyle");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onfocus", "startFocus(this);");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onblur", "startBlur(this);");
        }
      }
    }
    forChangelevel = "easy";
  });
  
  medium.addEventListener("click", () => {
    medium.focus();
    lastboardmustbecleared();
    for (let a = 0; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        if (difficulties.mediumLevel[a][b] !== 0) {
          var ele = document.querySelector(`#c${a}${b}`);
          ele.disabled = true;
          ele.style.background = "rgb(235,235,228)";
          ele.value = difficulties.mediumLevel[a][b];
        }
        if (!document.querySelector(`#c${a}${b}`).disabled) {
          document.querySelector(`#c${a}${b}`).removeAttribute("style");
          document.querySelector(`#c${a}${b}`).classList.add("hoverstyle");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onfocus", "startFocus(this);");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onblur", "startBlur(this);");
        }
      }
    }
    forChangelevel = "medium";
  });
  hard.addEventListener("click", () => {
    lastboardmustbecleared();
    hard.focus();
    for (let a = 0; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        if (difficulties.hardLevel[a][b] !== 0) {
          var ele = document.querySelector(`#c${a}${b}`);
          ele.disabled = true;
          ele.style.background = "rgb(235,235,228)";
          ele.value = difficulties.hardLevel[a][b];
        }
        if (!document.querySelector(`#c${a}${b}`).disabled) {
          document.querySelector(`#c${a}${b}`).style.background = "#fff";
          document.querySelector(`#c${a}${b}`).classList.add("hoverstyle");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onfocus", "startFocus(this);");
          document.querySelector(`#c${a}${b}`)
            .setAttribute("onblur", "startBlur(this);");
        }
      }
    }
    forChangelevel = "hard";
  });
  function startFocus(e) {
    e.style.background = "rgb(187,222,251)";
    let highlighrrow = e.id.charAt(1);
    let highlighrrowBack = parseInt(highlighrrow);
    let highlighrrowForward = parseInt(highlighrrow);
    for (let i = highlighrrowForward; i < 9; i++) {
      if (!document.querySelector(`#c${i}${e.id.charAt(2)}`).disabled)
        document.querySelector(`#c${i}${e.id.charAt(2)}`).style.background =
          "rgb(226,231,237)";
    }
    for (let j = highlighrrowBack; j >= 0; j--) {
      if (!document.querySelector(`#c${j}${e.id.charAt(2)}`).disabled)
        document.querySelector(`#c${j}${e.id.charAt(2)}`).style.background =
          "rgb(226,231,237)";
    }
   
    let columnhighlighter = e.id.charAt(2);
    let colFocusForward = parseInt(columnhighlighter);
    let columnhighlighterBack = parseInt(columnhighlighter);
    for (let m = colFocusForward; m < 9; m++) {
      if (!document.querySelector(`#c${e.id.charAt(1)}${m}`).disabled)
        document.querySelector(`#c${e.id.charAt(1)}${m}`).style.background =
          "rgb(226,231,237)";
    }
    for (let n = columnhighlighterBack; n >= 0; n--) {
      if (!document.querySelector(`#c${e.id.charAt(1)}${n}`).disabled) {
        document.querySelector(`#c${e.id.charAt(1)}${n}`).style.background =
          "rgb(226,231,237)";
      }
    }
    for (let i = 0; i < everyboxgroup[e.id.slice(1, 3)].length; i++) {
      document.querySelector(`#c${everyboxgroup[e.id.slice(1, 3)][i]}`).style.background =
        "rgb(226,231,237)";
    }
    for (let e = 0; e < 9; e++) {
      for (let f = 0; f < 9; f++) {
        if (forChangelevel === "easy") {
          if (difficulties.easyLevel[e][f] !== 0)
            document.querySelector(`#c${e}${f}`).style.background =
              backColor;
        } else if (forChangelevel === "medium") {
          if (difficulties.mediumLevel[e][f] !== 0)
            document.querySelector(`#c${e}${f}`).style.background =
              backColor;
        } else if (forChangelevel === "hard") {
          if (difficulties.hardLevel[e][f] !== 0)
            document.querySelector(`#c${e}${f}`).style.background =
              backColor;
        }
      }
    }
    e.style.background = "rgb(187,222,251)";
    e.addEventListener("keypress", (event) => {
      uservalue = event.key;
      for (let c = 0; c < 9; c++) {
        for (let d = 0; d < 9; d++) {
          if (forChangelevel === "easy") {
            if (difficulties.easyLevel[c][d] === 0)
              document.querySelector(`#c${c}${d}`).style.background = "#fff";
          } else if (forChangelevel === "medium") {
            if (difficulties.mediumLevel[c][d] === 0)
              document.querySelector(`#c${c}${d}`).style.background = "#fff";
          } else if (forChangelevel === "hard") {
            if (difficulties.hardLevel[c][d] === 0)
              document.querySelector(`#c${c}${d}`).style.background = "#fff";
          }
        }
      }  
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (document.querySelector(`#c${i}${j}`).value === uservalue) {
            document.querySelector(`#c${i}${j}`).style.background = "lightblue";
          }
        }
      }
      let rowvalidation = e.id.charAt(1);
      let rowback = parseInt(rowvalidation);
      let rowfor = parseInt(rowvalidation);
      for (let i = rowfor; i < 9; i++) {
        if (
          document.querySelector(`#c${i}${e.id.charAt(2)}`).value === uservalue
        ) {
          alert("Dublicates value are not allowed in single column");
          break;
        }
      }
      for (let j = rowback; j >= 0; j--) {
        if (
          document.querySelector(`#c${j}${e.id.charAt(2)}`).value === uservalue
        ) {
          alert("Dublicates value are not allowed in single column");
          break;
        }
      }
      let validationcol = e.id.charAt(2);
      let columnfor = parseInt(validationcol);
      let columnback = parseInt(validationcol);
      for (let m = columnfor; m < 9; m++) {
        if (
          document.querySelector(`#c${e.id.charAt(1)}${m}`).value === uservalue
        ) {
          alert("Dublicates value are not allowed in single row");
          break;
        }
      }
      for (let n = columnback; n >= 0; n--) {
        if (
          document.querySelector(`#c${e.id.charAt(1)}${n}`).value === uservalue
        ) {
          alert("Dublicates value are not allowed in single row");
          break;
        }
      }
    });
  }
  function startBlur(e) {
    let rowBlur = e.id.charAt(1);
    let rowBlurBack = parseInt(rowBlur);
    let rowBlurForward = parseInt(rowBlur);
    for (let i = rowBlurForward; i < 9; i++) {
      if (!document.querySelector(`#c${i}${e.id.charAt(2)}`).disabled)
        document.querySelector(`#c${i}${e.id.charAt(2)}`).style.background =
          "#fff";
    }
    for (let j = rowBlurBack; j >= 0; j--) {
      if (!document.querySelector(`#c${j}${e.id.charAt(2)}`).disabled)
        document.querySelector(`#c${j}${e.id.charAt(2)}`).style.background =
          "#fff";
    }
    let columnBlur = e.id.charAt(2);
    let columnBlurForward = parseInt(columnBlur);
    let columnBlurBack = parseInt(columnBlur);
    for (let m = columnBlurForward; m < 9; m++) {
      if (!document.querySelector(`#c${e.id.charAt(1)}${m}`).disabled)
        document
          .getElementById(`c${e.id.charAt(1)}${m}`)
          .removeAttribute("style");
    }
    for (let n = columnBlurBack; n >= 0; n--) {
      if (!document.querySelector(`#c${e.id.charAt(1)}${n}`).disabled) {
        document
          .getElementById(`c${e.id.charAt(1)}${n}`)
          .removeAttribute("style");
      }
    }
  
    
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (document.querySelector(`#c${i}${j}`).value === uservalue) {
          document.querySelector(`#c${i}${j}`).style.background =
            backColor;
        }
      }
    }
  
    for (let c = 0; c < 9; c++) {
      for (let d = 0; d < 9; d++) {
        if (forChangelevel === "easy") {
          if (difficulties.easyLevel[c][d] === 0)
            document.querySelector(`#c${c}${d}`).style.background = "#fff";
        } else if (forChangelevel === "medium") {
          if (difficulties.mediumLevel[c][d] === 0)
            document.querySelector(`#c${c}${d}`).style.background = "#fff";
        } else if (forChangelevel === "hard") {
          if (difficulties.hardLevel[c][d] === 0)
            document.querySelector(`#c${c}${d}`).style.background = "#fff";
        }
      }
    }
  }
  function validrowornot() {
    let counterforvalidation = 0;
    for (let i = 0; i < 9; i++) {
      let sumsforvalidation = 0;
      for (let j = 0; j < 9; j++) {
        if (document.querySelector(`#c${i}${j}`).value !== "") {
          sumsforvalidation = sumsforvalidation + parseInt(document.querySelector(`#c${i}${j}`).value);
        }
      }
      if (sumsforvalidation === 45) {
        counterforvalidation++;
      }
    }
    if (counterforvalidation === 9) {
      return true;
    } else {
      return false;
    }
  };
  function validcolumnornot(){
    let counterforvalidation = 0;
    for (let i = 0; i < 9; i++) {
      let sumsforvalidation = 0;
      for (let j = 0; j < 9; j++) {
        if (document.querySelector(`#c${j}${i}`).value !== "") {
          sumsforvalidation = sumsforvalidation + parseInt(document.querySelector(`#c${j}${i}`).value);
        }
      }
      if (sumsforvalidation === 45) {
        counterforvalidation++;
      }
    }
    if (counterforvalidation === 9) {
      return true;
    } else {
      return false;
    }
  };
  const cellboxwise = [
    ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
    ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
    ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
    ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
    ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
    ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
    ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
    ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
    ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  ];
  function validboxornot() {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      let sum = 0;
      for (let j = 0; j < 9; j++) {
        if (document.querySelector(`#c${cellboxwise[i][j]}`).value !== "") {
          sum = sum + parseInt(document.querySelector(`#c${cellboxwise[i][j]}`).value);
        }
      }
      if (sum === 45) {
        count++;
      }
    }
    if (count === 9) {
      return true;
    } else return false;
  };
  const validata_Button = document.querySelector("#validationButton");
  validata_Button.addEventListener("click", () => {
    let validornot = validrowornot() && validcolumnornot() && validboxornot();
    if (validornot) {
      alert("Great You Passed");
    } else alert("Please try again");
  });
  