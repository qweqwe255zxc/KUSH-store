import { useEffect } from "react";
import { buildTitle } from "../utils/utils";

const Kushverse = () => {

  useEffect(() => {
    document.title = buildTitle("kushverse");
  }, []);

  return (
    <div>
      /* Your code here */
    </div>
  );
};

export default Kushverse;