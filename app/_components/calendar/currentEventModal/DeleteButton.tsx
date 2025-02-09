"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

function DeleteButton({
  className,
  eventId,
}: {
  className: string;
  eventId: number;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    const params = new URLSearchParams();
    params.append("eventDelete", eventId.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button onClick={onClick} className={className}>
      Delete
    </button>
  );
}

export default DeleteButton;
