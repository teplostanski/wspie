# WSpie

🥧 WSpie CLI: a modern, user-friendly WebSocket client for the terminal.
Interactive messaging, colors, authentication, proxy support, ping/pong & more.

> WSpie is a fork of [wscat](https://github.com/websockets/wscat), built to preserve
> its command-line interface and familiar workflows. Use `ws` or `wspie` in place
> of `wscat`. Maintaining backward compatibility with wscat's CLI is a core
> commitment as WSpie adds new features and evolves.

## Why WSpie?

WSpie was created to continue developing the tool as wscat's releases became
infrequent, with two priorities:

- **Regular security maintenance.** Keep dependencies up to date, review
  vulnerability reports, and ship security fixes regularly. Security updates
  are an ongoing part of maintaining the project.
- **A simpler, more capable CLI.** Improve the interface and everyday usability,
  and add useful features while preserving existing command-line options and
  workflows.

## Installation

This module needs to be installed globally so use the `-g` flag when installing:

Requires Node.js `^22.22.2 || ^24.15.0 || >=26.0.0`.

```
pnpm add -g wspie
```

## Usage

Run `ws` or its alias `wspie`. Both commands support the same options.

```
Usage: ws [options] (--listen <port> | --connect <url>)

Options:
  -V, --version                       output the version number
  --auth <username:password>          add basic HTTP authentication header
  --ca <ca>                           specify a Certificate Authority (--connect only)
  --cert <cert>                       specify a Client SSL Certificate (--connect only)
  --host <host>                       optional host
  --key <key>                         specify a Client SSL Certificate's key (--connect only)
  --max-redirects [num]               maximum number of redirects allowed (default: 10)
  --no-color                          run without color
  --passphrase [passphrase]           specify a Client SSL Certificate Key's passphrase (--connect
                                      only). If you don't provide a value, it will be prompted for
  --proxy <[protocol://]host[:port]>  connect via a proxy. Proxy must support CONNECT method
  --slash                             enable slash commands for control frames (/ping [data], /pong
                                      [data], /close [code [, reason]]) (--connect only)
  -c, --connect <url>                 connect to a WebSocket server
  -H, --header <header:value>         set an HTTP header. Repeat to set multiple (--connect only)
                                      (default: [])
  -l, --listen <port>                 listen on port
  -L, --location                      follow redirects
  -n, --no-check                      do not check for unauthorized certificates (--connect only)
  -o, --origin <origin>               optional origin
  -p, --protocol <version>            optional protocol version
  -P, --show-ping-pong                print a notification when a ping or pong is received
                                      (--connect only)
  -s, --subprotocol <protocol>        optional subprotocol. Repeat to specify more than one
                                      (default: [])
  -w, --wait <seconds>                wait given seconds after executing command (-1 to hold open)
  -x, --execute <command>             execute command after connecting. Repeat to execute more than
                                      one (--connect only) (default: [])
  -h, --help                          display help for command
```

## Example

```
$ ws -c wss://websocket-echo.com
Connected (press CTRL+C to quit)
> hi there
< hi there
> are you a happy parrot?
< are you a happy parrot?
```

## License

[MIT](./LICENSE) License © 2026-present [Teplostanski Igor](https://github.com/teplostanski)

Based on [wscat](https://github.com/websockets/wscat), originally developed by
Einar Otto Stangvik, Arnout Kazemier, Luigi Pinca, and contributors.
The original MIT license and copyright notices are preserved in
[LICENSE-WSCAT](./LICENSE-WSCAT).

Inspired by HTTPie's approach to command-line tools. WSpie is an independent
project and is not affiliated with or endorsed by [HTTPie](https://httpie.io).
