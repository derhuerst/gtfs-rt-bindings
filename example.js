'use strict'

const Pbf = require('pbf')

const {FeedMessage} = require('.')

const data = {
	header: {
		gtfs_realtime_version: '1.0'
	},
	entity: [{
		id: 'trip-update-1',
		trip_update: {
			trip: {
				trip_id: 'trip-1',
				route_id: 'route-1'
			},
			stop_time_update: [{
				stop_sequence: 3,
				arrival: {delay: 30}
			}]
		}
	}]
}

// serialize
const pbf1 = new Pbf()
FeedMessage.write(data, pbf1)
const buf = pbf1.finish()

// parse
const pbf2 = new Pbf(buf)
const parsedData = FeedMessage.read(pbf2)

console.log(parsedData)
