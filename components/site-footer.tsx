import { siteConfig } from '@/config/site';
import { Github, Mail, X } from 'lucide-react';
import { Icons } from './icons';
export function SiteFooter() {
  return (
    <div className="mb-6 mt-14 flex flex-col items-center">
      <div className="mb-3 flex gap-6 space-x-4">
        <a
          target="_blank"
          rel="noreffer"
          href="mailto:christophert@teksavee.com"
        >
          <span className="sr-only">Mail</span>
          <Mail className="h-6 w-6" />
        </a>
        <a target="_blank" rel="noreffer" href={siteConfig.links.twitter}>
          <span className="sr-only">Twitter</span>
          <Icons.twitter className="h-6 w-6" />
        </a>
        <a
          target="_blank"
          rel="noreffer"
          href={siteConfig.links.github}
        >
          <span className="sr-only">Github</span>
          <Icons.gitHub className="h-6 w-6" />
        </a>
      </div>
      <div className="mb-4 mt-2 space-x-2 text-sm text-muted-foreground">
        <a href={siteConfig.links.personalSite} target='_blank'>{siteConfig.author}</a>

      </div>
    </div>
  );
}
