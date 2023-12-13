import { PiBracketsAngleBold } from "react-icons/pi";

const FinancialHealth = () => {
    return (
        <>
            <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                    Financial Health
                </h3>
                <button className="btn bg-[#2A659A] w-fit h-10 text-[#fff] text-[16px] leading-[19px] hover:bg-[#103b61]">
                    Manage Refils
                </button>
            </div>
            <div className="bg-white rounded-bl-[15px] rounded-br-[15px] p-5  text-[#2F3241] font-['DM_Sans']">
                <p className="text-[32px]">Patients</p>

                <table className="text-lg w-full leading-9">
                    <thead>
                        <tr>
                            <td>
                                <p className="flex items-center gap-4">
                                    Last Name
                                    <PiBracketsAngleBold className="rotate-90 text-sm" />
                                </p>
                            </td>
                            <td>
                                <p className="flex items-center gap-4">
                                    Prescription Name
                                    <PiBracketsAngleBold className="rotate-90 text-sm" />
                                </p>
                            </td>
                            <td>
                                <p className="flex items-center gap-4">
                                    Amount of Refills Left
                                    <PiBracketsAngleBold className="rotate-90 text-sm" />
                                </p>
                            </td>
                            <td>
                                <p className="flex items-center gap-4">
                                    Request Made
                                    <PiBracketsAngleBold className="rotate-90 text-sm" />
                                </p>
                            </td>
                            <td>To Do</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bhaktapur</td>
                            <td>Amoxicillin</td>
                            <td>5</td>
                            <td>15</td>
                            <td>
                                <div className="my-3 text-base">
                                    <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                                        Approve
                                    </button>
                                    <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                                        Decline
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bhaktapur</td>
                            <td>Amoxicillin</td>
                            <td>5</td>
                            <td>15</td>
                            <td>
                                <div className="my-3 text-base">
                                    <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                                        Approve
                                    </button>
                                    <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                                        Decline
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bhaktapur</td>
                            <td>Amoxicillin</td>
                            <td>5</td>
                            <td>15</td>
                            <td>
                                <div className="my-3 text-base">
                                    <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                                        Approve
                                    </button>
                                    <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                                        Decline
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bhaktapur</td>
                            <td>Amoxicillin</td>
                            <td>5</td>
                            <td>15</td>
                            <td>
                                <div className="my-3 text-base">
                                    <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                                        Approve
                                    </button>
                                    <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                                        Decline
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bhaktapur</td>
                            <td>Amoxicillin</td>
                            <td>5</td>
                            <td>15</td>
                            <td>
                                <div className="my-3 text-base">
                                    <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                                        Approve
                                    </button>
                                    <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                                        Decline
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bhaktapur</td>
                            <td>Amoxicillin</td>
                            <td>5</td>
                            <td>15</td>
                            <td>
                                <div className="my-3 text-base">
                                    <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                                        Approve
                                    </button>
                                    <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                                        Decline
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FinancialHealth;
