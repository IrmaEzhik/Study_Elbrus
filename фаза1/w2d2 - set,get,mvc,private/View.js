class View {
  static renderMap(map) {
    console.clear();
    map.forEach((row) => {
      console.log(row.join(''));
    });
  }
}

module.exports = View;