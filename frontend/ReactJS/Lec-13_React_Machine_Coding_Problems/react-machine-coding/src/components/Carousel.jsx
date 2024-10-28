import { useEffect, useState } from "react";

const Carousel = () => {
  const items = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 1",
      description: "Description of item 1",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 2",
      description: "Description of item 2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 3",
      description: "Description of item 3",
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem((curr) => curr + 1);
    }
  };

  // Please complete this logic as an assignment
  const prevItem = () => {};

  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentItem]);

  return (
    <>
      <h2>Automatic Carousel</h2>
      <div className="carousel-container">
        <img
          width="200"
          height="200"
          src={items[currentItem].imageUrl}
          alt={items[currentItem].title}
        />

        <h2>{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>

        <button onClick={nextItem}>Next</button>
        <button onClick={prevItem}>Previous</button>
      </div>
    </>
  );
};

export default Carousel;
