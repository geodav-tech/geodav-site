---
title: "Colorado Avalanche Information Center Dashboard"
tagline: "Interactive dashboard to allow avalanche forecasters to easily analyze recent avalanches."
summary: [
  "Combines information from two different state agencies, each running different software",
  "Clicking charts allows users to intuitively filter the data using multiple dimensions to generate a report customized to their needs"
]
coverImage: "./caic-avalanche-explorer.png"
demoUrl: 'https://forecasts.avalanche.state.co.us/explorer/'
weight: 8  # higher weight means it is more likely to be shown, and will be shown first
servicesUsed: ['interactive-dashboards', 'interactive-maps', 'systems-integration']
testimonial: {
  name: "Mike Cooperstein",
  url: "https://www.avalanche.state.co.us/",
  title: "Colorado Avalanche Information Center",
  quote: "We worked with geodav to create a dashboard that is used by forecasters and the public to view the distribution of avalanches.",
  starCount: 5,
  photo: "./coop.jpeg"
}
additionalImages: [
  './interactive-dashboard-with-filtering-date-selection.png',
  './interactive-dashboard-with-filtering-lasso-points.png'
]
---
#### How We Help
The Colorado Avalanche Information Center compiles multi-dimensional data on thousands of avalanches that occur statewide each year. We worked with them to create an interactive dashboard that allows both professional avalanche forecasters and recreational backcountry users to analyze recent avalanche activity to ensure they're aware of the current risks that the snowpack presents. Users can easily filter the dashboard to see only the information that is relevant to their planned trip, providing a quick and accurate picture of what they can expect when venturing outdoors in the winter.

#### Highlights
- The dashboard integrates data from multiple state agencies, allowing users to see observed avalanches from disparate sources all in one place.
- The ability to cross-filter on multiple dimensions simultaneously provides incredible versatility when users are only concerned with a specific subset of the data.
- We were able to provide a quick prototype within days of starting the project, greatly increasing the speed at which we could iterate and get the final version in production.
- One dashboard services both forecasters and the general public: we were able to save considerable development time by conditionally rendering different aspects of the page if forecasters are already logged into the main CAIC site.
- This standalone app seamlessly integrates with their existing site and design aesthetic.