let karti = document.querySelector(".karti")
let tables = document.querySelector(".tables")



for (let index = 0; index < 4; index++) {
    
    let karta = document.createElement("div")
    let span = document.createElement("span")
    let span2 = document.createElement("span")
    
    karta.classList.add("karta")
    span.innerHTML = "VISA"
    span2.innerHTML = "RUB"
    
    karti.append(karta)
    karta.append(span,span2)
    
        
}

for (let index = 0; index < 4; index++) {
let table = document.createElement("div")
let odin = document.createElement("div")
let dva = document.createElement("div")
let span = document.createElement("span")
let span2 = document.createElement("span")
let span3 = document.createElement("span")
let span4 = document.createElement("span")
let span5 = document.createElement("span")
let hr = document.createElement("hr")

span.innerHTML = "1232312"
span2.innerHTML = "VISA"
span3.innerHTML = "Автомобиль"
span4.innerHTML = "414,000,000"
span5.innerHTML = "4 дня назад"
table.classList.add("table")
odin.classList.add("odin")
dva.classList.add("dva")

tables.append(table)
table.append(odin,dva)
odin.append(span,span2)
dva.append(span3,span4,span5)
tables.append(hr)

}