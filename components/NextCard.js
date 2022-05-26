import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const NextCard = ({ OnClick }) => {
  return (
    <Box pos='relative' mx={['10px', '10px', '0']} onClick = {() => OnClick()}>
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} whileTap={{ rotateY: 360, transition: '1s linear' }} transition='.5s linear' bgColor='#20283ECC' borderRadius='12px' p='8px' minHeight='480px' w='282px' mt='24px' >
        <Flex alignItems='center' justifyContent='center' w='266px'  h='400px' borderRadius='8px' overflow='hidden' >
          <Text fontSize='32px' fontWeight='600' color='#EBEEF5'> Next  </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default NextCard
