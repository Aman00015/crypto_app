import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../index";
import { useState } from "react";
import {
  Container,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = Array(132).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${"inr"}&page=${page}`
        );

        setCoins(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);
  if (error) return <Error message={"error in fetching coins"} />;
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}> 
            <HStack spacing={'4'}>
              <Radio value={"inr"}>₹</Radio>
              <Radio value={"usd"}>$</Radio> 
              <Radio value={"eur"}>€</Radio>
             
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                price={i.current_price}
                key={i.id}
                name={i.name}
                img={i.image}
                currencySymbol={currencySymbol}
                symbol={i.symbol}
              />
            ))}
          </HStack>
          <HStack overflowX={"auto"} w={"full"} p={"8"}>
            {btns.map((item, index) => (
              <Button
              key={index }
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
