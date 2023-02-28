import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXUSNÁ DOVOLENKA LEN PRE DVE OSOBY!</h2>
                    <p>Príďte zažiť vrchol luxusnej karibskej all inclusive dovolenieky pre páry do Sandals Resorts. Naše luxusné plážové rezorty, rozmiestnené pozdĺž najkrajších tropických prostredí a nádherných pláží na Svätej Lucii, Jamajke, Antigue, Bahamách, Grenade, Barbadose a Curaçau, ponúkajú neobmedzené gurmánske stolovanie, jedinečné bary ponúkajúce prémiové likéry a vína. Šport vrátane našich golfových rezortov a potápania s certifikátom PADI vo väčšine rezortov. Ak plánujete svadbu, rezort Sandals je lídrom v karibských destináciách pre svadby a medové týždne.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>ZARUČENÁ KVALITA</h3>
                                <p>ALL-INCLUSIVE SPOLOČNOSŤ UŽ 20 ROKOV</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NIKTO NEPONÚKA VIAC A LEPŠIE AKO MY</h3>
                                <p>100% GARANCIA VRÁTENIA PEŇAZÍ</p>
                                <button>Pozrieť ponuku</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">ZÍSKAJTE 15% ZĽAVU </h4>
                        <p className="timer">AKCIA PLATÍ UŽ LEN DNES!</p>
                        <p className="offers">POZRITE SI AKTUÁLNU PONUKU</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destinácie</label>
                            <select>
                                <option value="1">Maldives</option>
                                <option value="1">Nižná Polianka</option>
                                <option value="1">Domaša</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Príchod</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Odchod</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Vyhľadaj dostupnosť </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
