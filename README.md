# timeout

[![Greenkeeper badge](https://badges.greenkeeper.io/nkbt/timeout.svg)](https://greenkeeper.io/)

Option-less GNU `timeout` implementation

## CLI Installation

```bash
npm install -g timeout
```

## CLI Usage

```bash
timeout DURATION COMMAND
```


## Examples

```bash
13:31 $ timeout 1 sleep 4
✘-1 

13:32 $ timeout 2 sleep 1
✔
```
