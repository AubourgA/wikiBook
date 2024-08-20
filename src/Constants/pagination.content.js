import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlineKeyboardArrowRight   } from "react-icons/md"
import { IoIosArrowBack } from "react-icons/io";

export const PAGINATION_BUTTONS = [
    { key: "hydra:first", title: MdKeyboardDoubleArrowLeft  },
    { key: "hydra:previous", title: IoIosArrowBack  },
    { key: "hydra:next", title: MdOutlineKeyboardArrowRight },
    { key: "hydra:last", title: MdKeyboardDoubleArrowRight  }
  ];