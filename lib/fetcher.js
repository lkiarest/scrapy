import request from 'superagent'
import cheerio from 'cheerio'

const url = 'http://www.baidu.com'

const _fetch = () => {
    request.get(url).then(data => {
        let $ = cheerio.load(data.text);
        console.log($('#lg').html());
    })
}

export default _fetch
