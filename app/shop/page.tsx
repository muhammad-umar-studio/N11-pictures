import { client } from "../../sanity";
import Link from "next/link";
import ContactCta from "../components/ContactCta";

export default async function ShopPage() {
  // Fetch all products from Sanity CMS
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    title,
    price,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`);

  return (
    <>
      <section data-w-id="5efc72bd-9dbb-a275-5874-ab8d39271632" className="section-top">
        <div className="content">
          <h1 className="heading-page">Art Collection</h1>
        </div>
      </section>

      <div className="collection-list-wrapper w-dyn-list">
        <div role="list" className="collection-list-shop w-dyn-items">
          {products.map((product: any) => (
            <div key={product._id} role="listitem" className="collection-item-shop w-dyn-item">
              <Link href={`/product/${product.slug}`} className="link-work-3 w-inline-block">
                <div className="bg-img-shop" style={{ backgroundImage: `url(${product.imageUrl})`, backgroundSize: 'cover' }}>
                  {/* Webflow handles the hover interaction on this arrow block natively */}
                  <div className="block-arrow">
                    <img 
                      src="/images/CITYPNG.COMHD-Shopping-Cart-White-Logo-Icon-Transparent-PNG---700x700.png" 
                      loading="lazy" 
                      height="50" 
                      alt="Add to Cart" 
                      width="50" 
                    />
                  </div>
                </div>
                <div className="block-shop">
                  <h6 className="heading-work">{product.title}</h6>
                  <div className="info-work">${product.price}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Render the empty state if there are no products */}
        {products.length === 0 && (
          <div className="w-dyn-empty" style={{ display: 'block' }}>
            <div>No items found.</div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <ContactCta />

      {/* Footer */}
      <section className="footer">
        <div>© 2026 N11 PICTURES. All Rights Reserved.</div>
      </section>
    </>
  );
}