/* eslint-disable no-unused-vars */
import { Area, AreaChart, Tooltip, XAxis } from "recharts";

const Graph = () => {
    const data = [
        {
            name: "Mon",
            uv: 100,
        },
        {
            name: "Tue",
            uv: 300,
        },
        {
            name: "Wed",
            uv: 700,
        },
        {
            name: "Thu",
            uv: 580,
        },
        {
            name: "Fri",
            uv: 890,
        },
        {
            name: "Sat",
            uv: 290,
        },
        {
            name: "Sun",
            uv: 490,
        },
    ];

    return (
        <div className="graph w-fit mx-auto">
            <AreaChart width={550} height={250} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4478A6" stopOpacity={1} />
                        <stop
                            offset="95%"
                            stopColor="#4478A6"
                            stopOpacity={0.2}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#2A659A"
                    strokeWidth={2}
                    fill="url(#colorUv)"
                />
            </AreaChart>
            <p className="mon">Mon</p>
        </div>
    );
};

export default Graph;
