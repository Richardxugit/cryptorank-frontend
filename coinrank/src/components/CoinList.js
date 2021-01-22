import React from 'react';
import styles from './Coinlist.module.scss';

const Coinlist = (props) => {
    const data = props.coinlist
    return (
        <div className={styles.center}>
            <h2>Cryptocurrency Prices by Market Cap</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coin</th>
                        <th>24hour</th>
                        <th>7day</th>
                        <th>1month</th>
                        <th>24hour Volume</th>
                        <th>Mkt Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((coin, index) => (
                        <tr>
                            <td >{index + 1}</td>
                            <td >{coin.name}</td>
                            <td >{coin.hour}</td>
                            <td >{coin.day}</td>
                            <td >{coin.month}</td>
                            <td >${coin.Volume}</td>
                            <td>${coin.MarketCap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Coinlist;


