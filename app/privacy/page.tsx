import { redirect } from 'next/navigation';

export default function PrivacyPage() {
    // Redirect cleanly using the App Router's server-side redirect
    redirect('https://app.traboda.com/privacy');
}
