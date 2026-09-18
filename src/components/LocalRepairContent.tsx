import Link from "next/link";
import type { CityData } from "@/data/cities";
import { cityAreas, slugify } from "@/data/areas";
import { services, type ServiceData } from "@/data/services";
import { getLocalGuide, localServiceCopy, repairCostFactors, repairName } from "@/data/local-content";

export default function LocalRepairContent({ city, area, service }: { city: CityData; area?: string; service?: ServiceData }) {
  const guide = getLocalGuide(city.slug);
  const place = area ? `${area}, ${city.name}` : city.name;
  const prefix = `/${city.slug}${area ? `/${slugify(area)}` : ""}`;
  const copy = service ? localServiceCopy(city, service) : undefined;
  return (
    <section className="my-8 space-y-6" aria-label={`Repair guide for ${place}`}>
      <nav aria-label="Location breadcrumbs" className="flex flex-wrap gap-2 text-sm text-muted-foreground">
        <Link href={`/${city.slug}`} className="text-primary hover:underline">{city.name}</Link>
        {area && <><span aria-hidden="true">/</span><Link href={prefix} className="text-primary hover:underline">{area}</Link></>}
        {service && <><span aria-hidden="true">/</span><span>{repairName(service)}</span></>}
      </nav>
      <div className="rounded-3xl border border-border bg-card p-5 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold">{service ? `${repairName(service)} in ${place}: planning your visit` : area ? `Booking appliance service in ${place}` : guide.heading}</h2>
        <p className="text-muted-foreground leading-relaxed">{copy?.summary || guide.intro}</p>
        <p className="text-muted-foreground leading-relaxed">{copy?.advice || guide.planning}</p>
        {area && <p className="text-muted-foreground leading-relaxed">For a visit in {area}, include your street, building or house number, a nearby landmark and the appliance model. Your appointment window and any visit charge are confirmed for the exact address. This is a doorstep service coverage page, not a separate branch address.</p>}
      </div>
      {service ? <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-5 space-y-3">
          <h3 className="text-lg font-semibold">What affects the {service.title.toLowerCase()} repair quote?</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">{repairCostFactors(service).map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="text-sm text-muted-foreground">Request an itemised quote after diagnosis. Confirm the part specification, labour, taxes, visit charge and written warranty terms before approving work.</p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-5 space-y-3">
          <h3 className="text-lg font-semibold">Information to send before the visit</h3>
          <p className="text-muted-foreground">Share the model number, error code, when the fault started and whether it occurs every time. Photos of the model label or error display can help identify the appliance; keep electrical covers closed.</p>
          <p className="text-muted-foreground">Tell us about installation access, previous repairs and whether the appliance is under a manufacturer warranty. Check that warranty before authorising third-party work.</p>
          <Link href={`/${city.slug}/services`} className="inline-block text-primary hover:underline">Browse other appliance services in {city.name}</Link>
        </div>
      </div> : <div>
        <h3 className="text-xl font-semibold mb-4">Choose the appliance that needs attention</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((item) => <Link key={item.slug} href={`${prefix}/service/${item.slug}`} className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40">
          <h4 className="font-semibold">{repairName(item)} in {area || city.name}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{localServiceCopy(city, item).summary}</p>
        </Link>)}</div>
      </div>}
      {!area && <div>
        <h3 className="text-xl font-semibold mb-3">{service ? `${service.title} service by locality` : `Explore ${city.name} coverage`}</h3>
        <p className="text-sm text-muted-foreground mb-3">Choose your locality and confirm availability for your full address when booking.</p>
        <div className="flex flex-wrap gap-2">{(cityAreas[city.slug] || []).map((name) => <Link key={name} href={`/${city.slug}/${slugify(name)}${service ? `/service/${service.slug}` : ""}`} className="rounded-full border border-border px-3 py-2 text-sm hover:text-primary">{name}</Link>)}</div>
      </div>}
    </section>
  );
}
