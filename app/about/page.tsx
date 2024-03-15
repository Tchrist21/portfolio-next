import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'Information about me',
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Blogger <br />Web Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Hello I am a reader and listener of Lesbian ficton.  I have started this blog for two reasons. One I thorougly enjoy sharing what I have read so other like readers can see if it is something they might enjoy. Two I am learning how to build websites so this will be a way to enjoy and learn at the same time.  I tend to lean more on the romance genre.  So my recommendations might be limited to that audience.
        </p>
      </div>
    </div>
  );
}
