// https://github.com/chriswhong/map-tile-functions/blob/master/boundsFromTile.js

function boundsFromTile(z, x, y) {
	var bounds = _tileBounds(z, x, y)
	mins = _metersToLatLng(bounds[0])
	maxs = _metersToLatLng(bounds[1])

	bounds = {
		minLat: mins[1],
		maxLat: maxs[1],
		minLng: mins[0],
		maxLng: maxs[0],
	}

	return bounds
}

function _metersToLatLng(coord) {
	lng = (coord[0] / ((2 * Math.PI * 6378137) / 2.0)) * 180.0

	lat = (coord[1] / ((2 * Math.PI * 6378137) / 2.0)) * 180.0
	lat = (180 / Math.PI) * (2 * Math.atan(Math.exp((lat * Math.PI) / 180.0)) - Math.PI / 2.0)

	return [lng, lat]
}

function _tileBounds(z, x, y) {
	var mins = _pixelsToMeters(z, x * 256, (y + 1) * 256)
	var maxs = _pixelsToMeters(z, (x + 1) * 256, y * 256)

	return [mins, maxs]
}

function _pixelsToMeters(z, x, y) {
	var res = (2 * Math.PI * 6378137) / 256 / Math.pow(2, z)
	mx = x * res - (2 * Math.PI * 6378137) / 2.0
	my = y * res - (2 * Math.PI * 6378137) / 2.0
	my = -my
	return [mx, my]
}
