import banner2 from '../../../assets/shop/banner2.jpg'
import Cover from './../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useState} from 'react'
import { useParams } from "react-router";
import useMenu from './../../../hooks/useMenu';

import OrderTab from './OrderTab';
import { Helmet } from 'react-helmet-async';


const Order = () => {
  const categories=["salad","pizza","soup","dessert","drinks"];
  const {category}=useParams();
  console.log(category);
  const initialIndex=categories.indexOf(category.toLowerCase())
  console.log(initialIndex);
 
    const [tabIndex,setTabIndex]=useState(initialIndex)
    
    const [menu] =useMenu();
   
 const dessert=menu.filter(item=>item.category==='dessert');
 const soup=menu.filter(item=>item.category==='soup');
 const salad=menu.filter(item=>item.category==='salad');
 const pizza=menu.filter(item=>item.category==='pizza');
 const drinks=menu.filter(item=>item.category==='drinks');
 const offered=menu.filter(item=>item.category==='offered');
    return (
      
        <div>
          <Helmet>
        <title>Bistro Boss || Order Food</title>
       
      </Helmet>
           < Cover img={banner2} title="Order now">
           </Cover>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab item={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={pizza}></OrderTab>
  </TabPanel>
 
  <TabPanel>
  <OrderTab item={soup}></OrderTab>
  </TabPanel>
 
  <TabPanel>
  <OrderTab item={dessert}></OrderTab>
  </TabPanel>

  <TabPanel>
  <OrderTab item={drinks}></OrderTab>
  </TabPanel>



</Tabs>

        </div>
    );
};

export default Order;