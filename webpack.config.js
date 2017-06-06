var webpack = require('webpack');

module.exports = {
    entry : [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      './app/app.jsx'
    ],

    externals: {
      jquery: 'jQuery'
    },

    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '$': 'jQuery'
      })
    ],

    output : {
      path: __dirname,
      filename: './public/bundle.js'
    },

    resolve: {
    modules: [__dirname, 'node_modules'],
      alias: {
        Main: 'app/components/Main.jsx',
        NavBar : 'app/components/NavBar.jsx',
        Weather : 'app/components/Weather.jsx',
        WeatherForm : 'app/components/WeatherForm.jsx',
        WeatherMessage : 'app/components/WeatherMessage.jsx',
        About : 'app/components/About.jsx',
        Examples : 'app/components/Examples.jsx',
        openWeatherMap: 'app/api/openWeatherMap.jsx'
      },

      extensions: [ '.js', '.jsx', ' ']
    },

//start module
    module: {
      loaders : [
        {
          loader: 'babel-loader',
          query: {
            presets : ['react', 'es2015', 'stage-0']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
    //end Module
};
