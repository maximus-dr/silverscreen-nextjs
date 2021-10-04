const fs = require('fs');
const path = require('path');

export default function handler (req, res) {
  const previewPath = path.join(process.cwd(), 'db/preview/preview.json');

  if (req.method === 'POST') {
    const page = req.body.page;
    fs.writeFileSync(previewPath, JSON.stringify(page));
    res.status(200).json(page);
  }
}