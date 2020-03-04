const {
  FuseBox,
  Sparky,
  SassPlugin,
  WebIndexPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  QuantumPlugin,
} = require('fuse-box')
const { src, task, watch, context, fuse } = require('fuse-box/sparky')

context(
  class {
    getConfig(isProduction) {
      return FuseBox.init({
        homeDir: 'src',
        output: 'public/$name.js',
        hash: isProduction,
        sourceMaps: true,
        target: 'browser',
        plugins: [
          WebIndexPlugin({
            template: 'src/index.html',
          }),
          [
            SassPlugin(),
            CSSResourcePlugin({
              dist: 'public/css-resources',
            }),
            CSSPlugin(),
          ],
          isProduction &&
            QuantumPlugin({
              bakeApiIntoBundle: 'app',
              uglify: true,
              css: { clean: true },
              extendServerImport: true,
            }),
        ],
      })
    }
    createBundle(fuse, isProduction) {
      const app = fuse.bundle('app')
      if (!isProduction) {
        app.watch()
        app.hmr()
      }
      app.instructions('>index.tsx')
      return app
    }
  }
)

task('default', async context => {
  const fuse = context.getConfig()
  fuse.dev()
  context.createBundle(fuse)
  await fuse.run()
})

task('dist', async context => {
  const fuse = context.getConfig({ isProduction: true })
  context.createBundle(fuse, { isProduction: true })
  await fuse.run()
})
