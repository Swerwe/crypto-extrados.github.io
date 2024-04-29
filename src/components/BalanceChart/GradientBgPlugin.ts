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
        gradientBack.addColorStop(0, '#26167e');
        gradientBack.addColorStop(0.2, '#291e67');
        gradientBack.addColorStop(0.4, '#292154');
        gradientBack.addColorStop(0.7, '#2c2843');
        gradientBack.addColorStop(1, '#25213a');
        ctx.fillStyle = gradientBack;
        ctx.fillRect(0, 0, chart.width, chart.height);
    }
};