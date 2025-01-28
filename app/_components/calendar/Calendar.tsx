"use client";

import {
  CalendarHeader,
  WeekDays,
  CalendarSquares,
} from "@/app/_components/calendar/CalendarContent";
import CalendarModal from "@/app/_components/calendar/CalendarModal";
import { Event } from "@/app/_lib/types";
import { getMonthData } from "@/app/_lib/utils/calendarUtils";
import { useState } from "react";

type Props = {
  events: Event[];
};

function Calendar({ events }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthData = getMonthData(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  return (
    <div className="flex max-w-screen-2xl flex-col gap-1 p-4">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <CalendarModal />

      <WeekDays />

      <CalendarSquares
        monthData={monthData}
        currentDate={currentDate}
        events={events}
      />
    </div>
  );
}

export default Calendar;

{
  /* <Dialog>
<DialogTrigger asChild>
  <Button className="mt-4 w-full sm:w-auto">Add Event</Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
  <DialogHeader>
    <DialogTitle>Add New Event</DialogTitle>
  </DialogHeader>
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="title" className="text-right">
        Title
      </Label>
      <Input
        id="title"
        value={newEvent.title}
        onChange={(e) =>
          setNewEvent({ ...newEvent, title: e.target.value })
        }
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="start" className="text-right">
        Start
      </Label>
      <Input
        id="start"
        type="datetime-local"
        value={newEvent.start.toISOString().slice(0, 16)}
        onChange={(e) =>
          setNewEvent({ ...newEvent, start: new Date(e.target.value) })
        }
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="end" className="text-right">
        End
      </Label>
      <Input
        id="end"
        type="datetime-local"
        value={newEvent.end.toISOString().slice(0, 16)}
        onChange={(e) =>
          setNewEvent({ ...newEvent, end: new Date(e.target.value) })
        }
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="description" className="text-right">
        Description
      </Label>
      <Input
        id="description"
        value={newEvent.description}
        onChange={(e) =>
          setNewEvent({ ...newEvent, description: e.target.value })
        }
        className="col-span-3"
      />
    </div>
  </div>
  <Button onClick={handleAddEvent} className="w-full">
    Add Event
  </Button>
</DialogContent>
</Dialog> */
}
