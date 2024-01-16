export type SuperCountProps = {
    value: number,
    onChange: (val: number) => void
}

export const SuperCount = ({value, onChange}: SuperCountProps) => {

    return (
        <button onClick={() => {
            onChange(Number(value) + 1)
        }}>Press me pls {value}</button>
    )
}