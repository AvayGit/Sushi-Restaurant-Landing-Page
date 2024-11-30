const HeroSection=() => {
    return (
    <main className="hero container">
        <div className="Hero-content">
            <h1>YOUR MOUTH DESERVES THE BEST</h1>
            <p>
            Our goal is to continue to contribute the idea of the Mandarin Oriental, which is to combine both Oriental and Occidental. Our service style is to promote and show that we Love our costumers as if they were part of our family. 
            </p>
            
            
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Fillings</button>
            </div>
            
            <div className="shopping">
                <p>
                    Also available on
                </p>
                
                <div className="brand-icons">
                    <img src="./logo2.svg" alt="ShopLogo1" />
                    <img src="./logo3.svg" alt="ShopLogo2" />
                </div>
            </div>    
         </div>
<div className="hero-image">
<img src="/SushiImage/sushinew.jpg" alt="Sushi" />
</div>
</main>
);
};

export default HeroSection