import './style.css'
import Navbar from "../components/navbar";
import * as React from 'react';
import Counter from '../components/counter';
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from '../../redux-config/categorySlice';

function Home() {
    const dispatch = useDispatch();
    const { categoryisLoading, categoryList } = useSelector(state => state.categories)

    React.useEffect(() => { dispatch(fetchCategory()) }, [])
    return (
        <>
            <Navbar />
            <Counter />
            <div>
                <img className='beaner1' src="/images/beaner1.jpg" />
            </div>
            <div className='d-flex'>
                <img className='beaner2' src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/827b697d-155a-4895-92ad-75fbb07ca8a01707154477940-Desktop_Hp_01.jpg" alt="" />
                <img className='beaner3' src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/5/f6857071-a235-49de-a659-1ab08bcd41d11707154477945-Desktop_Hp_02.jpg" alt="" />
            </div>
            <div>
                <img className='beaner4' src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/7fa88863-9515-4688-a21e-d33783c92fe01706788473061-Shop-by-category-----2.jpg" alt="" />
            </div>
            <div className='carts-container container-fluid d-flex flex-wrap justify-content-center' >
                {categoryisLoading && <div className='d-flex justfiy-content-center align-item center'>
                    <h3>LOADING...</h3>
                </div>}
                {!categoryisLoading && categoryList.map((ele, index) =>
                    <div className="card" key={index}>
                        <img src={ele.catImage} className="card-img-top" alt="..." />
                        <div className='cartBody'>
                            <div className='cartText'>{ele.catName}</div>
                            <div className='cardPrice' onClick={() => a()}>50-80% OFF</div>
                            <div className='cartText cartBtn'>Shop Now</div>
                        </div>
                    </div>
                )}
                {/* <div className="card">
                    <img src="/images/cart-img.png" className="card-img-top" alt="..." />
                    <div className='cartBody'>
                        <div className='cartText'>Women's Ethnic Wear</div>
                        <div className='cardPrice' onClick={() => a()}>50-80% OFF</div>
                        <div className='cartText cartBtn'>Shop Now</div>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/cart-img.png" className="card-img-top" alt="..." />
                    <div className='cartBody'>
                        <div className='cartText'>Women's Ethnic Wear</div>
                        <div className='cardPrice' onClick={() => a()}>50-80% OFF</div>
                        <div className='cartText cartBtn'>Shop Now</div>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/cart-img.png" className="card-img-top" alt="..." />
                    <div className='cartBody'>
                        <div className='cartText'>Women's Ethnic Wear</div>
                        <div className='cardPrice' onClick={() => a()}>50-80% OFF</div>
                        <div className='cartText cartBtn'>Shop Now</div>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/cart-img.png" className="card-img-top" alt="..." />
                    <div className='cartBody'>
                        <div className='cartText'>Women's Ethnic Wear</div>
                        <div className='cardPrice' onClick={() => a()}>50-80% OFF</div>
                        <div className='cartText cartBtn'>Shop Now</div>
                    </div>
                </div> */}
            </div>
            <div>
                <img className='beaner5' src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/1/9eb6dcc4-a508-47ce-a6c4-dcfab0c991821706788570836-App-Install-Banner-----3.jpg" alt="" />
            </div>
        </>
    )
}
export default Home;