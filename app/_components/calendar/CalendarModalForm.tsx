import { eventSchema } from "@/app/_lib/zodSchemas";
import CloseModalButton from "@/app/_components/CloseModalButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ContentProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  execute: any;
  isPending: boolean;
};

function CalendarModalForm({ setIsOpen, execute, isPending }: ContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      start: new Date().toISOString().slice(0, 16),
      end: new Date().toISOString().slice(0, 16),
    },
  });

  return (
    <div className="relative w-full max-w-[500px] rounded-xl border-2 border-gray-200 bg-bg1 px-3 py-5 shadow-lg sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold text-primary">Add an event</h2>
      <CloseModalButton setIsOpen={setIsOpen} />

      <form onSubmit={handleSubmit((value) => execute(value))}>
        <div className="flex flex-col gap-4 p-4">
          {/* title input */}
          <div className="grid grid-cols-4 items-center gap-3">
            <label
              htmlFor="title"
              className="cursor-pointer text-right font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="col-span-3 rounded-md border border-secondary px-2 py-1"
            />
            {errors.title?.message && (
              <p className="col-span-3 col-start-2 text-center text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* description input */}
          <div className="grid grid-cols-4 items-center gap-3">
            <label
              htmlFor="description"
              className="cursor-pointer text-right font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows={3}
              className="col-span-3 resize-none rounded-md border border-secondary px-2 py-1"
            />
            {errors.description?.message && (
              <p className="col-span-3 col-start-2 text-center text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* date start input */}
          <div className="grid grid-cols-4 items-center gap-3">
            <label
              htmlFor="start"
              className="cursor-pointer text-right font-semibold"
            >
              Start
            </label>
            <input
              type="datetime-local"
              id="start"
              {...register("start")}
              className="col-span-3 rounded-md border border-secondary px-2 py-1"
            />
          </div>

          {/* date end input */}
          <div className="grid grid-cols-4 items-center gap-3">
            <label
              htmlFor="start"
              className="cursor-pointer text-right font-semibold"
            >
              End
            </label>
            <input
              type="datetime-local"
              id="end"
              {...register("end")}
              className="col-span-3 rounded-md border border-secondary px-2 py-1"
            />
            {errors.end?.message && (
              <p className="col-span-3 col-start-2 text-center text-sm text-red-500">
                {errors.end.message}
              </p>
            )}
          </div>
        </div>
        <SubmitButton isPending={isPending} />
      </form>
    </div>
  );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      disabled={isPending}
      type="submit"
      className="w-full rounded-md bg-primary p-2 font-semibold text-bg1 transition-colors duration-300 hover:bg-primary/70 disabled:bg-primary/70"
    >
      {isPending ? "Adding event..." : "Add Event"}
    </button>
  );
}

export default CalendarModalForm;
