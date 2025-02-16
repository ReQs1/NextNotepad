import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/app/_lib/utils/utils";
import { Event } from "@/app/_lib/types";
import UsersEvents from "@/app/_components/calendar/UsersEvents";

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) {
  return (
    <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
      <h1 className="mb-2 text-2xl font-bold sm:mb-0">
        {currentDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h1>
      <div className="flex items-center">
        <button onClick={onPrevMonth} className="mr-2">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </button>
        <button onClick={onNextMonth}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </button>
      </div>
    </div>
  );
}

export function WeekDays() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mt-2 grid grid-cols-7 gap-1">
      {weekDays.map((day) => (
        <div key={day} className="hidden p-2 font-bold sm:block">
          {day}
        </div>
      ))}
    </div>
  );
}

export function CalendarSquares({
  monthData,
  currentDate,
  events,
}: {
  monthData: Date[];
  currentDate: Date;
  events: Event[];
}) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-7">
      {monthData.map((date, index) => (
        <div
          key={index}
          className={cn("min-h-[80px] overflow-y-auto border p-2 sm:h-28", {
            ["bg-secondary/30"]: date.getMonth() !== currentDate.getMonth(),
          })}
        >
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm sm:text-base">{date.getDate()}</span>
            <span className="text-xs text-gray-500 sm:hidden">
              {date.toLocaleString("en-US", { weekday: "short" })}
            </span>
          </div>
          <UsersEvents events={events} date={date} />
        </div>
      ))}
    </div>
  );
}
