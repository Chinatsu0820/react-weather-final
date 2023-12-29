import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import CardDetailComponent from "./CardDetail.jsx";
import MainCard from "./MainCard.jsx";
import search_icon from "../imgs/search.png";
import clear_icon from "../imgs/clear.png";
import cloud_icon from "../imgs/cloud.png";
import drizzle_icon from "../imgs/drizzle.png";
import rain_icon from "../imgs/rain.png";
import snow_icon from "../imgs/snow.png";

// WeatherAppのための関数コンポーネント
const WeatherApp = () => {
    // OpenWeatherMap APIキー
    let api_key = "7a73f546e23472cce6023cba32b7b261";

    // 天気データと選択された天気アイコンを保存するState
    const [data, setData] = useState(null);
    

    // ユーザーの入力を処理し、天気データを取得する関数
    const search = async () => {
        // 入力エレメントを取得
        const element = document.getElementsByClassName("cityInput");

        // 入力が空かどうかを確認
        if (element[0].value === "") {
            alert("Please enter a city name");
            element[0].value = "";
            return;
        }

        // ユーザーの入力を使用してAPI URLを構築
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        // APIから天気データを取得
        let response = await fetch(url);
        let newData = await response.json();
        setData(newData);

        // APIレスポンスでエラーが発生したか確認
        if (!response.ok) {
            alert("City not found. Please enter a valid city name.");
            element[0].value = "";
            return;
        }

        
    };

    // WeatherAppコンポーネントのJSX構造
    return (
        <div>
            <div className="main-container">
                <div className="container">
                    <div className="searchBar">
                        {/* 都市名のための入力フィールド */}
                        <input type="text" className="cityInput search-inside" placeholder="enter a city name" />
                        {/* 検索関数をトリガーするボタン */}
                        <button className="search-button" onClick={search}>
                            <img className="search-icon" src={search_icon} alt="search" />
                        </button>
                    </div>

                    <div className="card-container-1">
                        {/* データが利用可能な場合、MainCardとCardDetailComponentを表示 */}
                        {data && (
                            <>
                                <MainCard data={data} className="main-card" />
                                <CardDetailComponent data={data} className="second-card" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// WeatherAppコンポーネントをデフォルトエクスポート
export default WeatherApp;
