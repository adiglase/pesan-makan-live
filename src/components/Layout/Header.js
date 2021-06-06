import HeaderCartButton from './HeaderCartButton';
import HeaderWishListButton from './HeaderWishListButton';

import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 20px;
  background-color: #ff6c44;
  color: #fff;
  margin: 0;
  font-size: 10px;

  h1 {
      letter-spacing: 2px;
      font-weight: 600;
      margin: 0;
  }
`;

const Header = (props) => {
    return <Head>
        <h1 className="title">Pesan Makan</h1>
        <div>
          <HeaderCartButton onShowCart={props.onShowCart}/>
          <HeaderWishListButton onShowWishlist={props.onShowWishlist}/>
        </div>
    </Head>;
}

export default Header;