export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor Picks',
        href: '#',
        imageSource: '/nav/ui-kits/mixed.jpg'
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSource: '/nav/ui-kits/blue.jpg'
      },
      {
        name: 'Bestsellers',
        href: '#',
        imageSource: '/nav/ui-kits/purple.jpg'
      }
    ]
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        imageSource: '/nav/icons/picks.jpg'
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSource: '/nav/icons/new.jpg'
      },
      {
        name: 'Bestselling Icons',
        href: '#',
        imageSource: '/nav/icons/bestsellers.jpg'
      }
    ]
  }
]