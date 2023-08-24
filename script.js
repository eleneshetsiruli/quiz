let prevButton = document.querySelector(".prevButton");
let previus = document.querySelector(".previus");
let test1 = document.querySelector(".test1");
let btn1 = document.querySelectorAll(".btn1");
let next1 = document.querySelector(".next1");
let score = document.querySelector(".scores");
let test2 = document.querySelector(".test2");
let btn2 = document.querySelectorAll(".btn2");
let next2 = document.querySelector(".next2");
let btn3 = document.querySelectorAll(".btn3");
let test3 = document.querySelector(".test3");
let next3 = document.querySelector(".next3");
let test4 = document.querySelector(".test4");
let btn4 = document.querySelectorAll(".btn4");
let next4 = document.querySelector(".next4");
let test5 = document.querySelector(".test5");
let btn5 = document.querySelectorAll(".btn5");
let next5 = document.querySelector(".next5");
let end = document.querySelector(".end");
let minus = document.querySelector(".minus-score");

let scores = 0;
let minusScore = 0;

prevButton.addEventListener("click", () => {
  previus.classList.add("hidden");
  test1.classList.remove("hidden");
});

function myfunction(btn, next, test, remove) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      document.querySelector(".special")?.classList.remove("special");

      btn[i].classList.add("special");
      if (btn[i].value === "correct") {
        scores += 1;
        score.textContent = scores;
        btn[i].style.backgroundColor = "green";
      } else {
        btn[i].style.backgroundColor = "red";
        minusScore += 1;
        minus.textContent = minusScore;
      }
      next.addEventListener("click", () => {
        test.classList.add("hidden");
        remove.classList.remove("hidden");
      });
      next5.addEventListener("click", () => {
        end.classList.remove("hidden");
        if (scores === 5) {
          end.textContent = `გილოცავთ!!! თქვენი შედეგია ${scores} ქულა --  5-დან`;
        } else if (scores === 0) {
          end.textContent = `თქვენი შედეგია ${scores} ქულა -- 5-დან :(`;
        } else {
          end.textContent = `თქვენი შედეგია ${scores} ქულა -- 5-დან, ცუდი არ არის :)`;
        }
      });
    });
  }
}

let disable1 = document.querySelectorAll(".disable1");
let disable2 = document.querySelectorAll(".disable2");
let disable3 = document.querySelectorAll(".disable3");

for (let i = 0; i < disable1.length; i++) {
  disable1[i].addEventListener("click", () => {
    disable1[i].disabled = false;
    disable2[i].disabled = true;
    disable3[i].disabled = true;
  });
}
for (let i = 0; i < disable2.length; i++) {
  disable2[i].addEventListener("click", () => {
    disable1[i].disabled = true;
    disable2[i].disabled = false;
    disable3[i].disabled = true;
  });
}
for (let i = 0; i < disable3.length; i++) {
  disable3[i].addEventListener("click", () => {
    disable1[i].disabled = true;
    disable2[i].disabled = true;
    disable3[i].disabled = false;
  });
}

myfunction(btn1, next1, test1, test2);
myfunction(btn2, next2, test2, test3);
myfunction(btn3, next3, test3, test4);
myfunction(btn4, next4, test4, test5);
myfunction(btn5, next5, test5);
