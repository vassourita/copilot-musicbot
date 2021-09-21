const cheerio = require('cheerio');
const fetch = require('node-fetch');

export async function search(term) {
    const url = `https://www.youtube.com/results?search_query=${term}`;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const video = $('.yt-lockup-title a').first();
    const videoName = video.text();
    const videoUrl = `https://www.youtube.com${video.attr('href')}`;
    return { videoName, videoUrl };
}