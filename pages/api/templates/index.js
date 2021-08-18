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

        const category = 'label';
        const templateName = 'default';

        const newTemplate = {...template, name: templateName};

        const templatesData = fs.readFileSync(templatesPath, 'utf8');
        const templates = JSON.parse(templatesData);



        const templatesCopy = {...templates};

        if (templatesCopy[category]) {
            templatesCopy[category].templatesList.push(newTemplate);
        }
        fs.writeFileSync(templatesPath, JSON.stringify(templatesCopy));

        res.status(200).json(templatesCopy);
    }
}
