function loadingBar(number) {
  let percent = number / 10;
  let bar = "[" + "%".repeat(percent) + ".".repeat(10 - percent) + "]";
  if (percent < 10) {
    console.log(`${number}% ${bar}\nStill loading...`);
  } else {
    console.log("100% Complete!\n[%%%%%%%%%%]");
  }
}
