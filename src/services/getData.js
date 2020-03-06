const formatReleases=releases=>{
  return{
    id: releases.id,
    title:releases.title,
    label:releases.label,
    year:releases.year,
    artist:releases.artist,
    resource_url:releases.resource_url,
    community:releases.stats
  }
}


const getData = () => {
  return fetch("./data.json")
    .then(response => response.json())
    .then(data =>
      data.releases.map(formatReleases)
    );
};

export default getData;
