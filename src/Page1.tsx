import { Controller, UseFormReturn } from "react-hook-form";
import { SuperInp } from "./SuperInp";
import { IFormInput } from "./Form";

export const Page1 = ({formReturn}: {formReturn: UseFormReturn<IFormInput>}) => {
  const { control, watch, setValue } = formReturn;
  const curr = watch("range1");

  return (
    <>
    <h1>p1</h1>
      <Controller
        name="range1"
        control={control}
        render={({ field }) => <SuperInp {...field} />}
      />
      <button
        onClick={() => {
          setValue("range1", { start: curr.start, end: 1337 });
        }}
      >
        LEET
      </button>
      <h1>{JSON.stringify(curr)}</h1>
    </>
  );
};
