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
