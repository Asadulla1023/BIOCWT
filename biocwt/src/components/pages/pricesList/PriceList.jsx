import React from 'react'

import "./PricesList.css"
import { Header } from '../about/Header';
import {Questions} from "../home/questions/Questions"
import { Footer } from '../home/footer/Footer';

import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class PriceList extends Component {
    render() {
        return (
            <div className="head">
                <div className="home">
                    <div className="container">
                        <Header className="header" />
                        <div className="carousel">
                            <h1>Price List</h1>
                            <Carousel>
                                <div className="price">
                                    <div className="priceListsTop">
                                        <div className="priceList1">
                                            <table>
                                                <tr className='row1'>
                                                    <td>délka</td>
                                                    <td>šiřka</td>
                                                    <td>tloustka</td>
                                                </tr>
                                                <tr className="row2">
                                                    <td>buk pr</td>
                                                    <td>1000</td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className='row3'>
                                                    <td>1100</td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className="row3">
                                                    <td>800 </td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className="row3">
                                                    <td>900 </td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="priceList2">
                                            <table>
                                                <tbody>
                                                    <tr className='colRow1'>
                                                        <td>m3</td>
                                                        <td>cena m3</td>
                                                        <td>cena ks.</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,012</td>
                                                        <td>1100</td>
                                                        <td>462</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0132</td>
                                                        <td>1100</td>
                                                        <td>508,2</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0096</td>
                                                        <td>1100</td>
                                                        <td>369,6</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0108</td>
                                                        <td>1100</td>
                                                        <td>415,8</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="priceListsBottom">
                                        <div className="priceList3">
                                            <table>
                                                <tbody>
                                                    <tr className="col2">
                                                        <td>buk cink</td>
                                                        <td>3000</td>
                                                        <td>400</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr className='col3'>
                                                        <td>4000</td>
                                                        <td>300</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr className='col4'>
                                                        <td>4000</td>
                                                        <td>400</td>
                                                        <td>20</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="priceList4">
                                            <tr className='colRow3'>
                                                <td>0,024</td>
                                                <td>1000</td>
                                                <td>840</td>
                                            </tr>
                                            <tr className='colRow3'>
                                                <td>0,024</td>
                                                <td>1000</td>
                                                <td>840</td>
                                            </tr>
                                            <tr className='colRow3'>
                                                <td>0,032</td>
                                                <td>1000</td>
                                                <td>1120</td>
                                            </tr>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">
                                    <div className="priceListsTop">
                                        <div className="priceList1">
                                            <table>
                                                <tr className='row1'>
                                                    <td>délka</td>
                                                    <td>šiřka</td>
                                                    <td>tloustka</td>
                                                </tr>
                                                <tr className="row2">
                                                    <td>buk pr</td>
                                                    <td>1000</td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className='row3'>
                                                    <td>1100</td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className="row3">
                                                    <td>800 </td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className="row3">
                                                    <td>900 </td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="priceList2">
                                            <table>
                                                <tbody>
                                                    <tr className='colRow1'>
                                                        <td>m3</td>
                                                        <td>cena m3</td>
                                                        <td>cena ks.</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,012</td>
                                                        <td>1100</td>
                                                        <td>462</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0132</td>
                                                        <td>1100</td>
                                                        <td>508,2</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0096</td>
                                                        <td>1100</td>
                                                        <td>369,6</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0108</td>
                                                        <td>1100</td>
                                                        <td>415,8</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="priceListsBottom">
                                        <div className="priceList3">
                                            <table>
                                                <tbody>
                                                    <tr className="col2">
                                                        <td>buk cink</td>
                                                        <td>3000</td>
                                                        <td>400</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr className='col3'>
                                                        <td>4000</td>
                                                        <td>300</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr className='col4'>
                                                        <td>4000</td>
                                                        <td>400</td>
                                                        <td>20</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="priceList4">
                                            <tr className='colRow3'>
                                                <td>0,024</td>
                                                <td>1000</td>
                                                <td>840</td>
                                            </tr>
                                            <tr className='colRow3'>
                                                <td>0,024</td>
                                                <td>1000</td>
                                                <td>840</td>
                                            </tr>
                                            <tr className='colRow3'>
                                                <td>0,032</td>
                                                <td>1000</td>
                                                <td>1120</td>
                                            </tr>
                                        </div>
                                    </div>
                                </div>
                                <div className="price">
                                    <div className="priceListsTop">
                                        <div className="priceList1">
                                            <table>
                                                <tr className='row1'>
                                                    <td>délka</td>
                                                    <td>šiřka</td>
                                                    <td>tloustka</td>
                                                </tr>
                                                <tr className="row2">
                                                    <td>buk pr</td>
                                                    <td>1000</td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className='row3'>
                                                    <td>1100</td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className="row3">
                                                    <td>800 </td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                                <tr className="row3">
                                                    <td>900 </td>
                                                    <td>300</td>
                                                    <td>40</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="priceList2">
                                            <table>
                                                <tbody>
                                                    <tr className='colRow1'>
                                                        <td>m3</td>
                                                        <td>cena m3</td>
                                                        <td>cena ks.</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,012</td>
                                                        <td>1100</td>
                                                        <td>462</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0132</td>
                                                        <td>1100</td>
                                                        <td>508,2</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0096</td>
                                                        <td>1100</td>
                                                        <td>369,6</td>
                                                    </tr>
                                                    <tr className='colRow2'>
                                                        <td>0,0108</td>
                                                        <td>1100</td>
                                                        <td>415,8</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="priceListsBottom">
                                        <div className="priceList3">
                                            <table>
                                                <tbody>
                                                    <tr className="col2">
                                                        <td>buk cink</td>
                                                        <td>3000</td>
                                                        <td>400</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr className='col3'>
                                                        <td>4000</td>
                                                        <td>300</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr className='col4'>
                                                        <td>4000</td>
                                                        <td>400</td>
                                                        <td>20</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="priceList4">
                                            <tr className='colRow3'>
                                                <td>0,024</td>
                                                <td>1000</td>
                                                <td>840</td>
                                            </tr>
                                            <tr className='colRow3'>
                                                <td>0,024</td>
                                                <td>1000</td>
                                                <td>840</td>
                                            </tr>
                                            <tr className='colRow3'>
                                                <td>0,032</td>
                                                <td>1000</td>
                                                <td>1120</td>
                                            </tr>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                        <Questions/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}