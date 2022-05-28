import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { useState } from "react";
import {motion} from 'framer-motion'

const Banner = ({ title, bck }) => {
  const [crumb, setCrumb] = useState('Movies')
  const router = useRouter()
  
  return ( 
    <Box w='100%'h={['','','','','480px']} my={['20px','20px','40px']} textOverflow={'ellipsis'}>
      <Box as={motion.div} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0, transition: {duration: 2,}}} viewport={{ once: true }} overflow='hidden' zIndex='0'>
        <Image src={`https://image.tmdb.org/t/p/original/${bck}`} h={['','','','','480px']} w='100%' fit='cover' alt='' borderRadius={['24px','24px','40px']} />
      </Box>
      <Box as={motion.div} initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0, transition: {duration: 2, delay: .5}}} viewport={{ once: true }} zIndex='20' bg='#20283ECC' pos='relative'  bottom={['40px','40px','60px','80px','80px']} left={['30px','30px','60px','80px']} p={['12px','12px','20px','30px','40px']} w={['240px','240px','400px','560px','560px']} h={['','','100px','120px','144px']} borderRadius='24px'>
        <Breadcrumb color='#9C92F8' gap='8px'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Flix</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
        <BreadcrumbLink href={router.basePath}>{ crumb }</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Heading  mt='8px' fontSize={['18px','18px','18px','22px','32px']} fontWeight='600' letterSpacing='-2%' color='#EBEEF5'> { title}</Heading>
      </Box>
    </Box>
  );
}
export default Banner;