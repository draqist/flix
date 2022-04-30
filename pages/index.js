import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { MovieDataFetcher } from "../utils/apicalls";


export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => { 
    MovieDataFetcher();
    // console.log(newResult);
  }, [])
  return (
    <Box bgImage='url("Background.svg")' bgColor='#121829'>
      <Navbar />
      <Box px='80px'>
        <Hero />
        <Box mt='60px' >
          <Tabs
            variant='unstyled'
            w='368px'>
          <TabList bg='#00000033' justifyContent='space-between' borderRadius='12px' color='#8E95A9' p='8px'>
              <Tab
                w='85px'
              borderRadius='8px'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
                color: 'white'
              }}
              _active={{
                focusBorderColor:'none',
                }}
              > All</Tab>
              <Tab
                pr='12px'
              borderRadius='8px'
              focusBorderColor='none'
              fontWeight='600'
              fontSize='16px'
              _selected={{
              bg: '#7B6EF6',
              color: 'white'
            }}> Movies </Tab>
            <Tab
              borderRadius='8px'
              focusBorderColor='none'
              fontWeight='600'
              fontSize='16px'
              _selected={{
            bg: '#7B6EF6',
                  color: 'white',
            }}>TV Shows</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <p>one!</p>
                <Card/>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
      </Box>
    </Box>
  )
}