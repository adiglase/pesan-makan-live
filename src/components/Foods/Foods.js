import styled from "styled-components";
import FoodsThumb from "../../assets/foods";
import FoodItem from "./FoodItem/FoodItem";

const FOODS_LIST = [
  {
    id: 1,
    name: "Ayam Bakar",
    price: 18000,
    thumb: FoodsThumb.small.ayamBakar,
    img: FoodsThumb.big.ayamBakar,
    description:
      "Ayam bakar adalah sebuah hidangan Asia Tenggara Maritim, terutama hidangan Indonesia atau Malaysia, dari ayam yang dipanggang di atas arang.",
  },
  // {
  //   id: 2,
  //   name: "Bakso",
  //   price: 12000,
  //   thumb: FoodsThumb.small.bakso,
  //   img: FoodsThumb.big.bakso,
  //   description:
  //     "Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, terkadang telur lalu ditaburi bawang goreng dan seledri. Bakso sangat populer dan dapat ditemukan di seluruh Indonesia; dari gerobak pedagang kaki lima hingga restoran besar.",
  // },
  {
    id: 3,
    name: "Gado Gado",
    price: 18000,
    thumb: FoodsThumb.small.gado,
    img: FoodsThumb.big.gado,
    description:
      "Gado-gado adalah salah satu makanan khas yang berasal dari Jakarta, Indonesia yang berupa sayur-sayuran yang direbus dan dicampur jadi satu, dengan bumbu kacang atau saus dari kacang tanah dan yang dihaluskan disertai irisan telur dan pada umumnya banyak yang menambahkan kentang rebus yang sudah dihaluskan untuk dicampur bumbu kacang, kentang rebus dimasak bersama dengan bumbu kacang kemudian di atasnya ditaburi bawang goreng. Sedikit emping goreng atau kerupuk (ada juga yang memakai kerupuk udang) juga ditambahkan.",
  },
  {
    id: 4,
    name: "Nasi Goreng Thailand",
    price: 20000,
    thumb: FoodsThumb.small.nasi_goreng_thailand,
    img: FoodsThumb.big.nasi_goreng_thailand,
    description:
      "Nasi goreng merupakan sajian nasi yang digoreng dalam sebuah wajan atau penggorengan menghasilkan cita rasa berbeda karena dicampur dengan bumbu-bumbu seperti bawang putih, bawang merah, merica dan kecap manis. Selain itu, ditambahkan bahan-bahan pelengkap seperti telur, sayur-sayuran, makanan laut, atau daging.",
  },
  {
    id: 5,
    name: "Pempek",
    price: 10000,
    thumb: FoodsThumb.small.pempek,
    img: FoodsThumb.big.pempek,
    description:
      "Pempek atau empek-empek adalah makanan yang terbuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah cuka yang memiliki rasa asam, manis, dan pedas. Pempek sering disebut sebagai makanan khas Palembang,[1] meskipun hampir semua daerah di Sumatera Selatan memproduksinya.",
  },
  {
    id: 6,
    name: "Rendang",
    price: 30000,
    thumb: FoodsThumb.small.rendang,
    img: FoodsThumb.big.rendang,
    description:
      "Rendang atau randang (Jawi: رندڠ) adalah masakan daging asli Indonesia yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak suhu rendah dalam waktu lama menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna cokelat terang keemasan.",
  },
  {
    id: 7,
    name: "Sate Kambing",
    price: 25000,
    thumb: FoodsThumb.small.sate_kambing,
    img: FoodsThumb.big.sate_kambing,
    description:
      "Sate kambing adalah sejenis makanan sate terbuat dari daging kambing. Daging kambing tersebut disate (ditusuk dengan bambu yang dibentuk seperti lidi yang agak besar) dan dibumbui dengan rempah-rempah dan bumbu dapur, kemudian dibakar. Penyajiannya disajikan bersama lalapan kubis, tomat, dan bawang merah yang diiris tipis kemudian diberi kecap dan ditambahkan taburan merica.",
  },
  // {
  //   id: 8,
  //   name: "Tiram Bihun",
  //   price: 28000,
  //   thumb: FoodsThumb.small.tiram_bihun,
  //   img: FoodsThumb.big.tiram_bihun,
  //   description:
  //     "Bihun atau mihun merupakan nama salah satu jenis makanan dari Tiongkok, bentuknya seperti mi namun lebih tipis. Dalam bahasa Inggris disebut rice vermicelli atau rice noodles atau rice sticks. Bihun berasal dari bahasa Tionghoa, yaitu “Bi” artinya beras dan “hun” artinya tepung. Bahan baku bihun sendiri terbuat dari tepung beras. Makanan tersebut sangat terkenal dari negara Tiongkok dan Asia Selatan, seperti India.",
  // },
];

const FoodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const Foods = (props) => {
  const handleClickFood = (id) => {
    const foodIndex = FOODS_LIST.findIndex((food) => food.id === id);

    props.onSetSelectedFood(FOODS_LIST[foodIndex]);
    props.onShowFoodDetail();
  };

  const foodsList = FOODS_LIST.map((food) => {
    return (
      <FoodItem
        key={food.id}
        id={food.id}
        thumb={food.thumb}
        name={food.name}
        price={food.price}
        onSelectFood={handleClickFood}
      />
    );
  });

  return <FoodContainer>{foodsList}</FoodContainer>;
};

export default Foods;
