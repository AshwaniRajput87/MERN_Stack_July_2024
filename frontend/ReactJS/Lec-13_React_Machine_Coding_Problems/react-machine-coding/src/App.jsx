import LargeArraySum from "./components/LargeArraySum";
import ItemList from "./components/ItemList";
import InputComp from "./components/InputComp";
import StopWatch from "./components/StopWatch";
import Carousel from "./components/Carousel";
import Modal from "./components/modal/Modal";
import { useModal } from "./hooks/useModal";

const App = () => {
  const { isVisible, show, hide } = useModal(false);
  return (
    <>
      <LargeArraySum />
      <ItemList />
      <InputComp />
      <StopWatch />
      <Carousel />
      <Modal isVisible={isVisible} hide={hide} />
      <button onClick={show}>Show Modal</button>
    </>
  );
};

export default App;
