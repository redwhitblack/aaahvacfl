export const site = {
  legalName: "AAA Heating A/C & Refrigeration of Naples, Inc.",
  shortName: "AAA HVAC",
  domain: "aaahvacfl.com",
  url: "https://aaahvacfl.com",
  owner: "Mike Palon",
  founded: 1999,
  years: new Date().getFullYear() - 1999,
  phone: "",
  phoneReady: false,
  city: "Naples",
  state: "FL",
  description:
    "Heating, air, and refrigeration for homes, companies, and industrial sites in Naples and Fort Myers. Mike Palon, owner and operator. Since 1999.",
} as const;

export const telHref = site.phoneReady ? `tel:+1${site.phone}` : "/contact";
export const smsHref = site.phoneReady ? `sms:+1${site.phone}` : "/contact";

export const areas = [
  "Naples",
  "North Naples",
  "East Naples",
  "Fort Myers",
  "Fort Myers Beach",
  "Cape Coral",
  "Estero",
  "Bonita Springs",
  "Sanibel",
  "Marco Island",
  "Golden Gate",
  "Golden Gate Estates",
  "Lely",
  "Vineyards",
  "Pelican Bay",
  "Pine Ridge",
  "Ave Maria",
  "Immokalee",
  "Isle of Capri",
  "Lehigh Acres",
] as const;

export const services = [
  {
    slug: "repair",
    title: "AC repair",
    lead: "Warm rooms, a noisy unit, a breaker that will not stay on — we find the problem and fix it.",
    body: "We work on the system you already have: split systems, package units, heat pumps, and mini-splits. You get a straight answer before any parts come off.",
    image: "/media/repair-service.jpg",
    alt: "Service gauges on a condenser at a Southwest Florida home",
  },
  {
    slug: "install",
    title: "Replacement & install",
    lead: "When a repair is no longer worth it, we put in a system that fits the building and this heat.",
    body: "Air conditioners down here run most of the year. Heat, humidity, and salt air wear them out. We replace what needs replacing and will not sell you a bigger unit than the job needs.",
    image: "/media/hero-estate.jpg",
    alt: "Luxury Southwest Florida estate with an outdoor air conditioner",
  },
  {
    slug: "refrigeration",
    title: "Refrigeration",
    lead: "Walk-in coolers, reach-ins, and ice machines for restaurants and businesses.",
    body: "If the cooler is down, product is at risk. We service commercial refrigeration as well as home air.",
    image: "/media/cooler-premium.jpg",
    alt: "Clean commercial walk-in cooler with organized produce",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    lead: "Coil cleaning, drain lines, capacitors, and seasonal checkups.",
    body: "A clogged drain or a weak capacitor will take a system down on the hottest afternoon. Regular service costs less than an emergency call.",
    image: "/media/interior.jpg",
    alt: "Cool living room looking out to palms and a pool",
  },
] as const;
