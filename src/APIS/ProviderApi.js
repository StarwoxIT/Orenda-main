export const fetchCustomData = async () => {
    const endpoint = 'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders';
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched Data:', data);
    return data;
};