
const city = document.getElementById("cityh2")
const temp = document.getElementById("temph2")
const ws = document.getElementById("windh2")
const humid = document.getElementById("humh2")
const input1 = document.getElementById("inp")
async function search(){


   const val = input1.value
    console.log((val));
   
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+val+'&appid=8928b6fe854675764723539e0be3e9b7&units=metric')
     const d = await data.json()
     
     
    console.log(d);
    console.log(d.name);
    
   

    
//  const newH = document.createElement("div")
//  newH.innerHTML=d.name
//  console.log(newH);
 
 //document.querySelector("body").appendChild(newH)

 city.innerHTML=d.name
 temp.innerHTML=Math.round(d.main.temp )+ '&deg'+'Celcius'
 ws.innerHTML=d.wind.speed + ' Km/h'
 humid.innerHTML=d.main.humidity + '%'
    
        
    }
 
    

