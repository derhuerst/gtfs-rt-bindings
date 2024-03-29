'use strict'

const test = require('tape')

const {FeedMessage} = require('.')
const schema = require('./gtfs-realtime.schema.json')

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

test('round trip', (t) => {
	FeedMessage.verify(data)
	const buf = FeedMessage.encode(data).finish()
	const parsed = FeedMessage.toObject(FeedMessage.decode(buf))

	// todo: find a tool for this
	t.ok(parsed)
	t.ok(parsed.header)
	t.equal(parsed.header.gtfs_realtime_version, data.header.gtfs_realtime_version)

	t.ok(Array.isArray(parsed.entity))
	const e1 = parsed.entity[0]
	const e2 = data.entity[0]
	t.equal(e1.id, e2.id)

	t.ok(e1.trip_update)
	const t1 = e1.trip_update.trip
	const t2 = e2.trip_update.trip
	t.ok(t1)
	t.equal(t1.trip_id, t2.trip_id)
	t.equal(t1.route_id, t2.route_id)

	t.ok(Array.isArray(e1.trip_update.stop_time_update))
	const u1 = e1.trip_update.stop_time_update[0]
	const u2 = e2.trip_update.stop_time_update[0]
	t.ok(u1)
	t.equal(u1.stop_sequence, u2.stop_sequence)
	t.ok(u1.arrival)
	t.equal(u1.arrival.delay, u2.arrival.delay)

	t.end()
})

test('JSON schema looks ok', (t) => {
	t.ok(schema)
	t.ok(schema.nested)
	t.ok(schema.nested.transit_realtime)
	t.ok(schema.nested.transit_realtime.nested)
	t.ok(schema.nested.transit_realtime.nested.FeedMessage)
	t.end()
})
