import { cityAreas, slugify } from "@/data/areas";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

export const staticRoutes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/terms",
  "/privacy",
] as const;

export const serviceParams = services.map((service) => ({
  slug: service.slug,
}));

export const cityParams = cities.map((city) => ({
  city: city.slug,
}));

export const cityServiceParams = cities.flatMap((city) =>
  services.map((service) => ({
    city: city.slug,
    slug: service.slug,
  })),
);

export const areaParams = cities.flatMap((city) =>
  (cityAreas[city.slug] || []).map((area) => ({
    city: city.slug,
    area: slugify(area),
  })),
);

export const serviceRoutes = serviceParams.map(({ slug }) => `/service/${slug}`);
export const cityRoutes = cityParams.map(({ city }) => `/${city}`);
export const cityServiceRoutes = cityServiceParams.map(({ city, slug }) => `/${city}/service/${slug}`);
export const areaRoutes = areaParams.map(({ city, area }) => `/${city}/${area}`);

export const seoRoutes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...cityRoutes,
  ...cityServiceRoutes,
  ...areaRoutes,
] as string[];

export const routeCounts = {
  static: staticRoutes.length,
  services: serviceRoutes.length,
  cities: cityRoutes.length,
  cityServices: cityServiceRoutes.length,
  areas: areaRoutes.length,
  totalSeo: seoRoutes.length,
};
