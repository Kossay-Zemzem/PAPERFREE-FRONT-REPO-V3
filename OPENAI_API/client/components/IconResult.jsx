import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function IconResult({ progress }) {
  if (progress > 80 && progress <= 100) {
    return (
      <CheckCircleIcon className="text-orange-600 inline-block mr-2 w-10 h-10 " />
    );
  } else {
    return (
      <XCircleIcon className="text-red-600 inline-block mr-2 w-14 h-14" />
      /* ffff */
    );
  }
}
