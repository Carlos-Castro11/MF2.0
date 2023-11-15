// HOUSE 1 ==========================================================================
import house1_front from "./assets/images/395A/front_395A.jpg";
import img1_house1 from "./assets/images/395A/img_2_395A.jpg";
import img2_house1 from "./assets/images/395A/img_3_395A.jpg";
import img3_house1 from "./assets/images/395A/img_4_395A.jpg";
import img4_house1 from "./assets/images/395A/img_6_395A.jpg";
import img5_house1 from "./assets/images/395A/img_5_395A.jpg";
import img6_house1 from "./assets/images/395A/img_7_395A.jpg";
import img7_house1 from "./assets/images/395A/img_8_395A.jpg";
import img8_house1 from "./assets/images/395A/img_9_395A.jpg";
import img9_house1 from "./assets/images/395A/img_10_395A.jpg";
import img10_house1 from "./assets/images/395A/img_11_395A.jpg";
import img11_house1 from "./assets/images/395A/img_12_395A.jpg";
import img12_house1 from "./assets/images/395A/img_13_395A.jpg";
import img13_house1 from "./assets/images/395A/img_14_395A.jpg";
import img14_house1 from "./assets/images/395A/img_15_395A.jpg";
import img15_house1 from "./assets/images/395A/img_16_395A.jpg";
import img16_house1 from "./assets/images/395A/img_17_395A.jpg";
import img17_house1 from "./assets/images/395A/img_18_395A.jpg";

// HOUSE 2 ==========================================================================
import house2_front from "./assets/images/CASA-11A/front_11A.jpg";
import img1_house2 from "./assets/images/CASA-11A/front_11A.jpg";
import img2_house2 from "./assets/images/CASA-11A/2.jpg";
import img3_house2 from "./assets/images/CASA-11A/3.jpg";
import img4_house2 from "./assets/images/CASA-11A/4.jpg";
import img5_house2 from "./assets/images/CASA-11A/5.jpg";
import img6_house2 from "./assets/images/CASA-11A/6.jpg";
import img7_house2 from "./assets/images/CASA-11A/7.jpg";
import img8_house2 from "./assets/images/CASA-11A/8.jpg";
import img9_house2 from "./assets/images/CASA-11A/9.jpg";
import img10_house2 from "./assets/images/CASA-11A/10.jpg";
import img11_house2 from "./assets/images/CASA-11A/11.jpg";
import img12_house2 from "./assets/images/CASA-11A/12.jpg";
import img13_house2 from "./assets/images/CASA-11A/13.jpg";
import img14_house2 from "./assets/images/CASA-11A/14.jpg";
import img15_house2 from "./assets/images/CASA-11A/15.jpg";
import img16_house2 from "./assets/images/CASA-11A/16.jpg";

// HOUSE 3 ==========================================================================
import house3_front from "./assets/images/CASA-11B/house3_front.jpg";
import img1_house3 from "./assets/images/CASA-11B/house3_front.jpg";
import img2_house3 from "./assets/images/CASA-11B/2.jpg";
import img3_house3 from "./assets/images/CASA-11B/3.jpg";
import img4_house3 from "./assets/images/CASA-11B/4.jpg";
import img5_house3 from "./assets/images/CASA-11B/5.jpg";
import img7_house3 from "./assets/images/CASA-11B/7.jpg";
import img9_house3 from "./assets/images/CASA-11B/9.jpg";
import img10_house3 from "./assets/images/CASA-11B/10.jpg";
import img11_house3 from "./assets/images/CASA-11B/11.jpg";
import img12_house3 from "./assets/images/CASA-11B/12.jpg";
import img13_house3 from "./assets/images/CASA-11B/13.jpg";
import img14_house3 from "./assets/images/CASA-11B/14.jpg";
import img15_house3 from "./assets/images/CASA-11B/15.jpg";
import img16_house3 from "./assets/images/CASA-11B/16.jpg";
import img17_house3 from "./assets/images/CASA-11B/17.jpg";
import img18_house3 from "./assets/images/CASA-11B/18.jpg";
import img20_house3 from "./assets/images/CASA-11B/20.jpg";
import img21_house3 from "./assets/images/CASA-11B/21.jpg";
import img22_house3 from "./assets/images/CASA-11B/22.jpg";

let housesEnterprises = [
  {
    id: 0,
    name: `CASA 395A`,
    neighborhood: "jd. liberdade",
    type: "enterprises",
    about: `Casa nova de alto padrão á venda no Jardim Liberdade toda em marcenaria!
    
    Localizada próxima ao parque municipal.

    Casa com 3 dormitórios, sendo uma suíte com armário e 2 semi-suítes no primeiro pavimento; sala para dois ambientes com painel de TV e aparador, lavabo, cozinha com armários e área de serviço coberta com armários e espaço gourmet no térreo. 2 vagas de garagem.
    
    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9 9917-8079.`,
    front_img: house1_front,
    rooms: 3,
    bathrooms: 3,
    class: 1,
    parking_space: 2,
    building_area: "109,08m²",
    land_area: "135,50m²",
    imgs: [
      house1_front,
      img1_house1,
      img14_house1,
      img2_house1,
      img3_house1,
      img12_house1,
      img4_house1,
      img5_house1,
      img8_house1,
      img7_house1,
      img9_house1,
      img6_house1,
      img11_house1,
      img15_house1,
      img10_house1,
      img17_house1,
      img13_house1,
      img16_house1,
    ],
  },
  {
    id: 1,
    name: "casa 11a",
    neighborhood: "jd. liberdade",
    type: "enterprises",
    front_img: house2_front,
    about: `Casa nova de alto padrão no Jardim Liberdade!

    Casa com 3 dormitórios, sendo uma suíte com armário e 2 semi-suítes no primeiro pavimento; sala para dois ambientes, lavabo, cozinha com armários e área de serviço coberta com armários e espaço gourmet no térreo. 2 vagas de garagem.
    
    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079.`,
    rooms: 3,
    bathrooms: 3,
    class: 1,
    parking_space: 2,
    building_area: "116,92m²",
    land_area: "136,50m²",
    imgs: [
      img1_house2,
      img2_house2,
      img3_house2,
      img10_house2,
      img4_house2,
      img7_house2,
      img8_house2,
      img6_house2,
      img10_house3,
      img5_house2,
      img9_house2,
      img14_house2,
      img13_house2,
      img15_house2,
      img12_house2,
      img11_house2,
      img16_house2,
    ],
  },
  {
    id: 2,
    name: "casa 11b",
    neighborhood: "jd. liberdade",
    type: "enterprises",
    front_img: house3_front,
    about: `Casa nova de alto padrão no Jardim Liberdade!

    Casa com 3 dormitórios, sendo uma suíte com armário e 2 semi-suítes no primeiro pavimento; sala para dois ambientes, lavabo, cozinha com armários e área de serviço coberta com armários e espaço gourmet no térreo com quintal amplo. 2 vagas de garagem.
    
    Acabamento de primeira linha, vale a pena conferir!
    
    Adriana Finelli
    CRECI MGJ-6438
    (38) 9 9917-8079.`,
    rooms: 3,
    bathrooms: 3,
    class: 1,
    parking_space: 2,
    building_area: "117,34m²",
    land_area: "185,50m²",
    imgs: [
      img1_house3,
      img2_house3,
      img4_house3,
      img3_house3,
      img13_house3,
      img12_house3,
      img9_house3,
      img11_house3,
      img10_house3,
      img7_house3,
      img5_house3,
      img14_house3,
      img17_house3,
      img18_house3,
      img20_house3,
      img22_house3,
      img15_house3,
      img16_house3,
      img21_house3,
    ],
  },
];

export default housesEnterprises;
