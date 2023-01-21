import './Graph.css';
import moment from 'moment/moment';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import React, { useEffect } from "react";
import data from './data.json'
import habits from './habits.json'


function Graph( {send}) {

    const [graphState, setState] = React.useState({});
    function readData() {
        if (graphState.data && graphState.habits) return;
        let dataobj = JSON.parse(JSON.stringify(data));
        let habitsobj = JSON.parse(JSON.stringify(habits));
        let parsedData = []
        for (const [key, value] of Object.entries(dataobj)) {
            parsedData.push({
                date: key,
                rating: value.rating
            })
        }
        console.log(parsedData);
        setState(prevState => {
            return {
                ...prevState,
                parsedData: parsedData
            }
        })
    }

    useEffect(() => { readData(); }, [])


    return (
        <>
            <script
                src="https://www.gstatic.com/charts/loader.js">
            </script>
            <h1 className="positive-graph">
                Rating Tracker
            </h1>
            (graphState.parsedData) && <ResponsiveContainer className="graph-container" width="100%" aspect={3}>
                <LineChart data={graphState.parsedData} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="date">Date</XAxis>
                    <YAxis type="number" domain={[1,10]} yAxis={{ tickSize: 25 }} >Rating</YAxis>
                    <Tooltip />
                    <Line type="monotone"  stroke="#8884d8" dataKey="rating"
                          />
                </LineChart>
            </ResponsiveContainer>
        </>



    );
}

export default Graph;
