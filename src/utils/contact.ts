export function checkContact(email: string, message: string): "email" | "message" | true {
	if (email.length < 3 || !email.includes("@") || !email.includes(".")) return "email"
	else if (message.length < 3) return "message"
	return true;
}