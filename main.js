var xhttp = new XMLHttpRequest();
var tbl1 = "";
var table = document.getElementById('tbl');
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var all = xhttp.responseText;
    all = JSON.parse(all);
    all = all.books;

    for (var i = 0; i < all.length; i++) {
      tbl1 += "<tr><td>" + all[i].bookName + "</td>",
        tbl1 += "<td>" + all[i].author + "</td>",
        tbl1 += "<td>" + all[i].price + "</td></tr>";
    }
    table.innerHTML += tbl1;
  }
};
xhttp.open("GET", "books.json", true);
xhttp.send();
