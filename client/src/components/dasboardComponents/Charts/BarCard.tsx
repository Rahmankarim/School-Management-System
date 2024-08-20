import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Semester 1',
    CGPA: 3.5,
  },
  {
    name: 'Semester 2',
    CGPA: 3.67,
  },
  {
    name: 'Semester 3',
    CGPA: 3.52,
  },
  {
    name: 'Semester 4',
    CGPA: 3.67,
  },
];

class BarCard extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            domain={[0, 4]} 
            ticks={[0,0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} 
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="CGPA" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export { BarCard };
