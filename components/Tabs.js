import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"


const TabComponent = () => {
  return (
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
  )
}

export default TabComponent
