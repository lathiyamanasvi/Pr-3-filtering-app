import logo from './logo.svg';
import './App.css';
import{useEffect, useState} from 'react';
import Data from './Data';

const App = () => {
  const [allrecord,setAllrecord] = useState([
    {
      id:1,
      Name:"Nike",
      price: 3995,
      decs:"Cosy is the name of the game, and what's cosier than Jordan joggers? Complete with puff-print festive-inspired graphics, this fleece sweatshirt is ready for the season.",
      category: "cloth",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3577e84e-6ab9-4c38-9288-17dd1c0343b2/jordan-essentials-festive-fleece-crew-528z4b.png",
    },
    {
      id:2,
      Name:"Adidas",
      price: 9999,
      decs:"Inspired by a '90s archive edition, these adidas shoes get their design cred from a chunky, expressive silhouette re-proportioned for modern style. Stylised synthetic suede overlays accent a flexible mesh upper, and it all rides on a rubber outsole for traction and a solid step.",
      category: "shoes",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0593b39731c34721bbe7b614a13b42e1_9366/Falcon_Shoes_White_IE0592_04_standard.jpg",
    },
    {
      id:3,
      Name:"Casio",
      price: 2995,
      decs:"The comfortable, compact case is complemented by bands in a range of matte colors for easy coordination with your favourite outfits. Choose from the possibilities to add your own unique touch of casual style.",
      category: "watch",
      img: "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/L/lf/lf2/lf-20w-8a/assets/LF-20W-8A.png.transform/main-visual-pc/image.png",
    },
    {
      id:4,
      Name:"Ring",
      price: 2599,
      decs:"These Silver Cupid Arrow Couple Bands are handcrafted with love, just for YOU! These adorable bands, with silver and sparkling zircons, perfectly complement each other. Just like an amazing couple we know.",
      category: "accessories",
      img: "https://www.giva.co/cdn/shop/files/R078_1.jpg?v=1694086703&width=493",
    },
    {
      id:5,
      Name:"Reebook",
      price: 3599,
      decs:"A complete new package for back to school. Maximize use of PU for extreme durability& mesh support at collar for better breathability and comfort. Full rubber Outsole gives extra gripping. Ortholite sockliner gives better cushioning to feet.",
      category: "shoes",
      img: "https://imagescdn.reebok.in/img/app/product/8/860073-10150099.jpg?q=75&auto=format&w=342",
    },
    {
      id:6,
      Name:"Citizen",
      price: 3799,
      decs:"gossil’s Gen 6 Smartwatch Smoke Stainless Steel comes with increased performance compared the the Gen 5 version, with faster loading apps, faster processor and lower power consumption. Bluetooth 5 has improved connectivity, with boosted data transfer rates and up to 4x range, which means faster downloads than previous generations. ",
      category: "watch",
      img: "https://d1rkccsb0jf1bk.cloudfront.net/products/100045146/main/large/FTW6077_main-nogoogle.jpg",
    },
    {
      id:8,
      Name:"Zara",
      price: 3990,
      decs:"Regular-fit shirt made of lightweight linen fabric. Spread collar and long sleeves with buttoned cuffs. Button-up front.",
      category: "cloth",
      img: "https://static.zara.net/photos///2023/I/0/2/p/6359/387/403/2/w/563/6359387403_2_1_1.jpg?ts=1692778805414",
    },
    {
      id:9,
      Name:"Bracelet",
      price: 4599,
      decs:"The Rose Gold Slender Bracelet is handcrafted with love, just for YOU. This bracelet is true to its name - elegant, minimal, and full of dazzle! It's inspired by our DIVA after all.",
      category: "accessories",
      img: "https://www.giva.co/cdn/shop/files/BR066_1_0f745f39-b772-4e25-b01d-a1f06ce22438.jpg?v=1695139094&width=493",
    },
    {
      id:10,
      Name:"Tommy-hilfiger",
      price: 1699,
      decs:"Tommy Hilfiger women’s gold plated watch with a white dial and gold plated accents. Elegant mother of pearl dial with roman numerals and applied TH flag. White leather strap, 3H, 38MM dial.",
      category: "watch",
      img: "https://d1rkccsb0jf1bk.cloudfront.net/products/100050863/additional/large/1782594_LRG_rgb_Profile.jpg",
    },

  ])

  const [filter,setFilter]= useState([]);

  const handleclick = (category) => {
    let oldrecord=[...allrecord];

    if(category === "all"){
      setFilter(allrecord)
    }
    else{
      oldrecord=allrecord.filter((item)=>{
        return item.category === category
      })
      setFilter(oldrecord)
    }
  }
  useEffect(()=>{
    setFilter(allrecord)
  },[])
  return (
    <Data
    allrecorddata={filter}
    btnclick={handleclick}
    setAllRecord={setAllrecord}
    />
  );
}

export default App;
