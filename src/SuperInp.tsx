import { ChangeEvent } from "react";

export type SuperInpProps = {
  value: BetterRange;
  onChange: (val: BetterRange) => void;
};

export type BetterRange = {
  start: number;
  end: number;
};

export const SuperInp = ({ value, onChange }: SuperInpProps) => {
  const set = (key: "start" | "end") => (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      [key]: e.target.value,
    });
  };


  console.log(value)
  return (
    <div className="flex flex-col gap-4">
      <p>{value?.start}</p>

      <input
        type="range"
        min={2}
        max={22}
        value={value?.start}
        onChange={set("start")}
      />
      <br />
      <p>{value?.end}</p>

      <input
        type="range"
        min={420}
        max={80085}
        value={value?.end}
        onChange={set("end")}
      />
    </div>
  );
};
