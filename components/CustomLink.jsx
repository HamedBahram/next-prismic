import { PrismicLink } from '@prismicio/react'

const CustomLink = ({ link, text, className }) => {
  return (
    <PrismicLink field={link}>
      <div className={className}>{text}</div>
    </PrismicLink>
  )
}

export default CustomLink
