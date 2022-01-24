export class UserPermissions {
	showJedDashboard: boolean = true;
	showCashTrack: boolean = false;

	setShowJedDashboard(showJedDashboard?: boolean) {
		if (showJedDashboard != null) {
			this.showJedDashboard = showJedDashboard;
		}
	}

	setShowCashTrack(showCashTrack?: boolean) {
		if (showCashTrack != null) {
			this.showCashTrack = showCashTrack;
		}
	}

	constructor(
		showJedDashboard?: boolean,
		showCashTrack?: boolean
	) {
		this.setShowJedDashboard(showJedDashboard);
		this.setShowCashTrack(showCashTrack);
	}
}