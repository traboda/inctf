import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import ThemeWrapper from '../src/components/shared/ThemeWrapper';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../src/data/${eventID}/index.json`);

const DiscordRedirect = () => {

  const router = useRouter();

  useEffect(() => {
    router.push(data.DiscordInvite);
  }, []);

  return (
    <ThemeWrapper meta={{ title: `Join ${eventID} Discord Server` }} hideTopBar={true}>
      <div className="flex flex-col items-center justify-center w-screen h-screen relative z-10">
        <Image src={`/${eventID}/assets/logo_dark.png`} alt={eventID} height={300} width={200} />
        <h1 className="mt-5 text-ghost-white font-heading text-2xl font-bold">
          Thank you for joining
          {' '}
          {eventID}
          {' '}
          Discord Server
        </h1>
        <h1 className="mt-1 text-slate-satellite font-mono">Please wait while we redirect you ...</h1>
      </div>
    </ThemeWrapper>
  );
};

export default DiscordRedirect;