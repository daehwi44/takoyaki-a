// ナビボタンを登録
const NAV_BUTTON = document.querySelector(".nav_button");

// classを着け外しするHTML要素（body）を登録
const BODY = document.querySelector("body");

// ナビボタンをクリックしたら...（クリックイベント）
NAV_BUTTON.addEventListener("click", () => {
  // bodyにclassを着け外し
  BODY.classList.toggle("nav_open");
});
