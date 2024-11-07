async function getData() {
    const data = await fetch('https://restcountries.com/v3.1/region/europe');
    const json = await data.json();
    console.log(json);
    return json;
}
getData()
async function wywswietlanie() {
    const countries = await getData();
    const div1 = document.getElementById('div1')
    const img1 = document.getElementById('img1')
    const p1 = document.getElementById('name1')
    const populacja1 = document.getElementById('populacja1')
    const div2 = document.getElementById('div2')
    const img2 = document.getElementById('img2')
    const p2 = document.getElementById('name2')
    const populacja2 = document.getElementById('populacja2')
    const button = document.getElementById("button")
    let goodAnsw = 0
    let badAnsw = 0
    let country
    let population1 = 0 
    let population2 = 0
    function losowanie(){
        function kraj1(){
        country = Math.floor(Math.random() * countries.length);
        img1.setAttribute("src", countries[country].flags.png);
        p1.innerHTML = countries[country].name.common;
        population1 = countries[country].population
        console.log(population1);
        div1.style.backgroundColor = '#f2efcb'
    }       function kraj2(){
        country = Math.floor(Math.random() *countries.length)
        img2.setAttribute("src", countries[country].flags.png);
        p2.innerHTML = countries[country].name.common;
        population2 = countries[country].population
        console.log(population2);
        div2.style.backgroundColor = "#f2efcb"
    }
    kraj1()    
    kraj2()
    if(p1.innerHTML==p2.innerHTML){
    kraj1()    
    kraj2()
    }
    }
    losowanie()
    function klikanie(){
        div1.addEventListener("click", function(){
            if(population1>population2){
                goodAnsw++
                div1.style.backgroundColor = 'green'
                populacja1.innerHTML = `Population: ${population1}`
                populacja2.innerHTML = `Population: ${population2}`
            }else if(population2>population1){
                badAnsw++
                div1.style.backgroundColor = 'red'
                populacja1.innerHTML = `Population: ${population1}`
                populacja2.innerHTML = `Population: ${population2}`
            }
        div2.addEventListener("click", function(){
            if(population2>population1){
                goodAnsw++
                div2.style.backgroundColor = 'green'
                populacja1.innerHTML = `Population: ${population1}`
                populacja2.innerHTML = `Population: ${population2}`
            }else if(population1>population2){
                badAnsw++
                div2.style.backgroundColor= 'red'
                populacja1.innerHTML = `Population: ${population1}`
                populacja2.innerHTML = `Population: ${population2}`
            }
        })
        })
    }
    klikanie()
    button.addEventListener("click", function(){
        losowanie()
        populacja1.innerHTML = ''
        populacja2.innerHTML = ''
    })
}
wywswietlanie()
//zrobic wieksza populacje w li
//naprawic bledy
//po pieciu przegranych ma sie konczyc