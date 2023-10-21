import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products:[
      // {name:"",series:"",subSeries:"",price:0,id:0,images:[]}
      {title:"oneone",series:"MARVEL",subSeries:"Spiderman",price:250,id:0,images:"noimg"},
      {title:"twotwo",series:"MARVEL",subSeries:"Spiderman",price:250,id:1,images:"noimg"},
      {title:"onne",series:"MARVEL",subSeries:"Thor",price:450,id:2,images:"noimg"},
      {title:"suppp",series:"DC",subSeries:"Superman",price:450,id:3,images:"noimg"},
      {title:"mater",series:"PIXAR",subSeries:"Cars",price:450,id:4,images:"noimg"},
      {title:"mqquin",series:"PIXAR",subSeries:"Cars",price:450,id:5,images:"noimg"},
      {title:"dayı",series:"TURK",subSeries:"Ezel",price:999,id:6,images:"noimg"},
      {title:"ezel",series:"TURK",subSeries:"Ezel",price:999,id:7,images:"noimg"},
      {title:"kenan birkan",series:"TURK",subSeries:"Ezel",price:999,id:8,images:"noimg"},
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
  },
  actions: {
  },
});
