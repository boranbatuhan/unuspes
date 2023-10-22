import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products:[
      {title:"oneone",series:"MARVEL",subSeries:"spiderman",price:250,id:0,images:"noimg",isLive:true,addTime:1697990852796},
      {title:"twotwo",series:"MARVEL",subSeries:"spiderman",price:250,id:1,images:"noimg",isLive:true,addTime:1697990852796},
      // {title:"onne",series:"MARVEL",subSeries:"thor",price:450,id:2,images:"noimg",isLive:true,addTime:1697990852796},
      // {title:"suppp",series:"DC",subSeries:"superman",price:450,id:3,images:"noimg",isLive:true,addTime:1697990852799},
      // {title:"mater",series:"PIXAR",subSeries:"cars",price:450,id:4,images:"noimg",isLive:true,addTime:1697990852795},
      // {title:"mqquin",series:"PIXAR",subSeries:"cars",price:450,id:5,images:"noimg",isLive:true,addTime:1697990852792},
      // {title:"dayı",series:"TURK",subSeries:"ezel",price:999,id:6,images:"noimg",isLive:true,addTime:1697990852793},
      // {title:"ezel",series:"TURK",subSeries:"ezel",price:999,id:7,images:"noimg",isLive:false,addTime:1697990852799},
      // {title:"kenan birkan",series:"TURK",subSeries:"ezel",price:999,id:8,images:"noimg",isLive:true,addTime:1697990852800},
    ]
   }),
  getters:{
    getProducts(state){
      return state.products
    },
    getSeries(state){
      var series = []
      state.products.forEach(element => {
        series.push(element.series)
      });
      const singleSeries = new Set(series); // set return just one value if its repeat more.
      const singleSeriesArray = Array.from(singleSeries);
      return singleSeriesArray
    },
    getSubSeries(state){
      var subSeries = []
      state.products.forEach(element => {
        subSeries.push(
          {series:element.series,
            subSeries:element.subSeries
          })
      });
      const uniqueItems = new Set();
      subSeries.forEach(item => {
  const key = JSON.stringify(item);
  uniqueItems.add(key);
});

const uniqueItemsArray = Array.from(uniqueItems);
const uniqueItemsParsed = uniqueItemsArray.map(item => JSON.parse(item));
      return uniqueItemsParsed
    },
    getPrices(state){
      var prices = []
      state.products.forEach(element => {
        prices.push(element.price)
      });
      const singleprices = new Set(prices); // set return just one value if its repeat more.
      const singlepricesArray = Array.from(singleprices);
      return singlepricesArray
    },
    getProductsLive(state){
      const products = state.products
      return products.filter(i=>i.isLive==true)
    },
    getProductsNotLive(state){
      const products = state.products
      return products.filter(i=>i.isLive==false)
    }
  },
  actions: {
    addNewProduct(newP){
      const copiedProduct = { ...newP };
      this.products.push(copiedProduct)

    }
  },
});
