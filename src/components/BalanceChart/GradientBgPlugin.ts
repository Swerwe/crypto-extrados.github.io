import type {Chart} from "chart.js";
export const GradientBgPlugin = {
    id: "gradient-plugin",
    beforeDraw: function (chart: Chart) {
        const ctx = chart.ctx;
        const canvas = chart.canvas;
        const chartArea = chart.chartArea;
        if (canvas === null) return; 
        const context = canvas.getContext("2d");
        if (context === null) return;
        const gradientBack = context.createLinearGradient(0, canvas.height, canvas.width, 0);
        gradientBack.addColorStop(0, '#d199ff');
        gradientBack.addColorStop(0.2, '#3f2a95');
        gradientBack.addColorStop(0.4, '#2b206b');
        gradientBack.addColorStop(0.7, '#212143');
        gradientBack.addColorStop(1, '#221f3b');
        ctx.fillStyle = gradientBack;
        ctx.fillRect(chartArea.left, chartArea.bottom,
            chartArea.right - chartArea.left, chartArea.top - chartArea.bottom);
    }
};