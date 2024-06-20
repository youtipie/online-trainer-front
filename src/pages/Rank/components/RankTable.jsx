import React from 'react';
import "./rankTable.css"


const RankTable = () => {
    return (
        <table cellSpacing="0" className="rank-table">
            <thead>
            <tr className="content-container light rank-row">
                <th className="rank-column header rank">
                    <p>Ранг</p>
                </th>
                <th className="rank-column pfp">
                </th>
                <th className="rank-column header name">
                    <p>Ім'я</p>
                </th>
                <th className="rank-column header score">
                    <p>Бали</p>
                </th>
            </tr>
            </thead>
            <tbody className="rank-table">
            <tr className="rank-row">
                <td className="rank-column rank top top1">
                    <p>1</p>
                </td>
                <td className="rank-column pfp top">
                    <div className="rank-pfp-placeholder"></div>
                </td>
                <td className="rank-column name top top1">
                    <p>Рак 1</p>
                </td>
                <td className="rank-column score top">
                    <p>10000000 бал</p>
                </td>
            </tr>
            <tr className="rank-row">
                <td className="rank-column rank top top2">
                    <p>2</p>
                </td>
                <td className="rank-column pfp top">
                    <div className="rank-pfp-placeholder"></div>
                </td>
                <td className="rank-column name top top2">
                    <p>Рак 2</p>
                </td>
                <td className="rank-column score top">
                    <p>10000000 бал</p>
                </td>
            </tr>
            <tr className="rank-row">
                <td className="rank-column rank top top3">
                    <p>3</p>
                </td>
                <td className="rank-column pfp top">
                    <div className="rank-pfp-placeholder"></div>
                </td>
                <td className="rank-column name top top3">
                    <p>Рак 3</p>
                </td>
                <td className="rank-column score top">
                    <p>10000000 бал</p>
                </td>
            </tr>
            <tr className="rank-row">
                <td className="rank-column rank">
                    <p>4</p>
                </td>
                <td className="rank-column name" colSpan="2">
                    <p>Рак 4</p>
                </td>
                <td className="rank-column score">
                    <p>10000 бал</p>
                </td>
            </tr>
            <tr className="rank-row">
                <td className="rank-column rank">
                    <p>5</p>
                </td>
                <td className="rank-column name" colSpan="2">
                    <p>Рак 5</p>
                </td>
                <td className="rank-column score">
                    <p>1000 бал</p>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default RankTable;