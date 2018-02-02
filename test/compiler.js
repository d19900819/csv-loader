import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';
import loader from '../lib/index.js'
export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.csv$/,
        use: {
          loader: path.resolve(__dirname, '../lib/index.js'),
          options: {
            name: 'Alice'
          }
        }
      }]
    }
  });
  compiler.outputFileSystem = new memoryfs();
  console.log(loader)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
}
