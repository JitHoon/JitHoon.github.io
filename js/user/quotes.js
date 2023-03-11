const quotes = [
    {
        quote: "Still waters run deep",
        author: "- 어떤 회원님's pick 속담 -",
    },
    {
        quote: "스터디 멈춰",
        author: "- 최지훈 회원님 -",
    },
    {
        quote: "더운데 부채질 좀 해주세요",
        author: "- 박종성 회원님 -",
    },
    /*
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney -",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "- John Lennon -",
    },
    {
        quote:
        "The world is a book and those who do not travel read only one page.",
        author: "- Saint Augustine -",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "- Helen Keller -",
    },
    {
        quote: "To Travel is to Live",
        author: "- Hans Christian Andersen -",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "- Albert Einstein -",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "- Mae West -",
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "- Hemmingway -",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "- Hilaire Belloc -",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "- Sheda Savage -",
    }
    */
];

const q = document.querySelector("#quote__content");
const a = document.querySelector("#quote__name");

const todayQuote = Math.floor(Math.random()*quotes.length);

q.innerText = quotes[todayQuote].quote;
a.innerText = quotes[todayQuote].author;