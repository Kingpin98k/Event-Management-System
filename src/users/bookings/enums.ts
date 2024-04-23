export enum bookingRoutes {
	POSTBOOKING = "/",
	GETLIVECOUNT = "/livecount",
	FETCHBOOKING = "/find",
	UPDATETICKETISUED = "/updateticketissued",
	RESENDEMAIL = "/resendemail",
	ONSPOTBOOKING = "/onSpotBooking",
	ONSPOTBOOKINGUPDATE = "/onSpotBookingUpdate",
}

export enum TicketStatus {
	PENDING = "pending",
	SUCCESS = "success",
	FAILED = "failed",
}

export enum PaymentStatus {
	PENDING = "pending",
	SUCCESS = "success",
	FAILED = "failed",
}