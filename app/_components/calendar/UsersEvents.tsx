import { Event } from "@/app/_lib/types";
import { usePathname, useRouter } from "next/navigation";

export default function UsersEvents({
  events,
  date,
}: {
  events: Event[];
  date: Date;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const filteredEvents = events.filter(
    (event) => event.start.toDateString() === date.toDateString(),
  );

  return filteredEvents.map((event) => {
    const handleClick = () => {
      const params = new URLSearchParams({ eventId: String(event.id) });
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
      <div
        key={event.id}
        className="mb-1 cursor-pointer truncate rounded bg-purple-400 p-1 text-xs"
        onClick={handleClick}
      >
        <p className="text-priamry font-semibold">{event.title}</p>
      </div>
    );
  });
}
