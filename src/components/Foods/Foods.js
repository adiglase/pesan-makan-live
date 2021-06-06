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
  {
    id: 2,
    name: "Bakso",
    price: 12000,
    thumb: FoodsThumb.small.bakso,
    img: FoodsThumb.big.bakso,
    description:
      "Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, terkadang telur lalu ditaburi bawang goreng dan seledri. Bakso sangat populer dan dapat ditemukan di seluruh Indonesia; dari gerobak pedagang kaki lima hingga restoran besar.",
  },
  {
    id: 3,
    name: "Gado Gado",
    price: 18000,
    thumb: FoodsThumb.small.gado,
    img: FoodsThumb.big.gado,
    description:
      "Gado-gado adalah salah satu makanan khas yang berasal dari Jakarta, Indonesia yang berupa sayur-sayuran yang direbus dan dicampur jadi satu, dengan bumbu kacang atau saus dari kacang tanah dan yang dihaluskan disertai irisan telur dan pada umumnya banyak yang menambahkan kentang rebus yang sudah dihaluskan untuk dicampur bumbu kacang, kentang rebus dimasak bersama dengan bumbu kacang kemudian di atasnya ditaburi bawang goreng. Sedikit emping goreng atau kerupuk (ada juga yang memakai kerupuk udang) juga ditambahkan.",
  },
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
    const foodIndex = FOODS_LIST.findIndex((food) => food.id === id)

    props.onSetSelectedFood(FOODS_LIST[foodIndex]);
    props.onShowFoodDetail();
  }
  
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
