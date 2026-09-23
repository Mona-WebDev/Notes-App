// 1- logic for typing text effect
var typed = new Typed("#typed-text", {
  strings: ["Notes.", "Ideas.", "Tasks.", "Daily Plan."], // الكلمات التي ستتغير وتتشطب
  typeSpeed: 60, // سرعة كتابة الحروف
  backSpeed: 40, // سرعة المسح (الشطب)
  backDelay: 1500, // مدة الانتظار قبل مسح الكلمة
  loop: true, // تكرار الحركة باستمرار
});
let mainContainer = document.querySelector(".contentContainer");
mainContainer.innerHTML = localStorage.getItem("savedNotesHTML") || "";
function createTask() {
  let noteTemplate = `
    <div class="contentContainer">
      <p contenteditable="true" class="inputBox" onclick='updateStorage()'></p>
      <i class="trash fa-solid fa-trash-can fa-fade" onclick="Basket(this)"></i>
    </div>
  `;
  updateStorage();
  mainContainer.insertAdjacentHTML("afterbegin", noteTemplate);
  document.querySelector(".wag").style.display = "none";

  //  إضافة النوت الجديدة بأسفل القائمة بسلام وبدون مسح النصوص القديمة يضغها قبل النهايه او بعد البدايه
  // mainContainer.insertAdjacentHTML("beforeend", noteTemplate);
}

function Basket(target) {
  target.parentElement.remove();
}

function updateStorage() {
  localStorage.setItem("savedNotesHTML", mainContainer.innerHTML);
}