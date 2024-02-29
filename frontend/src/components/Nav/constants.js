import icons from "../../assets/icons";

export const navLinks = [
  'create',
  'home',
  'explore'
]
export const linkProps = {
  create: {
    name: 'create',
    path: '/create',
    label: 'Create',
    icon: icons.create
  },
  home: {
    name: 'home',
    path: '/',
    label: 'Home',
    icon: icons.home
  },
  explore: {
    name: 'explore',
    path: '/explore',
    label: 'Explore',
    icon: icons.explore
  }
}