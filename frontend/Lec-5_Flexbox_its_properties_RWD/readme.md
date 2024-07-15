Dummy text:
First article: Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

Second Article:Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

Third Article: Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle pickled man bun cornhole heirloom art party.


1. Introduction to CSS:
   
   - CSS selectors (use class based or element or attribute selector)
   - CSS rules
   - ways to add CSS in HTML files - as best practice go with External CSS
   - precendence of CSS files: (Highest to Lowest)

     inline > internal > external > third-party CSS library > user agent stylesheet

2. Building normal flow layouts:

   - Box Model (width, height and border/background-color)
   - box-sizing property (content-box and border-box)
   - padding, margin -> (TRBL)
   - overflow property
   - CSS units (px, pt, cm, %, em, rem, vw, vh) 
      As a best practice we concluded:
        - fix sizes (border, padding, margins use px)
        - fluid layouts (or resposnive screens -  use % for width and height, use border-box for box-sizing)
        - resposnive web design - (can also use vw/vh)
        - use rem units for font-sizes, root element must the font-size (10px)

          - 1rem = 1em = 16px
          - 15rem = 15*16px = 240px
          - (if you use font-size: 10px), 15rem = 15*10px = 150px
          - :root {
            font-size: 0.625rem ~ 10px = 10/16rem = 0.625rem = 62.5%
          }


3. Flexbox:

   -  Flexbox is just a concept of CSS which makes your life easier.
   -  Flexbox stands for flexible box.
   -  Allows you to design complex or resposnsive web layouts.
   -  How will you build responsive web layouts?

       - you have understand flexbox terminologies and properties:

       References:

        - https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties

        - MDN

To create/design 3-columns layout via flexbox


Assignment:

  - create a proper column layouts even if the artcles are in even numbers

  - Create a layout like a youtube with static  data.


  # Responsive Web Design (RWD)?

   - Adapt the layouts on any devices.
   - Devices(TV, Monitor, Laptop, tablets, fablets, mobiles)
   - <meta> - responsive meta tag: tells to browser the particulat document can open in ant devices and set the initial device width with some value.
   - Step to follow to create responsive layouts:

     1. use resposnive meta tag:
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
     2. break-points:
        larger screens(monitor, TV, laptop): > 900px
        tablets: 768px-1024px
        mobiles: 320px-480px

    3. media queries:

       @media only screen and (min-width:481px) and (max-width: 768px) {
         // can write those styles
       }
