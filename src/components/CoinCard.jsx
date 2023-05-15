import React from 'react'
import {Link,Text,Heading,VStack,Image} from '@chakra-ui/react'


    
const CoinCard = ({ id,name, img, symbol, price,currencySymbol="₹" }) => (
    <a href={`/coin/${id}`} >
      <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'}
      m={'2'}
      css={{
        "&:hover":{
          transform:"scale(1.1)"
        }
      }}>
        <Image src={img} w={'10'} height={'10'} objectFit={'contain'}/>
    <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
    <Text noOfLines={1}>{name}</Text>
    <Text noOfLines={1}>{price ? `${currencySymbol}${price}`:'NA'}</Text>
      </VStack>
    </a>
  )
  

export default CoinCard