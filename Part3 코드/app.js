// let ajax = new XMLHttpRequest();
const NEWS_URL = `https://api.hnpwa.com/v0/news/1.json`;
const CONTENT_URL = `https://api.hnpwa.com/v0/item/@id.json`;

const ajax = new XMLHttpRequest();
const container = document.getElementById(`root`);
const content = document.createElement(`div`);

const getData = (url) => 
{
    ajax.open(`GET`, url, false);
    ajax.send();
    
    return JSON.parse(ajax.response);
};

// ajax.open(`GET`, NEWS_URL, false);
// ajax.send();

// console.log(ajax.response);

// const newsFeed = JSON.parse(ajax.response);
const newsFeed = getData(NEWS_URL);
const ul = document.createElement(`ul`);

// console.log(newsFeed);

window.addEventListener(`hashchange`, () => 
{
    // console.log(`해시가 변경됨`);
    // console.log(location.hash);

    const id = location.hash.substr(1);

    // ajax.open(`GET`, CONTENT_URL.replace(`@id`, id), false);
    // ajax.send();

    // const newsContent = JSON.parse(ajax.response);
    const newsContent = getData(CONTENT_URL.replace(`@id`, id));
    const title = document.createElement(`h1`);

    title.innerHTML = newsContent.title;
    content.appendChild(title);

    // console.log(newsContent);
});

for (let i = 0; i < 10; i++)
{
    const div = document.createElement(`div`);
    // const li = document.createElement(`li`);
    // const a = document.createElement(`a`);

    // <li><a>title</a></li>

    div.innerHTML = 
    `
    <li>
        <a href="#${newsFeed[i].id}">
            ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
    </li>
    `

    // a.href = `#${newsFeed[i].id}`;
    // a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;

    // a.addEventListener(`click`, () => {});

    // li.appendChild(a);
    // ul.appendChild(li);
    // ul.appendChild(div.children[0]);

    ul.appendChild(div.firstElementChild);
}

// document.getElementById(`root`).appendChild(ul);
// document.getElementById(`root`).appendChild(content);

container.appendChild(ul);
container.appendChild(content);
