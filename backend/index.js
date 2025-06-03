/**
 * File: backend/index.js
 *
 * Minimal Express server for Mathle backend.
 * - Uses CORS to allow cross-origin requests from frontend.
 * - Reads PORT from environment (Render will set this automatically).
 * - Exposes a simple /health route to confirm deployment.
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// === CONFIGURE CORS ===
// For now, allow all origins. 
// In production, replace "*" with your Netlify URL (e.g. "https://your-netlify-site.netlify.app").
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parse JSON bodies (e.g., for future /guess endpoint).
app.use(express.json());

// === HEALTHCHECK ROUTE ===
app.get("/health", (req, res) => {
  return res.status(200).json({ status: "ok", message: "Mathle backend is up." });
});

// === START SERVER ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mathle backend listening on port ${PORT}`);
});
