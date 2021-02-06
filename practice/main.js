document.write("하이하이하이");

function LinksetColor(color) {
  let alist = document.querySelectorAll("div");
  let i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}

function BodySetColor(color) {
  document.querySelector("body").style.color = color;
}

function BodySetBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function ndhandler(self) {
  let target = document.querySelector("body");
  if (self.value === "night") {
    self.value = "day";
    Body.SetColor("white");
    Link.setColor("powderblue");
    Body.SetBackgroundColor("black");
  } else {
    self.value = "night";
    Body.SetColor("white");
    Link.setColor("blue");
    Body.SetBackgroundColor("white");
  }
}
