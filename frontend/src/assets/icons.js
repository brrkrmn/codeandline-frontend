import { FaEdit, FaFolder, FaRegUser, FaTrash } from "react-icons/fa";
import { FaArrowDown, FaArrowUp, FaEllipsisVertical } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi";
import { MdAddCircleOutline, MdLogout, MdOutlineAddPhotoAlternate, MdOutlineExplore, MdOutlinePublic, MdOutlinePublicOff } from "react-icons/md";
import { PiArrowBendDownRight, PiNotepad } from "react-icons/pi";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const icons = {
  closedEye: <TbEyeClosed className="text-2xl text-primary-dark hover:text-primary-light transition" />,
  openEye: <TbEye className="text-2xl text-primary-dark hover:text-primary-light transition" />,
  explore: <MdOutlineExplore className="text-3xl " />,
  home: <HiOutlineHome className="text-3xl" />,
  create: <MdAddCircleOutline className="text-3xl" />,
  logout: <MdLogout className="text-lg" />,
  user: <FaRegUser className="text-xl text-primary-light" />,
  addPhoto: <MdOutlineAddPhotoAlternate className="text-4xl text-primary-light" />,
  arrowDown: <FaArrowDown className="text-xl text-primary-light" />,
  arrowUp: <FaArrowUp className="text-xl text-primary-light" />,
  arrowDownRight: <PiArrowBendDownRight className="text-foreground-dark min-w-6 min-h-6" />,
  dot: <GoDotFill className="text-foreground-dark min-w-4 min-h-4" />,
  public: <MdOutlinePublic className="text-primary-light text-2xl" />,
  private: <MdOutlinePublicOff className="text-primary-light text-2xl" />,
  note: <PiNotepad className="text-primary-light text-xl" />,
  folder: <FaFolder className="text-primary-dark text-xl transition" />,
  menu: <FaEllipsisVertical className="text-2xl text-primary-light" />,
  trash: <FaTrash className="text-lg text-foreground-dark" />,
  edit: <FaEdit className="text-xl text-foreground-dark" />
}

export default icons;