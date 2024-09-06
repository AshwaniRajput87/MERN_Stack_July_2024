/***
  
  Typeahead system:

   - it is also know as auto suggesstion search box
   - when the user is typing something then you have to auto populate the list of data for end user -> help the end user to take some decision


    Must have feature:
     - input search box - using input tag and basic style
     - make a API call to fetch dynamic data while typing in the search box
     - populate the data inside ul list and display list of data.
     - ask for providing the end points or some default results.

   Good to have:
    - Sorting the data alphbatically
    - apply the deboucing to pause the request on every typing
    - if no data found then can display a message with no results found 
    - default data: 
    [india, about india, India is a divere country]

    Approach:

     - Require an input search box
     - need an API , https://restcountries.com/v3.1/name/${keyword}
     - add the event listerners and execute a function which populate the list of data
     - we ul, will lis with dynamic data append that lis into the ul and render the list of data

 */


import { getCountries } from "./utils/fetchData.js";
import { debounce } from "./utils/debounceUtil.js";


const clearResults = (resultContainer) => {
   resultContainer.innerHTML = '';
}

const populateData = (countryArr, resultContainer, searchInput) => {

    if(countryArr && countryArr.length){
        const fragment = document.createDocumentFragment();

        countryArr.forEach((countryName)=>{
            
            const resultItem = document.createElement('li');

            resultItem.className = 'result-item';
            resultItem.textContent = countryName;

            resultItem.addEventListener('click', ()=>{
                searchInput.value = countryName;
            })

            fragment.appendChild(resultItem);

        });

        clearResults(resultContainer);
        resultContainer.appendChild(fragment);

    } else {
        // no results message
        // If you get an empty array fill the li with no result found
        // hide the dropdown
        // you try instead of remove all li's try to use display: none or display: block to show and hide the list of data 
    }

}

const handleSearch = (countries) => {
    return countries.map((country) => {
        return country.name.common
    });
}

const handleSuggestions = async(event, resultContainer, searchInput) =>{
    //console.log(event.target.value);
    const keyword = event.target.value;

    if(!keyword.length){
        return
    }

    const countries =  await getCountries(keyword);
    
    const countryArr = handleSearch(countries);

    populateData(countryArr, resultContainer, searchInput);


}

const initializeTypeaheadSystem = () =>{
    const searchInput = document.getElementById('searchInput');
    const resultContainer = document.getElementById('results');

    const debounceSuggestions = debounce((event)=>{
        handleSuggestions(event, resultContainer, searchInput);
    }, 1000);

    searchInput.addEventListener('input', debounceSuggestions);
}

initializeTypeaheadSystem();
