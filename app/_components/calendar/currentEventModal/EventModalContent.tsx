import { getCurrentEvent } from "@/app/_lib/queries";
import CloseModalButton from "@/app/_components/CloseModalButton";
import DeleteButton from "@/app/_components/calendar/currentEventModal/DeleteButton";

async function EventModalContent({ eventId }: { eventId: string }) {
  const { id, title, description, start, end } = await getCurrentEvent(eventId);

  return (
    <div className="max-h-[450px] w-full max-w-[500px] gap-8 rounded-xl border-2 bg-bg1 px-4 py-5 sm:px-6">
      <CloseModalButton />
      <h2 className="mb-6 break-words text-xl font-semibold text-primary">
        {title}
      </h2>

      <div className="flex flex-col gap-3">
        <div className="grid-rows-[30px, 1fr] grid gap-4 sm:grid-cols-4 sm:grid-rows-[1fr] sm:gap-8">
          <label className="font-semibold sm:col-span-1">Description</label>
          <p className="row-start-2 max-h-20 overflow-y-scroll break-words sm:col-start-2 sm:col-end-5 sm:row-start-1">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:gap-8">
          <label className="col-span-1 font-semibold">Start</label>
          <p className="col-start-2 col-end-5">{start.toLocaleString()}</p>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:gap-8">
          <label className="col-span-1 font-semibold">End</label>
          <p className="col-start-2 col-end-5">{end.toLocaleString()}</p>
        </div>
      </div>

      <div className="text-right">
        <DeleteButton
          className="mt-4 rounded-xl bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-400"
          eventId={id}
        />
      </div>
    </div>
  );
}

export default EventModalContent;
