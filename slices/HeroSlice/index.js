import RichText from '@/components/RichText'
import CustomLink from '@/components/CustomLink'
import { PrismicNextImage } from '@prismicio/next'

const HeroSlice = ({ slice }) => (
  <section className='section relative bg-black'>
    <div className='absolute inset-0'>
      <PrismicNextImage field={slice?.primary?.image} layout='fill' objectFit='cover' />
      <div className='absolute inset-0 bg-black bg-opacity-75  mix-blend-multiply' />
    </div>
    <div className='container relative py-48'>
      <RichText field={slice.primary.title} className='text-2xl text-white font-bold' />
      <RichText field={slice.primary.description} className='text-white' />
      <div>
        {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className='mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium uppercase'
          />
        ))}
      </div>
    </div>
  </section>
)

export default HeroSlice
