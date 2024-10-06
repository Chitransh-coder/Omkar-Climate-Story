// import React, { useMemo } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const rawData = `year,month,value
//  2014,1,1896.45
//  2014,1, 1898.0
//  2014,1,1924.05
//  2014,1,1923.48
//  2014,2,1919.68
//  2014,4,1895.73
//  2014,4,1895.66
//  2014,4,1893.2
//  2014,4,1893.72
//  2014,6,1872.95
//  2014,6, 1872.84
//  2014,7,1860.33
//  2014,7,1859.57
//  2014,8,1840.29
//  2014,8,1839.04
//  2014,9,1885.13
//  2014,9,1884.98
//  2014,10,1898.69
//  2014,10,1897.73
//  2015,1 ,1893.59
//  2015,1 ,1891.68
//  2015,1 ,1898.6
//  2015,1 ,1899.57
//  2015,2 ,1889.03
//  2015,2 ,1889.33
//  2015,3 ,1900.14
//  2015,3 ,1899.84
//  2015,4 ,1877.7
//  2015,4 ,1877.52
//  2015,5 ,1900.58
//  2015,5 ,1901.4
//  2015,8 ,1861.45
//  2015,8 ,1860.78
//  2015,8 ,1873.33
//  2015,8 ,1873.9
//  2015,9 ,1919.15
//  2015,9 ,1919.59
//  2015,10,1903.94
//  2015,10,1903.67
//  2015,11,1918
//  2015,11,1917.68
//  2016,1 ,1922.34
//  2016,1 ,1922.24
//  2016,2 ,1975.87
//  2016,2 ,1974.78
//  2016,3 ,1912.86
//  2016,3 ,1912.33
//  2016,4 ,1920.19
//  2016,4 ,1919.3
//  2016,5 ,1909.0
//  2016,7 ,1899.57
//  2016,7 ,1899.5
//  2016,8 ,1894.76
//  2016,8 ,1894.89
//  2016,9 ,1926.67
//  2016,9 ,1927.33
//  2016,11,1926.05
//  2016,11,1926.5
//  2016,12,1922.98
//  2016,12,1923.46
//  2017,1,1925.18
//  2017,1,1925.06
//  2017,2,1926.85
//  2017,2,1927.75
//  2017,4,1935.41
//  2017,4,1936.35
//  2017,4,1918.16
//  2017,4,1917.74
//  2017,5,1904.14
//  2017,5,1904.3`;

// const CH4DataGraph = () => {
//   const data = useMemo(() => {
//     const lines = rawData.split('\n').slice(1); // Skip header
//     const parsedData = lines.map(line => {
//       const [year, month, value] = line.split(',');
//       return {
//         year: parseInt(year.trim()),
//         month: parseInt(month.trim()),
//         value: parseFloat(value.trim()),
//       };
//     });
//     console.log('Parsed data:', parsedData);
//     return parsedData;
//   }, []);

//   console.log('Rendering graph with data length:', data.length);

//   return (
//     <div className="w-full h-[600px] p-4">
//       <h2 className="text-2xl font-bold mb-4">CH4 Data Graph</h2>
//       <ResponsiveContainer width="100%" height="80%">
//         <LineChart
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="year" />
//           <YAxis dataKey="value" />
//           <Tooltip />
//           <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//       <div className="mt-4">
//         <h3 className="font-bold">Data Summary:</h3>
//         <p>Number of data points: {data.length}</p>
//         <p>Year range: {Math.min(...data.map(d => d.year))} - {Math.max(...data.map(d => d.year))}</p>
//         <p>CH4 value range: {Math.min(...data.map(d => d.value)).toFixed(2)} - {Math.max(...data.map(d => d.value)).toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CH4DataGraph;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import as5 from "../../assets/Humnoldt State University CH4.png"

const CH4LineChart = () => {
  // Manually input the CSV data for testing
 

  return (
    <>
       <img src={as} alt="" />

    <img src={as5} alt="" />
    </>

  );
};

export default CH4LineChart;
