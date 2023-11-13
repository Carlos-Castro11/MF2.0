// HOUSE 1 ==========================================================================
import house1_front from "./assets/images/futureProjects/F1/F1-1.jpg";
import img1_house1 from "./assets/images/futureProjects/F1/F1-1.jpg";
import img2_house1 from "./assets/images/futureProjects/F1/F1-2.jpg";
import img3_house1 from "./assets/images/futureProjects/F1/F1-3.jpg";

// HOUSE 2 ==========================================================================
import house2_front from "./assets/images/futureProjects/F2/F2-1.jpg";
import img1_house2 from "./assets/images/futureProjects/F2/F2-1.jpg";
import img2_house2 from "./assets/images/futureProjects/F2/F2-2.jpg";
import img3_house2 from "./assets/images/futureProjects/F2/F2-3.jpg";

// HOUSE 3 ==========================================================================
import house3_front from "./assets/images/futureProjects/F3/F3-1.jpg";
import img1_house3 from "./assets/images/futureProjects/F3/F3-1.jpg";
import img2_house3 from "./assets/images/futureProjects/F3/F3-2.jpg";

// HOUSE 4 ==========================================================================
import house4_front from "./assets/images/futureProjects/F4/F4-1.jpg";
import img1_house4 from "./assets/images/futureProjects/F4/F4-1.jpg";
import img2_house4 from "./assets/images/futureProjects/F4/F4-2.jpg";

// HOUSE 5 ==========================================================================
import house5_front from "./assets/images/futureProjects/F5/F5-1.jpg";
import img1_house5 from "./assets/images/futureProjects/F5/F5-1.jpg";
import img2_house5 from "./assets/images/futureProjects/F5/F5-2.jpg";

// HOUSE 6 ==========================================================================
import house6_front from "./assets/images/futureProjects/F6/F6-1.jpg";
import img1_house6 from "./assets/images/futureProjects/F6/F6-1.jpg";
import img2_house6 from "./assets/images/futureProjects/F6/F6-2.jpg";

let housesFutureProjects = [
  {
    id: 0,
    name: `casa térrea 01`,
    neighborhood: "jd. liberdade",
    type: "futureProjects",
    about: `Casa térrea localizada no Jardim Liberdade!

    Casa com sala para dois ambientes e lavabo, cozinha, área de serviço, 2 vagas de garagem, área gourmet, 3 dormitórios sendo 1 suíte e varanda.

    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079`,
    front_img: house1_front,
    rooms: 3,
    bathrooms: 2,
    class: 1,
    parking_space: 2,
    building_area: "95,73m²",
    land_area: "180m²",
    imgs: [img1_house1, img2_house1, img3_house1],
  },
  {
    id: 1,
    name: "casa térrea 02",
    neighborhood: "jd. liberdade",
    type: "futureProjects",
    front_img: house2_front,
    about: `Casa térrea localizada no Jardim Liberdade!

    Casa com sala para dois ambientes e lavabo, cozinha, área de serviço, 2 vagas de garagem, área gourmet, 2 dormitórios sendo 1 suíte e varanda.

    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079`,
    rooms: 2,
    bathrooms: 2,
    class: 1,
    parking_space: 2,
    building_area: "75,38m²",
    land_area: "180m²",
    imgs: [img1_house2, img2_house2, img3_house2],
  },
  {
    id: 2,
    name: "casa térrea 03",
    neighborhood: "jd. liberdade",
    type: "futureProjects",
    front_img: house3_front,
    about: `Casa térrea localizada no Jardim Liberdade!

    Casa com sala para dois ambientes e lavabo, cozinha, área de serviço, 2 vagas de garagem, área gourmet, 2 dormitórios sendo 1 suíte e varanda.

    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079`,
    rooms: 2,
    bathrooms: 2,
    class: 1,
    parking_space: 2,
    building_area: "75,38m²",
    land_area: "180m²",
    imgs: [img1_house3, img2_house3],
  },
  {
    id: 3,
    name: "casa térrea 04",
    neighborhood: "jd. liberdade",
    type: "futureProjects",
    front_img: house4_front,
    about: `Casa térrea localizada no Jardim Liberdade!

    Casa com sala para dois ambientes e lavabo, cozinha, área de serviço, 2 vagas de garagem, área gourmet e 3 dormitórios sendo 1 suíte.

    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079`,
    rooms: 3,
    bathrooms: 2,
    class: 1,
    parking_space: 2,
    building_area: "83,94m²",
    land_area: "180m²",
    imgs: [img1_house4, img2_house4],
  },
  {
    id: 4,
    name: "casa térrea 05",
    neighborhood: "jd. liberdade",
    type: "futureProjects",
    front_img: house5_front,
    about: `Casa térrea de esquina localizada no Jardim Liberdade!

    Casa com sala para dois ambientes e lavabo, cozinha, área de serviço, 2 vagas de garagem, área gourmet e 2 dormitórios sendo 1 suíte.

    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079`,
    rooms: 2,
    bathrooms: 2,
    class: 1,
    parking_space: 2,
    building_area: "80,16m²",
    land_area: "180m²",
    imgs: [img1_house5, img2_house5],
  },
  {
    id: 5,
    name: "casa térrea 06",
    neighborhood: "jd. liberdade",
    type: "futureProjects",
    front_img: house6_front,
    about: `Casa térrea localizada no Jardim Liberdade!

    Casa com sala para dois ambientes e lavabo, cozinha, área de serviço, 2 vagas de garagem, área gourmet, 3 dormitórios sendo 1 suíte e varanda.

    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079`,
    rooms: 3,
    bathrooms: 2,
    class: 1,
    parking_space: 2,
    building_area: "95,73m²",
    land_area: "180m²",
    imgs: [img1_house6, img2_house6],
  },
];

export default housesFutureProjects;
