# gtfs-rt-bindings

**Parse and serialize [GTFS Realtime](https://developers.google.com/transit/gtfs-realtime/index).** Updated more frequently than [`gtfs-realtime-bindings`](https://github.com/google/gtfs-realtime-bindings).

[![npm version](https://img.shields.io/npm/v/gtfs-rt-bindings.svg)](https://www.npmjs.com/package/gtfs-rt-bindings)
[![build status](https://img.shields.io/travis/derhuerst/gtfs-rt-bindings.svg)](https://travis-ci.org/derhuerst/gtfs-rt-bindings)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/gtfs-rt-bindings.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install gtfs-rt-bindings
```


## Usage

```js
const {TripUpdate} = require('gtfs-rt-bindings')

const data = {
	trip: {
		trip_id: 'trip-1',
		route_id: 'route-1'
	},
	stop_time_update: [{
		stop_sequence: 3,
		arrival: {delay: 30}
	}]
}


const buf = TripUpdate.encode(data)
console.log(buf)

const parsedData = TripUpdate.decode(buf)
console.log(parsedData)
```


## Contributing

If you have a question or have difficulties using `gtfs-rt-bindings`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/gtfs-rt-bindings/issues).
