export interface ReceiptSubmit {
	name: string;
	email?: string;
	phone?: string;

	// Use a message to generate the receipt
	messageId: number;
	data?: any;
	defer?: string;
	skip?: boolean;
	dialogMessage?: string;
}
