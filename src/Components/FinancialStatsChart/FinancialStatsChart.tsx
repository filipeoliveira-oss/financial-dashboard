import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { useContext, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../Contexts/ThemeContext";
import './FinancialStatsChart.css'
import getProfit from "../../Utils/Functions/getProfit";

export default function FinancialStatsChart(props:{selectedYear:string}) {
    const { ThemeColor } = useContext(ThemeContext);
    const {t} = useTranslation()
    function getTextColor() {
        var selectedTheme = localStorage.getItem("@theme");
        if (selectedTheme == "light") {
            return "#000000";
        }
        if (selectedTheme == "dark") {
            return "#ffffff";
        }
        if (selectedTheme == "system") {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                return "#ffffff";
            } else {
                return "#000000";
            }
        }
    }

    //Graph constructor
    useLayoutEffect(() => {
        /* Chart code */

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        let root = am5.Root.new("chartdiv");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        //Defining Colors
        root.interfaceColors.set("text", am5.color(getTextColor() as string));

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                // panX: true,
                // panY: true,
                // wheelX: "panX",
                // wheelY: "zoomX",
                // pinchZoomX: true,
                paddingLeft: 0,
            })
        );

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set(
            "cursor",
            am5xy.XYCursor.new(root, {
                behavior: "none",
            })
        );
        cursor.lineY.set("visible", false);
        cursor.lineX.set("visible", false);

        //======================================= DELETE AFTER IMPLEMENTATION - Is Creating Data Only=============================================
        // Generate random data
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        let value = 100;

        function generateData() {
            value = Math.round(Math.random() * 10 - 5 + value);
            am5.time.add(date, "day", 1);
            return {
                date: date.getTime(),
                value: value,
            };
        }

        function generateDatas(count: number) {
            let data = [];
            for (var i = 0; i < count; ++i) {
                data.push(generateData());
            }
            return data;
        }

        // const results = [{month:'1', value:'1'},{month:'2', value:'2'},{month:'3', value:'3'},{month:'4', value:'4'},{month:'5', value:'5'},
        // {month:'6', value:'6'},{month:'7', value:'7'},{month:'8', value:'8'},{month:'9', value:'9'},{month:'10', value:'10'},{month:'11', value:'11'},{month:'12', value:'12'},]

        //======================================= DELETE AFTER IMPLEMENTATION - Is Creating Data Only=============================================

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.5,
                baseInterval: {
                    timeUnit: "day",
                    count: 1,
                },
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 80,
                    minorGridEnabled: true,
                    pan: "none",
                }),
                tooltip: am5.Tooltip.new(root, {}),
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 1,
                visible: false,
                renderer: am5xy.AxisRendererY.new(root, {
                    pan: "none",
                    visible: false,
                }),
            })
        );

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}",
                }),
                fill: am5.color(ThemeColor),
                stroke: am5.color(ThemeColor),
            })
        );

        series.fills.template.setAll({
            visible: true,
            fillOpacity: 0.5,
        });

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationY: 0,
                sprite: am5.Circle.new(root, {
                    radius: 4,
                    stroke: root.interfaceColors.get("background"),
                    strokeWidth: 2,
                    fill: series.get("fill"),
                }),
            });
        });

        // Add scrollbar
        // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
        // chart.set("scrollbarX", am5.Scrollbar.new(root, {
        //   orientation: "horizontal"
        // }));

        let data = generateDatas(50);
        series.data.setAll(data);

        
        // console.log(data)

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);



        return () => {
            root.dispose();
        };
    }, [ThemeColor]);

    return (
        <>
            <div className="holdinds-financialStats">
                <h1 className="holdinds-financialStats-text">{t('carteira.estatisticas')}</h1>
                <h1 className="holdinds-financialStats-text">{getProfit({year: props.selectedYear}).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</h1>
                <h3 className="holdinds-financialStats-text">{t('carteira.meta')} 100.000</h3>
            </div>
            <div id="chartdiv" style={{ width: "500px", height: "300px" }}></div>
        </>
    );
}
