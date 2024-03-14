import { FaRegUser } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi";
import { MdAddCircleOutline, MdLogout, MdOutlineAddPhotoAlternate, MdOutlineExplore } from "react-icons/md";
import { PiArrowBendDownRight } from "react-icons/pi";
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
  arrowDownRight: <PiArrowBendDownRight className="text-foreground-dark text-xl" />,
  dot: <GoDotFill className="text-foreground-dark text-sm" />,
}

export default icons;