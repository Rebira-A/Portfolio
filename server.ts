import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log(`[CONTACT SYSTEM] Protocol Initiated for ${name} <${email}>`);
    console.log(`[CONTACT SYSTEM] Target: rebikman9@gmail.com`);
    console.log(`[CONTACT SYSTEM] Content: ${message}`);
    
    // Simulation logic
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: "Logic received. Deployment of reply scheduled in the neural buffer.",
        debug: "Simulated email captured. In production, this would use Resend or SendGrid SDK."
      });
    }, 1500);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
