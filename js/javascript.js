const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
};

if (user.name.first == null) {
    //Tidak ada Yang di Eksekusi
    alert("Senang bertemu dengan Anda !");
} else {
    let hd = document.querySelector("#hd");
    hd.innerHTML = 'Ayo ' + user.name.first + ' Kita Bersama-sama Memutus Rantai Penyebaran Covid-19'
    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}
