
const city = function (url) {
    return fetch(url).then(res => {
        if (!res.ok) throw new Error("nh chal rha");
        return res.json();
    }
    )

}

const getcity = async (city1, city2) => {
    try {
        const citydata = await Promise.all(
            [
                city(`https://restcountries.com/v3.1/name/${city1}`),

                city(`https://restcountries.com/v3.1/name/${city2}`),
            ]
        )
        console.log(citydata.map(d => d[0].capital))
    } catch (err) {
        console.log(err);
    }
}
getcity("portugal", "canada");