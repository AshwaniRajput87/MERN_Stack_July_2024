/**

  This is function which is triggered after DOM has been parsed
 */
document.addEventListener('DOMContentLoaded', ()=>{
    let link = document.createElement('link');
    link.rel = "stylesheet"
    link.href = "./css/fs-styles.css"

    document.head.appendChild(link);
});