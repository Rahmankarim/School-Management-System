import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Attendence: 90,
    amt: 50,
  },
  {
    name: 'Feb',
    Attendence: 94,
    amt: 70,
  },
  {
    name: 'March',
    Attendence: 87,
  },
  {
    name: 'April',
    Attendence: 90,
  },
  {
    name: 'June',
    Attendence: 60,
  },
  {
    name: 'July',
    Attendence: 30,
  },
  {
    name: 'Aug',
    Attendence: 67,
  },
];

 class LineChartCom extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            domain={[0, 10]} 
            ticks={[0,10,20,30,40,50,60,70,80,90,100]} 
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Attendence" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export {LineChartCom};