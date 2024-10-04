import { Link, useParams } from "react-router-dom";

const ClassRoom = () => {
  const { classId, sessionId } = useParams();

  return (
    <>
      <h1>
        Class room {classId} with a session {sessionId}{" "}
        <Link to="/home">Back to home</Link>
      </h1>
    </>
  );
};

export default ClassRoom;
