function listaObaveza(){
    let inputUnos = document.getElementById("unos")
    let unos = inputUnos.value.trim()

    document.getElementById("unos").value = " "
    console.log(unos)

    if(unos === ""){
        alert("Morate unijeti obavezu")
        return
    }


    let spisak = document.getElementById("spisak")
    let obaveza = document.createElement("div")
    obaveza.className = "obaveza"

 

    spisak.appendChild(obaveza)

    obaveza.innerText = unos


    let btnObrisi = document.createElement("button")
    btnObrisi.innerText = "X"
    btnObrisi.className = "btnDel"

    obaveza.appendChild(btnObrisi)

    btnObrisi.onclick = function(){
        this.parentNode.remove()
    }

}


let btn = document.getElementById("btn")
btn.onclick = listaObaveza
