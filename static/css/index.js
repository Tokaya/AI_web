import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#4d2dc3',
    'maxWidth': [{ 'unit': 'px', 'value': 1903 }]
  },
  'navbar': {
    'borderRadius': '0px',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-brand': {
    'height': [{ 'unit': 'px', 'value': 130 }],
    'color': 'white'
  },
  'navbar-default': {
    'backgroundColor': '#4d2dc3',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4d2dc3' }]
  },
  'navbar-default navbar-nav > li > a': {
    'color': 'white',
    'height': [{ 'unit': 'px', 'value': 130 }],
    'lineHeight': [{ 'unit': 'px', 'value': 130 }],
    'borderTop': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4a2dbe' }],
    'screen&&<w768': {
      'color': 'white',
      'height': [{ 'unit': 'px', 'value': 50 }],
      'lineHeight': [{ 'unit': 'px', 'value': 50 }]
    }
  },
  'navbar-default navbar-nav > li > a:hover': {
    'color': 'white',
    'borderTop': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'navbar-default navbar-collapse': {
    'lineHeight': [{ 'unit': 'px', 'value': 130 }]
  },
  'navbar-default navbar-form': {
    'lineHeight': [{ 'unit': 'px', 'value': 130 }]
  },
  'content': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#4d2dc3'
  },
  'content h1': {
    'color': '#fff',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  'title': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 190 }],
    'backgroundColor': '#4d2dc3',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'title div': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'px', 'value': 60 }],
    'color': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'title hr': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'backgroundColor': '#4d2dc3',
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'title2 p': {
    'color': '#fffffb',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontFamily': 'gothma',
    'textAlign': 'center'
  },
  'circle': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'space-around',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'circle div': {
    'width': [{ 'unit': 'px', 'value': 157 }],
    'height': [{ 'unit': 'px', 'value': 157 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50%'
  },
  'SmallTitle': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'display': 'flex',
    'justifyContent': 'space-around'
  },
  'SmallTitle div': {
    'textAlign': 'center',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'title3': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 300 }]
  },
  'title3 h1': {
    'fontSize': [{ 'unit': 'px', 'value': 35 }],
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'title3 p': {
    'fontWeight': '100',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'textAlign': 'center'
  },
  'o': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 929 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'diamond': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 600 }],
    'backgroundColor': '#4608ad',
    'opacity': '0.3',
    'transform': 'skew(-81deg)'
  },
  'footer': {
    'minWidth': [{ 'unit': 'px', 'value': 640 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 320 }],
    'backgroundColor': 'black',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 1213 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2'
  },
  'footer1': {
    'height': [{ 'unit': 'px', 'value': 320 }],
    'backgroundColor': 'black',
    'paddingTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'footer2': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'backgroundColor': 'black',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'footer2 p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#585858',
    'textAlign': 'center'
  }
});
