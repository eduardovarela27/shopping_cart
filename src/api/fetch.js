export const CallApi = async () => {
    const url = "https://api.punkapi.com/v2/beers/";
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const dates = data.map(d => ({
            id:d.id,
            name: d.name,
            description: d.description,
            image_url: d.image_url
            })
        );
        // console.log(dates);
        return dates;

    } else {
        console.log('Error');
    }
};
