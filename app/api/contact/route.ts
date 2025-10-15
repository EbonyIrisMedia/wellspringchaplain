export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO || "jen@wellspringchaplain.com";
    const FROM = process.env.CONTACT_FROM || "site@wellspringchaplain.com";

    if (RESEND_API_KEY) {
      const payload = {
        from: FROM,
        to: [TO],
        subject: `Site Inquiry from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p>${message.replace(/\n/g, "<br/>")}</p>`
      };

      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!r.ok) {
        const text = await r.text();
        console.error("Resend error", text);
      }
    } else {
      console.log("Contact message", { name, email, message });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
