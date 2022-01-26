import React, { useContext, useEffect } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { UserPermissionsContext } from "../context/UserPermissionsContext";
import { LocalizationContext } from "../context/LocalizationContext";
import { Box, Grid } from '@material-ui/core';
import { PublicLandingPage } from './PublicLandingPage/PublicLandingPage';
import { JedDashboardPage } from "./JedDashboardPage/JedDashboardPage";
import { CashTrackPage } from "./CashTrackPage/CashTrackPage";
import BadBackground from "../BadCCL/BadBackground";
import { DateTimeFormatter } from "../utils/DateTimeFormatter";

export const BigAhiDevAppContainer = (props: any) => {
  const { permissions } = useContext(UserPermissionsContext);
  const { setDateFormatter } = useContext(LocalizationContext);

  useEffect(() => {
    setDateFormatter(new DateTimeFormatter());
  }, []);

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