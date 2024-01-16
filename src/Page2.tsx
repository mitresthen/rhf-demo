import { Controller, UseFormReturn } from "react-hook-form";
import { SuperInp } from "./SuperInp";
import { IFormInput } from "./Form";

export const Page2 = ({formReturn}: {formReturn: UseFormReturn<IFormInput>}) => {
  const { control, watch, setValue } = formReturn;
  const curr = watch("range2");

  return (
    <>
        <h1>p2</h1>

      <Controller
        name="range2"
        control={control}
        render={({ field }) => <SuperInp {...field} />}
      />
      <button
        onClick={() => {
          setValue("range2", { start: curr.start, end: 1337 });
        }}
      >
        LEET
      </button>
      <h1>{JSON.stringify(curr)}</h1>
    </>
  );
};
