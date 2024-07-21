type NestedComponentType = {
    title: string
}
export const NestedComponent = (props: NestedComponentType) => {
    return <h2>{props.title}</h2>
}