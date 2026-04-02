import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, company, message } = await req.json()

    if (!name || !email) {
      return Response.json({ error: 'Name and email required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Quoflow <onboarding@resend.dev>',
      to: 'oliverjbunce@gmail.com',
      replyTo: email,
      subject: `New demo request from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0b1f33;">
          <h2 style="margin-bottom: 4px;">New Quoflow Demo Request</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 100px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007AFF;">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; font-weight: 600;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
            ${message ? `<tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 8px 0;">${message.replace(/\n/g, '<br/>')}</td></tr>` : ''}
          </table>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
