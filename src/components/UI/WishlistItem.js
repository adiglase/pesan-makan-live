import styled from 'styled-components';
import Button from './Button';
import TrashIcon from './Icon/TrashIcon';

const StyledWishlistItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f8;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;

  svg {
    fill: #fff;
  }
`;

const Detail = styled.div`
  font-weight: 600;
  font-size: 14px;
  .price {
    color: #ff6c44;
  }
`;

const Action = styled.div``;

const WishlistItem = (props) => {
  const handleRemoveWishlist = (props) => {
    props.onRemoveFromWishlist(props.id)
  }

  return (
    <StyledWishlistItem>
      <Detail>
        <div className="name">
          {props.name}
        </div>
        <div className="price">
          {props.price}
        </div>
      </Detail>
      <Action>
        <Button onButtonClick={() => handleRemoveWishlist(props)} primary pad="10px 12px">
          <TrashIcon/>
        </Button>
      </Action>
    </StyledWishlistItem>
  );
}

export default WishlistItem;