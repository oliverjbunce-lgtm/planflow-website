import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req) {
  const { name, email, company, phone, message } = await req.json()
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'oliverjbunce@gmail.com',
      subject: `Quoflow enquiry from ${company || name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`
    })
    return Response.json({ success: true })
  } catch (e) {
    return Response.json({ success: false }, { status: 500 })
  }
}
