import { redirect } from 'next/navigation';

export default function TelegramRedirect() {
    const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
    const data = require(`../../src/data/${eventID}/index.json`);
    redirect(data.TelegramInvite);
}
