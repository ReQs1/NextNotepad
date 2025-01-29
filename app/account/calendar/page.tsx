import Calendar from "@/app/_components/calendar/Calendar";
import { getUserEvents } from "@/app/_lib/queries";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "View and manage your events with our interactive calendar. Stay organized and never miss an important date!",
};

async function CalendarPage() {
  const userEvents = await getUserEvents();

  return (
    <main className="flex-1 bg-bg1 px-2 py-4 sm:px-4 sm:py-8">
      <Calendar events={userEvents} />
    </main>
  );
}

export default CalendarPage;
