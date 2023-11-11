// HOUSE 1 ==========================================================================
import house1_front from "./assets/images/Releases/1.jpg";
import img1_house1 from "./assets/images/Releases/1.jpg";
import img2_house1 from "./assets/images/Releases/2.jpg";
import img3_house1 from "./assets/images/Releases/3.jpg";
import img4_house1 from "./assets/images/Releases/4.jpg";
import img5_house1 from "./assets/images/Releases/5.jpg";

let housesReleases = [
  {
    id: 0,
    name: `CRUZEIRO`,
    neighborhood: "jd. liberdade",
    type: "releases",
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
    ducimus hic error velit libero aut tempora ut porro iste
    distinctio quos repellat consequuntur, ea commodi illum optio
    omnis modi voluptatum. Commodi ex eos numquam enim dicta eum?
    Ducimus rem cum recusandae distinctio. Vero, quis quidem. Corrupti
    dolorum, dicta ducimus officia .`,
    front_img: house1_front,
    rooms: 5,
    bathrooms: 2,
    class: 3,
    parking_space: 3,
    building_area: "280m²",
    land_area: "180m²",
    imgs: [img1_house1, img2_house1, img3_house1, img4_house1, img5_house1],
  },
];

export default housesReleases;
