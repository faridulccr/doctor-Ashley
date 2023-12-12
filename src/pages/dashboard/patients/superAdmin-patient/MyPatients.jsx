import { BiTransferAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineExpandLess } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const MyPatients = () => {
    const arr = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    return (
        <div className="my-patient-sec font-['DM_Sans'] pr-4">
            <div className="mt-6 flex justify-between">
                <p className="font-semibold text-3xl text-[#2F3241]">
                    My Patients
                </p>
                <div className="btn-container flex items-center gap-3">
                    <div className="search">
                        <RiSearch2Line />
                        <input type="text" />
                    </div>
                    <button className="bg-[#2A659A] text-white">
                        <BiTransferAlt />
                    </button>
                    <button className="bg-[#D8E5F0]">
                        <BsThreeDotsVertical />
                    </button>
                </div>
            </div>

            <div className="table-container mt-5">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>
                                    Branch
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Diagnosis
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Importance
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    File Type
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Upload Date
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Treatment Team
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Comment
                                    <span>
                                        <MdOutlineExpandLess />
                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                    </span>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((num, ind) => (
                            <tr key={ind}>
                                <td>John Doe</td>
                                <td>Confidential</td>
                                <td>High</td>
                                <td>Engagement Letter</td>
                                <td>00/00/0000</td>
                                <td>Author</td>
                                <td>No Comment</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPatients;
