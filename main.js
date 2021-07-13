// document
//   .querySelector("#list>li>.close")
//   .addEventListener("click", function (event) {
//     console.log("s");
//   });

const liElements = document.getElementsByTagName("li");
for (var i = 0; i < liElements.length; i++) {
  liElements[i].onclick = listClick;
  localStorage.setItem(liElements[i].innerText, liElements[i].innerText);
}

const closes = document.getElementsByClassName("close");
for (var i = 0; i < closes.length; i++) {
  closes[i].onclick = closeClick;
}

function newElement() {
  const taskInput = document.querySelector("#task");
  if (taskInput.value.trim().length) {
    createLiElement(taskInput.value);
    showToast(0);
    taskInput.value = "";
  } else {
    showToast(1);
  }
}

function createLiElement(value = "") {
  const ulElement = document.querySelector("#list");
  let liElement = document.createElement("li");
  let closeElement = document.createElement("span");
  closeElement.classList.add("close");
  closeElement.innerHTML = "×";
  closeElement.onclick = closeClick;
  liElement.innerHTML = `${value}`;
  liElement.append(closeElement);
  liElement.onclick = listClick;
  localStorage.setItem(liElement.innerText, liElement.innerText);
  ulElement.append(liElement);
}

function listClick() {
  var div = this;
  div.classList.contains("checked")
    ? div.classList.remove("checked")
    : div.classList.add("checked");
}

function closeClick() {
  var div = this.parentElement;
  localStorage.removeItem(div.innerText.replace("\n", ""));
  div.style.display = "none";
  showToast(2);
}

function showToast(type) {
  const liveToast = document.querySelector("#liveToast");
  const liveToastBody = document.querySelector(".toast-body");
  switch (type) {
    case 0:
      liveToastBody.innerHTML = "Listeye eklendi.";
      break;
    case 1:
      liveToastBody.innerHTML = "Listeye boş ekleme yapamazsınız!";
      break;
    case 2:
      liveToastBody.innerHTML = "Listeden silindi.";
      break;

    default:
      break;
  }
  $("#liveToast").toast("show");
}
