import { HiOutlineHome } from "react-icons/hi";
import { MdAddCircleOutline, MdOutlineExplore } from "react-icons/md";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const icons = {
  closedEye: <TbEyeClosed className="text-2xl text-primary-dark hover:text-primary-light transition" />,
  openEye: <TbEye className="text-2xl text-primary-dark hover:text-primary-light transition" />,
  explore: <MdOutlineExplore className="text-3xl " />,
  home: <HiOutlineHome className="text-3xl" />,
  create: <MdAddCircleOutline className="text-3xl" />
}

export default icons;