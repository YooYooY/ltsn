#!/usr/bin/env node

const pkg = require('../package')
const { query, update } = require('..')

function printResult(v) {
  update(v).then((dists) => {
    const result = query(dists, v)
    console.log(result)
    process.exit()
  })
}

function printVersion() {
  console.log('ltsn ' + pkg.version)
  process.exit()
}

function printHelp(code) {
  const lines = [
    '',
    '  Usage:',
    '    ltsn [8]',
    '',
    '  Options:',
    '    -v, --version             print the version of vc',
    '    -h, --help                display this message',
    '',
    '  Examples:',
    '    $ ltsn 8',
    '',
  ]

  console.log(lines.join('\n'))
  process.exit(code || 0)
}

function main(argv) {
  if (!argv || !argv.length) return printHelp(1)

  // 兼容 ltsn --lts=10
  const getArg = () => {
    let args = argv.shift()
    args = args.split('=')
    if (args.length > 1) {
      argv.unshift(args.slice(1).join('='))
    }
    return args[0]
  }

  let arg

  while (argv.length) {
    arg = getArg()
    switch (arg) {
      case '-v':
      case '-V':
      case '--version':
        printVersion()
        break
      case '-h':
      case '-H':
      case '-help':
        printHelp()
        break
      default:
        printResult(arg)
    }
  }
}

main(process.argv.slice(2))

module.exports = main
