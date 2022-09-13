const searchEngine = require('../caso1e2/searchEngine');

//define the url in which the test will do the search
const baseurl = 'https://www.olx.com.br/';

describe('test olx searching engine', () => {
    it('test valid search input and take a screenshot', (done) => {
        searchEngine.go_to_url(baseurl);

        searchEngine.enter_search('marea turbo');

        searchEngine.take_screenshot('valid-research-image.jpg')

        setTimeout(function(){
            done();
        }, 45000);
    });

    it('test invalid search input take a screenshot', (done) => {
        searchEngine.go_to_url(baseurl);

        searchEngine.enter_search('!!!???###');

        searchEngine.take_screenshot('invalid-research-image.jpg')

        searchEngine.close_window();

        done();
    });
})

  