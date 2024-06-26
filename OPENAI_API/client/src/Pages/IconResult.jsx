import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

function IconResult(props) {
  if (props.progress > 80 && props.progress <= 100) {
    return (
      <CheckCircleIcon className="text-green-500 inline-block mr-2 w-10 h-10 " />
    );
  } else {
    return (
      <XCircleIcon className="text-red-600 inline-block mr-2 w-10 h-10" />
      /* ffff */
    );
  }
}

export default IconResult;
