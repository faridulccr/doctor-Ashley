const Header = () => {
    return (
        <header>
            <div className="text-sm breadcrumbs w-fit mx-auto">
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/dashboard/secretary">Secretary</a>
                    </li>
                    <li>
                        <a href="/dashboard/clinic-manager">Clinic-Manager</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
