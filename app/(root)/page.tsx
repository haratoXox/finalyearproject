import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    
   <main style={{ backgroundImage: "url('/assets/images/background.jpg')", backgroundSize: 'cover', backgroundRepeat: 'repeat' }}>
    <section className='bg-primary-50 bg.dotted-pattern bg.contain
    py-5 md:py-10'
    >
      <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2
      2x1:gap-0'>
        <div className='flex flex-col justify-center gap-8'>
          <h1 className='h1-bold' style={{color:'#0d1b2a'}}>
          Elevate your events at KRMangalam College – where every moment shines.
          </h1>
          <p className='p-regular-20 md:p-regular-24' style={{color:'#'}}>Book and Learn helpful tips from best teacher of our collage</p>
          <Button size="lg" asChild className='button w-full sm:w-fit'>
            <Link href="#events">
              Explore Now
            </Link>
          </Button>
        </div>
        <Image
          src="/assets/images/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className='max-h-[70vh] object-contain object-center2x1:max-h[500vh]'
          />
          
      </div>
    </section>

    <section id="event" className='wrapper my-8 flex flex-col gap-8 md:gap-12'></section>
      <h2 className='h2-bold '>
            Trust By <br /> Thousands of Event
      </h2>
      <div className='flex w-full flex-col gap-5 md:flex-row'>
        Search
        catagarios
      </div>
   </main>
  ) 
}
