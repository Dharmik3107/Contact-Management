import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {CategoryScale , Chart, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { icon as MarkIcon } from 'leaflet';

import Loader from '../components/Loader';

import MarkerSVG from "../assets/Marker.svg"

import 'leaflet/dist/leaflet.css';


//Registering the scale and required properties to work with charts
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

//API endpoint to fetch data from
const COUNTRY_CASES_URL = 'https://disease.sh/v3/covid-19/countries';
const GRAPH_DATA_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

const MapsAndCharts: React.FC = () => {

  //Function to handle fetching data async way
  const fetchCountryCases = async () => {
    const response = await axios.get(COUNTRY_CASES_URL);
    return response.data;
  };

  //Function to handle fetching data async way
  const fetchGraphData = async () => {
    const response = await axios.get(GRAPH_DATA_URL);
    return response.data;
  };

  //Getting the state of promise while fetching to display on screen based on state
  const { data: countryData, isLoading: isCountryLoading, isError: isCountryError } = useQuery(['country'], fetchCountryCases);
  const { data: graphData, isLoading: isGraphLoading, isError: isGraphError } = useQuery(['graph'], fetchGraphData);

  //If Loading state then Spinner will be displayed
  if ( isCountryLoading || isGraphLoading) {
    return <div className='w-full h-full flex justify-center items-center'><Loader /></div>;
  }

  //If Error while fetching then Error Fetching Data will be displayed
  if ( isCountryError || isGraphError) {
    return <div className='w-full h-full flex justify-center items-center'>Error fetching data</div>;
  }

  //Prepare Line graph data
  const graphDates = Object.keys(graphData.cases);
  const graphCases = Object.values(graphData.cases);
  const graphDataSets = [
    {
      label: 'Cases',
      data: graphCases,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 0,
    },
  ];
  const graphOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cases',
        },
      },
    },
  };

  //Define Country Object type
  interface CountryData {
    country: string;
    active: number;
    recovered: number;
    deaths: number;
    countryInfo: {
      iso2: string;
      lat: number;
      long: number;
    };
  }

  //Prepare Map data and return  Marker JSX for Map with custom icon 
  const mapMarkers = countryData.map((country: CountryData, index:number) => {
    // const iconUrl = `https://www.countryflags.io/${country.countryInfo.iso2}/flat/64.png`;
    const markerIcon = MarkIcon({
      iconUrl: MarkerSVG,
      iconSize: [16, 16], // Adjust the size as needed
    });
    return (
    <Marker key={index} position={[country.countryInfo.lat, country.countryInfo.long]} icon={markerIcon}>
      <Popup>
        <div>
          <h3>{country.country}</h3>
          <p>Total Active Cases: {country.active}</p>
          <p>Total Recovered Cases: {country.recovered}</p>
          <p>Total Deaths: {country.deaths}</p>
        </div>
      </Popup>
    </Marker>
  )});

  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-3 pt-10 md:p-5 z-[1] overflow-x-hidden overflow-y-scroll'>
      <div className='w-full max-w-[800px] bg-white rounded-xl aspect-video'>
        <Line data={{ labels: graphDates, datasets: graphDataSets }} options={graphOptions} />
      </div>
      <div className='w-full max-w-[800px] h-[500px] mt-10 bg-white rounded-xl z-[1]'>
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%', overflowY: "scroll" }}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {mapMarkers}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapsAndCharts;
