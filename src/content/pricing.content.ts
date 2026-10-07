import type { PricePlan } from '@/types/content';

export const PRICING_HEAD = {
  kicker: 'No. 06',
  chapter: '第六話',
  title: 'Pricing.',
  text: 'The open beta is free for everyone. Version 1.0 will be a one-time purchase, not a subscription.',
  download: 'Download the open beta',
  downloadHref: '/docs/#install',
};

export const PRICE_PLANS: PricePlan[] = [
  {
    tag: 'Now', name: 'Open beta', price: 'Free', current: true,
    points: ['Free for everyone to download.', 'No account needed.'],
  },
  {
    tag: 'From v1.0', name: 'Volpi 1.0', price: 'Pay once',
    points: ['A one-time purchase. No subscription.', 'The price will be announced on this website before version 1.0.'],
  },
];
