import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getAllPosts, getCarouselSlides } from '../lib/api';
import BlockContent from '@sanity/block-content-to-react';
import Navbar from 'components/Navbar';
import Author from 'components/Author';
import CardItem from 'components/CardItem';
import CardList from 'components/CardList';
import FilteringMenu from 'components/FilteringMenu';
import { useState } from 'react';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Home({ posts, slides }) {
  //console.log(slides[0].imageSlides);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  //console.log(posts);
  //debugger;

  const [filter, setFilter] = useState({
    view: { list: 1 },
  });

  return (
    <>
      {slides[0].imageSlides.map((slide) => (
        <div>
          <Image
            loader={myLoader}
            src={slide.asset.url}
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </div>
      ))}
      <Head>
        <title>Home App</title>
      </Head>

      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide1'>1</div>
        <div className='keen-slider__slide number-slide2'>2</div>
        <div className='keen-slider__slide number-slide3'>3</div>
        <div className='keen-slider__slide number-slide4'>4</div>
        <div className='keen-slider__slide number-slide5'>5</div>
        <div className='keen-slider__slide number-slide6'>6</div>
      </div>

      <div className='container'>
        {/* <Author /> */}
        <FilteringMenu onChange={() => {}} />
        <hr />
        <CardList posts={posts} filterState={filter} />
        {/* <ul>
          {posts.map((post) => (
            <li className='text-3xl font-bold' key={post.slug}>
              {post.title}
            </li>
          ))}
        </ul> */}
        <h2>Latest Articles</h2>
      </div>
    </>
  );
}

// it will be called during build time
// it will be called on server and provides props to the page
// it will create static pages
export async function getStaticProps() {
  const posts = await getAllPosts();
  const slides = await getCarouselSlides();
  return {
    props: {
      posts,
      slides,
    },
  };
}
