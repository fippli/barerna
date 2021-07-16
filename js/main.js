

(function () {
  // 'use strict';

  const notImplemented = (_) => { /* Do nothing */ };

  const chain = (value, ...functions) => {
    if (functions.length === 0) {
      return value;
    }
  
    const [next, ...rest] = functions; 
    return chain(next(value), ...rest);
  };
  
  const prepareArguments = (...params) => (func) => func(...params);
  
  const createElement = (element) => document.createElement(element);
  const assignCssClass = (cssClass) => (element) => {
    element.className = cssClass;
    return element;
  };
  
  const appendChild = (child) => (element) => {
    element.appendChild(child);
    return element;
  };
  
  const setText = (text) => (element) => {
    element.appendChild(document.createTextNode(text));
    return element;
  };
  
  const setLink = (link) => (element) => {
    element.href = link;
    element.appendChild(document.createTextNode(link));
    return element;
  };
  
  const assignProps = (props) => element => {
    Object.keys(props)
    .forEach(prop => {
      element[prop] = props[prop];
    })
    return element;
  };

  const setOnClick = (func) => (element) => {
    element.onclick = func;
    return element;
  };

  const createBarSubComponent = (elementType, className, onClick = notImplemented) => (data) => chain(
      elementType,
      createElement,
      assignProps({className}),
      setText(data),
      setOnClick(onClick)
    );
  
  const createTitle = createBarSubComponent('h2', 'bar-title');
  const createTag = createBarSubComponent('button', 'tag', (event) => { updateState({filter: event.target.firstChild.data}) })
  
  const createWebsite = ({website}) => chain(
    'a',
    createElement,
    assignCssClass('bar-website'),
    setLink(website)
  );
  
  const createMap = ({mapUrl}) => appendChild(
    chain(
      'iframe',
      createElement,
      assignProps({
        src: mapUrl,
        width: "600",
        height: "450",
        style: "border:0;",
        allowfullscreen: "",
        loading: "lazy",
        className: "map"
      })
    )
  )(chain('div', createElement, assignProps({className: 'map-wrapper'})));
  
  const createTagList = ({tags}) => {
    const tagList = chain('div', createElement, assignProps({className: 'tag-list-wrapper'}));
    tags.map(createTag)
      .map(appendChild)
      .forEach(prepareArguments(tagList));
    return tagList;
  }
  
  const constructBar = (bar) => chain(
    'div', 
    createElement, 
    assignCssClass('bar-wrapper'),
    appendChild(createTitle(bar.name)),
    appendChild(createWebsite(bar)),
    appendChild(createTagList(bar)),
    appendChild(createMap(bar)),
  );
  
  let state = {};

  const updateState = (update) => {
    state = {...state, ...update};
    render();
  }
  
  const barFilter = (bar) => {
    if (state.filter) {
      return bar.tags.includes(state.filter);
    }
    return true;
  };

  const clearFeed = () => {
    const feed = document.getElementById('bar-feed');
    feed.innerHTML = null;
  }

  const render = () => {
    clearFeed();
    bars.filter(barFilter)
      .map(constructBar)
      .map(appendChild)
      .forEach(prepareArguments(document.getElementById('bar-feed')));
  };

  render();
    
})();

