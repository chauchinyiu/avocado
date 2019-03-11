export interface WeatherData {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity:number;
  pressure:number;
  weatherShortDescription: string;
  weatherLongDescription: string;
  images:[];
}

export interface ImageData {
  title: string;
  url: string;
}
