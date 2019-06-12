'use strict'

const {FeedMessage} = require('.')

const data = {
	header: {
		gtfs_realtime_version: '2.0',
		incrementality: 0,
		timestamp: 1528624800
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

const buf = FeedMessage.encode(data)
console.log(buf)

const parsedData = FeedMessage.decode(buf)
console.log(parsedData)
