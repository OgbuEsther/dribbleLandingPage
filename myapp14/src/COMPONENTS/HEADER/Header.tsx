import React from "react";
import styled from "styled-components";
import pic from "../myassests/logopix.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container>
        <Texts>
          <Logo src={pic} /> <span>BookStore</span>
        </Texts>

        <Hold>
          <Search>
            <AiOutlineSearch />
          </Search>
          <Button>Upload Books</Button>
        </Hold>
      </Container>
    </div>
  );
};

export default Header;

const Texts = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 500px) {
    margin-left: 15px;
  }

  span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;

    @media screen and (max-width: 500px) {
      font-size: 15px;
      margin-left: 3px;
    }
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  background-color: #f70f35;
  color: white;
  outline: none;
  cursor: pointer;
  transition: all ease-in-out 350ms;
  border-radius: 5px;

  :hover {
    transform: scale(0.95);
  }

  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

const Search = styled.div`
  margin-right: 10px;
  color: silver;
  font-size: 20px;

  @media screen and (max-width: 500px) {
    margin-right: 3px;
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 500px) {
    margin-right: 15px;
  }
`;

const Logo = styled.img`
  height: 40px;
  @media screen and (max-width: 500px) {
    height: 30px;
  }
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
