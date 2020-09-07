// section 19.55 create build
  const currentTask = process.env.npm_lifecycle_event
  const path = require('path')
  const {CleanWebpackPlugin}= require('clean-webpack-plugin')
 //i am using the X as test name
  const MiniCssExtractPluginX =  require('mini-css-extract-plugin')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const fse = require('fs-extra')
  
  
  const postCSSPlugins =[
   require("postcss-import"),
   require("postcss-mixins"),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer'),
  
 ]
 class RunAfterCompile {
	 apply(compiler){
		compiler.hooks.done.tap('Copy images',function(){
	// name was dist but for github use docs in line:
			fse.copySync('./app/assets/images','./docs/assets/images')
			
		   }) 
	 }
	 
 }
 
// seciotn 19.55 create build 
 let cssConfig = 	      {
		  test: /\.css$/i,
// original but it does not video
		  use: ['css-loader?url=false',{loader: 'postcss-loader',options: {plugins: postCSSPlugins}}]
 //this matches video	
 //               use: ['css-loader',{loader: 'postcss-loader',options: //{plugins: postCSSPlugins}}] 
	      }
  let pages = fse.readdirSync("./app").filter(function(file){
	  return file.endsWith('.html')
  }).map(function(page){
	  return new HtmlWebpackPlugin({
		  filename: page,
		  template: `./app/${page}`
	  })
  })
  
//this is the shared items used by both dev and config:
 let config = {
   entry: './app/assets/scripts/App.js',	
//sec 19.58 dding fs-extra:  plugins: [new HtmlWebpackPlugin({filename: 'index.html',template: './app/index.html'})],
   plugins: pages,
   
   module: {
	   rules: [
              cssConfig 
	   ]
   }   
	 
 }
 
 if (currentTask =='dev') {
	cssConfig.use.unshift('style-loader') 
	 
	config.output  = {
	   filename: 'bundled.js',
	   path: path.resolve(__dirname,'app')
        } 
	  
	config.devServer =  {
	before: function(app,server) {
		server._watch('./app/**/*.html');
		
	},
	contentBase: path.join(__dirname,'app'),
      hot:true,
	port: 8080,
	host: '0.0.0.0'
      },
	config.mode = "development"

 }
 
 
 if (currentTask =='build') {
	config.module.rules.push({
		test: /\.js$/,
            exclude: /(node_modules)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
			
		}
	})
	
	cssConfig.use.unshift(MiniCssExtractPluginX.loader) 
	postCSSPlugins.push(require('cssnano')) 
	config.output = { 
//	 filename: 'bundled.js',
       filename:  '[name].[chunkhash].js',
	 chunkFilename: '[name].[chunkhash].js',
   // for github change dist to docs
	 path: path.resolve(__dirname,'docs')
      }
      config.mode = "production"
	config.optimization = {
		splitChunks: { chunks: 'all'}
	}
	config.plugins.push(
	   new CleanWebpackPlugin(), 
	   new MiniCssExtractPluginX({filename:'styles.[chunkhash].css'}),
	   new RunAfterCompile()
	   )
	
 }
module.exports = config