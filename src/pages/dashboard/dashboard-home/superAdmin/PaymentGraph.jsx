import { FaCheckCircle } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import {
    Line,
    LineChart,
    ResponsiveContainer,
    //  YAxis,
    //  CartesianGrid,
    Tooltip,
    XAxis,
} from "recharts";

const PaymentGraph = () => {
    const data = [
        {
            name: "SEP",
            uv: 4000,
            pv: 2400,
        },
        {
            name: "OCT",
            uv: 3000,
            pv: 1398,
        },
        {
            name: "NOV",
            uv: 2000,
            pv: 9800,
        },
        {
            name: "DEC",
            uv: 2780,
            pv: 3908,
        },
        {
            name: "JAN",
            uv: 1890,
            pv: 4800,
        },
        {
            name: "FEB",
            uv: 1090,
            pv: 4300,
        },
    ];

    return (
        <div className="total-payment">
            <div>
                <h1 className="text-[#2B3674] font-bold text-3xl">$ 250K</h1>
                <p className="text-[#498FCD] text-[11px] flex gap-1 items-center  font-semibold">
                    Total Payments{" "}
                    <span className="flex items-center gap-3 text-[#F39519]">
                        <MdArrowDropUp className="text-[18px]" /> +23%
                    </span>
                </p>
                <p className="text-[#F39519] font-bold text-[15px] mt-5 flex items-center gap-2">
                    <FaCheckCircle /> On track
                </p>
            </div>
            <div className="graph-container">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data}>
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#498FCD"
                            strokeWidth={4}
                        />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#6AD2FF"
                            strokeWidth={4}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <p className="sep">Sep</p>
            </div>
        </div>
    );
};

export default PaymentGraph;
