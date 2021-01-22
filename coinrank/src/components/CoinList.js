import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './Coinlist.module.scss';

const Coinlist = (props) => {
    const data = props.coinlist
    return (
        <Table className={styles.table} responsive>
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
                        <td>{index + 1}</td>
                        <td key={index}>{coin.name}</td>
                        <td key={index}>{coin.hour}</td>
                        <td key={index}>{coin.day}</td>
                        <td key={index}>{coin.month}</td>
                        <td key={index}>${coin.Volume}</td>
                        <td key={index}>${coin.MarketCap}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Coinlist;


