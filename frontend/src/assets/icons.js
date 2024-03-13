import { FaRegUser } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { MdAddCircleOutline, MdLogout, MdOutlineAddPhotoAlternate, MdOutlineExplore } from "react-icons/md";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const icons = {
  closedEye: <TbEyeClosed className="text-2xl text-primary-dark hover:text-primary-light transition" />,
  openEye: <TbEye className="text-2xl text-primary-dark hover:text-primary-light transition" />,
  explore: <MdOutlineExplore className="text-3xl " />,
  home: <HiOutlineHome className="text-3xl" />,
  create: <MdAddCircleOutline className="text-3xl" />,
  logout: <MdLogout className="text-lg" />,
  user: <FaRegUser className="text-xl text-primary-light" />,
  addPhoto: <MdOutlineAddPhotoAlternate className="text-4xl text-primary-light" />
}

export default icons;