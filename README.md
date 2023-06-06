
## Contact Management Web App with Graphs & Charts

This is a contact management app built with ReactJS, TypeScript,
TailwindCSS, React Router v6, and React Query (TanstackQuery). The app
allows you to manage contacts, view charts of COVID-19 cases, and
visualize the data on a map.





## Features

#### Contact Management
- Add new contacts through a form
- View list of all added contacts
- View contact details on contact card
- Edit and delete contacts

#### Charts and Maps
- Line graph showing COVID-19 cases fluctuations
- React Leaflet map with markers indicating COVID-19 data for each country
## Installation

Follow these steps to run this project

#### 1.Clone the repo using the command given below in your git-bash your terminal:
```bash
git clone https://github.com/Dharmik3107/Contact-Management.git
cd Contact-Management/
```
#### 2.Install the dependencies:
```bash
npm install
```



## Usage
#### 1. Start the development server:
```bash
npm start
```
#### 2. Open your browser and visit http://localhost:3000 to access the app.
## API Endpoint Information

#### This app fetches COVID-19 data from the following API endpoints:

#### 1. Worldwide data of cases: https://disease.sh/v3/covid-19/all
* This endpoint provides global COVID-19 data, including total cases, recovered cases, deaths, etc.

#### 2. Country-specific data of cases: https://disease.sh/v3/covid-19/countries
* This endpoint provides COVID-19 data for specific countries, including active cases, recovered cases, deaths, etc.

#### 3. Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all
* This endpoint provides historical COVID-19 data in the form of a graph, including cases over time.



## Tech Stack

#### Client: 
- ReactJS 
- Redux Toolkit 
- TailwindCSS 
- Typescript 
- React Router v6 
- React Query

#### Tools: 
-   Vercel