import React from 'react';
import './App.css';
import MenuButton from './components/MenuButton.js';
import Product from "./components/Product";
import Tile from "./components/Tile";

import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <MenuButton
                    name="to the collection"
                />
                <MenuButton
                    name="shop all bags"
                />
                <MenuButton
                    disable={true}
                    name="pre-orders"
                />
            </nav>
            <main>
                <Product
                    label="Best seller"
                    image={bag_1}
                    title="The handy bag"
                    price="€400,-"
                />
                <Product
                    label="Best seller"
                    image={bag_2}
                    title="The stylish bag"
                    price="€250,-"
                />
                <Product
                    label="New collection"
                    image={bag_3}
                    title="The simple bag"
                    price="€300,-"
                />
                <Product
                    label="New collection"
                    image={bag_4}
                    title="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile
                    title="THE BRAND"
                    text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, incidunt, modi? Assumenda at in iusto perferendis possimus, reprehenderit sapiente vitae."
                    text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt dolor fugiat harum hic magnam minima officia perferendis qui tempore?"
                />
                <Tile
                    image={brand}
                    alternative="brand"
                />
                <Tile
                    image={ourStory}
                    alternative="our story"
                />
                <Tile
                    title="OUR STORY"
                    text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt et laudantium minima neque numquam sunt! Ab aliquam dolore dolorem eius eum illo, impedit odit officia ratione sapiente tenetur, ut!"
                />
            </footer>
        </>
    );
}

export default App;



