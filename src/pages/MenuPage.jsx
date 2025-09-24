import "../MenuPage.css";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg"
export default function MenuPage() {
    return (
        <>
            {/* part 1 */}
            <div className="favourits1">
                <h1 className="favouritstext1">MENU</h1>
            </div>
            <div className="gridcol2">
                <h1 className="h2">BRAKFAST</h1>
                <div className="menuparent">
                    <div className="menudiv1">
                        <img src={menu1} alt="menu1" className="img" />
                    </div>
                    <div class="menudiv2">
                        <div className="menuarea">
                            <p className="mfont1">English Breakfast</p>
                            <p className="mfont2">smoked bacon, sausage, tomato, mushrooms, blak pudding, daked
                                beans, eggs</p>
                            <p className="mfont3">$ 11</p>
                        </div>
                        <div className="menuarea">
                            <p className="mfont1">Avocado Toast</p>
                            <p className="mfont2">poached eggs, avocado, onion, tomatos, bread</p>
                            <p className="mfont3">$ 8</p>
                        </div>
                        <div className="menuarea">
                            <p className="mfont1">Burritp</p>
                            <p className="mfont2">tortilla, egg cheese, potatoes, pork meat</p>
                            <p className="mfont3">$ 11</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* part 2 */}
            <div className="gridcol">
                <h1 className="h1">LUNCH</h1>
                <div className="menuparent1">
                    <div className="menudiv3">
                        <div className="menuarea1">
                            <p className="mfont4">Caesar Salad</p>
                            <p className="mfont5">chicken breast, romaine lettuce, croutons, parmesan</p>
                            <p className="mfont6">$ 15</p>
                        </div>
                        <div className="menuarea1">
                            <p className="mfont4">Spaghetti Carbonara</p>
                            <p className="mfont5">spaghetti, pancetta, garlic, eggs, parmesan, pepper</p>
                            <p className="mfont6">$ 14</p>
                        </div>
                        <div className="menuarea1">
                            <p className="mfont4">Pizza</p>
                            <p className="mfont5">chorizo, italian salami, tomatoes, mushrooms, olives</p>
                            <p className="mfont6">$ 12</p>
                        </div>
                    </div>
                    <div class="menudiv4">
                        <img src={menu2} alt="menu2" className="img" />
                    </div>
                </div>
            </div>
            {/* part 3 */}
            <div className="gridcol2">
                <h1 className="h2">DINNER</h1>
                <div className="menuparent">
                    <div className="menudiv1">
                        <img src={menu3} alt="menu3" className="img" />
                    </div>
                    <div class="menudiv2">
                        <div className="menuarea">
                            <p className="mfont1">Spicy Beef</p>
                            <p className="mfont2">spicy beef, potatoes, carrots, cheese sauce, spices</p>
                            <p className="mfont3">$ 17</p>
                        </div>
                        <div className="menuarea">
                            <p className="mfont1">Spaghetti Bolognese</p>
                            <p className="mfont2">onion, carrot, celery, minced meat, spaghetti, parmesan</p>
                            <p className="mfont3">$ 15</p>
                        </div>
                        <div className="menuarea">
                            <p className="mfont1">Chickpea Curry</p>
                            <p className="mfont2">onion, chickpea, garlic, mushrooms, tomatoes, spices</p>
                            <p className="mfont3">$ 12</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* part 4 */}
            <div className="gridcol">
                <h1 className="h1">DESSERT</h1>
                <div className="menuparent1">
                    <div className="menudiv3">
                        <div className="menuarea1">
                            <p className="mfont4">Lemon Cake</p>
                            <p className="mfont5">flour, sugar, baking powder, lemon</p>
                            <p className="mfont6">$ 9</p>
                        </div>
                        <div className="menuarea1">
                            <p className="mfont4">Cinnamon Rolls</p>
                            <p className="mfont5">flour, salt, sugar, cinnamon, yeast, sour cream, milk</p>
                            <p className="mfont6">$ 11</p>
                        </div>
                        <div className="menuarea1">
                            <p className="mfont4">Vegan Pancakes</p>
                            <p className="mfont5">flour, sugar, baking powder, soya milk, blueberries</p>
                            <p className="mfont6">$ 8</p>
                        </div>
                    </div>
                    <div class="menudiv4">
                        <img src={menu4} alt="menu4" className="img" />
                    </div>
                </div>
            </div>

        </>
    )
};