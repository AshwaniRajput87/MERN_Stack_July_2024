export const getCountries = async(keyword) =>{
    try{

        const res =  await fetch(`https://restcountries.com/v3.1/name/${keyword}`);

        const countryArr = await res.json();

        if(res.status === 404){
            console.log('No data Found');
            return [];
        }

        return countryArr;

    }catch(error){
        console.log(error);
    }
}