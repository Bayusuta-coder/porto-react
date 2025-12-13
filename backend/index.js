import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Buat __dirname di ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Path absolut untuk uploads dan data.json
const uploadsFolder = path.join(__dirname, "uploads");
const dataFile = path.join(__dirname, "data.json");

// Pastikan folder uploads ada
if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadsFolder)); // supaya foto bisa diakses

// Setup multer untuk upload foto
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// GET semua client
app.get("/clients", (req, res) => {
  if (!fs.existsSync(dataFile)) {
    // Kalau data.json belum ada, buat file kosong
    fs.writeFileSync(dataFile, JSON.stringify([]));
  }

  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(JSON.parse(data));
  });
});

// POST client baru
app.post("/clients", upload.single("img"), (req, res) => {
  const { nama, job, comment } = req.body;
  const img = req.file ? `/uploads/${req.file.filename}` : null;

  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
  }

  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: err.message });

    let clients = [];
    try {
      clients = JSON.parse(data);
    } catch {
      clients = [];
    }

    const newClient = {
      id: clients.length + 1,
      nama,
      job,
      comment,
      img,
    };

    clients.push(newClient);

    fs.writeFile(dataFile, JSON.stringify(clients, null, 2), (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(newClient);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
