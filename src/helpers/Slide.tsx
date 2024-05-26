import { ElementType, PropsWithChildren } from "react"

export function Slide({
  children,
  ...rest
}: PropsWithChildren<{ className?: string }>) {
  return <section {...rest}>{children}</section>
}

export function ShinyTitle({ title }: { title: string }) {
  return (
    <Slide
      data-background-image="chest.png"
      data-background-size="50%"
      data-background-position="center 75%"
      data-transition="slide-up"
    >
      <h2>{title}</h2>
    </Slide>
  )
}

export function InverseTitle({ children }: PropsWithChildren<any>) {
  return (
    <Slide
      data-background="linear-gradient(var(--primary-colour), #00acd8)"
      data-transition="fade"
    >
      <div className="inverse">{children}</div>
    </Slide>
  )
}

type Props = {
  as?: ElementType
  className?: string
  index?: number
  style?: any
}

export function Fragment({
  as = "div",
  className,
  index,
  style,
  children,
}: PropsWithChildren<Props>) {
  const As = as
  return typeof index === "number" ? (
    <As
      className={"fragment " + (className ?? "")}
      data-fragment-index={index}
      style={style}
    >
      {children}
    </As>
  ) : (
    <As className={"fragment " + (className ?? "")} style={style}>
      {children}
    </As>
  )
}

export function Notes({ children }: PropsWithChildren<any>) {
  return <aside className="notes">{children}</aside>
}
