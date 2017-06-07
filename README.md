# timeout

Option-less GNU `timeout` implementation

## Installation

```bash
npm install -g timeout
```

## Usage

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
