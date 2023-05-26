import Link from "next/link";

export default function TitleCard(props) {
  return (
    <div>
      <span className="new-product-label">NEW PRODUCT</span>
      <h1 className="feature-header">XX99 MARK II HEADPHONES</h1>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <Link href={`/`} className="button button__orange">SEE PRODUCT</Link>
    </div>
  );
}