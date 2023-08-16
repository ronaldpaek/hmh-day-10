window.addEventListener("DOMContentLoaded", () => {
  const blueBoxEl = document.querySelector(".blue.box");
  blueBoxEl.addEventListener("click", () => {
    blueBoxEl.classList.toggle("toggle");
  });

  const textInputEl = document.querySelector("#mirror");
  textInputEl.addEventListener("input", (e) => {
    console.log(e.target.value);
    const mirrorTextEl = document.querySelector(".mirror-text");
    mirrorTextEl.innerText = e.target.value;
  });

  const minusButtonEl = document.querySelector(".minus.button");
  const plusButtonEl = document.querySelector(".plus.button");
  const resetButtonEl = document.querySelector(".counter-wrapper > button");

  minusButtonEl.addEventListener("click", () => {
    const countEl = document.querySelector("#count");
    const count = Number(countEl.innerText);
    countEl.innerText = count - 1;

    if (Number(countEl.innerText) > 0) {
      countEl.style.color = "var(--indigo-10)";
    } else if (Number(countEl.innerText) < 0) {
      countEl.style.color = "var(--pink-10)";
    }
  });

  plusButtonEl.addEventListener("click", () => {
    const countEl = document.querySelector("#count");
    const count = Number(countEl.innerText);
    countEl.innerText = count + 1;

    if (Number(countEl.innerText) > 0) {
      countEl.style.color = "var(--indigo-10)";
    } else if (Number(countEl.innerText) < 0) {
      countEl.style.color = "var(--pink-10)";
    }
  });

  resetButtonEl.addEventListener("click", () => {
    const countEl = document.querySelector("#count");
    countEl.innerText = 0;
    countEl.style.color = "var(--gray-12)";
  });

  const raceCarEl = document.querySelector(".race-car");
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") {
      const currentMarginLeft = Number(
        raceCarEl.style.marginLeft.slice(0, -2) || 0,
      );
      const newMarginLeft = currentMarginLeft + 5;
      if (newMarginLeft > 0 && raceCarEl.clientWidth > 105) {
        raceCarEl.style.marginLeft = currentMarginLeft + 5 + "px";
      }
    } else if (e.code === "ArrowLeft") {
      const currentMarginLeft = Number(
        raceCarEl.style.marginLeft.slice(0, -2) || 0,
      );
      const newMarginLeft = currentMarginLeft - 5;
      if (newMarginLeft >= 0 && raceCarEl.clientWidth > 0 + 100) {
        raceCarEl.style.marginLeft = currentMarginLeft - 5 + "px";
      }
    }
  });

  const buttonWrapperEl = document.querySelector(".button-wrapper");
  const startButtonEl = document.querySelector(".start");
  const stopButtonEl = document.querySelector(".stop");
  const clearButtonEl = document.querySelector(".clear");
  let timerId;

  buttonWrapperEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("start")) {
      startButtonEl.disabled = true;
      stopButtonEl.disabled = false;
      timerId = setInterval(() => {
        const timerEl = document.querySelector(".timer");
        const time = Number(timerEl.innerText);

        timerEl.innerText = time + 1;
      }, 1000);
    } else if (e.target.classList.contains("stop")) {
      stopButtonEl.disabled = true;
      startButtonEl.disabled = false;

      clearInterval(timerId);
    } else if (e.target.classList.contains("clear")) {
      clearInterval(timerId);
      startButtonEl.disabled = false;
      stopButtonEl.disabled = false;
      clearButtonEl.disabled = false;

      const timerEl = document.querySelector(".timer");
      timerEl.innerText = 0;
    }
  });
});
