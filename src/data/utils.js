import Details from "./A1.json"
const min_band  = [];
Details.forEach(item => {
    min_band.push(item.min_band);
});

//for max_band
const max_band  = [];
Details.forEach(item => {
    max_band.push(item.max_band);
});

//for forcasted
const forcasted  = [];
Details.forEach(item => {
    forcasted.push((item.min_band + item.max_band)/2);
});

//for timeStamp
const timestamp = [];
Details.forEach(item => {
  timestamp.push(item.timestamp);
});

export {min_band,max_band,forcasted,timestamp}