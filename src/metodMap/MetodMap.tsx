type Car = {
    manufacturer: string
    model: string
}
type TopPropsCars = {
    car: Array<Car>
}
export const MethodMap = ({car}: TopPropsCars) => {
    return (
        <ul>
            {car.map((el, index) => {
                return (
                    <ol key={index + 1}>
                        <span>{el.manufacturer} </span>
                        <span>{el.model} </span>
                    </ol>
                )
            })}
        </ul>
    )
}