import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hero Remodeling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hero Remodeling Inc" />
    <p className="details">
          License Number: 
        </p>    
    <p className="details">
          Get free estimate today, 
    get free design today for indoor or outdoor project, 
    get 100% finance with energy efficient products 
    Call today (818) 470-2749 Simon or (818) 859-5873 Yaniv 
  Best in the west no sub contractors 
    a family business from A to Z a top quality for your needs 
        </p>
    
    <p className="details">
          I am almost 20 years at the remodeling construction business, 
    my family most of them born to renovation industry, 
    my mantra is always clinet right and make a clinet happy is my main goal.
Our company will take you from a-z buying all materials needed and provide blue prints design and ideas to make your home a dream. 
    I am always available 364 days a year try us and feel free if any questions contact me directly 
        </p>
    
      </main>
  
      <body>
        <img src="Software.jpg" width="600" height="400"></img>
      </body>

      <Footer />
    </div>

  )
}
