import { useState } from "react";
import { UserPermissions } from "../../model/UserPermissions.model";
import { RbacPermissions } from "../../utils/Constants";

export const usePermissions = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const processPermissions = () => {
		setIsError(false);
		setIsLoading(true);

		let permissions = new UserPermissions();
		try {
			const userPermissions = [
				'bad.jeddashboard.show',
				'bad.cashtrack.show'
			];
			if (userPermissions && userPermissions.length > 0) {
				permissions.showJedDashboard = userPermissions.indexOf(RbacPermissions.JED_DASHBOARD_HIDE.toLowerCase()) === -1;
				permissions.showCashTrack = userPermissions.indexOf(RbacPermissions.CASH_TRACK_HIDE.toLowerCase()) === -1;
			}
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
		return permissions;
	};
	return { isLoading, isError, processPermissions };
};