import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import { get } from "http";
import Image from "next/image";

import ProductGrid from "./components/product/ProductGrid";
import { product } from '../sanity/schemaTypes/schemas/product';
import SalesCampaignBanner from "./components/layout/SalesCampaignBanner";

const Home = async () => {

 const { user } = await getCurrentSession();

 const products = await getAllProducts();

  return (
    <div>
      <SalesCampaignBanner />
      <section className='container mx-auto py-8'>
        <ProductGrid products={products}/>
      </section>
    </div>
  );
}

export default Home;
