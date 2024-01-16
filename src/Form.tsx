import { useState } from "react";
import "./App.css";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { BetterRange } from "./SuperInp";
import { useForm } from "react-hook-form";

export interface IFormInput {
  range1: BetterRange;
  range2: BetterRange;
}

export function Form() {
  const [toggle, setToggle] = useState<boolean>(true);
  const formReturn = useForm<IFormInput>({
    
  });

  const all = formReturn.watch();

  return (
    <>
      <button onClick={() => setToggle((old) => !old)}>Toggle</button>
      {toggle ? (
        <Page1 key="p1" formReturn={formReturn} />
      ) : (
        <Page2 key="p2" formReturn={formReturn} />
      )}
      <h1>{JSON.stringify(all)}</h1>


    </>
  );
}
