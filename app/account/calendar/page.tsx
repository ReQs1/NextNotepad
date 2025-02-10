import Calendar from "@/app/_components/calendar/Calendar";
import EventModal from "@/app/_components/calendar/currentEventModal/EventModal";
import EventModalContent from "@/app/_components/calendar/currentEventModal/EventModalContent";
import DeleteEventModal from "@/app/_components/calendar/deleteModal/DeleteEventModal";
import Spinner from "@/app/_components/Spinner";
import { getUserEvents } from "@/app/_lib/queries";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "View and manage your events with our interactive calendar. Stay organized and never miss an important date!",
};

async function CalendarPage({
  searchParams,
}: {
  searchParams: { eventId?: string; eventDelete?: string };
}) {
  const userEvents = await getUserEvents();
  const { eventId, eventDelete } = searchParams;

  return (
    <>
      <main className="flex-1 bg-bg1 px-2 py-4 sm:px-4 sm:py-8">
        <Calendar events={userEvents} />
      </main>

      {eventId && !eventDelete && (
        <EventModal eventId={eventId}>
          <Suspense key={eventId} fallback={<Spinner />}>
            <EventModalContent eventId={eventId} />
          </Suspense>
        </EventModal>
      )}

      {eventDelete && !eventId && (
        <DeleteEventModal deleteModalId={eventDelete} />
      )}
    </>
  );
}

export default CalendarPage;
