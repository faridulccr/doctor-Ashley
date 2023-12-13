import PatientProfile from "../../../../components/PatientProfile";

const Profile = () => {
    return (
        <div className="profile-details p-8">
            <PatientProfile />

            <div className="general-info">
                <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                    General Info
                </h3>
                <table>
                    <tbody className="text-[18px] leading-[22px] text-[#626264]">
                        <tr>
                            <td>Open Date</td>
                            <td className="text-[#2A659A]">00/00/0000</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td className="text-[#2A659A]">Scottsdale AZ</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td className="text-[#2A659A]">
                                name.name@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td className="text-[#2A659A]">520-909-0865</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="active-employees mt-[18px]">
                <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                    Active Employees
                </h3>
                <ul className="text-[18px] leading-[22px] text-[#626264]">
                    <li>21 Nurse Practitioners</li>
                    <li>3 Doctors</li>
                    <li>2 Physical Therapists</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
