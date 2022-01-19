const convertDataToHtml = (blocks) => {
    blocks.map(block => {
        let convertedHtml = "";
        switch (block.type) {
            case "header":
                convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
                break;
            case "Embed":
                convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
                break;
            case "paragraph":
                convertedHtml += `<p>${block.data.text}</p>`;
                break;
            case "image":
                convertedHtml += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
                break;
            case "graph":
                convertedHtml += `<img class="img-fluid" src="${block.data.file.url}"/>`;
                break;
            case "linkTool":
                convertedHtml += `<a href="${block.data.link}"/>`;
                break;
            case "checklist":
                block.data.items.forEach(function (li) {
                    convertedHtml += `<li>${li.text}</li>`;
                });;
                break;
            case "list":
                convertedHtml += "<ul>";
                block.data.items.forEach(function (li) {
                    convertedHtml += `<li>${li}</li>`;
                });
                convertedHtml += "</ul>";
                break;
            case "drawer":
                console.log('Drawer')
                break;
            case "table":
                convertedHtml += `
                <table border=1 cellpadding=10 style="border-collapse:collapse">
                ${block.data.content.map((row, index) => {
                    if (block.data.withHeadings) {
                        if (index === 0) {
                            return `<tr>${row.map(item => {
                                return `<th>${item}</th>`
                            }).join('')}</tr>`
                        } else {
                            return `<tr>${row.map(item => {
                                return `<td>${item}</td>`
                            }).join('')}</tr>`
                        }
                    } else {
                        return `<tr>${row.map(item => {
                            return `<td>${item}</td>`
                        }).join('')}</tr>`
                    }
                }).join('')}
                </table>
                `
                break;
            default:
                console.log("Unknown block type", block.type);
                break;
        }
        console.log(convertedHtml)
        return convertedHtml;
    });
}

export { convertDataToHtml }