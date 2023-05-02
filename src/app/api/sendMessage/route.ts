import {NextRequest, NextResponse} from "next/server";
import {checkContact} from "@/utils/contact";
import {DISCORD_WEBHOOK} from "@/utils/environment";


export async function POST(request: NextRequest) {
	try {
		const {email, message} = await request.json();
		const checkInputs = checkContact(email ?? "", message ?? "");

		if (checkInputs !== true) {
			return NextResponse.json({success: false, error: checkInputs})
		}

		const result = await fetch(DISCORD_WEBHOOK, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				content: "New email received.",
				embeds: [
					{
						description: message,
						author: {
							name: email,
						},
						fields: [
							{
								name: "ip",
								value:
									request.ip ??
									request.headers.get("x-forwarded-for") ??
									"unknown",
							},
							{
								name: "sentAt",
								value: new Date().toLocaleString(),
							},
						],
					},
				],
			}),
		});

		if (result.status >= 400) {
			throw new Error(await result.json())
		}

		return NextResponse.json({success: true});
	} catch (e) {
		console.error("SendMessage Error: ", e)
		return NextResponse.json({success: false}, {status: 500})
	}
}