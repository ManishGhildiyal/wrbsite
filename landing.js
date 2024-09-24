const left = document.querySelector(".left");

const right = document.querySelector(".right");

const slider = document.querySelector(".slider");

const images = document.querySelectorAll(".image");

const len = images.length;

let slidernumber = 1;
const next = () => {
  slider.style.transform = `translateX(-${slidernumber * 500}px)`;
  slidernumber++;
};
const prev = () => {
  slider.style.transform = `translateX(-${(slidernumber - 2) * 500}px)`;
  slidernumber--;
};
const firstslide = () => {
  slider.style.transform = `translateX(0px)`;
  slidernumber = 1;
};
const lastslide = () => {
  slider.style.transform = `translateX(-${(len - 1) * 500}px)`;
  slidernumber = len;
};

right.addEventListener("click", () => {
  if (slidernumber > 1) {
    prev();
  } else {
    lastslide();
  }
});

left.addEventListener("click", () => {
  if (slidernumber < len) {
    next();
  } else {
    firstslide();
  }
});

let slideplay;

const autoplay = () => {
  slideplay = setInterval(() => {
    if (slidernumber < len) {
      next();
    } else {
      firstslide();
    }
  }, 4000);
};
autoplay();

let questions = document.querySelectorAll(".q");

questions.forEach((question) => {
  question.style.display = "none";
});
console.log(questions);

// adding event listeners
  
// const button = document.getElementById("button");
// console.log(button);
// button.addEventListener("click", () => {
//   let tre =button.nextElementSibling;
//   if (tre.style.display == "none") {
//           tre.style.display = "block";
//         } else {
//           tre.style.display = "none";
//         }
// });

// const questionHeader = document.querySelectorAll(".question-headers");
// questionHeader.forEach((header) => {
//   header.addEventListener("click", () => {
//     console.log(header);
//     let answer = header.nextElementSibling;
//     console.log(answer);
//         if (answer.style.display == "none") {
//       answer.style.display = "block";
//     } else {
//       answer.style.display = "none";
//     }
//   });
// });
// console.log(questionHeader);

document.addEventListener("click", (event) => {
  let target = event.target;

  if (target.matches(`.question-headers, .question-headers *`)) {
    target = target.closest(".question-headers");
    const p = target.nextElementSibling;

    if (p.style.display == "none") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  }
});
