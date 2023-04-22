var container=document.createElement('div');
container.className='container';
var row = document.createElement('div');
row.classList.add('row','m-3');
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=`<div class="row col-lg-4 col-sm-12">
        <div class="card text-white bg-dark mb-3" style="max-width: 16rem;">
        <div class="p-3 mb-2 bg-success text-white" style="text-align:center;">${data1[i].name}</div>
        
          <img src="${data1[i].flag}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text"> Capital:${data1[i].capital}</p>
            <p class="card-text"> Region:${data1[i].region}</p>
            <p class="card-text"> Code:${data1[i].alpha3Code}</p><br>
            <button class="btn btn-primary" onclick="weatherdata(33,65)">Click for Weather</button>
          
            </div>
        </div>
      </div>`
    }
    document.body.append(container);
}

async function getdata(){
  var res=await fetch("https://restcountries.com/v2/all");
  var res1= await res.json();

  for(var i=0;i<res1.length;i++){
      try {
          // console.log(`Latitude:${res1[i].latlng[0]} Longitude:${res1[i].latlng[1]}`);
          //console.log(res1[i].latlng);
          let a=res1[i].latlng;
          weatherdata(a[0],a[1]);
      } 
 catch (error) {
  console.log(error);
}
}
}

async function weatherdata(lat,lon){
try {
 // console.log(lat,lon);
  //if(lon===undefined) throw new Error("Invalid Coordinates");
 let url ="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=c51376baddbc02225c93faab543183a5"
  let res2=await fetch(url);
  let res3=await res2.json();
  // console.log(`${res3.main.temp}`);
  alert(res3.main.temp);
} catch (error) {
 console.log(error) 
}

}

getdata();

