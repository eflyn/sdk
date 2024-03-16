export interface PaymentApproveOptions {
	test?: boolean;
	amount: number;
	subtotal?: number;
	invoice: string;
	skipThankYou?: boolean;
	description?: string;
	refund?: boolean;
}
