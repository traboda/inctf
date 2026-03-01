import { redirect } from 'next/navigation';

export default function DiscordRedirect() {
    const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID || 'inctf';
    const data = require(`../../src/data/${eventID}/index.json`);
    redirect(data.DiscordInvite);
}
