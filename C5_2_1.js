const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.DOMParser = new JSDOM().window.DOMParser

const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");

const data = [];

studentNode.forEach((item) => {
    const nameNode = item.querySelector("name");
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");
    const nameFirstNode = nameNode.querySelector("first");
    const nameSecondNode = nameNode.querySelector("second");
    const langAttr = nameNode.getAttribute("lang");

    data.push({
        name: nameFirstNode.textContent + ' ' + nameSecondNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    });

});


// for (let item = 0; item < studentNode.length; item+= 1) {
//     const nameNode = studentNode[item].querySelector("name");
//     const ageNode = studentNode[item].querySelector("age");
//     const profNode = studentNode[item].querySelector("prof");
//     const nameFirstNode = nameNode.querySelector("first");
//     const nameSecondNode = nameNode.querySelector("second");
//     const langAttr = nameNode.getAttribute("lang");
//
//     data.push({
//         name: nameFirstNode.textContent + ' ' + nameSecondNode.textContent,
//         age: Number(ageNode.textContent),
//         prof: profNode.textContent,
//         lang: langAttr,
//     });
//
// };


const result = {
    'list': data
};

console.log('result', result);
