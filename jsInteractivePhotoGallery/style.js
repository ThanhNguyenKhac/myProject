let text = document.getElementById("image").innerText;

function upDate(previewPic) {
  x = document.getElementById("image");
  x.innerHTML = previewPic.alt;
  x.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
  x = document.getElementById("image");
  x.innerHTML = text;
  x.style.backgroundImage = `url('')`;
}
