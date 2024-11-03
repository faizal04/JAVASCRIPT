const fetch_data = () => {
    fetch('https://restcountries.com/v3.1/name/portugal').then((response) => {
        console.log(response);
    })
}