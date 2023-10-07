// pages/index.js
import React from 'react';
import Image from 'next/image';
const Home = () => {
  return (
    <div>
      <header>
        <h1>My Website</h1>
      </header>

      <nav>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./resume">Resume</a></li>
        </ul>
      </nav>

          {/* <Image id='awoooga' src={"/aaa.png"} width={800} height={400} style={{width:'100%', maxHeight:'40vw'}} alt='me'/> */}
      <main>
        <section>
          <h2>About Me</h2>
          <p id='aboutme'>Hi
          I am Taruni Kharia of PES University!</p>
        </section>
      </main>


      <footer>
      </footer>
    </div>
  );
};

export default Home;
