# what is web performance?
    - Web performance refers to how quickly and efficiently a website loads and runs in a user’s browser.
    - Includes page load speed, user interaction responsiveness, and smooth functionality.

# Why web perfomance matters?
    - Provide better user experience
    - More user engagement
    - Better SEO and rankings
    - Brand image
    - Conversion rates

# Web performance tool
    - Lighthouse tool

# What are the metrics used to measure web performance?

   - These key metrics are known as web vitals.
   - These are 5 core web vitals:
    1. FCP(First Contentful Paint): Time for browser to render first content from DOM, excluding background images.

    2. LCP(Largest Contentful Paint): Time for the largest content element(like an image or text block) on the page to become visible.

    3. TBT(Total Blocking Time): Total amount of time during which the main thread is blocked, preventing user interaction.

    4. CLS(Cumulative Layout Shift): The total count of all sudden layout changes from start to finish. A layout shift happens when a visible element changes its position from one rendered frame to the next.

    5. SI(Speed Index): Average time taken for a web page to be displayed.

    - These web vitals are impacted because of render-blocking resources (large CSS/unused CSS, large JS/unused JS, fonts, large images and other network resources).

# How does a browser render a web page?

    1. Download HTML
    2. Parse the HTML - build DOM tree
    3. Download and Parse CSS - Build CSSOM tree
    4. Download and Parse JavaScript - The browser downloads and executes JavaScript, which may change the DOM or CSSOM.
    5. Build Render Tree - DOM + CSSOM
    6. Layout - The browser determines the position and size of each element in the Render Tree.
    7. Paint - The browser displays text, images, colors, and other visual elements on the screen.

# compression vs minification vs uglification

  - minfication: Reduces the file size of your HTML, CSS and JS by removing comments, new lines or spaces. It's still human readble code.

  - uglification: It further reduces the file sizes and improves the web perfomance bit more. But it's not the human readable code.

  - compression: Reduce the file size using efficient algorithms (Gzip or brotli)

# how to improve web perfomance?

  - CSS optimisation Techniques:

    1. Remove the unused CSS:

         1.1 Identify the unused CSS -> chrome browser tool -> coverage
         1.2 Remove the unused CSS/JS
    2. Split the CSS:
        1. critical CSS: CSS code required for above-the-fold content to be displayed on the screen on a first load/paint.
        2. non-critical CSS: CSS code required below-the-fold content to be displayed

   3. Use critical CSS in head tag via style tag

   4. Use Lazy loading to download the non-crical css file

   5. CSS class name shorter. 

  - Image Optimisation Techniques:

     - you ask from the design team, please the smaller siz of the images either in PNG or WebP

     - to reduce the bigger file size , you can tinyNG and webp converter online tools. Make sure your organisation allows it.

     - loading="lazy", lazy loading of the images.

     - srcset -> it's attribute of image tag which is for responsive images
        - srcset is going to use in img tag only -> for rendering the images based on device resolutions.
    

  - JS optimisation Techniques:

    - Assignment - Read about IntersectionObserver
    - split JS - larger JS - into different JS files and making sure inculde  those code which is specific to particular web page.
    - how can you use defer and async attributes in script tag?


    Memory leak problems:
    --------------------

    1. Global variables: 
        - it may pollute the variables globally(modified via function)
        - try to avoid using global variables.
           create a functions  and in those you can decalare your variables

    2. closure and scope:

        - Processing a large amount of data via closure, so handle it carefully.
        - Eg: data = null;

    3. Handling the events
       - Attaching the events via addEventListener('DOMContentLoaded', ()=>{

       })
       addEventListener('click', ()=>{

       })
       - How to handle it?
          - Deattach the events via removeEventListener('click', functionName)

    4. setInterval() -> returns a timerID

       how can you handle it or avoid it?

          - can clearInterval()
          - timerId = null

    5. promises

        - once you create a promise (resolve, and reject)-> there is might a possibility of not consuming the promise then will create memory leak problem.
        - How to avoid it?

           - you have to consume the promises.
             - then, catch and finally
             - async, await



