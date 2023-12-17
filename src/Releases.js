// HOUSE 1 ==========================================================================
import house1_front from "./assets/images/Releases/1.jpg";
import img1_house1 from "./assets/images/Releases/1.jpg";
import img2_house1 from "./assets/images/Releases/2.jpg";
import img3_house1 from "./assets/images/Releases/3.jpg";
import img4_house1 from "./assets/images/Releases/4.jpg";
import img5_house1 from "./assets/images/Releases/5.jpg";

// HOUSE 2 ==========================================================================
import house2_front from "./assets/images/Releases/Build/1.jpg";
import img1_house2 from "./assets/images/Releases/Build/1.jpg";
import img2_house2 from "./assets/images/Releases/Build/2.jpg";
import img3_house2 from "./assets/images/Releases/Build/3.jpg";
import img4_house2 from "./assets/images/Releases/Build/4.jpg";
import img5_house2 from "./assets/images/Releases/Build/5.jpg";

let housesReleases = [
  {
    id: 0,
    name: `prédio comercial`,
    neighborhood: "ibituruna",
    type: "releases",
    about: `Prédio comercial com 12 salas com 1 banheiro, que serão disponibilizadas para locação futuramente.
    
    Localizada na melhor parte comercial do Ibituruna, com arquitetura moderna, alto padrão e acabamento de primeira linha.

    Vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9 9917-8079.
    `,

    front_img: house1_front,
    rooms: 12,
    bathrooms: 2,
    class: 3,
    parking_space: 3,
    building_area: "280m²",
    land_area: "180m²",
    imgs: [img1_house1, img2_house1, img3_house1, img4_house1, img5_house1],
  },
  {
    id: 1,
    name: `prédio residencial`,
    neighborhood: "ibituruna",
    type: "releases",
    about: `Prédio comercial com 12 salas com 1 banheiro, que serão disponibilizadas para locação futuramente.
    
    Localizada na melhor parte comercial do Ibituruna, com arquitetura moderna, alto padrão e acabamento de primeira linha.

    Vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9 9917-8079.
    `,

    front_img: house2_front,
    rooms: 12,
    bathrooms: 2,
    class: 3,
    parking_space: 3,
    building_area: "280m²",
    land_area: "180m²",
    imgs: [img1_house2, img2_house2, img3_house2, img4_house2, img5_house2],
  },
];

export default housesReleases;
