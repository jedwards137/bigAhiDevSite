import React, { useContext } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { UserPermissionsContext } from "../context/UserPermissionsContext";
import { Box, Grid } from '@material-ui/core';
import { PublicLandingPage } from './PublicLandingPage/PublicLandingPage';
import { JedDashboardPage } from "./JedDashboardPage/JedDashboardPage";
import { CashTrackPage } from "./CashTrackPage/CashTrackPage";
import BadBackground from "../BadCCL/BadBackground";

export const BigAhiDevAppContainer = (props: any) => {
	const { permissions } = useContext(UserPermissionsContext);

	function getShowJedDashboard() {
		return permissions.showJedDashboard ? <Route path="jedDashboard" element={<JedDashboardPage />} /> : null;
	}

	function getShowCashTrack() {
		return permissions.showCashTrack ? <Route path="cashTrack" element={<CashTrackPage />} /> : null;
	}

	function getContents() {
		return (
			<Grid container direction='row'>
				{/* <MenuComponent /> */}
				<Grid item container direction='column'>
					<Box>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PublicLandingPage />} />
                {getShowJedDashboard()}
                {getShowCashTrack()}
              </Routes>
            </BrowserRouter>
					</Box>
				</Grid>
			</Grid>
		);
	}

	return (
		<Box>
			{/* <BadBackground /> */}
			{getContents()}
		</Box>
	);
};