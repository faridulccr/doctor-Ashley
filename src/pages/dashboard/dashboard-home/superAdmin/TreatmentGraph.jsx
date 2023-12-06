import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const TreatmentGraph = () => {
    const data = [
        {
            name: "Jan",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Feb",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Mar",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Apr",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "May",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Jun",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "July",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="treatment">
            <p className="font-[600] text-[22px] leading-[26px] text-[#2F3241]">
                Medical Treatments
            </p>
            <div className="text-[#2F3241] flex justify-between pl-16 mt-16 text-[22px]">
                <div>
                    <p>Overall Growth</p>
                    <p className="font-bold">38.40%</p>
                </div>
                <div>
                    <p>Monthly</p>
                    <p className="font-bold">52.49%</p>
                </div>
                <div>
                    <p>Daily</p>
                    <p className="font-bold">4.70%</p>
                </div>
            </div>
            <div className="graph-container">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data}>
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#FEBC3B"
                            strokeDasharray="5 5"
                            strokeWidth={4}
                        />
                        <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#2B3674"
                            strokeDasharray="5 5"
                            strokeWidth={4}
                        />
                        <Line
                            type="monotone"
                            dataKey="amt"
                            stroke="#26A0FC"
                            strokeWidth={4}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TreatmentGraph;
