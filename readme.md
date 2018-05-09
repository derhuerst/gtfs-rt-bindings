# gtfs-rt-bindings

**Parse and serialize [GTFS Realtime](https://developers.google.com/transit/gtfs-realtime/index).** Updated more frequently than [`gtfs-realtime-bindings`](https://github.com/google/gtfs-realtime-bindings).

[![npm version](https://img.shields.io/npm/v/gtfs-rt-bindings.svg)](https://www.npmjs.com/package/gtfs-rt-bindings)
[![build status](https://img.shields.io/travis/derhuerst/gtfs-rt-bindings.svg)](https://travis-ci.org/derhuerst/gtfs-rt-bindings)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/gtfs-rt-bindings.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install gtfs-rt-bindings
```


## Usage

```js
const Pbf = require('pbf')
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

// serialize
const pbf = new Pbf()
TripUpdate.write(data, pbf)
const buf = pbf.finish()

// parse
const parsedData = TripUpdate.read(new Pbf(buf))
```


## Contributing

If you have a question or have difficulties using `gtfs-rt-bindings`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/gtfs-rt-bindings/issues).
