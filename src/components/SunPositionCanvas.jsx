import React, { useEffect } from "react";

const SunPositionCanvas = () => {
    useEffect(() => {
        const canvas = document.getElementById("sunCanvas");
        if (canvas.getContext) {
            const ctx = canvas.getContext("2d");

            // Define the ellipse parameters
            const centerX = 200;
            const centerY = 150;
            const radiusX = 150;
            const radiusY = 130;
            const startAngle = Math.PI;
            const endAngle = 2 * Math.PI;
            const rotation = 0;

            // Position for the single disk at 3am
            const angleAt3am = startAngle + (endAngle - startAngle) * 3 / 4; // Adjust for 3am position

            // Draw the left part of the elliptical arc (orange and bold)
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, angleAt3am);
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 3; // Set line width to be bolder
            ctx.stroke();

            // Draw the right part of the elliptical arc (original color)
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, angleAt3am, endAngle);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 1; // Reset line width for the original part
            ctx.stroke();

            // Calculate disk position
            const diskX = centerX + radiusX * Math.cos(angleAt3am);
            const diskY = centerY + radiusY * Math.sin(angleAt3am);
            const diskRadius = 8;

            // Draw the single disk
            ctx.beginPath();
            ctx.arc(diskX, diskY, diskRadius, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow";
            ctx.fill();

            // Calculate and draw the ring around the disk
            const ringWidth = diskRadius * 0.3; // 15% of the disk's diameter
            ctx.beginPath();
            ctx.arc(diskX, diskY, diskRadius + ringWidth / 2, 0, 2 * Math.PI);
            ctx.strokeStyle = "rgba(255, 255, 0, 0.5)"; // Same color as the disk with 50% opacity
            ctx.lineWidth = ringWidth;
            ctx.stroke();
        }
    }, []);

    return (
        <canvas id="sunCanvas" width="400" height="150"></canvas>
    );
};

export default SunPositionCanvas;
