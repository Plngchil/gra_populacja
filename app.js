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
    const newGame = document.getElementById("newGame")
    const punkty = document.getElementById("punkty")
    const wiekszaPop = document.getElementById("wiekszaPop")
    let goodAnsw = 0
    let badAnsw = 0
    let country
    let population1 = 0 
    let population2 = 0
    function aktualizacjaPkt(){
        punkty.textContent = `Poprawne: ${goodAnsw} | Niepoprawne: ${badAnsw}`
    }
    function wszPop(){
        if(population1>population2){
            wiekszaPop.innerHTML = `Kraj z większą populacją to: ${p1.innerHTML}`
        }else if(population2>population1){
            wiekszaPop.innerHTML = `Kraj z większą populacją to: ${p2.innerHTML}`
        }else{
            wiekszaPop.innerHTML = "Kraje mają taką samą populację"
        }
    }
    function losowanie(){
        function kraj1(){
            const country = Math.floor(Math.random() * countries.length);
            img1.setAttribute("src", countries[country].flags.png);
            p1.innerHTML = countries[country].name.common;
            population1 = countries[country].population;
            div1.style.backgroundColor = '#f2efcb';
        }

        function kraj2(){
            let country;
            do {
                country = Math.floor(Math.random() * countries.length);
            } while (countries[country].name.common === p1.innerHTML);
            img2.setAttribute("src", countries[country].flags.png);
            p2.innerHTML = countries[country].name.common;
            population2 = countries[country].population;
            div2.style.backgroundColor = "#f2efcb";
        }
        
        kraj1();
        kraj2();
    }

    function klikanie(){
        div1.addEventListener("click", function(){
            if(population1 > population2){
                goodAnsw++;
                div1.style.backgroundColor = 'green';
            } else {
                badAnsw++;
                div1.style.backgroundColor = 'red';
            }
            populacja1.innerHTML = `Population: ${population1}`;
            populacja2.innerHTML = `Population: ${population2}`;
            aktualizacjaPkt()
            wszPop()
            sprawdzKoniecGry();
        });

        div2.addEventListener("click", function(){
            if(population2 > population1){
                goodAnsw++;
                div2.style.backgroundColor = 'green';
            } else {
                badAnsw++;
                div2.style.backgroundColor = 'red';
            }
            populacja1.innerHTML = `Population: ${population1}`;
            populacja2.innerHTML = `Population: ${population2}`;
            aktualizacjaPkt()
            wszPop()
            sprawdzKoniecGry();
        });
    }

    function sprawdzKoniecGry(){
        if(badAnsw >= 5){
            alert("Gra skończona! Przegrałeś 5 razy.");
            button.disabled = true;
        }
    }

    button.addEventListener("click", function(){
        losowanie();
        populacja1.innerHTML = '';
        populacja2.innerHTML = '';
        div1.style.backgroundColor = '#f2efcb';
        div2.style.backgroundColor = '#f2efcb';
    });
    newGame.addEventListener("click", function(){
        goodAnsw=0
        badAnsw=0
        button.disabled = false;
        populacja1.innerHTML=" "
        populacja2.innerHTML=" "
        div1.style.backgroundColor = '#f2efcb';
        div2.style.backgroundColor = '#f2efcb';
        losowanie()
    })

    losowanie();
    klikanie();
    aktualizacjaPkt()
}
wywswietlanie()
//zrobic wieksza populacje w li
//naprawic bledy
//po pieciu przegranych ma sie konczyc