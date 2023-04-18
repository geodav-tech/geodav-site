var model
var map
var names = ['car']

tf.loadGraphModel('./best_web_model/model.json').then((m) => {
	model = m
	initMap()
})

function initMap() {
	// Initialize the map and assign it to a variable for later use
	// there's a few ways to declare a VARIABLE in javascript.
	// you might also see people declaring variables using `const` and `let`
	map = L.map('map', {
		// Set latitude and longitude of the map center (required)
		center: [40.51107887624347, -111.89120762050155],
		// Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
		zoom: 20,
	})

    var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWdkNzIyIiwiYSI6ImNsYms4NGx6aDFjb2szcG8zZGE1ZWc3YXQifQ.QqgUp1QjQ532KNh3SQw29A'
    var esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

	// Create a Tile Layer and add it to the map
	let tiles = new L.tileLayer(
        // mapbox,
		esri,
		{
			maxZoom: 20,
			crossOrigin: 'anonymous',
		}
	).addTo(map)

	//add the tileload event directly to that variable
	tiles.on('tileload', function (e) {
        if (e.coords.z > 18) {
            handleTileLoad(e)
        }
	})
}

function handleTileLoad(event) {
	let [modelWidth, modelHeight] = model.inputs[0].shape.slice(1, 3)
	const input = tf.tidy(() => {
		return tf.image
			.resizeBilinear(tf.browser.fromPixels(event.tile), [modelWidth, modelHeight])
			.div(255.0)
			.expandDims(0)
	})

	let tileBounds = boundsFromTile(event.coords.z, event.coords.x, event.coords.y)
	// "minLat": 39.09276546806873,
	// "maxLat": 39.0930319292927,
	// "minLng": -108.60088348388672,
	// "maxLng": -108.60054016113281

	model.executeAsync(input).then((res) => {
		const [boxes, scores, classes, valid_detections] = res
		const boxes_data = boxes.dataSync()
		const scores_data = scores.dataSync()
		const classes_data = classes.dataSync()
		const valid_detections_data = valid_detections.dataSync()[0]

		tf.dispose(res)

		var i
		for (i = 0; i < valid_detections_data; ++i) {
			const score = scores_data[i].toFixed(2) * 100

            if (score > 40) {
                const height = tileBounds.maxLat - tileBounds.minLat
                const width = tileBounds.maxLng - tileBounds.minLng

                let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4)
                x1 = (x1 * width) + tileBounds.minLng
                x2 = (x2 * width) + tileBounds.minLng
                y1 = tileBounds.maxLat - (y1 * height)
                y2 = tileBounds.maxLat - (y2 * height)
                
                var coords = [
                                [y1, x1],
                                [y1, x2],
                                [y2, x2],
                                [y2, x1],
                            ]

                const klass = names[classes_data[i]]

                L.polygon(coords).bindPopup(`${klass}: ${score}%`).addTo(map)
            }
		}
	})
}
