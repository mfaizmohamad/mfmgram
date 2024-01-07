
import home from '../../public/assets/icons/home.svg';
import wallpaper from '../../public/assets/icons/wallpaper.svg';
import people from '../../public/assets/icons/people.svg';
import bookmark from '../../public/assets/icons/bookmark.svg';
import galleryAdd from '../../public/assets/icons/gallery-add.svg';


export const sidebarLinks = [
  {
    imgURL: home,
    route: "/mfmgram/",
    label: "Home",
  },
  {
    imgURL:wallpaper,
    route: "/mfmgram/explore",
    label: "Explore",
  },
  {
    imgURL: people,
    route: "/mfmgram/all-users",
    label: "People",
  },
  {
    imgURL: bookmark,
    route: "/mfmgram/saved",
    label: "Saved",
  },
  {
    imgURL: galleryAdd,
    route: "/mfmgram/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    imgURL: home,
    route: "/mfmgram/",
    label: "Home",
  },
  {
    imgURL: wallpaper,
    route: "/mfmgram/explore",
    label: "Explore",
  },
  {
    imgURL: bookmark,
    route: "/mfmgram/saved",
    label: "Saved",
  },
  {
    imgURL: galleryAdd,
    route: "/mfmgram/create-post",
    label: "Create",
  },
];