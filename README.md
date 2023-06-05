# Audiophile e-commerce website
This is a solution to the [PAudiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

Check out my other solutions on Frontend Mentor at [@kaseyvee](https://www.frontendmentor.io/profile/kaseyvee) or [frontend-mentor-challenges](https://github.com/kaseyvee/frontend-mentor-challenges).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
- Shipping always adds $50 to the order
- VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- Bonus: Keep track of what's in the cart, even after refreshing the browser

### Screenshots

#### Desktop View
![Homepage hero desktop view](https://i.imgur.com/leCv7Cr.png)
![Cart open desktop view](https://i.imgur.com/EpTegDF.png)

#### Mobile View
<p float="left">
  <img src="https://i.imgur.com/DODZYJ8.png" alt="Homepage hero mobile view" width="305">
  <img src="https://i.imgur.com/BrAvZ2m.png" alt="Mobile view with cart expanded" width="305">
  <img src="https://i.imgur.com/JWmi5Zc.png" alt="Product item page view" width="305">
</p>

### Built with

- Next.js 13 (App router)
- Framer Motion - React animation library
- Sass
- Flexbox
- Grid
- Mobile-first workflow

### What I learned

The main purpose of this project was to familiarize myself with Next.js 13, using specifically the app router instead of the pages router, as well as working with a headless CMS, here being Contentful.

I plan on using Contentful in another project I’m currently working on and wanted to flush out the kinks and frustrations I might come across when implementing it. Seeing as how this is an e-commerce website, it probably would have made more sense to make this a full stack application, but I didn’t feel like working with complicated models and figuring out Contentful was supposed to be the goal anyways.

Funnily enough, the biggest takeaway moment from this project or one of those “are you serious” moments was when I finally realized the purpose of “box-sizing: border-box” in all of these css resets lol. Anyone else decide to just nod along instead of figuring out what that actually did?

But now that I’m aware of its function, I’m able to leverage border-box vs content-box when needed. Also don’t need to write a lengthy “width: calc(100% - whatever padding or margin I decided to use * 2)”.

Still plenty of refactoring to do, specifically with my checkout page and form component, but I’m happy to present a new, mostly completed project!

### Continued development

- Refactor form/checkout code
- Fix hydration errors on checkout page