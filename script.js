// FirstLatter Function
function fixText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Name Function
function helloName(name) {
  return name === "Mark" ? "Hi," + name + "!" : "Hello," + name + "!";
}

//Lenght Function
let sortText = ["I love JS", "some very long string", "hell"];
function returnString(arr, n) {
  return arr.filter((element) => {
    return element.length <= n ? element : false;
  });
}
