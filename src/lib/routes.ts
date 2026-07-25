import { cityAreas, slugify } from "@/data/areas";
import { brands } from "@/data/brands";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

export const staticRoutes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/terms",
  "/privacy",
  "/brand/not-listed",
] as const;

export const serviceParams = services.map((service) => ({
  slug: service.slug,
}));

export const brandParams = brands.map((brand) => ({
  brand: brand.slug,
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
export const brandRoutes = brandParams.map(({ brand }) => `/brand/${brand}`);
export const cityRoutes = cityParams.map(({ city }) => `/${city}`);
export const cityServiceRoutes = cityServiceParams.map(({ city, slug }) => `/${city}/service/${slug}`);
export const areaRoutes = areaParams.map(({ city, area }) => `/${city}/${area}`);

export const seoRoutes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...brandRoutes,
  ...cityRoutes,
  ...cityServiceRoutes,
  ...areaRoutes,
] as string[];

export const routeCounts = {
  static: staticRoutes.length,
  services: serviceRoutes.length,
  brands: brandRoutes.length,
  cities: cityRoutes.length,
  cityServices: cityServiceRoutes.length,
  areas: areaRoutes.length,
  totalSeo: seoRoutes.length,
};
