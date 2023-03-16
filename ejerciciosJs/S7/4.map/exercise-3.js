const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesName = cities.map(city => {
    if (city.isVisited===true){
        return city.name + "(visitado)"
    }
    else{
        return city.name
    }
})  

// const citiesNames = cities.map(city =>
//     city.isVisited===true?
//     city.name + "(Visitado)"
//     :city.name)