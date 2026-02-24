import React from 'react'
import Banner from '../componants/Banner'
import Fourcards from '../componants/Fourcards'
import Productlist from '../componants/Productlist'
import Browsebyctgry from '../componants/Browsebyctgry'
import Flashsale from '../componants/Flashsale'
import Brands from '../componants/Brands'
import Insight from '../componants/Insight'
import Toprated from '../componants/Toprated'
import Organic from '../componants/Organic'

function Homepage() {
  return (
    <div>
        <Banner/>
        <Fourcards/>
        <Organic/>
        <Productlist/>
        <Browsebyctgry/>
        <Flashsale/>
        <Toprated/>
        <Brands/>
        <Insight/>

    </div>
  )
}

export default Homepage
