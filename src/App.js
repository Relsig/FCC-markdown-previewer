import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

const marked = require('marked');
marked.setOptions({
  gfm: true,
  breaks: true
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      markdown: 
      '# h1 header\n'+
      '## h2 header\n' +
      '[I\'m a link!](www.google.com)\n'+
      '![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n' +
      '\`inline code\`\n' +
      '\`\`\`\ncode block\n\`\`\`\n' +
      '1. a list item\n' +
      '**some bold text**\n' +
      '>a block quote\n'
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  };

  updateMarkdown (props) {
    this.setState({markdown: props});
  }

  render() {
    let {markdown} = this.state;
    return (
      <div className="App container">
      <div>
        <FormGroup controlId="formControlsTextarea">
          <FormLabel>
            Markdown Input
          </FormLabel>
          <FormControl id="editor" as="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}/>
        </FormGroup>
      </div>
      <div>
        <h1>Markdown Output</h1>
        <div id="preview" dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
