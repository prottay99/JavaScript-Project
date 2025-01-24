function createElementWithClass(tag, className, innerHTML = '') {
    let element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
}

// insert thumb class in class left
let thumb = createElementWithClass('div', 'thumb', `<img src="thumb.jpg" alt="thumb">`);
document.querySelector('.left').append(thumb);

// insert duration class in class left
let duration = createElementWithClass('div', 'duration', '31:20');
document.querySelector('.left').append(duration);

// insert thumb-heading class in class right
let rightHeading = createElementWithClass('div', 'thumb-heading', `<a href="#">Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1</a>`);
document.querySelector('.right').append(rightHeading);

// insert thumb-info class in class right
let thumbInfo = createElementWithClass('div', 'thumb-info')
document.querySelector('.right').append(thumbInfo)

// insert list items in thumb-info
let viewCount = '727k views';
let postDate = '5 months ago';
let chName = 'CodeWithHarry';

let listItems = [
    { 'className': 'channal-name', 'content': `<a href="#">${chName}</a>` },
    { 'className': 'view', 'content': `<span>${viewCount}</span>` },
    { 'className': 'time', 'content': `<span>${postDate}</span>` },
]

listItems.forEach(item => {
    let listItem = createElementWithClass('div', item.className, item.content);
    document.querySelector('.thumb-info').append(listItem);
})