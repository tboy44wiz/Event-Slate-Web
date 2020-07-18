import React from 'react';

import DashboardComp from "./dashboard-body-components/Dashboard_Comp";
import MyEventsComp from "./dashboard-body-components/MyEvents_Comp";
import NearbyEventsComp from "./dashboard-body-components/NearbyEvents_Comp";
import UpcomingEventsComp from "./dashboard-body-components/UpcomingEvents_Comp";
import MyAccountComp from "./dashboard-body-components/MyAccount_Comp";

function DashboardBodyContainerComp(props) {

    const { pathname } = props;
    return (
        <div className="dashboardBodyWrapper">
            {
                (pathname === "/home") ? (
                    <DashboardComp />
                ) : (pathname === "/my-account") ? (
                    <MyAccountComp />
                ) : (pathname === "/my-events") ? (
                    <MyEventsComp/>
                ): (pathname === "/nearby-events") ? (
                    <NearbyEventsComp />
                ) : (pathname === "/upcoming-events") ? (
                    <UpcomingEventsComp />
                ) : (pathname === "/notifications") ? (
                    <h1>
                        Notification
                    </h1>
                ) :  (
                    <h1>
                        Settings
                    </h1>
                )
            }
        </div>
    );
}

export default DashboardBodyContainerComp;