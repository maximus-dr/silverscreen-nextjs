const fs = require('fs');
const path = require('path');


export default function handler(req, res) {
    const templatesPath = path.join(process.cwd(), 'db/templates/templates.json');

    if (req.method === 'GET') {
        const templates = fs.readFileSync(templatesPath, 'utf8');
        res.status(200).json(templates);
    }

    if (req.method === 'POST') {
        const template = req.body.template;
        const {category, name} = template;
        const newTemplate = {...template.data, name};

        const templatesJSON = fs.readFileSync(templatesPath, 'utf8');
        const templates = [...JSON.parse(templatesJSON)];

        const index = templates.findIndex(item => item.category === category.trim());

        if (index !== -1) {
            templates[index].templates.push(newTemplate);
        }
        if (index === -1) {
            templates.push({
                category,
                templates: [newTemplate]
            });
        }
        fs.writeFileSync(templatesPath, JSON.stringify(templates));
        res.status(200).json(templates);
    }
}
