import { useTheme } from "next-themes";
import { SetStateAction } from "react";
import toast from "react-hot-toast";
import { TAnyZodSafeFunctionHandler } from "zsa";
import { useServerAction } from "zsa-react";

function useServerActionWithToast(
  fn: TAnyZodSafeFunctionHandler,
  setIsOpen: React.Dispatch<SetStateAction<boolean>>,
  {
    successMessage,
    errorMessage,
  }: { successMessage: string; errorMessage: string },
) {
  const { theme } = useTheme();

  const toastStyle = {
    background: `${theme === "light" ? "rgb(255 255 255) " : "rgb(34 34 34)"}`,
    color: `${theme === "light" ? "rgb(17 24 39)" : "rgb(238 238 238)"}`,
  };

  const { isPending, execute } = useServerAction(fn, {
    onSuccess: () => {
      toast.success(successMessage, {
        style: toastStyle,
      });
      setIsOpen(false);
    },
    onError: () => {
      toast.error(errorMessage, {
        style: toastStyle,
      });
    },
  });

  return { isPending, execute };
}

export default useServerActionWithToast;
