// HOUSE 1 ==========================================================================
import house1_front from "./assets/images/render/lançamento-capa.jpg";
import img1_house1 from "./assets/images/render/LANÇAMENTO02.jpg";

// HOUSE 2 ==========================================================================
import house2_front from "./assets/images/casa11A/CASA05-CAPA.jpg";
import img1_house2 from "./assets/images/casa11A/CASA05-03.jpg";

// HOUSE 3 ==========================================================================
import house3_front from "./assets/images/casa11A/CASA05-CAPA.jpg";
import img1_house3 from "./assets/images/casa11A/CASA05-03.jpg";

let houses = [
  {
    id: 0,
    name: "teste",
    src1: img1_house1,
    type: "enterprises",
    front_img: house1_front,
  },
  {
    id: 1,
    name: "teste2",
    src1: img1_house2,
    type: "enterprises",
    front_img: house2_front,
  },
  {
    id: 2,
    name: "teste2",
    src1: img1_house3,
    type: "enterprises",
    front_img: house3_front,
  },
];

export default houses;
