import { PiBracketsAngleBold } from "react-icons/pi";

const Billing = () => {
    return (
        <div className="billing">
            <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                    Billing
                </h3>
                <button className="btn bg-[#2A659A] w-fit h-10 text-[#fff] text-[16px] leading-[19px] hover:bg-[#103b61]">
                    Create Invoice
                </button>
            </div>

            <div className="billing-content bg-white rounded-bl-[15px] rounded-br-[15px] p-5 text-lg  text-[#2F3241] font-['DM_Sans'] grid grid-cols-2 gap-5">
                <div>
                    <p className="text-[22px] mb-3">Invoice</p>

                    <table className="text-lg w-full leading-9">
                        <thead>
                            <tr>
                                <td>
                                    <p className="flex items-center gap-4">
                                        Name
                                        <PiBracketsAngleBold className="rotate-90 text-sm" />
                                    </p>
                                </td>
                                <td>
                                    <p className="flex items-center gap-4">
                                        Bill Status
                                        <PiBracketsAngleBold className="rotate-90 text-sm" />
                                    </p>
                                </td>
                                <td>
                                    <p className="flex items-center gap-4">
                                        Paid
                                        <PiBracketsAngleBold className="rotate-90 text-sm" />
                                    </p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bhaktapur, Angie</td>
                                <td>Outstanding</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>Bhaktapur, Angie</td>
                                <td>Outstanding</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>Bhaktapur, Angie</td>
                                <td>Outstanding</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>Bhaktapur, Angie</td>
                                <td>Outstanding</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>Bhaktapur, Angie</td>
                                <td>Outstanding</td>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <td>Bhaktapur, Angie</td>
                                <td>Outstanding</td>
                                <td>Y</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p className="text-[22px] mb-3">
                        Billing for Angie Bharatpur
                    </p>
                    <p>Clinician Services for Guarantor #12314134</p>

                    <div className="bg-[#DAE9F5] rounded-[20px] py-10 px-16 mt-5">
                        <p className="text-[22px] mb-3">
                            Responsible for Payment
                        </p>
                        <ul>
                            <li>Angie Bharatpur</li>
                            <li>Guarantor #1231231</li>
                            <li>123 SESAME ST, FAIRLESS HILLS, PA 280240</li>
                            <li>123-456-7899</li>
                            <li>angiebharatpur@hotmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
