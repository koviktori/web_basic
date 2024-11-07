const place = [
    {
        city: "Київ", category:"ресторани", name: "ресторан 'Квітка'"
    },
    {
        city: "Львів ",  category:"музеї" , name:"'Національний музей'"
    },
    {
        city:"Одеса", category:"архітектурні пям'ятки", name:"'Одеський державний театр опери та балету'"
    },

];
function searchPlaces() {
    const city = document.getElementById("city").value.toLowerCase();
    const selectedCategories= Array.from(document.querySelectorAll('#categories input:checked'))
    .map(checkbox => checkbox.value);
    const resultDiv = document.getElementById("result");
    const filteredPlaces = places.filter(place => {return place.city.toLowerCase() === city && 
        (selectedCategories.length === 0 || selectedCategories.includes(place.category));
    });
    if (filteredPlaces.length > 0) {
        resultDiv.innerHTML = "<h2>Результати</h2><ul>" + filteredPlaces.map(place => `<li>${place.name}</li>`).join("") +
        "</ul>";
    } 
    else {
        resultDiv.innerHTML = "<h2>Не знайдено місць.</h2>";
    }
}