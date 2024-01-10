import "./App.css";
import { SuperCount } from "./SuperCount";
import { BetterRange, SuperInp } from "./SuperInp";
import { Controller, useForm } from "react-hook-form";

interface IFormInput {
  range: BetterRange;
}

export function Form() {
  const { control, watch, setValue } = useForm<IFormInput>({
    defaultValues: {
      range: {
        start: 2,
        end: 500,
      },
    },
  });

  const curr = watch("range");

  return (
    <>
      <Controller
        name="range"
        control={control}
        render={({ field }) => <SuperInp {...field} />}
      />
      <button
        onClick={() => {
          setValue("range", { start: curr.start, end: 1337 });
        }}
      >
        LEET
      </button>
      <h1>{JSON.stringify(curr)}</h1>

      <Controller
        name="range.start"
        control={control}
        render={({ field }) => <SuperCount {...field} />}
      />
    </>
  );
}

