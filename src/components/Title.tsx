interface Props {
    children: string
}

const Title = ({ children }: Props) => {
  return (
    <h1 className="title">{children}</h1>
  )
}

export default Title